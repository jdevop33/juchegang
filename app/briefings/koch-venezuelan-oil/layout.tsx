import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Koch Industries and Venezuelan Oil — Juche GanG",
  description: "Uncovering the complex web of economic interests, political tensions, and strategic dependencies. The $409 million dispute and refinery infrastructure built for Venezuelan crude.",
  openGraph: {
    title: "Koch Industries and Venezuelan Oil — Juche GanG",
    description: "Uncovering the complex web of economic interests, political tensions, and strategic dependencies.",
    images: [{ url: "/images/heros/0sunsetpaektu3.jpg", width: 700, height: 285, alt: "Koch Industries and Venezuelan Oil" }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
