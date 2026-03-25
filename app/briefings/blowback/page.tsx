import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import Link from "next/link"
import { BlowbackContent } from "./blowback-content"

export const metadata = {
  title: "Blowback: The Weaponization of Terror Designations | Juchegang",
  description:
    "How the country that built Al-Qaeda's infrastructure, created ISIS's officer corps, and nurtured Hamas now decides who is a terrorist and who isn't.",
  openGraph: {
    title: "Blowback — 역풍: 테러 지정의 무기화",
    description:
      "From a crescent moon to the Brotherhood designation. The pipeline from covert operations to terror lists.",
    images: [
      {
        url: "/images/paektu-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven Lake at Mount Paektu at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Blowback — 역풍: 테러 지정의 무기화",
    images: ["/images/paektu-sunset.jpg"],
  },
}

export default function BlowbackPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-[#f0ebe3]">
      <JucheHeader />

      {/* Classification Header */}
      <section className="border-b border-[#1b4965] pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[#d4a74a] text-xs font-semibold tracking-[0.2em] uppercase">
              Strategic Intelligence Briefing
            </p>
            <p className="text-[#a0b4c8] text-xs tracking-widest uppercase mt-1">
              사적 전략 보고서 // Ref: BLOW-2026
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Mar 25, 2026"
                version="1.0"
                reportSlug="blowback"
              />
            </div>
          </div>
          <Link
            href="/briefings"
            className="text-[#d4a74a] text-sm hover:underline underline-offset-4 transition-colors"
          >
            &larr; Back to Briefings
          </Link>
        </div>
      </section>

      <BlowbackContent />

      <JucheFooter />
    </main>
  )
}
