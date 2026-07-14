import { briefingOgImage, OG_SIZE } from "@/lib/briefing-og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "The Tribute Bill, an iPurpose market structure brief"

export default async function Image() {
  return briefingOgImage({
    serial: "iPurpose · Market Structure Brief · MS-2026-0713",
    title: "The Tribute Bill",
    tagline: "The 500 percent tariff, and the de-dollarization it may end up financing.",
    brand: "iPurpose",
    brandSub: "Intelligence with intent · juche.org",
  })
}
