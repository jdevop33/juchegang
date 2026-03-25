import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import PerformativeEthicsContent from "./performative-ethics-content"

export const metadata = {
  title: "Performative Ethics and the Sanctions Regime — Virtue Theater, Structural Violence & Global Hierarchy",
  description: "Academic analysis of how international sanctions function as a codified global caste system, maintained through media manipulation, moral grandstanding, and the criminalization of compassion.",
  openGraph: {
    title: "Performative Ethics and the Sanctions Regime",
    description: "Academic analysis of how international sanctions function as a codified global caste system, maintained through media manipulation, moral grandstanding, and the criminalization of compassion.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Performative Ethics and Sanctions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performative Ethics and the Sanctions Regime",
    images: ["/images/brothers.jpg"],
  },
}

export default function PerformativeEthicsPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-[#f0ebe3]">
      <JucheHeader />
      <PerformativeEthicsContent />
      <JucheFooter />
    </main>
  )
}
