// Sovereign Wealth Fund Dashboard - Type Definitions

// ============================================
// ENUMS
// ============================================

export type TrendDirection = 'up' | 'down' | 'neutral'

export type MetricType =
  | 'electricity'
  | 'borrowing'
  | 'currency'
  | 'commodity'
  | 'water'
  | 'rare_earth'
  | 'brain_drain'
  | 'regulatory'
  | 'infrastructure'
  | 'energy_independence'
  | 'inflation'
  | 'gdp'
  | 'unemployment'

export type Region =
  | 'north_america'
  | 'south_america'
  | 'europe'
  | 'asia'
  | 'africa'
  | 'oceania'
  | 'middle_east'

// ============================================
// API RESPONSE TYPES
// ============================================

// API Ninjas Responses
export interface CommodityPriceResponse {
  name: string
  price: string
  updated: number
}

export interface ExchangeRateResponse {
  currency_pair: string
  exchange_rate: number
}

export interface InterestRateResponse {
  central_bank: string
  country: string
  rate_pct: number
  last_updated: string
}

export interface InflationResponse {
  country: string
  type: string
  period: string
  monthly_rate_pct: number
  yearly_rate_pct: number
}

export interface GDPResponse {
  country: string
  gdp: number
  year: number
}

export interface CountryResponse {
  name: string
  iso2: string
  capital: string
  population: number
  gdp: number
  gdp_per_capita: number
  currency: {
    code: string
    name: string
  }
  region: string
  internet_users: number
  unemployment: number
}

// Electricity Maps API
export interface ElectricityPriceResponse {
  zone: string
  price: number
  currency: string
  datetime: string
}

// World Bank API
export interface WorldBankIndicator {
  country: {
    id: string
    value: string
  }
  date: string
  value: number | null
}

// ============================================
// DOMAIN MODELS
// ============================================

export interface MetricData {
  id: string
  country: string
  countryCode: string
  metricType: MetricType
  value: number
  unit: string
  change?: number
  changePercent?: number
  trend: TrendDirection
  timestamp: Date
  source: string
}

export interface CountryMetrics {
  code: string
  name: string
  region: Region
  flag: string
  metrics: Partial<Record<MetricType, MetricData>>
  overallScore?: number
  lastUpdate: Date
}

export interface CommodityData {
  name: string
  symbol: string
  price: number
  unit: string
  change: number
  changePercent: number
  trend: TrendDirection
  timestamp: Date
}

export interface CurrencyPair {
  base: string
  quote: string
  rate: number
  change: number
  changePercent: number
  trend: TrendDirection
  timestamp: Date
}

export interface BorrowingRate {
  country: string
  countryCode: string
  centralBank: string
  rate: number
  previousRate?: number
  change: number
  trend: TrendDirection
  lastUpdated: string
}

export interface ElectricityPrice {
  country: string
  countryCode: string
  pricePerKwh: number
  currency: string
  change: number
  changePercent: number
  trend: TrendDirection
  timestamp: Date
}

// Edge Factor Types
export interface WaterCost {
  country: string
  countryCode: string
  costPerM3: number
  scarcityIndex: number // 0-5 scale
  trend: TrendDirection
}

export interface RareEarthData {
  element: string
  symbol: string
  price: number
  unit: string
  topProducers: { country: string; share: number }[]
  supplyRisk: 'low' | 'medium' | 'high' | 'critical'
}

export interface BrainDrainIndex {
  country: string
  countryCode: string
  emigrationRate: number
  skilledWorkerLoss: number
  netMigration: number
  trend: TrendDirection
}

export interface RegulatoryScore {
  country: string
  countryCode: string
  easeOfBusiness: number // 0-100
  taxRate: number
  regulatoryBurden: number // 0-100, lower is better
  arbitrageScore: number // composite
  trend: TrendDirection
}

export interface InfrastructureHealth {
  country: string
  countryCode: string
  qualityIndex: number // 0-100
  maintenanceBacklog: number // % of GDP
  investmentRate: number // % of GDP
  decayRate: number // annual % deterioration
  trend: TrendDirection
}

export interface EnergyIndependence {
  country: string
  countryCode: string
  independenceRatio: number // 0-1, 1 = fully independent
  renewableShare: number // %
  importDependency: number // %
  strategicReserves: number // days of consumption
  trend: TrendDirection
}

// ============================================
// DASHBOARD STATE
// ============================================

export interface DashboardData {
  commodities: CommodityData[]
  currencies: CurrencyPair[]
  borrowingRates: BorrowingRate[]
  electricity: ElectricityPrice[]
  inflation: MetricData[]
  gdp: MetricData[]
  // Edge factors
  water: WaterCost[]
  rareEarth: RareEarthData[]
  brainDrain: BrainDrainIndex[]
  regulatory: RegulatoryScore[]
  infrastructure: InfrastructureHealth[]
  energyIndependence: EnergyIndependence[]
  // Meta
  lastUpdate: Date
  errors?: string[]
}

export interface DashboardFilters {
  selectedCountries: string[]
  selectedMetrics: MetricType[]
  region?: Region
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
}

// ============================================
// COMPONENT PROPS
// ============================================

export interface WidgetProps {
  className?: string
  isLoading?: boolean
  error?: string | null
  onRefresh?: () => void
}

export interface MetricCardProps extends WidgetProps {
  title: string
  value: string | number
  unit?: string
  change?: number
  changePercent?: number
  trend: TrendDirection
  icon?: React.ReactNode
  sparklineData?: number[]
}

export interface DataTableColumn<T> {
  key: keyof T | string
  label: string
  format?: (value: any, row: T) => React.ReactNode
  sortable?: boolean
  className?: string
  align?: 'left' | 'center' | 'right'
}

export interface DataTableProps<T> extends WidgetProps {
  data: T[]
  columns: DataTableColumn<T>[]
  onSort?: (key: string, direction: 'asc' | 'desc') => void
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}

// ============================================
// API CONFIG
// ============================================

export interface ApiConfig {
  apiNinjasKey: string
  currencyLayerKey?: string
  electricityMapsKey?: string
}

export const CACHE_TTL = {
  commodities: 60, // 1 minute
  currencies: 60, // 1 minute
  borrowingRates: 300, // 5 minutes
  electricity: 3600, // 1 hour
  inflation: 86400, // 1 day
  gdp: 86400, // 1 day
  edgeFactors: 86400, // 1 day
} as const
