// Dashboard API: Markets (Commodities & Currencies)
// Using API Ninjas for commodity prices and exchange rates

import { NextResponse } from 'next/server'
import { CommodityData, CurrencyPair, TrendDirection } from '@/types/dashboard'

const API_NINJAS_KEY = process.env.API_NINJAS_KEY || 'mHBzbxJnIQV9owM9qgj5Wg==TCvlEv90tJ4CadWw'

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

// Currency pairs to track (focused on SWF-relevant currencies)
const CURRENCY_PAIRS = [
  { base: 'USD', quote: 'EUR' },
  { base: 'USD', quote: 'CNY' },
  { base: 'USD', quote: 'JPY' },
  { base: 'USD', quote: 'GBP' },
  { base: 'USD', quote: 'CHF' },
  { base: 'USD', quote: 'AED' },
  { base: 'USD', quote: 'SAR' },
  { base: 'USD', quote: 'SGD' },
  { base: 'USD', quote: 'KRW' },
  { base: 'USD', quote: 'RUB' },
  { base: 'USD', quote: 'INR' },
  { base: 'USD', quote: 'BRL' },
  { base: 'EUR', quote: 'GBP' },
  { base: 'EUR', quote: 'CHF' },
  { base: 'EUR', quote: 'JPY' },
]

async function fetchCommodityPrice(symbol: string): Promise<{ price: number; updated: number } | null> {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/commodityprice?name=${symbol}`,
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) return null

    const data = await response.json()
    return {
      price: parseFloat(data.price) || 0,
      updated: data.updated || Date.now() / 1000,
    }
  } catch {
    return null
  }
}

async function fetchExchangeRate(base: string, quote: string): Promise<number | null> {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/exchangerate?pair=${base}_${quote}`,
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) return null

    const data = await response.json()
    return data.exchange_rate || null
  } catch {
    return null
  }
}

function getTrend(change: number): TrendDirection {
  if (change > 0.01) return 'up'
  if (change < -0.01) return 'down'
  return 'neutral'
}

// Simulated previous prices for change calculation (would be replaced with real historical data)
const previousPrices: Record<string, number> = {}

export async function GET() {
  try {
    const now = new Date()

    // Fetch commodity prices in parallel
    const commodityPromises = COMMODITIES.map(async (commodity) => {
      const data = await fetchCommodityPrice(commodity.symbol)
      if (!data) return null

      // Calculate change (simulated for demo - would use real historical data)
      const prevPrice = previousPrices[commodity.symbol] || data.price * (1 - (Math.random() - 0.5) * 0.02)
      previousPrices[commodity.symbol] = data.price

      const change = data.price - prevPrice
      const changePercent = prevPrice ? (change / prevPrice) * 100 : 0

      return {
        name: commodity.name,
        symbol: commodity.symbol,
        price: data.price,
        unit: commodity.unit,
        change: Number(change.toFixed(2)),
        changePercent: Number(changePercent.toFixed(2)),
        trend: getTrend(changePercent),
        timestamp: now,
      } as CommodityData
    })

    // Fetch currency rates in parallel
    const currencyPromises = CURRENCY_PAIRS.map(async (pair) => {
      const rate = await fetchExchangeRate(pair.base, pair.quote)
      if (!rate) return null

      const pairKey = `${pair.base}_${pair.quote}`
      const prevRate = previousPrices[pairKey] || rate * (1 - (Math.random() - 0.5) * 0.005)
      previousPrices[pairKey] = rate

      const change = rate - prevRate
      const changePercent = prevRate ? (change / prevRate) * 100 : 0

      return {
        base: pair.base,
        quote: pair.quote,
        rate: Number(rate.toFixed(4)),
        change: Number(change.toFixed(4)),
        changePercent: Number(changePercent.toFixed(2)),
        trend: getTrend(changePercent),
        timestamp: now,
      } as CurrencyPair
    })

    const [commodities, currencies] = await Promise.all([
      Promise.all(commodityPromises),
      Promise.all(currencyPromises),
    ])

    return NextResponse.json({
      commodities: commodities.filter(Boolean),
      currencies: currencies.filter(Boolean),
      timestamp: now.toISOString(),
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
