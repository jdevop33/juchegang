"use client"

import { useLanguage } from "@/contexts/language-context"
import { LinkedInShare } from "@/components/linkedin-share"

export default function NorthKoreaDeceptionContent() {
  const { t } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-3xl">
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('northKoreaTitle')}</h1>
        <p className="text-muted-foreground mt-2">{t('northKoreaSubtitle')}</p>
      </header>

      <div dangerouslySetInnerHTML={{ __html: t('northKoreaIntro') }} />

      <h2>The Media Manufacturing Machine</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaMediaMachine') }} />

      <h2>The Defector Industrial Complex</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaDefectorComplex') }} />

      <h2>The Frozen Conflict Cash Cow</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaFrozenConflict') }} />

      <h2>The Double Standard of Human Rights</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaDoubleStandard') }} />

      <h2>The Cyber False Flag Ecosystem</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaCyberFalseFlag') }} />

      <h2>The Imperial Threat Inflation Machine</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaThreatInflation') }} />

      <h2>Information Warfare in the Digital Age</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaInfoWarfare') }} />

      <h2>The Real Stakes Behind the Propaganda</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaRealStakes') }} />

      <h2>The Ukrainian Blueprint Goes Global</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaUkrainianBlueprint') }} />

      <h2>Beyond the Propaganda Matrix</h2>
      <div dangerouslySetInnerHTML={{ __html: t('northKoreaBeyondMatrix') }} />

      <h3>Sources (initial)</h3>
      <ul>
        <li><a href="https://www.ned.org/about/history/" target="_blank" rel="noopener noreferrer">National Endowment for Democracy – History</a></li>
        <li><a href="https://www.rfa.org/about" target="_blank" rel="noopener noreferrer">Radio Free Asia – About</a></li>
        <li><a href="https://wikileaks.org/ciav7p1/" target="_blank" rel="noopener noreferrer">Wikileaks – Vault 7 (CIA)</a></li>
        <li><a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer">MITRE ATT&CK Framework</a></li>
      </ul>

      <footer className="not-prose mt-6 text-sm text-muted-foreground">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span>Send preferred citations and I'll expand this bibliography with direct references used in each section.</span>
          <LinkedInShare />
        </div>
      </footer>
    </article>
  )
}