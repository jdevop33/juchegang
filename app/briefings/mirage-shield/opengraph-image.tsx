import { briefingOgImage, OG_SIZE } from "@/lib/briefing-og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "The Mirage of the Impenetrable Shield, an iPurpose strategic briefing"

export default async function Image() {
  return briefingOgImage({
    serial: "iPurpose · Strategic Briefing No. 01 · Missile Defense",
    title: "The Mirage of the Impenetrable Shield",
    tagline: "Thirty-five years of combat data versus the marketing, 1991 to 2026.",
    brand: "iPurpose",
    brandSub: "Intelligence with intent · juche.org",
  })
}
