"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function BriefingsContent() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 pt-28 pb-16">
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
          📚 {t('briefings')}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('briefingsTitle')}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t('briefingsSubtitle')}</p>
      </header>

      <ul className="max-w-3xl mx-auto space-y-6">
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/iran-snapback" className="hover:underline">
              {t('iranSnapbackTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('iranSnapbackDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/nato-expansion" className="hover:underline">
              {t('natoExpansionTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('natoExpansionDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/north-korea-deception" className="hover:underline">
              {t('northKoreaDeceptionTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('northKoreaDeceptionDesc')}</p>
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
            <Link href="/briefings/truth-for-peace" className="hover:underline">
              {t('truthForPeaceTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('truthForPeaceDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ai-confession" className="hover:underline">
              {t('aiConfessionTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('aiConfessionDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/false-flag-cyber-operations" className="hover:underline">
              {t('falseFlagOpsTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('falseFlagOpsDesc')}</p>
        </li>
        <li className="rounded-xl border border-border/60 p-6 bg-muted/20 hover:bg-muted/30 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/apt-down-files" className="hover:underline">
              {t('aptDownFilesTitle')}
            </Link>
          </h2>
          <p className="text-muted-foreground">{t('aptDownFilesDesc')}</p>
        </li>
      </ul>
    </section>
  )
}