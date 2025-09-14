import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import dynamic from "next/dynamic"

const FrozenConflictsContent = dynamic(() => import("./frozen-conflicts-content"), {
  loading: () => <div className="flex justify-center items-center min-h-[400px]">
    <div className="animate-pulse text-muted-foreground">Loading briefing content...</div>
  </div>,
})

export const metadata = {
  title: "Eisenhower's Warning: How Frozen Conflicts Fund the Military-Industrial Complex",
  description:
    "From Korea to Taiwan to Ukraine - how permanent tensions and frozen conflicts generate endless profits for the war machine, exactly as President Eisenhower predicted.",
  openGraph: {
    title: "Eisenhower's Warning: How Frozen Conflicts Fund the Military-Industrial Complex",
    description:
      "The pattern of permanent war for profit, from Korea to Taiwan to Ukraine.",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Frozen conflicts briefing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eisenhower's Warning: How Frozen Conflicts Fund the Military-Industrial Complex",
    images: ["/images/brothers.jpg"],
  },
}

export default function FrozenConflictsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Military industrial complex" aspect="12/5" contain overlay="bottom" />
      <FrozenConflictsContent />
      <JucheFooter />
    </main>
  )
}