import { NextResponse } from "next/server"

export const revalidate = 0

export async function GET() {
  // Load flat dictionaries
  const en = (await import("@/i18n/en.json")).default as Record<string, string>
  const kr = (await import("@/i18n/kr.json")).default as Record<string, string>

  const enKeys = new Set(Object.keys(en))
  const krKeys = new Set(Object.keys(kr))

  const missingInKr = [...enKeys].filter((k) => !krKeys.has(k))
  const extraInKr = [...krKeys].filter((k) => !enKeys.has(k))

  // Laws coverage
  const { laws } = await import("@/data/laws")
  const { lawsKr } = await import("@/data/laws.kr")

  type Diff = { number: number; field: "title" | "content"; enLen: number; krLen: number; ratio: number }
  const missing: Array<{ number: number; field: "title" | "content" }> = []
  const short: Diff[] = []

  for (const law of laws) {
    const k = (lawsKr as any)[law.number] as { title?: string; content?: string } | undefined
    const enTitle = law.title || ""
    const enContent = law.content || ""
    const krTitle = k?.title
    const krContent = k?.content

    if (!krTitle) missing.push({ number: law.number, field: "title" })
    if (!krContent) missing.push({ number: law.number, field: "content" })

    if (krTitle) {
      const enLen = enTitle.length
      const krLen = krTitle.length
      const ratio = krLen / Math.max(1, enLen)
      if (ratio < 0.45) short.push({ number: law.number, field: "title", enLen, krLen, ratio })
    }
    if (krContent) {
      const enLen = enContent.length
      const krLen = krContent.length
      const ratio = krLen / Math.max(1, enLen)
      if (ratio < 0.45) short.push({ number: law.number, field: "content", enLen, krLen, ratio })
    }
  }

  return NextResponse.json({
    dictionaries: {
      enCount: enKeys.size,
      krCount: krKeys.size,
      missingInKr,
      extraInKr,
    },
    laws: {
      total: laws.length,
      missing,
      short, // likely just concision if present; ratios included for review
    },
    note:
      "Korean is typically 25–40% shorter by characters. Short entries here are not errors by default; review if content meaning is reduced.",
  })
}


