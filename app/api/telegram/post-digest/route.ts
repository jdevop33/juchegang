// Telegram Bot: Post Market Digest to Channel
// Generates and posts a formatted macro intelligence digest

import { NextResponse } from 'next/server'

// TelegrAlpha Channel
const TELEGRAM_CHANNEL_ID = 3513940012
const TELEGRAM_CHANNEL_INVITE = 'https://t.me/telegralpha'

interface MarketDigest {
  crypto: {
    btcPrice: number
    btcChange: number
    ethPrice: number
    ethChange: number
    fearGreed: { value: number; classification: string } | null
    totalMarketCap: number
  }
  indices: {
    spy: { close: number; change: number } | null
    qqq: { close: number; change: number } | null
    marketStatus: string
  }
  currencies: {
    dxy: number
    eurUsd: number
    usdJpy: number
  }
  edge: {
    highlight: string
    critical: number
  }
}

async function fetchDigestData(): Promise<MarketDigest> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const [cryptoRes, indicesRes, marketsRes, edgeRes] = await Promise.all([
    fetch(`${baseUrl}/api/dashboard/crypto`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/indices`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/markets`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/edge-factors`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
  ])

  const btc = cryptoRes?.prices?.find((p: any) => p.id === 'bitcoin')
  const eth = cryptoRes?.prices?.find((p: any) => p.id === 'ethereum')

  const spy = indicesRes?.indices?.find((i: any) => i.symbol === 'SPY')
  const qqq = indicesRes?.indices?.find((i: any) => i.symbol === 'QQQ')

  const eurUsd = marketsRes?.currencies?.find((c: any) => c.base === 'EUR' && c.quote === 'USD')
  const usdJpy = marketsRes?.currencies?.find((c: any) => c.base === 'USD' && c.quote === 'JPY')

  // Count critical edge factors
  const criticalWater = edgeRes?.water?.filter((w: any) => w.scarcityIndex >= 4).length || 0
  const criticalRareEarth = edgeRes?.rareEarth?.filter((r: any) => r.supplyRisk === 'critical').length || 0

  return {
    crypto: {
      btcPrice: btc?.price || 0,
      btcChange: btc?.change24h || 0,
      ethPrice: eth?.price || 0,
      ethChange: eth?.change24h || 0,
      fearGreed: cryptoRes?.stats?.fearGreedIndex || null,
      totalMarketCap: cryptoRes?.stats?.totalMarketCap || 0,
    },
    indices: {
      spy: spy ? { close: spy.close, change: spy.changePercent } : null,
      qqq: qqq ? { close: qqq.close, change: qqq.changePercent } : null,
      marketStatus: indicesRes?.marketSummary?.marketStatus || 'unknown',
    },
    currencies: {
      dxy: 0, // Would need separate API
      eurUsd: eurUsd?.rate || 0,
      usdJpy: usdJpy?.rate || 0,
    },
    edge: {
      highlight: criticalWater > 0 ? `${criticalWater} nations in water crisis` :
                 criticalRareEarth > 0 ? `${criticalRareEarth} rare earths at critical supply risk` :
                 'No critical alerts',
      critical: criticalWater + criticalRareEarth,
    },
  }
}

function formatDigestMessage(data: MarketDigest): string {
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const timeStr = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  })

  const formatChange = (change: number) => {
    const arrow = change > 0 ? '📈' : change < 0 ? '📉' : '➡️'
    const sign = change > 0 ? '+' : ''
    return `${arrow} ${sign}${change.toFixed(2)}%`
  }

  const formatPrice = (price: number) => {
    if (price >= 1000) return `$${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    return `$${price.toFixed(2)}`
  }

  const formatMarketCap = (mc: number) => {
    if (mc >= 1e12) return `$${(mc / 1e12).toFixed(2)}T`
    return `$${(mc / 1e9).toFixed(0)}B`
  }

  // Build message
  let msg = `🌐 **SOVEREIGN ALPHA DIGEST**\n`
  msg += `📅 ${dateStr} | ${timeStr}\n`
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n\n`

  // Crypto
  msg += `🪙 **CRYPTO**\n`
  msg += `BTC: ${formatPrice(data.crypto.btcPrice)} ${formatChange(data.crypto.btcChange)}\n`
  msg += `ETH: ${formatPrice(data.crypto.ethPrice)} ${formatChange(data.crypto.ethChange)}\n`
  if (data.crypto.fearGreed) {
    const fgEmoji = data.crypto.fearGreed.value >= 50 ? '🟢' : '🔴'
    msg += `Fear/Greed: ${fgEmoji} ${data.crypto.fearGreed.value} (${data.crypto.fearGreed.classification})\n`
  }
  msg += `Total MCap: ${formatMarketCap(data.crypto.totalMarketCap)}\n\n`

  // Indices
  msg += `📊 **EQUITIES**\n`
  if (data.indices.spy) {
    msg += `S&P 500: ${formatPrice(data.indices.spy.close)} ${formatChange(data.indices.spy.change)}\n`
  }
  if (data.indices.qqq) {
    msg += `Nasdaq: ${formatPrice(data.indices.qqq.close)} ${formatChange(data.indices.qqq.change)}\n`
  }
  const riskEmoji = data.indices.marketStatus === 'risk-on' ? '🟢' : '🔴'
  msg += `Mode: ${riskEmoji} ${data.indices.marketStatus.toUpperCase()}\n\n`

  // FX
  msg += `💱 **CURRENCIES**\n`
  if (data.currencies.eurUsd) msg += `EUR/USD: ${data.currencies.eurUsd.toFixed(4)}\n`
  if (data.currencies.usdJpy) msg += `USD/JPY: ${data.currencies.usdJpy.toFixed(2)}\n`
  msg += `\n`

  // Edge Factors
  msg += `⚡ **EDGE FACTORS**\n`
  if (data.edge.critical > 0) {
    msg += `⚠️ ${data.edge.highlight}\n`
  } else {
    msg += `✅ No critical alerts\n`
  }
  msg += `\n`

  // Footer
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`
  msg += `🔗 Full Dashboard: sovereign-alpha.vercel.app/dashboard\n`
  msg += `#Macro #Crypto #Markets #SovereignAlpha`

  return msg
}

export async function POST(request: Request) {
  try {
    // Optional: verify secret
    const { secret } = await request.json().catch(() => ({}))
    if (process.env.TELEGRAM_POST_SECRET && secret !== process.env.TELEGRAM_POST_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch data and format message
    const data = await fetchDigestData()
    const message = formatDigestMessage(data)

    return NextResponse.json({
      success: true,
      message,
      data,
      channel: TELEGRAM_CHANNEL_ID,
      note: 'Message formatted. Use Telegram MCP to post.',
    })
  } catch (error) {
    console.error('Digest error:', error)
    return NextResponse.json(
      { error: 'Failed to generate digest', details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const data = await fetchDigestData()
    const message = formatDigestMessage(data)

    return NextResponse.json({
      success: true,
      message,
      data,
      channel: TELEGRAM_CHANNEL_ID,
    })
  } catch (error) {
    console.error('Digest error:', error)
    return NextResponse.json(
      { error: 'Failed to generate digest' },
      { status: 500 }
    )
  }
}
