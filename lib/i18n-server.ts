import { cookies, headers } from "next/headers"

export type Language = "en" | "kr"

export async function getServerLanguage(): Promise<Language> {
  try {
    // Avoid dynamic APIs during static generation to keep pages static
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      return 'en'
    }
    const cookieStore = await cookies()
    const cookieLang = cookieStore.get("preferred-language")?.value
    if (cookieLang === "en" || cookieLang === "kr") return cookieLang

    const headersList = await headers()
    const accept = headersList.get("accept-language")?.toLowerCase() || ""
    if (accept.includes("ko") || accept.includes("kr")) return "kr"
    return "en"
  } catch (error) {
    console.warn('Server language detection failed:', error)
    return "en"
  }
}


