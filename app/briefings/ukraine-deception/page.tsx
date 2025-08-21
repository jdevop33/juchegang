import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import UkraineDeceptionContent from "./ukraine-deception-content"

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

export default function UkraineDeceptionBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <UkraineDeceptionContent />
      <JucheFooter />
    </main>
  )
}