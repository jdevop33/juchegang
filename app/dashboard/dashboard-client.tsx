'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, TrendingUp, DollarSign, Zap, Droplets, Atom, Users, Scale, Building2, Battery, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TickerTape, TickerBar } from '@/components/dashboard/ticker-tape'
import { MetricCard } from '@/components/dashboard/metric-card'
import { DataTable, CountryCell, TrendCell, RiskBadge } from '@/components/dashboard/data-table'
import { CountrySelector, CountryPresets } from '@/components/dashboard/country-selector'
import { getCountryFlag } from '@/data/countries'

interface DashboardData {
  markets: {
    commodities: any[]
    currencies: any[]
    timestamp?: string
  }
  rates: {
    rates: any[]
    arbitrage: any[]
    timestamp?: string
  }
  indicators: {
    inflation: any[]
    gdp: any[]
    gdpPerCapita: any[]
    unemployment: any[]
    timestamp?: string
  }
  edge: {
    water: any[]
    rareEarth: any[]
    brainDrain: any[]
    regulatory: any[]
    infrastructure: any[]
    energyIndependence: any[]
    timestamp?: string
  }
  timestamp: string
  error?: string
}

type TabId = 'overview' | 'markets' | 'rates' | 'indicators' | 'edge'

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'overview', label: 'OVERVIEW', icon: <Globe className="w-4 h-4" /> },
  { id: 'markets', label: 'MARKETS', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'rates', label: 'RATES', icon: <DollarSign className="w-4 h-4" /> },
  { id: 'indicators', label: 'INDICATORS', icon: <Building2 className="w-4 h-4" /> },
  { id: 'edge', label: 'EDGE FACTORS', icon: <Atom className="w-4 h-4" /> },
]

