// Sovereign Wealth Fund Dashboard - Country Data
// 100+ countries with ISO codes, regions, and metadata

export type Region =
  | 'north_america'
  | 'south_america'
  | 'europe'
  | 'asia'
  | 'africa'
  | 'oceania'
  | 'middle_east'

export interface Country {
  code: string // ISO 3166-1 alpha-2
  code3: string // ISO 3166-1 alpha-3
  name: string
  region: Region
  currency: string
  hasSWF: boolean // Has sovereign wealth fund
  swfName?: string
  swfAssets?: number // in billions USD
}

export const countries: Country[] = [
  // MAJOR SWF NATIONS
  { code: 'NO', code3: 'NOR', name: 'Norway', region: 'europe', currency: 'NOK', hasSWF: true, swfName: 'Government Pension Fund Global', swfAssets: 1400 },
  { code: 'AE', code3: 'ARE', name: 'United Arab Emirates', region: 'middle_east', currency: 'AED', hasSWF: true, swfName: 'Abu Dhabi Investment Authority', swfAssets: 993 },
  { code: 'CN', code3: 'CHN', name: 'China', region: 'asia', currency: 'CNY', hasSWF: true, swfName: 'China Investment Corporation', swfAssets: 1350 },
  { code: 'SA', code3: 'SAU', name: 'Saudi Arabia', region: 'middle_east', currency: 'SAR', hasSWF: true, swfName: 'Public Investment Fund', swfAssets: 930 },
  { code: 'KW', code3: 'KWT', name: 'Kuwait', region: 'middle_east', currency: 'KWD', hasSWF: true, swfName: 'Kuwait Investment Authority', swfAssets: 803 },
  { code: 'SG', code3: 'SGP', name: 'Singapore', region: 'asia', currency: 'SGD', hasSWF: true, swfName: 'GIC Private Limited', swfAssets: 770 },
  { code: 'QA', code3: 'QAT', name: 'Qatar', region: 'middle_east', currency: 'QAR', hasSWF: true, swfName: 'Qatar Investment Authority', swfAssets: 475 },
  { code: 'HK', code3: 'HKG', name: 'Hong Kong', region: 'asia', currency: 'HKD', hasSWF: true, swfName: 'Hong Kong Monetary Authority', swfAssets: 514 },
  { code: 'AU', code3: 'AUS', name: 'Australia', region: 'oceania', currency: 'AUD', hasSWF: true, swfName: 'Future Fund', swfAssets: 176 },
  { code: 'RU', code3: 'RUS', name: 'Russia', region: 'europe', currency: 'RUB', hasSWF: true, swfName: 'National Wealth Fund', swfAssets: 155 },

  // G20 NATIONS
  { code: 'US', code3: 'USA', name: 'United States', region: 'north_america', currency: 'USD', hasSWF: false },
  { code: 'GB', code3: 'GBR', name: 'United Kingdom', region: 'europe', currency: 'GBP', hasSWF: false },
  { code: 'DE', code3: 'DEU', name: 'Germany', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'FR', code3: 'FRA', name: 'France', region: 'europe', currency: 'EUR', hasSWF: true, swfName: 'Bpifrance', swfAssets: 35 },
  { code: 'JP', code3: 'JPN', name: 'Japan', region: 'asia', currency: 'JPY', hasSWF: true, swfName: 'GPIF', swfAssets: 1600 },
  { code: 'IN', code3: 'IND', name: 'India', region: 'asia', currency: 'INR', hasSWF: true, swfName: 'NIIF', swfAssets: 4.5 },
  { code: 'BR', code3: 'BRA', name: 'Brazil', region: 'south_america', currency: 'BRL', hasSWF: true, swfName: 'Fundo Soberano do Brasil', swfAssets: 5 },
  { code: 'CA', code3: 'CAN', name: 'Canada', region: 'north_america', currency: 'CAD', hasSWF: true, swfName: 'CPPIB', swfAssets: 570 },
  { code: 'IT', code3: 'ITA', name: 'Italy', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'MX', code3: 'MEX', name: 'Mexico', region: 'north_america', currency: 'MXN', hasSWF: true, swfName: 'FEIEF', swfAssets: 3 },
  { code: 'KR', code3: 'KOR', name: 'South Korea', region: 'asia', currency: 'KRW', hasSWF: true, swfName: 'Korea Investment Corporation', swfAssets: 240 },
  { code: 'ID', code3: 'IDN', name: 'Indonesia', region: 'asia', currency: 'IDR', hasSWF: true, swfName: 'Indonesia Investment Authority', swfAssets: 20 },
  { code: 'TR', code3: 'TUR', name: 'Turkey', region: 'europe', currency: 'TRY', hasSWF: true, swfName: 'Turkey Wealth Fund', swfAssets: 30 },
  { code: 'ZA', code3: 'ZAF', name: 'South Africa', region: 'africa', currency: 'ZAR', hasSWF: false },
  { code: 'AR', code3: 'ARG', name: 'Argentina', region: 'south_america', currency: 'ARS', hasSWF: false },

  // EUROPE
  { code: 'NL', code3: 'NLD', name: 'Netherlands', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'CH', code3: 'CHE', name: 'Switzerland', region: 'europe', currency: 'CHF', hasSWF: false },
  { code: 'SE', code3: 'SWE', name: 'Sweden', region: 'europe', currency: 'SEK', hasSWF: true, swfName: 'AP Funds', swfAssets: 180 },
  { code: 'PL', code3: 'POL', name: 'Poland', region: 'europe', currency: 'PLN', hasSWF: false },
  { code: 'BE', code3: 'BEL', name: 'Belgium', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'AT', code3: 'AUT', name: 'Austria', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'DK', code3: 'DNK', name: 'Denmark', region: 'europe', currency: 'DKK', hasSWF: false },
  { code: 'FI', code3: 'FIN', name: 'Finland', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'IE', code3: 'IRL', name: 'Ireland', region: 'europe', currency: 'EUR', hasSWF: true, swfName: 'Ireland Strategic Investment Fund', swfAssets: 14 },
  { code: 'PT', code3: 'PRT', name: 'Portugal', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'GR', code3: 'GRC', name: 'Greece', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'CZ', code3: 'CZE', name: 'Czech Republic', region: 'europe', currency: 'CZK', hasSWF: false },
  { code: 'RO', code3: 'ROU', name: 'Romania', region: 'europe', currency: 'RON', hasSWF: false },
  { code: 'HU', code3: 'HUN', name: 'Hungary', region: 'europe', currency: 'HUF', hasSWF: false },
  { code: 'UA', code3: 'UKR', name: 'Ukraine', region: 'europe', currency: 'UAH', hasSWF: false },
  { code: 'SK', code3: 'SVK', name: 'Slovakia', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'BG', code3: 'BGR', name: 'Bulgaria', region: 'europe', currency: 'BGN', hasSWF: false },
  { code: 'HR', code3: 'HRV', name: 'Croatia', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'LT', code3: 'LTU', name: 'Lithuania', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'SI', code3: 'SVN', name: 'Slovenia', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'LV', code3: 'LVA', name: 'Latvia', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'EE', code3: 'EST', name: 'Estonia', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'LU', code3: 'LUX', name: 'Luxembourg', region: 'europe', currency: 'EUR', hasSWF: false },
  { code: 'IS', code3: 'ISL', name: 'Iceland', region: 'europe', currency: 'ISK', hasSWF: false },

  // ASIA-PACIFIC
  { code: 'TW', code3: 'TWN', name: 'Taiwan', region: 'asia', currency: 'TWD', hasSWF: false },
  { code: 'TH', code3: 'THA', name: 'Thailand', region: 'asia', currency: 'THB', hasSWF: false },
  { code: 'MY', code3: 'MYS', name: 'Malaysia', region: 'asia', currency: 'MYR', hasSWF: true, swfName: 'Khazanah Nasional', swfAssets: 35 },
  { code: 'VN', code3: 'VNM', name: 'Vietnam', region: 'asia', currency: 'VND', hasSWF: true, swfName: 'SCIC', swfAssets: 5 },
  { code: 'PH', code3: 'PHL', name: 'Philippines', region: 'asia', currency: 'PHP', hasSWF: true, swfName: 'Maharlika Investment Fund', swfAssets: 2.5 },
  { code: 'PK', code3: 'PAK', name: 'Pakistan', region: 'asia', currency: 'PKR', hasSWF: false },
  { code: 'BD', code3: 'BGD', name: 'Bangladesh', region: 'asia', currency: 'BDT', hasSWF: false },
  { code: 'NZ', code3: 'NZL', name: 'New Zealand', region: 'oceania', currency: 'NZD', hasSWF: true, swfName: 'NZ Super Fund', swfAssets: 60 },
  { code: 'KP', code3: 'PRK', name: 'North Korea', region: 'asia', currency: 'KPW', hasSWF: false },
  { code: 'MM', code3: 'MMR', name: 'Myanmar', region: 'asia', currency: 'MMK', hasSWF: false },
  { code: 'KH', code3: 'KHM', name: 'Cambodia', region: 'asia', currency: 'KHR', hasSWF: false },
  { code: 'LA', code3: 'LAO', name: 'Laos', region: 'asia', currency: 'LAK', hasSWF: false },
  { code: 'NP', code3: 'NPL', name: 'Nepal', region: 'asia', currency: 'NPR', hasSWF: false },
  { code: 'LK', code3: 'LKA', name: 'Sri Lanka', region: 'asia', currency: 'LKR', hasSWF: false },
  { code: 'MN', code3: 'MNG', name: 'Mongolia', region: 'asia', currency: 'MNT', hasSWF: false },
  { code: 'BN', code3: 'BRN', name: 'Brunei', region: 'asia', currency: 'BND', hasSWF: true, swfName: 'BIA', swfAssets: 60 },
  { code: 'TL', code3: 'TLS', name: 'Timor-Leste', region: 'asia', currency: 'USD', hasSWF: true, swfName: 'Petroleum Fund', swfAssets: 18 },

  // MIDDLE EAST & CENTRAL ASIA
  { code: 'IL', code3: 'ISR', name: 'Israel', region: 'middle_east', currency: 'ILS', hasSWF: false },
  { code: 'IR', code3: 'IRN', name: 'Iran', region: 'middle_east', currency: 'IRR', hasSWF: true, swfName: 'NDFI', swfAssets: 140 },
  { code: 'IQ', code3: 'IRQ', name: 'Iraq', region: 'middle_east', currency: 'IQD', hasSWF: false },
  { code: 'EG', code3: 'EGY', name: 'Egypt', region: 'middle_east', currency: 'EGP', hasSWF: true, swfName: 'Egypt Sovereign Fund', swfAssets: 12 },
  { code: 'OM', code3: 'OMN', name: 'Oman', region: 'middle_east', currency: 'OMR', hasSWF: true, swfName: 'OIA', swfAssets: 46 },
  { code: 'BH', code3: 'BHR', name: 'Bahrain', region: 'middle_east', currency: 'BHD', hasSWF: true, swfName: 'Mumtalakat', swfAssets: 18 },
  { code: 'JO', code3: 'JOR', name: 'Jordan', region: 'middle_east', currency: 'JOD', hasSWF: false },
  { code: 'LB', code3: 'LBN', name: 'Lebanon', region: 'middle_east', currency: 'LBP', hasSWF: false },
  { code: 'KZ', code3: 'KAZ', name: 'Kazakhstan', region: 'asia', currency: 'KZT', hasSWF: true, swfName: 'Samruk-Kazyna', swfAssets: 85 },
  { code: 'AZ', code3: 'AZE', name: 'Azerbaijan', region: 'asia', currency: 'AZN', hasSWF: true, swfName: 'SOFAZ', swfAssets: 53 },
  { code: 'UZ', code3: 'UZB', name: 'Uzbekistan', region: 'asia', currency: 'UZS', hasSWF: false },
  { code: 'TM', code3: 'TKM', name: 'Turkmenistan', region: 'asia', currency: 'TMT', hasSWF: true, swfName: 'Stabilization Fund', swfAssets: 20 },

  // AFRICA
  { code: 'NG', code3: 'NGA', name: 'Nigeria', region: 'africa', currency: 'NGN', hasSWF: true, swfName: 'Nigeria Sovereign Investment Authority', swfAssets: 3 },
  { code: 'KE', code3: 'KEN', name: 'Kenya', region: 'africa', currency: 'KES', hasSWF: false },
  { code: 'ET', code3: 'ETH', name: 'Ethiopia', region: 'africa', currency: 'ETB', hasSWF: false },
  { code: 'GH', code3: 'GHA', name: 'Ghana', region: 'africa', currency: 'GHS', hasSWF: true, swfName: 'Ghana Heritage Fund', swfAssets: 1 },
  { code: 'TZ', code3: 'TZA', name: 'Tanzania', region: 'africa', currency: 'TZS', hasSWF: false },
  { code: 'UG', code3: 'UGA', name: 'Uganda', region: 'africa', currency: 'UGX', hasSWF: false },
  { code: 'DZ', code3: 'DZA', name: 'Algeria', region: 'africa', currency: 'DZD', hasSWF: true, swfName: 'Revenue Regulation Fund', swfAssets: 37 },
  { code: 'MA', code3: 'MAR', name: 'Morocco', region: 'africa', currency: 'MAD', hasSWF: true, swfName: 'Ithmar Capital', swfAssets: 4 },
  { code: 'AO', code3: 'AGO', name: 'Angola', region: 'africa', currency: 'AOA', hasSWF: true, swfName: 'FSDEA', swfAssets: 5 },
  { code: 'LY', code3: 'LBY', name: 'Libya', region: 'africa', currency: 'LYD', hasSWF: true, swfName: 'Libyan Investment Authority', swfAssets: 67 },
  { code: 'TN', code3: 'TUN', name: 'Tunisia', region: 'africa', currency: 'TND', hasSWF: false },
  { code: 'CI', code3: 'CIV', name: 'Ivory Coast', region: 'africa', currency: 'XOF', hasSWF: false },
  { code: 'SN', code3: 'SEN', name: 'Senegal', region: 'africa', currency: 'XOF', hasSWF: true, swfName: 'FONSIS', swfAssets: 1 },
  { code: 'CM', code3: 'CMR', name: 'Cameroon', region: 'africa', currency: 'XAF', hasSWF: false },
  { code: 'ZW', code3: 'ZWE', name: 'Zimbabwe', region: 'africa', currency: 'ZWL', hasSWF: false },
  { code: 'BW', code3: 'BWA', name: 'Botswana', region: 'africa', currency: 'BWP', hasSWF: true, swfName: 'Pula Fund', swfAssets: 5 },
  { code: 'RW', code3: 'RWA', name: 'Rwanda', region: 'africa', currency: 'RWF', hasSWF: true, swfName: 'Agaciro Development Fund', swfAssets: 0.3 },
  { code: 'MU', code3: 'MUS', name: 'Mauritius', region: 'africa', currency: 'MUR', hasSWF: false },
  { code: 'CD', code3: 'COD', name: 'DR Congo', region: 'africa', currency: 'CDF', hasSWF: false },

  // SOUTH AMERICA
  { code: 'CL', code3: 'CHL', name: 'Chile', region: 'south_america', currency: 'CLP', hasSWF: true, swfName: 'ESSF', swfAssets: 8 },
  { code: 'CO', code3: 'COL', name: 'Colombia', region: 'south_america', currency: 'COP', hasSWF: true, swfName: 'FAE', swfAssets: 3 },
  { code: 'PE', code3: 'PER', name: 'Peru', region: 'south_america', currency: 'PEN', hasSWF: true, swfName: 'FEF', swfAssets: 6 },
  { code: 'VE', code3: 'VEN', name: 'Venezuela', region: 'south_america', currency: 'VES', hasSWF: true, swfName: 'FEM', swfAssets: 0.3 },
  { code: 'EC', code3: 'ECU', name: 'Ecuador', region: 'south_america', currency: 'USD', hasSWF: false },
  { code: 'BO', code3: 'BOL', name: 'Bolivia', region: 'south_america', currency: 'BOB', hasSWF: false },
  { code: 'PY', code3: 'PRY', name: 'Paraguay', region: 'south_america', currency: 'PYG', hasSWF: false },
  { code: 'UY', code3: 'URY', name: 'Uruguay', region: 'south_america', currency: 'UYU', hasSWF: false },
  { code: 'GY', code3: 'GUY', name: 'Guyana', region: 'south_america', currency: 'GYD', hasSWF: true, swfName: 'Natural Resource Fund', swfAssets: 2 },
  { code: 'SR', code3: 'SUR', name: 'Suriname', region: 'south_america', currency: 'SRD', hasSWF: false },

  // CENTRAL AMERICA & CARIBBEAN
  { code: 'PA', code3: 'PAN', name: 'Panama', region: 'north_america', currency: 'PAB', hasSWF: true, swfName: 'FAP', swfAssets: 1.5 },
  { code: 'CR', code3: 'CRI', name: 'Costa Rica', region: 'north_america', currency: 'CRC', hasSWF: false },
  { code: 'GT', code3: 'GTM', name: 'Guatemala', region: 'north_america', currency: 'GTQ', hasSWF: false },
  { code: 'HN', code3: 'HND', name: 'Honduras', region: 'north_america', currency: 'HNL', hasSWF: false },
  { code: 'NI', code3: 'NIC', name: 'Nicaragua', region: 'north_america', currency: 'NIO', hasSWF: false },
  { code: 'SV', code3: 'SLV', name: 'El Salvador', region: 'north_america', currency: 'USD', hasSWF: false },
  { code: 'JM', code3: 'JAM', name: 'Jamaica', region: 'north_america', currency: 'JMD', hasSWF: false },
  { code: 'TT', code3: 'TTO', name: 'Trinidad and Tobago', region: 'north_america', currency: 'TTD', hasSWF: true, swfName: 'Heritage and Stabilisation Fund', swfAssets: 5 },
  { code: 'CU', code3: 'CUB', name: 'Cuba', region: 'north_america', currency: 'CUP', hasSWF: false },
  { code: 'DO', code3: 'DOM', name: 'Dominican Republic', region: 'north_america', currency: 'DOP', hasSWF: false },
  { code: 'HT', code3: 'HTI', name: 'Haiti', region: 'north_america', currency: 'HTG', hasSWF: false },
]

