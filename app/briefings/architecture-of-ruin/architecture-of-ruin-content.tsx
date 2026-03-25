"use client"

/* ─── helpers ─── */
function DataCallout({
  number,
  context,
  source,
}: {
  number: string
  context: string
  source: string
}) {
  return (
    <div className="bg-[#142638] border-l-[3px] border-[#d4a74a] rounded-r px-6 sm:px-9 py-8 my-10">
      <div className="font-mono text-[clamp(32px,5vw,52px)] font-medium text-[#d4a74a] leading-tight mb-2">
        {number}
      </div>
      <div className="text-[15px] text-[#a0b4c8] leading-relaxed">{context}</div>
      <div className="text-xs text-[#6a7f94] mt-3 italic">{source}</div>
    </div>
  )
}

function PullQuote({ children, attr }: { children: React.ReactNode; attr: string }) {
  return (
    <div className="border-t border-b border-[#d4a74a]/30 py-10 my-12 text-center">
      <p className="font-serif text-[clamp(20px,3vw,28px)] italic text-[#e8dfd0] leading-relaxed max-w-[600px] mx-auto">
        {children}
      </p>
      <div className="text-[13px] text-[#d4a74a] tracking-[2px] uppercase mt-5">{attr}</div>
    </div>
  )
}

function RedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r my-10 px-6 sm:px-9 py-8 border-l-[3px] border-[#c73032]"
      style={{
        background: "linear-gradient(135deg, rgba(199,48,50,0.15) 0%, rgba(13,27,42,0.95) 100%)",
      }}
    >
      {children}
    </div>
  )
}

function CaseHeader({
  label,
  title,
  meta,
}: {
  label: string
  title: string
  meta: string
}) {
  return (
    <div className="bg-[#142638] px-6 sm:px-9 py-12 my-10 rounded relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c73032] via-[#d4a74a] to-[#1b4965]" />
      <div className="font-mono text-xs text-[#c73032] tracking-[3px] uppercase mb-3">{label}</div>
      <h3 className="font-serif text-[clamp(24px,3.5vw,36px)] font-bold leading-tight">{title}</h3>
      <div className="text-sm text-[#a0b4c8] mt-3">{meta}</div>
    </div>
  )
}

function EvidenceCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#142638] p-6 rounded border-t-2 border-[#d4a74a]">
      <div className="font-mono text-[28px] text-[#d4a74a] mb-2">{number}</div>
      <div className="text-sm text-[#a0b4c8] leading-relaxed">{label}</div>
    </div>
  )
}

function SectionBreak({
  title,
  korean,
}: {
  title: string
  korean?: string
}) {
  return (
    <div className="text-center py-20 px-6 max-w-[720px] mx-auto">
      <div className="w-[60px] h-[2px] bg-[#d4a74a] mx-auto mb-10" />
      <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-bold leading-tight mb-4">
        {title}
      </h2>
      {korean && (
        <div className="font-[&apos;Noto_Serif_KR&apos;,serif] text-base text-[#d4a74a] tracking-[3px]">
          {korean}
        </div>
      )}
    </div>
  )
}

