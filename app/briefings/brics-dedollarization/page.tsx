import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import BRICSDedollarizationContent from "./brics-dedollarization-content"

export const metadata = {
  title: "De-dollarization momentum accelerates as BRICS reshapes global finance",
  description:
    "Analysis of BRICS payment systems, Federal Reserve constraints, alternative infrastructure development, and quantified impacts on US fiscal sustainability.",
  openGraph: {
    title: "BRICS De-dollarization: Reshaping Global Finance",
    description:
      "BRICS payment systems, Federal Reserve constraints, and quantified impacts on US fiscal sustainability.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRICS De-dollarization",
    images: ["/images/brothers.jpg"],
  },
}

export default function BRICSDedollarizationBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/briefing2banner.png" alt="BRICS de-dollarization" aspect="12/5" contain overlay="bottom" />
      <BRICSDedollarizationContent />
      <JucheFooter />
    </main>
  )
}