// Dashboard API: Alpha Vantage Integration
// Stocks, Fundamentals, Technicals, Economic Indicators
// API Key: process.env.ALPHA_VANTAGE_API_KEY

import { NextResponse } from 'next/server'

const AV_API_KEY = process.env.ALPHA_VANTAGE_API_KEY || 'KGN9Z7FZSTUH1R5F'
const AV_BASE = 'https://www.alphavantage.co/query'

// Cache for 5 minutes
export const revalidate = 300

interface StockQuote {
  symbol: string
  price: number
  change: number
  changePercent: number
  volume: number
  latestTradingDay: string
}

interface EconomicIndicator {
  name: string
  value: number
  unit: string
  date: string
}

async function fetchAV(params: Record<string, string>) {
  const url = new URL(AV_BASE)
  url.searchParams.set('apikey', AV_API_KEY)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString(), { next: { revalidate: 300 } })
  if (!res.ok) throw new Error(`AV API error: ${res.status}`)
  return res.json()
}

async function getGlobalQuote(symbol: string): Promise<StockQuote | null> {
  try {
    const data = await fetchAV({ function: 'GLOBAL_QUOTE', symbol })
    const q = data['Global Quote']
    if (!q) return null

    return {
      symbol: q['01. symbol'],
      price: parseFloat(q['05. price']),
      change: parseFloat(q['09. change']),
      changePercent: parseFloat(q['10. change percent']?.replace('%', '')),
      volume: parseInt(q['06. volume']),
      latestTradingDay: q['07. latest trading day'],
    }
  } catch (e) {
    console.error(`Quote error for ${symbol}:`, e)
    return null
  }
}

async function getTopMovers() {
  try {
    const data = await fetchAV({ function: 'TOP_GAINERS_LOSERS' })
    return {
      gainers: data.top_gainers?.slice(0, 5).map((g: any) => ({
        symbol: g.ticker,
        price: parseFloat(g.price),
        change: parseFloat(g.change_amount),
        changePercent: parseFloat(g.change_percentage?.replace('%', '')),
        volume: parseInt(g.volume),
      })) || [],
      losers: data.top_losers?.slice(0, 5).map((l: any) => ({
        symbol: l.ticker,
        price: parseFloat(l.price),
        change: parseFloat(l.change_amount),
        changePercent: parseFloat(l.change_percentage?.replace('%', '')),
        volume: parseInt(l.volume),
      })) || [],
      mostActive: data.most_actively_traded?.slice(0, 5).map((a: any) => ({
        symbol: a.ticker,
        price: parseFloat(a.price),
        change: parseFloat(a.change_amount),
        changePercent: parseFloat(a.change_percentage?.replace('%', '')),
        volume: parseInt(a.volume),
      })) || [],
    }
  } catch (e) {
    console.error('Top movers error:', e)
    return { gainers: [], losers: [], mostActive: [] }
  }
}

async function getEconomicIndicators(): Promise<EconomicIndicator[]> {
  const indicators: EconomicIndicator[] = []

  // Federal Funds Rate
  try {
    const ffr = await fetchAV({ function: 'FEDERAL_FUNDS_RATE', interval: 'monthly' })
    if (ffr.data?.[0]) {
      indicators.push({
        name: 'Fed Funds Rate',
        value: parseFloat(ffr.data[0].value),
        unit: '%',
        date: ffr.data[0].date,
      })
    }
  } catch (e) { console.error('FFR error:', e) }

  // Treasury Yield (10Y)
  try {
    const ty = await fetchAV({ function: 'TREASURY_YIELD', interval: 'monthly', maturity: '10year' })
    if (ty.data?.[0]) {
      indicators.push({
        name: '10Y Treasury',
        value: parseFloat(ty.data[0].value),
        unit: '%',
        date: ty.data[0].date,
      })
    }
  } catch (e) { console.error('Treasury error:', e) }

  // CPI
  try {
    const cpi = await fetchAV({ function: 'CPI', interval: 'monthly' })
    if (cpi.data?.[0]) {
      indicators.push({
        name: 'CPI',
        value: parseFloat(cpi.data[0].value),
        unit: 'index',
        date: cpi.data[0].date,
      })
    }
  } catch (e) { console.error('CPI error:', e) }

  // Unemployment
  try {
    const unemp = await fetchAV({ function: 'UNEMPLOYMENT' })
    if (unemp.data?.[0]) {
      indicators.push({
        name: 'Unemployment',
        value: parseFloat(unemp.data[0].value),
        unit: '%',
        date: unemp.data[0].date,
      })
    }
  } catch (e) { console.error('Unemployment error:', e) }

  return indicators
}

