'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { FileText, TrendingUp, TrendingDown, RefreshCw, Building2 } from 'lucide-react'

interface EarningsData {
  ticker: string
  name: string
  sector: string
  fiscalYear: number
  fiscalQuarter: number
  revenue: number
  netIncome: number
  eps: number
  grossProfit: number
  operatingIncome: number
  filingDate: string
  periodEnd: string
}

interface EarningsWidgetProps {
  className?: string
  compact?: boolean
}

export function EarningsWidget({ className, compact = false }: EarningsWidgetProps) {
  const [earnings, setEarnings] = useState<EarningsData[]>([])
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedSector, setSelectedSector] = useState<string | null>(null)

  const fetchEarnings = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/dashboard/earnings')
      const data = await res.json()
      setEarnings(data.earnings || [])
      setStats(data.stats || null)
    } catch (error) {
      console.error('Earnings fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEarnings()
  }, [])

  const formatBillions = (n: number) => {
    if (n >= 1e12) return `$${(n / 1e12).toFixed(1)}T`
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
    return `$${n.toLocaleString()}`
  }

  const sectors = [...new Set(earnings.map(e => e.sector))]
  const filteredEarnings = selectedSector
    ? earnings.filter(e => e.sector === selectedSector)
    : earnings

  if (compact) {
    return (
      <div className={cn('terminal-widget', className)}>
        <div className="terminal-widget-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>EARNINGS</span>
          </div>
          <span className="terminal-badge terminal-badge-amber text-[10px]">SEC</span>
        </div>
        <div className="p-3 space-y-2">
          {earnings.slice(0, 4).map((e) => (
            <div key={e.ticker} className="flex items-center justify-between py-1 border-b border-green-500/10 last:border-0">
              <div className="flex items-center gap-2">
                <span className="terminal-amber font-medium">{e.ticker}</span>
                <span className="text-xs text-white/50">Q{e.fiscalQuarter} {e.fiscalYear}</span>
              </div>
              <div className="text-right">
                <div className="terminal-green text-sm">{formatBillions(e.revenue)}</div>
                <div className={cn(
                  'text-xs',
                  e.netIncome > 0 ? 'text-green-400' : 'text-red-400'
                )}>
                  EPS: ${e.eps.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('terminal-widget', className)}>
      <div className="terminal-widget-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <span>COMPANY EARNINGS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="terminal-badge terminal-badge-amber text-[10px]">SEC FILINGS</span>
          <button
            onClick={fetchEarnings}
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
            <span className="text-white/50">Total Revenue:</span>
            <span className="terminal-green ml-1">{formatBillions(stats.totalRevenue)}</span>
          </div>
          <div>
            <span className="text-white/50">Net Income:</span>
            <span className="terminal-cyan ml-1">{formatBillions(stats.totalNetIncome)}</span>
          </div>
          <div>
            <span className="text-white/50">Avg EPS:</span>
            <span className="terminal-amber ml-1">${stats.avgEPS}</span>
          </div>
        </div>
      )}

      {/* Sector filter */}
      <div className="px-3 py-2 border-b border-green-500/20 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setSelectedSector(null)}
          className={cn(
            'terminal-btn text-xs',
            !selectedSector && 'border-green-400 bg-green-500/10'
          )}
        >
          All
        </button>
        {sectors.map(sector => (
          <button
            key={sector}
            onClick={() => setSelectedSector(sector)}
            className={cn(
              'terminal-btn text-xs whitespace-nowrap',
              selectedSector === sector && 'border-green-400 bg-green-500/10'
            )}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Earnings table */}
      <div className="max-h-[350px] overflow-auto terminal-scrollbar">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-black/80">
            <tr className="text-xs text-white/50 border-b border-green-500/20">
              <th className="text-left p-2">Company</th>
              <th className="text-center p-2">Period</th>
              <th className="text-right p-2">Revenue</th>
              <th className="text-right p-2">Net Income</th>
              <th className="text-right p-2">EPS</th>
            </tr>
          </thead>
          <tbody>
            {filteredEarnings.map((e) => (
              <tr key={e.ticker} className="border-b border-green-500/10 hover:bg-green-500/5">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span className="terminal-amber font-medium">{e.ticker}</span>
                    <span className="text-white/50 text-xs">{e.name}</span>
                  </div>
                  <div className="text-[10px] text-white/30">{e.sector}</div>
                </td>
                <td className="text-center p-2 text-white/60">
                  Q{e.fiscalQuarter} {e.fiscalYear}
                </td>
                <td className="text-right p-2 terminal-green font-mono">
                  {formatBillions(e.revenue)}
                </td>
                <td className={cn(
                  'text-right p-2 font-mono',
                  e.netIncome > 0 ? 'text-green-400' : 'text-red-400'
                )}>
                  {formatBillions(e.netIncome)}
                </td>
                <td className={cn(
                  'text-right p-2 font-mono',
                  e.eps > 0 ? 'terminal-cyan' : 'terminal-red'
                )}>
                  ${e.eps.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-3 py-1.5 border-t border-green-500/20 text-[10px] text-white/30">
        Data from SEC 10-Q/10-K filings via API Ninjas
      </div>
    </div>
  )
}
