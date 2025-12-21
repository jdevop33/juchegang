// Dashboard API: Edge Factors (Unique Metrics No One Tracks)
// Water costs, rare earths, brain drain, regulatory arbitrage, infrastructure, energy independence

import { NextResponse } from 'next/server'
import {
  WaterCost,
  RareEarthData,
  BrainDrainIndex,
  RegulatoryScore,
  InfrastructureHealth,
  EnergyIndependence,
} from '@/types/dashboard'

// Cache for 24 hours (these metrics don't change frequently)
export const revalidate = 86400

// ============================================
// WATER COSTS DATA (USD per cubic meter)
// Sources: Global Water Intelligence, World Bank
// ============================================
const WATER_COSTS: WaterCost[] = [
  { country: 'Denmark', countryCode: 'DK', costPerM3: 8.51, scarcityIndex: 1, trend: 'up' },
  { country: 'Germany', countryCode: 'DE', costPerM3: 5.72, scarcityIndex: 1, trend: 'neutral' },
  { country: 'Belgium', countryCode: 'BE', costPerM3: 5.47, scarcityIndex: 1, trend: 'up' },
  { country: 'Australia', countryCode: 'AU', costPerM3: 4.89, scarcityIndex: 3, trend: 'up' },
  { country: 'United Kingdom', countryCode: 'GB', costPerM3: 4.23, scarcityIndex: 1, trend: 'neutral' },
  { country: 'France', countryCode: 'FR', costPerM3: 3.81, scarcityIndex: 1, trend: 'neutral' },
  { country: 'United States', countryCode: 'US', costPerM3: 2.14, scarcityIndex: 2, trend: 'up' },
  { country: 'Japan', countryCode: 'JP', costPerM3: 1.85, scarcityIndex: 1, trend: 'neutral' },
  { country: 'Singapore', countryCode: 'SG', costPerM3: 1.75, scarcityIndex: 4, trend: 'up' },
  { country: 'Canada', countryCode: 'CA', costPerM3: 1.65, scarcityIndex: 0, trend: 'neutral' },
  { country: 'China', countryCode: 'CN', costPerM3: 0.68, scarcityIndex: 3, trend: 'up' },
  { country: 'Brazil', countryCode: 'BR', costPerM3: 0.62, scarcityIndex: 1, trend: 'neutral' },
  { country: 'India', countryCode: 'IN', costPerM3: 0.15, scarcityIndex: 4, trend: 'up' },
  { country: 'Saudi Arabia', countryCode: 'SA', costPerM3: 0.04, scarcityIndex: 5, trend: 'neutral' },
  { country: 'UAE', countryCode: 'AE', costPerM3: 0.03, scarcityIndex: 5, trend: 'neutral' },
]

// ============================================
// RARE EARTH ELEMENTS DATA
// Sources: USGS, China Rare Earth Industry Association
// ============================================
const RARE_EARTH_DATA: RareEarthData[] = [
  {
    element: 'Neodymium',
    symbol: 'Nd',
    price: 142000,
    unit: '$/ton',
    topProducers: [
      { country: 'China', share: 60 },
      { country: 'Myanmar', share: 15 },
      { country: 'Australia', share: 8 },
    ],
    supplyRisk: 'critical',
  },
  {
    element: 'Dysprosium',
    symbol: 'Dy',
    price: 285000,
    unit: '$/ton',
    topProducers: [
      { country: 'China', share: 90 },
      { country: 'Myanmar', share: 7 },
    ],
    supplyRisk: 'critical',
  },
  {
    element: 'Praseodymium',
    symbol: 'Pr',
    price: 115000,
    unit: '$/ton',
    topProducers: [
      { country: 'China', share: 65 },
      { country: 'Australia', share: 10 },
    ],
    supplyRisk: 'high',
  },
  {
    element: 'Terbium',
    symbol: 'Tb',
    price: 1250000,
    unit: '$/ton',
    topProducers: [
      { country: 'China', share: 85 },
      { country: 'Myanmar', share: 10 },
    ],
    supplyRisk: 'critical',
  },
  {
    element: 'Lithium',
    symbol: 'Li',
    price: 15500,
    unit: '$/ton',
    topProducers: [
      { country: 'Australia', share: 47 },
      { country: 'Chile', share: 30 },
      { country: 'China', share: 15 },
    ],
    supplyRisk: 'high',
  },
  {
    element: 'Cobalt',
    symbol: 'Co',
    price: 33500,
    unit: '$/ton',
    topProducers: [
      { country: 'DR Congo', share: 70 },
      { country: 'Russia', share: 5 },
      { country: 'Australia', share: 4 },
    ],
    supplyRisk: 'critical',
  },
]

