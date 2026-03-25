import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Link from "next/link"
import { ArchitectureOfRuinContent } from "./architecture-of-ruin-content"

export const metadata = {
  title: "The Architecture of Ruin | Juchegang",
  description:
    "What happens when you invite a superpower's weapons onto your soil to fight your neighbor. Six countries found out. Five of them are still paying.",
  openGraph: {
    title: "The Architecture of Ruin",
    description:
      "750 US military sites. 80 countries. $55 billion annually. Six case studies in what hosting really costs.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Korean reunification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Architecture of Ruin",
    images: ["/images/brothers.jpg"],
  },
}

export default function ArchitectureOfRuinPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-[#f0ebe3]">
      <JucheHeader />

      {/* Classification Header */}
      <section className="border-b border-[#1b4965] pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[#d4a74a] text-xs font-semibold tracking-[0.2em] uppercase">
              Strategic Assessment
            </p>
            <p className="text-[#a0b4c8] text-xs tracking-widest uppercase mt-1">
              Clearance: Level_01 // Ref: HOST-750
            </p>
          </div>
          <Link
            href="/briefings"
            className="text-[#d4a74a] text-sm hover:underline underline-offset-4 transition-colors"
          >
            &larr; Back to Briefings
          </Link>
        </div>
      </section>

      <ArchitectureOfRuinContent />

      <JucheFooter />
    </main>
  )
}
