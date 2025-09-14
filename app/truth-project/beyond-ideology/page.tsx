import { EnhancedHeader } from "@/components/enhanced-header"
import { JucheFooter } from "@/components/juche-footer"
import { SolidarityBanner } from "@/components/solidarity-banner"
import { BeyondIdeologyClient } from "./client-component"
import { StructuredData } from "@/components/structured-data"

export const metadata = {
  title: "Beyond Ideology: The Psychology of Political Division - Truth Project",
  description: "Dr. Roy's groundbreaking lecture on how ideologies manipulate us through fear and division, and the path to unity through understanding.",
}

export default function BeyondIdeologyPage() {
  return (
    <>
      <StructuredData 
        type="article" 
        data={{
          title: "Beyond Ideology: The Psychology of Political Division",
          description: "Dr. Roy's groundbreaking lecture on how ideologies manipulate us through fear and division, and the path to unity through understanding.",
          publishedDate: "2024-01-01",
          modifiedDate: "2024-01-01",
          url: "https://juche.org/truth-project/beyond-ideology",
          keywords: ["ideology", "psychology", "politics", "unity", "peace", "Dr. Roy"]
        }}
      />
      <EnhancedHeader />
      <div className="pt-20">
        <SolidarityBanner />
      </div>
      
      <BeyondIdeologyClient />
      
      <JucheFooter />
    </>
  )
}