// ============================================
// BRAIN DRAIN INDEX
// Sources: World Bank, OECD, UN Migration
// ============================================
const BRAIN_DRAIN: BrainDrainIndex[] = [
  { country: 'United States', countryCode: 'US', emigrationRate: 0.4, skilledWorkerLoss: -15, netMigration: 3.8, trend: 'up' },
  { country: 'Germany', countryCode: 'DE', emigrationRate: 0.8, skilledWorkerLoss: -8, netMigration: 2.1, trend: 'up' },
  { country: 'Canada', countryCode: 'CA', emigrationRate: 1.2, skilledWorkerLoss: -12, netMigration: 6.5, trend: 'up' },
  { country: 'United Kingdom', countryCode: 'GB', emigrationRate: 4.7, skilledWorkerLoss: 5, netMigration: 0.8, trend: 'down' },
  { country: 'Australia', countryCode: 'AU', emigrationRate: 1.5, skilledWorkerLoss: -10, netMigration: 5.2, trend: 'up' },
  { country: 'Singapore', countryCode: 'SG', emigrationRate: 2.3, skilledWorkerLoss: -18, netMigration: 8.7, trend: 'up' },
  { country: 'UAE', countryCode: 'AE', emigrationRate: 1.8, skilledWorkerLoss: -25, netMigration: 12.5, trend: 'up' },
  { country: 'China', countryCode: 'CN', emigrationRate: 0.3, skilledWorkerLoss: 8, netMigration: -0.2, trend: 'neutral' },
  { country: 'India', countryCode: 'IN', emigrationRate: 1.1, skilledWorkerLoss: 12, netMigration: -0.4, trend: 'neutral' },
  { country: 'Russia', countryCode: 'RU', emigrationRate: 1.8, skilledWorkerLoss: 15, netMigration: -1.2, trend: 'down' },
  { country: 'Nigeria', countryCode: 'NG', emigrationRate: 0.6, skilledWorkerLoss: 18, netMigration: -0.3, trend: 'down' },
  { country: 'Venezuela', countryCode: 'VE', emigrationRate: 12.5, skilledWorkerLoss: 35, netMigration: -18.5, trend: 'down' },
]

