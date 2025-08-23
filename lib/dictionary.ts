import type { Language } from "@/lib/i18n-server"

export async function getDictionary(lang: Language): Promise<Record<string, string>> {
  try {
    const dict = await import(`@/i18n/${lang}.json`).then(m => m.default).catch((error) => {
      console.warn(`Failed to load dictionary for language: ${lang}`, error)
      return {}
    })
    return dict || {}
  } catch (error) {
    console.error(`Error loading dictionary for language: ${lang}`, error)
    return {}
  }
}


