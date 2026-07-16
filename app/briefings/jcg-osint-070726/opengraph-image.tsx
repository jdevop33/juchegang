import { briefingOgImage, OG_SIZE } from "@/lib/briefing-og"

// Render on-demand at request time; never prerender at build (font fetch
// must not be able to fail the production build).
export const dynamic = "force-dynamic"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "JCG-OSINT 070726, a Juchegang serialized report"

export default async function Image() {
  return briefingOgImage({
    serial: "주체강 OSINT Serialized Report · 2/OS/070726-26",
    title: "Islamabad Memorandum in Open Breach",
    titleKr: "이슬라마바드 양해각서 · 공개 파기 국면",
    tagline: "Six key judgments, the twenty-day breach ledger, and the peninsula read.",
    brand: "주체강",
    brandSub: "Navigate the Current · juche.org",
  })
}
