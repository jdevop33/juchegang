'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { BarChart3, TrendingUp, TrendingDown, RefreshCw, Globe } from 'lucide-react'
import { getCountryFlag } from '@/data/countries'

interface IndexData {
  symbol: string
  name: string
  country: string
  type: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  change: number
  changePercent: number
  trend: 'up' | 'down' | 'neutral'
  date: string
}

interface IndicesWidgetProps {
  className?: string
  compact?: boolean
}

export function IndicesWidget({ className, compact = false }: IndicesWidgetProps) {
  const [indices, setIndices] = useState<IndexData[]>([])
  const [marketSummary, setMarketSummary] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const fetchIndices = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/dashboard/indices')
      const data = await res.json()
      setIndices(data.indices || [])
      setMarketSummary(data.marketSummary || null)
    } catch (error) {
      console.error('Indices fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchIndices()
    const interval = setInterval(fetchIndices, 300000) // 5 min refresh
    return () => clearInterval(interval)
  }, [])

  const stockIndices = indices.filter(i => i.type === 'index')
  const commodities = indices.filter(i => i.type === 'commodity')

  if (compact) {
    return (
      <div className={cn('terminal-widget', className)}>
        <div className="terminal-widget-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            <span>INDICES</span>
          </div>
          {marketSummary && (
            <span className={cn(
              'terminal-badge text-[10px]',
              marketSummary.marketStatus === 'risk-on' ? 'terminal-badge-green' : 'terminal-badge-red'
            )}>
              {marketSummary.marketStatus.toUpperCase()}
            </span>
          )}
        </div>
        <div className="p-3">
          <div className="grid grid-cols-2 gap-3">
            {stockIndices.slice(0, 4).map((index) => (
              <div key={index.symbol} className="bg-black/30 rounded p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="terminal-amber text-xs font-medium">{index.name}</span>
                  <span className="text-[10px]">{getCountryFlag(index.country)}</span>
                </div>
                <div className="terminal-green font-mono text-sm">${index.close.toFixed(2)}</div>
                <div className={cn(
                  'text-xs flex items-center gap-1',
                  index.changePercent > 0 ? 'text-green-400' : index.changePercent < 0 ? 'text-red-400' : 'text-white/50'
                )}>
                  {index.changePercent > 0 ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : index.changePercent < 0 ? (
                    <TrendingDown className="w-3 h-3" />
                  ) : null}
                  {index.changePercent > 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
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
          <BarChart3 className="w-4 h-4" />
          <span>GLOBAL INDICES</span>
        </div>
        <div className="flex items-center gap-2">
          {marketSummary && (
            <span className={cn(
              'terminal-badge text-[10px]',
              marketSummary.marketStatus === 'risk-on' ? 'terminal-badge-green' : 'terminal-badge-red'
            )}>
              {marketSummary.marketStatus.toUpperCase()}
            </span>
          )}
          <button
            onClick={fetchIndices}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            disabled={loading}
          >
            <RefreshCw className={cn('w-3 h-3', loading && 'animate-spin')} />
          </button>
        </div>
      </div>

      {/* Market summary bar */}
      {marketSummary && (
        <div className="px-3 py-2 border-b border-green-500/20 bg-black/30 flex items-center justify-between text-xs">
          <div>
            <span className="text-white/50">S&P 500:</span>
            <span className={cn(
              'ml-1',
              (marketSummary.sp500?.change || 0) >= 0 ? 'terminal-green' : 'terminal-red'
            )}>
              {marketSummary.sp500?.change > 0 ? '+' : ''}{marketSummary.sp500?.change?.toFixed(2)}%
            </span>
          </div>
          <div>
            <span className="text-white/50">Nasdaq:</span>
            <span className={cn(
              'ml-1',
              (marketSummary.nasdaq?.change || 0) >= 0 ? 'terminal-green' : 'terminal-red'
            )}>
              {marketSummary.nasdaq?.change > 0 ? '+' : ''}{marketSummary.nasdaq?.change?.toFixed(2)}%
            </span>
          </div>
          <div>
            <span className="text-white/50">Trading Day:</span>
            <span className="terminal-amber ml-1">{marketSummary.tradingDay}</span>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 divide-x divide-green-500/20">
        {/* Stock Indices */}
        <div>
          <div className="px-3 py-1.5 text-xs text-white/50 bg-black/20 flex items-center gap-1">
            <Globe className="w-3 h-3" />
            STOCK INDICES
          </div>
          <div className="max-h-[250px] overflow-auto terminal-scrollbar">
            {stockIndices.map((index) => (
              <div
                key={index.symbol}
                className="px-3 py-2 border-b border-green-500/10 hover:bg-green-500/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{getCountryFlag(index.country)}</span>
                  <div>
                    <div className="terminal-amber text-sm font-medium">{index.name}</div>
                    <div className="text-[10px] text-white/40">{index.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="terminal-green font-mono">${index.close.toFixed(2)}</div>
                  <div className={cn(
                    'text-xs flex items-center justify-end gap-1',
                    index.changePercent > 0 ? 'text-green-400' : index.changePercent < 0 ? 'text-red-400' : 'text-white/50'
                  )}>
                    {index.changePercent > 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : index.changePercent < 0 ? (
                      <TrendingDown className="w-3 h-3" />
                    ) : null}
                    {index.changePercent > 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commodity ETFs */}
        <div>
          <div className="px-3 py-1.5 text-xs text-white/50 bg-black/20 flex items-center gap-1">
            <BarChart3 className="w-3 h-3" />
            COMMODITY ETFs
          </div>
          <div className="max-h-[250px] overflow-auto terminal-scrollbar">
            {commodities.map((commodity) => (
              <div
                key={commodity.symbol}
                className="px-3 py-2 border-b border-green-500/10 hover:bg-green-500/5 flex items-center justify-between"
              >
                <div>
                  <div className="terminal-amber text-sm font-medium">{commodity.name}</div>
                  <div className="text-[10px] text-white/40">{commodity.symbol}</div>
                </div>
                <div className="text-right">
                  <div className="terminal-green font-mono">${commodity.close.toFixed(2)}</div>
                  <div className={cn(
                    'text-xs flex items-center justify-end gap-1',
                    commodity.changePercent > 0 ? 'text-green-400' : commodity.changePercent < 0 ? 'text-red-400' : 'text-white/50'
                  )}>
                    {commodity.changePercent > 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : commodity.changePercent < 0 ? (
                      <TrendingDown className="w-3 h-3" />
                    ) : null}
                    {commodity.changePercent > 0 ? '+' : ''}{commodity.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-1.5 border-t border-green-500/20 text-[10px] text-white/30">
        EOD data via Marketstack (100 req/month free tier)
      </div>
    </div>
  )
}
