"use client"

/* ─── helpers ─── */
function SectionHead({
  num,
  children,
}: {
  num: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-20 mb-8 pt-10 border-t border-sovereign-gold/20">
      <h2 className="font-serif text-[26px] font-bold leading-[1.3] text-cream">
        <span className="font-mono text-[15px] text-sovereign-gold mr-4">
          {num}
        </span>
        {children}
      </h2>
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

function KeyFinding({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 mb-4 last:mb-0">
      <span className="font-mono text-[13px] font-semibold text-sovereign-gold shrink-0 pt-[2px]">
        {id}
      </span>
      <span className="text-[15px] leading-relaxed">{children}</span>
    </li>
  )
}

function OnRecord({
  who,
  where,
  quote,
  read,
}: {
  who: string
  where: string
  quote: string
  read: string
}) {
  return (
    <div className="my-8 bg-river-deep border-l-[3px] border-sovereign-gold px-6 py-5">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-sovereign-gold mb-3">
        {who} <span className="text-cream-muted">· {where}</span>
      </p>
      <p className="font-serif text-[19px] italic leading-[1.5] text-river-mist mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-[14px] text-cream-muted leading-relaxed">
        <strong className="text-cream">Read:</strong> {read}
      </p>
    </div>
  )
}

function WatchMarker({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 py-4 border-b border-cream-muted/15 last:border-b-0">
      <span className="font-mono text-[13px] font-semibold text-korean-red shrink-0 pt-[2px]">
        {id}
      </span>
      <p className="text-[15px] leading-relaxed">
        <strong className="text-cream">{title}</strong> {children}
      </p>
    </div>
  )
}

/* ─── main ─── */
export function TributeBillContent() {
  return (
    <article>
      {/* ═══ HERO ═══ */}
      <div
        className="min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #0d1b2a 0%, #142638 50%, #1b4965 100%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-mono font-bold"
          style={{
            fontSize: "34vw",
            color: "rgba(212, 167, 74, 0.04)",
            letterSpacing: "-0.05em",
          }}
        >
          $
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="font-mono text-[11px] tracking-[0.28em] text-sovereign-gold mb-10 uppercase">
            iPurpose · Market Structure Brief · MS-2026-0713
          </div>

          <h1 className="font-serif font-black text-[clamp(38px,6.5vw,68px)] leading-[1.1] max-w-[780px] mb-6">
            The Tribute Bill
          </h1>

          <p className="text-[clamp(16px,2.2vw,21px)] text-sovereign-gold max-w-[620px] leading-snug mb-10">
            Lindsey Graham&rsquo;s last act, the 500 percent tariff, and the
            de-dollarization it may end up financing.
          </p>

          <div className="w-[80px] h-[2px] bg-sovereign-gold mb-8" />

          <div className="text-[13px] font-light text-cream-muted tracking-[3px] uppercase">
            Jesse James &nbsp;&middot;&nbsp; iPurpose &nbsp;&middot;&nbsp; 13 July 2026
          </div>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-[17px] leading-[1.75]">
        {/* ─── 00 EXEC SUMMARY ─── */}
        <div className="bg-river-deep border-[1.5px] border-sovereign-gold px-6 py-6 mb-8">
          <BoxLabel>00 · Bottom Line Up Front</BoxLabel>
          <p className="mb-0">
            The United States Senate is preparing to pass, as a memorial to
            Lindsey Graham, a bill that its own lead Democratic co-sponsor says
            is aimed at China and India. The Sanctioning Russia Act authorizes
            tariffs of up to 500 percent on countries buying Russian energy.
            Roughly 90 percent of that energy flows to two buyers, neither of
            which intends to comply, and one of which is already using the
            threat as a recruiting argument for settlement outside the dollar.
            The bill&rsquo;s entire leverage lives in the paper layer of the
            oil market. That is the layer already leaking.
          </p>
        </div>

        <div className="bg-river-deep border-l-[3px] border-korean-red px-6 py-5 mb-8">
          <BoxLabel color="red">Key Findings</BoxLabel>
          <ul>
            <KeyFinding id="KF-1">
              Sen. Graham died 11 July 2026, one day after announcing White
              House agreement on his secondary-tariff bill; within 48 hours
              Senate leaders of both parties moved to pass it as a tribute. The
              bill carries 85 co-sponsors.
            </KeyFinding>
            <KeyFinding id="KF-2">
              China and India were Russia&rsquo;s two largest fossil fuel
              buyers in June 2026, at &euro;7.3B and &euro;5.5B respectively;
              Sen. Blumenthal puts their combined share of Russia&rsquo;s
              energy exports near 90 percent.
            </KeyFinding>
            <KeyFinding id="KF-3">
              India&rsquo;s stated position is non-compliance, framed as energy
              security for 1.4 billion people; its foreign minister says the
              bridge will be crossed if it is ever reached.
            </KeyFinding>
            <KeyFinding id="KF-4">
              Moscow&rsquo;s trade envoy in Delhi is publicly framing the bill
              as an accelerant for BRICS-level de-dollarization. The threat is
              doing the recruiting before the bill has passed.
            </KeyFinding>
            <KeyFinding id="KF-5">
              The bill text remains unpublished as of 13 July. Reporting
              indicates the 500 percent rate may be softened and some sanctions
              made automatic within 30 days of enactment. No floor date is set.
            </KeyFinding>
          </ul>
        </div>

        <p className="text-[15px] text-cream-muted border border-river-current/40 rounded px-5 py-4 mb-4">
          For readers with Asia-facing energy, trade, or currency exposure, the
          actionable signal is not the memorial rhetoric. It is the final
          published rate, the presence or absence of an automatic trigger, and
          the settlement announcements out of Delhi and Beijing that follow.
          Section 05 lists the four markers worth an alert.
        </p>

        {/* ─── 01 ─── */}
        <SectionHead num="01">A death, a bill, and a 48-hour stampede</SectionHead>
        <p>
          The Senate is converting grief into legislative momentum at a speed
          it reserves for almost nothing else. Lindsey Graham died on the night
          of Saturday, 11 July 2026, at 71. The preliminary cause given by his
          office and the District of Columbia medical examiner was aortic
          dissection resulting from arteriosclerotic cardiovascular disease. He
          died hours after returning from his tenth wartime trip to Kyiv, where
          he met President Zelensky on 10 July.
        </p>
        <p>
          The timing matters because of what happened the day before. On 10
          July, Graham announced he had secured White House agreement on an
          updated version of his Sanctioning Russia Act of 2025: the bill
          authorizing tariffs of up to 500 percent on countries that buy
          Russian oil, gas, uranium, and petroleum products. Eighty-five
          senators co-sponsor it.
        </p>
        <p>
          Within 48 hours of his death, Majority Leader John Thune, Minority
          Leader Chuck Schumer, and Senators Blumenthal, Shaheen, and Wicker
          were publicly pushing to pass the bill as a tribute. The House
          sponsors joined. On 13 July, Gov. McMaster appointed Graham&rsquo;s
          sister, Darline Graham Nordone, to hold the seat through January. The
          memorial machinery is fully assembled. What is not assembled is the
          text: as of 13 July the updated bill has not been published, and
          Thune has declined to commit to a floor date.
        </p>
        <p>
          A tribute vote on an unpublished bill is worth pausing on. The Senate
          is being asked to honor a man by passing whatever the final draft
          turns out to say.
        </p>

        {/* ─── 02 ─── */}
        <SectionHead num="02">Who the tariff actually hits</SectionHead>
        <p>
          By its own sponsor&rsquo;s arithmetic, this is a bill about China and
          India. At a Hartford press conference on 13 July, Sen. Richard
          Blumenthal, the bill&rsquo;s lead Democratic co-sponsor, identified
          the targets without being asked twice: the major purchasers of
          Russian energy are China and India, which together take roughly 90
          percent of Russia&rsquo;s energy products. That is his rhetorical
          high end. The independent tracking is more precise and points the
          same direction.
        </p>

        <div className="my-10">
          <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-sovereign-gold mb-3">
            Russian fossil fuel purchases, June 2026
          </p>
          <div className="overflow-x-auto border border-river-current/40 rounded">
            <table className="w-full border-collapse text-[14px] min-w-[560px]">
              <thead>
                <tr>
                  <th className="font-mono text-[11px] tracking-[0.14em] uppercase text-left text-sovereign-gold border-b-[1.5px] border-sovereign-gold px-4 py-3 bg-river-deep">
                    Buyer
                  </th>
                  <th className="font-mono text-[11px] tracking-[0.14em] uppercase text-left text-sovereign-gold border-b-[1.5px] border-sovereign-gold px-4 py-3 bg-river-deep">
                    Purchases
                  </th>
                  <th className="font-mono text-[11px] tracking-[0.14em] uppercase text-left text-sovereign-gold border-b-[1.5px] border-sovereign-gold px-4 py-3 bg-river-deep">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="border-b border-cream-muted/20 px-4 py-3 text-cream font-semibold whitespace-nowrap">
                    China
                  </td>
                  <td className="border-b border-cream-muted/20 px-4 py-3 font-mono text-sovereign-gold whitespace-nowrap">
                    €7.3B / month
                  </td>
                  <td className="border-b border-cream-muted/20 px-4 py-3 text-cream-muted leading-relaxed">
                    Largest single buyer across crude, pipeline gas, and
                    products.
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border-b border-cream-muted/20 px-4 py-3 text-cream font-semibold whitespace-nowrap">
                    India
                  </td>
                  <td className="border-b border-cream-muted/20 px-4 py-3 font-mono text-sovereign-gold whitespace-nowrap">
                    €5.5B / month
                  </td>
                  <td className="border-b border-cream-muted/20 px-4 py-3 text-cream-muted leading-relaxed">
                    Crude alone was €4.5B: 83 percent of its Russian fossil
                    imports.
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 text-cream font-semibold whitespace-nowrap">
                    Combined
                  </td>
                  <td className="px-4 py-3 font-mono text-sovereign-gold whitespace-nowrap">
                    ≈ 90% of exports
                  </td>
                  <td className="px-4 py-3 text-cream-muted leading-relaxed">
                    Sen. Blumenthal&rsquo;s figure for the two buyers&rsquo;
                    share of Russia&rsquo;s energy products.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-cream-muted mt-3 leading-relaxed">
            Sources: Centre for Research on Energy and Clean Air (CREA), June
            2026 monthly tracking; Sen. Blumenthal remarks, 13 July 2026. The
            90 percent figure is the sponsor&rsquo;s characterization, not
            CREA&rsquo;s.
          </p>
        </div>

        <p>
          So the mechanism is not subtle. A 500 percent tariff on buyers of
          Russian energy is a 500 percent tariff on the two most populous
          nations on Earth, neither of which is at war with anyone, applied
          through their access to the American market. The bill is sold as
          pressure on Moscow. The pressure is routed through Beijing and Delhi,
          and both capitals can read a bill of lading.
        </p>

        {/* ─── 03 ─── */}
        <SectionHead num="03">
          The bifurcation: physical barrels, paper leverage
        </SectionHead>
        <p>
          The oil market is two markets wearing one name, and the bill can only
          touch one of them. The physical market is molecules: crude, gas,
          products, uranium, moving by tanker, pipeline, and railcar. The paper
          market is everything that prices and pays for those molecules: the
          Brent, WTI, and Dubai benchmarks, dollar clearing, correspondent
          banking, the futures complex. Sanctions and secondary tariffs are
          instruments of the paper layer. They do not stop molecules. They
          reprice them, reroute them, and re-flag them.
        </p>
        <p>
          Four years of sanctions on Russian energy have demonstrated the split
          in real time. The barrels kept moving east, at a discount, on an
          expanding shadow fleet. What migrated was the settlement: a growing
          share of Russian volumes now clears in yuan, dirhams, and rupees,
          while the pricing layer, the benchmarks themselves, remains
          dollar-denominated. Barrels priced in dollars, increasingly paid in
          anything but. That gap is the bifurcation, and it is exactly where
          this bill swings.
        </p>

        {/* Figure 1: two-layer market diagram */}
        <figure className="my-10">
          <div className="border border-river-current/40 rounded overflow-hidden">
            <div className="px-6 py-5 bg-river-current/25 border-b border-river-current/40">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sovereign-gold mb-2">
                Paper layer · where the tariff swings
              </p>
              <p className="text-[14px] text-cream leading-relaxed mb-0">
                Benchmarks (Brent, WTI, Dubai) · dollar clearing ·
                correspondent banking · futures complex
              </p>
            </div>
            <div className="px-6 py-2 text-center bg-river-deep">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-korean-red">
                settlement migrating: yuan · dirham · rupee
              </span>
            </div>
            <div className="px-6 py-5 bg-river-deep border-t border-river-current/40">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sovereign-gold mb-2">
                Physical layer · beyond its reach
              </p>
              <p className="text-[14px] text-cream leading-relaxed mb-0">
                Crude, gas, products, uranium by tanker, pipeline, railcar ·
                ~90% flowing to two buyers
              </p>
            </div>
          </div>
          <figcaption className="text-[12px] text-cream-muted mt-3 leading-relaxed">
            Figure 1. The two-layer market. The 500 percent tariff operates on
            the paper layer: pricing access and settlement rails. The physical
            layer, roughly 90 percent of which flows to two buyers, is beyond
            its reach. Sources: CREA (Jun 2026); Sen. Blumenthal remarks (13
            Jul 2026).
          </figcaption>
        </figure>

        <p>
          The strategic problem follows directly. The tariff&rsquo;s power
          depends on targets needing dollar-system access more than they need
          Russian energy. Every escalation raises the price of staying inside
          the dollar system and improves the business case for the rails being
          built outside it. The tool consumes the condition that makes the tool
          work.
        </p>

        <div className="border-l-[3px] border-sovereign-gold bg-river-current/30 pl-7 pr-5 py-5 my-10">
          <p className="font-serif text-[20px] font-normal leading-[1.5] text-river-mist italic">
            Washington&rsquo;s most powerful economic weapon works only as long
            as the world needs the dollar more than it fears it. This bill is
            the largest single test of that balance ever proposed.
          </p>
        </div>

        {/* ─── 04 ─── */}
        <SectionHead num="04">The responses, on the record</SectionHead>
        <p>
          Every party that matters has already told you what it will do. None
          of the statements below are anonymous sourcing or inference. They are
          named officials, on the record, in the ten days before this brief.
        </p>

        <OnRecord
          who="S. Jaishankar · External Affairs Minister, India"
          where="Washington, 3 July 2026"
          quote="We'll have to cross that bridge when we come to it, if we come to it."
          read="Delhi will not pre-comply. India's standing frame is affordable energy for 1.4 billion people, and no tariff changes that arithmetic. It changes the invoice currency."
        />
        <OnRecord
          who="Zlata Antusheva · Russian Trade Representative to India"
          where="via RT, circa 8 July 2026"
          quote="Our main goal is to de-dollarize... at the BRICS level."
          read="Moscow is openly using the tariff threat as a recruitment argument for non-dollar settlement. The bill is doing this work before passage. Treat the claim as advocacy, but note who it is aimed at."
        />
        <OnRecord
          who="Rand Paul · US Senator (R-KY)"
          where="July 2026"
          quote="An economic calamity on a scale never before seen."
          read="The domestic cost argument, from inside the president's own party. A 500 percent tariff on China and India is a tariff on America's own Asian supply chains."
        />
        <OnRecord
          who="John Thune · Senate Majority Leader"
          where="13 July 2026"
          quote="We've got to figure out exactly what that is."
          read="No floor date. The leader honoring the bill will not yet schedule it or publish it. Watch the distance between the eulogy and the calendar."
        />

        {/* ─── 05 ─── */}
        <SectionHead num="05">What to watch, and what I assess</SectionHead>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-4 my-8">
          <WatchMarker id="W-1" title="The floor date.">
            Thune scheduling a vote converts memorial momentum into law. Until
            then this is rhetoric with 85 signatures.
          </WatchMarker>
          <WatchMarker id="W-2" title="The rate.">
            Whether 500 percent survives in the published text is the single
            clearest tell. If it softens behind closed doors, the tribute was a
            bluff and the market will price it as one.
          </WatchMarker>
          <WatchMarker id="W-3" title="The trigger.">
            Reporting suggests some sanctions become automatic within 30 days
            of enactment. An automatic trigger removes presidential discretion
            and makes escalation mechanical. That detail matters more than the
            headline rate.
          </WatchMarker>
          <WatchMarker id="W-4" title="The settlement announcements.">
            Ignore the op-eds from Delhi and Beijing. Watch for new rupee,
            dirham, and yuan clearing arrangements in the 90 days after
            passage. Settlement plumbing is the honest signal.
          </WatchMarker>
        </div>

        <p>
          I assess three things. First, some version of this bill passes: 85
          co-sponsors and a funeral make a coalition that does not need the
          text to be good. Second, the 500 percent figure does not survive
          contact with the final draft in enforceable form; it was always a
          number built for a press conference, and the softening is reportedly
          already underway. Third, and most important, the direction of travel
          is set regardless of the final rate. The threat alone has handed
          Moscow its best de-dollarization argument in four years, and payment
          rails, once built, do not get unbuilt because a tariff was later
          reduced.
        </p>
        <p>
          The honest counterweight belongs in the same paragraph as the thesis.
          De-dollarization is real and gradual, not imminent and total. The
          dollar&rsquo;s reserve share erodes slowly, the benchmarks remain
          dollar paper, and India&rsquo;s government formally disavows any move
          off the dollar even as it settles Russian barrels around it. The
          claim here is not that the dollar dies. The claim is that the weapon
          dulls with use, this is the heaviest swing yet proposed, and the
          Senate is about to take it in memoriam, without reading the blade.
        </p>

        {/* ─── 06 ─── */}
        <SectionHead num="06">Caveats and sources</SectionHead>

        <div
          className="border border-korean-red px-6 py-5 my-8"
          style={{ background: "rgba(199, 48, 50, 0.12)" }}
        >
          <BoxLabel color="red">Caveats · Read Before Forwarding</BoxLabel>
          <p className="text-[15px] leading-relaxed mb-4">
            The updated bill text was not public as of 13 July 2026. All
            references to the 500 percent rate describe the announced provision
            of the Sanctioning Russia Act of 2025, which may be revised in the
            enacted version. Reports of a softened rate and a 30-day automatic
            trigger are attributed to congressional reporting and are
            unconfirmed against text.
          </p>
          <p className="text-[15px] leading-relaxed mb-4">
            The 90 percent combined-purchaser figure is Sen. Blumenthal&rsquo;s
            characterization of Russia&rsquo;s energy exports. CREA&rsquo;s
            June 2026 monthly values (&euro;7.3B China, &euro;5.5B India) are
            independent tracking and should be cited in preference to the
            rhetorical figure where precision matters.
          </p>
          <p className="text-[15px] leading-relaxed mb-0">
            Statements by Russian officials on de-dollarization are advocacy by
            an interested party and are presented here as evidence of framing,
            not as forecasts. India&rsquo;s government has repeatedly and
            formally disavowed moving off the dollar. This brief takes no
            position on the cause-of-death commentary circulating online; the
            documented preliminary cause is aortic dissection, and nothing else
            merits repetition.
          </p>
        </div>

        <div className="text-[14px] text-cream-muted leading-[1.8] space-y-2">
          <p>
            <strong className="text-cream">S-01</strong> Graham office
            statement and DC medical examiner preliminary finding, as reported
            12 July 2026.
          </p>
          <p>
            <strong className="text-cream">S-02</strong> Sen. Graham
            announcement of White House agreement on the Sanctioning Russia
            Act, 10 July 2026; bill co-sponsorship count per congressional
            record.
          </p>
          <p>
            <strong className="text-cream">S-03</strong> Senate leadership
            statements on passage as tribute: Thune, Schumer, Blumenthal,
            Shaheen, Wicker, 12 to 13 July 2026.
          </p>
          <p>
            <strong className="text-cream">S-04</strong> Sen. Richard
            Blumenthal remarks, Hartford CT press conference, 13 July 2026.
          </p>
          <p>
            <strong className="text-cream">S-05</strong> Centre for Research on
            Energy and Clean Air (CREA), monthly Russian fossil fuel export
            tracking, June 2026 report.
          </p>
          <p>
            <strong className="text-cream">S-06</strong> EAM S. Jaishankar
            remarks, Washington DC, 3 July 2026; India MEA standing statements
            on energy security.
          </p>
          <p>
            <strong className="text-cream">S-07</strong> Zlata Antusheva,
            Russian Trade Representative to India, interview via RT, circa 8 to
            9 July 2026.
          </p>
          <p>
            <strong className="text-cream">S-08</strong> Sen. Rand Paul public
            remarks on the bill&rsquo;s domestic economic impact, July 2026.
          </p>
          <p>
            <strong className="text-cream">S-09</strong> Appointment of Darline
            Graham Nordone by Gov. Henry McMaster, 13 July 2026, per national
            wire reporting.
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
          Intelligence with intent &nbsp;&middot;&nbsp; Prepared from open
          sources only
        </p>
        <p className="text-[11px] text-cream-muted/60 mt-4 max-w-[500px] mx-auto">
          Errors of fact are the author&rsquo;s and correctable. Every claim in
          this brief is traceable to the named, on-record sources listed above.
        </p>
      </div>
    </article>
  )
}
