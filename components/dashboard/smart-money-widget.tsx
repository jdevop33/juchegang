'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Wallet, TrendingUp, TrendingDown, RefreshCw, AlertTriangle, Zap } from 'lucide-react'

interface SmartMoneyToken {
  token: string
  symbol: string
  name: string
  chain: string
  price: number
  priceChange24h: number
  buyVolume: number
  sellVolume: number
  netFlow: number
  smartMoneyBuyers: number
  smartMoneySellers: number
  signal: 'strong_buy' | 'buy' | 'neutral' | 'sell' | 'strong_sell'
}

interface SmartMoneySummary {
  totalBuyVolume: number
  totalSellVolume: number
  netFlow: number
  smartMoneySentiment: 'accumulating' | 'distributing' | 'neutral'
  strongBuySignals: number
  strongSellSignals: number
  chainsTracked: string[]
}

interface SmartMoneyWidgetProps {
  className?: string
  compact?: boolean
}

export function SmartMoneyWidget({ className, compact = false }: SmartMoneyWidgetProps) {
  const [tokens, setTokens] = useState<SmartMoneyToken[]>([])
  const [summary, setSummary] = useState<SmartMoneySummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedChain, setSelectedChain] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/dashboard/smart-money')
      const data = await res.json()
      setTokens(data.topBuyers || [])
      setSummary(data.summary || null)
    } catch (error) {
      console.error('Smart money fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 300000) // 5 min refresh
    return () => clearInterval(interval)
  }, [])

  const formatVolume = (v: number) => {
    if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`
    if (v >= 1e3) return `$${(v / 1e3).toFixed(1)}K`
    return `$${v.toFixed(0)}`
  }

  const getSignalColor = (signal: SmartMoneyToken['signal']) => {
    switch (signal) {
      case 'strong_buy': return 'text-green-400 bg-green-500/20'
      case 'buy': return 'text-green-300 bg-green-500/10'
      case 'strong_sell': return 'text-red-400 bg-red-500/20'
      case 'sell': return 'text-red-300 bg-red-500/10'
      default: return 'text-gray-400 bg-gray-500/10'
    }
  }

  const getChainColor = (chain: string) => {
    switch (chain) {
      case 'ethereum': return 'text-blue-400'
      case 'solana': return 'text-purple-400'
      case 'base': return 'text-blue-300'
      default: return 'text-gray-400'
    }
  }

  const filteredTokens = selectedChain
    ? tokens.filter(t => t.chain === selectedChain)
    : tokens

  if (compact) {
    return (
      <div className={cn('terminal-widget', className)}>
        <div className="terminal-widget-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            <span>SMART MONEY</span>
          </div>
          {summary && (
            <span className={cn(
              'terminal-badge text-[10px]',
              summary.smartMoneySentiment === 'accumulating' ? 'terminal-badge-green' :
              summary.smartMoneySentiment === 'distributing' ? 'terminal-badge-red' :
              'terminal-badge-amber'
            )}>
              {summary.smartMoneySentiment.toUpperCase()}
            </span>
          )}
        </div>
        <div className="p-3">
          <div className="space-y-2">
            {tokens.filter(t => t.signal === 'strong_buy').slice(0, 3).map((token, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-green-400" />
                  <span className={cn('text-xs', getChainColor(token.chain))}>
                    {token.chain.slice(0, 3).toUpperCase()}
                  </span>
                  <span className="text-sm text-white/80 truncate max-w-[100px]">
                    {token.symbol !== 'UNKNOWN' ? token.symbol : token.token.slice(0, 8)}
                  </span>
                </div>
                <span className="text-green-400 text-sm">
                  +{formatVolume(token.netFlow)}
                </span>
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
          <Wallet className="w-4 h-4" />
          <span>SMART MONEY FLOW</span>
        </div>
        <div className="flex items-center gap-2">
          {summary && (
            <span className={cn(
              'terminal-badge text-[10px]',
              summary.smartMoneySentiment === 'accumulating' ? 'terminal-badge-green' :
              summary.smartMoneySentiment === 'distributing' ? 'terminal-badge-red' :
              'terminal-badge-amber'
            )}>
              {summary.smartMoneySentiment.toUpperCase()}
            </span>
          )}
          <button
            onClick={fetchData}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            disabled={loading}
          >
            <RefreshCw className={cn('w-3 h-3', loading && 'animate-spin')} />
          </button>
        </div>
      </div>

      {/* Summary bar */}
      {summary && (
        <div className="px-3 py-2 border-b border-green-500/20 bg-black/30 flex items-center justify-between text-xs">
          <div>
            <span className="text-white/50">Buys:</span>
            <span className="terminal-green ml-1">{formatVolume(summary.totalBuyVolume)}</span>
          </div>
          <div>
            <span className="text-white/50">Sells:</span>
            <span className="terminal-red ml-1">{formatVolume(summary.totalSellVolume)}</span>
          </div>
          <div>
            <span className="text-white/50">Net:</span>
            <span className={cn('ml-1', summary.netFlow > 0 ? 'terminal-green' : 'terminal-red')}>
              {summary.netFlow > 0 ? '+' : ''}{formatVolume(summary.netFlow)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-green-400" />
            <span className="text-green-400">{summary.strongBuySignals}</span>
            <AlertTriangle className="w-3 h-3 text-red-400 ml-2" />
            <span className="text-red-400">{summary.strongSellSignals}</span>
          </div>
        </div>
      )}

      {/* Chain filter */}
      <div className="px-3 py-2 border-b border-green-500/20 flex gap-2">
        <button
          onClick={() => setSelectedChain(null)}
          className={cn(
            'terminal-btn text-xs',
            !selectedChain && 'border-green-400 bg-green-500/10'
          )}
        >
          All
        </button>
        {['ethereum', 'solana', 'base'].map(chain => (
          <button
            key={chain}
            onClick={() => setSelectedChain(chain)}
            className={cn(
              'terminal-btn text-xs',
              selectedChain === chain && 'border-green-400 bg-green-500/10'
            )}
          >
            {chain.charAt(0).toUpperCase() + chain.slice(1)}
          </button>
        ))}
      </div>

      {/* Token list */}
      <div className="max-h-[350px] overflow-auto terminal-scrollbar">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-black/80">
            <tr className="text-xs text-white/50 border-b border-green-500/20">
              <th className="text-left p-2">Token</th>
              <th className="text-center p-2">Chain</th>
              <th className="text-right p-2">Buy Vol</th>
              <th className="text-right p-2">Net Flow</th>
              <th className="text-center p-2">Signal</th>
            </tr>
          </thead>
          <tbody>
            {filteredTokens.slice(0, 15).map((token, i) => (
              <tr key={i} className="border-b border-green-500/10 hover:bg-green-500/5">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    {token.signal === 'strong_buy' && <Zap className="w-3 h-3 text-green-400" />}
                    {token.signal === 'strong_sell' && <AlertTriangle className="w-3 h-3 text-red-400" />}
                    <span className="terminal-amber font-mono text-xs">
                      {token.symbol !== 'UNKNOWN' ? token.symbol : token.token.slice(0, 10) + '...'}
                    </span>
                  </div>
                </td>
                <td className={cn('text-center p-2 text-xs', getChainColor(token.chain))}>
                  {token.chain.slice(0, 3).toUpperCase()}
                </td>
                <td className="text-right p-2 terminal-green font-mono">
                  {formatVolume(token.buyVolume)}
                </td>
                <td className={cn(
                  'text-right p-2 font-mono',
                  token.netFlow > 0 ? 'text-green-400' : token.netFlow < 0 ? 'text-red-400' : 'text-white/50'
                )}>
                  {token.netFlow > 0 ? '+' : ''}{formatVolume(token.netFlow)}
                </td>
                <td className="text-center p-2">
                  <span className={cn(
                    'text-[10px] px-2 py-0.5 rounded',
                    getSignalColor(token.signal)
                  )}>
                    {token.signal.replace('_', ' ').toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-3 py-1.5 border-t border-green-500/20 text-[10px] text-white/30">
        Powered by Nansen - Smart Money Analytics
      </div>
    </div>
  )
}
