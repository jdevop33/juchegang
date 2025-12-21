// Dashboard API: Smart Money Tracking
// Using Nansen API - Premium blockchain analytics
// Tracks whale movements, smart money flows, token screener

import { NextResponse } from 'next/server'

const NANSEN_API_KEY = process.env.NANSEN_API_KEY || 'zdhQXVnfreqA9TERbgiDPiAkQSBxAfKR'
const NANSEN_API_URL = 'https://api.nansen.ai/api/v1'

// Cache for 5 minutes
export const revalidate = 300

interface TokenScreenerResult {
  token: string
  symbol: string
  chain: string
  price: number
  priceChange24h: number
  buyVolume: number
  sellVolume: number
  netFlow: number
  smartMoneyBuyers: number
  smartMoneySellers: number
  signal: 'strong_buy' | 'buy' | 'neutral' | 'sell' | 'strong_sell'
}

async function fetchSmartMoneyTokens(chains: string[] = ['ethereum', 'solana', 'base']): Promise<any> {
  try {
    const response = await fetch(`${NANSEN_API_URL}/token-screener`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': NANSEN_API_KEY,
      },
      body: JSON.stringify({
        chains,
        timeframe: '24h',
        filters: {
          only_smart_money: true,
          token_age_days: {
            min: 1,
            max: 365,
          },
        },
        order_by: [
          { field: 'buy_volume', direction: 'DESC' },
        ],
        pagination: {
          page: 1,
          per_page: 50,
        },
      }),
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      console.error(`Nansen API error: ${response.status}`)
      const text = await response.text()
      console.error('Nansen response:', text)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Nansen fetch error:', error)
    return null
  }
}

async function fetchSmartMoneySellers(chains: string[] = ['ethereum', 'solana', 'base']): Promise<any> {
  try {
    const response = await fetch(`${NANSEN_API_URL}/token-screener`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': NANSEN_API_KEY,
      },
      body: JSON.stringify({
        chains,
        timeframe: '24h',
        filters: {
          only_smart_money: true,
          token_age_days: {
            min: 1,
            max: 365,
          },
        },
        order_by: [
          { field: 'sell_volume', direction: 'DESC' },
        ],
        pagination: {
          page: 1,
          per_page: 20,
        },
      }),
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Nansen sellers fetch error:', error)
    return null
  }
}

function calculateSignal(buyVolume: number, sellVolume: number): TokenScreenerResult['signal'] {
  const netFlow = buyVolume - sellVolume
  const total = buyVolume + sellVolume
  if (total === 0) return 'neutral'

  const ratio = netFlow / total
  if (ratio > 0.5) return 'strong_buy'
  if (ratio > 0.2) return 'buy'
  if (ratio < -0.5) return 'strong_sell'
  if (ratio < -0.2) return 'sell'
  return 'neutral'
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const chainsParam = searchParams.get('chains')
    const chains = chainsParam ? chainsParam.split(',') : ['ethereum', 'solana', 'base']

    const [buyersData, sellersData] = await Promise.all([
      fetchSmartMoneyTokens(chains),
      fetchSmartMoneySellers(chains),
    ])

    // Process top buyers
    const topBuyers = buyersData?.data?.slice(0, 20).map((token: any) => ({
      token: token.token_address || token.address,
      symbol: token.symbol || 'UNKNOWN',
      name: token.name || token.symbol,
      chain: token.chain,
      price: token.price || 0,
      priceChange24h: token.price_change_24h || 0,
      buyVolume: token.buy_volume || 0,
      sellVolume: token.sell_volume || 0,
      netFlow: (token.buy_volume || 0) - (token.sell_volume || 0),
      smartMoneyBuyers: token.smart_money_buyers || 0,
      smartMoneySellers: token.smart_money_sellers || 0,
      signal: calculateSignal(token.buy_volume || 0, token.sell_volume || 0),
    })) || []

    // Process top sellers (for alerts)
    const topSellers = sellersData?.data?.slice(0, 10).map((token: any) => ({
      token: token.token_address || token.address,
      symbol: token.symbol || 'UNKNOWN',
      name: token.name || token.symbol,
      chain: token.chain,
      sellVolume: token.sell_volume || 0,
      smartMoneySellers: token.smart_money_sellers || 0,
    })) || []

    // Calculate market sentiment from smart money
    const totalBuyVolume = topBuyers.reduce((sum: number, t: any) => sum + t.buyVolume, 0)
    const totalSellVolume = topBuyers.reduce((sum: number, t: any) => sum + t.sellVolume, 0)
    const netFlow = totalBuyVolume - totalSellVolume
    const smartMoneySentiment = netFlow > 0 ? 'accumulating' : netFlow < 0 ? 'distributing' : 'neutral'

    // Strong buy signals (smart money accumulating heavily)
    const strongBuys = topBuyers.filter((t: any) => t.signal === 'strong_buy')
    const strongSells = topBuyers.filter((t: any) => t.signal === 'strong_sell')

    return NextResponse.json({
      topBuyers,
      topSellers,
      summary: {
        totalBuyVolume,
        totalSellVolume,
        netFlow,
        smartMoneySentiment,
        strongBuySignals: strongBuys.length,
        strongSellSignals: strongSells.length,
        chainsTracked: chains,
      },
      alerts: {
        strongBuys: strongBuys.slice(0, 5),
        strongSells: strongSells.slice(0, 5),
      },
      count: topBuyers.length,
      timestamp: new Date().toISOString(),
      source: 'Nansen API - Smart Money Analytics',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Smart Money API error:', error)
    return NextResponse.json(
      {
        topBuyers: [],
        topSellers: [],
        error: 'Failed to fetch smart money data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
