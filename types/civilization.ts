export interface Civilization {
  name: string
  flag: string
  civYear: number
  stateYear: number
  gdp: number
  gdpRank: number
  note: string
}

export type SortKey = "civAge" | "stateAge" | "gdp" | "youngest"

export interface SortOption {
  key: SortKey
  label: string
}
