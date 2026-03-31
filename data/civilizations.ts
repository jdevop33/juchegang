import type { Civilization, SortOption } from "@/types/civilization"

export const civilizations: Civilization[] = [
  { name: "Iraq (Mesopotamia/Sumer)", flag: "🇮🇶", civYear: -3500, stateYear: 1932, gdp: 264, gdpRank: 49, note: "Sumer — the first civilization. Writing, the wheel, the city. Everything starts here." },
  { name: "Egypt", flag: "🇪🇬", civYear: -3100, stateYear: 1953, gdp: 395, gdpRank: 38, note: "Unified under Narmer ~3100 BC. Women had legal rights that Europe wouldn't match for 4,800 years." },
  { name: "India", flag: "🇮🇳", civYear: -3300, stateYear: 1947, gdp: 3890, gdpRank: 5, note: "Indus Valley civilization. Planned cities with sewage systems when Europe was still in huts." },
  { name: "China", flag: "🇨🇳", civYear: -2070, stateYear: 1949, gdp: 17790, gdpRank: 2, note: "Xia Dynasty ~2070 BC. Continuous civilization for 4,000 years. Invented paper, gunpowder, the compass, and printing." },
  { name: "Iran (Persia)", flag: "🇮🇷", civYear: -3200, stateYear: 1979, gdp: 402, gdpRank: 37, note: "Proto-Elamite ~3200 BC. The Achaemenid Empire (550 BC) was the largest empire the world had ever seen." },
  { name: "Greece", flag: "🇬🇷", civYear: -3000, stateYear: 1821, gdp: 240, gdpRank: 53, note: "Minoan civilization on Crete ~3000 BC. Democracy, philosophy, mathematics, theater — all of it." },
  { name: "Korea", flag: "🇰🇷", civYear: -2333, stateYear: 1948, gdp: 1710, gdpRank: 13, note: "Gojoseon ~2333 BC. Unified kingdom from 668 AD. Divided by two American colonels in 30 minutes in 1945." },
  { name: "Ethiopia", flag: "🇪🇹", civYear: -980, stateYear: -980, gdp: 156, gdpRank: 62, note: "Kingdom of D'mt ~980 BC. Never colonized. One of only two African nations to resist European conquest." },
  { name: "Japan", flag: "🇯🇵", civYear: -660, stateYear: 1947, gdp: 4210, gdpRank: 4, note: "Traditional founding 660 BC. The oldest continuous hereditary monarchy on Earth. 125 emperors in unbroken succession." },
  { name: "Italy (Rome)", flag: "🇮🇹", civYear: -753, stateYear: 1861, gdp: 2255, gdpRank: 8, note: "Rome founded 753 BC. Built an empire that shaped every legal system, language, and road network in Europe." },
  { name: "Turkey (Anatolia)", flag: "🇹🇷", civYear: -1700, stateYear: 1923, gdp: 1108, gdpRank: 17, note: "Hittite Empire ~1700 BC. Çatalhöyük is one of the oldest cities ever found — 7500 BC." },
  { name: "Mexico (Olmec/Maya/Aztec)", flag: "🇲🇽", civYear: -1500, stateYear: 1821, gdp: 1789, gdpRank: 12, note: "Olmec civilization ~1500 BC. The Maya invented zero independently. Tenochtitlán was larger than any European city." },
  { name: "France", flag: "🇫🇷", civYear: 481, stateYear: 1792, gdp: 3130, gdpRank: 7, note: "Frankish Kingdom 481 AD. Modern republic born 1792. Napoleon turned it into the dominant power in Europe." },
  { name: "England / UK", flag: "🇬🇧", civYear: 927, stateYear: 1707, gdp: 3340, gdpRank: 6, note: "Unified England 927 AD. Built the largest empire in human history. The Venice model with better oceans." },
  { name: "Russia", flag: "🇷🇺", civYear: 862, stateYear: 1991, gdp: 1862, gdpRank: 11, note: "Kievan Rus 862 AD. Largest country on Earth. Current state is only 35 years old." },
  { name: "Germany", flag: "🇩🇪", civYear: 843, stateYear: 1990, gdp: 4460, gdpRank: 3, note: "East Francia 843 AD. Unified 1871. Reunified 1990. Still Europe's largest economy." },
  { name: "Spain", flag: "🇪🇸", civYear: 1479, stateYear: 1479, gdp: 1582, gdpRank: 15, note: "Unified by marriage of Ferdinand and Isabella 1479. First global empire — Americas, Philippines, Africa." },
  { name: "Peru (Inca/Norte Chico)", flag: "🇵🇪", civYear: -3000, stateYear: 1821, gdp: 268, gdpRank: 48, note: "Norte Chico civilization ~3000 BC. The Inca built Machu Picchu at 7,970 feet without the wheel or iron tools." },
  { name: "Saudi Arabia", flag: "🇸🇦", civYear: 622, stateYear: 1932, gdp: 1069, gdpRank: 18, note: "Islamic civilization from 622 AD. Modern kingdom founded 1932. Oil transformed it into a global power." },
  { name: "United States", flag: "🇺🇸", civYear: 1776, stateYear: 1776, gdp: 28780, gdpRank: 1, note: "250 years old. The wealthiest and most powerful nation on Earth, built on land that had been inhabited for 15,000+ years." },
  { name: "Canada", flag: "🇨🇦", civYear: 1867, stateYear: 1867, gdp: 2140, gdpRank: 9, note: "159 years old. Built by Masons on indigenous land. Your home." },
  { name: "Brazil", flag: "🇧🇷", civYear: 1822, stateYear: 1822, gdp: 2170, gdpRank: 10, note: "204 years old. Independent from Portugal 1822. Largest economy in Latin America." },
  { name: "Australia", flag: "🇦🇺", civYear: 1901, stateYear: 1901, gdp: 1790, gdpRank: 14, note: "125 years old as a federation. Aboriginal civilization is 65,000+ years old — the oldest continuous culture on Earth." },
  { name: "UAE", flag: "🇦🇪", civYear: 1971, stateYear: 1971, gdp: 504, gdpRank: 31, note: "55 years old. From desert to Dubai in two generations. Now hosts Dr. Roy Casagranda at the Museum of the Future." },
  { name: "South Sudan", flag: "🇸🇸", civYear: 2011, stateYear: 2011, gdp: 6, gdpRank: 190, note: "15 years old. The youngest country on Earth. Born from a civil war that killed 2 million people." },
]

export const sortOptions: SortOption[] = [
  { key: "civAge", label: "Oldest Civilization" },
  { key: "stateAge", label: "Oldest Nation-State" },
  { key: "gdp", label: "Highest GDP" },
  { key: "youngest", label: "Youngest Country" },
]

const CURRENT_YEAR = 2026

export function getCivAge(civYear: number): number {
  return civYear < 0 ? CURRENT_YEAR + Math.abs(civYear) : CURRENT_YEAR - civYear
}

export function getStateAge(stateYear: number): number {
  return stateYear < 0 ? CURRENT_YEAR + Math.abs(stateYear) : CURRENT_YEAR - stateYear
}

export function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BC`
  return `${year} AD`
}

export function formatGDP(gdp: number): string {
  if (gdp >= 1000) return `$${(gdp / 1000).toFixed(1)}T`
  return `$${gdp}B`
}
