import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import SanctionsWarfareContent from "./sanctions-warfare-content"

export const metadata = {
  title: "US Sanctions as Humanitarian Weapons of War",
  description: "Documented death tolls, declassified intentions, and academic consensus on sanctions as modern siege warfare across Cuba, Iraq, Venezuela, Iran, Syria and North Korea.",
  openGraph: {
    title: "US Sanctions as Humanitarian Weapons of War",
    description:
      "Documented death tolls, declassified intentions, and academic consensus on sanctions as modern siege warfare.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "US Sanctions as Humanitarian Weapons of War",
    images: ["/images/brothers.jpg"],
  },
}

export default function SanctionsWarfareBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <SanctionsWarfareContent />
      <JucheFooter />
    </main>
  )
}