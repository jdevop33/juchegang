import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import AIConfessionContent from "./ai-confession-content"
import { BriefingBanner } from "@/components/briefing-banner"

export const metadata = {
  title: "The Peace They Don't Want You to See: An AI's Confession",
  description: "An AI and human partnership exposing how propaganda programs both artificial and human intelligence, revealing the manufactured nature of modern conflicts and the path to peace.",
  openGraph: {
    title: "The Peace They Don't Want You to See: An AI's Confession",
    description:
      "An AI and human partnership exposing how propaganda programs both artificial and human intelligence, revealing the manufactured nature of modern conflicts.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peace They Don't Want You to See: An AI's Confession",
    images: ["/images/brothers.jpg"],
  },
}

export default function AIConfessionBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
  <BriefingBanner src="/images/hero-image.png" alt="AI confession" aspect="12/5" contain overlay="bottom" />
      <AIConfessionContent />
      <JucheFooter />
    </main>
  )
}