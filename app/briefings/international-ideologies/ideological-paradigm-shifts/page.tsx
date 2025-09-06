import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import ShiftsContent from "./shifts-content"

export const metadata = {
  title: "Deep Disagreement & Ideological Paradigm Shifts",
  description:
    "Plain-language note linking deep disagreements to shifts in ideological paradigms (cf. Sondhi) and analogy to Kuhn’s scientific revolutions.",
  openGraph: {
    title: "Deep Disagreement & Ideological Paradigm Shifts",
    description:
      "When frameworks clash, it can signal a paradigm shift — ideology version.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Disagreement & Ideological Paradigm Shifts",
    images: ["/images/brothers.jpg"],
  },
}

export default function IdeologicalParadigmShiftsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Ideological paradigm shifts" aspect="12/5" contain overlay="bottom" />
      <ShiftsContent />
      <JucheFooter />
    </main>
  )
}


