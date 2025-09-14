import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import BriefingsContent from "./briefings-content"

export const metadata = {
  title: "Briefings",
  description: "Primary-source briefings and research notes.",
  alternates: {
    canonical: "/briefings",
    languages: {
      "en": "/briefings",
      "ko-KR": "/briefings",
      "ko-KP": "/briefings",
    },
  },
}

export default function BriefingsIndexPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <BriefingsContent />
      <JucheFooter />
    </main>
  )
}


