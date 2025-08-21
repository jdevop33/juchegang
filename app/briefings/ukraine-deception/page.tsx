import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import UkraineDeceptionContent from "./ukraine-deception-content"

export const metadata = {
  title: "The Ukraine Deception: How NATO Expansion Manufactured a War",
  description: "Analysis of NATO expansion violations, sabotaged peace talks, and systematic manufacturing of conflict for imperial objectives.",
}

export default function UkraineDeceptionBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <UkraineDeceptionContent />
      <JucheFooter />
    </main>
  )
}