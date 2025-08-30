import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import IranSnapbackContent from "./iran-snapback-content"
import "./styles.css"

export const metadata = {
  title: "Europe's Last Stand: The Iran Sanctions Showdown",
  description: "How Europe's desperate attempt to enforce Iran sanctions exposes the collapse of Western financial power and the rise of a new world order.",
  openGraph: {
    title: "Europe's Last Stand: The Iran Sanctions Showdown",
    description:
      "How Europe's desperate attempt to enforce Iran sanctions exposes the collapse of Western financial power and the rise of a new world order.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Europe's Last Stand: The Iran Sanctions Showdown",
    images: ["/images/brothers.jpg"],
  },
}

export default function IranSnapbackBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <IranSnapbackContent />
      <JucheFooter />
    </main>
  )
}