'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

// TradingView Free Widget Embeds
// No license required - uses TradingView's public widget scripts

interface TradingViewChartProps {
  symbol?: string
  interval?: string
  theme?: 'dark' | 'light'
  className?: string
  height?: number
}

export function TradingViewChart({
  symbol = 'BINANCE:BTCUSDT',
  interval = 'D',
  theme = 'dark',
  className,
  height = 400,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval,
      timezone: 'Etc/UTC',
      theme,
      style: '1',
      locale: 'en',
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    })

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [symbol, interval, theme])

  return (
    <div className={cn('terminal-widget overflow-hidden', className)}>
      <div className="terminal-widget-header">
        CHART: {symbol.split(':')[1] || symbol}
      </div>
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height }}
      />
    </div>
  )
}

interface TradingViewTickerProps {
  symbols?: string[]
  theme?: 'dark' | 'light'
  className?: string
}

export function TradingViewTicker({
  symbols = [
    { proName: 'BINANCE:BTCUSDT', title: 'BTC/USDT' },
    { proName: 'BINANCE:ETHUSDT', title: 'ETH/USDT' },
    { proName: 'FX:EURUSD', title: 'EUR/USD' },
    { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
    { proName: 'FOREXCOM:NSXUSD', title: 'Nasdaq' },
    { proName: 'COMEX:GC1!', title: 'Gold' },
  ] as any,
  theme = 'dark',
  className,
}: TradingViewTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols,
      showSymbolLogo: true,
      colorTheme: theme,
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    })

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [symbols, theme])

  return (
    <div ref={containerRef} className={cn('tradingview-widget-container', className)} />
  )
}

interface TradingViewMarketOverviewProps {
  theme?: 'dark' | 'light'
  className?: string
  height?: number
}

export function TradingViewMarketOverview({
  theme = 'dark',
  className,
  height = 400,
}: TradingViewMarketOverviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      colorTheme: theme,
      dateRange: '1D',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      width: '100%',
      height,
      tabs: [
        {
          title: 'Crypto',
          symbols: [
            { s: 'BINANCE:BTCUSDT', d: 'Bitcoin' },
            { s: 'BINANCE:ETHUSDT', d: 'Ethereum' },
            { s: 'BINANCE:SOLUSDT', d: 'Solana' },
            { s: 'BINANCE:BNBUSDT', d: 'BNB' },
          ],
          originalTitle: 'Crypto',
        },
        {
          title: 'Indices',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'Nasdaq' },
            { s: 'FOREXCOM:DJI', d: 'Dow Jones' },
          ],
          originalTitle: 'Indices',
        },
        {
          title: 'Forex',
          symbols: [
            { s: 'FX:EURUSD', d: 'EUR/USD' },
            { s: 'FX:GBPUSD', d: 'GBP/USD' },
            { s: 'FX:USDJPY', d: 'USD/JPY' },
          ],
          originalTitle: 'Forex',
        },
        {
          title: 'Commodities',
          symbols: [
            { s: 'COMEX:GC1!', d: 'Gold' },
            { s: 'NYMEX:CL1!', d: 'Crude Oil' },
            { s: 'COMEX:SI1!', d: 'Silver' },
          ],
          originalTitle: 'Commodities',
        },
      ],
    })

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [theme, height])

  return (
    <div className={cn('terminal-widget overflow-hidden', className)}>
      <div className="terminal-widget-header">
        MARKET OVERVIEW
      </div>
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  )
}

interface TradingViewTechnicalAnalysisProps {
  symbol?: string
  theme?: 'dark' | 'light'
  className?: string
  height?: number
}

export function TradingViewTechnicalAnalysis({
  symbol = 'BINANCE:BTCUSDT',
  theme = 'dark',
  className,
  height = 400,
}: TradingViewTechnicalAnalysisProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      interval: '1D',
      width: '100%',
      isTransparent: true,
      height,
      symbol,
      showIntervalTabs: true,
      locale: 'en',
      colorTheme: theme,
    })

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [symbol, theme, height])

  return (
    <div className={cn('terminal-widget overflow-hidden', className)}>
      <div className="terminal-widget-header">
        TECHNICAL ANALYSIS: {symbol.split(':')[1] || symbol}
      </div>
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  )
}

interface TradingViewCryptoHeatmapProps {
  theme?: 'dark' | 'light'
  className?: string
  height?: number
}

export function TradingViewCryptoHeatmap({
  theme = 'dark',
  className,
  height = 400,
}: TradingViewCryptoHeatmapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      dataSource: 'Crypto',
      blockSize: 'market_cap_calc',
      blockColor: 'change',
      locale: 'en',
      symbolUrl: '',
      colorTheme: theme,
      hasTopBar: true,
      isDataSet498Enabled: true,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      width: '100%',
      height,
    })

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [theme, height])

  return (
    <div className={cn('terminal-widget overflow-hidden', className)}>
      <div className="terminal-widget-header">
        CRYPTO HEATMAP
      </div>
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  )
}
