import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import APTDownContent from "./apt-down-content"
import { BriefingBanner } from "@/components/briefing-banner"

export const metadata = {
  title: "The APT Down Files: Inside the breach of a nation-state hacker",
  description:
    "Analysis of the APT Down leak presented at DEF CON 2025, attribution complexities, exposed tooling, infrastructure, and implications for cyber attribution.",
  openGraph: {
    title: "The APT Down Files",
    description:
      "Attribution complexities, tooling, and infrastructure revealed by the APT Down collection.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The APT Down Files",
    images: ["/images/brothers.jpg"],
  },
}

export default function APTDownBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
  <BriefingBanner src="/images/hero-image.png" alt="APT Down files" aspect="12/5" contain overlay="bottom" />
      <APTDownContent />
      <JucheFooter />
    </main>
  )
}