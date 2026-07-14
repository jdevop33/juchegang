import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { LivingDocumentBadge } from "@/components/living-document-badge"
import Link from "next/link"
import { TributeBillContent } from "./tribute-bill-content"

export const metadata = {
  title: "The Tribute Bill: The 500 Percent Tariff and De-Dollarization | Juchegang",
  description:
    "Lindsey Graham's last act, the 500 percent tariff, and the de-dollarization it may end up financing. Market structure brief with on-record quotes from four named officials, watch markers, and caveats.",
  openGraph: {
    title: "The Tribute Bill",
    description:
      "A weapon that dulls with every swing, and the heaviest swing yet proposed, taken in memoriam. The mechanics of the Sanctioning Russia Act and the two-layer oil market.",
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
    title: "The Tribute Bill: The 500 Percent Tariff and De-Dollarization",
    images: ["/gallery/paektu-hero-4.webp"],
  },
}

export default function TributeBillPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />

      {/* Classification Header */}
      <section className="border-b border-river-current pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase">
              iPurpose Market Structure Brief
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              MS-2026-0713 // Unclassified · Open Sources Only
            </p>
            <div className="mt-2">
              <LivingDocumentBadge
                lastVerified="Jul 13, 2026"
                version="1.1"
                reportSlug="tribute-bill"
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

      <TributeBillContent />

      <JucheFooter />
    </main>
  )
}
