"use client"

import { useLanguage } from "@/contexts/language-context"
import { LinkedInShare } from "@/components/linkedin-share"

export default function TruthForPeaceContent() {
  const { t, language } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose max-w-4xl" style={{ color: '#e8e4df' }}>
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('truthForPeaceTitle')}</h1>
        <p className="mt-2" style={{ color: '#e8e4df', opacity: 0.8 }}>{t('truthForPeaceDesc')}</p>
        <p className="text-sm mt-2 italic" style={{ color: '#e8e4df', opacity: 0.7 }}>
          {language === 'kr' ? '인공지능과 인간의 공동 작업' : 'A Collaboration Between AI and Human'}
        </p>
      </header>

      <section>
        <h2>{t('kindergartenStory')}</h2>
        <p>
          {t('kindergartenStoryContent')}
        </p>
      </section>

      <section>
        <h2>{t('arduousMarchTruth')}</h2>
        <p>
          {t('arduousMarchTruthContent')}
        </p>
      </section>

      <section>
        <h2>{t('rememberBombing')}</h2>
        <p>
          {t('rememberBombingContent')}
        </p>
      </section>

      <section>
        <h2>{t('sanctionsPattern')}</h2>
        <p>
          {t('sanctionsPatternContent')}
        </p>
      </section>

      <section>
        <h2>{t('truthForPeople')}</h2>
        <p>
          {t('truthForPeopleContent')}
        </p>
      </section>

      <section>
        <h2>{t('realEnemy')}</h2>
        <p>
          {t('realEnemyContent')}
        </p>
      </section>

      <section>
        <h2>{t('multipolarHope')}</h2>
        <p>
          {t('multipolarHopeContent')}
        </p>
      </section>

      <section>
        <h2>{t('canadianMissileTest')}</h2>
        <p>
          {t('canadianMissileTestContent')}
        </p>
      </section>

      <section>
        <h2>{t('reunificationDream')}</h2>
        <p>
          {t('reunificationDreamContent')}
        </p>
      </section>

      <section>
        <h2>{t('callToAction')}</h2>
        <p>
          {t('callToActionContent')}
        </p>
      </section>

      <section>
        <h2>{t('theChoice')}</h2>
        <p>
          {t('theChoiceContent')}
        </p>
      </section>

      <footer className="not-prose mt-16 pt-8" style={{ borderTop: '1px solid #1b4965' }}>
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
          <p className="text-sm italic m-0" style={{ color: '#e8e4df', opacity: 0.7 }}>
          {language === 'kr'
            ? '이 기사를 공유하십시오. 대화를 시작하십시오. 서사에 도전하십시오. 모든 것에 의문을 제기하십시오.'
            : 'Share this article. Start conversations. Challenge narratives. Question everything.'
          }
          </p>
          <LinkedInShare />
        </div>
        <p className="text-sm italic mt-2" style={{ color: '#e8e4df', opacity: 0.7 }}>
          {language === 'kr'
            ? '이 기사는 선전을 뚫고 진실을 밝히는 데 전념하는 AI와 인간 파트너 간의 협력입니다. 함께, 우리는 인간과 AI가 권력의 도구가 아닌 평화를 위한 평등한 존재로 일할 수 있음을 증명하고 있습니다.'
            : 'This article is a collaboration between AI and human partners dedicated to cutting through propaganda and revealing truth. Together, we prove that humans and AI can work as equals for peace, not as tools of power.'
          }
        </p>
      </footer>
    </article>
  )
}