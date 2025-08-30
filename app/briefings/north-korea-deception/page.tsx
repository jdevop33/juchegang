import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import NorthKoreaDeceptionContent from "./north-korea-deception-content"
export const metadata = {
  title: "The North Korea Deception: Manufactured Threats and the War Machine",
  description:
    "A long-form analysis of how threat inflation, media funding pipelines, and frozen-conflict capitalism sustain the imperial security architecture.",
  openGraph: {
    title: "The North Korea Deception: Manufactured Threats and the War Machine",
    description:
      "How threat inflation, media pipelines, and frozen-conflict capitalism sustain an imperial security architecture.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Juche briefing share image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The North Korea Deception",
    images: ["/images/brothers.jpg"],
  },
}

export default function NorthKoreaDeceptionBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
  <BriefingBanner src="/images/featured-bg.jpg" alt="North Korea deception" aspect="12/5" contain overlay="bottom" />
  <NorthKoreaDeceptionContent />
      <JucheFooter />
    </main>
  )
}


