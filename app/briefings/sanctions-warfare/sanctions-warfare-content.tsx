"use client"

import { useLanguage } from "@/contexts/language-context"

export default function SanctionsWarfareContent() {
  const { t } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-4xl">
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('sanctionsWarfareTitle')}</h1>
        <p className="text-muted-foreground mt-2">{t('sanctionsWarfareDesc')}</p>
      </header>

      <section>
        <h2>{t('sanctionsIntroduction')}</h2>
        <p>
          {t('sanctionsIntroductionContent')}
        </p>
      </section>

      <section>
        <h2>{t('cubaEmbargo')}</h2>
        <p>
          {t('cubaEmbargoContent')}
        </p>
      </section>

      <section>
        <h2>{t('northKoreaSanctions')}</h2>
        <p>
          {t('northKoreaSanctionsContent')}
        </p>
      </section>

      <section>
        <h2>{t('venezuelaCrisis')}</h2>
        <p>
          {t('venezuelaCrisisContent')}
        </p>
      </section>

      <section>
        <h2>{t('iraqChildMortality')}</h2>
        <p>
          {t('iraqChildMortalityContent')}
        </p>
      </section>

      <section>
        <h2>{t('syriaIranMedical')}</h2>
        <p>
          {t('syriaIranMedicalContent')}
        </p>
      </section>

      <section>
        <h2>{t('deliberateStarvation')}</h2>
        <p>
          {t('deliberateStarvationContent')}
        </p>
      </section>

      <section>
        <h2>{t('academicConsensus')}</h2>
        <p>
          {t('academicConsensusContent')}
        </p>
      </section>

      <section>
        <h2>{t('sanctionsConclusion')}</h2>
        <p>
          {t('sanctionsConclusionContent')}
        </p>
      </section>
    </article>
  )
}