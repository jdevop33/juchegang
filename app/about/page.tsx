import type { Metadata } from "next"
import { AboutClient } from "./about-client"

export const metadata: Metadata = {
  title: "About | 주체강 — Subjective River",
  description:
    "JucheGang was born as a movement — independent thinkers building bridges across cultures. In Korean, 주체강 means Subjective River. Navigate the Current.",
  openGraph: {
    title: "About | 주체강 — Subjective River",
    description:
      "JucheGang was born as a movement — independent thinkers building bridges across cultures. In Korean, 주체강 means Subjective River.",
  },
}

export default function AboutPage() {
  return <AboutClient />
}
