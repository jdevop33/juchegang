// Dashboard API: Economic Indicators (GDP, Inflation, Unemployment)
// Using API Ninjas for country economic data

import { NextResponse } from 'next/server'
import { MetricData, TrendDirection } from '@/types/dashboard'

const API_NINJAS_KEY = process.env.API_NINJAS_KEY || 'mHBzbxJnIQV9owM9qgj5Wg==TCvlEv90tJ4CadWw'

// Cache for 1 hour (economic indicators don't change frequently)
export const revalidate = 3600

// Major economies to track
const COUNTRIES = [
  { name: 'United States', code: 'US' },
  { name: 'China', code: 'CN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Germany', code: 'DE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'France', code: 'FR' },
  { name: 'India', code: 'IN' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Russia', code: 'RU' },
  { name: 'Canada', code: 'CA' },
  { name: 'South Korea', code: 'KR' },
  { name: 'Australia', code: 'AU' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Norway', code: 'NO' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'Singapore', code: 'SG' },
  { name: 'South Africa', code: 'ZA' },
]

interface InflationApiResponse {
  country: string
  type: string
  period: string
  monthly_rate_pct: number
  yearly_rate_pct: number
}

interface GDPApiResponse {
  country: string
  gdp: number
  year: number
}

interface CountryApiResponse {
  name: string
  iso2: string
  capital: string
  population: number
  gdp: number
  gdp_per_capita: number
  currency: { code: string; name: string }
  region: string
  internet_users: number
  unemployment: number
}

async function fetchInflation(country: string): Promise<InflationApiResponse | null> {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/inflation?country=${encodeURIComponent(country)}`,
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) return null
    const data = await response.json()
    return Array.isArray(data) && data.length > 0 ? data[0] : null
  } catch {
    return null
  }
}

async function fetchCountryData(country: string): Promise<CountryApiResponse | null> {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/country?name=${encodeURIComponent(country)}`,
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) return null
    const data = await response.json()
    return Array.isArray(data) && data.length > 0 ? data[0] : null
  } catch {
    return null
  }
}

function getTrend(value: number, benchmark: number): TrendDirection {
  const diff = value - benchmark
  if (diff > benchmark * 0.1) return 'up'
  if (diff < benchmark * -0.1) return 'down'
  return 'neutral'
}

export async function GET() {
  try {
    const now = new Date()

    // Fetch data for all countries in parallel
    const dataPromises = COUNTRIES.map(async (country) => {
      const [inflation, countryData] = await Promise.all([
        fetchInflation(country.name),
        fetchCountryData(country.name),
      ])

      return {
        country: country.name,
        code: country.code,
        inflation,
        countryData,
      }
    })

    const results = await Promise.all(dataPromises)

    // Process inflation data
    const inflationMetrics: MetricData[] = results
      .filter(r => r.inflation)
      .map(r => ({
        id: `inflation-${r.code}`,
        country: r.country,
        countryCode: r.code,
        metricType: 'inflation' as const,
        value: r.inflation!.yearly_rate_pct,
        unit: '%',
        trend: getTrend(r.inflation!.yearly_rate_pct, 2), // 2% is typical target
        timestamp: now,
        source: 'API Ninjas',
      }))
      .sort((a, b) => b.value - a.value)

    // Process GDP data
    const gdpMetrics: MetricData[] = results
      .filter(r => r.countryData?.gdp)
      .map(r => ({
        id: `gdp-${r.code}`,
        country: r.country,
        countryCode: r.code,
        metricType: 'gdp' as const,
        value: r.countryData!.gdp,
        unit: 'B USD',
        trend: 'neutral' as TrendDirection,
        timestamp: now,
        source: 'API Ninjas',
      }))
      .sort((a, b) => b.value - a.value)

    // Process GDP per capita
    const gdpPerCapita: MetricData[] = results
      .filter(r => r.countryData?.gdp_per_capita)
      .map(r => ({
        id: `gdp-pc-${r.code}`,
        country: r.country,
        countryCode: r.code,
        metricType: 'gdp' as const,
        value: r.countryData!.gdp_per_capita,
        unit: 'USD',
        trend: 'neutral' as TrendDirection,
        timestamp: now,
        source: 'API Ninjas',
      }))
      .sort((a, b) => b.value - a.value)

    // Process unemployment data
    const unemploymentMetrics: MetricData[] = results
      .filter(r => r.countryData?.unemployment !== undefined)
      .map(r => ({
        id: `unemployment-${r.code}`,
        country: r.country,
        countryCode: r.code,
        metricType: 'unemployment' as const,
        value: r.countryData!.unemployment,
        unit: '%',
        trend: getTrend(r.countryData!.unemployment, 5), // 5% is typical benchmark
        timestamp: now,
        source: 'API Ninjas',
      }))
      .sort((a, b) => a.value - b.value) // Lower unemployment is better

    // Population for context
    const populationData = results
      .filter(r => r.countryData?.population)
      .map(r => ({
        country: r.country,
        countryCode: r.code,
        population: r.countryData!.population,
        internetUsers: r.countryData!.internet_users,
      }))

    return NextResponse.json({
      inflation: inflationMetrics,
      gdp: gdpMetrics,
      gdpPerCapita,
      unemployment: unemploymentMetrics,
      population: populationData,
      timestamp: now.toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Indicators API error:', error)
    return NextResponse.json(
      {
        inflation: [],
        gdp: [],
        gdpPerCapita: [],
        unemployment: [],
        population: [],
        error: 'Failed to fetch economic indicators',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
