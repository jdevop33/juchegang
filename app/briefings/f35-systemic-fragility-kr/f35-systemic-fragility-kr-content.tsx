"use client"

import Link from "next/link"

export default function F35SystemicFragilityKrContent() {
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

        {/* English version link */}
        <div className="mb-8 text-center">
          <Link href="/briefings/f35-systemic-fragility" className="text-sm text-muted-foreground hover:text-sovereign-gold transition-colors no-underline">
            English version &rarr; /briefings/f35-systemic-fragility
          </Link>
        </div>

        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-sm font-medium tracking-widest uppercase">
            JPANDA JAMES 전략 보고서
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            체계적 취약성과 전략적 현실
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            F-35 라이트닝 II 프로그램의 종합 수명주기 평가
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-2">
            및 강대국 경쟁 시대의 서방 방위산업 역량 분석
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <span>제시 제임스 (Jesse James)</span>
            <div className="flex items-center gap-4">
              <span>2026년 2월</span>
              <span className="text-sovereign-gold">|</span>
              <span>공개 문서 // 비밀 아님</span>
            </div>
          </div>
        </div>

        {/* Key Findings Grid */}
        <div className="not-prose grid grid-cols-2 gap-4 mb-12">
          <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-sovereign-gold mb-2">2조 달러+</p>
            <p className="text-sm text-muted-foreground">프로그램 수명주기 비용</p>
          </div>
          <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-korean-red mb-2">50%</p>
            <p className="text-sm text-muted-foreground">함대 가동률</p>
          </div>
          <div className="bg-river-current/10 border border-river-current/30 rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-river-current dark:text-river-mid mb-2">232:1</p>
            <p className="text-sm text-muted-foreground">중국-미국 조선 역량 비율</p>
          </div>
          <div className="bg-muted/30 border border-muted-foreground/20 rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">1,000억$+</p>
            <p className="text-sm text-muted-foreground">취소된 방위 프로그램</p>
          </div>
        </div>

        {/* Strategic Warning */}
        <div className="bg-korean-red/10 dark:bg-korean-red/20 border border-korean-red/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-3 text-korean-red">
            전략적 경고
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            워게임 시뮬레이션 결과, 미군은 대규모 분쟁 발생 시 며칠 내에 장거리 정밀 탄약이 고갈되는 것으로 나타났습니다.
          </p>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-bold">&#9670;</span>
            <h2 className="text-3xl font-bold">요약</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            F-35 라이트닝 II 합동 타격 전투기(JSF) 프로그램은 역사상 가장 비싼 무기 체계로, 수명주기 비용이 <strong className="text-sovereign-gold">2조 달러</strong>를 초과합니다. 이 보고서는 프로그램의 재정 구조, 작전 성과, 공급망 취약성, 그리고 급변하는 세계 군사 균형을 종합적으로 평가합니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            핵심 발견: F-35 함대는 지속적으로 <strong className="text-korean-red">50%</strong> 수준의 가동률을 기록하고 있으며, 이는 의회가 요구하는 목표에 크게 못 미칩니다. 러시아는 연간 포탄 생산량을 <strong className="text-sovereign-gold">450만 발</strong>까지 확대했으며, 중국의 조선 역량은 미국을 <strong className="text-sovereign-gold">232대 1</strong>로 압도하고 있습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            &ldquo;동시개발&rdquo;(concurrency) 전략 &mdash; 시험이 완료되기 전에 양산을 시작하는 방식 &mdash; 은 비용 초과와 기술적 부채의 구조적 원인이 되었습니다. 600대 이상이 초기 작전 시험평가(IOT&amp;E) 완료 전에 인도되었습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            한편, 중국은 2024년 12월 <strong className="text-sovereign-gold">6세대 전투기</strong> 2종을 공개하며 서방의 기술적 우위에 도전하고 있습니다. 서방의 방위산업 기반이 위축되는 가운데, 생산 역량의 비대칭이 전략적 균형을 근본적으로 뒤흔들고 있습니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 1 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">1</span>
            <h2 className="text-3xl font-bold">2조 달러 사업</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            F-35 프로그램은 세 가지 변형을 포괄합니다: 공군용 <strong>F-35A</strong>(재래식 이착륙), 해병대용 <strong>F-35B</strong>(단거리 이착륙/수직 착륙), 해군용 <strong>F-35C</strong>(항공모함 운용). 이 &ldquo;합동&rdquo; 접근법은 효율성을 약속했지만, 현실은 그 약속을 배반했습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            글로벌 공급망은 수십 개 국가에 걸쳐 있으며, 단일 부품의 지연이 전체 생산라인을 중단시킬 수 있는 구조입니다. 지금까지 1,000대 이상이 인도되었지만, 프로그램은 여전히 &ldquo;영구적 개발&rdquo; 상태에 있습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-korean-red">임무 수행 가능률은 55%</strong>에 불과합니다. 즉, 역사상 가장 비싼 전투기의 거의 절반이 어떤 시점에서든 비행할 수 없는 상태입니다. 이것은 단순한 유지보수 문제가 아니라 &mdash; 체계적 설계 결함입니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 2 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">2</span>
            <h2 className="text-3xl font-bold">재정 구조: 동시성 세금</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            &ldquo;동시개발&rdquo;은 F-35 프로그램의 핵심 <strong className="text-korean-red">&ldquo;획득 과실&rdquo;</strong>입니다. 국방부는 시험이 완료되기 전에 양산을 승인했고, 그 결과 600대 이상의 항공기가 초기 작전 시험평가(IOT&amp;E) 완료 전에 인도되었습니다. 이 항공기들은 이제 <strong className="text-sovereign-gold">14억~17억 달러</strong>의 비용을 들여 개수해야 합니다.
          </p>

          <div className="not-prose bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-sovereign-gold mb-4">비용 비교: 시간당 비행 비용</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-korean-red">$42,000</p>
                <p className="text-sm text-muted-foreground">F-35A 시간당 비행 비용</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-river-current dark:text-river-mid">$26,000</p>
                <p className="text-sm text-muted-foreground">F-16 시간당 비행 비용</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            프로그램 비용은 초기 추정치 <strong>3,957억 달러</strong>에서 <strong className="text-sovereign-gold">4,852억 달러</strong>로 증가했습니다. 미 회계감사원(GAO)은 총 수명주기 비용을 <strong className="text-korean-red">2조 630억 달러</strong>로 산정했습니다 &mdash; 이는 대부분의 국가 GDP를 초과하는 금액입니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 3 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">3</span>
            <h2 className="text-3xl font-bold">작전 현실: 절반의 시간도 비행하지 못하는 함대</h2>
          </div>

          <div className="not-prose bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-korean-red mb-4">준비태세 지표</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-korean-red/20 pb-2">
                <span className="text-foreground/80">임무 수행 가능률 (2021)</span>
                <span className="font-bold text-sovereign-gold">69%</span>
              </div>
              <div className="flex justify-between items-center border-b border-korean-red/20 pb-2">
                <span className="text-foreground/80">임무 수행 가능률 (2024)</span>
                <span className="font-bold text-korean-red">51.5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-korean-red/20 pb-2">
                <span className="text-foreground/80">완전 임무 수행 가능률</span>
                <span className="font-bold text-korean-red">~30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">목표 달성 연속 미달</span>
                <span className="font-bold text-korean-red">6년 연속</span>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            가동률 추세는 악화되고 있습니다. 2021년 69%에서 2024년 <strong className="text-korean-red">51.5%</strong>로 하락했습니다. 완전 임무 수행 가능률 &mdash; 모든 센서와 무장이 작동하는 상태 &mdash; 은 약 <strong>30%</strong>에 불과합니다. 의회가 설정한 목표를 <strong className="text-korean-red">6년 연속 달성하지 못했습니다.</strong>
          </p>

          <p className="text-lg leading-relaxed mb-6">
            이는 단순한 수치가 아닙니다. 실전에서 이 수치는 전투기 함대의 절반이 비행할 수 없고, 비행 가능한 항공기의 3분의 1만이 설계된 모든 임무를 수행할 수 있다는 것을 의미합니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 4 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">4</span>
            <h2 className="text-3xl font-bold">작전 사고: 바다가 또 한 대를 삼키다</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            F-35의 운용 취약성을 극적으로 보여주는 사례가 있습니다. 남중국해에서 발생한 <strong className="text-korean-red">F-35C 추락 사고</strong>는 <strong className="text-sovereign-gold">1억 달러</strong> 이상의 자산이 수심 <strong>12,400피트(약 3,780미터)</strong>에 가라앉는 결과를 낳았습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            회수 작전에 <strong className="text-sovereign-gold">37일</strong>이 소요되었습니다. 이 기간 동안 극비 기술이 세계에서 가장 분쟁이 심한 해역의 해저에 노출되어 있었습니다. 중국 해군이 잔해에 접근을 시도했다는 보고도 있었습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            이 사건은 F-35의 세 가지 근본적 문제를 드러냅니다: 극한 환경에서의 운용 위험, 기밀 기술의 노출 가능성, 그리고 단일 사고의 천문학적 비용.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 5 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">5</span>
            <h2 className="text-3xl font-bold">공급망 취약성</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            F-35 한 대에는 약 <strong className="text-sovereign-gold">400kg의 희토류</strong>가 사용됩니다. 이 희토류의 공급은 전략적 경쟁 상대국인 중국에 치명적으로 의존하고 있습니다.
          </p>

          <div className="not-prose bg-river-current/10 border border-river-current/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-river-current dark:text-river-mid mb-4">중국의 희토류 독점 현황</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-river-current/20 pb-2">
                <span className="text-foreground/80">희토류 채굴</span>
                <span className="font-bold text-sovereign-gold">70%</span>
              </div>
              <div className="flex justify-between items-center border-b border-river-current/20 pb-2">
                <span className="text-foreground/80">희토류 가공</span>
                <span className="font-bold text-korean-red">90%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">특정 핵심 원소 가공</span>
                <span className="font-bold text-korean-red">100%</span>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            2022년부터 2024년 사이, 공급망 중단이 반복적으로 발생했습니다. 엔진 부품 부족, 소프트웨어 업그레이드 지연, 희토류 수급 불안정이 생산과 유지보수를 동시에 마비시켰습니다. 가장 첨단의 전투기가 가장 취약한 공급망에 의존하고 있다는 역설은 전략적 차원의 위험입니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 6 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">6</span>
            <h2 className="text-3xl font-bold">변화하는 세계 군사 균형</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            중국의 <strong className="text-sovereign-gold">J-20</strong> 스텔스 전투기는 이미 <strong>300대 이상</strong> 운용 중이며, 이는 세계 최대의 5세대 전투기 함대 중 하나입니다. 그러나 진정한 전환점은 6세대 전투기의 등장입니다.
          </p>

          <div className="not-prose bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-sovereign-gold mb-4">6세대 전투기 개발 일정</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-sovereign-gold/20 pb-2">
                <span className="text-foreground/80">중국 J-36 / J-50 공개</span>
                <span className="font-bold text-korean-red">2024년 12월</span>
              </div>
              <div className="flex justify-between items-center border-b border-sovereign-gold/20 pb-2">
                <span className="text-foreground/80">J-36 시제기 3대 확인</span>
                <span className="font-bold text-korean-red">2025년 12월</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80">미국 F-47 예상 취역</span>
                <span className="font-bold text-river-current dark:text-river-mid">2028년</span>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            2024년 12월, 중국은 <strong className="text-sovereign-gold">J-36</strong>과 <strong className="text-sovereign-gold">J-50</strong>으로 알려진 두 종의 6세대 전투기를 공개하여 세계를 놀라게 했습니다. 2025년 12월까지 3대의 J-36 시제기가 확인되었습니다. 이에 비해 미국의 차세대 전투기인 <strong>F-47</strong>은 2028년 이전에는 취역하지 못할 전망입니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            이 격차는 단순한 기술 경쟁 이상의 의미를 갖습니다. 서방이 5세대 전투기의 문제를 해결하는 동안, 중국은 이미 다음 세대로 도약하고 있습니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 7 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">7</span>
            <h2 className="text-3xl font-bold">생산 역량 비교</h2>
          </div>

          <div className="not-prose bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-korean-red mb-4">포탄 생산 역량 비교</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-korean-red">400만~450만 발/년</p>
                <p className="text-sm text-muted-foreground">러시아 (2025)</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-river-current dark:text-river-mid">170만~200만 발/년</p>
                <p className="text-sm text-muted-foreground">NATO 전체 (2025)</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            러시아는 연간 <strong className="text-korean-red">400만~450만 발</strong>의 포탄을 생산하고 있으며, 이는 NATO 전체의 <strong>170만~200만 발</strong>을 2배 이상 초과합니다. 이 격차는 고강도 분쟁에서 소모전의 결과를 결정하는 핵심 변수입니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            해양 영역에서 비대칭은 더욱 극적입니다. 중국의 조선 역량은 미국의 <strong className="text-sovereign-gold">232배</strong>에 달합니다. 중국은 동시에 <strong className="text-sovereign-gold">7~8척의 Type 093B 핵잠수함</strong>을 건조하면서, 세계 최대의 해군 함대를 더욱 확장하고 있습니다.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            이러한 생산 역량의 비대칭은 억지력의 근본을 흔들고 있습니다. 전쟁은 무기의 품질만으로 결정되지 않습니다 &mdash; <strong className="text-sovereign-gold">생산 역량이 곧 억지력입니다.</strong>
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 8 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">8</span>
            <h2 className="text-3xl font-bold">워게임 시사점</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            전략국제문제연구소(CSIS)는 대만 해협 시나리오에 대해 <strong className="text-sovereign-gold">24차례의 워게임</strong>을 실시했습니다. 결과는 일관되게 충격적이었습니다.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-muted/30 border-l-4 border-korean-red pl-6 py-4">
              <h4 className="font-bold text-korean-red mb-2">1주 차: 탄약 고갈</h4>
              <p className="text-foreground/90">미군의 장거리 정밀 유도 탄약(JASSM, LRASM 등)은 분쟁 발생 <strong>첫 주</strong>에 고갈됩니다. 이후 미군은 열세한 대안 무기에 의존해야 합니다.</p>
            </div>

            <div className="bg-muted/30 border-l-4 border-sovereign-gold pl-6 py-4">
              <h4 className="font-bold text-sovereign-gold mb-2">5,000발 이상의 미사일</h4>
              <p className="text-foreground/90">시뮬레이션에서 양측이 사용한 미사일은 <strong>5,000발</strong>을 초과했습니다. 현재 재고와 생산 능력으로는 이러한 소모를 감당할 수 없습니다.</p>
            </div>

            <div className="bg-muted/30 border-l-4 border-river-current pl-6 py-4">
              <h4 className="font-bold text-river-current dark:text-river-mid mb-2">8.4년의 보충 기간</h4>
              <p className="text-foreground/90">소모된 탄약을 현재 생산 속도로 보충하려면 <strong>8.4년</strong>이 필요합니다. 이는 단일 전역 후 미군이 수년간 전투 능력이 크게 저하됨을 의미합니다.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            이러한 워게임 결과는 F-35 프로그램의 근본적 모순을 드러냅니다: 소수의 고가 플랫폼에 의존하는 전략은 고강도 소모전 시대에 <strong className="text-korean-red">지속 불가능</strong>합니다.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9670;</div>

        {/* Section 9 - Conclusion */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl">9</span>
            <h2 className="text-3xl font-bold">결론</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-sovereign-gold">9.1 단일 해결책의 한계</h3>
              <p className="text-lg leading-relaxed mb-4">
                F-35는 모든 군종의 모든 임무를 하나의 플랫폼으로 해결하려 했습니다. 그 결과는 어떤 임무도 최적으로 수행하지 못하는, 타협의 산물입니다. &ldquo;만능 전투기&rdquo;의 꿈은 비용 초과, 일정 지연, 성능 타협이라는 현실에 부딪혔습니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-sovereign-gold">9.2 생산 역량이 곧 억지력이다</h3>
              <p className="text-lg leading-relaxed mb-4">
                워게임은 반복적으로 같은 교훈을 가르칩니다: 첨단 무기의 품질은 충분한 수량 없이는 무의미합니다. 중국과 러시아가 대규모 생산 능력을 확장하는 동안, 서방은 소수의 극도로 비싼 시스템에 의존하는 전략을 고수하고 있습니다. 이 접근법은 <strong className="text-korean-red">지속 불가능</strong>합니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-sovereign-gold">9.3 전략적 유연성의 필요성</h3>
              <p className="text-lg leading-relaxed mb-4">
                급변하는 위협 환경에서 단일 프로그램에 2조 달러를 투입하는 것은 전략적 경직성의 극치입니다. 다양한 플랫폼의 혼합, 무인 시스템의 통합, 그리고 무엇보다 생산 기반의 확충이 필요합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Final Assessment */}
        <div className="bg-gradient-to-r from-river-current/10 to-sovereign-gold/10 dark:from-river-current/20 dark:to-sovereign-gold/20 border border-sovereign-gold/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-sovereign-gold text-center">최종 평가</h2>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-6 italic text-sovereign-gold text-xl">
            &ldquo;전략적 유연성은 약점이 아닙니다 &mdash; 원래의 가정이 치명적으로 잘못되었음이 증명되었을 때, 그것은 지혜입니다. 생산 역량이 곧 억지력입니다.&rdquo;
          </blockquote>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-sovereign-gold/20">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-2">JPANDA JAMES 전략 보고서</p>
          <p className="text-xs text-muted-foreground">방위 전문가 및 정책 입안자를 위한 독립 분석</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>2026년 2월</span>
            <span className="text-sovereign-gold">|</span>
            <span>공개 문서 // 비밀 아님</span>
          </div>

          {/* Korean dedication */}
          <div className="mt-8 pt-6 border-t border-sovereign-gold/10">
            <p className="text-lg text-sovereign-gold font-medium mb-2">한민족의 평화와 번영을 위하여</p>
            <p className="text-sm text-muted-foreground italic mb-1">이순신 장군의 정신으로</p>
            <p className="text-sm text-muted-foreground">38선의 남과 북, 모든 한국인이 서로를 자랑스러워할 수 있기를</p>
          </div>
        </div>

      </div>
    </article>
  )
}
