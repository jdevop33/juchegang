"use client"

/* ─── shared document components ─── */
function SectionHead({
  num,
  children,
}: {
  num: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-20 mb-8 pt-10 border-t border-sovereign-gold/20">
      <h2 className="font-display text-[26px] font-bold leading-[1.3] text-cream">
        <span className="font-mono text-[15px] text-sovereign-gold mr-4">
          {num}
        </span>
        {children}
      </h2>
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
      <div className="shrink-0 sm:w-[86px]">
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

function Correction({ claim, children }: { claim: string; children: React.ReactNode }) {
  return (
    <div className="py-4 border-b border-cream-muted/15 last:border-b-0">
      <p className="text-[15px] leading-relaxed mb-1">
        <span className="text-korean-red font-semibold">&ldquo;{claim}&rdquo;</span>
      </p>
      <p className="text-[15px] leading-relaxed text-cream-muted mb-0">{children}</p>
    </div>
  )
}

function Falsifier({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-4 border-b border-cream-muted/15 last:border-b-0">
      <p className="text-[15px] leading-relaxed mb-0">
        <strong className="text-sovereign-gold">{title}</strong>
        <span className="block mt-1 text-cream-muted">{children}</span>
      </p>
    </div>
  )
}

/* ─── main ─── */
export function ReliabilityDeficitContent() {
  return (
    <article>
      {/* ═══ HERO ═══ */}
      <div
        className="min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0d1b2a 0%, #142638 55%, #1b4965 100%)",
        }}
      >
        <div className="relative z-10 flex flex-col items-center max-w-[840px]">
          <div className="font-mono text-[11px] tracking-[0.28em] text-sovereign-gold mb-10 uppercase">
            iPurpose · Strategic Briefing №02 · The Islamabad Memorandum · 7 July 2026
          </div>

          <h1 className="font-display font-black text-[clamp(36px,6vw,62px)] leading-[1.12] mb-8">
            The Reliability Deficit
          </h1>

          <p className="text-[16px] text-cream-muted leading-relaxed max-w-[680px] mb-10">
            On 17 June 2026, the United States and Iran signed a fourteen-point
            memorandum to end a war. Twenty days later, with tankers burning
            off the Omani coast, the oil waiver revoked, American strikes
            resuming, and twelve million mourners in the streets of Tehran,
            every operative clause is contested. This briefing reconstructs the
            collapse ledger, corrects the loudest claims on all sides, and
            names the deficit no signature can fix: nobody believes the other
            side will still be honoring the document in thirty days.
          </p>

          <div className="w-[80px] h-[2px] bg-sovereign-gold mb-8" />

          <div className="font-mono text-[11px] text-cream-muted tracking-[0.18em] uppercase">
            iPurpose Research · Open Source · Defense professionals and citizens of all nations
          </div>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-[17px] leading-[1.75]">
        {/* ─── EXEC SUMMARY ─── */}
        <div className="bg-river-deep border-[1.5px] border-sovereign-gold px-6 py-6 mb-8">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase mb-3 text-sovereign-gold">
            Executive Summary
          </div>
          <p className="mb-4 text-[15px] leading-relaxed">
            The Islamabad Memorandum, brokered primarily by Pakistan, signed
            remotely by Presidents Trump and Pezeshkian on 17 June while Trump
            dined at Versailles, traded an immediate end to hostilities,
            reopening of the Strait of Hormuz, release of frozen Iranian
            assets, a $300 billion reconstruction framework, and sweeping
            sanctions waivers for Iranian commitments on nuclear down-blending
            and safe passage. It began failing within twenty-four hours and
            entered open breach this week. Iran, insisting all transit register
            on its approved northern corridor, has struck three tankers using
            the US-protected &ldquo;Omani route&rdquo;: a Qatari LNG carrier, a
            Saudi crude carrier, and a third vessel confirmed by a US official.
            Washington answered on 7 July by revoking General License X, the
            oil-sales authorization it issued sixteen days earlier, and
            launching new strikes on Iranian air defenses and anti-ship
            systems. Tehran calls the revocation itself a breach and promises
            &ldquo;decisive measures.&rdquo;
          </p>
          <p className="mb-0 text-[15px] leading-relaxed">
            Three structural findings emerge. First, the memorandum&rsquo;s own
            architecture guaranteed this: relief delivered by revocable
            Treasury license rather than statute is relief the other side
            correctly prices at near zero, and a
            &ldquo;performance-based&rdquo; deal in which one party is sole
            judge of performance is not a deal but a probation order. Second,
            the war has produced the opposite of its stated objective: the
            largest funeral gathering in Iranian history, an estimated twelve
            to fifteen million people in Tehran on 6 July, has consolidated
            rather than cracked the Islamic Republic. Third, while the deal
            collapses, Washington is racing to institutionalize the
            relationship most responsible for its collapse: NDAA Section 219
            and intelligence-bill Section 622 would bind US defense industry
            and intelligence flows to Israel at a depth granted to no treaty
            ally, advanced without floor debate, over a DIA counterintelligence
            assessment rating Israeli espionage against US defense personnel at
            the highest threat level, and against a visible electoral revolt in
            both parties.
          </p>
        </div>

        {/* ─── §01 ─── */}
        <SectionHead num="§01">The document itself</SectionHead>
        <p>
          Strip away the theater and the Islamabad Memorandum is fourteen
          paragraphs. Vice President Vance, who did much of the work, called it
          &ldquo;a very general document&rdquo; roughly a page and a half long.
          Its operative core: immediate and permanent termination of military
          operations in the war that began 28 February; commercial traffic
          through the Strait of Hormuz restored to pre-war volume within thirty
          days, with Iran de-mining and vessels transiting &ldquo;with no
          charge, for 60 days only&rdquo;; Iran to negotiate the strait&rsquo;s
          future administration with Oman and the littoral states; the US to
          issue immediate Treasury waivers for Iranian crude, petrochemicals,
          banking, insurance, and transport; frozen Iranian funds made
          &ldquo;fully usable&rdquo;; a US-led reconstruction plan of at least
          $300 billion; termination of &ldquo;all types of sanctions&rdquo; on
          a schedule to be agreed; Iranian reaffirmation that it will not build
          nuclear weapons, with down-blending of its enriched stockpile under
          IAEA supervision; and a sixty-day window to negotiate a final deal.
        </p>
        <p>
          Note what the document does not contain. No enforcement mechanism. No
          agreed adjudicator of breach. No resolution of the strait&rsquo;s
          governance, only an agreement to talk to Oman about it. No mention of
          Lebanon, where Israel, excluded from the negotiations entirely,
          bombed Beirut twice while they were underway and whose defense
          minister has declared Israeli forces will hold territory to the
          Litani. The memorandum ended a war between two parties to a conflict
          that has at least three.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="14">
            Paragraphs in the memorandum, versus 150 pages in the JCPOA it
            distantly echoes. Vance: &ldquo;a very general document.&rdquo;
          </Stat>
          <Stat n="$300B+">
            Reconstruction and development framework the US committed to
            arrange with regional partners, mechanism due within 60 days
          </Stat>
          <Stat n="60 days">
            Negotiating window for a final deal, and the exact lifespan of
            Iran&rsquo;s toll-free transit commitment. The clocks are the same
            clock.
          </Stat>
        </div>

        <p>
          That last symmetry is the tell. Iran granted free passage for
          precisely the sixty days of final-deal negotiation, having said
          publicly, through First Vice President Aref and a New York Times
          headline that captured it exactly, that the strait won&rsquo;t have
          &ldquo;tolls&rdquo; but it will have &ldquo;fees.&rdquo; Washington
          signed a document whose plain text contemplates Iranian-administered
          maritime services, then spent the following three weeks running
          tankers down a US-protected corridor along the Omani shore
          specifically to avoid Iranian registration. Both sides signed the
          same page and read different documents. Everything since has been the
          collision of those two readings.
        </p>

        {/* ─── §02 ─── */}
        <SectionHead num="§02">The collapse ledger</SectionHead>
        <p>
          A deal&rsquo;s health is measured in behavior, not communiqu&eacute;s.
          The following is the verified sequence, with each party&rsquo;s
          contribution to the breach recorded against the date. It is not a
          story of one villain; it is a story of a structure that punished
          compliance and rewarded hedging.
        </p>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-2 my-8">
          <LedgerRow date="17 Jun" actor="Both">
            Trump and Pezeshkian sign remotely; Trump signs at the Palace of
            Versailles during the G7. Pezeshkian calls it &ldquo;a historic
            document and a message from a strong Iran.&rdquo;
          </LedgerRow>
          <LedgerRow date="17–18 Jun" actor="Israel">
            Israel, not a party, strikes Hezbollah positions in Beirut within
            hours of the announcement, having bombed Beirut twice during the
            negotiations. Defense Minister Katz states Israel will not withdraw
            from Lebanese territory. Trump, at the G7: Israel &ldquo;shouldn&rsquo;t
            have&rdquo; struck Beirut.
          </LedgerRow>
          <LedgerRow date="20 Jun" actor="Iran">
            Iran declares the strait closed again, citing Israeli strikes in
            Lebanon as a violation of its deal with the US, importing
            Israel&rsquo;s war into a document Israel never signed.
          </LedgerRow>
          <LedgerRow date="21 Jun" actor="US">
            Treasury issues General License X: production, delivery, and sale
            of Iranian crude, petrochemicals, and products authorized through
            21 August, dollar transactions included. The broadest rollback of
            Iran sanctions in decades, delivered as a revocable license, not
            law.
          </LedgerRow>
          <LedgerRow date="Late Jun" actor="US / Iran">
            Traffic recovers, with a record ~20 million barrels exiting the
            strait in one 24-hour period, but transit counts remain roughly a
            third of the pre-war 120 to 140 vessels a day. The US expands and
            protects the southern &ldquo;Omani route,&rdquo; letting shippers
            bypass Iranian registration; Iran insists only its approved
            northern corridor by Larak Island is safe, and warns interference
            by US forces &ldquo;will be met with a rapid and decisive
            reaction.&rdquo;
          </LedgerRow>
          <LedgerRow date="5 Jul" actor="Iran">
            The IRGC deploys patrol boats to block the Omani route. Weekend
            audio warning to shipping, per the Wall Street Journal: &ldquo;Our
            missiles and drones are ready to fire at you.&rdquo; Of 69 recorded
            transits on 5 to 6 July, about 45% use the Iranian northern
            corridor, more than double the Omani route&rsquo;s share.
          </LedgerRow>
          <LedgerRow date="6 Jul" actor="US">
            Trump, at the White House: Iran will &ldquo;make a deal, or
            we&rsquo;re going to finish the job... I&rsquo;d rather make a
            deal, because I don&rsquo;t want to affect 91 million people. We
            can knock down their bridges in one hour. We can knock out their
            energy supply.&rdquo; Foreign Minister Araghchi answers that
            final-deal talks will not begin if threats continue.
          </LedgerRow>
          <LedgerRow date="6–7 Jul" actor="Iran">
            Three commercial vessels are struck in or near Omani waters: the
            Qatari LNG carrier Al Rekayyat, hit and set afire eight nautical
            miles off Limah; the Saudi crude carrier Wedyan; and a third vessel
            confirmed by a US official. Axios, citing US officials: the IRGC
            fired at least two missiles at commercial ships. Qatar holds Iran
            &ldquo;fully legally responsible.&rdquo; Iran issues no official
            claim; state media says a tanker was hit &ldquo;after ignoring
            repeated warnings&rdquo; while using the Omani route.
          </LedgerRow>
          <LedgerRow date="7 Jul" actor="US">
            OFAC revokes General License X, replacing it with wind-down License
            X1: no new Iranian oil purchases from 7 July, existing transactions
            unwound by 17 July, payments to blocked persons into blocked US
            accounts. A US official: the memorandum &ldquo;is entirely
            performance-based. Iran will only reap benefits if they exhibit
            good behavior.&rdquo; Hours later, US strikes resume against
            Iranian air defenses, coastal surveillance, anti-ship cruise
            missiles, and drone launch sites.
          </LedgerRow>
          <LedgerRow date="7 Jul" actor="Iran">
            The Foreign Ministry condemns the revocation as a breach of the
            Islamabad Memorandum, holds Washington &ldquo;responsible for the
            consequences,&rdquo; and warns Iran &ldquo;will take decisive
            measures to protect its interests and national security.&rdquo; Oil
            prices jump on the news. The diplomatic track was already paused
            for the funeral, due to conclude 9 July.
          </LedgerRow>
        </div>

        <p>
          Read the ledger cold and the pattern is symmetrical escalation around
          one unresolved question: who administers the strait. Iran shot at
          ships to enforce a corridor. That is indefensible under any reading
          of safe-passage commitments, and Qatar and Saudi Arabia, the Gulf
          states most invested in de-escalation, said so in the hardest
          language they have used against Tehran since the war. But
          Washington&rsquo;s chosen instrument of response deserves equal
          scrutiny, because it is the instrument that decides whether any
          future deal is possible.
        </p>

        {/* ─── §03 ─── */}
        <SectionHead num="§03">
          The license problem: relief that can be un-signed
        </SectionHead>
        <p>
          The memorandum&rsquo;s sanctions relief arrived as OFAC General
          License X. Sixteen days later it left as General License X1. No
          congressional action, no treaty process, no notice period beyond a
          ten-day commercial wind-down. That is the entire mechanism: a
          signature that one official can un-sign.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="16">
            Days General License X survived: issued 21 June, revoked 7 July.
            The waiver had been written to run through 21 August.
          </Stat>
          <Stat n="10">
            Days of wind-down under License X1; new purchases banned
            immediately, payments routed to blocked, interest-bearing US
            accounts
          </Stat>
          <Stat n="2018">
            The precedent Tehran prices in: US withdrawal from the JCPOA, a
            deal Iran was certified compliant with at the time
          </Stat>
        </div>

        <p>
          This is the reliability deficit in its purest form. Sanctions relief
          that can be revoked at will is, from the counterparty&rsquo;s
          perspective, worth approximately the probability that it won&rsquo;t
          be, and Iran&rsquo;s institutional memory assigns that probability
          from the 2018 JCPOA withdrawal, executed while international
          inspectors certified Iranian compliance. Law firms advising
          commercial clients said the quiet part in writing: Gibson
          Dunn&rsquo;s guidance on the memorandum catalogued the
          &ldquo;obstacles to implementing its promised sanctions relief&rdquo;
          before the ink dried, and no major Western bank moved. When relief is
          structured so that only fools rely on it, the counterparty&rsquo;s
          rational strategy is to bank leverage instead, which is precisely
          what corridor enforcement in the strait is. This does not excuse
          missiles into LNG carriers. It explains why a state that expects the
          license to vanish invests in the one asset that can&rsquo;t be
          revoked: physical control of the waterway.
        </p>
        <p>
          The &ldquo;performance-based&rdquo; framing completes the trap. A
          deal in which one party is prosecutor, judge, and beneficiary of the
          performance assessment is not a contract; it is a probation order,
          and Tehran&rsquo;s clerical establishment, which publicly opposed
          reopening the strait and demanded the nuclear file stay off the
          table, reads it as one. Game theory has a name for negotiating
          reputations like this: an actor whose commitments carry no
          information can neither reassure nor credibly threaten, because the
          counterparty prices both at noise. Every future American negotiator,
          on any file, in any region, inherits that discount.
        </p>

        {/* ─── §04 ─── */}
        <SectionHead num="§04">
          Twelve million mourners: the funeral as strategic data
        </SectionHead>
        <p>
          While the deal collapsed, Iran buried Ali Khamenei, killed on 28
          February in the joint strike that opened the war, along with his
          daughter, son-in-law, daughter-in-law, and fourteen-month-old
          granddaughter. The state funeral that began 4 July at Tehran&rsquo;s
          Grand Mosalla is the largest in the Islamic Republic&rsquo;s history.
          The Financial Times estimated the 6 July Tehran procession at twelve
          to fifteen million people. The body moved to Qom on 7 July, where
          state television showed hundreds of thousands walking to Jamkaran
          Mosque; ceremonies conclude 9 July, after which the paused
          negotiations are due to resume.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="12–15M">
            Financial Times estimate of the 6 July Tehran procession,
            surpassing Khomeini&rsquo;s 1989 funeral as the largest in Iranian
            history
          </Stat>
          <Stat n="28 Feb">
            Date of the strike that killed Khamenei and four family members and
            opened the war the memorandum tried to close
          </Stat>
          <Stat n="9 Jul">
            Funeral&rsquo;s scheduled conclusion, the date final-deal talks are
            supposed to restart, now with sanctions re-imposed
          </Stat>
        </div>

        <p>
          The strategic content of the crowd is not its piety but its
          composition. Reporting from inside the processions, including
          journalists with no brief for the government, described a diversity
          of dress and observance that does not fit the &ldquo;regime
          loyalists bused in&rdquo; frame, and mourners who explicitly framed
          Khamenei as the man who &ldquo;took on two nuclear powers.&rdquo;
          Assassinating the leader of a tradition whose central devotional
          grammar is martyrdom produced the outcome any regional specialist
          would have predicted: it converted a fading 86-year-old administrator
          into a unifying martyr, and handed the Islamic Republic a
          generational legitimacy transfusion at the exact moment economic
          exhaustion and the January protest suppressions had it politically
          weakest. Banners along the route called for vengeance against US and
          Israeli officials by name. Netanyahu&rsquo;s response, that the
          crowds are a &ldquo;minority&rdquo; who &ldquo;do not represent the
          Iranian people,&rdquo; is the same analytical error, restated after
          its refutation marched past the camera.
        </p>
        <p>
          Honesty requires the other half of the picture. The system these
          crowds rallied to violently suppressed protests as recently as
          January 2026, with credible reporting still unable to establish the
          death toll; Chatham House&rsquo;s Sanam Vakil notes ordinary Iranians
          are relieved the war is over and largely skeptical a deal will hold.
          Rally-round-the-flag effects are real and they decay. But for the
          planning horizon that matters, the sixty-day window, the November US
          midterms, the Lebanon front, the bet that bombing would crack the
          Islamic Republic has returned its verdict, and the verdict walked
          through Tehran twelve million strong. The new Supreme Leader,
          Khamenei&rsquo;s son Mojtaba, has not appeared in public since his
          appointment, an absence that raises real succession questions, and
          that made the crowds themselves, not the successor, the
          regime&rsquo;s proof of life.
        </p>

        {/* ─── §05 ─── */}
        <SectionHead num="§05">
          The Ankara pivot: Turkey up, Israel down, in one photograph
        </SectionHead>
        <p>
          The tanker fires burned as NATO leaders convened in Ankara on 7 July,
          a summit whose host selection was itself a message. Sitting beside
          Erdo&#287;an, Trump said he would lift the CAATSA sanctions imposed
          over Turkey&rsquo;s Russian S-400 purchase, the legal obstacle to
          F-35 sales, and would &ldquo;certainly consider&rdquo; the jets.
          Erdo&#287;an, fluent in the register Trump rewards: &ldquo;Trump
          promised us 5 F-35s and he always keeps his promises.&rdquo; A Likud
          minister answered by calling Erdo&#287;an a &ldquo;grotesque hybrid
          of Hitler and Sinwar.&rdquo; The Times of Israel&rsquo;s own summary
          of the day: the summit and the F-35 shift &ldquo;boost Turkey&rsquo;s
          standing, as slumping Israel sees clout erode.&rdquo;
        </p>
        <p>
          The legal architecture beneath the photograph is the part American
          audiences consistently get wrong. Turkey is a NATO member; Article 5,
          via Article 6&rsquo;s explicit inclusion of &ldquo;the territory of
          Turkey,&rdquo; obligates the United States to treat an armed attack
          on Turkey as an attack on itself. Israel is a Major Non-NATO Ally, a
          designation, not a treaty, and the United States has no mutual
          defense agreement with it. The proposition circulating in parts of
          the Israeli government that Turkey is the next front therefore
          describes a war in which America&rsquo;s binding legal obligation
          would run against Israel. That this needs stating is itself the
          finding.
        </p>
        <p>
          Around the same hinge, the region is building without Washington. The
          Saudi-Pakistani Strategic Mutual Defense Agreement of 17 September
          2025 established a NATO-style mutual-defense clause, reportedly
          extending Pakistan&rsquo;s nuclear umbrella over the Kingdom. Since
          the war, foreign ministers of Saudi Arabia, Turkey, Egypt, and
          Pakistan have met repeatedly (deputies in Islamabad on 14 April,
          ministers at Antalya on 17 April) on what Turkish FM Hakan Fidan
          describes as combining strengths &ldquo;to solve problems&rdquo;;
          reporting through May added Qatari interest. The label
          &ldquo;Islamic NATO&rdquo; is journalese the participants reject,
          Riyadh rebuffed formal Turkish accession in February, and the format
          remains consultative, but the direction is unambiguous: the states
          Washington counts on to underwrite its regional order are pricing in
          a future where the American security guarantee is as revocable as
          General License X.
        </p>

        {/* ─── §06 ─── */}
        <SectionHead num="§06">The institutionalization race</SectionHead>
        <p>
          Against this backdrop, two provisions moving through Congress would
          bind the United States more tightly to the one relationship driving
          its regional isolation: permanently, structurally, and largely beyond
          future congressional reach. Section 219 of the FY2027 NDAA (formerly
          224; Senate companion Section 1217) creates a US-Israel Defense
          Technology Cooperation Initiative under a Pentagon &ldquo;executive
          agent&rdquo; charged with integrating the two nations&rsquo; defense
          industrial bases across missile defense, counter-drone, AI, quantum,
          cyber, autonomous systems, directed energy, and biotechnology.
          Section 622 of the Senate intelligence authorization, introduced by
          Senator Tom Cotton, mandates expanded intelligence sharing with
          Israel across SIGINT-adjacent domains and limits the
          president&rsquo;s own power to restrict it. Netanyahu, in a June
          letter to Rep. Marlin Stutzman, called the framework &ldquo;my
          plan.&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="0">
            Floor votes permitted on the Massie-Khanna amendment to strip
            Section 219, ruled out of order by the House Rules Committee on 29
            June
          </Stat>
          <Stat n="$750M">
            US-Israel cooperative program funding in the House NDAA per
            AIPAC&rsquo;s own summary, a $65M increase over FY2026
          </Stat>
          <Stat n="Critical">
            DIA&rsquo;s threat rating, its highest, for Israeli intelligence
            operations against US persons and defense personnel, per public
            reporting
          </Stat>
        </div>

        <p>
          The case against is not exotic; it is procedural, constitutional, and
          counterintelligence. Procedural: a permanent integration framework of
          treaty-like effect is moving by simple majority inside a must-pass
          $1.15 trillion bill, with the one amendment to debate it blocked from
          a vote. Rep. Ro Khanna: &ldquo;Congress has blocked the amendment...
          to stop the integration of our military with Israel&rsquo;s.&rdquo;
          Constitutional and sovereign: Rep. Thomas Massie, who has since lost
          his primary to a Trump-backed challenger, called it &ldquo;an
          unprecedented escalation of foreign involvement in our military...
          well beyond our pre-existing military relationships, such as with
          Five Eyes nations&rdquo;; Senator Sanders: &ldquo;more military
          integration than any NATO ally.&rdquo; Counterintelligence: the same
          defense establishment being fused is the one the DIA assesses as a
          critical espionage threat, with documented surveillance-software
          incidents against US defense personnel. Human Rights Watch adds the
          operational risk: Section 219&rsquo;s &ldquo;data fusion&rdquo;
          language, reinforced by 622&rsquo;s mandated sharing, would pipe US
          intelligence into Israeli targeting systems whose track record HRW
          has already flagged as risking complicity in war crimes, with no
          further congressional approvals required once the framework exists,
          and, as the Turkish F-35 unwinding proved, no practical way to walk
          integration back.
        </p>
        <p>
          The sponsors&rsquo; urgency has a visible cause. In the last three
          weeks of June, Democratic primary voters removed incumbents
          specifically targeted over Israel aid: in New York, Darializa Avila
          Chevalier defeated Rep. Adriano Espaillat and Brad Lander took Rep.
          Dan Goldman&rsquo;s seat, with Claire Valdez winning a third; in
          Colorado on 30 June, 29-year-old Melat Kiros unseated fifteen-term
          Rep. Diana DeGette, declaring in her victory speech: &ldquo;We will
          not wait... to reject corporate PACs and AIPAC... we will not wait to
          end the genocide in Palestine.&rdquo; The results were not a sweep:
          pro-Israel Phil Weiser won Colorado&rsquo;s gubernatorial primary the
          same night, Hickenlooper beat an arms-embargo challenger 57-43, and a
          DMFI-endorsed candidate&rsquo;s loss in CD-8 turned on more than
          Israel. But the direction matches the polling: Sanders cites 16% of
          Americans supporting unrestricted arming of Israel, and Pew&rsquo;s
          2025 survey found a majority of US adults unfavorable toward Israel
          for the first time, with the sharpest collapse among Republicans and
          evangelicals under fifty. Hence the race: entrench the relationship
          in permanent statute before the electorate that no longer supports it
          elects a Congress that won&rsquo;t. If the FY2027 NDAA conference
          does not deliver Sections 219 and 622 before the November midterms,
          the window may not reopen. That, not any procedural quirk, is why the
          amendment could not be allowed a vote.
        </p>

        {/* ─── §07 ─── */}
        <SectionHead num="§07">Corrections to the public debate</SectionHead>
        <p>
          This briefing draws on commentary, including a 7 July Duran interview
          with Robert Barnes, that gets the strategic picture substantially
          right and several load-bearing facts wrong. Credibility is a supply
          chain; here are the corrections.
        </p>

        <div
          className="border border-korean-red px-6 py-2 my-8"
          style={{ background: "rgba(199, 48, 50, 0.10)" }}
        >
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-korean-red pt-4 pb-1">
            Precision is not pedantry
          </div>
          <Correction claim="Four attacks on tankers">
            Three vessels, verified. Al Rekayyat (Qatari LNG), Wedyan (Saudi
            crude), and a third confirmed by a US official. The count matters
            because the response is being calibrated to it.
          </Correction>
          <Correction claim="Six days of sanctions relief">
            Sixteen. General License X ran 21 June to 7 July. Sixteen days is
            still an indictment of the mechanism; inflating the speed only
            hands the rebuttal an easy target.
          </Correction>
          <Correction claim="30–50 million mourners, half the country">
            12 to 15 million verified in Tehran (FT), largest in Iranian
            history. Multi-day nationwide aggregates may run higher but are
            unverified. Twelve million needs no exaggeration.
          </Correction>
          <Correction claim="Islamic NATO with Iran as a corner">
            The verified quartet is Saudi Arabia, Turkey, Egypt, and Pakistan,
            and it condemned Iran&rsquo;s Gulf strikes in March. Iran is the
            catalyst of the architecture, not a member of it. The realignment
            thesis survives the correction; the membership list doesn&rsquo;t.
          </Correction>
          <Correction claim="Trump wants to be compared to Attila, Genghis, Hitler, Stalin">
            Per Haberman and Swan&rsquo;s Regime Change (23 June), Trump
            produced a two-page document claiming his power exceeded theirs, a
            document written not by &ldquo;a historian,&rdquo; as he claimed,
            but by golf caddies of Gary Player, which he then posted to Truth
            Social. The verified version is stranger than the paraphrase.
          </Correction>
          <Correction claim="Merging the militaries and intelligence agencies">
            The statutes integrate the defense industrial bases (219) and
            mandate intelligence sharing while limiting presidential discretion
            to curb it (622). Not a joint command. The precise text is
            sufficient to sustain every constitutional objection made against
            it; overstating it is how those objections get dismissed.
          </Correction>
          <div className="py-4">
            <p className="text-[15px] leading-relaxed text-cream-muted mb-0">
              Claims about any leader&rsquo;s cognitive state are diagnosis,
              not analysis. The documented record, the 2018 JCPOA exit during
              certified compliance, the abandoned Alaska framework with Russia,
              and now a sixteen-day license, establishes the reliability
              deficit on behavior alone. It needs no neurology.
            </p>
          </div>
        </div>

        {/* ─── §08 ─── */}
        <SectionHead num="§08">What would change this assessment</SectionHead>
        <p className="text-cream-muted italic">
          Analysis that cannot be wrong is advocacy. This briefing&rsquo;s core
          claims fail if the following occur:
        </p>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-2 my-8">
          <Falsifier title="Statutory relief that survives a provocation.">
            Sanctions relief enacted or committed in a form that outlives a bad
            week, and a US response to the next incident that penalizes the
            violator without vaporizing the framework. That would falsify the
            license-problem thesis.
          </Falsifier>
          <Falsifier title="A final deal signed within the window and honored for ninety days.">
            Including an agreed Hormuz regime with Oman and the littoral
            states, and Iranian cessation of force against shipping on any
            route. That would falsify the reliability-deficit thesis on both
            sides.
          </Falsifier>
          <Falsifier title="Sections 219 and 622 receiving open debate and surviving a recorded vote.">
            If the integration framework can win in daylight, the
            institutionalization-race thesis, that it moves precisely because
            it cannot, is wrong. Conversely, quiet passage in conference before
            November confirms it.
          </Falsifier>
          <Falsifier title="Iranian consolidation decaying on schedule.">
            If, six months out, the post-funeral unity has reverted to
            January-2026 levels of unrest, the strategic weight this briefing
            assigns the funeral was overstated.
          </Falsifier>
        </div>

        <p>
          Until then, the finding stands. The United States did not lose a deal
          this week; it demonstrated, for the second time in eight years and
          the third time in twelve months, that its signature is a
          floating-rate instrument. Iran did not defend its sovereignty this
          week; it fired missiles at Qatari and Saudi civilian crews and
          reminded every neutral state why the strait needs an administration
          that isn&rsquo;t the IRGC. And the Congress of the United States,
          watching all of it, chose this month to weld its defense industry and
          intelligence flows to the one actor in the drama that signed nothing,
          was bound by nothing, and bombed Beirut twice while the parties were
          at the table. The deficit is not Iranian and it is not American. It
          is systemic, and every state in the region is now visibly arranging
          its affairs around it.
        </p>

        {/* ─── SOURCES ─── */}
        <div className="mt-16 pt-10 border-t border-sovereign-gold/20">
          <h2 className="font-display text-[22px] font-bold text-cream mb-5">
            Sources and method
          </h2>
          <p className="text-[14px] text-cream-muted leading-[1.8] mb-4">
            <strong className="text-cream">Primary sources:</strong> full
            14-point text of the Islamabad Memorandum of Understanding
            (released by a senior US official to NBC News; published by
            President Pezeshkian, 18 June 2026); OFAC Iran General License X
            (21 to 22 June 2026) and General License X1 (7 July 2026); UKMTO
            incident reports of 6 to 7 July (Al Rekayyat strike, 8 nm east of
            Limah, Oman); statements of the Qatari and Saudi foreign
            ministries, 7 July; CNN, Axios, NPR, Al Jazeera, AGBI, Iran
            International, and Times of Israel reporting of 6 to 7 July on the
            tanker strikes, waiver revocation, resumed US strikes, and Ankara
            NATO summit; White House remarks of President Trump, 6 July;
            Iranian Foreign Ministry statement via IRIB, 7 July; Kpler and
            Windward transit data; Financial Times crowd estimate and
            AP/Reuters/CNN funeral coverage, 4 to 7 July; Gibson Dunn client
            alert on the MOU&rsquo;s legal architecture; Quincy Institute,
            &ldquo;Cooperation Without Oversight&rdquo; (June 2026); Human
            Rights Watch analysis of Section 219 (16 June 2026); Military.com
            and Common Dreams reporting on the Massie-Khanna amendment and
            Section 622; AIPAC FY27 NDAA memo; United States-Israel FUTURES Act
            legislative record; Haberman &amp; Swan, Regime Change (Simon &amp;
            Schuster, 23 June 2026), with CNN and Salon reporting on its
            contents; MEMRI I&amp;A No. 1907 and Defence Security Asia on the
            Saudi-Pakistan SMDA and quartet consultations; Forward, Al Jazeera,
            CPR, JPost, and ABC reporting on the June 2026 New York and
            Colorado primaries; Pew Research Center 2025 Israel favorability
            survey; NPR interview with Sanam Vakil (Chatham House), 5 July
            2026.
          </p>
          <p className="text-[14px] text-cream-muted leading-[1.8]">
            <strong className="text-cream">Method:</strong> every load-bearing
            claim was verified against at least one primary or independent
            source dated to the event; where belligerent or partisan
            self-reporting diverges from independent reporting, the independent
            figure is used and the dispute flagged. Commentary sources
            (including the 7 July Duran/Barnes interview) informed the
            analytical frame and are corrected in &sect;07 where their factual
            claims diverge from the record. All figures current as of 7 July
            2026, a fast-moving date. Companion briefing: &#8470;01,{" "}
            <a
              href="/briefings/mirage-shield"
              className="text-sovereign-gold hover:underline underline-offset-4"
            >
              &ldquo;The Mirage of the Impenetrable Shield&rdquo;
            </a>{" "}
            (missile defense efficacy, 1991 to 2026).
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
        <div className="font-mono text-[15px] font-bold tracking-[4px] text-sovereign-gold mb-4 uppercase">
          iPurpose
        </div>
        <div className="w-[80px] h-[2px] bg-sovereign-gold mx-auto mb-6" />
        <p className="text-[13px] text-cream-muted font-light">
          Intelligence with intent
        </p>
        <p className="text-[11px] text-cream-muted/60 mt-4 max-w-[500px] mx-auto">
          &copy; 2026 iPurpose Research &middot; Open-source briefing &middot;
          Reproduction with attribution permitted
        </p>
      </div>
    </article>
  )
}
