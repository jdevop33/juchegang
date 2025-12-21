// Dashboard API: Interest Rates & Borrowing Costs
// Using API Ninjas for central bank interest rates

import { NextResponse } from 'next/server'
import { BorrowingRate, TrendDirection } from '@/types/dashboard'

const API_NINJAS_KEY = process.env.API_NINJAS_KEY || 'mHBzbxJnIQV9owM9qgj5Wg==TCvlEv90tJ4CadWw'

// Cache for 5 minutes
export const revalidate = 300

// Countries to track for interest rates
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
  { name: 'Switzerland', code: 'CH' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'Norway', code: 'NO' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Turkey', code: 'TR' },
]

interface ApiNinjasInterestRate {
  central_bank: string
  country: string
  rate_pct: number
  last_updated: string
}

async function fetchInterestRates(): Promise<ApiNinjasInterestRate[]> {
  try {
    const response = await fetch(
      'https://api.api-ninjas.com/v1/interestrate',
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 300 },
      }
    )

    if (!response.ok) {
      console.error('Interest rate API error:', response.status)
      return []
    }

    const data = await response.json()

    // Handle both array and object responses
    if (Array.isArray(data)) {
      return data
    }
    if (data.central_bank_rates) {
      return data.central_bank_rates
    }
    if (data.non_central_bank_rates) {
      return [...(data.central_bank_rates || []), ...(data.non_central_bank_rates || [])]
    }

    return []
  } catch (error) {
    console.error('Failed to fetch interest rates:', error)
    return []
  }
}

// Map country names from API to our country codes
const countryNameToCode: Record<string, string> = {
  'United States': 'US',
  'USA': 'US',
  'China': 'CN',
  'Japan': 'JP',
  'Germany': 'DE',
  'United Kingdom': 'GB',
  'UK': 'GB',
  'France': 'FR',
  'India': 'IN',
  'Brazil': 'BR',
  'Russia': 'RU',
  'Russian Federation': 'RU',
  'Canada': 'CA',
  'South Korea': 'KR',
  'Korea': 'KR',
  'Australia': 'AU',
  'Switzerland': 'CH',
  'Singapore': 'SG',
  'Saudi Arabia': 'SA',
  'United Arab Emirates': 'AE',
  'UAE': 'AE',
  'Norway': 'NO',
  'Mexico': 'MX',
  'Indonesia': 'ID',
  'Turkey': 'TR',
  'Eurozone': 'EU',
  'European Union': 'EU',
  'Euro Area': 'EU',
}

// Previous rates for trend calculation (would be replaced with real historical data)
const previousRates: Record<string, number> = {}

function getTrend(current: number, previous?: number): TrendDirection {
  if (!previous) return 'neutral'
  const diff = current - previous
  if (diff > 0.1) return 'up'
  if (diff < -0.1) return 'down'
  return 'neutral'
}

export async function GET() {
  try {
    const rates = await fetchInterestRates()

    const borrowingRates: BorrowingRate[] = rates
      .filter(rate => {
        const code = countryNameToCode[rate.country]
        return code && COUNTRIES.some(c => c.code === code || code === 'EU')
      })
      .map(rate => {
        const countryCode = countryNameToCode[rate.country] || 'XX'
        const prevRate = previousRates[countryCode]
        previousRates[countryCode] = rate.rate_pct

        return {
          country: rate.country,
          countryCode,
          centralBank: rate.central_bank,
          rate: rate.rate_pct,
          previousRate: prevRate,
          change: prevRate ? Number((rate.rate_pct - prevRate).toFixed(2)) : 0,
          trend: getTrend(rate.rate_pct, prevRate),
          lastUpdated: rate.last_updated,
        }
      })
      .sort((a, b) => b.rate - a.rate) // Sort by rate descending

    // Add USD borrowing cost comparison (this is the "China borrows USD cheaper" insight)
    const borrowingCostComparison = calculateBorrowingArbitrage(borrowingRates)

    return NextResponse.json({
      rates: borrowingRates,
      arbitrage: borrowingCostComparison,
      timestamp: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Rates API error:', error)
    return NextResponse.json(
      {
        rates: [],
        arbitrage: [],
        error: 'Failed to fetch interest rate data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

// Calculate which countries can borrow USD cheaper than the US
function calculateBorrowingArbitrage(rates: BorrowingRate[]) {
  const usRate = rates.find(r => r.countryCode === 'US')?.rate || 5.5

  // In practice, foreign USD borrowing costs = US rate + country risk premium
  // Lower domestic rates + strong credit = cheaper USD borrowing
  // This is a simplified model - real analysis would use bond spreads

  const arbitrageScores = rates
    .filter(r => r.countryCode !== 'US')
    .map(r => {
      // Credit quality adjustment (simplified)
      let creditAdjustment = 0
      if (['CH', 'SG', 'NO', 'DE'].includes(r.countryCode)) creditAdjustment = -0.5
      if (['JP', 'AU', 'CA', 'GB'].includes(r.countryCode)) creditAdjustment = -0.25
      if (['CN', 'KR', 'AE', 'SA'].includes(r.countryCode)) creditAdjustment = 0
      if (['IN', 'BR', 'MX', 'ID'].includes(r.countryCode)) creditAdjustment = 0.5
      if (['TR', 'RU'].includes(r.countryCode)) creditAdjustment = 1.5

      const estimatedUsdBorrowingCost = usRate + creditAdjustment
      const advantage = usRate - estimatedUsdBorrowingCost

      return {
        country: r.country,
        countryCode: r.countryCode,
        domesticRate: r.rate,
        estimatedUsdCost: Number(estimatedUsdBorrowingCost.toFixed(2)),
        vsUsRate: Number(advantage.toFixed(2)),
        haAdvantage: advantage > 0,
      }
    })
    .sort((a, b) => b.vsUsRate - a.vsUsRate)

  return arbitrageScores
}
