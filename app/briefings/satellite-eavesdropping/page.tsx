import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import SatelliteEavesdroppingContent from "./satellite-eavesdropping-content"

export const metadata = {
  title: "Don't Look Up — The $800 Satellite Eavesdropping Crisis Hiding in Plain Sight",
  description: "How consumer-grade equipment exposed military secrets, phone calls, banking data, and critical infrastructure across two continents. ~50% of GEO satellite signals are unencrypted.",
  openGraph: {
    title: "Don't Look Up — The $800 Satellite Eavesdropping Crisis",
    description: "50% of GEO satellite signals unencrypted. $800 total equipment cost. 2,711 T-Mobile numbers captured in 9 hours. JPanda Papers cybersecurity analysis.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Don't Look Up - Satellite Eavesdropping Crisis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don't Look Up — $800 Satellite Eavesdropping Crisis",
    images: ["/images/brothers.jpg"],
  },
}

export default function SatelliteEavesdroppingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <SatelliteEavesdroppingContent />
      <JucheFooter />
    </main>
  )
}