/* ─── main ─── */
export function ArchitectureOfRuinContent() {
  return (
    <article>
      {/* ═══ HERO ═══ */}
      <div
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0d1b2a 0%, #1b4965 50%, #c73032 100%)",
        }}
      >
        {/* scan-line overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(13,27,42,0.15) 2px, rgba(13,27,42,0.15) 4px)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="text-[clamp(14px,2vw,18px)] text-[#d4a74a] tracking-[6px] uppercase mb-10 animate-fade-up">
            주체강 &middot; Navigate the Current
          </div>

          <h1 className="font-serif font-black text-[clamp(36px,7vw,80px)] leading-[1.05] max-w-[900px] mb-8">
            The Architecture<br />
            of <span className="text-[#d4a74a]">Ruin</span>
          </h1>

          <p className="font-light text-[clamp(16px,2.5vw,22px)] text-[#a0b4c8] max-w-[640px] leading-relaxed mb-12">
            What happens when you invite a superpower&rsquo;s weapons onto your soil to fight your
            neighbor. Six countries found out. Five of them are still paying.
          </p>

          <div className="flex gap-8 sm:gap-12 flex-wrap justify-center">
            {[
              { n: "750", l: "US Military Sites" },
              { n: "$55B", l: "Annual Cost" },
              { n: "80", l: "Countries Hosting" },
              { n: "1", l: "That Reunified" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <span className="font-mono text-[clamp(28px,5vw,48px)] font-medium text-[#d4a74a] block">
                  {s.n}
                </span>
                <span className="text-[13px] text-[#a0b4c8] tracking-[2px] uppercase mt-1 block">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ OPENING ═══ */}
      <div className="max-w-[720px] mx-auto px-6 py-20 space-y-6 text-lg leading-[1.8]">
        <p>I&rsquo;ve been staring at a photograph for two hours.</p>

        <p>
          A fire truck parked in rubble. Farsi on its side. Firefighters picking through what used to
          be somebody&rsquo;s street. Cars crushed under concrete. A man in a blue shirt sweeping
          debris with a broom, which is the kind of detail that breaks you if you let it — because
          the broom means he thinks there&rsquo;s something worth saving underneath.
        </p>

        <p>This is what hosting looks like.</p>

        <p>
          Not the press conference. Not the handshake between a president and a general standing in
          front of flags. Not the glossy brochure about mutual defense and shared values. The broom.
          The crushed Peugeot. The sunset through dust that used to be a ceiling.
        </p>

        <p>
          The weapons that hit this street weren&rsquo;t manufactured here. They were staged in
          neighboring countries — Gulf states that agreed to host American military architecture in
          exchange for a security umbrella. Those hosts are finding out what hosting costs in real
          time. On March 2, 2026, Iranian drones struck Qatar&rsquo;s Ras Laffan Industrial City.
          QatarEnergy — the world&rsquo;s largest LNG producer — halted all production and declared
          force majeure. Five days ago, CEO Saad al-Kaabi told Reuters that{" "}
          <span className="font-mono text-[#d4a74a]">17%</span> of Qatar&rsquo;s LNG export
          capacity is offline for{" "}
          <span className="font-mono text-[#d4a74a]">three to five years</span>. Estimated lost
          revenue: <span className="font-mono text-[#d4a74a]">$20 billion annually</span>. The
          damaged facilities cost{" "}
          <span className="font-mono text-[#d4a74a]">$26 billion</span> to build. Force majeure
          declared on long-term contracts to South Korea, China, Italy, and Belgium.
        </p>

        <p>
          Dubai International Airport — the world&rsquo;s busiest for international traffic — has
          been struck multiple times. The Burj Al Arab was hit. Palm Jumeirah was hit. ADNOC shut
          its Ruwais refinery —{" "}
          <span className="font-mono text-[#d4a74a]">922,000 barrels per day</span> — after a drone
          strike. Saudi Aramco&rsquo;s Ras Tanura refinery caught fire after a drone attack. The
          Strait of Hormuz is effectively blocked. Brent crude touched{" "}
          <span className="font-mono text-[#d4a74a]">$119 a barrel</span>.
        </p>

        <p>
          Al-Kaabi said it plainly: &ldquo;If Israel attacked Iran, it&rsquo;s between Iran and
          Israel. It has nothing to do with us and the region.&rdquo;
        </p>

        <p>
          That&rsquo;s the QatarEnergy CEO — the man running the world&rsquo;s largest LNG
          operation — telling you this is not his war. He&rsquo;s hosting the bases. He&rsquo;s
          paying the price. Iran has fired over{" "}
          <span className="font-mono text-[#d4a74a]">2,000</span> missiles and drones at Gulf
          states since February 28. The hosts and the neighbors both burn. The only party that
          doesn&rsquo;t is the one that manufactured the weapons eight thousand miles away.
        </p>

        <p>
          I&rsquo;ve spent the last three years reading every declassified document, every World Bank
          assessment, every ICJ ruling, every peer-reviewed study I could find about what happens to
          nations that agree to host foreign military forces aimed at their neighbors. Not opinion
          pieces. Not editorial boards. The primary sources. The documents the governments themselves
          produced and then tried to bury.
        </p>

        <p>
          What I found is a pattern so consistent it should be taught in every political science
          department on earth. It isn&rsquo;t. And the reason it isn&rsquo;t is the same reason the
          pattern keeps repeating.
        </p>
      </div>

      {/* ═══ THE PATTERN ═══ */}
      <SectionBreak title="The Pattern Nobody Teaches" korean="반복되는 파괴의 패턴" />

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>The architecture works like this.</p>

        <p>
          A superpower identifies a geopolitical objective near a smaller nation&rsquo;s border.
          Direct military intervention carries unacceptable domestic political costs. So the
          superpower offers the smaller nation a deal: host our weapons, host our personnel, accept
          our intelligence infrastructure. In exchange, you get advanced military technology, economic
          aid, and the psychological comfort of a security umbrella.
        </p>

        <p>The host nation accepts. And the clock starts.</p>

        <RedBlock>
          <p className="text-[17px] leading-relaxed">
            What follows is not a tragic accident of war. It is the deliberate, structural design of
            what military researchers call the <em className="text-[#e8dfd0]">proxy paradigm</em>.
            The sponsor achieves its objectives at arm&rsquo;s length. The host absorbs the
            catastrophic externalities. Every time.
          </p>
        </RedBlock>

        <p>
          I traced this pattern across six countries, three continents, and seven decades. Vietnam.
          Honduras. Pakistan. Lebanon. Ukraine. And the one that sits at the center of everything I
          care about — Korea.
        </p>

        <p>The data doesn&rsquo;t whisper. It screams.</p>
      </div>

      {/* ═══ THE TARGET EFFECT ═══ */}
      <SectionBreak title="The Target Effect" korean="표적 효과" />

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          Political scientists have a name for what happens when you invite foreign weapons onto your
          soil. They call it the <strong className="text-[#e8dfd0] font-semibold">Target Effect</strong>. The theory says
          foreign bases are established to project power and deter aggression. The reality says those
          bases transform the host into a primary target.
        </p>

        <p>
          Not a secondary target. Not collateral. <em className="text-[#e8dfd0]">Primary</em>.
        </p>

        <p>
          The United States operates approximately{" "}
          <span className="font-mono text-[#d4a74a]">750</span> military sites across{" "}
          <span className="font-mono text-[#d4a74a]">80</span> countries, costing roughly{" "}
          <span className="font-mono text-[#d4a74a]">$55 billion</span> annually. That&rsquo;s an
          architecture designed for American force projection. The host nation&rsquo;s security is
          not the objective. It&rsquo;s the sales pitch.
        </p>

        <DataCallout
          number="750"
          context="U.S. military facilities in 80 countries — the largest forward-deployed military architecture in human history. The host nation pays in sovereignty. The adversary pays attention."
          source="IISS Strategic Dossier, 2022"
        />

        <p>
          Okinawa proves this in peacetime. The prefecture constitutes{" "}
          <span className="font-mono">0.6%</span> of Japan&rsquo;s total landmass but hosts{" "}
          <span className="font-mono">70.3%</span> of all exclusive-use U.S. military facilities in
          the country. Bases occupy 15% of the main island. The result: 6,052 documented criminal
          offenses by U.S. military personnel since reversion, including 581 heinous crimes and 129
          rape cases. PFAS levels in groundwater near Futenma reached 1,600 parts per trillion in
          2025 — thirty-two times Japan&rsquo;s safety standard.
        </p>

        <p>That&rsquo;s what the Target Effect looks like when nobody&rsquo;s shooting.</p>

        <p>When the shooting starts, the arithmetic gets medieval.</p>
      </div>

      {/* ═══ VIETNAM ═══ */}
      <div className="max-w-[720px] mx-auto px-6">
        <CaseHeader
          label="Case Study I"
          title="Vietnam: The Template"
          meta="Economic asphyxiation, environmental annihilation, and the blueprint for every proxy war that followed"
        />
      </div>

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          South Vietnam wasn&rsquo;t just a battlefield. It was a laboratory. The most intense
          bombing campaign in military history was also the most detailed economic experiment in the
          destruction of a host nation&rsquo;s domestic economy by its own protector.
        </p>

        <p>
          Nearly three million Americans served in South Vietnam. At peak deployment in April 1969,
          more than half a million U.S. personnel occupied a small agrarian country. The purchasing
          power they carried — combined with billions in aid — didn&rsquo;t modernize the economy. It
          vaporized it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
          <EvidenceCard number="500,000+" label="Peak U.S. personnel in a nation of 17 million" />
          <EvidenceCard
            number="20,000 km²"
            label="Forest permanently destroyed by bombing and chemical agents"
          />
          <EvidenceCard
            number="2,948,000"
            label="Tons of ordnance dropped on southern sub-basin alone (1965–1973)"
          />
          <EvidenceCard number="∞" label="Watershed hydrology permanently altered" />
        </div>

        <p>
          The inflation mechanism was elegant in its cruelty. American soldiers offered wages that
          local employers couldn&rsquo;t match. Vietnamese workers abandoned traditional sectors to
          serve the occupying economy. Civil servants and ARVN soldiers — the people tasked with
          defending the state — watched their fixed incomes evaporate against wartime prices. To feed
          their families, they turned to graft, black markets, and theft.
        </p>

        <p>
          The United States didn&rsquo;t just fight a war in Vietnam. It ate the economy from the
          inside and called it aid.
        </p>

        <p>
          And the geography. The U.S. military engaged in atmospheric warfare — literal climate
          modification designed to induce typhoons. In the Lower Mekong Basin, deliberate vegetation
          removal by bombing and chemical spraying cleared 20,000 square kilometers of forest. Not
          damaged. Cleared. The watershed hydrology was permanently altered.
        </p>

        <p>
          South Vietnam hosted American weapons to fight its neighbor. It ceased to exist as a
          country ten years later.
        </p>
      </div>

      {/* ═══ THE LEGAL TRAP ═══ */}
      <div className="max-w-[720px] mx-auto px-6">
        <CaseHeader
          label="The Legal Architecture"
          title="You Take the Blame. They Go Home."
          meta="ICJ Nicaragua v. United States (1986) — the ruling that protects every superpower sponsor"
        />
      </div>

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          This is the part that should keep every defense minister in a host nation awake at three in
          the morning.
        </p>

        <p>
          In 1986, the International Court of Justice ruled on{" "}
          <em className="text-[#e8dfd0]">Nicaragua v. United States</em>. The case examined
          America&rsquo;s role in directing, financing, training, equipping, and supplying the Contra
          insurgency operating from Honduran territory against Nicaragua.
        </p>

        <p>
          The facts were not in dispute. The United States provided what the Court called
          &ldquo;preponderant or decisive&rdquo; participation. The CIA produced and distributed a
          psychological operations manual that explicitly advised the &ldquo;neutralization&rdquo; of
          local officials. The U.S. mined Nicaraguan ports directly.
        </p>

        <p>
          And the ICJ ruled that none of this was sufficient to hold the United States legally
          responsible for the specific war crimes committed by the Contras.
        </p>

        <PullQuote attr='The "Effective Control" Doctrine — ICJ, 1986'>
          A superpower can flood a host nation with weapons, build bases, supply intelligence, write
          the tactical manuals that encourage atrocities, and fund the entire endeavor. When the
          inevitable war crimes occur, international law holds the local actors responsible.
        </PullQuote>

        <p>
          The Court established the &ldquo;effective control&rdquo; test. For the sponsor to bear
          legal responsibility, it must be proven that the sponsor exercised{" "}
          <em className="text-[#e8dfd0]">effective control</em> over the specific operations in which
          violations occurred. Not general control. Not strategic direction. Not the fact that without
          the sponsor&rsquo;s weapons and money, the violations would have been impossible.
        </p>

        <p>Specific. Operational. Control.</p>

        <p>That threshold has never been met in the decades since. It was designed not to be met.</p>

        <p>
          Honduras hosted the Contras. The CIA trained Battalion 3-16, which disappeared 184
          Honduran citizens — its own people — to protect the proxy infrastructure. Government
          records were burned. Investigators found empty filing cabinets. The files themselves became{" "}
          <em className="text-[#e8dfd0]">desaparecidos</em>.
        </p>

        <p>The United States went home. Honduras inherited the ashes and the blame.</p>
      </div>

      {/* ═══ UKRAINE ═══ */}
      <div className="max-w-[720px] mx-auto px-6">
        <CaseHeader
          label="Case Study III"
          title="Ukraine: The Contemporary Horror"
          meta="The most documented proxy devastation in history, happening in real time"
        />
      </div>

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          George Kennan called it in 1997. William Burns cabled it in 2008. Henry Kissinger wrote it
          in 2014. Three of the most authoritative voices in American foreign policy — the architect
          of containment, the future CIA director, the most consequential secretary of state in a
          generation — all said the same thing: expanding NATO toward Ukraine would provoke exactly
          the catastrophe that followed.
        </p>

        <p>
          Burns&rsquo; cable was titled &ldquo;NYET MEANS NYET.&rdquo; He wrote that Ukrainian entry
          into NATO was &ldquo;the brightest of all red lines for the Russian elite.&rdquo; Kissinger
          told <em className="text-[#e8dfd0]">The Economist</em> in 2023 that the NATO offer was
          &ldquo;a grave mistake&rdquo; that &ldquo;led to this war.&rdquo;
        </p>

        <p>
          Nobody listened. The Bucharest Summit declared Ukraine &ldquo;will become&rdquo; a NATO
          member. Burns later reflected that the summit left &ldquo;the worst of both worlds&rdquo;
          — hopes the West couldn&rsquo;t deliver on, and fears Russia felt compelled to act on.
        </p>

        <p>
          The numbers that followed are the kind you read twice because the first time your brain
          refuses them.
        </p>

        <DataCallout
          number="$524B"
          context="Total reconstruction cost estimated by the World Bank — approximately 2.8 times Ukraine's pre-war GDP. Ninety percent of thermal power generation destroyed. Energy system at one-third capacity."
          source="World Bank Fourth Rapid Damage and Needs Assessment, February 2025"
        />

        <DataCallout
          number="41M → 31M"
          context="Ukraine's population collapse in three years. 5.9 million refugees abroad. 3.7 million internally displaced. Fertility rate below 1.0 — the lowest in Europe. Only 43% of refugees plan to return."
          source="UNHCR, EUobserver, CIA World Factbook, 2024–2026"
        />

        <p>
          The weapons were delivered in a pattern that military analysts describe as
          &ldquo;spoon-fed&rdquo; — enough to survive, never enough to win. HIMARS requested early
          2022, delivered mid-year. Western tanks debated for months, committed January 2023. F-16s
          requested 2022, first deliveries mid-2024. A Ukrainian think tank calculated the real value
          of U.S. military aid at <span className="font-mono">$18.3 billion</span> — roughly
          one-third of the official <span className="font-mono">$65.9 billion</span> figure.
        </p>

        <p>
          Russia occupied more ground in 2025 than in any year since the initial invasion.
          That&rsquo;s what &ldquo;enough to survive but not to win&rdquo; looks like on a map.
        </p>

        <p>
          Ukraine hosted Western military architecture to fight its neighbor. The Vienna Institute
          for International Economic Studies concluded that &ldquo;regardless of how long the war
          lasts, Ukraine is unlikely to recover demographically.&rdquo;
        </p>

        <p>
          The country that hosted the weapons will carry the scars for generations. The countries
          that supplied them will move on to the next proxy.
        </p>
      </div>

      {/* ═══ PAKISTAN & LEBANON ═══ */}
      <SectionBreak
        title="The Contagion Doesn't Stop at Borders"
        korean="전염은 국경에서 멈추지 않는다"
      />

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          Pakistan hosted American intelligence and logistics for the war on terror. It received $20
          billion in aid. It lost $150 billion in economic damage. Over 83,000 Pakistani civilians
          and security personnel were killed in terrorist attacks between 2001 and 2021.
        </p>

        <p>
          On December 16, 2014, terrorists attacked the Army Public School in Peshawar and killed
          nearly 150 people, most of them children.
        </p>

        <p className="mb-5">One hundred and fifty children.</p>

        <p>
          That&rsquo;s what blowback looks like when you host a superpower&rsquo;s war against your
          neighbor. The violence doesn&rsquo;t stay in the designated theater. It bleeds into the
          host&rsquo;s schools, mosques, and markets.
        </p>

        <p>
          Lebanon tells the same story stretched across decades. A host nation for Syrian, Iranian,
          Israeli, and Western proxy operations since the 1970s. The World Bank&rsquo;s damage
          assessment: <span className="font-mono text-[#d4a74a]">$14 billion</span> from the most
          recent conflict alone. GDP contracted 7.1% in 2024, compounding a cumulative decline of
          40% since 2019. The housing sector took $4.6 billion in damage. Over 4,285 dead.
        </p>

        <p>
          Lebanon didn&rsquo;t host one proxy war. It hosted all of them simultaneously. And it has
          been paying continuously for fifty years.
        </p>
      </div>

      {/* ═══ GERMANY ═══ */}
      <div className="max-w-[720px] mx-auto px-6">
        <CaseHeader
          label="The Exception That Proves Everything"
          title="Germany: What Actually Worked"
          meta="Forty-five years as nuclear ground zero — then reunification through engagement, not escalation"
        />
      </div>

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          At peak deployment, approximately <span className="font-mono">3,500</span> nuclear
          warheads sat on German soil. Twenty-one different warhead types. The Pershing II missile
          could reach Moscow in six minutes. Germany wasn&rsquo;t a country. It was a fuse.
        </p>

        <p>
          On October 22, 1983,{" "}
          <span className="font-mono text-[#d4a74a]">1.3 million Germans</span> took to the streets
          in the largest mass demonstrations in West German history. They understood something their
          government was pretending not to know: the weapons on their soil didn&rsquo;t protect them.
          The weapons made them the target.
        </p>

        <p>
          The Berlin Wall killed at least 140 people. The inner German border killed over 650. Three
          and a half million East Germans fled before the Wall went up. Another 75,000 were
          imprisoned for trying to escape. Forty-five years of national division enforced by the same
          Cold War logic that put those warheads on German soil.
        </p>

        <p>And then something happened that the military establishment couldn&rsquo;t explain.</p>

        <PullQuote attr="The German Lesson">
          Reunification was achieved not through military escalation but through decades of
          diplomatic engagement — Ostpolitik, the Helsinki Accords, economic ties, and
          people-to-people contact.
        </PullQuote>

        <p>
          Egon Bahr called it <em className="text-[#e8dfd0]">Wandel durch Ann&auml;herung</em>.
          Change through rapprochement. Willy Brandt built it into policy. The 1970 Moscow Treaty
          renounced force. The 1972 Basic Treaty established mutual recognition. The 1975 Helsinki
          Final Act created frameworks for human rights monitoring that seeded dissident movements
          across Eastern Europe — Charter 77, Solidarity, the Moscow Helsinki Group.
        </p>

        <p>
          The INF Treaty eliminated the Pershing missiles in December 1987. The Wall fell less than
          two years later.
        </p>

        <p>
          Angela Merkel said it:{" "}
          <em className="text-[#e8dfd0]">Nichts muss so bleiben, wie es ist.</em>
        </p>

        <p>Nothing must remain as it is.</p>

        <p>
          Germany reunified because someone chose diplomacy over permanent military confrontation.
          Not instead of security. In addition to it. Brandt didn&rsquo;t disarm West Germany. He
          opened a second channel. And that second channel is what ended the division.
        </p>
      </div>

      {/* ═══ KOREA ═══ */}
      <SectionBreak title="한반도 — The Peninsula" korean="75년의 분단. 독일보다 30년 더 길다." />

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          South Korea hosts 28,500 U.S. troops, headquartered at Camp Humphreys — the largest
          American overseas military base on earth. A $10.8 billion, 3,454-acre installation that displaced entire
          villages during construction. In 2006, over 10,000 police and soldiers drove approximately
          1,000 villagers from their homes. Some 600 were reported injured.
        </p>

        <p>
          South Korea accepted THAAD in 2016. China&rsquo;s retaliation cost the Korean economy at
          least $7.5 billion — half a percent of GDP. Chinese tourist arrivals collapsed 48% in a
          single year. Hyundai&rsquo;s China sales dropped 64%. The Lotte Group, which provided land
          for the battery, lost $1.7 billion and abandoned its entire China investment of roughly $9
          billion.
        </p>

        <p>
          Benzene contamination in groundwater at Yongsan Garrison reached 1,170 times normal levels.
          USFK crime cases nearly doubled over five years — 351 in 2018 to 599 in 2023.
        </p>

        <p>
          And here&rsquo;s the detail that nobody talks about: in 2026, the United States relocated
          THAAD from South Korea to the Middle East during the Iran crisis. The system that cost
          Korea $7.5 billion in Chinese economic retaliation, that poisoned groundwater, that
          fractured relations with its largest trading partner — turned out to be portable. Deployable
          elsewhere when the Americans needed it somewhere else.
        </p>

        <RedBlock>
          <p className="text-[17px] leading-relaxed mb-4">
            Fifty-six percent of South Koreans aged 15 to 19 favor withdrawal of U.S. troops. The
            generation that will inherit this peninsula is already asking the question their parents
            were too afraid to ask.
          </p>
          <p className="text-[13px] text-[#a0b4c8]">
            Gallup World Poll, 2006
          </p>
        </RedBlock>

        <p>Korea has been divided for seventy-five years. Germany was divided for forty-five.</p>

        <p>Germany reunified through engagement. Korea is still hosting the weapons.</p>
      </div>

      {/* ═══ THE CLOSE ═══ */}
      <SectionBreak title="The Arithmetic of Invitation" />

      <div className="max-w-[720px] mx-auto px-6 pb-20 space-y-6 text-lg leading-[1.8]">
        <p>
          I&rsquo;ve read every case study. I&rsquo;ve run the numbers on every host nation.
          I&rsquo;ve traced the legal precedents through the ICJ and the ad hoc tribunals.
          I&rsquo;ve read the declassified cables the diplomats wrote before the wars started and the
          damage assessments the World Bank published after the wars ended.
        </p>

        <p>The conclusion isn&rsquo;t ambiguous.</p>

        <p>
          Vietnam hosted American weapons. It ceased to exist. Honduras hosted American proxies. Its
          own military disappeared 184 of its citizens. Pakistan hosted American intelligence
          operations. It lost 83,000 people and 150 children in a single school. Lebanon hosted
          everyone&rsquo;s proxies. Its GDP has contracted 40% since 2019. Ukraine hosted Western
          military architecture. Ten million people are gone. Its fertility rate is below 1.0.
        </p>

        <p>
          In every case, the superpower went home. In every case, the host nation inherited the
          rubble.
        </p>

        <p>
          And in every case, international law ensured the sponsor bore no legal responsibility for
          the specific atrocities committed with the weapons it supplied. The &ldquo;effective
          control&rdquo; doctrine, established in 1986, remains the law. It was designed to protect
          sponsors. It works exactly as designed.
        </p>

        <p>
          Only one divided nation broke the pattern. Germany chose Ostpolitik. It chose treaties,
          trade, people-to-people contact, and diplomatic frameworks. It didn&rsquo;t abandon
          security. It opened a parallel channel to engagement. And when the Wall fell, it fell
          because of the engagement, not despite it.
        </p>

        <p>
          The Korean peninsula has been divided thirty years longer than Germany ever was.
          Twenty-eight thousand five hundred American troops sit on Korean soil. THAAD cost $7.5
          billion in economic retaliation and proved to be a portable asset the Americans moved when
          they needed it elsewhere. The next generation of Koreans already wants a different answer.
        </p>

        <p>
          The man with the broom in that photograph is sweeping rubble that used to be a wall.
          Somebody&rsquo;s kitchen. Somebody&rsquo;s living room. The place where somebody&rsquo;s
          children did homework.
        </p>

        <p>He&rsquo;s sweeping because he believes there&rsquo;s something underneath worth recovering.</p>

        <p>
          That&rsquo;s the only question that matters for Korea now. Whether there&rsquo;s something
          underneath seventy-five years of foreign military architecture worth recovering. The
          historical record says there is. Germany proved it. And the generation that will decide
          already knows.
        </p>
      </div>

      {/* ═══ KOREAN CLOSE ═══ */}
      <div
        className="text-center py-20 px-6"
        style={{
          background: "linear-gradient(180deg, #0d1b2a 0%, #142638 100%)",
        }}
      >
        <div className="text-[clamp(20px,3vw,28px)] text-[#e8dfd0] leading-[1.8] max-w-[600px] mx-auto mb-8"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          무기는 분단을 영구화한다.<br />
          대화만이 통일을 만든다.<br />
          역사가 증명한다. 독일이 증명한다.<br />
          이제 한반도의 차례다.
        </div>
        <div className="text-sm text-[#a0b4c8] italic">
          Weapons make division permanent. Only dialogue creates reunification.<br />
          History proves it. Germany proves it. Now it is Korea&rsquo;s turn.
        </div>
      </div>
    </article>
  )
}
