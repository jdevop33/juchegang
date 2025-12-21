'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface Column<T> {
  key: string
  label: string
  format?: (value: any, row: T) => React.ReactNode
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
  width?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  className?: string
  maxHeight?: string
  onRowClick?: (row: T) => void
  highlightRow?: (row: T) => boolean
  emptyMessage?: string
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  className,
  maxHeight = '400px',
  onRowClick,
  highlightRow,
  emptyMessage = 'No data available',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('desc')
    }
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0

    const aValue = a[sortKey]
    const bValue = b[sortKey]

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
    }

    const aStr = String(aValue || '')
    const bStr = String(bValue || '')
    return sortDirection === 'asc'
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr)
  })

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  if (data.length === 0) {
    return (
      <div className={cn('terminal-widget p-4', className)}>
        <div className="text-center text-white/40 py-8">
          {emptyMessage}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'terminal-widget overflow-hidden',
        className
      )}
    >
      <div
        className="overflow-auto terminal-scrollbar"
        style={{ maxHeight }}
      >
        <table className="terminal-table">
          <thead className="sticky top-0 bg-[hsl(0,0%,8%)]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    alignClasses[column.align || 'left'],
                    column.sortable && 'cursor-pointer select-none hover:text-green-400',
                    column.className
                  )}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    <span>{column.label}</span>
                    {column.sortable && sortKey === column.key && (
                      sortDirection === 'asc'
                        ? <ChevronUp className="w-3 h-3" />
                        : <ChevronDown className="w-3 h-3" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  onRowClick && 'cursor-pointer',
                  highlightRow?.(row) && 'bg-green-500/10'
                )}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      alignClasses[column.align || 'left'],
                      column.className
                    )}
                  >
                    {column.format
                      ? column.format(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Helper components for table cell formatting
export function CountryCell({
  code,
  name,
}: {
  code: string
  name: string
}) {
  // Convert country code to flag emoji
  const getFlag = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return ''
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="terminal-flag">{getFlag(code)}</span>
      <span className="text-white/80">{name}</span>
      <span className="text-white/40 text-xs">{code}</span>
    </div>
  )
}

export function TrendCell({
  value,
  trend,
  format = 'percent',
}: {
  value: number
  trend: 'up' | 'down' | 'neutral'
  format?: 'percent' | 'number' | 'currency'
}) {
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

  const formatValue = () => {
    switch (format) {
      case 'percent':
        return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
      case 'currency':
        return `$${value.toLocaleString()}`
      default:
        return value.toLocaleString()
    }
  }

  return (
    <span className={cn('flex items-center gap-1', trendColors[trend])}>
      <span className="text-[10px]">{trendIcons[trend]}</span>
      <span>{formatValue()}</span>
    </span>
  )
}

export function RiskBadge({
  level,
}: {
  level: 'low' | 'medium' | 'high' | 'critical'
}) {
  const colors = {
    low: 'terminal-badge-green',
    medium: 'terminal-badge-amber',
    high: 'terminal-badge-red',
    critical: 'terminal-badge-red bg-red-500/30',
  }

  return (
    <span className={cn('terminal-badge', colors[level])}>
      {level.toUpperCase()}
    </span>
  )
}