// ============================================
// REGULATORY ARBITRAGE SCORES
// Sources: World Bank Ease of Doing Business, Tax Foundation
// ============================================
const REGULATORY_SCORES: RegulatoryScore[] = [
  { country: 'Singapore', countryCode: 'SG', easeOfBusiness: 86.2, taxRate: 17, regulatoryBurden: 15, arbitrageScore: 92, trend: 'up' },
  { country: 'New Zealand', countryCode: 'NZ', easeOfBusiness: 86.8, taxRate: 28, regulatoryBurden: 18, arbitrageScore: 88, trend: 'neutral' },
  { country: 'Hong Kong', countryCode: 'HK', easeOfBusiness: 85.3, taxRate: 16.5, regulatoryBurden: 12, arbitrageScore: 90, trend: 'down' },
  { country: 'Denmark', countryCode: 'DK', easeOfBusiness: 85.3, taxRate: 22, regulatoryBurden: 20, arbitrageScore: 82, trend: 'neutral' },
  { country: 'UAE', countryCode: 'AE', easeOfBusiness: 80.9, taxRate: 0, regulatoryBurden: 22, arbitrageScore: 88, trend: 'up' },
  { country: 'United States', countryCode: 'US', easeOfBusiness: 84.0, taxRate: 21, regulatoryBurden: 28, arbitrageScore: 75, trend: 'neutral' },
  { country: 'United Kingdom', countryCode: 'GB', easeOfBusiness: 83.5, taxRate: 25, regulatoryBurden: 25, arbitrageScore: 78, trend: 'down' },
  { country: 'Germany', countryCode: 'DE', easeOfBusiness: 79.7, taxRate: 29.9, regulatoryBurden: 32, arbitrageScore: 68, trend: 'neutral' },
  { country: 'Japan', countryCode: 'JP', easeOfBusiness: 78.0, taxRate: 23.2, regulatoryBurden: 35, arbitrageScore: 65, trend: 'neutral' },
  { country: 'France', countryCode: 'FR', easeOfBusiness: 76.8, taxRate: 25, regulatoryBurden: 42, arbitrageScore: 58, trend: 'up' },
  { country: 'China', countryCode: 'CN', easeOfBusiness: 77.9, taxRate: 25, regulatoryBurden: 45, arbitrageScore: 55, trend: 'neutral' },
  { country: 'Brazil', countryCode: 'BR', easeOfBusiness: 59.1, taxRate: 34, regulatoryBurden: 55, arbitrageScore: 38, trend: 'neutral' },
  { country: 'India', countryCode: 'IN', easeOfBusiness: 71.0, taxRate: 25.17, regulatoryBurden: 48, arbitrageScore: 52, trend: 'up' },
  { country: 'Russia', countryCode: 'RU', easeOfBusiness: 78.2, taxRate: 20, regulatoryBurden: 55, arbitrageScore: 45, trend: 'down' },
]

// ============================================
// INFRASTRUCTURE HEALTH
// Sources: World Economic Forum, ASCE, McKinsey
// ============================================
const INFRASTRUCTURE: InfrastructureHealth[] = [
  { country: 'Singapore', countryCode: 'SG', qualityIndex: 95, maintenanceBacklog: 0.5, investmentRate: 3.2, decayRate: 0.8, trend: 'up' },
  { country: 'Switzerland', countryCode: 'CH', qualityIndex: 93, maintenanceBacklog: 0.8, investmentRate: 2.8, decayRate: 1.0, trend: 'neutral' },
  { country: 'Netherlands', countryCode: 'NL', qualityIndex: 92, maintenanceBacklog: 1.2, investmentRate: 2.5, decayRate: 1.2, trend: 'neutral' },
  { country: 'Japan', countryCode: 'JP', qualityIndex: 91, maintenanceBacklog: 2.5, investmentRate: 2.2, decayRate: 1.5, trend: 'down' },
  { country: 'Germany', countryCode: 'DE', qualityIndex: 88, maintenanceBacklog: 3.2, investmentRate: 2.0, decayRate: 1.8, trend: 'down' },
  { country: 'UAE', countryCode: 'AE', qualityIndex: 90, maintenanceBacklog: 0.8, investmentRate: 4.5, decayRate: 1.2, trend: 'up' },
  { country: 'United States', countryCode: 'US', qualityIndex: 72, maintenanceBacklog: 6.2, investmentRate: 1.8, decayRate: 2.8, trend: 'down' },
  { country: 'United Kingdom', countryCode: 'GB', qualityIndex: 78, maintenanceBacklog: 4.5, investmentRate: 2.1, decayRate: 2.2, trend: 'neutral' },
  { country: 'China', countryCode: 'CN', qualityIndex: 85, maintenanceBacklog: 2.8, investmentRate: 5.5, decayRate: 2.0, trend: 'up' },
  { country: 'India', countryCode: 'IN', qualityIndex: 58, maintenanceBacklog: 8.5, investmentRate: 4.2, decayRate: 3.5, trend: 'up' },
  { country: 'Brazil', countryCode: 'BR', qualityIndex: 52, maintenanceBacklog: 7.8, investmentRate: 1.5, decayRate: 3.8, trend: 'down' },
  { country: 'Russia', countryCode: 'RU', qualityIndex: 65, maintenanceBacklog: 5.5, investmentRate: 2.8, decayRate: 2.5, trend: 'down' },
]

