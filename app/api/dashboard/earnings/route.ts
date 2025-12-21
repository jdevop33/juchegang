// Dashboard API: Company Earnings
// Using API Ninjas Earnings API
// SEC filings data for major companies

import { NextResponse } from 'next/server'

const API_NINJAS_KEY = process.env.API_NINJAS_KEY || 'mHBzbxJnIQV9owM9qgj5Wg==TCvlEv90tJ4CadWw'

// Cache for 6 hours (earnings don't change frequently)
export const revalidate = 21600

// Major companies to track (SWF-relevant)
const COMPANIES = [
  // US Tech Giants
  { ticker: 'AAPL', name: 'Apple', sector: 'Technology' },
  { ticker: 'MSFT', name: 'Microsoft', sector: 'Technology' },
  { ticker: 'GOOGL', name: 'Alphabet', sector: 'Technology' },
  { ticker: 'AMZN', name: 'Amazon', sector: 'Technology' },
  { ticker: 'NVDA', name: 'NVIDIA', sector: 'Semiconductors' },
  { ticker: 'META', name: 'Meta', sector: 'Technology' },
  // Energy
  { ticker: 'XOM', name: 'ExxonMobil', sector: 'Energy' },
  { ticker: 'CVX', name: 'Chevron', sector: 'Energy' },
  // Finance
  { ticker: 'JPM', name: 'JPMorgan', sector: 'Finance' },
  { ticker: 'GS', name: 'Goldman Sachs', sector: 'Finance' },
  // Industrial
  { ticker: 'BA', name: 'Boeing', sector: 'Industrial' },
  { ticker: 'CAT', name: 'Caterpillar', sector: 'Industrial' },
]

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

async function fetchEarnings(ticker: string): Promise<any | null> {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/earnings?ticker=${ticker}`,
      {
        headers: { 'X-Api-Key': API_NINJAS_KEY },
        next: { revalidate: 21600 },
      }
    )

    if (!response.ok) {
      console.error(`Earnings API error for ${ticker}: ${response.status}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Earnings fetch error for ${ticker}:`, error)
    return null
  }
}

// Rate limit: fetch sequentially with delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function GET() {
  try {
    const earnings: EarningsData[] = []

    // Fetch earnings for each company (sequential to respect rate limits)
    for (const company of COMPANIES) {
      const data = await fetchEarnings(company.ticker)

      if (data && data.income_statement) {
        earnings.push({
          ticker: company.ticker,
          name: company.name,
          sector: company.sector,
          fiscalYear: data.company_info?.fiscal_year || 0,
          fiscalQuarter: data.company_info?.fiscal_quarter || 0,
          revenue: data.income_statement?.total_revenue || 0,
          netIncome: data.income_statement?.net_income || 0,
          eps: data.income_statement?.earnings_per_share_diluted || 0,
          grossProfit: data.income_statement?.gross_profit || 0,
          operatingIncome: data.income_statement?.operating_income || 0,
          filingDate: data.filing_info?.filing_date || '',
          periodEnd: data.filing_info?.period_end_date || '',
        })
      }

      // Wait 500ms between requests
      await delay(500)
    }

    // Calculate sector summaries
    const sectorSummary = earnings.reduce((acc, e) => {
      if (!acc[e.sector]) {
        acc[e.sector] = { revenue: 0, netIncome: 0, count: 0 }
      }
      acc[e.sector].revenue += e.revenue
      acc[e.sector].netIncome += e.netIncome
      acc[e.sector].count++
      return acc
    }, {} as Record<string, { revenue: number; netIncome: number; count: number }>)

    // Format numbers for display
    const formatBillions = (n: number) => `$${(n / 1e9).toFixed(1)}B`

    return NextResponse.json({
      earnings,
      sectorSummary,
      stats: {
        totalRevenue: earnings.reduce((sum, e) => sum + e.revenue, 0),
        totalNetIncome: earnings.reduce((sum, e) => sum + e.netIncome, 0),
        avgEPS: earnings.length > 0
          ? (earnings.reduce((sum, e) => sum + e.eps, 0) / earnings.length).toFixed(2)
          : 0,
        companiesTracked: earnings.length,
      },
      count: earnings.length,
      timestamp: new Date().toISOString(),
      source: 'API Ninjas Earnings API (SEC Filings)',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200',
      },
    })
  } catch (error) {
    console.error('Earnings API error:', error)
    return NextResponse.json(
      {
        earnings: [],
        error: 'Failed to fetch earnings data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
