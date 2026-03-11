import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import NGORegimeChangeContent from "./ngo-regime-change-content"
import { BriefingBanner } from "@/components/briefing-banner"

export const metadata = {
  title: "NGOs and Regime Change",
  description:
    "How humanitarian rhetoric masks geopolitical operations. The sophisticated network of organizations that serve as instruments of foreign influence rather than genuine humanitarian assistance.",
  openGraph: {
    title: "NGOs and Regime Change",
    description:
      "How humanitarian rhetoric masks geopolitical operations. The sophisticated network of organizations that serve as instruments of foreign influence.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "NGOs and Regime Change",
    images: ["/images/brothers.jpg"],
  },
}

export default function NGORegimeChangeBriefing() {
  return (
    <main className="min-h-screen bg-river-depths text-cream">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="NGOs and regime change" aspect="12/5" contain overlay="bottom" />
      <NGORegimeChangeContent />
      <JucheFooter />
    </main>
  )
}
