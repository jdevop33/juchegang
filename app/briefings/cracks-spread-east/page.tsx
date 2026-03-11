import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import CracksSpreadEastContent from "./cracks-spread-east-content"

export const metadata = {
  title: "The Cracks Spread East — CIA Declassified: Baltic Republics & East Germany, 1989",
  description:
    "Part II of the Classified to Declassified series. How the CIA watched the Baltic republics and East Germany slip Moscow's grip. Analysis of three Top Secret intelligence briefs from June-July 1989.",
  openGraph: {
    title: "The Cracks Spread East — Classified to Declassified Part II",
    description:
      "How the CIA watched the Baltic republics and East Germany slip Moscow's grip. Analysis of three Top Secret intelligence briefs from June-July 1989.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "The Cracks Spread East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cracks Spread East — Classified to Declassified",
    images: ["/images/brothers.jpg"],
  },
}

export default function CracksSpreadEastPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <CracksSpreadEastContent />
      <JucheFooter />
    </main>
  )
}
