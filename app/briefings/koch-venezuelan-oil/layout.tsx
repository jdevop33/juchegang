import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Koch Industries and Venezuelan Oil",
  description:
    "Uncovering the complex web of economic interests, political tensions, and strategic dependencies. The $409 million FertiNitro dispute and refinery infrastructure built for Venezuelan crude.",
  alternates: {
    canonical: "/briefings/koch-venezuelan-oil",
    languages: {
      en: "/briefings/koch-venezuelan-oil",
      "ko-KR": "/briefings/koch-venezuelan-oil",
      "ko-KP": "/briefings/koch-venezuelan-oil",
    },
  },
  openGraph: {
    type: "article",
    title: "Koch Industries and Venezuelan Oil — Juche GanG",
    description:
      "Refineries built for Venezuelan heavy crude, a $409M ICSID award, and decades of political leverage.",
    url: "https://juche.org/briefings/koch-venezuelan-oil",
    siteName: "Juche GanG",
    images: [
      {
        url: "/images/heros/0sunsetpaektu3.jpg",
        width: 1200,
        height: 630,
        alt: "Koch Industries and Venezuelan Oil — briefing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koch Industries and Venezuelan Oil — Juche GanG",
    description:
      "Refineries built for Venezuelan heavy crude, a $409M ICSID award, and decades of political leverage.",
    images: ["/images/heros/0sunsetpaektu3.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
