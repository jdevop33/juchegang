import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import TruthForPeaceContent from "./truth-for-peace-content"
import { BriefingBanner } from "@/components/briefing-banner"

export const metadata = {
  title: "Truth for Peace: Lessons from the Arduous March",
  description: "A collaborative analysis between AI and human on the manufactured division of Korea, the reality of the 1990s famine, and the path toward reunification and peace.",
  openGraph: {
    title: "Truth for Peace: Lessons from the Arduous March",
    description:
      "A collaborative analysis on the manufactured division of Korea, the reality of the 1990s famine, and the path toward reunification and peace.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truth for Peace: Lessons from the Arduous March",
    images: ["/images/brothers.jpg"],
  },
}

export default function TruthForPeaceBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
  <BriefingBanner src="/images/coolgang2.png" alt="Truth for peace" aspect="12/5" contain overlay="bottom" />
      <TruthForPeaceContent />
      <JucheFooter />
    </main>
  )
}