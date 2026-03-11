import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import EUUkraineAidContent from "./eu-ukraine-aid-content"
import { BriefingBanner } from "@/components/briefing-banner"

export const metadata = {
  title: "The Tipping Point: How Europe's €90 Billion Gamble on Ukraine Could Reshape Global Finance",
  description:
    "Analysis of the EU's €90 billion loan package for Ukraine, examining the complex financial architecture built on uncertain assumptions about Russian reparations and risks for European taxpayers.",
  openGraph: {
    title: "The Tipping Point: How Europe's €90 Billion Gamble on Ukraine Could Reshape Global Finance",
    description:
      "Analysis of the EU's €90 billion loan package for Ukraine, examining the complex financial architecture built on uncertain assumptions about Russian reparations and risks for European taxpayers.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "EU Ukraine Aid briefing" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Tipping Point: How Europe's €90 Billion Gamble on Ukraine Could Reshape Global Finance",
    images: ["/images/brothers.jpg"],
  },
}

export default function EUUkraineAidPage() {
  return (
    <main className="min-h-screen bg-river-depths text-cream">
      <JucheHeader />
      <BriefingBanner src="/images/brothers.jpg" alt="EU Ukraine Aid" aspect="12/5" />
      <EUUkraineAidContent />
      <JucheFooter />
    </main>
  )
}
