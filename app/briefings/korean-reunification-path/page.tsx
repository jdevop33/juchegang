import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import KoreanReunificationContent from "./korean-reunification-content"

export const metadata = {
  title: "One Korea: The Path to Reunification and Peace",
  description:
    "Understanding the artificial division of Korea, the DPRK's legitimate security concerns, and the path toward peaceful reunification of the Korean peninsula.",
  openGraph: {
    title: "One Korea: The Path to Reunification and Peace",
    description:
      "The truth about Korea's division, the DPRK's achievements, and the path toward peaceful reunification.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Korean reunification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Korea: The Path to Reunification and Peace",
    images: ["/images/brothers.jpg"],
  },
}

export default function KoreanReunificationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/brothers.jpg" alt="Korean reunification" aspect="12/5" contain overlay="bottom" />
      <KoreanReunificationContent />
      <JucheFooter />
    </main>
  )
}