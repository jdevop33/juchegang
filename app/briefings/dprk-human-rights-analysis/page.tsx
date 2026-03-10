import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import DprkHumanRightsContent from "./dprk-human-rights-content"

export const metadata = {
  title: "DPRK Human Rights Claims vs Global Reality — A Data-Driven Comparative Analysis",
  description: "The DPRK has ratified more core human rights treaties than the United States — five versus three. This report examines all sides with verifiable data across 14 areas.",
  openGraph: {
    title: "DPRK Human Rights Claims vs Global Reality — Data-Driven Analysis",
    description: "Treaty ratification paradoxes, political prison camps, mass incarceration, sanctions mortality, and the politics of selective outrage. 14 areas examined with verifiable data.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "DPRK Human Rights Analysis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPRK Human Rights Claims vs Global Reality",
    images: ["/images/brothers.jpg"],
  },
}

export default function DprkHumanRightsAnalysisPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <DprkHumanRightsContent />
      <JucheFooter />
    </main>
  )
}
