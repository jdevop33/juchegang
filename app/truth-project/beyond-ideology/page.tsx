import { EnhancedHeader } from "@/components/enhanced-header"
import { JucheFooter } from "@/components/juche-footer"
import { SolidarityBanner } from "@/components/solidarity-banner"
import { BeyondIdeologyClient } from "./client-component"

export const metadata = {
  title: "Beyond Ideology: The Psychology of Political Division - Truth Project",
  description: "Dr. Roy's groundbreaking lecture on how ideologies manipulate us through fear and division, and the path to unity through understanding.",
}

export default function BeyondIdeologyPage() {
  return (
    <>
      <EnhancedHeader />
      <div className="pt-20">
        <SolidarityBanner />
      </div>
      
      <BeyondIdeologyClient />
      
      <JucheFooter />
    </>
  )
}