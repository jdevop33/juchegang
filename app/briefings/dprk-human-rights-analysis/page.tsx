import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import DprkHumanRightsContent from "./dprk-human-rights-content"

export const metadata = {
  title: "Human Rights: Who Has the Standing to Judge? — A Comparative Analysis",
  description: "The DPRK has ratified more core human rights treaties than the United States — five versus three. A comparative analysis of human rights records across nations.",
  openGraph: {
    title: "Human Rights: Who Has the Standing to Judge?",
    description: "Treaty ratifications, incarceration rates, sanctions mortality, and the politics of selective outrage. A comparative analysis of human rights records across nations.",
    images: [{ url: "/images/heros/0sunsetpaektu3.jpg", width: 700, height: 285, alt: "Human Rights Comparative Analysis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Rights: Who Has the Standing to Judge?",
    images: ["/images/heros/0sunsetpaektu3.jpg"],
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
