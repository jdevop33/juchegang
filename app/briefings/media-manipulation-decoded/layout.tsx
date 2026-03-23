import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media Manipulation Decoded — Juche GanG",
  description: "How six corporations control 90% of what you see, think, and believe. The psychological weapons of mass distraction exposed.",
  openGraph: {
    title: "Media Manipulation Decoded — Juche GanG",
    description: "How six corporations control 90% of what you see, think, and believe.",
    images: [{ url: "/images/heros/0sunsetpaektu3.jpg", width: 700, height: 285, alt: "Media Manipulation Decoded" }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
