// TradingView Webhook Receiver
// Receives alerts from TradingView Premium and forwards to Telegram
// Webhook URL: https://sovereign-alpha.vercel.app/api/tradingview/webhook

import { NextResponse } from 'next/server'

const TELEGRAM_CHANNEL_ID = -1003513940012
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

// TradingView webhook IPs for verification (optional security)
const TRADINGVIEW_IPS = [
  '52.89.214.238',
  '34.212.75.30',
  '54.218.53.128',
  '52.32.178.7',
]

async function sendTelegramMessage(text: string) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.log('No bot token configured')
    return { ok: false, error: 'No bot token' }
  }

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text,
        parse_mode: 'Markdown',
      }),
    }
  )

  return response.json()
}

export async function POST(request: Request) {
  try {
    // Get client IP for optional verification
    const forwardedFor = request.headers.get('x-forwarded-for')
    const clientIp = forwardedFor?.split(',')[0]?.trim()

    // Parse the webhook payload
    const contentType = request.headers.get('content-type') || ''
    let payload: any

    if (contentType.includes('application/json')) {
      payload = await request.json()
    } else {
      payload = await request.text()
    }

    console.log('TradingView webhook received:', payload)

    // Format the Telegram message
    let telegramMessage: string

    if (typeof payload === 'string') {
      // Plain text alert
      telegramMessage = `📊 *TradingView Alert*\n\n${payload}`
    } else if (typeof payload === 'object') {
      // JSON alert - parse known fields
      const {
        ticker,
        symbol,
        exchange,
        price,
        close,
        volume,
        action,
        strategy,
        interval,
        time,
        message,
        text,
        ...rest
      } = payload

      const sym = ticker || symbol || 'Unknown'
      const currentPrice = price || close

      let msg = `📊 *TradingView Alert*\n\n`

      if (sym !== 'Unknown') {
        msg += `*Symbol:* ${exchange ? `${exchange}:` : ''}${sym}\n`
      }

      if (currentPrice) {
        msg += `*Price:* $${Number(currentPrice).toLocaleString()}\n`
      }

      if (volume) {
        msg += `*Volume:* ${Number(volume).toLocaleString()}\n`
      }

      if (interval) {
        msg += `*Interval:* ${interval}\n`
      }

      if (action) {
        const emoji = action.toLowerCase().includes('buy') ? '🟢' :
                      action.toLowerCase().includes('sell') ? '🔴' : '⚪'
        msg += `*Action:* ${emoji} ${action.toUpperCase()}\n`
      }

      if (strategy) {
        msg += `*Strategy:* ${strategy}\n`
      }

      if (message || text) {
        msg += `\n${message || text}`
      }

      // Include any extra fields
      const extraFields = Object.entries(rest)
      if (extraFields.length > 0 && extraFields.length <= 5) {
        msg += '\n'
        extraFields.forEach(([key, value]) => {
          msg += `*${key}:* ${value}\n`
        })
      }

      msg += `\n_via TradingView Webhook_`

      telegramMessage = msg
    } else {
      telegramMessage = `📊 *TradingView Alert*\n\nAlert triggered`
    }

    // Send to Telegram
    const result = await sendTelegramMessage(telegramMessage)

    return NextResponse.json({
      success: true,
      telegram: result,
      received: typeof payload === 'object' ? payload : { text: payload },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('TradingView webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed', details: String(error) },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'TradingView Webhook Receiver',
    webhook_url: 'https://sovereign-alpha.vercel.app/api/tradingview/webhook',
    method: 'POST',
    accepts: ['application/json', 'text/plain'],
    telegram_channel: TELEGRAM_CHANNEL_ID,
    example_payload: {
      ticker: 'BTCUSDT',
      exchange: 'BINANCE',
      price: '{{close}}',
      action: 'BUY',
      message: 'Price crossed above 50 EMA'
    },
    timestamp: new Date().toISOString(),
  })
}
