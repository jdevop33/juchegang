import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import FalseFlagContent from "./false-flag-content"

export const metadata = {
  title: "False Flag Cyber Operations and North Korean APT Mimicry",
  description:
    "Technical, strategic, and operational analysis of false flag cyber operations and DPRK APT impersonation patterns.",
  openGraph: {
    title: "False Flag Cyber Operations and North Korean APT Mimicry",
    description:
      "Technical, strategic, and operational analysis of false flag cyber operations and DPRK APT impersonation patterns.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "Juche briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "False Flag Cyber Operations and North Korean APT Mimicry",
    images: ["/images/brothers.jpg"],
  },
}

export default function FalseFlagCyberOperationsBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <FalseFlagContent />
      <JucheFooter />
    </main>
  )
}