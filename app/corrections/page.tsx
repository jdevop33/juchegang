import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { CorrectionsContent } from "./corrections-content"

export const metadata = {
  title: "Corrections & Updates | Juchegang",
  description:
    "Living document corrections log. We research, verify, and publish corrections publicly. Transparency is credibility.",
  openGraph: {
    title: "Corrections & Updates",
    description:
      "Living document corrections log. Transparency is credibility.",
  },
}

export default function CorrectionsPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-[#f0ebe3]">
      <JucheHeader />
      <CorrectionsContent />
      <JucheFooter />
    </main>
  )
}
