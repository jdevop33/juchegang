'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, X, Search, Check } from 'lucide-react'
import { countries, regions, getCountryFlag, type Country } from '@/data/countries'
import type { Region } from '@/types/dashboard'

interface CountrySelectorProps {
  selected: string[]
  onChange: (codes: string[]) => void
  maxSelections?: number
  className?: string
}

export function CountrySelector({
  selected,
  onChange,
  maxSelections = 20,
  className,
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeRegion, setActiveRegion] = useState<Region | 'all'>('all')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredCountries = countries.filter(country => {
    const matchesSearch = search === '' ||
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.code.toLowerCase().includes(search.toLowerCase())
    const matchesRegion = activeRegion === 'all' || country.region === activeRegion
    return matchesSearch && matchesRegion
  })

  const toggleCountry = (code: string) => {
    if (selected.includes(code)) {
      onChange(selected.filter(c => c !== code))
    } else if (selected.length < maxSelections) {
      onChange([...selected, code])
    }
  }

  const selectAll = () => {
    const codes = filteredCountries.slice(0, maxSelections).map(c => c.code)
    onChange(codes)
  }

  const clearAll = () => {
    onChange([])
  }

  const selectedCountries = countries.filter(c => selected.includes(c.code))

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'terminal-btn w-full flex items-center justify-between gap-2',
          isOpen && 'border-green-400 bg-green-500/10'
        )}
      >
        <span className="flex items-center gap-2">
          <span className="text-white/50">Countries:</span>
          <span className="terminal-green font-medium">
            {selected.length} selected
          </span>
        </span>
        <ChevronDown className={cn(
          'w-4 h-4 transition-transform',
          isOpen && 'rotate-180'
        )} />
      </button>

      {/* Selected chips */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {selectedCountries.slice(0, 5).map(country => (
            <button
              key={country.code}
              onClick={() => toggleCountry(country.code)}
              className="terminal-badge terminal-badge-green flex items-center gap-1 hover:bg-red-500/20 hover:border-red-400"
            >
              <span>{getCountryFlag(country.code)}</span>
              <span>{country.code}</span>
              <X className="w-3 h-3" />
            </button>
          ))}
          {selected.length > 5 && (
            <span className="terminal-badge terminal-badge-amber">
              +{selected.length - 5} more
            </span>
          )}
        </div>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-80 mt-2 terminal-widget">
          {/* Search */}
          <div className="p-2 border-b border-green-500/20">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search countries..."
                className="terminal-input w-full pl-8"
                autoFocus
              />
            </div>
          </div>

          {/* Region tabs */}
          <div className="flex flex-wrap gap-1 p-2 border-b border-green-500/20">
            <button
              onClick={() => setActiveRegion('all')}
              className={cn(
                'terminal-badge',
                activeRegion === 'all' ? 'terminal-badge-green' : 'terminal-badge-amber opacity-50'
              )}
            >
              All
            </button>
            {regions.map(region => (
              <button
                key={region.value}
                onClick={() => setActiveRegion(region.value)}
                className={cn(
                  'terminal-badge',
                  activeRegion === region.value ? 'terminal-badge-green' : 'terminal-badge-amber opacity-50'
                )}
              >
                {region.label}
              </button>
            ))}
          </div>

          {/* Quick actions */}
          <div className="flex gap-2 p-2 border-b border-green-500/20">
            <button
              onClick={selectAll}
              className="terminal-btn text-xs flex-1"
            >
              Select All ({Math.min(filteredCountries.length, maxSelections)})
            </button>
            <button
              onClick={clearAll}
              className="terminal-btn text-xs flex-1"
            >
              Clear All
            </button>
          </div>

          {/* Country list */}
          <div className="max-h-60 overflow-auto terminal-scrollbar p-1">
            {filteredCountries.map(country => {
              const isSelected = selected.includes(country.code)
              return (
                <button
                  key={country.code}
                  onClick={() => toggleCountry(country.code)}
                  className={cn(
                    'w-full flex items-center gap-2 p-2 text-left text-sm',
                    'hover:bg-green-500/10 transition-colors',
                    isSelected && 'bg-green-500/20'
                  )}
                >
                  <span className="terminal-flag">{getCountryFlag(country.code)}</span>
                  <span className="flex-1 text-white/80">{country.name}</span>
                  <span className="text-xs text-white/40">{country.code}</span>
                  {country.hasSWF && (
                    <span className="terminal-badge terminal-badge-amber text-[8px]">SWF</span>
                  )}
                  {isSelected && (
                    <Check className="w-4 h-4 terminal-green" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// Quick presets for common country groups
export function CountryPresets({
  onSelect,
  className,
}: {
  onSelect: (codes: string[]) => void
  className?: string
}) {
  const presets = [
    { label: 'G7', codes: ['US', 'GB', 'DE', 'FR', 'IT', 'CA', 'JP'] },
    { label: 'G20', codes: ['US', 'GB', 'DE', 'FR', 'IT', 'CA', 'JP', 'CN', 'IN', 'BR', 'RU', 'AU', 'KR', 'MX', 'ID', 'SA', 'TR', 'AR', 'ZA'] },
    { label: 'BRICS+', codes: ['BR', 'RU', 'IN', 'CN', 'ZA', 'AE', 'SA', 'EG', 'ET', 'IR'] },
    { label: 'SWF Nations', codes: ['NO', 'AE', 'SA', 'SG', 'CN', 'KW', 'QA', 'HK', 'KR', 'AU'] },
    { label: 'Oil Producers', codes: ['SA', 'RU', 'US', 'CA', 'IQ', 'AE', 'KW', 'IR', 'NO', 'BR'] },
  ]

  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {presets.map(preset => (
        <button
          key={preset.label}
          onClick={() => onSelect(preset.codes)}
          className="terminal-badge terminal-badge-amber hover:terminal-badge-green transition-colors"
        >
          {preset.label}
        </button>
      ))}
    </div>
  )
}
