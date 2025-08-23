import { NextResponse } from "next/server"

type Body = {
  text: string | string[]
  target: string
  source?: string
}

export const revalidate = 0

// Simple in-memory cache per server instance
const cache = new Map<string, string>()

function getEndpoint(key: string) {
  return key.endsWith(":fx") ? "https://api-free.deepl.com/v2/translate" : "https://api.deepl.com/v2/translate"
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.DEEPL_API_KEY || ""
    const { text, target, source }: Body = await request.json()

    if (!apiKey) {
      return NextResponse.json({ items: [], note: "DEEPL_API_KEY not configured" }, { status: 200 })
    }

    const texts = Array.isArray(text) ? text : [text]
    const targetLang = (target || "EN").toUpperCase()
    const sourceLang = source?.toUpperCase()

    const results: string[] = []
    const toTranslate: string[] = []
    const indices: number[] = []

    texts.forEach((t, idx) => {
      const key = `${targetLang}|${sourceLang ?? ""}|${t}`
      const cached = cache.get(key)
      if (cached) {
        results[idx] = cached
      } else {
        toTranslate.push(t)
        indices.push(idx)
      }
    })

    if (toTranslate.length > 0) {
      const params = new URLSearchParams()
      toTranslate.forEach((t) => params.append("text", t))
      params.set("target_lang", targetLang)
      if (sourceLang) params.set("source_lang", sourceLang)

      const res = await fetch(getEndpoint(apiKey), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `DeepL-Auth-Key ${apiKey}`,
        },
        body: params.toString(),
        // Avoid caching translations in Next layer; we do our own memoization
        next: { revalidate: 0 },
      })
      const json = await res.json()
      if (!res.ok) {
        return NextResponse.json({ error: json?.message || res.statusText }, { status: 500 })
      }
      const translated: string[] = (json?.translations || []).map((t: { text: string }) => t.text)
      translated.forEach((tt, i) => {
        const originalIndex = indices[i]
        const originalText = toTranslate[i]
        results[originalIndex] = tt
        const cacheKey = `${targetLang}|${sourceLang ?? ""}|${originalText}`
        cache.set(cacheKey, tt)
      })
    }

    // Fill any holes with source text as last resort
    for (let i = 0; i < texts.length; i++) {
      if (!results[i]) results[i] = texts[i]
    }

    return NextResponse.json({ translations: results })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}


