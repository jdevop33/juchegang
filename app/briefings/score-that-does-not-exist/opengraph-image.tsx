import { briefingOgImage, OG_SIZE } from "@/lib/briefing-og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "The Score That Does Not Exist, a Juchegang white paper"

export default async function Image() {
  return briefingOgImage({
    serial: "주체강 White Paper · JCK-WP-2026-0714",
    title: "The Score That Does Not Exist",
    titleKr: "존재하지 않는 점수",
    tagline: "Social credit, reputation-scored lending, and the machine China shut down.",
    brand: "주체강",
    brandSub: "Navigate the Current · juche.org",
  })
}
