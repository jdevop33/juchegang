// Dashboard API: Markets (Commodities & Currencies)
// Using Exchange Rates Data API (APILayer) for FX + API Ninjas for commodities
// NO MOCK DATA - REAL APIs ONLY

import { NextResponse } from 'next/server'
import { CommodityData, CurrencyPair, TrendDirection } from '@/types/dashboard'

const API_NINJAS_KEY = process.env.API_NINJAS_KEY || 'mHBzbxJnIQV9owM9qgj5Wg==TCvlEv90tJ4CadWw'
const EXCHANGE_RATES_API_KEY = process.env.EXCHANGE_RATES_API_KEY || 'yO6XjqCkj3GgGSq8uyLjfXELXs87mhTj'

// Cache for 1 minute
export const revalidate = 60

// Commodities to track
const COMMODITIES = [
  { name: 'Gold', symbol: 'gold', unit: '$/oz' },
  { name: 'Silver', symbol: 'silver', unit: '$/oz' },
  { name: 'Crude Oil (WTI)', symbol: 'wti_crude', unit: '$/bbl' },
  { name: 'Brent Crude', symbol: 'brent_crude', unit: '$/bbl' },
  { name: 'Natural Gas', symbol: 'natural_gas', unit: '$/MMBtu' },
  { name: 'Copper', symbol: 'copper', unit: '$/lb' },
  { name: 'Platinum', symbol: 'platinum', unit: '$/oz' },
  { name: 'Palladium', symbol: 'palladium', unit: '$/oz' },
  { name: 'Wheat', symbol: 'wheat', unit: '$/bu' },
  { name: 'Corn', symbol: 'corn', unit: '$/bu' },
]

// Currency symbols to fetch (all vs USD base)
const CURRENCY_SYMBOLS = [
  'EUR', 'CNY', 'JPY', 'GBP', 'CHF', 'AED', 'SAR', 'SGD',
  'KRW', 'RUB', 'INR', 'BRL', 'AUD', 'CAD', 'NOK', 'SEK',
  'HKD', 'NZD', 'MXN', 'ZAR', 'TRY', 'THB', 'MYR', 'PHP'
]

// Store previous day's rates for real change calculation
let cachedYesterdayRates: Record<string, number> | null = null
let cachedYesterdayDate: string | null = null

async function fetchCommodityPrice(symbol: string): Promise<{ price: number; updated: number } | null> {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/commodityprice?name=${symbol}`,
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      console.error(`Commodity API error for ${symbol}: ${response.status}`)
      return null
    }

    const data = await response.json()
    return {
      price: parseFloat(data.price) || 0,
      updated: data.updated || Date.now() / 1000,
    }
  } catch (error) {
    console.error(`Commodity fetch error for ${symbol}:`, error)
    return null
  }
}

// Fetch all exchange rates in ONE API call (efficient)
async function fetchAllExchangeRates(): Promise<Record<string, number> | null> {
  try {
    const symbols = CURRENCY_SYMBOLS.join(',')
    const response = await fetch(
      `https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=${symbols}`,
      {
        headers: { 'apikey': EXCHANGE_RATES_API_KEY },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      console.error(`Exchange rates API error: ${response.status}`)
      return null
    }

    const data = await response.json()
    if (!data.success) {
      console.error('Exchange rates API failed:', data.error)
      return null
    }

    return data.rates
  } catch (error) {
    console.error('Exchange rates fetch error:', error)
    return null
  }
}

// Fetch yesterday's rates for real change calculation
async function fetchYesterdayRates(): Promise<Record<string, number> | null> {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const dateStr = yesterday.toISOString().split('T')[0]

  // Use cached if same day
  if (cachedYesterdayDate === dateStr && cachedYesterdayRates) {
    return cachedYesterdayRates
  }

  try {
    const symbols = CURRENCY_SYMBOLS.join(',')
    const response = await fetch(
      `https://api.apilayer.com/exchangerates_data/${dateStr}?base=USD&symbols=${symbols}`,
      {
        headers: { 'apikey': EXCHANGE_RATES_API_KEY },
        next: { revalidate: 3600 }, // Cache historical for 1 hour
      }
    )

    if (!response.ok) return null

    const data = await response.json()
    if (!data.success) return null

    cachedYesterdayRates = data.rates
    cachedYesterdayDate = dateStr
    return data.rates
  } catch {
    return null
  }
}

function getTrend(change: number): TrendDirection {
  if (change > 0.01) return 'up'
  if (change < -0.01) return 'down'
  return 'neutral'
}

// Store commodity previous prices for real change tracking
const commodityHistory: Record<string, { price: number; timestamp: number }> = {}

export async function GET() {
  try {
    const now = new Date()

    // Fetch all data in parallel - REAL APIs only
    const [commodityResults, currentRates, yesterdayRates] = await Promise.all([
      Promise.all(COMMODITIES.map(async (commodity) => {
        const data = await fetchCommodityPrice(commodity.symbol)
        return { commodity, data }
      })),
      fetchAllExchangeRates(),
      fetchYesterdayRates(),
    ])

    // Process commodities with real change tracking
    const commodities: CommodityData[] = commodityResults
      .filter(r => r.data !== null)
      .map(({ commodity, data }) => {
        const prev = commodityHistory[commodity.symbol]
        const change = prev ? data!.price - prev.price : 0
        const changePercent = prev && prev.price ? (change / prev.price) * 100 : 0

        // Update history
        commodityHistory[commodity.symbol] = { price: data!.price, timestamp: Date.now() }

        return {
          name: commodity.name,
          symbol: commodity.symbol,
          price: data!.price,
          unit: commodity.unit,
          change: Number(change.toFixed(2)),
          changePercent: Number(changePercent.toFixed(2)),
          trend: getTrend(changePercent),
          timestamp: now,
        }
      })

    // Process currencies with REAL yesterday comparison
    const currencies: CurrencyPair[] = currentRates
      ? CURRENCY_SYMBOLS.map(symbol => {
          const rate = currentRates[symbol]
          if (!rate) return null

          const yesterdayRate = yesterdayRates?.[symbol] || rate
          const change = rate - yesterdayRate
          const changePercent = yesterdayRate ? (change / yesterdayRate) * 100 : 0

          return {
            base: 'USD',
            quote: symbol,
            rate: Number(rate.toFixed(6)),
            change: Number(change.toFixed(6)),
            changePercent: Number(changePercent.toFixed(2)),
            trend: getTrend(changePercent),
            timestamp: now,
          }
        }).filter(Boolean) as CurrencyPair[]
      : []

    return NextResponse.json({
      commodities,
      currencies,
      timestamp: now.toISOString(),
      sources: {
        commodities: 'API Ninjas (real-time)',
        currencies: 'Exchange Rates Data API (APILayer)',
      },
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (error) {
    console.error('Markets API error:', error)
    return NextResponse.json(
      {
        commodities: [],
        currencies: [],
        error: 'Failed to fetch market data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
