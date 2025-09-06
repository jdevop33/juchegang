import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import InternationalIdeologiesContent from "./international-ideologies-content"

export const metadata = {
  title: "International Ideologies: Plain-Language Guide",
  description:
    "A clear, accessible overview of how ideological belief systems shape world politics, based on peer‑reviewed scholarship.",
  openGraph: {
    title: "International Ideologies: Plain-Language Guide",
    description:
      "How belief systems shape world politics — explained simply, with sources.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Ideologies: Plain-Language Guide",
    images: ["/images/brothers.jpg"],
  },
}

export default function InternationalIdeologiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="International ideologies" aspect="12/5" contain overlay="bottom" />
      <InternationalIdeologiesContent />
      <JucheFooter />
    </main>
  )
}


