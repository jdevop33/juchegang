"use client"

import { useEffect, useRef, useState } from "react"
import { translateText } from "@/lib/auto-translate"

type Lang = "EN" | "KR"

// Simple in-memory cache on the client to avoid duplicate calls in a session
const clientCache = new Map<string, string>()

function cacheKey(text: string, target: Lang, source?: Lang) {
  return `${target}|${source ?? ""}|${text}`
}

export function useAutoTranslate(text: string | undefined, enabled: boolean, target: Lang, source?: Lang) {
  const [translated, setTranslated] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const lastKeyRef = useRef<string>("")

  useEffect(() => {
    if (!enabled || !text) {
      setTranslated(null)
      setLoading(false)
      return
    }

    const key = cacheKey(text, target, source)
    if (lastKeyRef.current === key) return
    lastKeyRef.current = key

    const cached = clientCache.get(key)
    if (cached) {
      setTranslated(cached)
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    translateText(text, target, source)
      .then((out) => {
        if (cancelled) return
        const str = Array.isArray(out) ? out[0] : (out as string)
        if (str) {
          clientCache.set(key, str)
          setTranslated(str)
        }
      })
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [text, enabled, target, source])

  return { translated, loading }
}


