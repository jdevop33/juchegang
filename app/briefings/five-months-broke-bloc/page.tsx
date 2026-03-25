import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import FiveMonthsContent from "./five-months-content"

export const metadata = {
  title: "The Five Months That Broke the Bloc — CIA Declassified: Poland, 1989",
  description:
    "Part I of the Classified to Declassified series. How the CIA tracked Poland's 134-day journey from the Roundtable Accords to a non-Communist prime minister. Analysis of five Top Secret intelligence briefs.",
  openGraph: {
    title: "The Five Months That Broke the Bloc — Classified to Declassified Part I",
    description:
      "How the CIA tracked Poland's 134-day journey from the Roundtable Accords to a non-Communist prime minister. Analysis of five Top Secret intelligence briefs.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Five Months That Broke the Bloc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Five Months That Broke the Bloc",
    images: ["/images/brothers.jpg"],
  },
}

export default function FiveMonthsPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-[#f0ebe3]">
      <JucheHeader />
      <FiveMonthsContent />
      <JucheFooter />
    </main>
  )
}
