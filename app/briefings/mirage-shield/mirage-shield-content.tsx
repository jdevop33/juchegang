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

function MinorHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-[19px] font-bold text-sovereign-gold mt-10 mb-4">
      {children}
    </h3>
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

function Flag({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="border border-korean-red px-6 py-5 my-8"
      style={{ background: "rgba(199, 48, 50, 0.10)" }}
    >
      <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-korean-red mb-3">
        {label}
      </div>
      {children}
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

function DataTable({
  caption,
  head,
  rows,
}: {
  caption: string
  head: string[]
  rows: string[][]
}) {
  return (
    <div className="my-10">
      <div className="overflow-x-auto border border-river-current/40 rounded">
        <table className="w-full border-collapse text-[14px] min-w-[640px]">
          <thead>
            <tr>
              {head.map((h) => (
                <th
                  key={h}
                  className="font-mono text-[11px] tracking-[0.14em] uppercase text-left text-sovereign-gold border-b-[1.5px] border-sovereign-gold px-4 py-3 bg-river-deep"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="align-top">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border-b border-cream-muted/20 px-4 py-3 leading-relaxed ${
                      j === 0
                        ? "text-cream font-semibold"
                        : "text-cream-muted"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[12px] text-cream-muted mt-3 leading-relaxed">
        {caption}
      </p>
    </div>
  )
}

/* ─── main ─── */
export function MirageShieldContent() {
  return (
    <article>
      {/* ═══ HERO ═══ */}
      <div
        className="min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, #0d1b2a 0%, #142638 50%, #1b4965 100%)",
        }}
      >
        <div className="relative z-10 flex flex-col items-center max-w-[840px]">
          <div className="font-mono text-[11px] tracking-[0.28em] text-sovereign-gold mb-10 uppercase">
            iPurpose · Strategic Briefing №01 · Missile Defense · July 2026
          </div>

          <h1 className="font-display font-black text-[clamp(32px,5.5vw,58px)] leading-[1.12] mb-8">
            The Mirage of the Impenetrable Shield
          </h1>

          <p className="text-[16px] text-cream-muted leading-relaxed max-w-[680px] mb-10">
            Thirty-five years of combat data on ballistic missile defense, from
            the Patriot&rsquo;s Gulf War debut to the interceptor drain of the
            2025 Israel-Iran war, show one consistent pattern: advertised
            success rates collapse on contact with an adapting adversary. This
            briefing separates the verified record from the marketing, and
            states what that gap means for the decisions now before Congress.
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
            Ballistic missile defense works: sometimes, at enormous cost, and
            never at the rates its manufacturers and sponsoring governments
            claim. The 1991 Patriot began at a claimed 96% success rate and
            ended, under Government Accountability Office scrutiny, with strong
            evidence for warhead kills in roughly 9% of engagements, and
            independent analysis putting the true figure near zero. In Ukraine,
            interception of Russian Iskander and Kinzhal missiles fell from 37%
            in August 2025 to 6% in September 2025 after a single Russian
            software upgrade. In the June 2025 twelve-day war, Israeli and
            American defenses held at 86% overall but bled: leakage rose from
            8% in week one to 25% on the final day, and the United States
            expended roughly a quarter of its global THAAD interceptor
            stockpile in twelve days.
          </p>
          <p className="mb-0 text-[15px] leading-relaxed">
            The economics are unforgiving. Defensive interceptors cost 18 to
            120 times the weapons they destroy. The physics is unforgiving. In
            the vacuum of midcourse space, a balloon decoy and a nuclear
            warhead fly the same trajectory. And the politics is the most
            unforgiving of all: every time political leadership has believed
            the shield was impenetrable, the threshold for offensive war has
            dropped. That belief is now embedded in a $1.19 trillion
            homeland-defense program and a congressional provision integrating
            the American and Israeli defense industrial bases, passed, so far,
            without a single minute of floor debate.
          </p>
        </div>

        {/* ─── §01 ─── */}
        <SectionHead num="§01">How success gets counted</SectionHead>
        <p>
          Every dispute in this record begins with a definition. The US Army
          distinguishes a warhead kill, destruction or disabling of the
          incoming warhead, from a mission kill, which can mean merely
          diverting the missile. In 1991, an engagement was scored a success if
          the Scud caused no significant ground damage, even when the warhead
          landed intact in empty desert. The absence of damage was treated as
          evidence of interception. That definitional elasticity, not fraud in
          any single measurement, is how a near-zero warhead-kill record became
          a 96% success story delivered to the President of the United States.
        </p>
        <p>
          This briefing uses the strictest available standard in each case:
          forensically verified warhead destruction where the data exists,
          independently compiled launch-versus-intercept datasets where it does
          not, and explicit flags wherever the numbers remain genuinely
          disputed.
        </p>

        {/* ─── §02 ─── */}
        <SectionHead num="§02">1991: the founding myth</SectionHead>
        <p>
          On 15 February 1991, President George H.W. Bush stood at
          Raytheon&rsquo;s Andover plant and declared the Patriot &ldquo;41 for
          42: 42 Scuds engaged, 41 intercepted.&rdquo; The Army&rsquo;s
          official figure then fell in stages: 96% in March 1991, 69% by May,
          59% by April 1992, where it officially remains.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="96%">
            Initial claimed success rate, US Army, March 1991
          </Stat>
          <Stat n="9%">
            Engagements with strong evidence of a warhead kill, GAO
            NSIAD-92-340, September 1992
          </Stat>
          <Stat n="~0%">
            Postol-Lewis (MIT) assessment from frame-by-frame video analysis of
            27 to 29 engagements
          </Stat>
        </div>

        <p>
          The GAO&rsquo;s 1992 report carried its conclusion in its title:
          Data Does Not Exist to Conclusively Say How Well Patriot Performed.
          Outside the 9% of engagements with the strongest evidence, the Army
          could demonstrate only that &ldquo;the Patriots came close to the
          Scuds, not that they destroyed them.&rdquo; MIT&rsquo;s Theodore
          Postol testified to Congress that the intercept rate &ldquo;could be
          much lower than ten percent, possibly even zero.&rdquo; The
          independent American Physical Society review panel later judged it
          &ldquo;extremely unlikely&rdquo; that the Postol-Lewis finding of
          very poor performance would ever be overturned.
        </p>
        <p>
          The Israeli record was harsher still. Defense Minister Moshe Arens
          and IDF Chief of Staff Dan Shomron stated that Patriot intercepted at
          most one Scud over Israel; Shomron called its success &ldquo;a
          myth.&rdquo; Israeli analysis found that ground damage in Israel was
          greater after Patriot&rsquo;s arrival than before: falling
          interceptors caused damage of their own.
        </p>

        <div className="border-l-[3px] border-sovereign-gold bg-river-current/30 pl-7 pr-5 py-5 my-10">
          <p className="font-display text-[20px] font-normal leading-[1.5] text-river-mist italic mb-3">
            &ldquo;They haven&rsquo;t intercepted one missile.&rdquo;
          </p>
          <p className="font-mono text-[11px] text-cream-muted tracking-wider uppercase mb-0">
            Moshe Arens, Israeli Defense Minister, to US officials during the
            Gulf War (declassified 2018 interview)
          </p>
        </div>

        <MinorHead>The mechanics of failure</MinorHead>
        <p>
          Iraq&rsquo;s Al-Hussein, a Scud stretched for range, routinely broke
          apart on reentry, and the debris cloud confused Patriot&rsquo;s radar
          into chasing harmless booster sections while warheads flew on. On 25
          February 1991, a different failure mode killed 28 American soldiers
          at Dhahran: a 24-bit floating-point truncation in the range-gate
          software, compounded over 100+ hours of continuous operation into a
          0.34-second timing error, shifted the tracking gate roughly 687
          meters. The battery never engaged. The Scud struck the 14th
          Quartermaster Detachment barracks, the single most devastating attack
          on US forces of the entire war. The software patch arrived the next
          day.
        </p>

        <Flag label="Disputed-claim flag">
          <p className="text-[15px] leading-relaxed mb-0">
            Raytheon continues to dispute the 9% figure, arguing GAO never
            contradicted the Army&rsquo;s ~59% overall assessment and that 9%
            referred only to the highest-confidence sub-category. This is a
            genuine interpretive dispute, but the GAO&rsquo;s actual finding
            was that the data did not exist to prove kills, not that a specific
            fraction succeeded.
          </p>
        </Flag>

        {/* ─── §03 ─── */}
        <SectionHead num="§03">2017–2018: forensic proof over Riyadh</SectionHead>
        <p>
          When Houthi forces fired Iranian-derived Burqan-2H missiles at the
          Saudi capital, Riyadh claimed near-total interception. Jeffrey Lewis
          and colleagues at the Middlebury Institute&rsquo;s Center for
          Nonproliferation Studies mapped every debris field and interceptor
          impact point for the November and December 2017 strikes. The pattern
          was unambiguous: the Burqan&rsquo;s warhead separates from its
          airframe after boost. Saudi Patriots destroyed the large,
          radar-bright, harmless fuselage, while the warhead flew on, one
          landing within a few hundred meters of Terminal 5 at King Khalid
          International Airport.
        </p>
        <p>
          For the seven-missile salvo of 25 March 2018, all claimed
          intercepted, Lewis found &ldquo;no evidence that Saudi Arabia
          intercepted any missiles at all.&rdquo; Video showed one interceptor
          executing a U-turn and detonating inside Riyadh. His verdict on the
          export of the system: the United States &ldquo;seems to have sold
          them, and its own public, a lemon of a missile defense
          system.&rdquo; Twenty-six years after Dhahran, the same
          discrimination failure, warhead versus debris, was producing the same
          false victories, now confirmed by open-source geolocation rather than
          classified telemetry.
        </p>

        {/* ─── §04 ─── */}
        <SectionHead num="§04">2023–2026: Ukraine, and the adaptation curve</SectionHead>
        <p>
          Ukraine&rsquo;s Patriot PAC-3 batteries opened with genuine triumphs:
          the first-ever combat interception of a Kh-47M2 Kinzhal in May 2023,
          and a reported 34-for-34 record against ballistic missiles targeting
          Kyiv that spring. A Ukrainian operator noted the
          &ldquo;hypersonic&rdquo; Kinzhal actually arrived at roughly Mach
          3.6, a third of Moscow&rsquo;s advertised speed. The hit-to-kill
          mechanics worked. Then Russia adapted.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="24%">
            Average interception of 939 Iskander/Kinzhal launches through 24
            Oct 2025: 227 intercepted (RUSI/CSIS, Ivaniuk dataset)
          </Stat>
          <Stat n="273/345">
            Attacks in which not a single ballistic missile was intercepted
          </Stat>
          <Stat n="37→6%">
            Interception rate, August to September 2025, after Russian
            terminal-maneuver upgrade (FT / Ukrainian Air Force data)
          </Stat>
        </div>

        <p>
          The September 2025 collapse is the single most important data point
          in this record. Per the Financial Times and US Defense Intelligence
          Agency assessments, Russia upgraded the Iskander-M and Kinzhal with
          terminal-phase maneuvers, steep dives and lateral jinks that break
          the Patriot&rsquo;s radar track in the final seconds. Interception
          fell from 37% to 6% in one month even as Russia launched fewer
          missiles. No hardware changed hands. The shield was defeated by a
          software update on the other side.
        </p>
        <p>
          Russia paired adaptation with attrition: decoys that mimic the
          warhead&rsquo;s radar and thermal signature, salvos timed to empty
          launcher canisters, and Iskander strikes, cued by electronic
          intelligence off the Patriot&rsquo;s own radar emissions, that
          destroyed launchers and radars in place. A battery&rsquo;s
          billion-dollar sensor is also its beacon. Russian industry now
          produces an estimated 840 to 1,020 Iskander/Kinzhal-class missiles
          per year; no Western interceptor line comes close.
        </p>

        {/* ─── §05 ─── */}
        <SectionHead num="§05">June 2025: the shield held, and bled</SectionHead>
        <p>
          The twelve-day Israel-Iran war of June 2025 was the largest ballistic
          missile defense engagement in history: roughly 550 to 574 Iranian
          ballistic missiles against the layered Arrow-2/Arrow-3,
          David&rsquo;s Sling, THAAD, and ship-based SM-3 architecture. The
          headline number was genuinely impressive, approximately 86%
          intercepted overall, with 28 to 29 killed in Israel. The trend line
          underneath it was not.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
          <Stat n="8→25%">
            Iranian missile leakage: 8% in week one, 16% in the second half,
            25% on the final day (JINSA)
          </Stat>
          <Stat n="~25%">
            Share of the entire US THAAD interceptor stockpile expended in
            twelve days: 100 to 150+ rounds (CNN, JINSA)
          </Stat>
          <Stat n="1.5–8yr">
            Estimated time to replenish the THAAD interceptors expended in
            those twelve days
          </Stat>
        </div>

        <p>
          Iran adapted inside a two-week war. Interception fell from 92% in the
          first week to 75% by the end as Tehran varied salvo timing, geometry,
          and missile mix; its best single strike put 10 of 27 missiles onto
          Israeli soil. Meanwhile the defenders burned interceptors faster than
          any production line can replace them: more than 150 THAAD rounds and
          roughly 80 SM-3s, the SM-3 expenditure alone exceeding the largest
          annual delivery of the Block IIA variant, of which the US buys about
          a dozen a year.
        </p>

        <MinorHead>The economics of the exchange</MinorHead>

        <DataTable
          caption="Unit costs per 2025 Missile Defense Agency budget documents and public reporting. Every ratio favors the attacker."
          head={["Interceptor", "Unit cost", "Typical target", "Target cost", "Exchange ratio"]}
          rows={[
            ["SM-3 Block IIA", "$28–36M", "Iranian MRBM", "$0.5–2M", "~18:1"],
            ["THAAD", "$12.7M", "Iranian MRBM", "$0.5–2M", "~6–25:1"],
            ["PAC-3 MSE", "~$4M", "Shahed-136 drone", "$20–50K", "~80–120:1"],
            [
              "AN/TPY-2 radar (asset lost)",
              "~$1B",
              "Attack drones",
              "~$30K each",
              ">30,000:1",
            ],
          ]}
        />

        <p>
          This is the arithmetic that no radar upgrade fixes. The attacker adds
          warheads, decoys, and drones for six figures; the defender answers
          with eight-figure interceptors from years-long production queues.
          Saturation is not a tactic that sometimes works against missile
          defense. It is the condition under which missile defense always
          eventually operates.
        </p>

        {/* ─── §06 ─── */}
        <SectionHead num="§06">The homeland shield and the physics limit</SectionHead>
        <p>
          Ground-based Midcourse Defense, the only US system defending the
          homeland against intercontinental missiles, has hit its target in
          roughly 55 to 57% of intercept tests, at a cumulative cost near $63
          billion. Those tests are scripted: the defense knows the
          target&rsquo;s timing, trajectory, and signature in advance, an
          advantage no real attack will grant. Real-world kill probability is
          unknown and presumed lower.
        </p>
        <p>
          The deeper problem is physics, not engineering. In the vacuum of
          midcourse space there is no atmospheric drag, so a lightweight
          balloon decoy and a heavy nuclear warhead follow identical
          trajectories. Early GMD tests failed to distinguish mock warheads
          from simple balloons; the American Physical Society&rsquo;s studies
          concluded the midcourse discrimination problem remains unsolved, and
          that a boost-phase space constellation against solid-fuel missiles
          would require on the order of 1,600 orbiting interceptors.
        </p>
        <p>
          Into this record arrives Golden Dome, the space-based national shield
          announced in 2025 at a claimed $175 billion. The Congressional Budget
          Office&rsquo;s May 2026 assessment priced it at $1.191 trillion over
          twenty years, nearly seven times the announced figure, with the
          7,800-satellite interceptor layer alone consuming roughly $743
          billion. The CBO&rsquo;s own language: the system &ldquo;would not be
          an impenetrable shield or be able to fully counter a large
          attack&rdquo; by Russia or China. The one point on which contractors,
          critics, GAO, CBO, and the physics community agree is that the
          attacker&rsquo;s next warhead is always cheaper than the
          defender&rsquo;s next interceptor.
        </p>

        {/* ─── §07 ─── */}
        <SectionHead num="§07">The record, side by side</SectionHead>

        <DataTable
          caption="Sources: GAO NSIAD-92-340; Middlebury CNS; RUSI/CSIS (Ivaniuk dataset); Financial Times / Ukrainian Air Force; IDF and JINSA; Arms Control Association; CBO. Where belligerent self-reporting and independent analysis diverge, this table shows the independent figure."
          head={["Conflict", "System", "Claimed", "Verified / independent", "Decisive factor"]}
          rows={[
            [
              "Gulf War, 1991",
              "Patriot PAC-2",
              "96%",
              "9% → ~0%",
              "Debris discrimination failure; definitional inflation",
            ],
            [
              "Saudi Arabia, 2017–18",
              "Patriot PAC-2/3",
              ">90%",
              "Near zero",
              "Separating warhead defeated tracking; forensic geolocation",
            ],
            [
              "Ukraine, 2023–26",
              "Patriot PAC-3 MSE",
              "100% (early)",
              "24% avg; 6% low",
              "Terminal maneuvers, decoys, saturation, launcher strikes",
            ],
            [
              "Israel–Iran, 2025",
              "Arrow/THAAD/SM-3",
              "~90%+",
              "86% → 75%",
              "Adaptation inside 12 days; interceptor exhaustion",
            ],
            [
              "Homeland (tests)",
              "GMD",
              "Operational",
              "~55% scripted",
              "Midcourse decoy problem unsolved",
            ],
          ]}
        />

        {/* ─── §08 ─── */}
        <SectionHead num="§08">
          The policy stakes: Section 219 and the price of false confidence
        </SectionHead>
        <p>
          Section 219 of the House FY2027 National Defense Authorization Act
          establishes a United States-Israel Defense Technology Cooperation
          Initiative, directing the Secretary of Defense to appoint an
          executive agent to expand integration of the two nations&rsquo;
          defense-technology and industrial bases: missile defense,
          counter-drone, AI, cyber, autonomy, directed energy. The
          Massie-Khanna amendment to strip it was denied a floor vote by the
          Rules Committee; the provision has, to date, received no debate. Rep.
          Thomas Massie called it &ldquo;an unprecedented escalation of foreign
          involvement in our military.&rdquo; Senator Bernie Sanders said it
          would grant Israel &ldquo;more military integration than any NATO
          ally.&rdquo;
        </p>

        <Flag label="Corrections to the public debate">
          <p className="text-[15px] leading-relaxed mb-4">
            <strong className="text-cream">
              The provision is industrial-base integration, not a command
              merger.
            </strong>{" "}
            Even the Quincy Institute, a leading critic, describes Section 219
            as integrating defense industrial sectors; it does not place forces
            under joint command. The constitutional and accountability
            objections stand on their own; overstating the text weakens them.
          </p>
          <p className="text-[15px] leading-relaxed mb-4">
            <strong className="text-cream">
              The budget increase is ~42%, not 67%.
            </strong>{" "}
            The FY2027 request of roughly $1.5 trillion follows an enacted
            FY2026 budget near $1 trillion. Still the largest peacetime
            increase in American history, and accurate.
          </p>
          <p className="text-[15px] leading-relaxed mb-0">
            <strong className="text-cream">
              The 28 February 2026 strikes are real, and the numbers matter.
            </strong>{" "}
            The US-Israeli operation that killed Iran&rsquo;s Supreme Leader
            also destroyed the Shajareh Tayyebeh school in Minab: roughly 156
            killed, about 120 of them children, verified by NYT, Washington
            Post, Reuters, and BBC. The often-cited &ldquo;168
            schoolchildren&rdquo; is imprecise. Precision is not pedantry; it
            is what separates analysis from propaganda.
          </p>
        </Flag>

        <p>
          Here the two halves of this briefing meet. The June 2025 strikes on
          Iran were undertaken by leaderships that believed the missile shield
          could absorb the answer. It nearly could, at the cost of a quarter of
          the American THAAD arsenal, a rising leakage curve, and a
          demonstration to every adversary on Earth of exactly how long the
          magazine lasts. Confidence in the shield lowered the threshold for
          war; the war then drained the shield. That feedback loop, not any
          single intercept percentage, is the strategic finding of thirty-five
          years of data. A nation that binds its defense industrial base ever
          more tightly to a partner engaged in continuous regional war, without
          debate, without a vote on the merits, is compounding the same wager.
        </p>

        <MinorHead>What would change this assessment</MinorHead>
        <p className="text-cream-muted italic">
          This briefing states its falsification conditions, because analysis
          that cannot be wrong is advocacy. The thesis fails if any of the
          following is demonstrated:
        </p>

        <div className="bg-river-deep border border-river-current/40 rounded px-6 py-2 my-8">
          <Falsifier title="Unscripted intercept of maneuvering threats under saturation.">
            A realistic, non-choreographed test campaign defeating
            terminal-maneuvering and hypersonic targets in salvo conditions.
          </Falsifier>
          <Falsifier title="A cost-exchange ratio below 1:1.">
            Directed-energy systems, Israel&rsquo;s Iron Beam at a reported ~$2
            per shot, are the only near-term candidate. Deployed at scale, they
            change the arithmetic.
          </Falsifier>
          <Falsifier title="Sustained combat interception above 80% against an adapting adversary.">
            Not a first-week figure. A full-campaign figure, held while the
            other side updates its software.
          </Falsifier>
        </div>

        <p>
          Until then, &ldquo;impenetrable shield&rdquo; remains a marketing
          claim, and every dollar and every policy built on it inherits the gap
          between the brochure and the battlefield.
        </p>

        {/* ─── SOURCES ─── */}
        <div className="mt-16 pt-10 border-t border-sovereign-gold/20">
          <h2 className="font-display text-[22px] font-bold text-cream mb-5">
            Sources and method
          </h2>
          <p className="text-[14px] text-cream-muted leading-[1.8] mb-4">
            <strong className="text-cream">Primary sources:</strong> GAO
            NSIAD-92-340 and NSIAD-93-22R; GAO/IMTEC-92-26 (Dhahran); testimony
            of Theodore Postol and George N. Lewis, House Government Operations
            Committee, April 1992; Science &amp; Global Security Vol. 8 (APS
            review); Middlebury Institute Center for Nonproliferation Studies
            forensic analyses (Lewis et al., 2017 to 18); RUSI and CSIS
            analyses of the Ivaniuk launch dataset through October 2025;
            Financial Times, 2 October 2025 (Ukrainian Air Force data, Centre
            for Information Resilience); CNN, 28 July 2025 (THAAD expenditure);
            JINSA campaign analysis of the June 2025 war (Cicurel); IDF public
            statements; Congressional Budget Office, Potential Costs of a
            National Missile Defense System, May 2026; Arms Control Association
            GMD test record; House FY2027 NDAA text (Sec. 219, formerly 224;
            Senate companion Sec. 1217).
          </p>
          <p className="text-[14px] text-cream-muted leading-[1.8]">
            <strong className="text-cream">Method:</strong> where government or
            belligerent self-reporting diverges from independent forensic or
            academic analysis, this briefing privileges the independent figure
            and flags the dispute. Combat interception data is fragmentary and
            politicized in every conflict cited; all 2026 figures are stated as
            of early July 2026. JINSA figures are used for trend, with its
            institutional orientation noted. &ldquo;Success&rdquo; is defined
            per &sect;01 throughout. Companion briefing: &#8470;02,{" "}
            <a
              href="/briefings/reliability-deficit"
              className="text-sovereign-gold hover:underline underline-offset-4"
            >
              &ldquo;The Reliability Deficit&rdquo;
            </a>{" "}
            (the Islamabad Memorandum).
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
