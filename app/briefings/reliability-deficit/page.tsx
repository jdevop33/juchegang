import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import { StructuredData } from "@/components/structured-data"
import Link from "next/link"
import { ReliabilityDeficitContent } from "./reliability-deficit-content"

export const metadata = {
  title: "The Reliability Deficit: The Islamabad Memorandum in Open Breach | Juchegang",
  description:
    "Twenty days after the US and Iran signed a fourteen-point memorandum to end a war, every operative clause is contested. The collapse ledger, the license problem, and the deficit no signature can fix.",
  openGraph: {
    title: "The Reliability Deficit",
    description:
      "Relief delivered by revocable license is relief the other side correctly prices at near zero. A deal in which one party is sole judge of performance is not a deal but a probation order.",
    images: [
      {
        url: "/gallery/paektu-hero-2.webp",
        width: 1200,
        height: 630,
        alt: "Milky way over the Paektu crater at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Reliability Deficit: The Islamabad Memorandum in Open Breach",
    images: ["/gallery/paektu-hero-2.webp"],
  },
}

export default function ReliabilityDeficitPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />
      <StructuredData
        type="article"
        data={{
          title: "The Reliability Deficit",
          description: "The Islamabad Memorandum in open breach: the collapse ledger, the license problem, and the deficit no signature can fix.",
          url: "https://juche.org/briefings/reliability-deficit",
          image: "https://juche.org/gallery/paektu-hero-4.webp",
          publishedDate: "2026-07-07",
          modifiedDate: "2026-07-07",
        }}
      />

      {/* Classification Header */}
      <section className="border-b border-river-current pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase">
              iPurpose Strategic Briefing №02
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              The Islamabad Memorandum // Open Source
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Jul 7, 2026"
                version="1.0"
                reportSlug="reliability-deficit"
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

      <ReliabilityDeficitContent />

      <JucheFooter />
    </main>
  )
}
