"use client"

import { useLanguage } from "@/contexts/language-context"
import { LinkedInShare } from "@/components/linkedin-share"

export default function UkraineDeceptionContent() {
  const { t } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-4xl">
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('ukraineDeceptionTitle')}</h1>
        <p className="text-muted-foreground mt-2">{t('ukraineDeceptionDesc')}</p>
      </header>

      <section>
        <h2>{t('strategicChessboard')}</h2>
        <p>
          {t('strategicChessboardContent')}
        </p>
      </section>

      <section>
        <h2>{t('canadianAnalogy')}</h2>
        <p>
          {t('canadianAnalogyContent')}
        </p>
      </section>

      <section>
        <h2>{t('peaceSabotaged')}</h2>
        <p>
          {t('peaceSabotagedContent')}
        </p>
      </section>

      <section>
        <h2>{t('johnsonMission')}</h2>
        <p>
          {t('johnsonMissionContent')}
        </p>
      </section>

      <section>
        <h2>{t('grahamConfession')}</h2>
        <p>
          {t('grahamConfessionContent')}
        </p>
      </section>

      <section>
        <h2>{t('billionTheft')}</h2>
        <p>
          {t('billionTheftContent')}
        </p>
      </section>

      <section>
        <h2>{t('mediaComplicity')}</h2>
        <p>
          {t('mediaComplicityContent')}
        </p>
      </section>

      <section>
        <h2>{t('militaryReality')}</h2>
        <p>
          {t('militaryRealityContent')}
        </p>
      </section>

      <section>
        <h2>{t('randPlaybook')}</h2>
        <p>
          {t('randPlaybookContent')}
        </p>
      </section>

      <section>
        <h2>{t('europeanVassalization')}</h2>
        <p>
          {t('europeanVassalizationContent')}
        </p>
      </section>

      <section>
        <h2>{t('endgame')}</h2>
        <p>
          {t('endgameContent')}
        </p>
      </section>

      <section>
        <h2>{t('breakingMatrix')}</h2>
        <p>
          {t('breakingMatrixContent')}
        </p>
      </section>

      <footer className="not-prose mt-12 text-sm text-muted-foreground">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-muted-foreground">{t('briefingNote')}</p>
          <LinkedInShare />
        </div>
      </footer>
    </article>
  )
}