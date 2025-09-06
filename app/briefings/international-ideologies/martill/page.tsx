import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import MartillContent from "./martill-content"

export const metadata = {
  title: "Benjamin Martill: International Ideologies – Five Paradigms",
  description:
    "Plain-language summary of Martill (2017) on five paradigms of ideological analysis in IR: analytical, historical, philosophical, critical, reflexive.",
  openGraph: {
    title: "Martill: Five Paradigms of International Ideologies",
    description:
      "Analytical, Historical, Philosophical, Critical, Reflexive — explained simply with citation.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martill: Five Paradigms of International Ideologies",
    images: ["/images/brothers.jpg"],
  },
}

export default function MartillPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Martill – International Ideologies" aspect="12/5" contain overlay="bottom" />
      <MartillContent />
      <JucheFooter />
    </main>
  )
}


