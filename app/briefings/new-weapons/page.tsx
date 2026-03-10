import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import NewWeaponsContent from "./new-weapons-content"

export const metadata = {
  title: "The New Weapons — A Plain-Language Guide to Defense Energy & Materials",
  description: "What's changed in military technology since 2003: nuclear materials, advanced explosives, and energy systems powering the next generation of defense.",
  openGraph: {
    title: "The New Weapons — Defense Energy & Materials Guide",
    description: "From 50-year diamond batteries to truck-mounted lasers. A J Panda Research guide to the materials revolution reshaping modern warfare.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "The New Weapons - Defense Energy & Materials" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The New Weapons — Defense Energy & Materials",
    images: ["/images/brothers.jpg"],
  },
}

export default function NewWeaponsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <NewWeaponsContent />
      <JucheFooter />
    </main>
  )
}
