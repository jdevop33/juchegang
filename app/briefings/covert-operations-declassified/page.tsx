import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { BriefingBanner } from "@/components/briefing-banner"
import CovertOperationsContent from "./covert-operations-content"

export const metadata = {
  title: "Declassified: US Covert Operations and Their Human Cost",
  description:
    "Documented US covert operations that resulted in civilian casualties, based on declassified documents, congressional investigations, and credible historical sources.",
  openGraph: {
    title: "Declassified: US Covert Operations and Their Human Cost",
    description:
      "Documented evidence of covert operations and their human cost, from declassified files and congressional investigations.",
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
    title: "Declassified: US Covert Operations and Their Human Cost",
    images: ["/images/brothers.jpg"],
  },
}

export default function CovertOperationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingBanner src="/images/coolgang2.png" alt="Declassified documents" aspect="12/5" contain overlay="bottom" />
      <CovertOperationsContent />
      <JucheFooter />
    </main>
  )
}