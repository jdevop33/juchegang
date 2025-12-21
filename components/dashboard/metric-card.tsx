'use client'

import { cn } from '@/lib/utils'
import { TrendDirection } from '@/types/dashboard'

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  change?: number
  changePercent?: number
  trend: TrendDirection
  subtitle?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function MetricCard({
  title,
  value,
  unit,
  change,
  changePercent,
  trend,
  subtitle,
  className,
  size = 'md',
}: MetricCardProps) {
  const trendColors = {
    up: 'terminal-green',
    down: 'terminal-red',
    neutral: 'terminal-amber',
  }

  const trendIcons = {
    up: '▲',
    down: '▼',
    neutral: '─',
  }

  const sizeClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  }

  const valueSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div
      className={cn(
        'terminal-widget',
        sizeClasses[size],
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="terminal-amber text-xs font-semibold uppercase tracking-wider">
          {title}
        </span>
        {subtitle && (
          <span className="text-xs text-white/40">{subtitle}</span>
        )}
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-2">
        <span className={cn('terminal-green font-bold terminal-glow', valueSizes[size])}>
          {typeof value === 'number' ? value.toLocaleString() : value}
        </span>
        {unit && (
          <span className="text-sm text-white/50">{unit}</span>
        )}
      </div>

      {/* Change indicator */}
      {(change !== undefined || changePercent !== undefined) && (
        <div className={cn('flex items-center gap-2 mt-2', trendColors[trend])}>
          <span className="text-xs">{trendIcons[trend]}</span>
          {change !== undefined && (
            <span className="text-sm font-medium">
              {change > 0 ? '+' : ''}{change.toFixed(2)}
            </span>
          )}
          {changePercent !== undefined && (
            <span className="text-sm">
              ({changePercent > 0 ? '+' : ''}{changePercent.toFixed(2)}%)
            </span>
          )}
        </div>
      )}
    </div>
  )
}

// Compact version for ticker/table cells
export function MetricValue({
  value,
  change,
  trend,
  className,
}: {
  value: string | number
  change?: number
  trend: TrendDirection
  className?: string
}) {
  const trendColors = {
    up: 'terminal-change-up',
    down: 'terminal-change-down',
    neutral: 'terminal-change-neutral',
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="terminal-green font-medium">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </span>
      {change !== undefined && (
        <span className={cn('text-xs', trendColors[trend])}>
          {change > 0 ? '+' : ''}{change.toFixed(2)}%
        </span>
      )}
    </div>
  )
}

// Sparkline mini chart
export function Sparkline({
  data,
  width = 60,
  height = 20,
  className,
}: {
  data: number[]
  width?: number
  height?: number
  className?: string
}) {
  if (!data || data.length === 0) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const barWidth = Math.max(2, Math.floor(width / data.length) - 1)

  return (
    <div
      className={cn('terminal-sparkline', className)}
      style={{ width, height }}
    >
      {data.map((value, i) => {
        const normalizedHeight = ((value - min) / range) * height
        const isLast = i === data.length - 1
        return (
          <div
            key={i}
            className={cn(
              'terminal-sparkline-bar',
              isLast && 'bg-green-400'
            )}
            style={{
              width: barWidth,
              height: Math.max(2, normalizedHeight),
            }}
          />
        )
      })}
    </div>
  )
}
