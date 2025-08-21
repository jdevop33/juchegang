import { cookies, headers } from "next/headers"

export type Language = "en" | "kr"

export function getServerLanguage(): Language {
  const cookieLang = cookies().get("preferred-language")?.value
  if (cookieLang === "en" || cookieLang === "kr") return cookieLang

  const accept = headers().get("accept-language")?.toLowerCase() || ""
  if (accept.includes("ko") || accept.includes("kr")) return "kr"
  return "en"
}


