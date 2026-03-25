export type CorrectionType =
  | "CORRECTION"
  | "UPDATE"
  | "CLARIFICATION"
  | "DECLASSIFIED"
  | "RETRACTION"

export interface CorrectionEntry {
  date: string
  report: string
  reportUrl: string
  section: string
  claim: string
  type: CorrectionType
  previous: string
  updated: string
  reason: string
  source: string
}

export const CORRECTION_COLORS: Record<CorrectionType, string> = {
  CORRECTION: "#c73032",
  UPDATE: "#d4a74a",
  CLARIFICATION: "#1b4965",
  DECLASSIFIED: "#2d6a4f",
  RETRACTION: "#666666",
}

export const CORRECTION_LABELS: Record<CorrectionType, string> = {
  CORRECTION: "We got a fact wrong",
  UPDATE: "New information changes context",
  CLARIFICATION: "Original accurate but could mislead",
  DECLASSIFIED: "New source material released",
  RETRACTION: "Cannot verify, removed",
}
