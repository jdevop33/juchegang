// Dashboard API: Carbon Intensity & Energy Mix
// Using Electricity Maps CSV data (US, Canada, China)
// Shows carbon intensity and renewable energy percentage

import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

// Cache for 1 hour
export const revalidate = 3600

interface CarbonData {
  country: string
  countryCode: string
  carbonIntensity: number // gCO2eq/kWh
  carbonIntensityLifeCycle: number
  carbonFreePercent: number
  renewablePercent: number
  trend: 'up' | 'down' | 'neutral'
  lastUpdated: string
}

interface HourlyData {
  datetime: string
  carbonIntensity: number
  carbonFree: number
  renewable: number
}

async function parseCSVData(countryCode: string): Promise<HourlyData[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'documents',
      `snapshots_2025-07-03_${countryCode}-2024-hourly.csv`
    )

    const content = await fs.readFile(filePath, 'utf-8')
    const lines = content.split('\n').slice(1) // Skip header

    return lines
      .filter(line => line.trim())
      .map(line => {
        const cols = line.split(',')
        return {
          datetime: cols[0],
          carbonIntensity: parseFloat(cols[4]) || 0,
          carbonFree: parseFloat(cols[6]) || 0,
          renewable: parseFloat(cols[7]) || 0,
        }
      })
  } catch (error) {
    console.error(`Error reading CSV for ${countryCode}:`, error)
    return []
  }
}

function calculateStats(data: HourlyData[]): {
  avgCarbon: number
  avgCarbonFree: number
  avgRenewable: number
  minCarbon: number
  maxCarbon: number
  trend: 'up' | 'down' | 'neutral'
} {
  if (data.length === 0) {
    return { avgCarbon: 0, avgCarbonFree: 0, avgRenewable: 0, minCarbon: 0, maxCarbon: 0, trend: 'neutral' }
  }

  const sum = data.reduce(
    (acc, d) => ({
      carbon: acc.carbon + d.carbonIntensity,
      carbonFree: acc.carbonFree + d.carbonFree,
      renewable: acc.renewable + d.renewable,
    }),
    { carbon: 0, carbonFree: 0, renewable: 0 }
  )

  const count = data.length
  const carbonValues = data.map(d => d.carbonIntensity)

  // Trend: compare last quarter to first quarter
  const quarterSize = Math.floor(count / 4)
  const firstQuarterAvg = data.slice(0, quarterSize).reduce((s, d) => s + d.carbonIntensity, 0) / quarterSize
  const lastQuarterAvg = data.slice(-quarterSize).reduce((s, d) => s + d.carbonIntensity, 0) / quarterSize

  let trend: 'up' | 'down' | 'neutral' = 'neutral'
  if (lastQuarterAvg < firstQuarterAvg * 0.95) trend = 'down' // Carbon going down is good
  else if (lastQuarterAvg > firstQuarterAvg * 1.05) trend = 'up'

  return {
    avgCarbon: sum.carbon / count,
    avgCarbonFree: sum.carbonFree / count,
    avgRenewable: sum.renewable / count,
    minCarbon: Math.min(...carbonValues),
    maxCarbon: Math.max(...carbonValues),
    trend,
  }
}

const COUNTRY_NAMES: Record<string, string> = {
  US: 'United States',
  CA: 'Canada',
  CN: 'China',
}

export async function GET() {
  try {
    const countryCodes = ['US', 'CA', 'CN']

    const results = await Promise.all(
      countryCodes.map(async code => {
        const data = await parseCSVData(code)
        const stats = calculateStats(data)
        const latest = data[data.length - 1]

        return {
          country: COUNTRY_NAMES[code] || code,
          countryCode: code,
          carbonIntensity: Number(stats.avgCarbon.toFixed(1)),
          carbonIntensityLifeCycle: Number((stats.avgCarbon * 1.15).toFixed(1)), // Approximate
          carbonFreePercent: Number(stats.avgCarbonFree.toFixed(1)),
          renewablePercent: Number(stats.avgRenewable.toFixed(1)),
          stats: {
            minCarbon: Number(stats.minCarbon.toFixed(1)),
            maxCarbon: Number(stats.maxCarbon.toFixed(1)),
            dataPoints: data.length,
          },
          trend: stats.trend,
          lastUpdated: latest?.datetime || new Date().toISOString(),
        } as CarbonData & { stats: object }
      })
    )

    // Sort by carbon intensity (lower is better)
    const sorted = results.sort((a, b) => a.carbonIntensity - b.carbonIntensity)

    // Rank countries
    const ranked = sorted.map((country, index) => ({
      ...country,
      rank: index + 1,
      grade:
        country.carbonIntensity < 100 ? 'A' :
        country.carbonIntensity < 200 ? 'B' :
        country.carbonIntensity < 300 ? 'C' :
        country.carbonIntensity < 400 ? 'D' : 'F',
    }))

    return NextResponse.json({
      countries: ranked,
      summary: {
        cleanest: ranked[0]?.country,
        dirtiest: ranked[ranked.length - 1]?.country,
        avgCarbonIntensity: Number((ranked.reduce((s, c) => s + c.carbonIntensity, 0) / ranked.length).toFixed(1)),
        avgRenewable: Number((ranked.reduce((s, c) => s + c.renewablePercent, 0) / ranked.length).toFixed(1)),
      },
      timestamp: new Date().toISOString(),
      source: 'Electricity Maps (2024 hourly data)',
      dataYear: 2024,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Carbon API error:', error)
    return NextResponse.json(
      {
        countries: [],
        error: 'Failed to fetch carbon data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
