import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import SafeFocalImage from "@/components/safe-focal-image"
import { BriefingBanner } from "@/components/briefing-banner"
import NATOExpansionContent from "./nato-expansion-content"

export const metadata = {
  title: "The Ukraine Deception: How NATO Expansion Manufactured a War",
  description: "Analysis of NATO expansion violations, sabotaged peace talks, and systematic manufacturing of conflict for imperial objectives.",
  openGraph: {
    title: "The Ukraine Deception",
    description:
      "NATO expansion, sabotaged peace talks, and manufacturing of conflict for imperial objectives.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ukraine Deception",
    images: ["/images/brothers.jpg"],
  },
}

export default function NatoExpansionBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
  <BriefingBanner src="/images/coolgang2.png" alt="NATO expansion" aspect="12/5" contain overlay="bottom" />
      <NATOExpansionContent />
      <JucheFooter />
    </main>
  )
}


