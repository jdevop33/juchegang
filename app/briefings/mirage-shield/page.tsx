import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import { StructuredData } from "@/components/structured-data"
import { BriefingRail } from "@/components/briefing-rail"
import Link from "next/link"
import { MirageShieldContent } from "./mirage-shield-content"

export const metadata = {
  title: "The Mirage of the Impenetrable Shield: Missile Defense 1991-2026 | Juchegang",
  description:
    "Thirty-five years of combat data on ballistic missile defense show one consistent pattern: advertised success rates collapse on contact with an adapting adversary. The verified record versus the marketing.",
  openGraph: {
    title: "The Mirage of the Impenetrable Shield",
    description:
      "From the Patriot's 96 percent that became 9 percent to the interceptor drain of the 2025 Israel-Iran war. Every time leadership believed the shield was impenetrable, the threshold for war dropped.",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Mirage of the Impenetrable Shield: Missile Defense 1991-2026",
  },
}

export default function MirageShieldPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />
      <StructuredData
        type="article"
        data={{
          title: "The Mirage of the Impenetrable Shield",
          description: "Thirty-five years of combat data on ballistic missile defense: the verified record versus the marketing.",
          url: "https://juche.org/briefings/mirage-shield",
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
              iPurpose Strategic Briefing №01
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              Missile Defense // Open Source
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Jul 7, 2026"
                version="1.0"
                reportSlug="mirage-shield"
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

      <MirageShieldContent />

      <BriefingRail />
      <JucheFooter />
    </main>
  )
}
