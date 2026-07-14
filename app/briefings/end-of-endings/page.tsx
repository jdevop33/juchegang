import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import { StructuredData } from "@/components/structured-data"
import { BriefingRail } from "@/components/briefing-rail"
import Link from "next/link"
import { EndOfEndingsContent } from "./end-of-endings-content"

export const metadata = {
  title: "The End of Endings: War Termination and the Algorithmic Precipice | Juchegang",
  description:
    "A grand audit of war termination, historical revisionism, and the algorithmic precipice. Why wars no longer end, who writes the history when they do, and what happens when machines inherit both jobs.",
  openGraph: {
    title: "The End of Endings",
    description:
      "War termination theory from Thucydides to flash wars. The defeated do not disappear; they write memoirs, they form underground movements, and today, they train AI models.",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The End of Endings: War Termination and the Algorithmic Precipice",
  },
}

export default function EndOfEndingsPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />
      <StructuredData
        type="article"
        data={{
          title: "The End of Endings",
          description: "A grand audit of war termination, historical revisionism, and the algorithmic precipice.",
          url: "https://juche.org/briefings/end-of-endings",
          image: "https://juche.org/gallery/paektu-hero-4.webp",
          publishedDate: "2026-07-14",
          modifiedDate: "2026-07-14",
        }}
      />

      {/* Classification Header */}
      <section className="border-b border-river-current pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Juche Gang Research Division
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              Grand Audit // War Termination Studies
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Jul 14, 2026"
                version="1.0"
                reportSlug="end-of-endings"
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

      <EndOfEndingsContent />

      <BriefingRail />
      <JucheFooter />
    </main>
  )
}
