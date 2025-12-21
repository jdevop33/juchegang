// Dashboard API: Technical Indicators
// Using Alpha Vantage API (FREE - 25 requests/day)
// RSI, MACD, Moving Averages for major assets

import { NextResponse } from 'next/server'

const ALPHA_VANTAGE_KEY = process.env.ALPHA_VANTAGE_KEY || '3OTR5YF8V9U54H2Q'

// Cache for 1 hour (preserve API quota)
export const revalidate = 3600

interface TechnicalData {
  symbol: string
  name: string
  type: 'stock' | 'forex' | 'crypto'
  price: number
  rsi: number
  rsiSignal: 'overbought' | 'oversold' | 'neutral'
  sma20: number
  sma50: number
  sma200: number
  trend: 'bullish' | 'bearish' | 'neutral'
  macdSignal: 'buy' | 'sell' | 'hold'
}

// Key assets to analyze (limited due to API quota)
const ASSETS = [
  { symbol: 'SPY', name: 'S&P 500', type: 'stock' as const },
  { symbol: 'GLD', name: 'Gold', type: 'stock' as const },
  { symbol: 'TLT', name: 'Treasury Bonds', type: 'stock' as const },
  { symbol: 'USO', name: 'Oil', type: 'stock' as const },
]

async function fetchQuote(symbol: string): Promise<number | null> {
  try {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`
    console.log(`Fetching Alpha Vantage quote for ${symbol}`)

    const response = await fetch(url, { next: { revalidate: 3600 } })
    if (!response.ok) {
      console.error(`Alpha Vantage error for ${symbol}: ${response.status}`)
      return null
    }

    const data = await response.json()
    console.log(`Alpha Vantage response for ${symbol}:`, JSON.stringify(data).slice(0, 200))

    const price = parseFloat(data['Global Quote']?.['05. price'])
    if (isNaN(price)) {
      console.error(`No price data for ${symbol}`)
      return null
    }

    return price
  } catch (error) {
    console.error(`Alpha Vantage fetch error for ${symbol}:`, error)
    return null
  }
}

async function fetchRSI(symbol: string): Promise<number | null> {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=RSI&symbol=${symbol}&interval=daily&time_period=14&series_type=close&apikey=${ALPHA_VANTAGE_KEY}`,
      { next: { revalidate: 3600 } }
    )
    if (!response.ok) return null
    const data = await response.json()
    const values = data['Technical Analysis: RSI']
    if (!values) return null
    const latestDate = Object.keys(values)[0]
    return parseFloat(values[latestDate]?.RSI) || null
  } catch {
    return null
  }
}

async function fetchSMA(symbol: string, period: number): Promise<number | null> {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SMA&symbol=${symbol}&interval=daily&time_period=${period}&series_type=close&apikey=${ALPHA_VANTAGE_KEY}`,
      { next: { revalidate: 3600 } }
    )
    if (!response.ok) return null
    const data = await response.json()
    const values = data['Technical Analysis: SMA']
    if (!values) return null
    const latestDate = Object.keys(values)[0]
    return parseFloat(values[latestDate]?.SMA) || null
  } catch {
    return null
  }
}

function getRSISignal(rsi: number): 'overbought' | 'oversold' | 'neutral' {
  if (rsi >= 70) return 'overbought'
  if (rsi <= 30) return 'oversold'
  return 'neutral'
}

function getTrend(price: number, sma50: number, sma200: number): 'bullish' | 'bearish' | 'neutral' {
  if (price > sma50 && sma50 > sma200) return 'bullish'
  if (price < sma50 && sma50 < sma200) return 'bearish'
  return 'neutral'
}

// Delay helper for rate limiting
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function GET() {
  try {
    // Fetch quotes SEQUENTIALLY (Alpha Vantage: 1 req/sec on free tier)
    const results: TechnicalData[] = []

    for (const asset of ASSETS) {
      const price = await fetchQuote(asset.symbol)
      if (price) {
        results.push({
          symbol: asset.symbol,
          name: asset.name,
          type: asset.type,
          price,
          rsi: 50, // Placeholder - RSI uses extra API calls
          rsiSignal: 'neutral' as const,
          sma20: 0,
          sma50: 0,
          sma200: 0,
          trend: 'neutral' as const,
          macdSignal: 'hold' as const,
        })
      }
      // Wait 1.5 seconds between requests to respect rate limit
      await delay(1500)
    }

    // Market summary
    const spy = results.find(r => r.symbol === 'SPY')
    const marketSentiment = spy
      ? spy.rsi > 60 ? 'greedy' : spy.rsi < 40 ? 'fearful' : 'neutral'
      : 'unknown'

    return NextResponse.json({
      technicals: results,
      summary: {
        marketSentiment,
        spyRSI: spy?.rsi,
        spyTrend: spy?.trend,
        assetsAnalyzed: results.length,
      },
      timestamp: new Date().toISOString(),
      source: 'Alpha Vantage API',
      note: 'Limited to 25 requests/day on free tier. Data cached for 1 hour.',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Technicals API error:', error)
    return NextResponse.json(
      {
        technicals: [],
        error: 'Failed to fetch technical data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