export function DashboardClient({ initialData }: { initialData: DashboardData }) {
  const [data, setData] = useState(initialData)
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['US', 'CN', 'JP', 'DE', 'GB', 'SA', 'AE', 'SG', 'NO'])
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return
    const interval = setInterval(() => refreshData(), 60000)
    return () => clearInterval(interval)
  }, [autoRefresh])

  const refreshData = async () => {
    setIsRefreshing(true)
    try {
      const [markets, rates, indicators, edge] = await Promise.all([
        fetch('/api/dashboard/markets').then(r => r.json()),
        fetch('/api/dashboard/rates').then(r => r.json()),
        fetch('/api/dashboard/indicators').then(r => r.json()),
        fetch('/api/dashboard/edge-factors').then(r => r.json()),
      ])
      setData({ markets, rates, indicators, edge, timestamp: new Date().toISOString() })
      setLastUpdate(new Date())
    } catch (error) {
      console.error('Refresh failed:', error)
    }
    setIsRefreshing(false)
  }

  return (
    <div className="min-h-screen terminal-dashboard">
      {/* Header */}
      <header className="border-b border-green-500/30 bg-black/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold terminal-amber terminal-glow-amber">
                SOVEREIGN ALPHA
              </h1>
              <span className="terminal-badge terminal-badge-green">
                SWF INTELLIGENCE TERMINAL
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Last update */}
              <div className="text-xs text-white/40">
                Last update: {lastUpdate.toLocaleTimeString()}
              </div>

              {/* Auto-refresh toggle */}
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={cn(
                  'terminal-badge',
                  autoRefresh ? 'terminal-badge-green' : 'terminal-badge-amber'
                )}
              >
                {autoRefresh ? 'AUTO' : 'MANUAL'}
              </button>

              {/* Refresh button */}
              <button
                onClick={refreshData}
                disabled={isRefreshing}
                className="terminal-btn flex items-center gap-2"
              >
                <RefreshCw className={cn('w-4 h-4', isRefreshing && 'animate-spin')} />
                REFRESH
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Ticker tape */}
      <TickerTape
        commodities={data.markets.commodities}
        currencies={data.markets.currencies}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 mb-4 border-b border-green-500/20 pb-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'terminal-green border-b-2 border-green-400'
                  : 'text-white/50 hover:text-white/80'
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}

          {/* Country selector */}
          <div className="ml-auto">
            <CountrySelector
              selected={selectedCountries}
              onChange={setSelectedCountries}
            />
          </div>
        </div>

        {/* Tab content */}
        {activeTab === 'overview' && (
          <OverviewTab data={data} selectedCountries={selectedCountries} />
        )}
        {activeTab === 'markets' && (
          <MarketsTab data={data.markets} />
        )}
        {activeTab === 'rates' && (
          <RatesTab data={data.rates} />
        )}
        {activeTab === 'indicators' && (
          <IndicatorsTab data={data.indicators} selectedCountries={selectedCountries} />
        )}
        {activeTab === 'edge' && (
          <EdgeFactorsTab data={data.edge} />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-green-500/20 mt-8 py-4 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs text-white/40">
            <span>SOVEREIGN ALPHA v1.0 | SWF Intelligence Terminal</span>
            <span>Data sources: API Ninjas, World Bank, IEA, USGS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================
// TAB COMPONENTS
// ============================================

function OverviewTab({ data, selectedCountries }: { data: DashboardData; selectedCountries: string[] }) {
  const topCommodities = data.markets.commodities.slice(0, 4)
  const topRates = data.rates.rates.slice(0, 6)
  const topArbitrage = data.rates.arbitrage?.filter((a: any) => a.vsUsRate > 0).slice(0, 3) || []

  return (
    <div className="space-y-6">
      {/* Key metrics row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topCommodities.map((commodity: any) => (
          <MetricCard
            key={commodity.symbol}
            title={commodity.name}
            value={commodity.price}
            unit={commodity.unit}
            change={commodity.change}
            changePercent={commodity.changePercent}
            trend={commodity.trend}
            size="md"
          />
        ))}
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Interest rates */}
        <div className="terminal-widget">
          <div className="terminal-widget-header flex items-center justify-between">
            <span>CENTRAL BANK RATES</span>
            <DollarSign className="w-4 h-4" />
          </div>
          <div className="p-3 space-y-2">
            {topRates.map((rate: any) => (
              <div key={rate.countryCode} className="flex items-center justify-between py-1 border-b border-green-500/10 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="terminal-flag">{getCountryFlag(rate.countryCode)}</span>
                  <span className="text-sm text-white/80">{rate.country}</span>
                </div>
                <span className={cn(
                  'font-mono font-medium',
                  rate.rate > 5 ? 'terminal-red' : rate.rate < 2 ? 'terminal-green' : 'terminal-amber'
                )}>
                  {rate.rate.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Borrowing arbitrage */}
        <div className="terminal-widget">
          <div className="terminal-widget-header flex items-center justify-between">
            <span>USD BORROWING ARBITRAGE</span>
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="p-3">
            <p className="text-xs text-white/50 mb-3">Countries borrowing USD cheaper than the US:</p>
            {topArbitrage.length > 0 ? (
              <div className="space-y-2">
                {topArbitrage.map((arb: any) => (
                  <div key={arb.countryCode} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                      <span className="terminal-flag">{getCountryFlag(arb.countryCode)}</span>
                      <span className="text-sm text-white/80">{arb.country}</span>
                    </div>
                    <span className="terminal-green font-medium">
                      -{Math.abs(arb.vsUsRate).toFixed(2)}% vs US
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/40 text-sm">No arbitrage opportunities detected</p>
            )}
          </div>
        </div>

        {/* Edge factors preview */}
        <div className="terminal-widget">
          <div className="terminal-widget-header flex items-center justify-between">
            <span>EDGE FACTORS</span>
            <Atom className="w-4 h-4" />
          </div>
          <div className="p-3 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50 flex items-center gap-1">
                <Droplets className="w-3 h-3" /> Water Scarcity
              </span>
              <span className="terminal-amber text-sm">
                {data.edge.water.filter((w: any) => w.scarcityIndex >= 4).length} critical
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50 flex items-center gap-1">
                <Atom className="w-3 h-3" /> Rare Earth Risk
              </span>
              <span className="terminal-red text-sm">
                {data.edge.rareEarth.filter((r: any) => r.supplyRisk === 'critical').length} critical
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50 flex items-center gap-1">
                <Users className="w-3 h-3" /> Brain Drain
              </span>
              <span className="terminal-green text-sm">
                {data.edge.brainDrain.filter((b: any) => b.netMigration > 0).length} net gainers
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50 flex items-center gap-1">
                <Battery className="w-3 h-3" /> Energy Independent
              </span>
              <span className="terminal-green text-sm">
                {data.edge.energyIndependence.filter((e: any) => e.independenceRatio >= 1).length} nations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Currencies grid */}
      <div className="terminal-widget">
        <div className="terminal-widget-header flex items-center justify-between">
          <span>CURRENCY PAIRS</span>
          <span className="terminal-live text-xs">LIVE</span>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {data.markets.currencies.slice(0, 10).map((pair: any) => (
              <div key={`${pair.base}${pair.quote}`} className="p-2 bg-black/30 rounded">
                <div className="text-xs terminal-amber mb-1">{pair.base}/{pair.quote}</div>
                <div className="terminal-green font-medium">{pair.rate.toFixed(4)}</div>
                <div className={cn(
                  'text-xs',
                  pair.trend === 'up' ? 'text-green-400' : pair.trend === 'down' ? 'text-red-400' : 'text-amber-400'
                )}>
                  {pair.changePercent > 0 ? '+' : ''}{pair.changePercent.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketsTab({ data }: { data: DashboardData['markets'] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Commodities */}
      <DataTable
        data={data.commodities}
        columns={[
          {
            key: 'name',
            label: 'Commodity',
            format: (_, row) => (
              <span className="font-medium text-white/90">{row.name}</span>
            ),
          },
          {
            key: 'price',
            label: 'Price',
            align: 'right',
            format: (v) => <span className="terminal-green font-mono">${v.toLocaleString()}</span>,
          },
          {
            key: 'unit',
            label: 'Unit',
            align: 'center',
            format: (v) => <span className="text-white/50 text-xs">{v}</span>,
          },
          {
            key: 'changePercent',
            label: 'Change',
            align: 'right',
            format: (v, row) => <TrendCell value={v} trend={row.trend} />,
          },
        ]}
        className="h-full"
      />

      {/* Currencies */}
      <DataTable
        data={data.currencies}
        columns={[
          {
            key: 'pair',
            label: 'Pair',
            format: (_, row) => (
              <span className="terminal-amber font-medium">{row.base}/{row.quote}</span>
            ),
          },
          {
            key: 'rate',
            label: 'Rate',
            align: 'right',
            format: (v) => <span className="terminal-green font-mono">{v.toFixed(4)}</span>,
          },
          {
            key: 'changePercent',
            label: 'Change',
            align: 'right',
            format: (v, row) => <TrendCell value={v} trend={row.trend} />,
          },
        ]}
        className="h-full"
      />
    </div>
  )
}

function RatesTab({ data }: { data: DashboardData['rates'] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Interest rates */}
      <DataTable
        data={data.rates}
        columns={[
          {
            key: 'country',
            label: 'Country',
            format: (_, row) => <CountryCell code={row.countryCode} name={row.country} />,
          },
          {
            key: 'centralBank',
            label: 'Central Bank',
            format: (v) => <span className="text-white/60 text-xs">{v}</span>,
          },
          {
            key: 'rate',
            label: 'Rate',
            align: 'right',
            sortable: true,
            format: (v) => (
              <span className={cn(
                'font-mono font-medium',
                v > 8 ? 'terminal-red' : v > 5 ? 'terminal-amber' : 'terminal-green'
              )}>
                {v.toFixed(2)}%
              </span>
            ),
          },
          {
            key: 'change',
            label: 'Chg',
            align: 'right',
            format: (v, row) => v !== 0 ? <TrendCell value={v} trend={row.trend} format="number" /> : <span className="text-white/30">-</span>,
          },
        ]}
        maxHeight="500px"
      />

      {/* Borrowing arbitrage */}
      <div className="terminal-widget">
        <div className="terminal-widget-header">USD BORROWING COST ARBITRAGE</div>
        <div className="p-4">
          <p className="text-sm text-white/60 mb-4">
            Estimated USD borrowing costs by country. Countries with negative values can borrow USD cheaper than the US due to credit quality.
          </p>
          <DataTable
            data={data.arbitrage || []}
            columns={[
              {
                key: 'country',
                label: 'Country',
                format: (_, row) => <CountryCell code={row.countryCode} name={row.country} />,
              },
              {
                key: 'domesticRate',
                label: 'Domestic',
                align: 'right',
                format: (v) => <span className="text-white/60">{v.toFixed(2)}%</span>,
              },
              {
                key: 'estimatedUsdCost',
                label: 'Est. USD Cost',
                align: 'right',
                format: (v) => <span className="terminal-cyan">{v.toFixed(2)}%</span>,
              },
              {
                key: 'vsUsRate',
                label: 'vs US',
                align: 'right',
                format: (v) => (
                  <span className={cn(
                    'font-medium',
                    v > 0 ? 'terminal-green' : v < 0 ? 'terminal-red' : 'terminal-amber'
                  )}>
                    {v > 0 ? '-' : '+'}{Math.abs(v).toFixed(2)}%
                  </span>
                ),
              },
            ]}
            maxHeight="350px"
          />
        </div>
      </div>
    </div>
  )
}

function IndicatorsTab({ data, selectedCountries }: { data: DashboardData['indicators']; selectedCountries: string[] }) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Inflation */}
      <DataTable
        data={data.inflation.filter(i => selectedCountries.length === 0 || selectedCountries.includes(i.countryCode))}
        columns={[
          {
            key: 'country',
            label: 'Country',
            format: (_, row) => <CountryCell code={row.countryCode} name={row.country} />,
          },
          {
            key: 'value',
            label: 'Inflation',
            align: 'right',
            sortable: true,
            format: (v, row) => (
              <span className={cn(
                'font-mono font-medium',
                v > 5 ? 'terminal-red' : v > 3 ? 'terminal-amber' : 'terminal-green'
              )}>
                {v.toFixed(1)}%
              </span>
            ),
          },
        ]}
        maxHeight="500px"
      />

      {/* GDP */}
      <DataTable
        data={data.gdp.filter(g => selectedCountries.length === 0 || selectedCountries.includes(g.countryCode))}
        columns={[
          {
            key: 'country',
            label: 'Country',
            format: (_, row) => <CountryCell code={row.countryCode} name={row.country} />,
          },
          {
            key: 'value',
            label: 'GDP (B USD)',
            align: 'right',
            sortable: true,
            format: (v) => <span className="terminal-green font-mono">${(v / 1000).toFixed(1)}T</span>,
          },
        ]}
        maxHeight="500px"
      />

      {/* Unemployment */}
      <DataTable
        data={data.unemployment.filter(u => selectedCountries.length === 0 || selectedCountries.includes(u.countryCode))}
        columns={[
          {
            key: 'country',
            label: 'Country',
            format: (_, row) => <CountryCell code={row.countryCode} name={row.country} />,
          },
          {
            key: 'value',
            label: 'Unemployment',
            align: 'right',
            sortable: true,
            format: (v, row) => (
              <span className={cn(
                'font-mono',
                v < 4 ? 'terminal-green' : v < 7 ? 'terminal-amber' : 'terminal-red'
              )}>
                {v.toFixed(1)}%
              </span>
            ),
          },
        ]}
        maxHeight="500px"
      />
    </div>
  )
}

function EdgeFactorsTab({ data }: { data: DashboardData['edge'] }) {
  const [activeEdge, setActiveEdge] = useState<'water' | 'rareEarth' | 'brainDrain' | 'regulatory' | 'infrastructure' | 'energy'>('water')

  const edgeTabs = [
    { id: 'water', label: 'Water Costs', icon: <Droplets className="w-4 h-4" /> },
    { id: 'rareEarth', label: 'Rare Earths', icon: <Atom className="w-4 h-4" /> },
    { id: 'brainDrain', label: 'Brain Drain', icon: <Users className="w-4 h-4" /> },
    { id: 'regulatory', label: 'Regulatory', icon: <Scale className="w-4 h-4" /> },
    { id: 'infrastructure', label: 'Infrastructure', icon: <Building2 className="w-4 h-4" /> },
    { id: 'energy', label: 'Energy Independence', icon: <Battery className="w-4 h-4" /> },
  ] as const

  return (
    <div>
      {/* Edge factor tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {edgeTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveEdge(tab.id)}
            className={cn(
              'terminal-btn flex items-center gap-2 whitespace-nowrap',
              activeEdge === tab.id && 'border-green-400 bg-green-500/10'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeEdge === 'water' && (
        <div className="grid lg:grid-cols-2 gap-6">
          <DataTable
            data={data.water}
            columns={[
              { key: 'country', label: 'Country', format: (_, row) => <CountryCell code={row.countryCode} name={row.country} /> },
              { key: 'costPerM3', label: 'Cost/m³', align: 'right', sortable: true, format: (v) => <span className="terminal-green">${v.toFixed(2)}</span> },
              { key: 'scarcityIndex', label: 'Scarcity', align: 'center', format: (v) => (
                <span className={cn(
                  'terminal-badge',
                  v <= 1 ? 'terminal-badge-green' : v <= 3 ? 'terminal-badge-amber' : 'terminal-badge-red'
                )}>
                  {v}/5
                </span>
              )},
            ]}
          />
          <div className="terminal-widget p-4">
            <h3 className="terminal-amber font-semibold mb-3">WATER SCARCITY ANALYSIS</h3>
            <p className="text-sm text-white/60 mb-4">
              Water costs and scarcity are becoming critical factors for industrial planning and SWF investment decisions.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="terminal-red">•</span>
                <span>High scarcity nations (4-5): {data.water.filter(w => w.scarcityIndex >= 4).length}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="terminal-amber">•</span>
                <span>Moderate scarcity (2-3): {data.water.filter(w => w.scarcityIndex >= 2 && w.scarcityIndex < 4).length}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="terminal-green">•</span>
                <span>Water abundant (0-1): {data.water.filter(w => w.scarcityIndex < 2).length}</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeEdge === 'rareEarth' && (
        <DataTable
          data={data.rareEarth}
          columns={[
            { key: 'element', label: 'Element', format: (v, row) => (
              <div className="flex items-center gap-2">
                <span className="terminal-cyan font-mono text-lg">{row.symbol}</span>
                <span className="text-white/80">{v}</span>
              </div>
            )},
            { key: 'price', label: 'Price', align: 'right', format: (v, row) => <span className="terminal-green">${v.toLocaleString()}/{row.unit.split('/')[1]}</span> },
            { key: 'supplyRisk', label: 'Supply Risk', align: 'center', format: (v) => <RiskBadge level={v} /> },
            { key: 'topProducers', label: 'Top Producer', format: (v) => (
              <div className="flex items-center gap-1">
                <span className="terminal-flag">{getCountryFlag(v[0]?.country === 'China' ? 'CN' : v[0]?.country === 'Australia' ? 'AU' : 'CD')}</span>
                <span className="text-sm">{v[0]?.country}</span>
                <span className="text-xs text-white/40">({v[0]?.share}%)</span>
              </div>
            )},
          ]}
        />
      )}

      {activeEdge === 'brainDrain' && (
        <DataTable
          data={data.brainDrain}
          columns={[
            { key: 'country', label: 'Country', format: (_, row) => <CountryCell code={row.countryCode} name={row.country} /> },
            { key: 'netMigration', label: 'Net Migration', align: 'right', sortable: true, format: (v, row) => <TrendCell value={v} trend={v > 0 ? 'up' : v < 0 ? 'down' : 'neutral'} /> },
            { key: 'skilledWorkerLoss', label: 'Skilled Loss', align: 'right', format: (v) => (
              <span className={cn(v > 0 ? 'terminal-red' : 'terminal-green')}>
                {v > 0 ? '+' : ''}{v}%
              </span>
            )},
            { key: 'emigrationRate', label: 'Emigration', align: 'right', format: (v) => <span className="text-white/60">{v.toFixed(1)}%</span> },
          ]}
        />
      )}

      {activeEdge === 'regulatory' && (
        <DataTable
          data={data.regulatory}
          columns={[
            { key: 'country', label: 'Country', format: (_, row) => <CountryCell code={row.countryCode} name={row.country} /> },
            { key: 'arbitrageScore', label: 'Arbitrage Score', align: 'right', sortable: true, format: (v) => (
              <span className={cn('font-medium', v >= 80 ? 'terminal-green' : v >= 60 ? 'terminal-amber' : 'terminal-red')}>
                {v}/100
              </span>
            )},
            { key: 'easeOfBusiness', label: 'Ease of Business', align: 'right', format: (v) => <span className="text-white/60">{v.toFixed(1)}</span> },
            { key: 'taxRate', label: 'Corp Tax', align: 'right', format: (v) => <span className={cn(v === 0 ? 'terminal-green' : v > 25 ? 'terminal-red' : 'terminal-amber')}>{v}%</span> },
          ]}
        />
      )}

      {activeEdge === 'infrastructure' && (
        <DataTable
          data={data.infrastructure}
          columns={[
            { key: 'country', label: 'Country', format: (_, row) => <CountryCell code={row.countryCode} name={row.country} /> },
            { key: 'qualityIndex', label: 'Quality', align: 'right', sortable: true, format: (v) => (
              <span className={cn('font-medium', v >= 85 ? 'terminal-green' : v >= 70 ? 'terminal-amber' : 'terminal-red')}>
                {v}/100
              </span>
            )},
            { key: 'decayRate', label: 'Decay Rate', align: 'right', format: (v) => (
              <span className={cn(v < 1.5 ? 'terminal-green' : v < 2.5 ? 'terminal-amber' : 'terminal-red')}>
                {v.toFixed(1)}%/yr
              </span>
            )},
            { key: 'investmentRate', label: 'Investment', align: 'right', format: (v) => <span className="terminal-cyan">{v.toFixed(1)}% GDP</span> },
          ]}
        />
      )}

      {activeEdge === 'energy' && (
        <DataTable
          data={data.energyIndependence}
          columns={[
            { key: 'country', label: 'Country', format: (_, row) => <CountryCell code={row.countryCode} name={row.country} /> },
            { key: 'independenceRatio', label: 'Independence', align: 'right', sortable: true, format: (v) => (
              <span className={cn('font-medium', v >= 1 ? 'terminal-green' : v >= 0.5 ? 'terminal-amber' : 'terminal-red')}>
                {(v * 100).toFixed(0)}%
              </span>
            )},
            { key: 'renewableShare', label: 'Renewables', align: 'right', format: (v) => <span className="terminal-cyan">{v}%</span> },
            { key: 'strategicReserves', label: 'Reserves', align: 'right', format: (v) => <span className="text-white/60">{v} days</span> },
          ]}
        />
      )}
    </div>
  )
}
