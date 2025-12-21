'use client'

import { cn } from '@/lib/utils'
import { CommodityData, CurrencyPair, TrendDirection } from '@/types/dashboard'

interface TickerTapeProps {
  commodities?: CommodityData[]
  currencies?: CurrencyPair[]
  className?: string
}

export function TickerTape({
  commodities = [],
  currencies = [],
  className,
}: TickerTapeProps) {
  const getTrendColor = (trend: TrendDirection) => {
    switch (trend) {
      case 'up': return 'text-green-400'
      case 'down': return 'text-red-400'
      default: return 'text-amber-400'
    }
  }

  const getTrendIcon = (trend: TrendDirection) => {
    switch (trend) {
      case 'up': return '▲'
      case 'down': return '▼'
      default: return '─'
    }
  }

  // Combine all items for the ticker
  const items = [
    ...commodities.map(c => ({
      type: 'commodity' as const,
      symbol: c.symbol.toUpperCase(),
      name: c.name,
      value: c.price,
      change: c.changePercent,
      trend: c.trend,
      unit: c.unit,
    })),
    ...currencies.map(c => ({
      type: 'currency' as const,
      symbol: `${c.base}/${c.quote}`,
      name: `${c.base}/${c.quote}`,
      value: c.rate,
      change: c.changePercent,
      trend: c.trend,
      unit: '',
    })),
  ]

  if (items.length === 0) {
    return null
  }

  // Duplicate items for seamless scroll
  const duplicatedItems = [...items, ...items]

  return (
    <div
      className={cn(
        'bg-black border-y border-green-500/20 overflow-hidden',
        className
      )}
    >
      <div className="flex items-center py-1.5 px-2">
        {/* Live indicator */}
        <div className="flex-shrink-0 mr-4 pr-4 border-r border-green-500/20">
          <span className="terminal-live text-xs terminal-green">LIVE</span>
        </div>

        {/* Ticker content */}
        <div className="overflow-hidden flex-1">
          <div className="terminal-ticker">
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.symbol}-${index}`}
                className="terminal-ticker-item"
              >
                <span className="text-amber-400 font-semibold text-xs">
                  {item.symbol}
                </span>
                <span className="terminal-green font-medium text-sm">
                  {item.type === 'currency'
                    ? item.value.toFixed(4)
                    : item.value.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                </span>
                <span className={cn('text-xs flex items-center gap-0.5', getTrendColor(item.trend))}>
                  <span className="text-[8px]">{getTrendIcon(item.trend)}</span>
                  <span>
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Static ticker bar for section headers
export function TickerBar({
  items,
  className,
}: {
  items: { label: string; value: string | number; trend?: TrendDirection }[]
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-6 px-3 py-2 bg-black/50 border-b border-green-500/20',
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-xs text-white/50 uppercase">{item.label}</span>
          <span className={cn(
            'text-sm font-medium',
            item.trend === 'up' && 'terminal-green',
            item.trend === 'down' && 'terminal-red',
            (!item.trend || item.trend === 'neutral') && 'terminal-amber'
          )}>
            {typeof item.value === 'number'
              ? item.value.toLocaleString()
              : item.value}
          </span>
        </div>
      ))}
    </div>
  )
}
