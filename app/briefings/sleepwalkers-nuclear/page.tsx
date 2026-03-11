import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import SleepwalkersContent from "./sleepwalkers-content"

export const metadata = {
  title: "Sleepwalkers With Nuclear Weapons — Groupthink, Conformity & The Dunning-Kruger Apocalypse",
  description: "How cognitive biases, groupthink, and institutional conformity in nuclear-armed governments create existential risk. A White Tiger Publications analysis.",
  openGraph: {
    title: "Sleepwalkers With Nuclear Weapons",
    description: "How groupthink, conformity, obedience to authority, and civilizational Dunning-Kruger are steering nuclear-armed powers toward catastrophe. Peer-reviewed social science meets geopolitical reality.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Sleepwalkers With Nuclear Weapons" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleepwalkers With Nuclear Weapons",
    images: ["/images/brothers.jpg"],
  },
}

export default function SleepwalkersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <SleepwalkersContent />
      <JucheFooter />
    </main>
  )
}
