import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import ChinaCollapseContent from "./china-collapse-content"

export const metadata = {
  title: "The 'China Collapse' Narrative — A Data-Driven Refutation",
  description:
    "Comprehensive analysis debunking the persistent 'China is about to collapse' narrative using verified economic data, manufacturing output, and geopolitical indicators.",
  openGraph: {
    title: "The 'China Collapse' Narrative — A Data-Driven Refutation",
    description:
      "IMF, World Bank, and major investment banks all project continued Chinese growth. 24 years of failed collapse predictions exposed with systematic data.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "China Collapse Narrative Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 'China Collapse' Narrative Refuted",
    images: ["/images/brothers.jpg"],
  },
}

export default function ChinaCollapseNarrativePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <ChinaCollapseContent />
      <JucheFooter />
    </main>
  )
}
