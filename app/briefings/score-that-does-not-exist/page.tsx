import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import Link from "next/link"
import { ScoreContent } from "./score-content"

export const metadata = {
  title: "The Score That Does Not Exist — 존재하지 않는 점수 | Juchegang",
  description:
    "Social credit, reputation-scored lending, and the predatory machine China shut down while the West kept it running. Every claim verified against primary sources.",
  openGraph: {
    title: "The Score That Does Not Exist — 존재하지 않는 점수",
    description:
      "The unified Chinese citizen score is a Western invention. The scoring-and-lending machine was built in London and San Francisco — and only one government shut it down.",
    images: [
      {
        url: "/gallery/paektu-hero-4.webp",
        width: 1200,
        height: 630,
        alt: "Heaven Lake at Mount Paektu at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Score That Does Not Exist — 존재하지 않는 점수",
    images: ["/gallery/paektu-hero-4.webp"],
  },
}

export default function ScoreThatDoesNotExistPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />

      {/* Classification Header */}
      <section className="border-b border-river-current pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase">
              주체강 White Paper
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              JCK-WP-2026-0714 // Unclassified · Open Sources Only
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Jul 14, 2026"
                version="1.0"
                reportSlug="score-that-does-not-exist"
              />
            </div>
          </div>
          <Link
            href="/briefings"
            className="text-sovereign-gold text-sm hover:underline underline-offset-4 transition-colors"
          >
            &larr; Back to Briefings
          </Link>
        </div>
      </section>

      <ScoreContent />

      <JucheFooter />
    </main>
  )
}
