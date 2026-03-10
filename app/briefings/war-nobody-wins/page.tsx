import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import WarNobodyWinsContent from "./war-nobody-wins-content"

export const metadata = {
  title: "The War Nobody Wins — A Behavioral Analysis of a Hypothetical World War 3",
  description: "JPanda Papers behavioral analysis examining the psychology, industrial capacity, and strategic calculus driving the world toward a hypothetical WW3 — and why nobody wins.",
  openGraph: {
    title: "The War Nobody Wins — A Behavioral Analysis of a Hypothetical World War 3",
    description: "Open-source intelligence briefing on the behavioral dynamics, industrial asymmetries, and geopolitical fault lines that could trigger a global conflict.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "The War Nobody Wins - JPanda Papers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The War Nobody Wins — JPanda Papers",
    images: ["/images/brothers.jpg"],
  },
}

export default function WarNobodyWinsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <WarNobodyWinsContent />
      <JucheFooter />
    </main>
  )
}
