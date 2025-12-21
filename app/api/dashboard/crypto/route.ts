// Dashboard API: Crypto Prices
// Using CoinGecko API with Demo API key
// Real-time cryptocurrency prices

import { NextResponse } from 'next/server'
import { TrendDirection } from '@/types/dashboard'

const COINGECKO_KEY = process.env.COINGECKO_KEY || 'CG-UM9rA8Fw21XFYwFzJ9spveaH'

// Cache for 1 minute
export const revalidate = 60

// Major cryptocurrencies to track
const CRYPTO_IDS = [
  'bitcoin',
  'ethereum',
  'tether',
  'binancecoin',
  'solana',
  'ripple',
  'cardano',
  'avalanche-2',
  'polkadot',
  'chainlink',
]

interface CryptoPrice {
  id: string
  symbol: string
  name: string
  price: number
  marketCap: number
  volume24h: number
  change24h: number
  change7d: number
  trend: TrendDirection
  lastUpdated: string
}

async function fetchCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const ids = CRYPTO_IDS.join(',')

    // CoinGecko API with demo key for better rate limits
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&sparkline=false&price_change_percentage=24h,7d&x_cg_demo_api_key=${COINGECKO_KEY}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      console.error(`CoinGecko API error: ${response.status}`)
      return []
    }

    const data = await response.json()

    return data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      price: coin.current_price || 0,
      marketCap: coin.market_cap || 0,
      volume24h: coin.total_volume || 0,
      change24h: coin.price_change_percentage_24h || 0,
      change7d: coin.price_change_percentage_7d_in_currency || 0,
      trend: (coin.price_change_percentage_24h || 0) > 0.5 ? 'up' :
             (coin.price_change_percentage_24h || 0) < -0.5 ? 'down' : 'neutral',
      lastUpdated: coin.last_updated || new Date().toISOString(),
    }))
  } catch (error) {
    console.error('CoinGecko fetch error:', error)
    return []
  }
}

// Fetch Bitcoin fear/greed index (alternative.me - free, no auth)
async function fetchFearGreedIndex(): Promise<{ value: number; classification: string } | null> {
  try {
    const response = await fetch(
      'https://api.alternative.me/fng/?limit=1',
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )

    if (!response.ok) return null

    const data = await response.json()
    if (data.data && data.data[0]) {
      return {
        value: parseInt(data.data[0].value),
        classification: data.data[0].value_classification,
      }
    }
    return null
  } catch {
    return null
  }
}

export async function GET() {
  try {
    const [prices, fearGreed] = await Promise.all([
      fetchCryptoPrices(),
      fetchFearGreedIndex(),
    ])

    // Calculate market stats
    const totalMarketCap = prices.reduce((sum, coin) => sum + coin.marketCap, 0)
    const btc = prices.find(c => c.id === 'bitcoin')
    const eth = prices.find(c => c.id === 'ethereum')
    const btcDominance = btc ? (btc.marketCap / totalMarketCap * 100).toFixed(1) : '0'

    return NextResponse.json({
      prices,
      stats: {
        totalMarketCap,
        btcDominance,
        btcPrice: btc?.price || 0,
        ethPrice: eth?.price || 0,
        fearGreedIndex: fearGreed,
      },
      count: prices.length,
      timestamp: new Date().toISOString(),
      source: 'CoinGecko API (free, no auth)',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (error) {
    console.error('Crypto API error:', error)
    return NextResponse.json(
      {
        prices: [],
        stats: {},
        error: 'Failed to fetch crypto data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