// ============================================
// ENERGY INDEPENDENCE
// Sources: IEA, EIA, BP Statistical Review
// ============================================
const ENERGY_INDEPENDENCE: EnergyIndependence[] = [
  { country: 'Norway', countryCode: 'NO', independenceRatio: 1.85, renewableShare: 98, importDependency: 0, strategicReserves: 365, trend: 'up' },
  { country: 'Australia', countryCode: 'AU', independenceRatio: 1.72, renewableShare: 32, importDependency: 0, strategicReserves: 180, trend: 'up' },
  { country: 'Canada', countryCode: 'CA', independenceRatio: 1.65, renewableShare: 68, importDependency: 0, strategicReserves: 120, trend: 'neutral' },
  { country: 'Russia', countryCode: 'RU', independenceRatio: 1.58, renewableShare: 18, importDependency: 0, strategicReserves: 90, trend: 'neutral' },
  { country: 'Saudi Arabia', countryCode: 'SA', independenceRatio: 2.25, renewableShare: 1, importDependency: 0, strategicReserves: 200, trend: 'neutral' },
  { country: 'United States', countryCode: 'US', independenceRatio: 1.02, renewableShare: 22, importDependency: 8, strategicReserves: 35, trend: 'up' },
  { country: 'Brazil', countryCode: 'BR', independenceRatio: 0.98, renewableShare: 48, importDependency: 12, strategicReserves: 25, trend: 'neutral' },
  { country: 'United Kingdom', countryCode: 'GB', independenceRatio: 0.75, renewableShare: 45, importDependency: 35, strategicReserves: 45, trend: 'up' },
  { country: 'China', countryCode: 'CN', independenceRatio: 0.68, renewableShare: 31, importDependency: 42, strategicReserves: 90, trend: 'up' },
  { country: 'Germany', countryCode: 'DE', independenceRatio: 0.35, renewableShare: 52, importDependency: 68, strategicReserves: 90, trend: 'neutral' },
  { country: 'Japan', countryCode: 'JP', independenceRatio: 0.12, renewableShare: 22, importDependency: 88, strategicReserves: 145, trend: 'neutral' },
  { country: 'South Korea', countryCode: 'KR', independenceRatio: 0.08, renewableShare: 8, importDependency: 92, strategicReserves: 90, trend: 'down' },
  { country: 'India', countryCode: 'IN', independenceRatio: 0.55, renewableShare: 28, importDependency: 45, strategicReserves: 10, trend: 'up' },
  { country: 'Singapore', countryCode: 'SG', independenceRatio: 0.02, renewableShare: 5, importDependency: 98, strategicReserves: 30, trend: 'neutral' },
]

export async function GET() {
  try {
    return NextResponse.json({
      water: WATER_COSTS.sort((a, b) => b.costPerM3 - a.costPerM3),
      rareEarth: RARE_EARTH_DATA,
      brainDrain: BRAIN_DRAIN.sort((a, b) => b.netMigration - a.netMigration),
      regulatory: REGULATORY_SCORES.sort((a, b) => b.arbitrageScore - a.arbitrageScore),
      infrastructure: INFRASTRUCTURE.sort((a, b) => b.qualityIndex - a.qualityIndex),
      energyIndependence: ENERGY_INDEPENDENCE.sort((a, b) => b.independenceRatio - a.independenceRatio),
      timestamp: new Date().toISOString(),
      sources: {
        water: 'Global Water Intelligence, World Bank',
        rareEarth: 'USGS, China Rare Earth Industry Association',
        brainDrain: 'World Bank, OECD, UN Migration',
        regulatory: 'World Bank Ease of Doing Business, Tax Foundation',
        infrastructure: 'World Economic Forum, ASCE, McKinsey',
        energyIndependence: 'IEA, EIA, BP Statistical Review',
      },
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
      },
    })
  } catch (error) {
    console.error('Edge factors API error:', error)
    return NextResponse.json(
      {
        water: [],
        rareEarth: [],
        brainDrain: [],
        regulatory: [],
        infrastructure: [],
        energyIndependence: [],
        error: 'Failed to fetch edge factors data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