async function getTechnicals(symbol: string) {
  const technicals: Record<string, any> = {}

  // RSI
  try {
    const rsi = await fetchAV({
      function: 'RSI',
      symbol,
      interval: 'daily',
      time_period: '14',
      series_type: 'close'
    })
    const rsiData = rsi['Technical Analysis: RSI']
    if (rsiData) {
      const latest = Object.values(rsiData)[0] as any
      technicals.rsi = parseFloat(latest.RSI)
    }
  } catch (e) { console.error('RSI error:', e) }

  // MACD
  try {
    const macd = await fetchAV({
      function: 'MACD',
      symbol,
      interval: 'daily',
      series_type: 'close'
    })
    const macdData = macd['Technical Analysis: MACD']
    if (macdData) {
      const latest = Object.values(macdData)[0] as any
      technicals.macd = {
        macd: parseFloat(latest.MACD),
        signal: parseFloat(latest.MACD_Signal),
        histogram: parseFloat(latest.MACD_Hist),
      }
    }
  } catch (e) { console.error('MACD error:', e) }

  // Bollinger Bands
  try {
    const bb = await fetchAV({
      function: 'BBANDS',
      symbol,
      interval: 'daily',
      time_period: '20',
      series_type: 'close'
    })
    const bbData = bb['Technical Analysis: BBANDS']
    if (bbData) {
      const latest = Object.values(bbData)[0] as any
      technicals.bollingerBands = {
        upper: parseFloat(latest['Real Upper Band']),
        middle: parseFloat(latest['Real Middle Band']),
        lower: parseFloat(latest['Real Lower Band']),
      }
    }
  } catch (e) { console.error('BB error:', e) }

  return technicals
}

async function getNewsSentiment(tickers: string) {
  try {
    const data = await fetchAV({ function: 'NEWS_SENTIMENT', tickers, limit: '10' })
    return data.feed?.slice(0, 5).map((item: any) => ({
      title: item.title,
      url: item.url,
      source: item.source,
      sentiment: item.overall_sentiment_label,
      sentimentScore: item.overall_sentiment_score,
      publishedAt: item.time_published,
      tickers: item.ticker_sentiment?.map((t: any) => ({
        ticker: t.ticker,
        sentiment: t.ticker_sentiment_label,
        score: parseFloat(t.ticker_sentiment_score),
      })),
    })) || []
  } catch (e) {
    console.error('News sentiment error:', e)
    return []
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action') || 'overview'
    const symbol = searchParams.get('symbol') || 'SPY'
    const tickers = searchParams.get('tickers') || 'AAPL,MSFT,GOOGL'

    switch (action) {
      case 'quote': {
        const quote = await getGlobalQuote(symbol)
        return NextResponse.json({ quote, timestamp: new Date().toISOString() })
      }

      case 'movers': {
        const movers = await getTopMovers()
        return NextResponse.json({ ...movers, timestamp: new Date().toISOString() })
      }

      case 'economic': {
        const indicators = await getEconomicIndicators()
        return NextResponse.json({ indicators, timestamp: new Date().toISOString() })
      }

      case 'technicals': {
        const technicals = await getTechnicals(symbol)
        return NextResponse.json({ symbol, technicals, timestamp: new Date().toISOString() })
      }

      case 'news': {
        const news = await getNewsSentiment(tickers)
        return NextResponse.json({ news, timestamp: new Date().toISOString() })
      }

      case 'overview':
      default: {
        // Get a market overview
        const [movers, economic] = await Promise.all([
          getTopMovers(),
          getEconomicIndicators(),
        ])

        return NextResponse.json({
          movers,
          economic,
          timestamp: new Date().toISOString(),
          source: 'Alpha Vantage',
        }, {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          },
        })
      }
    }
  } catch (error) {
    console.error('Alpha Vantage API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data', details: String(error) },
      { status: 500 }
    )
  }
}
