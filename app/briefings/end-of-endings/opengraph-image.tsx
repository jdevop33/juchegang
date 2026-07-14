import { briefingOgImage, OG_SIZE } from "@/lib/briefing-og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "The End of Endings, a Juche Gang Research Division grand audit"

export default async function Image() {
  return briefingOgImage({
    serial: "Juche Gang Research Division · Grand Audit",
    title: "The End of Endings",
    tagline: "War termination, historical revisionism, and the algorithmic precipice.",
    brand: "주체강",
    brandSub: "Navigate the Current · juche.org",
  })
}
