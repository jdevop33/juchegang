"use client"

/* ─── helpers ─── */
function SectionHeader({
  korean,
  title,
}: {
  korean: string
  title: string
}) {
  return (
    <div className="mt-20 mb-10 pt-10 border-t border-sovereign-gold/20">
      <span
        className="text-[14px] font-bold tracking-[4px] text-sovereign-gold block mb-3"
        style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
      >
        {korean}
      </span>
      <h2 className="font-display text-[28px] font-bold leading-[1.3] text-cream">
        {title}
      </h2>
    </div>
  )
}

function Thesis({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-bold text-cream">{children}</p>
  )
}

function Stat({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="bg-river-deep border-t-2 border-sovereign-gold px-4 pt-4 pb-3">
      <div className="font-mono text-[22px] font-semibold text-sovereign-gold leading-tight">
        {n}
      </div>
      <div className="text-[12px] text-cream-muted mt-2 leading-snug">
        {children}
      </div>
    </div>
  )
}

function BoxLabel({
  color = "gold",
  children,
}: {
  color?: "gold" | "red"
  children: React.ReactNode
}) {
  return (
    <div
      className={`font-mono text-[11px] tracking-[0.24em] uppercase mb-3 ${
        color === "red" ? "text-korean-red" : "text-sovereign-gold"
      }`}
    >
      {children}
    </div>
  )
}

function PullQuote({
  attr,
  children,
}: {
  attr?: string
  children: React.ReactNode
}) {
  return (
    <div className="border-l-[3px] border-sovereign-gold bg-river-current/30 pl-7 pr-5 py-5 my-10">
      <p className="font-display text-[20px] font-normal leading-[1.5] text-river-mist italic">
        {children}
      </p>
      {attr && (
        <p className="font-mono not-italic text-[11px] text-cream-muted mt-3 tracking-wider uppercase">
          {attr}
        </p>
      )}
    </div>
  )
}

function KDivider({ hanja, label }: { hanja: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mt-16 mb-6">
      <span
        className="text-[30px] font-bold text-korean-red leading-none"
        style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
      >
        {hanja}
      </span>
      <span
        className="text-[18px] font-bold text-sovereign-gold"
        style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
      >
        {label}
      </span>
      <span className="flex-1 h-px bg-gradient-to-r from-sovereign-gold to-transparent" />
    </div>
  )
}

function PartHeader({
  kicker,
  title,
  koreanTitle,
}: {
  kicker: string
  title: string
  koreanTitle?: string
}) {
  return (
    <div
      className="mt-24 mb-4 px-6 py-6 border border-sovereign-gold/50"
      style={{
        background: "linear-gradient(135deg, #142638, #1b4965)",
      }}
    >
      <div className="font-mono text-[11px] tracking-[0.28em] text-sovereign-gold mb-2 uppercase">
        {kicker}
      </div>
      <div className="font-display text-[26px] font-black text-cream leading-tight">
        {title}
      </div>
      {koreanTitle && (
        <div
          className="text-[18px] font-bold text-sovereign-gold mt-1"
          style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
        >
          {koreanTitle}
        </div>
      )}
    </div>
  )
}

