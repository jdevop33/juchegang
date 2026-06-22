import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Link from "next/link"
import { SovereigntyProtocolContent } from "./sovereignty-protocol-content"

export const metadata = {
  title: "The Sovereignty Protocol | Juchegang",
  description:
    "Rented umbrellas, magazine maps, and the inheritance of Myeongnyang. A strategic assessment of Korean sovereignty, dependency structures, and the case for reunification through shared pride.",
  openGraph: {
    title: "The Sovereignty Protocol",
    description:
      "Rented umbrellas, magazine maps, and the inheritance of Myeongnyang.",
    images: [
      {
        url: "/images/sovereignty-protocol/paektu-heaven-lake.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven Lake at Mount Paektu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Sovereignty Protocol",
    images: ["/images/sovereignty-protocol/paektu-heaven-lake.jpg"],
  },
}

export default function SovereigntyProtocolPage() {
  return (
    <main className="min-h-[100dvh] bg-river-depths text-cream">
      <JucheHeader />

      {/* Classification Header */}
      <section className="border-b border-river-current pt-20 sm:pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Strategic Assessment
            </p>
            <p className="text-cream-muted text-xs tracking-widest uppercase mt-1">
              Clearance: Level_01 // Ref: KOR-885
            </p>
          </div>
          <Link
            href="/briefings"
            className="text-sovereign-gold text-sm hover:underline underline-offset-4 transition-colors"
          >
            &larr; Back to Briefings
          </Link>
        </div>
      </section>

      <SovereigntyProtocolContent />

      <JucheFooter />
    </main>
  )
}
