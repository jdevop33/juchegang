import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import { StructuredData } from "@/components/structured-data"
import { BriefingRail } from "@/components/briefing-rail"
import Link from "next/link"
import { OsintContent } from "./osint-content"

export const metadata = {
  title: "JCG-OSINT 070726: Islamabad Memorandum in Open Breach | Juchegang",
  description:
    "주체강 OSINT serialized report. Iran enforces the Hormuz corridor by fire; Washington revokes the oil waiver and resumes strikes; twelve million mourn a martyred leader. Key judgments with confidence levels, breach ledger, and peninsula implications.",
  openGraph: {
    title: "JCG-OSINT 070726 — 주체강 Serialized Report",
    description:
      "Iran–United States: the Islamabad Memorandum in open breach. Six key judgments, the twenty-day breach ledger, the license problem, and what Seoul should read in this file.",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "JCG-OSINT 070726: Islamabad Memorandum in Open Breach",
  },
}

export default function OsintReportPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />
      <StructuredData
        type="article"
        data={{
          title: "JCG-OSINT 070726: Islamabad Memorandum in Open Breach",
          description: "주체강 OSINT serialized report: key judgments with confidence levels, the twenty-day breach ledger, and peninsula implications.",
          url: "https://juche.org/briefings/jcg-osint-070726",
          image: "https://juche.org/gallery/paektu-hero-4.webp",
          publishedDate: "2026-07-07",
          modifiedDate: "2026-07-07",
        }}
      />

      {/* Classification banner */}
      <div className="bg-river-deep border-b border-sovereign-gold/40 pt-20 sm:pt-24">
        <p className="text-center font-mono text-[10px] tracking-[0.3em] uppercase text-sovereign-gold py-2">
          Unclassified // Open Source // Rel to All · 공개 자료
        </p>
      </div>

      {/* Classification Header */}
      <section className="border-b border-river-current">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase">
              주체강 OSINT Serialized Report
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              Serial 2/OS/070726-26 // Product Line: 흐름 · The Current
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Jul 7, 2026"
                version="1.0"
                reportSlug="jcg-osint-070726"
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

      <OsintContent />

      <BriefingRail />
      <JucheFooter />
    </main>
  )
}
