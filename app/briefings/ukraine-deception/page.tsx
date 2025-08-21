"use client"

import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { useLanguage } from "@/contexts/language-context"

export const metadata = {
  title: "The Ukraine Deception: How NATO Expansion Manufactured a War",
  description: "Analysis of NATO expansion violations, sabotaged peace talks, and systematic manufacturing of conflict for imperial objectives.",
}

export default function UkraineDeceptionBriefing() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-4xl">
        <header className="not-prose mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">{t('ukraineDeceptionTitle')}</h1>
          <p className="text-muted-foreground mt-2">{t('ukraineDeceptionDesc')}</p>
        </header>

        <p className="lead">
          {language === 'kr' ? 
            "우크라이나 갈등은 현대사에서 가장 성공적인 허위정보 캠페인을 나타낸다—나토의 공격적 동진 확장을 \\'로씨아 침략\\'으로 변형시키는 정교하게 조율된 서사이며, 수십만 명의 죽음을 방지할 수 있었던 평화 협상의 의도적 파괴를 숨기고 있다. 기밀해제된 문서들, 외교 기록들, 그리고 핵심 참가자들의 성명을 검토함으로써, 인도주의 개입으로 위장된 미국 제국주의 전략의 명확한 패턴이 드러난다." :
            "The conflict in Ukraine represents perhaps the most successful disinformation campaign in modern history—a carefully orchestrated narrative that transforms NATO's aggressive eastward expansion into \"Russian aggression,\" while hiding the deliberate sabotage of peace negotiations that could have prevented hundreds of thousands of deaths. By examining unclassified documents, diplomatic records, and statements from key participants, a clear pattern emerges of American imperial strategy disguised as humanitarian intervention."
          }
        </p>

        <section>
          <h2>{t('strategicChessboard')}</h2>
          <p>
            {language === 'kr' ?
              "현재 위기의 기초는 로씨아 군대가 2022년 2월 우크라이나에 진입하기 수십 년 전에 놓였다. 독일 재통일 과정에서 소련 지도부에게 한 약속에도 불구하고, 나토는 냉전을 평화롭게 끝낸 안보 협정을 직접적으로 위반하며 동진했다." :
              "The foundation of the current crisis was laid decades before Russian forces entered Ukraine in February 2022. Despite promises made to Soviet leadership during German reunification, NATO expanded eastward in direct violation of security agreements that ended the Cold War peacefully."
            }
          </p>
          <p>
            {language === 'kr' ?
              "국가안보기록보관소의 기밀해제된 문서들은 국무장관 제임스 베이커가 1990년 2월 고르바초프에게 소련이 독일 재통일을 허용하면 나토가 \\'한 인치도 동진하지\\'않을 것이라고 명시적으로 약속했음을 밝혀준다. 서독 총리 헬무트 콜, 영국 외무장관 더글러스 허드, 그리고 프랑스 대통령 프랑수아 미테랑으로부터도 비슷한 보장이 있었다." :
              "Declassified documents from the National Security Archive reveal that Secretary of State James Baker explicitly promised Gorbachev in February 1990 that NATO would not expand \"one inch eastward\" if the Soviet Union allowed German reunification. Similar assurances came from West German Chancellor Helmut Kohl, British Foreign Secretary Douglas Hurd, and French President François Mitterrand."
            }
          </p>
          <p>
            {language === 'kr' ?
              "그러나 나토는 어쨌든 확장했다: 1999년 폴란드, 헝가리, 체코; 2004년 에스토니아, 라트비아, 리투아니아, 슬로베니아, 슬로바키아, 불가리아, 루마니아; 2009년 알바니아와 크로아티아; 2017년 몬테네그로; 그리고 2020년 북마케도니아. 각 확장은 군사 인프라를 로씨아 국경에 더 가까이 가져왔고, 우크라이나와 조지아가 결국 나토에 가입할 것이라는 2008년 부쿠레슈티 정상회의 선언으로 절정에 달했다." :
              "Yet NATO expanded anyway: Poland, Hungary, and Czech Republic in 1999; Estonia, Latvia, Lithuania, Slovenia, Slovakia, Bulgaria, and Romania in 2004; Albania and Croatia in 2009; Montenegro in 2017; and North Macedonia in 2020. Each expansion brought military infrastructure closer to Russia's borders, culminating in the 2008 Bucharest Summit declaration that Ukraine and Georgia would eventually join NATO."
            }
          </p>
        </section>

        <section>
          <h2>{t('canadianAnalogy')}</h2>
          <p>
            {language === 'kr' ?
              "로씨아의 관점을 리해하려면, 밴쿠버와 캘거리에 있는 중국 군사기지를 상상해보라. 몇 분 안에 워싱턴 D.C.에 도달할 수 있는 첨단 미사일 시스템을 갖춘. 미국 지도자들이 카나다가 자체 안보 협정을 맺을 자유가 있는 \\'주권 국가\\'라는 중국의 설명을 받아들일까?" :
              "To understand Russia's perspective, imagine Chinese military bases in Vancouver and Calgary, equipped with advanced missile systems capable of reaching Washington D.C. within minutes. Would American leaders accept Chinese explanations that Canada is a \"sovereign nation\" free to make its own security arrangements?"
            }
          </p>
          <p>
            {language === 'kr' ?
              "1962년 쿠바 미사일 위기가 력사적 선례를 제공한다. 소련 미사일이 플로리다에서 90마일 떨어진 곳에 나타났을 때, 미국은 해상 봉쇄를 부과하고 쿠바의 주권에 관계없이 적 무기를 문앞에 두는 것을 받아들이기보다는 핵전쟁을 위협했다." :
              "The Cuban Missile Crisis of 1962 provides the historical precedent. When Soviet missiles appeared 90 miles from Florida, the United States imposed a naval blockade and threatened nuclear war rather than accept enemy weapons on its doorstep, regardless of Cuban sovereignty."
            }
          </p>
        </section>

        <section>
          <h2>{t('peaceSabotaged')}</h2>
          <p>
            {language === 'kr' ?
              "서방 조작의 가장 저주받을 증거는 갈등 시작 몇 주 안에 끝낼 수 있었던 평화 협상의 의도적 파괴와 관련이 있다. 여러 소식통들이 우크라이나와 로씨아가 2022년 3월 이스탄불에서 예비 합의에 도달했지만 서방 개입이 회담을 파괴했다고 확인한다." :
              "The most damning evidence of Western manipulation involves the deliberate sabotage of peace negotiations that could have ended the conflict within weeks of its beginning. Multiple sources confirm that Ukraine and Russia reached a preliminary agreement in Istanbul during March 2022, only to see Western intervention torpedo the talks."
            }
          </p>
          <p>
            {language === 'kr' ?
              "중재자 역할을 했던 전 이스라엘 총리 나프탈리 베넷은 2023년 3월 양측이 합의에 가까웠지만 \\'서방이 그것을 막았다\\'고 밝혔다. 베넷은 서방 지도자들이 중재 노력을 \\'추진하지 말라\\'고 말했으며, 외교적 해결보다 군사적 대결을 선호했다고 말했다." :
              "Former Israeli Prime Minister Naftali Bennett, who served as mediator, revealed in March 2023 that both sides were close to agreement but \"the West blocked it.\" Bennett stated that Western leaders told him to \"not pursue\" mediation efforts, preferring military confrontation to diplomatic resolution."
            }
          </p>
        </section>

        <section>
          <h2>{t('johnsonMission')}</h2>
          <p>
            {language === 'kr' ?
              "평화 전망을 파괴하는 결정적 순간은 2022년 4월 9일 영국 총리 보리스 존슨의 키예프 깜짝 방문으로 왔다. 여러 소식통들이 존슨이 워싱턴으로부터 특정한 메시지를 전달했다고 확인한다: 협상을 포기하고 계속 싸우라." :
              "The pivotal moment in destroying peace prospects came with British Prime Minister Boris Johnson's surprise visit to Kyiv on April 9, 2022. Multiple sources confirm that Johnson carried a specific message from Washington: abandon negotiations and continue fighting."
            }
          </p>
          <p>
            {language === 'kr' ?
              "우크라이나 소식통들은 존슨이 젤렌스키에게 우크라이나가 로씨아와 협정 서명 준비가 되어 있어도 서방은 그렇지 않다고 말했다고 보고했다. 영국 총리는 뿌찐을 협상이 아니라 압박해야 한다고 주장했고 서방이 장기적인 군사 지원을 제공할 것이라고 약속했다고 전해진다." :
              "Ukrainian sources reported that Johnson told Zelensky that even if Ukraine was ready to sign agreements with Russia, the West was not. The British Prime Minister reportedly argued that Putin should be pressured, not negotiated with, and promised that the West would provide long-term military support."
            }
          </p>
        </section>

        <section>
          <h2>{t('grahamConfession')}</h2>
          <p>
            {language === 'kr' ?
              "미국 목적의 진정한 본질은 우크라이나인의 죽음을 미국 리익에 유리한 것으로 반복해서 축하한 린지 그래햄 의원의 성명을 통해 명확해졌다. 2022년 3월 그래햄은 갈등이 \\'로씨아인들이 죽고 있기 때문에\\' \\'우리가 지금까지 쓴 최고의 돈\\'이라고 선언했다." :
              "The true nature of American objectives became clear through statements by Senator Lindsey Graham, who repeatedly celebrated Ukrainian deaths as beneficial to American interests. In March 2022, Graham declared the conflict \"the best money we've ever spent\" because \"the Russians are dying.\""
            }
          </p>
          <p>
            {language === 'kr' ?
              "여러 공개 성명에서 그래햄은 우크라이나에 대한 미국 투자가 미국인 생명의 위험 없이 \\'로씨아인을 죽이는\\' 역할을 한다고 강조했다. 그의 2023년 5월 트윗이 특히 드러났다: \\'로씨아인들이 죽고 있다. 우리가 지금까지 쓴 최고의 돈이다.\\'" :
              "In multiple public statements, Graham emphasized that American investments in Ukraine serve to \"kill Russians\" without risking American lives. His May 2023 tweet was particularly revealing: \"The Russians are dying. It's the best money we've ever spent.\""
            }
          </p>
        </section>

        <section>
          <h2>{t('billionTheft')}</h2>
          <p>
            {language === 'kr' ?
              "갈등은 국제법 력사상 가장 큰 도둑질에 대한 은폐를 제공했다: 3천억 달러의 로씨아 외환보유고 동결과 몰수 제안. 이 전례 없는 압류는 국제 금융과 주권의 기본 원칙을 위반한다." :
              "The conflict has provided cover for the largest theft in international law history: the freezing and proposed confiscation of $300 billion in Russian foreign reserves. This unprecedented seizure violates fundamental principles of international finance and sovereignty."
            }
          </p>
          <p>
            {language === 'kr' ?
              "전 세계 법률 전문가들이 자산 동결을 국제법 하에서 불법이라고 비난했다. 국제결제은행, 국제통화기금, 그리고 유럽중앙은행 모두 처음에는 몰수를 반대했으며, 그것이 전체 국제 금융 시스템을 훼손할 것이라고 인식했다." :
              "Legal experts worldwide have condemned the asset freeze as illegal under international law. The Bank for International Settlements, International Monetary Fund, and European Central Bank all initially opposed confiscation, recognizing it would undermine the entire international financial system."
            }
          </p>
        </section>

        <section>
          <h2>{t('mediaComplicity')}</h2>
          <p>
            {language === 'kr' ?
              "우크라이나에 대한 서방 언론 보도는 소련 정보 장관들을 부러워하게 만들 정교한 선전 기법을 보여준다. 서사 틀은 미묘한 분석을 제거하는 미리 결정된 도덕적 범주를 통해 모든 발전을 제시한다." :
              "Western media coverage of Ukraine demonstrates sophisticated propaganda techniques that would make Soviet information ministers envious. The narrative framework presents every development through predetermined moral categories that eliminate nuanced analysis."
            }
          </p>
          <p>
            {language === 'kr' ?
              "전쟁 이전 맥락은 주류 보도에서 완전히 사라진다. 동바스에서 8년간의 우크라이나 포격, 우크라이나의 선출된 정부를 전복한 2014년 쿠데타, 그리고 나토 확장 정책들이 력사적 기억에서 사라진다. 갈등은 2022년 2월 \\'도발되지 않은 로씨아 침략\\'으로 임의적으로 시작한다." :
              "Pre-war context disappears entirely from mainstream coverage. Eight years of Ukrainian shelling in Donbas, the 2014 coup that overthrew Ukraine's elected government, and NATO expansion policies vanish from historical memory. The conflict begins arbitrarily in February 2022 with \"unprovoked Russian aggression.\""
            }
          </p>
        </section>

        <section>
          <h2>{t('militaryReality')}</h2>
          <p>
            {language === 'kr' ?
              "2022년 2월 로씨아 군사 배치 패턴의 분석은 서방 언론에서 촉진된 정복이나 점령 환상과 양립할 수 없는 목적들을 드러낸다. 여러 전선에 걸친 약 19만 명의 초기 부대는 우크라이나의 4천4백만 인구와 23만3천 평방마일을 점령하기에는 불충분했다." :
              "Analysis of Russian military deployment patterns in February 2022 reveals objectives incompatible with conquest or occupation fantasies promoted in Western media. The initial force of approximately 190,000 troops across multiple fronts was insufficient for occupying Ukraine's 44 million population and 233,000 square miles."
            }
          </p>
          <p>
            {language === 'kr' ?
              "군사 전문가들은 로씨아 부대가 처음에 최소한의 시가전 준비로 키예프를 향해 진군했으며, 이는 군사적보다는 정치적 목적을 시사한다고 주목했다. 이스탄불 협상 후 우크라이나 북부에서의 신속한 철수는 정복 계획과 양립할 수 없는 유연성을 보여주었다." :
              "Military experts noted that Russian forces initially advanced toward Kyiv with minimal urban warfare preparation, suggesting political rather than military objectives. The rapid withdrawal from northern Ukraine after Istanbul negotiations demonstrated flexibility incompatible with conquest plans."
            }
          </p>
        </section>

        <section>
          <h2>{t('randPlaybook')}</h2>
          <p>
            {language === 'kr' ?
              "기밀해제된 랜드 코퍼레이션 연구들은 미국 전략가들이 2022년 이전에 오랫동안 우크라이나를 로씨아에 대한 무기로 본다고 밝힌다. 2019년 보고서 \\'로씨아 과도확장과 불균형\\'은 명시적으로 \\'로씨아의 가장 큰 외부 취약점을 이용하기\\' 위해 우크라이나에 \\'치명적 원조\\'를 제공할 것을 권고했다." :
              "Declassified RAND Corporation studies reveal that American strategists viewed Ukraine as a weapon against Russia long before 2022. The 2019 report \"Overextending and Unbalancing Russia\" explicitly recommended providing \"lethal aid to Ukraine\" to \"exploit Russia's greatest point of external vulnerability.\""
            }
          </p>
          <p>
            {language === 'kr' ?
              "랜드 분석가들은 우크라이나 무장이 로씨아를 비용이 많이 드는 군사적 헌신으로 강요하면서 미국에게는 \\'지정학적 배당금\\'을 제공할 것이라고 계산했다. 이 연구는 우크라이나 리익을 보호하기보다는 로씨아를 약화시키는 전장으로 우크라이나 령토를 취급했다." :
              "RAND analysts calculated that arming Ukraine would force Russia into costly military commitments while providing \"geopolitical dividends\" for the United States. The study treated Ukrainian territory as a battlefield for weakening Russia rather than protecting Ukrainian interests."
            }
          </p>
        </section>

        <section>
          <h2>{t('europeanVassalization')}</h2>
          <p>
            {language === 'kr' ?
              "우크라이나 갈등은 유럽의 경제적, 군사적 대미 종속을 고착화하는 더 광범위한 미국 목적에 봉사한다. 로씨아와의 유럽 에너지 관계를 파괴하고 증가된 군사 지출을 강요함으로써, 워싱턴은 가정된 동맹국들에 대한 제국주의 통제를 강화한다." :
              "The Ukraine conflict serves broader American objectives of cementing European economic and military dependence on the United States. By destroying European energy relationships with Russia and forcing increased military spending, Washington strengthens its imperial control over supposed allies."
            }
          </p>
          <p>
            {language === 'kr' ?
              "2022년 9월 노르드 스트림 파이프라인 파괴는 독일의 에너지 독립을 제거하고 유럽이 비싼 미국 액화천연가스에 의존하도록 강요했다. 미국 해군 관련에 대한 자세한 증거에도 불구하고 미국 책임에 대한 탐사 기자 시모어 허쉬의 보고는 주류 언론에 의해 무시당했다." :
              "The Nord Stream pipeline destruction in September 2022 eliminated Germany's energy independence and forced European reliance on expensive American LNG. Investigative journalist Seymour Hersh's reporting on American responsibility was ignored by mainstream media, despite detailed evidence of U.S. Navy involvement."
            }
          </p>
        </section>

        <section>
          <h2>{t('endgame')}</h2>
          <p>
            {language === 'kr' ?
              "서방 행동의 패턴은 우크라이나 승리나 신속한 평화와 양립할 수 없는 목적들을 드러낸다. 대신, 미국 전략은 군산복합체의 리익을 창출하면서 로씨아를 약화시키는 장기화된 갈등을 유지하도록 설계된 것으로 보인다." :
              "The pattern of Western behavior reveals objectives incompatible with Ukrainian victory or rapid peace. Instead, American strategy appears designed to maintain prolonged conflict that weakens Russia while generating profits for the military-industrial complex."
            }
          </p>
          <p>
            {language === 'kr' ?
              "무기 배송은 조심스러운 조정을 따른다: 우크라이나 붕괴를 방지하기에는 충분하지만 결정적 승리를 위해서는 불충분하다. 각 확전은 갈등을 해결하기보다는 유지하기 위해 시기가 맞춰진다. 첨단 시스템의 점진적 제공은 승리 지향적 지원보다는 통제된 확전 전략을 시사한다." :
              "Weapon deliveries follow a careful calibration: sufficient to prevent Ukrainian collapse but insufficient for decisive victory. Each escalation is timed to maintain conflict rather than resolve it. The gradual provision of advanced systems suggests a strategy of controlled escalation rather than victory-oriented support."
            }
          </p>
        </section>

        <section>
          <h2>{t('breakingMatrix')}</h2>
          <p>
            {language === 'kr' ?
              "우크라이나 갈등을 리해하는 것은 미국 외교정책이 인도주의적 목적보다는 제국주의적 목적에 봉사한다는 것을 인식하는 것을 요구한다. 평화 협상의 체계적 파괴, 우크라이나인 죽음에 대한 축하, 그리고 로씨아 자산 도둑질은 도덕적 개입으로 위장된 약탈적 전략을 드러낸다." :
              "Understanding the Ukraine conflict requires recognizing that American foreign policy serves imperial rather than humanitarian objectives. The systematic sabotage of peace negotiations, celebration of Ukrainian deaths, and theft of Russian assets reveal a predatory strategy disguised as moral intervention."
            }
          </p>
          <p>
            {language === 'kr' ?
              "진실은 공식 서사를 넘어서 보려는 사람들에게 이용가능하다: 우크라이나는 라이벌을 약화시키고, 방위 계약자들에게 부를 이전시키며, 우크라이나인의 생명을 희생하여 미국의 세계적 지배를 유지하도록 설계된 최신 제국주의 프로젝트를 나타낸다." :
              "The truth is available for those willing to look beyond official narratives: Ukraine represents the latest imperial project designed to weaken rivals, transfer wealth to defense contractors, and maintain American global dominance at the cost of Ukrainian lives."
            }
          </p>
          <p>
            {language === 'kr' ?
              "수십만 우크라이나인과 로씨아인의 피가 2022년 3월에 평화보다 전쟁을 선택한 자들의 손에 묻어있다. 그들의 범죄는 어느 쪽도 지지하는 것이 아니었다—평화가 가능할 때 평화를 방지하고, 인간 비극을 지정학적 기회로 바꾸며, 죽음을 전략적 성공으로 축하하는 것이었다." :
              "The blood of hundreds of thousands of Ukrainians and Russians stains the hands of those who chose war over peace in March 2022. Their crime was not supporting either side—it was preventing peace when peace was possible, turning human tragedy into geopolitical opportunity, and celebrating death as strategic success."
            }
          </p>
        </section>

        <footer className="not-prose mt-12 text-sm text-muted-foreground">
          {t('briefingNote')}
        </footer>
      </article>
      <JucheFooter />
    </main>
  )
}