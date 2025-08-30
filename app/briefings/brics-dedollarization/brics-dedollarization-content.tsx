"use client"

import { useLanguage } from "@/contexts/language-context"
import { BriefingSignature } from "@/components/briefing-signature"

export default function BRICSDedollarizationContent() {
  const { t } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-4xl">
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('bricsTitle')}</h1>
        <p className="text-muted-foreground mt-2">{t('bricsSubtitle')}</p>
      </header>

      <div dangerouslySetInnerHTML={{ __html: t('bricsIntro') }} />

      <section>
        <h2>BRICS currency architecture evolves beyond unified currency concept</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsCurrencyArchitecture') }} />
      </section>

      <section>
        <h2>Quantified de-dollarization reveals sectoral concentration</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsQuantifiedDedollarization') }} />
      </section>

      <section>
        <h2>Federal Reserve confronts unprecedented monetary policy constraints</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsFederalReserveConstraints') }} />
      </section>

      <section>
        <h2>US financial intelligence capabilities face systematic degradation</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsFinancialIntelligence') }} />
      </section>

      <section>
        <h2>Alternative payment infrastructure achieves operational scale</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsPaymentInfrastructure') }} />
      </section>

      <section>
        <h2>US fiscal sustainability requires $400-600 billion annual adjustment</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsFiscalSustainability') }} />
      </section>

      <section>
        <h2>Reserve diversification accelerates despite dollar resilience</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsReserveDiversification') }} />
      </section>

      <section>
        <h2>Conclusion</h2>
        <div dangerouslySetInnerHTML={{ __html: t('bricsConclusion') }} />
      </section>

      <h3>Sources (initial)</h3>
      <ul>
        <li><a href="https://www.swift.com/about-us/swift-fin-traffic-figures" target="_blank" rel="noopener noreferrer">SWIFT - Financial Traffic and Figures</a></li>
        <li><a href="https://www.atlanticcouncil.org/" target="_blank" rel="noopener noreferrer">Atlantic Council - BRICS Analysis</a></li>
        <li><a href="https://www.bis.org/" target="_blank" rel="noopener noreferrer">Bank for International Settlements</a></li>
        <li><a href="https://www.imf.org/en/Publications/COFER" target="_blank" rel="noopener noreferrer">IMF COFER Data</a></li>
        <li><a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer">Federal Reserve Economic Data</a></li>
      </ul>
      <footer className="not-prose mt-6 text-sm text-muted-foreground">Send preferred citations to expand this bibliography with direct references.</footer>
      
      <BriefingSignature />
    </article>
  )
}