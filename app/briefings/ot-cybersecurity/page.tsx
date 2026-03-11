import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import OtCybersecurityContent from "./ot-cybersecurity-content"

export const metadata = {
  title: "OT Cybersecurity Vulnerabilities in Military Critical Infrastructure — JPanda Papers",
  description: "Strategic analysis of operational technology cybersecurity vulnerabilities across military installations, examining nation-state threats, the air gap myth, and defense strategies for ICS/SCADA systems.",
  openGraph: {
    title: "OT Cybersecurity Vulnerabilities in Military Critical Infrastructure",
    description: "JPanda Papers: 4,800 U.S. military installations dependent on civilian OT infrastructure. Nation-state actors pre-positioned for conflict-phase disruption. The air gap is a myth.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "OT Cybersecurity in Military Infrastructure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OT Cybersecurity — Military Infrastructure Vulnerabilities",
    images: ["/images/brothers.jpg"],
  },
}

export default function OtCybersecurityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <OtCybersecurityContent />
      <JucheFooter />
    </main>
  )
}
