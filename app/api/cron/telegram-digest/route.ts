// Vercel Cron: Post daily digest to Telegram
// Runs at 8:00 AM UTC daily

import { NextResponse } from 'next/server'

const TELEGRAM_CHANNEL_ID = 3513940012
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

// Telegram Bot API (for cron - can't use MCP here)
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

async function fetchDigestData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const [cryptoRes, indicesRes, marketsRes, edgeRes, newsRes] = await Promise.all([
    fetch(`${baseUrl}/api/dashboard/crypto`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/indices`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/markets`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/edge-factors`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
    fetch(`${baseUrl}/api/dashboard/news?limit=3`, { cache: 'no-store' }).then(r => r.json()).catch(() => null),
  ])

  return { cryptoRes, indicesRes, marketsRes, edgeRes, newsRes }
}

function formatDigestMessage(data: any): string {
  const { cryptoRes, indicesRes, marketsRes, edgeRes, newsRes } = data

  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  const btc = cryptoRes?.prices?.find((p: any) => p.id === 'bitcoin')
  const eth = cryptoRes?.prices?.find((p: any) => p.id === 'ethereum')
  const spy = indicesRes?.indices?.find((i: any) => i.symbol === 'SPY')
  const qqq = indicesRes?.indices?.find((i: any) => i.symbol === 'QQQ')
  const fearGreed = cryptoRes?.stats?.fearGreedIndex

  const formatChange = (c: number) => `${c > 0 ? '📈+' : c < 0 ? '📉' : '➡️'}${c.toFixed(2)}%`
  const formatPrice = (p: number) => p >= 1000 ? `$${p.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : `$${p.toFixed(2)}`

  let msg = `🌐 *SOVEREIGN ALPHA* | ${dateStr}\n`
  msg += `━━━━━━━━━━━━━━━━━━━━\n\n`

  // Crypto
  if (btc) {
    msg += `🪙 *CRYPTO*\n`
    msg += `BTC: ${formatPrice(btc.price)} ${formatChange(btc.change24h)}\n`
    if (eth) msg += `ETH: ${formatPrice(eth.price)} ${formatChange(eth.change24h)}\n`
    if (fearGreed) {
      const emoji = fearGreed.value >= 50 ? '🟢' : '🔴'
      msg += `F&G: ${emoji} ${fearGreed.value} (${fearGreed.classification})\n`
    }
    msg += `\n`
  }

  // Equities
  if (spy) {
    msg += `📊 *EQUITIES*\n`
    msg += `SPY: ${formatPrice(spy.close)} ${formatChange(spy.changePercent)}\n`
    if (qqq) msg += `QQQ: ${formatPrice(qqq.close)} ${formatChange(qqq.changePercent)}\n`
    msg += `\n`
  }

  // Edge Factors
  const criticalWater = edgeRes?.water?.filter((w: any) => w.scarcityIndex >= 4).length || 0
  if (criticalWater > 0) {
    msg += `⚡ *EDGE*: ${criticalWater} nations in water crisis\n\n`
  }

  // Top News
  if (newsRes?.articles?.length > 0) {
    msg += `📰 *TOP NEWS*\n`
    newsRes.articles.slice(0, 2).forEach((a: any) => {
      const sentiment = a.sentiment === 'positive' ? '🟢' : a.sentiment === 'negative' ? '🔴' : '🟡'
      msg += `${sentiment} ${a.title.slice(0, 60)}...\n`
    })
    msg += `\n`
  }

  msg += `━━━━━━━━━━━━━━━━━━━━\n`
  msg += `🔗 juchegang.vercel.app/dashboard`

  return msg
}

export async function GET(request: Request) {
  try {
    // Verify cron secret (Vercel sends this)
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      // Allow without auth in dev
      if (process.env.NODE_ENV === 'production' && process.env.CRON_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    const data = await fetchDigestData()
    const message = formatDigestMessage(data)

    // Send to Telegram
    const result = await sendTelegramMessage(TELEGRAM_CHANNEL_ID, message)

    return NextResponse.json({
      success: true,
      message,
      telegram: result,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Cron digest error:', error)
    return NextResponse.json(
      { error: 'Failed to post digest', details: String(error) },
      { status: 500 }
    )
  }
}
