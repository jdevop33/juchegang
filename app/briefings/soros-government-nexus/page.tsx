import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import SorosGovernmentNexusContent from "./soros-government-nexus-content"
import { BriefingBanner } from "@/components/briefing-banner"

export const metadata = {
  title: "The Soros-Government Nexus",
  description:
    "A comprehensive examination of documented relationships spanning financial partnerships, personnel exchanges, and policy influence operations. Over $300 million in government funding revealed.",
  openGraph: {
    title: "The Soros-Government Nexus",
    description:
      "A comprehensive examination of documented relationships spanning financial partnerships, personnel exchanges, and policy influence operations.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Soros-Government Nexus",
    images: ["/images/brothers.jpg"],
  },
}

export default function SorosGovernmentNexusPage() {
  return (
    <main className="min-h-screen bg-river-depths text-cream">
      <JucheHeader />
      <BriefingBanner src="/images/brothers.jpg" alt="Soros-Government Nexus" aspect="12/5" overlay="bottom" />
      <SorosGovernmentNexusContent />
      <JucheFooter />
    </main>
  )
}
