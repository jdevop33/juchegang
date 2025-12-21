'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Bitcoin, TrendingUp, TrendingDown, RefreshCw, Gauge } from 'lucide-react'

interface CryptoPrice {
  id: string
  symbol: string
  name: string
  price: number
  marketCap: number
  volume24h: number
  change24h: number
  change7d: number
  trend: 'up' | 'down' | 'neutral'
}

interface CryptoStats {
  totalMarketCap: number
  btcDominance: string
  btcPrice: number
  ethPrice: number
  fearGreedIndex: { value: number; classification: string } | null
}

interface CryptoWidgetProps {
  className?: string
  compact?: boolean
}

export function CryptoWidget({ className, compact = false }: CryptoWidgetProps) {
  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [stats, setStats] = useState<CryptoStats | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchCrypto = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/dashboard/crypto')
      const data = await res.json()
      setPrices(data.prices || [])
      setStats(data.stats || null)
    } catch (error) {
      console.error('Crypto fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCrypto()
    const interval = setInterval(fetchCrypto, 60000) // Refresh every minute
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (p: number) => {
    if (p >= 1000) return `$${p.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    if (p >= 1) return `$${p.toFixed(2)}`
    return `$${p.toFixed(4)}`
  }

  const formatMarketCap = (mc: number) => {
    if (mc >= 1e12) return `$${(mc / 1e12).toFixed(2)}T`
    if (mc >= 1e9) return `$${(mc / 1e9).toFixed(1)}B`
    return `$${(mc / 1e6).toFixed(0)}M`
  }

  const getFearGreedColor = (value: number) => {
    if (value >= 75) return 'terminal-green'
    if (value >= 50) return 'terminal-amber'
    if (value >= 25) return 'terminal-amber'
    return 'terminal-red'
  }

  if (compact) {
    return (
      <div className={cn('terminal-widget', className)}>
        <div className="terminal-widget-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bitcoin className="w-4 h-4" />
            <span>CRYPTO</span>
          </div>
          <span className="terminal-live text-xs">LIVE</span>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-2 gap-3">
            {prices.slice(0, 4).map((crypto) => (
              <div key={crypto.id} className="bg-black/30 rounded p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="terminal-amber text-xs font-medium">{crypto.symbol}</span>
                  {crypto.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : crypto.trend === 'down' ? (
                    <TrendingDown className="w-3 h-3 text-red-400" />
                  ) : null}
                </div>
                <div className="terminal-green font-mono text-sm">{formatPrice(crypto.price)}</div>
                <div className={cn(
                  'text-xs',
                  crypto.change24h > 0 ? 'text-green-400' : crypto.change24h < 0 ? 'text-red-400' : 'text-white/50'
                )}>
                  {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('terminal-widget', className)}>
      <div className="terminal-widget-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bitcoin className="w-4 h-4" />
          <span>CRYPTOCURRENCY</span>
        </div>
        <div className="flex items-center gap-2">
          {stats?.fearGreedIndex && (
            <span className={cn(
              'terminal-badge text-[10px]',
              stats.fearGreedIndex.value >= 50 ? 'terminal-badge-green' : 'terminal-badge-red'
            )}>
              <Gauge className="w-3 h-3 mr-1 inline" />
              {stats.fearGreedIndex.classification}
            </span>
          )}
          <button
            onClick={fetchCrypto}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            disabled={loading}
          >
            <RefreshCw className={cn('w-3 h-3', loading && 'animate-spin')} />
          </button>
        </div>
      </div>

      {/* Stats bar */}
      {stats && (
        <div className="px-3 py-2 border-b border-green-500/20 bg-black/30 flex items-center justify-between text-xs">
          <div>
            <span className="text-white/50">Market Cap:</span>
            <span className="terminal-green ml-1">{formatMarketCap(stats.totalMarketCap)}</span>
          </div>
          <div>
            <span className="text-white/50">BTC Dom:</span>
            <span className="terminal-amber ml-1">{stats.btcDominance}%</span>
          </div>
          {stats.fearGreedIndex && (
            <div>
              <span className="text-white/50">Fear/Greed:</span>
              <span className={cn('ml-1', getFearGreedColor(stats.fearGreedIndex.value))}>
                {stats.fearGreedIndex.value}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Prices table */}
      <div className="max-h-[300px] overflow-auto terminal-scrollbar">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-black/80">
            <tr className="text-xs text-white/50 border-b border-green-500/20">
              <th className="text-left p-2">Asset</th>
              <th className="text-right p-2">Price</th>
              <th className="text-right p-2">24h</th>
              <th className="text-right p-2">7d</th>
              <th className="text-right p-2">MCap</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((crypto) => (
              <tr key={crypto.id} className="border-b border-green-500/10 hover:bg-green-500/5">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span className="terminal-amber font-medium">{crypto.symbol}</span>
                    <span className="text-white/50 text-xs">{crypto.name}</span>
                  </div>
                </td>
                <td className="text-right p-2 terminal-green font-mono">
                  {formatPrice(crypto.price)}
                </td>
                <td className={cn(
                  'text-right p-2 font-mono',
                  crypto.change24h > 0 ? 'text-green-400' : crypto.change24h < 0 ? 'text-red-400' : 'text-white/50'
                )}>
                  {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                </td>
                <td className={cn(
                  'text-right p-2 font-mono',
                  crypto.change7d > 0 ? 'text-green-400' : crypto.change7d < 0 ? 'text-red-400' : 'text-white/50'
                )}>
                  {crypto.change7d > 0 ? '+' : ''}{crypto.change7d.toFixed(2)}%
                </td>
                <td className="text-right p-2 text-white/60">
                  {formatMarketCap(crypto.marketCap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