/* ─── main ─── */
export function ScoreContent() {
  return (
    <article>
      {/* ═══ HERO ═══ */}
      <div
        className="min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1b2a 0%, #1b4965 62%, #2a6f8e 100%)",
        }}
      >
        {/* Background character */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-korean), 'Noto Serif KR', serif",
            fontSize: "40vw",
            fontWeight: 700,
            color: "rgba(212, 167, 74, 0.05)",
          }}
        >
          강
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="font-mono text-[11px] tracking-[0.28em] text-sovereign-gold mb-6 uppercase">
            주체강 White Paper · JCK-WP-2026-0714 · Unclassified
          </div>

          <div
            className="text-lg font-bold tracking-[6px] text-sovereign-gold mb-10"
            style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
          >
            주체강
          </div>

          <div className="font-mono text-[12px] tracking-[0.24em] text-korean-red border-l-[3px] border-korean-red pl-3 mb-8 uppercase">
            Bilingual Edition · 한영 합본
          </div>

          <h1 className="font-display font-black text-[clamp(34px,5.5vw,60px)] leading-[1.15] max-w-[820px] mb-4">
            The Score That Does Not Exist
          </h1>

          <div
            className="text-[clamp(18px,3vw,28px)] text-sovereign-gold mb-10 tracking-[2px]"
            style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
          >
            존재하지 않는 점수
          </div>

          <p className="text-[16px] text-cream-muted max-w-[600px] leading-relaxed mb-3">
            Social credit, reputation-scored lending, and the predatory machine
            China shut down while the West kept it running. Every claim
            verified against primary sources.
          </p>
          <p
            className="text-[14px] text-cream-muted max-w-[560px] leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
          >
            서방이 두려워한 사회신용점수의 실체, 그리고 중국이 멈춘 약탈적 대출
            기계에 관한 검증 보고서
          </p>

          <div className="w-[80px] h-[2px] bg-sovereign-gold mb-8" />

          <div className="text-[13px] font-light text-cream-muted tracking-[3px] uppercase">
            Jesse James &nbsp;&middot;&nbsp; 주체강 &nbsp;&middot;&nbsp; 14 July 2026
          </div>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-[17px] leading-[1.75]">
        {/* ─── BLUF ─── */}
        <div className="bg-river-deep border-[1.5px] border-sovereign-gold px-6 py-6 mb-8">
          <BoxLabel>Bottom Line Up Front</BoxLabel>
          <p className="mb-4">
            The unified numerical &ldquo;social credit score&rdquo; that
            Western media attributes to every Chinese citizen does not exist.
            Specialist researchers at MERICS, Yale Law School&rsquo;s Paul Tsai
            China Center, MIT Technology Review, and WIRED all reach the same
            conclusion: the real system is fragmented, mostly aimed at
            businesses, and built around court judgment-defaulter lists, not a
            citizen score.
          </p>
          <p className="mb-4">
            The reputation-scored lending machinery that inspired the fear was
            pioneered in Western fintech: Zopa in London in 2005, Prosper in
            San Francisco in 2006. It flowed into China through platforms
            seeded and staffed by Goldman Sachs alumni. When that machinery
            turned predatory, Beijing regulated it to zero: over 6,000
            peer-to-peer lenders at the 2015 peak, zero operating platforms by
            November 2020, and the largest IPO in history suspended to force
            lenders to hold real capital.
          </p>
          <p>
            The West took the opposite path. A former US Treasury Secretary now
            chairs the private equity firm that owns a subprime installment
            lender a former employee described to the Washington Post as{" "}
            <span className="text-sovereign-gold">
              &ldquo;a way of monetizing poor people.&rdquo;
            </span>{" "}
            This is the last quotation this paper takes from that source, and
            the only one it needs.
          </p>
        </div>

        {/* ─── KEY FINDINGS ─── */}
        <div className="bg-river-deep border-l-[3px] border-korean-red px-6 py-5 mb-8">
          <BoxLabel color="red">Key Findings · 핵심 판단</BoxLabel>
          <ol className="list-decimal ml-5 space-y-3 text-[16px]">
            <li>
              <strong className="text-sovereign-gold">
                No unified citizen score exists in China;
              </strong>{" "}
              the PBOC refused to license the private scoring pilots of Alibaba
              and Tencent in 2017 to 2018, and Tencent&rsquo;s consumer score
              was pulled almost immediately after launch.
            </li>
            <li>
              <strong className="text-sovereign-gold">
                Reputation-scored peer lending launched in the West first:
              </strong>{" "}
              Zopa (UK, March 2005), Prosper (San Francisco, 2006), LendingClub
              (2006 to 2007). China&rsquo;s first P2P platform, PPDAI, followed
              in 2007.
            </li>
            <li>
              <strong className="text-sovereign-gold">
                Goldman Sachs led Alibaba&rsquo;s first institutional round
              </strong>{" "}
              in October 1999; Alibaba and Tencent are both Cayman Islands
              exempted companies, confirmed verbatim in their SEC filings.
            </li>
            <li>
              <strong className="text-sovereign-gold">
                China&rsquo;s crackdown was total:
              </strong>{" "}
              P2P platforms fell from over 6,000 to zero by November 2020, and
              Ant Group&rsquo;s roughly $34 to 37 billion IPO was suspended on
              3 November 2020, days after new draft rules required online
              lenders to fund at least 30 percent of joint loans. Ant was
              funding about 2 percent.
            </li>
            <li>
              <strong className="text-sovereign-gold">
                The same predatory model still runs in the West,
              </strong>{" "}
              from Mariner Finance to buy-now-pay-later, while Goldman&rsquo;s
              Abacus CDO settlement ($550 million, 14 July 2010) remains the
              reference case for what the machine does when unregulated.
            </li>
          </ol>
        </div>

        {/* ─── STAT ROW ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <Stat n="6,000+">
            P2P lending platforms in China at the 2015 peak. Zero operating by
            November 2020.
          </Stat>
          <Stat n="$7.6B">
            Raised by the Ezubao Ponzi scheme from roughly 900,000 investors
            before its collapse.
          </Stat>
          <Stat n="$34B+">
            Ant Group IPO, the largest in history, suspended 3 November 2020.
          </Stat>
          <Stat n="$550M">
            Goldman Sachs SEC settlement over Abacus 2007-AC1, 14 July 2010.
          </Stat>
        </div>

        {/* ─── METHOD ─── */}
        <div
          className="border border-korean-red px-6 py-5 mb-8"
          style={{ background: "rgba(199, 48, 50, 0.12)" }}
        >
          <BoxLabel color="red">Method · Verification Discipline</BoxLabel>
          <p className="text-[15px] text-cream leading-relaxed">
            Every factual claim in this paper survived a source-level
            verification pass against SEC filings, regulatory records, court
            outcomes, and first-tier journalism. Three claims commonly attached
            to this story failed verification and are excluded: that the 2008
            crash was deliberately engineered (unsupported), that
            Alibaba&rsquo;s president is a former Goldman Sachs CEO (false;
            Michael Evans was a vice chairman), and that BlackRock and
            Microsoft were &ldquo;hired by the G7&rdquo; to counter the Belt
            and Road (garbled; the verifiable facts are the G7&rsquo;s PGII
            initiative of 2022 and the March 2025 BlackRock-led consortium
            agreement for CK Hutchison&rsquo;s ports at a $22.8 billion
            enterprise value, a deal later stalled and overtaken by Panamanian
            court action). What remains is what survives hostile
            cross-examination.
          </p>
        </div>

        {/* ═══ PART I ═══ */}
        <PartHeader kicker="Part I · English Edition" title="The Machine, Traced" />

        {/* ─── 1 ─── */}
        <SectionHeader
          korean="제1장 — 존재하지 않는 점수"
          title="The score that does not exist"
        />
        <Thesis>
          The single nationwide citizen score is a Western invention about
          China, not a Chinese invention about citizens.
        </Thesis>
        <p className="mt-4">
          I spent years watching Western coverage describe a dystopia where
          every Chinese citizen carries a number that opens or closes their
          life. Then I read the people who actually study the system. Vincent
          Brussee at MERICS, in his February 2022 analysis, calls the
          citizen-score narrative{" "}
          <span className="text-sovereign-gold">
            &ldquo;more bogeyman than reality&rdquo;
          </span>{" "}
          and documents a system that is lowly digitalized, highly fragmented,
          and aimed primarily at businesses. Jeremy Daum of Yale Law
          School&rsquo;s Paul Tsai China Center, who has translated the
          underlying Chinese regulations for years at China Law Translate,
          finds that meaningful restrictions attach almost entirely to one
          instrument: the court judgment-defaulter list, which is a
          debt-enforcement tool, not a behavioral score. MIT Technology Review
          in 2022 and WIRED in 2019 independently reached the same conclusion.
        </p>
        <p>
          Here is the part the coverage skips. There were real consumer scoring
          programs in China. They were private. In 2015 the People&rsquo;s Bank
          of China permitted eight private firms, including Ant&rsquo;s Sesame
          Credit and a Tencent unit, to pilot personal credit scoring. In 2017
          to 2018 the PBOC reviewed the pilots, cited conflicts of interest,
          and refused to license any of them, creating the state-backed Baihang
          Credit instead. Tencent&rsquo;s consumer score was pulled almost
          immediately after a brief launch. Sesame Credit survives as what it
          always functionally was: a loyalty and rewards program.
        </p>
        <p>
          So the one entity in this story that examined a commercial
          citizen-scoring product and said no was the Chinese central bank.
          Hold that thought, because the next question is where the
          scoring-and-lending machinery came from in the first place.
        </p>

        {/* ─── 2 ─── */}
        <SectionHeader
          korean="제2장 — 기계의 탄생지"
          title="Where the machine was actually built"
        />
        <Thesis>
          Reputation-scored peer lending is a Western fintech invention that
          reached China two years after San Francisco.
        </Thesis>
        <p className="mt-4">
          The world&rsquo;s first peer-to-peer lender was Zopa, launched in
          London in March 2005 by a founding team out of Egg, the internet bank
          Prudential plc created. Prosper launched in San Francisco in 2006,
          and its original model was precisely the thing Western audiences
          would later fear from Beijing: borrowers carried ratings and
          reputation data, and strangers priced their access to money against
          it. LendingClub followed in 2006 to 2007. China&rsquo;s first P2P
          platform, PPDAI, appeared in 2007.
        </p>
        <p>
          The timing matters. These platforms scaled into the 2008 crisis and
          its aftermath, when households on every continent needed credit and
          regulators were busy elsewhere. The algorithms were complex, the
          capital requirements were nonexistent, and the lenders had no skin in
          the game. The United States eventually forced its platforms under
          securities regulation. The model kept moving.
        </p>

        {/* ─── 3 ─── */}
        <SectionHeader
          korean="제3장 — 기계를 동쪽으로 옮긴 사람들"
          title="The men who carried it east"
        />
        <Thesis>
          China&rsquo;s big tech platforms were seeded, staffed, and structured
          by Wall Street, a fact recorded in their own SEC filings.
        </Thesis>
        <p className="mt-4">
          Henry Paulson ran Goldman Sachs as chairman and CEO from 1999 to
          2006, and the Daily Telegraph reported in July 2008 that he had
          visited China more than 70 times in that career, building
          relationships with the Chinese elite. He was sworn in as US Treasury
          Secretary on 10 July 2006 and served to 20 January 2009, pressing
          China on financial opening through the Strategic Economic Dialogue he
          founded. His March 2008 &ldquo;Blueprint for a Modernized Financial
          Regulatory Structure&rdquo; was a domestic reorganization plan; the
          China-facing push ran through the Dialogue. Precision matters here,
          and the precise version is damning enough.
        </p>
        <p>
          Goldman led Alibaba&rsquo;s first institutional round in October
          1999, roughly $5 million for a stake reported between 28 and 33
          percent, with SoftBank&rsquo;s separate $20 million following in
          early 2000. Alibaba Group Holding Limited is, per its own SEC
          filings, an exempted company incorporated under the laws of the
          Cayman Islands on 28 June 1999. Tencent Holdings is likewise a Cayman
          Islands exempted company. Tencent&rsquo;s president, Martin Lau, came
          from Goldman Sachs Asia investment banking, where he was an executive
          director and COO of the telecom, media and technology group, and
          before that from McKinsey &amp; Company. Alibaba&rsquo;s president
          since August 2015, Michael Evans, was a Goldman Sachs vice chairman
          from February 2008 to December 2013 and chairman of its Asia
          operations.
        </p>
        <p>
          McKinsey, for the record, paid $573 million to 47 states, DC, and
          five territories in February 2021 and $650 million to the US
          Department of Justice in December 2024 over its work turbocharging
          Purdue Pharma&rsquo;s OxyContin sales, with a former senior partner
          pleading guilty to obstruction. Lau had no role in that work. But
          when someone tells you China&rsquo;s tech giants are alien to the
          Western financial system, the org charts and the incorporation papers
          say otherwise. They are the Western financial system, offshore
          edition.
        </p>

        <PullQuote attr="Source basis: Alibaba & Tencent SEC filings · company officer biographies">
          The companies Washington describes as instruments of the Chinese
          party-state are Cayman Islands corporations whose presidents came
          from Goldman Sachs.
        </PullQuote>

        {/* ─── 4 ─── */}
        <SectionHeader
          korean="제4장 — 기계가 사람을 해쳤을 때"
          title="What China did when the machine turned predatory"
        />
        <Thesis>
          Faced with a metastasizing predatory lending sector, Beijing
          regulated it out of existence and stopped the largest IPO in history
          to do it.
        </Thesis>
        <p className="mt-4">
          By 2015, China had over 6,000 P2P lending platforms. The sector
          produced the Ezubao fraud: a Ponzi scheme that raised over 50 billion
          yuan, roughly $7.6 billion, from about 900,000 investors before
          collapsing. Founder Ding Ning received a life sentence on 12
          September 2017. The regulatory response escalated from registration
          requirements to a November 2019 order converting P2P lenders into
          small-loan companies, and by November 2020 Chinese authorities
          reported the number of operating P2P platforms at zero. Not reduced.
          Zero.
        </p>
        <p>
          Then came the main event. Ant Group&rsquo;s dual Shanghai and Hong
          Kong listing was set to raise between $34.4 and $37 billion, the
          largest IPO ever attempted. Ant&rsquo;s consumer lending arms, Huabei
          and Jiebei, were generating nearly 40 percent of its revenue in the
          first half of 2020, and Ant was funding only about 2 percent of the
          joint loans it originated with banks. The risk sat on the banking
          system; the fees sat with Ant. On 24 October 2020, Jack Ma stood up
          at the Bund Summit in Shanghai and attacked Chinese banking
          regulation and the Basel framework. On 2 November, regulators
          published draft rules requiring online micro-lenders to fund at least
          30 percent of joint loans from their own capital. On 3 November, the
          Shanghai Stock Exchange suspended the IPO, days before listing. Ma
          then largely disappeared from public view for months.
        </p>
        <p>
          You can read that sequence as authoritarian caprice, and much of the
          Western press did. Or you can read the rule: if you originate the
          loan, you hold real capital against it. That is not exotic. That is
          what bank regulation is for, applied to entities that had been
          enjoying bank economics without bank obligations.
        </p>

        {/* ─── 5 ─── */}
        <SectionHeader
          korean="제5장 — 서방이 택한 길"
          title="What the West did instead"
        />
        <Thesis>
          The same predatory model China shut down continues to operate in the
          West, run in part by the officials who managed the 2008 crisis.
        </Thesis>
        <p className="mt-4">
          Timothy Geithner was president and CEO of the Federal Reserve Bank of
          New York from 2003 to 2009 and Treasury Secretary after that. In
          March 2014 he became president of Warburg Pincus, the private equity
          firm whose fund acquired Mariner Finance, a subprime installment
          lender, in 2013. The Washington Post&rsquo;s investigation of 1 July
          2018 documented Mariner&rsquo;s model of mailing unsolicited live
          checks to cash-strapped households and quoted a former manager
          trainee&rsquo;s description of the business, cited in the summary
          above. Mariner disputes the predatory characterization. The
          Post&rsquo;s reporting, and the business model it describes, are on
          the record.
        </p>
        <p>
          The reference case for the machine&rsquo;s behavior when unregulated
          remains Goldman&rsquo;s Abacus 2007-AC1: the SEC alleged Goldman
          failed to disclose that the hedge fund helping select the mortgage
          portfolio was betting against it, and Goldman settled on 14 July 2010
          for $550 million, then the largest SEC penalty against a Wall Street
          firm, acknowledging its marketing materials contained incomplete
          information. Sixteen years ago to the day, as it happens. Meanwhile
          buy-now-pay-later lending has spread through Western checkout pages
          with a fraction of the scrutiny China applied to Ant.
        </p>
        <p>
          One more thread, worded exactly. The G7 launched the Partnership for
          Global Infrastructure and Investment in 2022 as its explicit answer
          to the Belt and Road. In March 2025 a BlackRock-led consortium agreed
          to acquire CK Hutchison&rsquo;s Panama ports and a 43-port global
          portfolio at a $22.8 billion enterprise value, a transaction
          Washington framed as reclaiming the canal from Chinese influence;
          Beijing pushed back, and by early 2026 Panamanian court action had
          annulled the concessions. The West&rsquo;s answer to Chinese
          infrastructure lending was to have an asset manager buy the
          infrastructure. The deal did not hold. The instinct is instructive.
        </p>

        {/* ─── 6 ─── */}
        <SectionHeader
          korean="제6장 — 차이를 만든 규율"
          title="The discipline that made the difference"
        />
        <Thesis>
          China&rsquo;s escape from both shock therapy and platform-lending
          capture came from the same habit: test small, verify, then scale.
        </Thesis>
        <p className="mt-4">
          Isabella Weber&rsquo;s 2021 book{" "}
          <em className="text-river-mist">How China Escaped Shock Therapy</em>{" "}
          documents how close China came in the 1980s to big-bang price
          liberalization, and why it pulled back in favor of gradual dual-track
          reform. The famous phrase, crossing the river by feeling for the
          stones, is popularly credited to Deng Xiaoping; Weber traces its
          economic use to Chen Yun as early as 1950. Chen&rsquo;s birdcage
          economy captured the same idea: the market bird flies freely, inside
          a frame that keeps it from flying into the window. The P2P shutdown
          and the Ant capital rule are the same method applied forty years
          later. Run the experiment. Watch what it does to people. Keep what
          works. Kill what preys.
        </p>
        <p>
          Contrast the prevailing Western doctrine. Peter Thiel&rsquo;s 2014
          Wall Street Journal essay, adapted from{" "}
          <em className="text-river-mist">Zero to One</em>, is titled
          &ldquo;Competition Is for Losers&rdquo; and argues that monopoly is
          the condition of every successful business. China&rsquo;s technology
          sector runs the other way: when DeepSeek released its R1 model on 20
          January 2025, it was one of at least eight serious frontier AI labs
          in China, alongside Alibaba&rsquo;s Qwen, ByteDance, Zhipu, Moonshot,
          Baidu, Tencent, and others. On 27 January 2025, Nvidia fell 17
          percent in a single day, erasing roughly $589 to 593 billion in
          market value, the largest one-day loss for any company in history, in
          a selloff widely attributed to DeepSeek&rsquo;s release. The country
          the West calls a monolith runs on brutal internal competition. The
          economy the West calls free is run by men who write essays against
          competing.
        </p>

        {/* ─── ASSESSMENT ─── */}
        <div className="bg-river-deep border-[1.5px] border-korean-red px-6 py-6 my-12">
          <BoxLabel color="red">Assessment · Bottom Line</BoxLabel>
          <p className="mb-4">
            I assess that the &ldquo;social credit score&rdquo; narrative
            functions as projection. The scoring of human beings for credit
            access was built in London and San Francisco, financed into China
            by Goldman Sachs alumni through Cayman Islands vehicles, and shut
            down at scale by exactly one government: China&rsquo;s. The West
            retained the machine, staffed it with its former crisis managers,
            and pointed at Beijing.
          </p>
          <p>
            The recommendation is not admiration. It is precision. Any
            policymaker, fund executive, or journalist repeating the
            citizen-score claim should be asked for the primary Chinese
            regulatory document establishing it. Per the specialists who read
            those documents for a living, no such document exists. The burden
            of proof belongs on the claim, and the claim cannot carry it.
          </p>
        </div>

        {/* ═══ PART II — KOREAN ═══ */}
        <PartHeader
          kicker="Part II · 한국어판 · 기승전결"
          title="The Korean Edition"
          koreanTitle="존재하지 않는 점수: 기승전결로 읽는 검증 보고"
        />

        <div
          className="text-[16px] leading-[1.9]"
          style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
        >
          <KDivider hanja="起" label="기 · 서방에 퍼진 이야기" />
          <p className="mb-5">
            서방 언론에는 오래된 이야기가 하나 있습니다. 중국의 모든 국민이
            하나의 점수를 부여받고, 그 점수가 기차표와 직장과 인생의 문을 열고
            닫는다는 이야기입니다. 이 이야기는 수많은 기사와 방송을 통해
            상식처럼 굳어졌습니다. 그러나 상식이 된 이야기일수록 근거를 물어야
            합니다. 본 보고서는 그 근거를 일차 자료로 확인한 결과를 담았습니다.
            미국 증권거래위원회 공시, 규제 당국의 공식 문서, 법원 판결, 그리고
            해당 제도를 전문적으로 연구해 온 학자들의 분석이 그 자료입니다.
          </p>
          <p className="mb-5">
            돌다리도 두들겨 보고 건너라 했습니다. 본 보고서가 두들긴 돌은 세
            가지입니다. 첫째, 그 점수는 실재하는가. 둘째, 점수로 사람을 재는
            대출 기계는 어디에서 만들어졌는가. 셋째, 그 기계가 사람을 해치기
            시작했을 때 누가 멈추었고 누가 방치했는가.
          </p>

          <KDivider hanja="承" label="승 · 사실의 확인" />
          <p className="mb-5">
            첫째 돌부터 확인합니다. 전 국민에게 부여되는 단일한 수치 점수는
            존재하지 않습니다. 독일 메르카토르 중국연구소의 2022년 2월 분석,
            예일대 로스쿨 폴 차이 중국센터의 다년간 법령 번역 연구, 그리고
            2019년과 2022년의 주요 기술 전문지 검증이 모두 같은 결론에
            이르렀습니다. 실제 제도는 통합된 국민 점수가 아니라, 대부분 기업을
            대상으로 하는 신용 기록과, 법원의 채무 불이행자 명단이라는 채권
            집행 수단으로 이루어져 있습니다. 파편적이고, 전산화 수준도 낮으며,
            개인의 일상을 채점하는 단일 체계와는 거리가 멉니다.
          </p>
          <p className="mb-5">
            민간의 소비자 점수 실험은 실제로 있었습니다. 2015년 중국 인민은행은
            알리바바 계열의 즈마신용과 텐센트 계열사를 포함한 민간 기업 여덟
            곳에 개인 신용평가 시범 사업을 허용했습니다. 그러나 2017년부터
            2018년에 걸쳐 인민은행은 이해상충을 이유로 단 한 곳에도 정식 인가를
            내주지 않았고, 국가 주도의 바이항신용을 대신 설립했습니다. 텐센트의
            소비자 점수는 출시 직후 철회되었고, 즈마신용은 사실상 마일리지
            성격의 우대 제도로 남았습니다. 상업적 국민 점수를 심사하고 거부한
            유일한 기관이 바로 중국의 중앙은행이었다는 사실은, 서방의 이야기와
            정반대의 자리에 놓여 있습니다.
          </p>

          <KDivider hanja="轉" label="전 · 이야기의 반전" />
          <p className="mb-5">
            둘째 돌에서 이야기가 뒤집힙니다. 점수로 사람을 재어 돈을 빌려주는
            기계는 서방 금융이 먼저 만들었습니다. 세계 최초의 개인 간 대출
            회사는 2005년 3월 런던에서 출범한 조파이며, 창업진은 영국 푸르덴셜이
            세운 인터넷 은행 에그 출신이었습니다. 2006년 미국 샌프란시스코의
            프로스퍼는 차입자에게 등급과 평판 자료를 붙여 낯선 이들이 그 사람의
            신용을 값 매기게 했습니다. 중국 최초의 개인 간 대출 회사는 그보다
            늦은 2007년에야 등장했습니다.
          </p>
          <p className="mb-5">
            이 기계를 동쪽으로 옮긴 손길도 기록에 남아 있습니다. 골드만삭스는
            1999년 10월 알리바바의 첫 기관 투자를 주도했고, 알리바바와 텐센트는
            미국 증권거래위원회 공시에 명시된 대로 모두 케이맨 제도에 설립된
            회사입니다. 텐센트의 총재 류츠핑은 골드만삭스 아시아 투자은행
            부문과 매킨지 출신이며, 알리바바의 총재 마이클 에번스는 골드만삭스
            부회장을 지낸 인물입니다. 중국 공산당의 도구라 불리는 기업들의 회사
            등기부와 임원 이력서는 서방 금융의 이름들로 채워져 있습니다.
          </p>
          <p className="mb-5">
            셋째 돌은 가장 무겁습니다. 그 기계가 사람을 해치기 시작하자, 멈춘
            쪽은 중국이었습니다. 2015년 절정기에 육천 곳이 넘던 개인 간 대출
            회사는 단계적 규제 끝에 2020년 11월 영업 기준 영 곳이 되었습니다. 약
            구십만 명에게서 오백억 위안을 끌어모은 이쭈바오 사기의 주범은 2017년
            9월 무기징역을 선고받았습니다. 그리고 2020년 11월 3일, 역사상 최대
            규모였던 앤트그룹의 상장이 거래 개시 며칠 전에 중단되었습니다.
            마윈이 10월 24일 상하이에서 금융 규제를 공개 비판한 직후, 규제
            당국이 공동 대출의 최소 삼십 퍼센트를 자기 자본으로 부담하라는 규정
            초안을 내놓은 데 따른 것입니다. 당시 앤트그룹의 자기 부담은 약 이
            퍼센트에 불과했습니다. 대출의 이익은 회사가 가지고 위험은 은행에
            떠넘기던 구조에, 은행의 책임을 물은 것입니다.
          </p>
          <p className="mb-5">
            같은 시기 서방은 반대의 길을 걸었습니다. 2008년 금융위기 당시 뉴욕
            연방준비은행 총재였던 티머시 가이트너는 2014년 사모펀드 워버그
            핀커스의 사장이 되었고, 그 펀드가 소유한 대부업체 매리너 파이낸스의
            영업 방식은 2018년 7월 워싱턴포스트의 탐사 보도로 세상에
            알려졌습니다. 형편이 어려운 가정에 수표를 우편으로 보내 빚을 지게
            하는 방식이었습니다. 중국이 문을 닫은 기계가 서방에서는 위기를
            관리하던 이들의 손으로 계속 돌아가고 있습니다.
          </p>

          <KDivider hanja="結" label="결 · 강은 스스로 길을 찾는다" />
          <p className="mb-5">
            세 개의 돌을 모두 두들긴 결론은 이렇습니다. 존재하지 않는 점수를
            두려워하라는 이야기는, 실재하는 기계로부터 눈을 돌리게 하는
            이야기였습니다. 사람을 점수로 재는 대출 기계는 서방에서 태어나
            서방의 자본으로 동쪽에 이식되었고, 그것을 국가 차원에서 멈춘 정부는
            지금까지 단 하나뿐입니다.
          </p>
          <p className="mb-5">
            판단의 기준은 감정이 아니라 문서입니다. 전 국민 단일 점수를 규정한
            중국의 일차 법령 문서를 제시할 수 있는 사람은, 그 문서를 직업으로
            읽어 온 연구자들 가운데 아직 아무도 없습니다. 근거를 대야 할 쪽은
            이야기를 퍼뜨린 쪽입니다. 주체강은 남의 지도가 아니라 스스로 확인한
            물길을 따라 흐릅니다. 이 보고서가 그 물길의 돌 하나가 되기를
            바랍니다.
          </p>
        </div>

        {/* ─── SOURCES ─── */}
        <SectionHeader
          korean="참고 자료 — 모든 출처는 공개 자료입니다"
          title="Sources"
        />
        <div className="text-[14px] text-cream-muted leading-[1.8] space-y-3">
          <p>
            <strong className="text-cream">Social credit system:</strong>{" "}
            Vincent Brussee, &ldquo;China&rsquo;s social credit score:
            untangling myth from reality,&rdquo; MERICS, 11 Feb 2022 · Jeremy
            Daum, China Law Translate / Yale Law School Paul Tsai China Center,
            multi-year translations and analyses · Louise Matsakis, WIRED, 2019
            · MIT Technology Review, 2022 · PBOC pilot authorization (2015),
            licensing refusal and Baihang Credit establishment (2017 to 2018).
          </p>
          <p>
            <strong className="text-cream">
              P2P lending origins and China crackdown:
            </strong>{" "}
            Zopa launch, March 2005, founding team ex-Egg (Prudential) ·
            Prosper, San Francisco, 2006 · LendingClub, 2006 to 2007 · PPDAI,
            2007 · Ezubao: Xinhua via CNBC, life sentence for Ding Ning, 12 Sep
            2017; c. 50 billion yuan from c. 900,000 investors ·
            CBIRC/regulatory statements: P2P platforms at zero, Nov 2020.
          </p>
          <p>
            <strong className="text-cream">Ant Group:</strong> IPO prospectus
            and exchange notices, Nov 2020 · Jack Ma Bund Summit speech, 24 Oct
            2020 · draft online micro-lending rules (30 percent joint-loan
            funding floor), 2 Nov 2020 · Shanghai Stock Exchange suspension, 3
            Nov 2020 · Ant H1 2020 revenue mix (credit c. 40 percent), per
            prospectus.
          </p>
          <p>
            <strong className="text-cream">
              Corporate structures and officers:
            </strong>{" "}
            Alibaba Group Holding Ltd SEC filings (Cayman Islands exempted
            company, incorporated 28 Jun 1999; Goldman-led 1999 round; SoftBank
            2000) · Tencent Holdings filings (Cayman Islands) · Martin Lau
            official biography (Goldman Sachs Asia; McKinsey) · Michael Evans
            official biography (Goldman Sachs vice chairman, Feb 2008 to Dec
            2013).
          </p>
          <p>
            <strong className="text-cream">US officials and firms:</strong>{" "}
            Henry Paulson: Goldman chairman and CEO 1999 to 2006; US Treasury
            10 Jul 2006 to 20 Jan 2009; 70+ China visits per Daily Telegraph,
            Jul 2008; Blueprint for a Modernized Financial Regulatory
            Structure, 31 Mar 2008 · Timothy Geithner: NY Fed 2003 to 2009;
            Warburg Pincus president, Mar 2014 · Washington Post, &ldquo;A way
            of monetizing poor people,&rdquo; 1 Jul 2018 (Mariner Finance;
            company disputes characterization) · SEC v. Goldman Sachs (Abacus
            2007-AC1), $550M settlement, 14 Jul 2010 · McKinsey opioid
            settlements: $573M (Feb 2021), $650M DOJ (Dec 2024).
          </p>
          <p>
            <strong className="text-cream">Economic doctrine and AI:</strong>{" "}
            Isabella M. Weber,{" "}
            <em>How China Escaped Shock Therapy</em>, Routledge, 2021 (Chen
            Yun, stones phrase, 1950; birdcage economy) · Peter Thiel,
            &ldquo;Competition Is for Losers,&rdquo; WSJ, 12 Sep 2014 ·
            DeepSeek R1 release, 20 Jan 2025; Nvidia one-day loss of c. $589 to
            593 billion, 27 Jan 2025 (Reuters/LSEG; Forbes), causal attribution
            widely reported and disputed by at least one analyst · G7 PGII,
            2022 · BlackRock-TiL consortium agreement for CK Hutchison ports,
            Mar 2025, $22.8B enterprise value; concessions annulled by
            Panamanian court action by early 2026.
          </p>
          <p className="font-mono text-[12px] pt-2">
            주체강 · JCK-WP-2026-0714 · Unclassified · Prepared by Jesse James ·
            Radical transparency: every entity named in this paper, including
            the author&rsquo;s, is public.
          </p>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div
        className="text-center py-20 px-6 border-t border-sovereign-gold/10"
        style={{
          background: "linear-gradient(180deg, #0d1b2a 0%, #142638 100%)",
        }}
      >
        <div
          className="text-lg font-bold tracking-[6px] text-sovereign-gold mb-4"
          style={{ fontFamily: "var(--font-korean), 'Noto Serif KR', serif" }}
        >
          주체강
        </div>
        <div className="w-[80px] h-[2px] bg-sovereign-gold mx-auto mb-6" />
        <p className="text-[13px] text-cream-muted font-light">
          주체의 흐름을 따라 &nbsp;&middot;&nbsp; Navigate the Current
        </p>
        <p className="text-[11px] text-cream-muted/75 mt-4 max-w-[500px] mx-auto">
          This report is a private strategic intelligence briefing. Every
          factual claim survived a source-level verification pass against SEC
          filings, regulatory records, court outcomes, and first-tier
          journalism. Claims that failed verification were excluded and are
          disclosed in the Method section above.
        </p>
      </div>
    </article>
  )
}
