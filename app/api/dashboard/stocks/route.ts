// Dashboard API: Stock Indices & ESG Scores
// Using Finnhub API (FREE tier)
// Real-time stock data + ESG scores for edge factors

import { NextResponse } from 'next/server'
import { TrendDirection } from '@/types/dashboard'

const FINNHUB_KEY = process.env.FINNHUB_KEY || 'd53sqlpr01qkplh182s0d53sqlpr01qkplh182sg'

// Cache for 1 minute
export const revalidate = 60

// Major indices and ETFs to track
const SYMBOLS = {
  indices: [
    { symbol: 'SPY', name: 'S&P 500', type: 'index' },
    { symbol: 'QQQ', name: 'Nasdaq 100', type: 'index' },
    { symbol: 'DIA', name: 'Dow Jones', type: 'index' },
    { symbol: 'IWM', name: 'Russell 2000', type: 'index' },
    { symbol: 'VGK', name: 'Europe (FTSE)', type: 'index' },
    { symbol: 'EWJ', name: 'Japan (Nikkei)', type: 'index' },
    { symbol: 'FXI', name: 'China', type: 'index' },
    { symbol: 'EWZ', name: 'Brazil', type: 'index' },
    { symbol: 'INDA', name: 'India', type: 'index' },
    { symbol: 'EWY', name: 'South Korea', type: 'index' },
  ],
  commodityETFs: [
    { symbol: 'GLD', name: 'Gold', type: 'commodity' },
    { symbol: 'SLV', name: 'Silver', type: 'commodity' },
    { symbol: 'USO', name: 'Oil', type: 'commodity' },
    { symbol: 'UNG', name: 'Natural Gas', type: 'commodity' },
  ],
  bondETFs: [
    { symbol: 'TLT', name: '20+ Year Treasury', type: 'bond' },
    { symbol: 'IEF', name: '7-10 Year Treasury', type: 'bond' },
    { symbol: 'LQD', name: 'Investment Grade Corp', type: 'bond' },
    { symbol: 'HYG', name: 'High Yield Corp', type: 'bond' },
  ],
}

interface StockQuote {
  symbol: string
  name: string
  type: string
  price: number
  change: number
  changePercent: number
  high: number
  low: number
  open: number
  previousClose: number
  trend: TrendDirection
  timestamp: number
}

interface ESGScore {
  symbol: string
  company: string
  totalScore: number
  environmentScore: number
  socialScore: number
  governanceScore: number
  level: 'A' | 'B' | 'C' | 'D' | 'F'
}

async function fetchQuote(symbol: string): Promise<any> {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`,
      { next: { revalidate: 60 } }
    )
    if (!response.ok) return null
    return await response.json()
  } catch {
    return null
  }
}

async function fetchESG(symbol: string): Promise<ESGScore | null> {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/esg?symbol=${symbol}&token=${FINNHUB_KEY}`,
      { next: { revalidate: 86400 } } // Cache ESG for 24h
    )
    if (!response.ok) return null
    const data = await response.json()

    if (!data.totalESGScore) return null

    const total = data.totalESGScore || 0
    let level: 'A' | 'B' | 'C' | 'D' | 'F' = 'C'
    if (total >= 80) level = 'A'
    else if (total >= 60) level = 'B'
    else if (total >= 40) level = 'C'
    else if (total >= 20) level = 'D'
    else level = 'F'

    return {
      symbol,
      company: data.symbol || symbol,
      totalScore: total,
      environmentScore: data.environmentScore || 0,
      socialScore: data.socialScore || 0,
      governanceScore: data.governanceScore || 0,
      level,
    }
  } catch {
    return null
  }
}

function getTrend(changePercent: number): TrendDirection {
  if (changePercent > 0.1) return 'up'
  if (changePercent < -0.1) return 'down'
  return 'neutral'
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'all'

    let symbolsToFetch: { symbol: string; name: string; type: string }[] = []

    switch (type) {
      case 'indices':
        symbolsToFetch = SYMBOLS.indices
        break
      case 'commodities':
        symbolsToFetch = SYMBOLS.commodityETFs
        break
      case 'bonds':
        symbolsToFetch = SYMBOLS.bondETFs
        break
      default:
        symbolsToFetch = [
          ...SYMBOLS.indices,
          ...SYMBOLS.commodityETFs,
          ...SYMBOLS.bondETFs,
        ]
    }

    // Fetch all quotes in parallel
    const quotePromises = symbolsToFetch.map(async (item) => {
      const quote = await fetchQuote(item.symbol)
      if (!quote || quote.c === 0) return null

      return {
        symbol: item.symbol,
        name: item.name,
        type: item.type,
        price: quote.c || 0,
        change: quote.d || 0,
        changePercent: quote.dp || 0,
        high: quote.h || 0,
        low: quote.l || 0,
        open: quote.o || 0,
        previousClose: quote.pc || 0,
        trend: getTrend(quote.dp || 0),
        timestamp: quote.t || Date.now() / 1000,
      } as StockQuote
    })

    const quotes = (await Promise.all(quotePromises)).filter(Boolean) as StockQuote[]

    // Group by type
    const grouped = {
      indices: quotes.filter(q => q.type === 'index'),
      commodities: quotes.filter(q => q.type === 'commodity'),
      bonds: quotes.filter(q => q.type === 'bond'),
    }

    // Market summary
    const spy = quotes.find(q => q.symbol === 'SPY')
    const qqq = quotes.find(q => q.symbol === 'QQQ')
    const tlt = quotes.find(q => q.symbol === 'TLT')
    const gld = quotes.find(q => q.symbol === 'GLD')

    const marketSummary = {
      sp500: spy ? { price: spy.price, change: spy.changePercent } : null,
      nasdaq: qqq ? { price: qqq.price, change: qqq.changePercent } : null,
      bonds: tlt ? { price: tlt.price, change: tlt.changePercent } : null,
      gold: gld ? { price: gld.price, change: gld.changePercent } : null,
      overallSentiment:
        (spy?.changePercent || 0) > 0.5 ? 'risk-on' :
        (spy?.changePercent || 0) < -0.5 ? 'risk-off' : 'neutral',
    }

    return NextResponse.json({
      quotes,
      grouped,
      marketSummary,
      count: quotes.length,
      timestamp: new Date().toISOString(),
      source: 'Finnhub API',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (error) {
    console.error('Stocks API error:', error)
    return NextResponse.json(
      {
        quotes: [],
        error: 'Failed to fetch stock data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
