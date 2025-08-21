import type { Language } from "@/lib/i18n-server"

export async function getDictionary(lang: Language): Promise<Record<string, string>> {
  const dict = await import(`@/i18n/${lang}.json`).then(m => m.default).catch(() => ({}))
  return dict
}


