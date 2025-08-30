"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function BriefingsContent() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 pt-28 pb-16">
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
          📚 Briefings
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Notes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Curated summaries with sources, quotes, and primary documents.</p>
      </header>

      <ul className="max-w-3xl mx-auto space-y-6">
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/nato-expansion" className="hover:underline">
              NATO Expansion and Russia–US Relations: Primary Sources and Historical Facts
            </Link>
          </h2>
          <p className="text-muted-foreground">Putin's 2007 Munich speech, declassified assurances, expansion waves, crisis precedents, and U.S. policy doctrine.</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/north-korea-deception" className="hover:underline">
              The North Korea Deception: How Manufactured Threats Fund the Imperial War Machine
            </Link>
          </h2>
          <p className="text-muted-foreground">Media pipelines, defector incentives, cyber ambiguity, and frozen-conflict capitalism sustaining U.S. posture in East Asia.</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ukraine-deception" className="hover:underline">
              {t('ukraineDeceptionTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('ukraineDeceptionDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/sanctions-warfare" className="hover:underline">
              {t('sanctionsWarfareTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('sanctionsWarfareDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/false-flag-cyber-operations" className="hover:underline">
              False Flag Cyber Operations and North Korean APT Mimicry
            </Link>
          </h2>
          <p className="text-muted-foreground">Technical, strategic, and operational analysis of false flag cyber operations and DPRK APT impersonation patterns.</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/apt-down-files" className="hover:underline">
              The APT Down Files: Inside the breach of a nation-state hacker
            </Link>
          </h2>
          <p className="text-muted-foreground">Inside the 9GB leak revealed at DEF CON 2025: tools, ops data, attribution puzzles, and defensive takeaways.</p>
        </li>
      </ul>
    </section>
  )
}