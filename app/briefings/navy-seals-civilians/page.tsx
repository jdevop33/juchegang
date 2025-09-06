import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import NavySealsCiviliansContent from "./navy-seals-civilians-content"

export const metadata = {
  title: "When the Tables Turn: A Story of Perspective",
  description:
    "How different does the same story feel when it's our forces vs. their forces? An examination of perspective in military operations.",
  openGraph: {
    title: "When the Tables Turn: A Story of Perspective",
    description:
      "How different does the same story feel when it's our forces vs. their forces?",
    images: [
      {
        url: "/images/brothers.jpg",
        width: 1200,
        height: 630,
        alt: "Juche briefing share image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "When the Tables Turn: A Story of Perspective",
    images: ["/images/brothers.jpg"],
  },
}

export default function NavySealsCiviliansPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Navy SEALs civilians" aspect="12/5" contain overlay="bottom" />
      <NavySealsCiviliansContent />
      <JucheFooter />
    </main>
  )
}