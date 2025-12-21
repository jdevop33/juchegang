import { Metadata } from 'next'
import { DashboardClient } from './dashboard-client'

export const metadata: Metadata = {
  title: 'Sovereign Alpha | SWF Intelligence Terminal',
  description: 'Real-time sovereign wealth fund intelligence dashboard. Track electricity costs, borrowing rates, currencies, commodities, and unique edge factors like water costs, rare earth availability, brain drain, regulatory arbitrage, infrastructure health, and energy independence.',
  openGraph: {
    title: 'Sovereign Alpha | SWF Intelligence Terminal',
    description: 'AI-powered sovereign wealth intelligence. Better than Bloomberg.',
  },
}

// Revalidate every minute
export const revalidate = 60

async function fetchDashboardData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  try {
    const [marketsRes, ratesRes, indicatorsRes, edgeRes] = await Promise.all([
      fetch(`${baseUrl}/api/dashboard/markets`, { next: { revalidate: 60 } }),
      fetch(`${baseUrl}/api/dashboard/rates`, { next: { revalidate: 300 } }),
      fetch(`${baseUrl}/api/dashboard/indicators`, { next: { revalidate: 3600 } }),
      fetch(`${baseUrl}/api/dashboard/edge-factors`, { next: { revalidate: 86400 } }),
    ])

    const [markets, rates, indicators, edge] = await Promise.all([
      marketsRes.ok ? marketsRes.json() : { commodities: [], currencies: [] },
      ratesRes.ok ? ratesRes.json() : { rates: [], arbitrage: [] },
      indicatorsRes.ok ? indicatorsRes.json() : { inflation: [], gdp: [], gdpPerCapita: [], unemployment: [] },
      edgeRes.ok ? edgeRes.json() : { water: [], rareEarth: [], brainDrain: [], regulatory: [], infrastructure: [], energyIndependence: [] },
    ])

    return {
      markets,
      rates,
      indicators,
      edge,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error)
    return {
      markets: { commodities: [], currencies: [] },
      rates: { rates: [], arbitrage: [] },
      indicators: { inflation: [], gdp: [], gdpPerCapita: [], unemployment: [] },
      edge: { water: [], rareEarth: [], brainDrain: [], regulatory: [], infrastructure: [], energyIndependence: [] },
      timestamp: new Date().toISOString(),
      error: 'Failed to fetch data',
    }
  }
}

export default async function DashboardPage() {
  const data = await fetchDashboardData()

  return <DashboardClient initialData={data} />
}
