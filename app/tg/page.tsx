'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import {
  TrendingUp,
  TrendingDown,
  Bitcoin,
  BarChart3,
  Droplets,
  Atom,
  RefreshCw,
  ExternalLink,
  Gauge
} from 'lucide-react'

// Telegram Mini App - Compact dashboard for mobile

interface CryptoData {
  btcPrice: number
  btcChange: number
  ethPrice: number
  ethChange: number
  fearGreed: { value: number; classification: string } | null
}

interface IndexData {
  spy: { close: number; change: number } | null
  qqq: { close: number; change: number } | null
  marketStatus: string
}

interface EdgeData {
  waterCrisis: number
  rareEarthRisk: number
  energyVulnerable: number
}

export default function TelegramMiniApp() {
  const [crypto, setCrypto] = useState<CryptoData | null>(null)
  const [indices, setIndices] = useState<IndexData | null>(null)
  const [edge, setEdge] = useState<EdgeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const [cryptoRes, indicesRes, edgeRes] = await Promise.all([
        fetch('/api/dashboard/crypto').then(r => r.json()),
        fetch('/api/dashboard/indices').then(r => r.json()),
        fetch('/api/dashboard/edge-factors').then(r => r.json()),
      ])

      const btc = cryptoRes?.prices?.find((p: any) => p.id === 'bitcoin')
      const eth = cryptoRes?.prices?.find((p: any) => p.id === 'ethereum')

      setCrypto({
        btcPrice: btc?.price || 0,
        btcChange: btc?.change24h || 0,
        ethPrice: eth?.price || 0,
        ethChange: eth?.change24h || 0,
        fearGreed: cryptoRes?.stats?.fearGreedIndex || null,
      })

      const spy = indicesRes?.indices?.find((i: any) => i.symbol === 'SPY')
      const qqq = indicesRes?.indices?.find((i: any) => i.symbol === 'QQQ')

      setIndices({
        spy: spy ? { close: spy.close, change: spy.changePercent } : null,
        qqq: qqq ? { close: qqq.close, change: qqq.changePercent } : null,
        marketStatus: indicesRes?.marketSummary?.marketStatus || 'unknown',
      })

      setEdge({
        waterCrisis: edgeRes?.water?.filter((w: any) => w.scarcityIndex >= 4).length || 0,
        rareEarthRisk: edgeRes?.rareEarth?.filter((r: any) => r.supplyRisk === 'critical').length || 0,
        energyVulnerable: edgeRes?.energyIndependence?.filter((e: any) => e.independenceRatio < 0.3).length || 0,
      })

      setLastUpdate(new Date())
    } catch (error) {
      console.error('Fetch error:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (p: number) =>
    p >= 1000 ? `$${p.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : `$${p.toFixed(2)}`

  const formatChange = (c: number) => (
    <span className={cn(
      'flex items-center gap-1',
      c > 0 ? 'text-green-400' : c < 0 ? 'text-red-400' : 'text-gray-400'
    )}>
      {c > 0 ? <TrendingUp className="w-3 h-3" /> : c < 0 ? <TrendingDown className="w-3 h-3" /> : null}
      {c > 0 ? '+' : ''}{c.toFixed(2)}%
    </span>
  )

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-lg font-bold text-amber-400">SOVEREIGN ALPHA</h1>
          <p className="text-xs text-gray-400">Macro Intelligence</p>
        </div>
        <button
          onClick={fetchData}
          disabled={loading}
          className="p-2 bg-white/10 rounded-lg"
        >
          <RefreshCw className={cn('w-4 h-4', loading && 'animate-spin')} />
        </button>
      </div>

      {/* Fear & Greed */}
      {crypto?.fearGreed && (
        <div className={cn(
          'mb-4 p-3 rounded-xl',
          crypto.fearGreed.value >= 50 ? 'bg-green-500/20' : 'bg-red-500/20'
        )}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5" />
              <span className="text-sm font-medium">Fear & Greed</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{crypto.fearGreed.value}</div>
              <div className="text-xs opacity-70">{crypto.fearGreed.classification}</div>
            </div>
          </div>
        </div>
      )}

      {/* Crypto */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
          <Bitcoin className="w-4 h-4" />
          CRYPTO
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-xs text-amber-400 mb-1">BTC</div>
            <div className="text-lg font-bold text-green-400">{formatPrice(crypto?.btcPrice || 0)}</div>
            {formatChange(crypto?.btcChange || 0)}
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-xs text-amber-400 mb-1">ETH</div>
            <div className="text-lg font-bold text-green-400">{formatPrice(crypto?.ethPrice || 0)}</div>
            {formatChange(crypto?.ethChange || 0)}
          </div>
        </div>
      </div>

      {/* Indices */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
          <BarChart3 className="w-4 h-4" />
          EQUITIES
          {indices?.marketStatus && (
            <span className={cn(
              'ml-auto text-xs px-2 py-0.5 rounded',
              indices.marketStatus === 'risk-on' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            )}>
              {indices.marketStatus.toUpperCase()}
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {indices?.spy && (
            <div className="bg-white/5 rounded-xl p-3">
              <div className="text-xs text-amber-400 mb-1">S&P 500</div>
              <div className="text-lg font-bold text-green-400">{formatPrice(indices.spy.close)}</div>
              {formatChange(indices.spy.change)}
            </div>
          )}
          {indices?.qqq && (
            <div className="bg-white/5 rounded-xl p-3">
              <div className="text-xs text-amber-400 mb-1">Nasdaq</div>
              <div className="text-lg font-bold text-green-400">{formatPrice(indices.qqq.close)}</div>
              {formatChange(indices.qqq.change)}
            </div>
          )}
        </div>
      </div>

      {/* Edge Factors */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
          <Atom className="w-4 h-4" />
          EDGE FACTORS
        </div>
        <div className="bg-white/5 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Droplets className="w-4 h-4 text-blue-400" />
              Water Crisis
            </div>
            <span className={cn(
              'text-sm font-medium',
              (edge?.waterCrisis || 0) > 0 ? 'text-red-400' : 'text-green-400'
            )}>
              {edge?.waterCrisis || 0} nations
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Atom className="w-4 h-4 text-purple-400" />
              Rare Earth Risk
            </div>
            <span className={cn(
              'text-sm font-medium',
              (edge?.rareEarthRisk || 0) > 0 ? 'text-red-400' : 'text-green-400'
            )}>
              {edge?.rareEarthRisk || 0} elements
            </span>
          </div>
        </div>
      </div>

      {/* Full Dashboard Link */}
      <a
        href="/dashboard"
        target="_blank"
        className="flex items-center justify-center gap-2 w-full p-3 bg-amber-500/20 text-amber-400 rounded-xl font-medium"
      >
        <ExternalLink className="w-4 h-4" />
        Open Full Dashboard
      </a>

      {/* Footer */}
      {lastUpdate && (
        <div className="mt-4 text-center text-xs text-gray-500">
          Updated: {lastUpdate.toLocaleTimeString()}
        </div>
      )}
    </div>
  )
}
