"use client"

/* ─── serialized-report components ─── */
function SectionLabel({
  num,
  kr,
  children,
}: {
  num: string
  kr: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-20 mb-8 pt-10 border-t border-sovereign-gold/20">
      <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-sovereign-gold mb-3">
        Section {num} ·{" "}
        <span style={{ fontFamily: "'Noto Serif KR', serif" }}>{kr}</span>
      </p>
      <h2 className="font-serif text-[25px] font-bold leading-[1.3] text-cream">
        <span className="font-mono text-[13px] text-cream-muted mr-2">(U)</span>
        {children}
      </h2>
    </div>
  )
}

function KeyJudgment({
  id,
  conf,
  children,
}: {
  id: string
  conf: "High confidence" | "Moderate confidence"
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 py-4 border-b border-cream-muted/15 last:border-b-0">
      <span className="font-mono text-[13px] font-semibold text-sovereign-gold shrink-0 sm:w-[48px] pt-[2px]">
        {id}
      </span>
      <div className="flex-1">
        <p className="text-[15px] leading-relaxed mb-2">{children}</p>
        <span
          className={`inline-block font-mono text-[10px] tracking-[0.14em] uppercase px-2 py-1 border rounded ${
            conf === "High confidence"
              ? "text-sovereign-gold border-sovereign-gold/50"
              : "text-cream-muted border-cream-muted/40"
          }`}
        >
          {conf}
        </span>
      </div>
    </div>
  )
}

