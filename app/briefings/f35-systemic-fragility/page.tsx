import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import F35SystemicFragilityContent from "./f35-systemic-fragility-content"

export const metadata = {
  title: "Systemic Fragility and Strategic Necessity — F-35 Lightning II Assessment",
  description: "Comprehensive life-cycle assessment of the F-35 Lightning II program and Western defense industrial capacity in an era of great power competition.",
  openGraph: {
    title: "Systemic Fragility and Strategic Necessity — F-35 Lightning II Assessment",
    description: "JPanda James Strategic Papers: $2T+ lifecycle cost, 50% fleet availability, 232:1 China-US shipbuilding ratio, and the closing window of Western air superiority.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "F-35 Systemic Fragility Assessment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systemic Fragility — F-35 Assessment",
    images: ["/images/brothers.jpg"],
  },
}

export default function F35SystemicFragilityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <F35SystemicFragilityContent />
      <JucheFooter />
    </main>
  )
}
