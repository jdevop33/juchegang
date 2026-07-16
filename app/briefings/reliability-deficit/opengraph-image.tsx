import { briefingOgImage, OG_SIZE } from "@/lib/briefing-og"

// Render on-demand at request time; never prerender at build (font fetch
// must not be able to fail the production build).
export const dynamic = "force-dynamic"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "The Reliability Deficit, an iPurpose strategic briefing"

export default async function Image() {
  return briefingOgImage({
    serial: "iPurpose · Strategic Briefing No. 02 · Islamabad Memorandum",
    title: "The Reliability Deficit",
    tagline: "Twenty days from signature to open breach. The deficit no signature can fix.",
    brand: "iPurpose",
    brandSub: "Intelligence with intent · juche.org",
  })
}
