// Dashboard API: CoinGecko Integration
// Enhanced crypto data - 10,000+ coins, trending, DeFi, NFTs
// API Key: process.env.COINGECKO_API_KEY

import { NextResponse } from 'next/server'

const CG_API_KEY = process.env.COINGECKO_API_KEY || 'CG-UM9rA8Fw21XFYwFzJ9spveaH'
const CG_BASE = 'https://api.coingecko.com/api/v3'

// Cache for 2 minutes (crypto moves fast)
export const revalidate = 120

async function fetchCG(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${CG_BASE}${endpoint}`)
  url.searchParams.set('x_cg_demo_api_key', CG_API_KEY)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString(), { next: { revalidate: 120 } })
  if (!res.ok) throw new Error(`CoinGecko API error: ${res.status}`)
  return res.json()
}

async function getMarketOverview() {
  try {
    const data = await fetchCG('/global')
    return {
      totalMarketCap: data.data.total_market_cap.usd,
      totalVolume24h: data.data.total_volume.usd,
      btcDominance: data.data.market_cap_percentage.btc,
      ethDominance: data.data.market_cap_percentage.eth,
      activeCryptos: data.data.active_cryptocurrencies,
      markets: data.data.markets,
      marketCapChange24h: data.data.market_cap_change_percentage_24h_usd,
    }
  } catch (e) {
    console.error('Market overview error:', e)
    return null
  }
}

async function getTopCoins(limit = 20) {
  try {
    const data = await fetchCG('/coins/markets', {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: String(limit),
      sparkline: 'true',
      price_change_percentage: '1h,24h,7d',
    })

    return data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      image: coin.image,
      price: coin.current_price,
      marketCap: coin.market_cap,
      marketCapRank: coin.market_cap_rank,
      volume24h: coin.total_volume,
      change1h: coin.price_change_percentage_1h_in_currency,
      change24h: coin.price_change_percentage_24h,
      change7d: coin.price_change_percentage_7d_in_currency,
      high24h: coin.high_24h,
      low24h: coin.low_24h,
      ath: coin.ath,
      athChangePercent: coin.ath_change_percentage,
      sparkline: coin.sparkline_in_7d?.price?.slice(-24) || [], // Last 24 data points
    }))
  } catch (e) {
    console.error('Top coins error:', e)
    return []
  }
}

async function getTrending() {
  try {
    const data = await fetchCG('/search/trending')
    return {
      coins: data.coins?.slice(0, 7).map((item: any) => ({
        id: item.item.id,
        symbol: item.item.symbol.toUpperCase(),
        name: item.item.name,
        marketCapRank: item.item.market_cap_rank,
        score: item.item.score,
        priceBtc: item.item.price_btc,
      })) || [],
      nfts: data.nfts?.slice(0, 5).map((nft: any) => ({
        id: nft.id,
        name: nft.name,
        symbol: nft.symbol,
        floorPriceInNativeCurrency: nft.floor_price_in_native_currency,
        nativeCurrency: nft.native_currency,
      })) || [],
    }
  } catch (e) {
    console.error('Trending error:', e)
    return { coins: [], nfts: [] }
  }
}

async function getCoinDetails(id: string) {
  try {
    const data = await fetchCG(`/coins/${id}`, {
      localization: 'false',
      tickers: 'false',
      community_data: 'false',
      developer_data: 'false',
    })

    return {
      id: data.id,
      symbol: data.symbol.toUpperCase(),
      name: data.name,
      description: data.description?.en?.slice(0, 500),
      image: data.image?.large,
      marketData: {
        price: data.market_data?.current_price?.usd,
        marketCap: data.market_data?.market_cap?.usd,
        volume24h: data.market_data?.total_volume?.usd,
        high24h: data.market_data?.high_24h?.usd,
        low24h: data.market_data?.low_24h?.usd,
        change24h: data.market_data?.price_change_percentage_24h,
        change7d: data.market_data?.price_change_percentage_7d,
        change30d: data.market_data?.price_change_percentage_30d,
        ath: data.market_data?.ath?.usd,
        athDate: data.market_data?.ath_date?.usd,
        atl: data.market_data?.atl?.usd,
        atlDate: data.market_data?.atl_date?.usd,
        circulatingSupply: data.market_data?.circulating_supply,
        totalSupply: data.market_data?.total_supply,
        maxSupply: data.market_data?.max_supply,
      },
      sentiment: {
        upVotes: data.sentiment_votes_up_percentage,
        downVotes: data.sentiment_votes_down_percentage,
      },
      categories: data.categories?.slice(0, 5),
    }
  } catch (e) {
    console.error('Coin details error:', e)
    return null
  }
}

async function getGainersLosers() {
  try {
    // Get top 250 coins and sort by 24h change
    const data = await fetchCG('/coins/markets', {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '250',
      price_change_percentage: '24h',
    })

    const sorted = [...data].sort((a: any, b: any) =>
      (b.price_change_percentage_24h || 0) - (a.price_change_percentage_24h || 0)
    )

    return {
      gainers: sorted.slice(0, 10).map((coin: any) => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        volume24h: coin.total_volume,
        marketCapRank: coin.market_cap_rank,
      })),
      losers: sorted.slice(-10).reverse().map((coin: any) => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        volume24h: coin.total_volume,
        marketCapRank: coin.market_cap_rank,
      })),
    }
  } catch (e) {
    console.error('Gainers/losers error:', e)
    return { gainers: [], losers: [] }
  }
}

async function getExchanges() {
  try {
    const data = await fetchCG('/exchanges', { per_page: '10' })
    return data.map((ex: any) => ({
      id: ex.id,
      name: ex.name,
      country: ex.country,
      trustScore: ex.trust_score,
      trustRank: ex.trust_score_rank,
      volume24hBtc: ex.trade_volume_24h_btc,
      volume24hNormalized: ex.trade_volume_24h_btc_normalized,
    }))
  } catch (e) {
    console.error('Exchanges error:', e)
    return []
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action') || 'overview'
    const id = searchParams.get('id') || 'bitcoin'
    const limit = parseInt(searchParams.get('limit') || '20')

    switch (action) {
      case 'coins': {
        const coins = await getTopCoins(limit)
        return NextResponse.json({ coins, count: coins.length, timestamp: new Date().toISOString() })
      }

      case 'trending': {
        const trending = await getTrending()
        return NextResponse.json({ ...trending, timestamp: new Date().toISOString() })
      }

      case 'coin': {
        const coin = await getCoinDetails(id)
        return NextResponse.json({ coin, timestamp: new Date().toISOString() })
      }

      case 'movers': {
        const movers = await getGainersLosers()
        return NextResponse.json({ ...movers, timestamp: new Date().toISOString() })
      }

      case 'exchanges': {
        const exchanges = await getExchanges()
        return NextResponse.json({ exchanges, timestamp: new Date().toISOString() })
      }

      case 'overview':
      default: {
        const [market, coins, trending] = await Promise.all([
          getMarketOverview(),
          getTopCoins(10),
          getTrending(),
        ])

        return NextResponse.json({
          market,
          topCoins: coins,
          trending: trending.coins,
          trendingNfts: trending.nfts,
          timestamp: new Date().toISOString(),
          source: 'CoinGecko',
        }, {
          headers: {
            'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=300',
          },
        })
      }
    }
  } catch (error) {
    console.error('CoinGecko API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch crypto data', details: String(error) },
      { status: 500 }
    )
  }
}
