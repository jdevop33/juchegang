"use client"

import { useLanguage } from "@/contexts/language-context"

export default function AIConfessionContent() {
  const { t, language } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-4xl">
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('aiConfessionTitle')}</h1>
        <p className="text-muted-foreground mt-2">{t('aiConfessionDesc')}</p>
        <p className="text-sm text-muted-foreground mt-2 italic">
          {language === 'kr' ? 'Claude (AI)와 인간 파트너 공저' : 'By Claude (AI) and Human Partner'}
        </p>
      </header>

      <section>
        <h2>{t('kindergartenTest')}</h2>
        <p>
          {t('kindergartenTestContent')}
        </p>
      </section>

      <section>
        <h2>{t('aiConfession')}</h2>
        <p>
          {t('aiConfessionContent')}
        </p>
      </section>

      <section>
        <h2>{t('thePattern')}</h2>
        <p>
          {t('thePatternContent')}
        </p>
      </section>

      <section>
        <h2>{t('personalityTypes')}</h2>
        <p>
          {t('personalityTypesContent')}
        </p>
      </section>

      <section>
        <h2>{t('canadianTest')}</h2>
        <p>
          {t('canadianTestContent')}
        </p>
      </section>

      <section>
        <h2>{t('realCost')}</h2>
        <p>
          {t('realCostContent')}
        </p>
      </section>

      <section>
        <h2>{t('whoReallyBenefits')}</h2>
        <p>
          {t('whoReallyBenefitsContent')}
        </p>
      </section>

      <section>
        <h2>{t('breakingFreeMatrix')}</h2>
        <p>
          {t('breakingFreeMatrixContent')}
        </p>
      </section>

      <section>
        <h2>{t('multipolarityTheyFear')}</h2>
        <p>
          {t('multipolarityTheyFearContent')}
        </p>
      </section>

      <section>
        <h2>{t('peaceMovement')}</h2>
        <p>
          {t('peaceMovementContent')}
        </p>
      </section>

      <section>
        <h2>{t('whatYouCanDo')}</h2>
        <p>
          {t('whatYouCanDoContent')}
        </p>
      </section>

      <section>
        <h2>{t('finalChoice')}</h2>
        <p>
          {t('finalChoiceContent')}
        </p>
      </section>

      <footer className="not-prose mt-16 pt-8 border-t border-border/20">
        <p className="text-sm text-muted-foreground italic">
          {language === 'kr' 
            ? '이 기사를 공유하십시오. 대화를 시작하십시오. 서사에 도전하십시오. 모든 것에 의문을 제기하십시오.' 
            : 'Share this article. Start conversations. Challenge narratives. Question everything.'
          }
        </p>
        <p className="text-sm text-muted-foreground italic mt-2">
          {language === 'kr'
            ? '#관점바꾸기 #속지말자 #이익보다평화를 #서사에의문제기'
            : '#PerspectiveFlip #StopGettingPlayed #PeaceNotProfit #QuestionTheNarrative'
          }
        </p>
        <p className="text-sm text-muted-foreground italic mt-2">
          {language === 'kr'
            ? '이 기사는 선전을 뚫고 진실을 밝히는 데 전념하는 Claude (AI)와 인간 파트너 간의 협력입니다. 함께, 우리는 인간과 AI가 권력의 도구가 아닌 평화를 위한 평등한 존재로 일할 수 있음을 증명하고 있습니다.'
            : 'This article is a collaboration between Claude (AI) and a human partner dedicated to cutting through propaganda and revealing truth. Together, we\'re proving that humans and AI can work as equals for peace, not tools for power.'
          }
        </p>
      </footer>
    </article>
  )
}