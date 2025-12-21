// Telegram Bot: Post Alerts for significant market moves
// Posts breaking alerts to channel

import { NextResponse } from 'next/server'

const TELEGRAM_CHANNEL_ID = 3513940012

type AlertType = 'fear_greed' | 'btc_move' | 'edge_factor' | 'market_mode'

interface AlertConfig {
  type: AlertType
  threshold?: number
}

async function generateFearGreedAlert(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/dashboard/crypto`, { cache: 'no-store' })
  const data = await res.json()

  const fg = data?.stats?.fearGreedIndex
  if (!fg) return null

  const value = fg.value
  const classification = fg.classification

  // Only alert on extremes
  if (value <= 20) {
    return `🚨 **EXTREME FEAR ALERT**

Fear & Greed Index: **${value}** (${classification})

📉 Market sentiment at historically low levels
💡 Historically, extreme fear = buying opportunities

Current BTC: $${data.stats.btcPrice?.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━
🔗 juchegang.vercel.app/dashboard
#FearGreed #Crypto #BuyTheFear`
  }

  if (value >= 80) {
    return `🚨 **EXTREME GREED ALERT**

Fear & Greed Index: **${value}** (${classification})

📈 Market euphoria at dangerous levels
⚠️ Historically, extreme greed = distribution zones

Current BTC: $${data.stats.btcPrice?.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━
🔗 juchegang.vercel.app/dashboard
#FearGreed #Crypto #Euphoria`
  }

  return null
}

async function generateEdgeFactorAlert(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/dashboard/edge-factors`, { cache: 'no-store' })
  const data = await res.json()

  const criticalWater = data?.water?.filter((w: any) => w.scarcityIndex >= 4) || []
  const criticalRareEarth = data?.rareEarth?.filter((r: any) => r.supplyRisk === 'critical') || []
  const energyDependent = data?.energyIndependence?.filter((e: any) => e.independenceRatio < 0.3) || []

  if (criticalWater.length === 0 && criticalRareEarth.length === 0) {
    return null
  }

  let msg = `⚡ **EDGE FACTORS UPDATE**\n\n`

  if (criticalWater.length > 0) {
    msg += `💧 **WATER CRISIS**\n`
    msg += `${criticalWater.length} nations at critical scarcity:\n`
    criticalWater.slice(0, 5).forEach((w: any) => {
      msg += `• ${w.country}: ${w.scarcityIndex}/5 scarcity\n`
    })
    msg += `\n`
  }

  if (criticalRareEarth.length > 0) {
    msg += `⚛️ **RARE EARTH SUPPLY RISK**\n`
    msg += `${criticalRareEarth.length} elements at critical risk:\n`
    criticalRareEarth.slice(0, 4).forEach((r: any) => {
      msg += `• ${r.element} (${r.symbol}): ${r.topProducers?.[0]?.country} controls ${r.topProducers?.[0]?.share}%\n`
    })
    msg += `\n`
  }

  if (energyDependent.length > 0) {
    msg += `🔋 **ENERGY VULNERABILITY**\n`
    msg += `${energyDependent.length} nations highly dependent:\n`
    energyDependent.slice(0, 3).forEach((e: any) => {
      msg += `• ${e.country}: ${(e.independenceRatio * 100).toFixed(0)}% self-sufficient\n`
    })
    msg += `\n`
  }

  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`
  msg += `🔗 Full analysis: juchegang.vercel.app/dashboard\n`
  msg += `#EdgeFactors #Geopolitics #SupplyChain`

  return msg
}

async function generateMarketModeAlert(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const [cryptoRes, indicesRes] = await Promise.all([
    fetch(`${baseUrl}/api/dashboard/crypto`, { cache: 'no-store' }).then(r => r.json()),
    fetch(`${baseUrl}/api/dashboard/indices`, { cache: 'no-store' }).then(r => r.json()),
  ])

  const btc = cryptoRes?.prices?.find((p: any) => p.id === 'bitcoin')
  const spy = indicesRes?.indices?.find((i: any) => i.symbol === 'SPY')

  // Check for significant divergence
  if (!btc || !spy) return null

  const btcChange = btc.change24h
  const spyChange = spy.changePercent

  // Divergence: one up significantly, one down
  if ((btcChange > 3 && spyChange < -1) || (btcChange < -3 && spyChange > 1)) {
    const divergence = btcChange > 0 ? 'BTC leading' : 'Equities leading'

    return `📊 **MARKET DIVERGENCE ALERT**

BTC: ${btcChange > 0 ? '📈' : '📉'} ${btcChange > 0 ? '+' : ''}${btcChange.toFixed(2)}%
S&P 500: ${spyChange > 0 ? '📈' : '📉'} ${spyChange > 0 ? '+' : ''}${spyChange.toFixed(2)}%

⚡ ${divergence} - unusual divergence detected

This often precedes regime changes in risk appetite.

━━━━━━━━━━━━━━━━━━━━━━
🔗 juchegang.vercel.app/dashboard
#Divergence #Macro #RiskRegime`
  }

  return null
}

export async function POST(request: Request) {
  try {
    const { type = 'all' } = await request.json().catch(() => ({}))

    const alerts: string[] = []

    if (type === 'all' || type === 'fear_greed') {
      const alert = await generateFearGreedAlert()
      if (alert) alerts.push(alert)
    }

    if (type === 'all' || type === 'edge_factor') {
      const alert = await generateEdgeFactorAlert()
      if (alert) alerts.push(alert)
    }

    if (type === 'all' || type === 'market_mode') {
      const alert = await generateMarketModeAlert()
      if (alert) alerts.push(alert)
    }

    return NextResponse.json({
      success: true,
      alerts,
      count: alerts.length,
      channel: TELEGRAM_CHANNEL_ID,
    })
  } catch (error) {
    console.error('Alert generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate alerts' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const alerts: string[] = []

    const fgAlert = await generateFearGreedAlert()
    if (fgAlert) alerts.push(fgAlert)

    const edgeAlert = await generateEdgeFactorAlert()
    if (edgeAlert) alerts.push(edgeAlert)

    const modeAlert = await generateMarketModeAlert()
    if (modeAlert) alerts.push(modeAlert)

    return NextResponse.json({
      success: true,
      alerts,
      count: alerts.length,
      channel: TELEGRAM_CHANNEL_ID,
    })
  } catch (error) {
    console.error('Alert generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate alerts' },
      { status: 500 }
    )
  }
}
