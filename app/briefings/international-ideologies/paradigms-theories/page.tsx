import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import ParadigmsTheoriesContent from "./paradigms-theories-content"

export const metadata = {
  title: "Paradigms vs. Theories: Plain Guide for Social Science",
  description:
    "Clear summary of positivism, social constructionism, critical, and postmodern paradigms; and how theories differ — based on an open‑licensed chapter.",
  openGraph: {
    title: "Paradigms vs. Theories: Plain Guide",
    description:
      "Positivism, social constructionism, critical, postmodern — and why theory matters in research.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradigms vs. Theories: Plain Guide",
    images: ["/images/brothers.jpg"],
  },
}

export default function ParadigmsTheoriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Paradigms and theories" aspect="12/5" contain overlay="bottom" />
      <ParadigmsTheoriesContent />
      <JucheFooter />
    </main>
  )
}


