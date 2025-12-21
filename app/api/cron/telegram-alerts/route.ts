// Vercel Cron: Check and post alerts to Telegram
// Runs every 4 hours

import { NextResponse } from 'next/server'

const TELEGRAM_CHANNEL_ID = 3513940012
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

async function sendTelegramMessage(chatId: number, text: string) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.log('No bot token, skipping Telegram post')
    return { ok: false, error: 'No bot token configured' }
  }

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    }
  )

  return response.json()
}

async function checkFearGreedAlert(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  const res = await fetch(`${baseUrl}/api/dashboard/crypto`, { cache: 'no-store' })
  const data = await res.json()

  const fg = data?.stats?.fearGreedIndex
  if (!fg) return null

  if (fg.value <= 15) {
    return `🚨 *EXTREME FEAR ALERT*

Fear & Greed: *${fg.value}* (${fg.classification})

📉 Market panic levels reached
💡 Historic buying opportunities form at these levels

BTC: $${data.stats.btcPrice?.toLocaleString()}

🔗 juchegang.vercel.app/dashboard`
  }

  if (fg.value >= 85) {
    return `🚨 *EXTREME GREED ALERT*

Fear & Greed: *${fg.value}* (${fg.classification})

📈 Market euphoria at dangerous levels
⚠️ Distribution zones often form here

BTC: $${data.stats.btcPrice?.toLocaleString()}

🔗 juchegang.vercel.app/dashboard`
  }

  return null
}

async function checkNewsAlert(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  const res = await fetch(`${baseUrl}/api/dashboard/news?limit=10`, { cache: 'no-store' })
  const data = await res.json()

  const sentiment = data?.sentiment
  if (!sentiment) return null

  // Alert on extreme sentiment skew
  const total = sentiment.positive + sentiment.negative + sentiment.neutral
  if (total === 0) return null

  const positiveRatio = sentiment.positive / total
  const negativeRatio = sentiment.negative / total

  if (positiveRatio > 0.7) {
    return `📰 *NEWS SENTIMENT ALERT*

Sentiment: 🟢 *EXTREMELY BULLISH*
${sentiment.positive}/${total} articles positive

Top Headlines:
${data.articles?.slice(0, 3).map((a: any) => `• ${a.title.slice(0, 50)}...`).join('\n')}

⚠️ Extreme bullish sentiment often precedes corrections

🔗 juchegang.vercel.app/dashboard`
  }

  if (negativeRatio > 0.7) {
    return `📰 *NEWS SENTIMENT ALERT*

Sentiment: 🔴 *EXTREMELY BEARISH*
${sentiment.negative}/${total} articles negative

Top Headlines:
${data.articles?.slice(0, 3).map((a: any) => `• ${a.title.slice(0, 50)}...`).join('\n')}

💡 Extreme bearish sentiment often marks bottoms

🔗 juchegang.vercel.app/dashboard`
  }

  return null
}

async function checkEarningsAlert(): Promise<string | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  const res = await fetch(`${baseUrl}/api/dashboard/earnings`, { cache: 'no-store' })
  const data = await res.json()

  if (!data?.earnings?.length) return null

  // Find any recent filings (within last 7 days)
  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  const recentEarnings = data.earnings.filter((e: any) => {
    const filingDate = new Date(e.filingDate)
    return filingDate >= weekAgo
  })

  if (recentEarnings.length === 0) return null

  const formatB = (n: number) => `$${(n / 1e9).toFixed(1)}B`

  let msg = `🏢 *EARNINGS UPDATE*\n\n`
  msg += `${recentEarnings.length} recent SEC filings:\n\n`

  recentEarnings.slice(0, 4).forEach((e: any) => {
    const epsEmoji = e.eps > 0 ? '🟢' : '🔴'
    msg += `*${e.ticker}* (${e.name})\n`
    msg += `Revenue: ${formatB(e.revenue)} | EPS: ${epsEmoji}$${e.eps.toFixed(2)}\n`
    msg += `Filed: ${e.filingDate}\n\n`
  })

  msg += `🔗 juchegang.vercel.app/dashboard`

  return msg
}

export async function GET(request: Request) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      if (process.env.NODE_ENV === 'production' && process.env.CRON_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    const alerts: string[] = []
    const results: any[] = []

    // Check all alert types
    const fgAlert = await checkFearGreedAlert()
    if (fgAlert) {
      alerts.push(fgAlert)
      const result = await sendTelegramMessage(TELEGRAM_CHANNEL_ID, fgAlert)
      results.push({ type: 'fear_greed', result })
    }

    const newsAlert = await checkNewsAlert()
    if (newsAlert) {
      alerts.push(newsAlert)
      const result = await sendTelegramMessage(TELEGRAM_CHANNEL_ID, newsAlert)
      results.push({ type: 'news_sentiment', result })
    }

    const earningsAlert = await checkEarningsAlert()
    if (earningsAlert) {
      alerts.push(earningsAlert)
      const result = await sendTelegramMessage(TELEGRAM_CHANNEL_ID, earningsAlert)
      results.push({ type: 'earnings', result })
    }

    return NextResponse.json({
      success: true,
      alertsGenerated: alerts.length,
      alerts,
      results,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Cron alerts error:', error)
    return NextResponse.json(
      { error: 'Failed to check alerts', details: String(error) },
      { status: 500 }
    )
  }
}