// Helper functions
export function getCountryByCode(code: string): Country | undefined {
  return countries.find(c => c.code === code || c.code3 === code)
}

export function getCountriesByRegion(region: Region): Country[] {
  return countries.filter(c => c.region === region)
}

export function getSWFCountries(): Country[] {
  return countries.filter(c => c.hasSWF)
}

export function getCountryFlag(code: string): string {
  // Convert country code to flag emoji
  const codePoints = code
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

// Major economies for default display
export const majorEconomies = [
  'US', 'CN', 'JP', 'DE', 'GB', 'IN', 'FR', 'IT', 'BR', 'CA',
  'RU', 'KR', 'AU', 'MX', 'ID', 'SA', 'AE', 'SG', 'NO', 'CH'
]

// SWF focus countries
export const swfFocusCountries = [
  'NO', 'AE', 'SA', 'CN', 'SG', 'KW', 'QA', 'HK', 'KR', 'JP',
  'AU', 'CA', 'NZ', 'RU', 'IR', 'MY', 'KZ', 'AZ', 'NG', 'LY'
]

// Regions for filtering
export const regions: { value: Region; label: string }[] = [
  { value: 'north_america', label: 'North America' },
  { value: 'south_america', label: 'South America' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia', label: 'Asia-Pacific' },
  { value: 'middle_east', label: 'Middle East' },
  { value: 'africa', label: 'Africa' },
  { value: 'oceania', label: 'Oceania' },
]
