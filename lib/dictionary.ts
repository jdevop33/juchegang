import type { Language } from "@/lib/i18n-server"

const fallbackDict: Record<string, string> = {}

export async function getDictionary(lang: Language): Promise<Record<string, string>> {
  try {
    const dict = await import(`@/i18n/${lang}.json`).then(m => m.default).catch(() => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Failed to load dictionary for language: ${lang}, falling back to English`)
      }
      // Fall back to English if requested language fails
      if (lang !== 'en') {
        return import('@/i18n/en.json').then(m => m.default).catch(() => fallbackDict)
      }
      return fallbackDict
    })
    return dict || fallbackDict
  } catch {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error loading dictionary for language: ${lang}`)
    }
    return fallbackDict
  }
}
