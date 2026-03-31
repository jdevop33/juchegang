"use client"

import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { CivilizationTimeline } from "@/components/civilization-timeline"

export default function CivilizationsPage() {
  return (
    <>
      <JucheHeader />
      <main className="pt-20">
        <CivilizationTimeline />
      </main>
      <JucheFooter />
    </>
  )
}