function LedgerRow({
  date,
  actor,
  children,
}: {
  date: string
  actor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 py-4 border-b border-cream-muted/15 last:border-b-0">
      <div className="shrink-0 sm:w-[92px]">
        <span className="font-mono text-[13px] font-semibold text-sovereign-gold whitespace-nowrap">
          {date}
        </span>
        <span className="block font-mono text-[10px] tracking-[0.14em] uppercase text-korean-red mt-1">
          {actor}
        </span>
      </div>
      <p className="text-[15px] leading-relaxed mb-0">{children}</p>
    </div>
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

function Indicator({
  kind,
  critical = false,
  children,
}: {
  kind: string
  critical?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="py-4 border-b border-cream-muted/15 last:border-b-0">
      <p className="text-[15px] leading-relaxed mb-0">
        <strong className={critical ? "text-korean-red" : "text-sovereign-gold"}>
          {kind}:
        </strong>{" "}
        {children}
      </p>
    </div>
  )
}

/* ─── main ─── */
export function OsintContent() {
  return (
    <article>
      {/* ═══ MASTHEAD ═══ */}
      <div
        className="px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(170deg, #0d1b2a 0%, #142638 60%, #1b4965 100%)",
        }}
      >
        <div className="max-w-[840px] mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-[34px] font-bold text-sovereign-gold leading-none"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              강
            </span>
            <div>
              <p
                className="text-[19px] font-bold text-sovereign-gold leading-tight"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                주체강
              </p>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-cream-muted">
                Juchegang · Navigate the Current
              </p>
            </div>
            <div className="ml-auto text-right hidden sm:block">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream-muted leading-relaxed">
                OSINT Serialized Report
                <br />
                Serial: 2/OS/070726-26
                <br />
                Product line: 흐름 · The Current
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-river-current/40 border border-river-current/40 mb-10">
            {[
              ["Date of report", "07 JUL 2026"],
              ["Date of information", "17 JUN – 07 JUL 2026"],
              ["Countries", "IR · US · QA · SA · TR · IL · OM · KR"],
              ["Topics", "HORMUZ / SANCTIONS / SUCCESSION / ALLIANCE"],
            ].map(([k, v]) => (
              <div key={k} className="bg-river-deep px-4 py-3">
                <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-cream-muted mb-1">
                  {k}
                </p>
                <p className="font-mono text-[12px] text-sovereign-gold">{v}</p>
              </div>
            ))}
          </div>

          <h1 className="font-serif font-black text-[clamp(26px,4vw,40px)] leading-[1.25] text-cream mb-4">
            <span className="font-mono text-[16px] text-cream-muted mr-2">
              (U)
            </span>
            IRAN–UNITED STATES: Islamabad Memorandum in open breach — Tehran
            enforces Hormuz corridor by fire; Washington revokes oil waiver,
            resumes strikes; twelve million mourn a martyred leader
          </h1>
          <p
            className="text-[15px] text-sovereign-gold leading-relaxed"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            이슬라마바드 양해각서: 서명 20일 만에 공개 파기 국면에 진입하였습니다.
            본 보고서는 검증된 사실만을 기술합니다.
          </p>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="max-w-[720px] mx-auto px-6 py-16 text-[17px] leading-[1.75]">
        {/* ─── BLUF ─── */}
        <div className="bg-river-deep border-[1.5px] border-sovereign-gold px-6 py-6 mb-8">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase mb-3 text-sovereign-gold">
            (U) Bottom Line Up Front
          </div>
          <p className="mb-4 text-[15px] leading-relaxed">
            (U) The 14-point Islamabad Memorandum, signed 17 June 2026 to end
            the war that began 28 February, entered open reciprocal breach on 7
            July. Iranian forces struck three commercial vessels using the
            US-protected southern &ldquo;Omani route&rdquo;: the Qatari LNG
            carrier AL REKAYYAT, the Saudi crude carrier WEDYAN, and a third
            vessel confirmed by a US official. Washington responded within
            hours by revoking OFAC General License X, the oil-sales waiver it
            had issued sixteen days earlier, and by resuming strikes on Iranian
            air-defense, coastal-surveillance, anti-ship-missile, and
            drone-launch sites. Tehran has declared the revocation itself a
            breach and promised &ldquo;decisive measures.&rdquo;
          </p>
          <p className="mb-0 text-[15px] leading-relaxed">
            (U) We assess the memorandum&rsquo;s failure was structural, not
            incidental: relief delivered by revocable license, adjudicated
            unilaterally by one party, priced at near zero by a counterparty
            whose reference case is the 2018 JCPOA withdrawal. Concurrently,
            the war&rsquo;s strategic ledger closed against its authors: the
            largest funeral in Iranian history (12 to 15 million in Tehran, 6
            July, per FT estimate) has consolidated the system the strikes were
            meant to crack, while Washington moves to permanently
            institutionalize its integration with the one belligerent bound by
            nothing: NDAA Section 219 and intelligence-bill Section 622,
            advanced without a floor vote. For Seoul, every element of this
            file is a direct read on the value of an American security
            signature.
          </p>
        </div>

        {/* ─── SECTION 01 ─── */}
        <SectionLabel num="01" kr="핵심 판단">
          Key judgments
        </SectionLabel>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-2 my-8">
          <KeyJudgment id="KJ-1" conf="High confidence">
            (U) A final US-Iran deal within the 60-day window is unlikely. The
            7 July exchange, corridor enforcement by missile, answered by
            waiver revocation and renewed strikes, has converted a negotiating
            pause into a re-escalation track, with talks already suspended for
            the funeral through 9 July.
          </KeyJudgment>
          <KeyJudgment id="KJ-2" conf="High confidence">
            (U) The governing failure is credibility architecture, not intent.
            Sanctions relief issued as General License X was revocable by one
            signature and was revoked in sixteen days; a counterparty that
            expects revocation rationally invests in non-revocable leverage,
            physical control of the strait. Both dynamics are now
            self-reinforcing.
          </KeyJudgment>
          <KeyJudgment id="KJ-3" conf="High confidence">
            (U) The assassination of Khamenei has strengthened, not weakened,
            the Islamic Republic&rsquo;s cohesion over the planning horizon
            that matters. The 12 to 15 million-person Tehran procession,
            history&rsquo;s largest Iranian gathering, functions as a
            legitimacy transfusion; decay of the effect is probable but not on
            any timeline relevant to the 60-day window or the November US
            midterms.
          </KeyJudgment>
          <KeyJudgment id="KJ-4" conf="Moderate confidence">
            (U) A durable armed stalemate, no final deal, no full blockade,
            partial traffic under contested corridor rules, is the most
            probable six-month outcome, punctuated by kinetic exchanges around
            the corridor question. Return to full-scale war is possible but
            constrained by US fuel-market exposure and European escort
            deployments now launching.
          </KeyJudgment>
          <KeyJudgment id="KJ-5" conf="Moderate confidence">
            (U) US regional architecture is inverting: Turkey&rsquo;s position
            is appreciating (Ankara NATO summit, CAATSA relief pledged, F-35s
            &ldquo;certainly&rdquo; considered) while Israel&rsquo;s
            depreciates (excluded from the memorandum, electoral backlash in US
            primaries, majority-unfavorable US polling). Sections 219/622 are
            best understood as an attempt to entrench the relationship in
            statute before the electorate forecloses it, hence their movement
            without debate.
          </KeyJudgment>
          <KeyJudgment id="KJ-6" conf="High confidence">
            (U) Regional middle powers are pricing in reduced US reliability:
            the Saudi-Pakistan mutual-defense pact (Sept 2025) and the
            Saudi-Turkey-Egypt-Pakistan quartet consultations constitute early
            architecture for a post-guarantee order. Iran is the catalyst of
            this architecture, not a member of it.
          </KeyJudgment>
        </div>

        {/* ─── SECTION 02 ─── */}
        <SectionLabel num="02" kr="세부 사항">
          Details: the twenty-day breach ledger
        </SectionLabel>
        <p>
          (U) The memorandum, brokered primarily by Pakistan with Qatari,
          Saudi, Turkish, and Egyptian facilitation, runs fourteen paragraphs;
          VP Vance, its principal US architect, called it &ldquo;a very general
          document&rdquo; of roughly a page and a half. Operative terms:
          immediate and permanent termination of military operations; strait
          traffic restored to pre-war volume within 30 days with Iranian
          de-mining; vessel transit &ldquo;with no charge, for 60 days
          only&rdquo;; Iran-Oman dialogue on future strait administration;
          immediate US Treasury waivers on Iranian crude, products, banking,
          insurance, and transport; frozen funds made &ldquo;fully
          usable&rdquo;; a US-arranged reconstruction framework of at least USD
          300 billion; termination of &ldquo;all types of sanctions&rdquo; on a
          schedule to be agreed; Iranian down-blending of enriched uranium
          under IAEA supervision; a 60-day final-deal window. The document
          contains no enforcement mechanism, no breach adjudicator, and no
          mention of Lebanon, where Israel, excluded from the talks, struck
          Beirut twice during the negotiations.
        </p>
        <p>(U) Chronology of breach, all parties:</p>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-2 my-8">
          <LedgerRow date="17 JUN" actor="Both">
            Trump and Pezeshkian sign remotely; Trump signs at Versailles
            during the G7. Pezeshkian: &ldquo;a historic document and a message
            from a strong Iran.&rdquo;
          </LedgerRow>
          <LedgerRow date="17–18 JUN" actor="Israel">
            Non-signatory Israel strikes Hezbollah positions in Beirut within
            hours; Defense Minister Katz states forces will not withdraw from
            Lebanese territory. Trump, at the G7: Israel &ldquo;shouldn&rsquo;t
            have&rdquo; struck Beirut.
          </LedgerRow>
          <LedgerRow date="20 JUN" actor="Iran">
            Iran declares the strait closed again, citing Israeli action in
            Lebanon as a violation of its deal with Washington, importing a
            third party&rsquo;s war into a bilateral document.
          </LedgerRow>
          <LedgerRow date="21 JUN" actor="US">
            OFAC issues General License X: Iranian crude, petrochemical, and
            product sales authorized through 21 August, dollar transactions
            included, the broadest Iran-sanctions rollback in decades,
            delivered as a revocable license.
          </LedgerRow>
          <LedgerRow date="LATE JUN" actor="Both">
            Traffic partially recovers, one 24-hour period sets a ~20-million
            barrel record, but transits run roughly one-third of the pre-war
            120 to 140/day. Washington expands a protected southern corridor
            along Oman; Tehran insists all transit register on its approved
            northern corridor by Larak Island and warns US interference
            &ldquo;will be met with a rapid and decisive reaction.&rdquo;
          </LedgerRow>
          <LedgerRow date="05 JUL" actor="Iran">
            IRGC patrol boats deploy to block the Omani route. Weekend radio
            warning to shipping, per WSJ audio: &ldquo;Our missiles and drones
            are ready to fire at you.&rdquo; Of 69 transits on 5 to 6 July,
            ~45% use the Iranian corridor, double the Omani route&rsquo;s
            share.
          </LedgerRow>
          <LedgerRow date="06 JUL" actor="US">
            Trump, White House: Iran will &ldquo;make a deal, or we&rsquo;re
            going to finish the job... I don&rsquo;t want to affect 91 million
            people. We can knock down their bridges in one hour. We can knock
            out their energy supply.&rdquo; FM Araghchi replies final-deal
            talks will not begin under threats.
          </LedgerRow>
          <LedgerRow date="06–07 JUL" actor="Iran">
            Three vessels struck in or near Omani waters: AL REKAYYAT (Qatari
            LNG, hit 8 nm east of Limah, fire aboard), WEDYAN (Saudi crude),
            and a third confirmed by a US official; Axios cites US officials on
            at least two IRGC missiles fired at commercial shipping. Qatar
            holds Iran &ldquo;fully legally responsible.&rdquo; Tehran issues
            no official claim; state media says a tanker ignoring
            &ldquo;repeated warnings&rdquo; on the Omani route was hit.
          </LedgerRow>
          <LedgerRow date="07 JUL" actor="US">
            OFAC revokes GL X, issues wind-down GL X1: no new Iranian oil
            purchases from 7 July; existing transactions unwound by 17 July
            into blocked, interest-bearing US accounts. US official: the
            memorandum &ldquo;is entirely performance-based. Iran will only
            reap benefits if they exhibit good behavior.&rdquo; Hours later, US
            strikes resume on Iranian air defenses, coastal surveillance,
            anti-ship cruise missiles, and drone launch sites.
          </LedgerRow>
          <LedgerRow date="07 JUL" actor="Iran">
            Foreign Ministry declares the revocation a breach of the
            memorandum, holds Washington &ldquo;responsible for the
            consequences,&rdquo; and warns of &ldquo;decisive measures to
            protect its interests and national security.&rdquo; Oil prices rise
            on the news. Doha-track talks remain paused until the funeral
            concludes 9 July.
          </LedgerRow>
        </div>

        <p>
          (U) <strong className="text-sovereign-gold">ANALYST COMMENT:</strong>{" "}
          Read the ledger without a flag in your hand and the structure is a
          mirror. Iran shot at civilian crews to enforce a corridor,
          indefensible under any reading of a safe-passage commitment, and
          Qatar and Saudi Arabia said so in the hardest language they have used
          against Tehran since February. Washington answered by demonstrating
          that its concessions have a sixteen-day half-life and its
          &ldquo;performance-based&rdquo; deal has one judge, who is also a
          party. Neither side violated the agreement so much as both sides
          revealed there never was one, only two incompatible readings of the
          same page, signed at dinner.
        </p>

        {/* ─── SECTION 03 ─── */}
        <SectionLabel num="03" kr="신뢰의 결손">
          The license problem
        </SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="16">
            Days General License X survived: issued 21 June, revoked 7 July. It
            had been written to run through 21 August.
          </Stat>
          <Stat n="10">
            Days of wind-down under GL X1; new purchases banned immediately;
            payments to blocked persons routed into blocked US accounts.
          </Stat>
          <Stat n="2018">
            Tehran&rsquo;s reference case: US withdrawal from the JCPOA while
            inspectors certified Iranian compliance.
          </Stat>
        </div>

        <p>
          (U) Relief that can be un-signed is worth, to the counterparty,
          approximately the probability it won&rsquo;t be, and Iran&rsquo;s
          institutional memory sets that probability from 2018. Commercial
          behavior confirmed the pricing: major Western banks did not move
          during the sixteen days, and legal advisories (Gibson Dunn among
          them) catalogued implementation obstacles before the ink dried. A
          deal in which one party is prosecutor, judge, and beneficiary of the
          performance assessment is a probation order, and Tehran&rsquo;s
          clerical establishment, which publicly opposed reopening the strait
          at all, reads it as exactly that.
        </p>
        <p>
          (U) <strong className="text-sovereign-gold">ANALYST COMMENT:</strong>{" "}
          The game-theoretic cost lands on every future American negotiator, on
          every file. An actor whose commitments carry no information can
          neither reassure nor credibly threaten; the counterparty prices both
          at noise and invests in what can&rsquo;t be revoked. In the strait,
          the non-revocable asset is the waterway itself. That is the strategic
          logic of corridor enforcement: it does not justify missiles into an
          LNG carrier&rsquo;s engine room, but it predicts them.
        </p>

        {/* ─── SECTION 04 ─── */}
        <SectionLabel num="04" kr="장례식의 전략적 의미">
          Twelve million mourners as strategic data
        </SectionLabel>
        <p>
          (U) Iran is concluding the largest funeral in its history for Ali
          Khamenei, killed 28 February in the joint strike that opened the war
          alongside his daughter, son-in-law, daughter-in-law, and 14-month-old
          granddaughter. Ceremonies began 4 July at Tehran&rsquo;s Grand
          Mosalla; the Financial Times estimated the 6 July Tehran procession
          at 12 to 15 million, surpassing Khomeini&rsquo;s 1989 funeral; the
          body moved to Qom on 7 July with state television showing hundreds of
          thousands walking to Jamkaran Mosque; rites conclude 9 July, the same
          date paused negotiations are due to resume, now under re-imposed
          sanctions. Banners along the route named US and Israeli officials for
          vengeance; mourners stoned a Trump billboard; the successor,
          Khamenei&rsquo;s son Mojtaba, has not appeared in public since
          appointment, leaving the crowds themselves as the system&rsquo;s
          proof of life.
        </p>
        <p>
          (U) Composition, not scale, is the intelligence. Independent
          reporting from inside the processions described diversity of dress
          and observance inconsistent with a bused-in loyalist frame, and
          mourners explicitly casting Khamenei as the man who &ldquo;took on
          two nuclear powers.&rdquo; Balance requires the rest of the picture:
          this same system violently suppressed protests in January 2026 with a
          death toll still unestablished, and Chatham House&rsquo;s assessment
          is that ordinary Iranians are relieved at the ceasefire and skeptical
          of the deal. Rally effects decay. But within the sixty-day window and
          through the US midterms, the bet that decapitation would crack the
          Islamic Republic has returned its verdict. Netanyahu&rsquo;s
          response, that the crowds are a &ldquo;minority,&rdquo; restates the
          original analytical error after its refutation marched past the
          camera.
        </p>

        <div className="border-l-[3px] border-sovereign-gold bg-river-current/30 pl-7 pr-5 py-5 my-10">
          <p
            className="text-[17px] leading-[1.8] text-river-mist mb-3"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            순교의 문법을 가진 문명의 지도자를 암살하면, 적을 제거하는 것이
            아니라 순교자를 창조하는 것입니다.
          </p>
          <p className="font-serif text-[17px] italic leading-[1.5] text-cream-muted mb-0">
            Assassinate the leader of a civilization whose devotional grammar
            is martyrdom, and you do not remove an enemy. You manufacture a
            martyr.
          </p>
        </div>

        {/* ─── SECTION 05 ─── */}
        <SectionLabel num="05" kr="앙카라 전환">
          The Ankara inversion and the quartet
        </SectionLabel>
        <p>
          (U) The tanker fires burned as NATO leaders convened in Ankara on 7
          July. Seated beside Erdo&#287;an, Trump pledged to lift the CAATSA
          sanctions imposed over the S-400 purchase, the legal bar to F-35
          transfers, and said he would &ldquo;certainly consider&rdquo; the
          sale; Erdo&#287;an: &ldquo;Trump promised us 5 F-35s and he always
          keeps his promises.&rdquo; A Likud minister answered by calling
          Erdo&#287;an a &ldquo;grotesque hybrid of Hitler and Sinwar.&rdquo;
          The Times of Israel&rsquo;s own framing of the day: the summit and
          the F-35 shift &ldquo;boost Turkey&rsquo;s standing, as slumping
          Israel sees clout erode.&rdquo;
        </p>
        <p>
          (U) The legal asymmetry beneath the photograph: Turkey is a NATO
          member whose territory is explicitly covered by Articles 5 and 6; an
          armed attack on Turkey legally obligates an American response. Israel
          is a Major Non-NATO Ally, a designation rather than a treaty; no
          US-Israel mutual defense agreement exists. Any Israeli strike on
          Turkey would therefore place America&rsquo;s binding obligation on
          Turkey&rsquo;s side. Meanwhile the region builds without Washington:
          the Saudi-Pakistan Strategic Mutual Defense Agreement (17 September
          2025) carries a NATO-style mutual-defense clause reportedly extending
          Pakistan&rsquo;s nuclear umbrella over Riyadh; foreign ministers of
          Saudi Arabia, Turkey, Egypt, and Pakistan have met repeatedly since
          the war (deputies Islamabad 14 April; ministers Antalya 17 April),
          with Qatari interest reported through May. Participants reject the
          &ldquo;Islamic NATO&rdquo; label and Riyadh rebuffed formal Turkish
          accession in February, the format is consultative, but the direction
          is a hedge against a guarantee now observed to have a sixteen-day
          half-life.
        </p>

        {/* ─── SECTION 06 ─── */}
        <SectionLabel num="06" kr="제도화 경쟁">
          The institutionalization race: Sections 219 and 622
        </SectionLabel>
        <p>
          (U) While the memorandum collapsed, two provisions advanced in
          Washington that would bind the United States permanently to the one
          belligerent that signed nothing. NDAA FY2027 Section 219 (formerly
          224; Senate companion 1217) establishes a US-Israel Defense
          Technology Cooperation Initiative under a Pentagon &ldquo;executive
          agent&rdquo; charged with integrating the two defense industrial
          bases across missile defense, counter-drone, AI, quantum, cyber,
          autonomy, directed energy, and biotechnology, with &ldquo;data
          fusion&rdquo; language piping US sensor and intelligence feeds toward
          Israeli systems. Section 622 of the Senate intelligence authorization
          (Cotton) mandates expanded intelligence sharing with Israel and
          limits the president&rsquo;s own authority to restrict it. Netanyahu,
          in a June letter, called the framework &ldquo;my plan.&rdquo; The
          House Rules Committee refused the Massie-Khanna strip amendment a
          floor vote on 29 June; AIPAC&rsquo;s own summary counts $750 million
          in cooperative funding; and the DIA, per public reporting, rates
          Israeli intelligence operations against US defense personnel at its
          highest, &ldquo;critical,&rdquo; threat level, with documented
          surveillance-software incidents.
        </p>
        <p>
          (U) The urgency has a visible electoral cause. In late June,
          Democratic primary voters removed incumbents targeted over Israel
          aid: New York (Avila Chevalier over Espaillat; Lander taking
          Goldman&rsquo;s seat; Valdez winning a third) and Colorado on 30
          June, where 29-year-old Melat Kiros unseated fifteen-term Rep. Diana
          DeGette declaring &ldquo;we will not wait... to reject corporate PACs
          and AIPAC.&rdquo; Results were not a sweep: pro-Israel Phil Weiser
          won the Colorado gubernatorial primary the same night, and
          Hickenlooper beat an arms-embargo challenger 57-43. But Pew&rsquo;s
          2025 survey found a first-ever US majority unfavorable toward Israel,
          sharpest among Republicans and evangelicals under fifty, and Sanders
          cites 16% support for unrestricted arming.{" "}
          <strong className="text-sovereign-gold">ANALYST COMMENT:</strong>{" "}
          Entrench in permanent statute what the electorate no longer supports,
          before it elects a Congress that won&rsquo;t. That is the race, and
          it is why the amendment could not be permitted a recorded vote. If
          conference does not deliver 219/622 before November, the window
          likely closes.
        </p>

        {/* ─── SECTION 07 ─── */}
        <SectionLabel num="07" kr="한반도 함의">
          Peninsula relevance: what Seoul should read in this file
        </SectionLabel>
        <p>
          (U) <strong className="text-cream">Energy exposure.</strong> Roughly
          seventy percent of the Republic of Korea&rsquo;s crude imports
          transit the Strait of Hormuz. Every corridor rule, registration fee,
          and escort-mission design now being contested between Tehran, Muscat,
          and Washington is a direct input to Korean industrial cost structure,
          and Seoul is receiving the outcome, not shaping it.
        </p>
        <p>
          (U) <strong className="text-cream">The signature discount.</strong>{" "}
          The ROK-US Mutual Defense Treaty of 1953 is a real treaty, which is
          more than Israel holds. Yet this file shows a Washington that exited
          a certified-compliant nuclear deal in 2018, revoked its own
          sixteen-day-old waiver in 2026, and is simultaneously granting a
          non-treaty partner, over its own DIA&rsquo;s counterintelligence
          objections, an integration depth never offered to Seoul in
          seventy-three years of alliance. Any Korean planner pricing extended
          deterrence, OPCON transition, or nuclear latency options will read
          the license problem as a general property of the guarantor, not an
          Iranian special case. The Saudi-Pakistani hedge is what pricing that
          property looks like; the peninsula should expect the same logic to
          circulate in its own debates.
        </p>
        <p>
          (U) <strong className="text-cream">The martyrdom lesson travels.</strong>{" "}
          Decapitation doctrine failed against a system with deep legitimacy
          reserves and a succession mechanism, producing consolidation instead
          of collapse. Planners who model Pyongyang, a harder, more opaque
          system with its own dynastic succession grammar, on the assumption
          that leadership strikes crack rather than consolidate should study
          the 6 July procession frame by frame.
        </p>

        {/* ─── SECTION 08 ─── */}
        <SectionLabel num="08" kr="오류 정정">
          Discrepancy log: source commentary vs. verified record
        </SectionLabel>
        <p>
          (U) This report draws analytical framing from a 7 July Duran
          interview (R. Barnes), graded C-3 in the source annex: the strategic
          frame is substantially sound; the following factual specifics
          required correction against primary reporting. Precision is the price
          of being taken seriously by hostile readers.
        </p>

        <div className="my-10">
          <div className="overflow-x-auto border border-river-current/40 rounded">
            <table className="w-full border-collapse text-[14px] min-w-[640px]">
              <thead>
                <tr>
                  <th className="font-mono text-[11px] tracking-[0.14em] uppercase text-left text-sovereign-gold border-b-[1.5px] border-sovereign-gold px-4 py-3 bg-river-deep w-[42%]">
                    Claim as broadcast
                  </th>
                  <th className="font-mono text-[11px] tracking-[0.14em] uppercase text-left text-sovereign-gold border-b-[1.5px] border-sovereign-gold px-4 py-3 bg-river-deep">
                    Verified record
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "“Four attacks on tankers”",
                    "Three vessels verified struck: AL REKAYYAT, WEDYAN, and a third confirmed by a US official.",
                  ],
                  [
                    "“Six days” of sanctions relief",
                    "Sixteen days: GL X in force 21 June – 7 July. Sixteen is indictment enough.",
                  ],
                  [
                    "Funeral of “30–50 million... half the country”",
                    "12–15 million verified in Tehran on 6 July (FT), largest in Iranian history. Nationwide multi-day aggregates unverified.",
                  ],
                  [
                    "“Islamic NATO” with Iran as a founding corner",
                    "Verified quartet: Saudi Arabia, Turkey, Egypt, Pakistan, which condemned Iran's Gulf strikes in March. Iran is catalyst, not member.",
                  ],
                  [
                    "Trump “wants to be compared to Attila... Hitler, Stalin”",
                    "Per Haberman & Swan's Regime Change (23 June): Trump produced a two-page document claiming his power exceeded theirs, authored by golf caddies of Gary Player, presented by Trump as the work of “a historian,” then posted to Truth Social.",
                  ],
                  [
                    "“Merging the militaries and intelligence agencies”",
                    "Sec. 219 integrates defense industrial bases; Sec. 622 mandates intelligence sharing and limits presidential discretion to curb it. Not a joint command, and the precise text sustains every constitutional objection without embellishment.",
                  ],
                  [
                    "Clinical claims re: any leader's cognition",
                    "Diagnosis is not analysis. The behavioral record, the 2018 JCPOA exit under certified compliance, the abandoned Alaska framework, a sixteen-day license, establishes the reliability deficit without neurology.",
                  ],
                ].map(([claim, record], i) => (
                  <tr key={i} className="align-top">
                    <td className="border-b border-cream-muted/20 px-4 py-3 text-korean-red leading-relaxed">
                      {claim}
                    </td>
                    <td className="border-b border-cream-muted/20 px-4 py-3 text-cream-muted leading-relaxed">
                      {record}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-cream-muted mt-3">
            (U) Discrepancy log · 2/OS/070726-26 · Annex A
          </p>
        </div>

        {/* ─── SECTION 09 ─── */}
        <SectionLabel num="09" kr="징후 및 경보">
          Indicators &amp; warnings: next 60 days
        </SectionLabel>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-2 my-8">
          <Indicator kind="Escalation" critical>
            Iranian strike on a US-flagged or US Navy asset; US strike on
            Iranian port or energy-export infrastructure; formal re-closure of
            the strait to all traffic; Iranian action in defense of Hezbollah
            drawing US response in Lebanon.
          </Indicator>
          <Indicator kind="Collapse marker" critical>
            Tehran&rsquo;s declared precondition, no deal absent total Israeli
            withdrawal from Lebanon, hardening into formal negotiating text,
            fusing a front Washington does not control into a deal it cannot
            then deliver.
          </Indicator>
          <Indicator kind="Stabilization">
            European mine-clearing and escort mission (UK/France-led, 10+ NATO
            contributors) operating without Iranian interdiction; the Doha
            communications mechanism finally stood up; any Omani
            co-administration proposal gaining US technical acceptance.
          </Indicator>
          <Indicator kind="Reliability test">
            Any restoration of GL X-type relief in statutory or multi-party
            form, versus another unilateral license, which signals the deficit
            is policy.
          </Indicator>
          <Indicator kind="Institutionalization test">
            Sections 219/622 in the NDAA conference report before November
            (entrenchment achieved) versus stripped or stalled (electoral shift
            outrunning the lobby). Watch for a recorded vote; its absence is
            the signal.
          </Indicator>
          <Indicator kind="Succession tell">
            First public appearance of Mojtaba Khamenei, or continued absence
            past the 40-day mourning rites, the clearest single indicator of
            internal consolidation versus managed regency.
          </Indicator>
          <Indicator kind="Peninsula echo">
            ROK commentary linking Hormuz corridor fees to strategic petroleum
            reserve policy, or renewed mainstream Seoul debate on indigenous
            deterrence citing US guarantee reliability.
          </Indicator>
        </div>

        {/* ─── SOURCE ANNEX ─── */}
        <div className="mt-16 pt-10 border-t border-sovereign-gold/20">
          <h2 className="font-serif text-[22px] font-bold text-cream mb-5">
            (U) Source annex &amp; analytic standards
          </h2>
          <p className="text-[14px] text-cream-muted leading-[1.8] mb-4">
            (U){" "}
            <strong className="text-cream">
              Primary and independent sources:
            </strong>{" "}
            full 14-point Islamabad Memorandum text (senior US official via NBC
            News; published by President Pezeshkian); OFAC General Licenses X
            (21 to 22 Jun) and X1 (7 Jul); UKMTO incident reporting 6 to 7 Jul;
            Qatari and Saudi foreign ministry statements 7 Jul; CNN, Axios,
            NPR, Al Jazeera, AGBI, Iran International, Times of Israel
            reporting 6 to 7 Jul (tanker strikes, waiver revocation, resumed US
            strikes, Ankara summit); White House remarks 6 Jul; Iranian Foreign
            Ministry via IRIB 7 Jul; Kpler and Windward transit data; Financial
            Times crowd estimate and AP/Reuters/CNN funeral coverage 4 to 7
            Jul; Gibson Dunn client alert; Quincy Institute &ldquo;Cooperation
            Without Oversight&rdquo;; Human Rights Watch analysis of Sec. 219
            (16 Jun); Military.com and Common Dreams on the Massie-Khanna
            amendment and Sec. 622; AIPAC FY27 NDAA memo; US-Israel FUTURES Act
            legislative record; Haberman &amp; Swan, Regime Change (S&amp;S, 23
            Jun 2026); MEMRI I&amp;A 1907 and Defence Security Asia on the SMDA
            and quartet; Forward/Al Jazeera/CPR/JPost/ABC on the June
            primaries; Pew Research 2025 Israel favorability; Chatham House (S.
            Vakil) via NPR, 5 Jul.
          </p>
          <p className="text-[14px] text-cream-muted leading-[1.8]">
            (U) <strong className="text-cream">Source grading</strong>{" "}
            (Admiralty scale): official texts and OFAC instruments A-1; wire
            and UKMTO incident reporting B-2; belligerent self-reporting C-3
            and flagged; Duran/Barnes interview of 7 Jul graded C-3,
            analytically directional, factually corrected per Annex A.
            Judgments follow ICD 203 confidence conventions; this product
            asserts nothing sourced solely to commentary. All figures current
            as of 07 JUL 2026, a fast-moving date. Companion products: iPurpose
            Strategic Briefings{" "}
            <a
              href="/briefings/mirage-shield"
              className="text-sovereign-gold hover:underline underline-offset-4"
            >
              &#8470;01 (&ldquo;The Mirage of the Impenetrable Shield&rdquo;)
            </a>{" "}
            and{" "}
            <a
              href="/briefings/reliability-deficit"
              className="text-sovereign-gold hover:underline underline-offset-4"
            >
              &#8470;02 (&ldquo;The Reliability Deficit&rdquo;)
            </a>
            .
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
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          주체강
        </div>
        <div className="w-[80px] h-[2px] bg-sovereign-gold mx-auto mb-6" />
        <p className="text-[13px] text-cream-muted font-light">
          Navigate the Current &nbsp;&middot;&nbsp; juchegang.ca
        </p>
        <p className="font-mono text-[11px] text-cream-muted/60 mt-4">
          2/OS/070726-26 &middot; &copy; 2026 &middot; Reproduction with
          attribution permitted
        </p>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-sovereign-gold/60 mt-6">
          Unclassified // Open Source // Rel to All · 공개 자료
        </p>
      </div>
    </article>
  )
}
