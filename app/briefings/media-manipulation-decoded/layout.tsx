import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media Manipulation Decoded",
  description:
    "How six corporations control 90% of what you see, think, and believe. The psychological weapons of mass distraction exposed.",
  alternates: {
    canonical: "/briefings/media-manipulation-decoded",
    languages: {
      en: "/briefings/media-manipulation-decoded",
      "ko-KR": "/briefings/media-manipulation-decoded",
      "ko-KP": "/briefings/media-manipulation-decoded",
    },
  },
  openGraph: {
    type: "article",
    title: "Media Manipulation Decoded — Juche GanG",
    description:
      "How six corporations control 90% of what you see, think, and believe.",
    url: "https://juche.org/briefings/media-manipulation-decoded",
    siteName: "Juche GanG",
    images: [
      {
        url: "/images/heros/0sunsetpaektu3.jpg",
        width: 1200,
        height: 630,
        alt: "Media Manipulation Decoded — briefing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Manipulation Decoded — Juche GanG",
    description:
      "How six corporations control 90% of what you see, think, and believe.",
    images: ["/images/heros/0sunsetpaektu3.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
