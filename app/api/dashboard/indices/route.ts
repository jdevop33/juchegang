// Dashboard API: Stock Market Indices
// Using Marketstack API (100 requests/month free)
// Real stock market index data

import { NextResponse } from 'next/server'
import { TrendDirection } from '@/types/dashboard'

const MARKETSTACK_KEY = process.env.MARKETSTACK_KEY || '5e2f32e047f5f855e13cd733a9bc78ee'

// Cache for 5 minutes (preserve API quota - only 100/month!)
export const revalidate = 300

// Major indices and ETFs to track
const SYMBOLS = [
  // US Indices (via ETFs)
  { symbol: 'SPY', name: 'S&P 500', country: 'US', type: 'index' },
  { symbol: 'QQQ', name: 'Nasdaq 100', country: 'US', type: 'index' },
  { symbol: 'DIA', name: 'Dow Jones', country: 'US', type: 'index' },
  { symbol: 'IWM', name: 'Russell 2000', country: 'US', type: 'index' },
  // International
  { symbol: 'VGK', name: 'Europe', country: 'EU', type: 'index' },
  { symbol: 'EWJ', name: 'Japan', country: 'JP', type: 'index' },
  { symbol: 'FXI', name: 'China', country: 'CN', type: 'index' },
  { symbol: 'EWZ', name: 'Brazil', country: 'BR', type: 'index' },
  { symbol: 'INDA', name: 'India', country: 'IN', type: 'index' },
  { symbol: 'EWY', name: 'South Korea', country: 'KR', type: 'index' },
  // Commodities
  { symbol: 'GLD', name: 'Gold', country: 'US', type: 'commodity' },
  { symbol: 'USO', name: 'Oil', country: 'US', type: 'commodity' },
]

interface IndexData {
  symbol: string
  name: string
  country: string
  type: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  change: number
  changePercent: number
  trend: TrendDirection
  date: string
}

async function fetchMarketstackData(): Promise<IndexData[]> {
  try {
    const symbols = SYMBOLS.map(s => s.symbol).join(',')

    // Marketstack EOD endpoint
    const response = await fetch(
      `http://api.marketstack.com/v1/eod/latest?access_key=${MARKETSTACK_KEY}&symbols=${symbols}`,
      { next: { revalidate: 300 } }
    )

    if (!response.ok) {
      console.error(`Marketstack API error: ${response.status}`)
      return []
    }

    const data = await response.json()

    if (data.error) {
      console.error('Marketstack error:', data.error)
      return []
    }

    if (!data.data || !Array.isArray(data.data)) {
      console.error('Marketstack: No data returned')
      return []
    }

    return data.data.map((item: any) => {
      const symbolInfo = SYMBOLS.find(s => s.symbol === item.symbol)
      const change = item.close - item.open
      const changePercent = item.open ? (change / item.open) * 100 : 0

      return {
        symbol: item.symbol,
        name: symbolInfo?.name || item.symbol,
        country: symbolInfo?.country || 'US',
        type: symbolInfo?.type || 'stock',
        open: item.open || 0,
        high: item.high || 0,
        low: item.low || 0,
        close: item.close || 0,
        volume: item.volume || 0,
        change: Number(change.toFixed(2)),
        changePercent: Number(changePercent.toFixed(2)),
        trend: changePercent > 0.1 ? 'up' : changePercent < -0.1 ? 'down' : 'neutral',
        date: item.date || new Date().toISOString(),
      }
    })
  } catch (error) {
    console.error('Marketstack fetch error:', error)
    return []
  }
}

export async function GET() {
  try {
    const indices = await fetchMarketstackData()

    // Group by type
    const grouped = {
      indices: indices.filter(i => i.type === 'index'),
      commodities: indices.filter(i => i.type === 'commodity'),
    }

    // Market summary
    const spy = indices.find(i => i.symbol === 'SPY')
    const qqq = indices.find(i => i.symbol === 'QQQ')

    const marketSummary = {
      sp500: spy ? { close: spy.close, change: spy.changePercent } : null,
      nasdaq: qqq ? { close: qqq.close, change: qqq.changePercent } : null,
      marketStatus: (spy?.changePercent || 0) > 0 ? 'risk-on' : 'risk-off',
      tradingDay: spy?.date?.split('T')[0] || new Date().toISOString().split('T')[0],
    }

    return NextResponse.json({
      indices,
      grouped,
      marketSummary,
      count: indices.length,
      timestamp: new Date().toISOString(),
      source: 'Marketstack API',
      note: 'EOD data. 100 requests/month on free tier.',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Indices API error:', error)
    return NextResponse.json(
      {
        indices: [],
        error: 'Failed to fetch indices data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
