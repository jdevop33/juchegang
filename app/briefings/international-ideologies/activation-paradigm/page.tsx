import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import ActivationParadigmContent from "./activation-paradigm-content"

export const metadata = {
  title: "Activation Paradigm: Why People Support Demanding ALMPs",
  description:
    "Plain-language summary of Van Hootegem et al. (2023) on ideological roots of public support for demanding active labour market policies.",
  openGraph: {
    title: "Activation Paradigm: Support for Demanding ALMPs",
    description:
      "How justice preferences and unemployment attributions shape support for demanding activation policies.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activation Paradigm: Support for Demanding ALMPs",
    images: ["/images/brothers.jpg"],
  },
}

export default function ActivationParadigmPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Activation paradigm" aspect="12/5" contain overlay="bottom" />
      <ActivationParadigmContent />
      <JucheFooter />
    </main>
  )
}


