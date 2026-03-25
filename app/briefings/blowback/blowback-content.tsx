"use client"

/* ─── helpers ─── */
function DataCard({
  label,
  stat,
  children,
}: {
  label: string
  stat: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#142638] border border-[#d4a74a]/15 rounded px-7 py-7 my-10">
      <div
        className="text-[11px] font-bold tracking-[3px] uppercase mb-3"
        style={{ fontFamily: "'Noto Serif KR', serif", color: "#d4a74a" }}
      >
        {label}
      </div>
      <div className="font-mono text-[36px] font-medium text-[#d4a74a] mb-2">
        {stat}
      </div>
      <div className="text-[15px] text-[#a0b4c8] leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-[3px] border-[#d4a74a] pl-7 py-5 my-10">
      <p className="font-serif text-[22px] font-normal leading-[1.5] text-[#e8dfd0] italic">
        {children}
      </p>
    </div>
  )
}

function SectionHeader({
  korean,
  title,
}: {
  korean: string
  title: string
}) {
  return (
    <div className="mt-20 mb-10 pt-10 border-t border-[#d4a74a]/20">
      <span
        className="text-[14px] font-bold tracking-[4px] text-[#d4a74a] block mb-3"
        style={{ fontFamily: "'Noto Serif KR', serif" }}
      >
        {korean}
      </span>
      <h2 className="font-serif text-[28px] font-bold leading-[1.3] text-[#f0ebe3]">
        {title}
      </h2>
    </div>
  )
}

function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded my-10 px-6 py-6 text-sm text-[#a0b4c8] leading-relaxed border"
      style={{
        background: "rgba(199, 48, 50, 0.08)",
        borderColor: "rgba(199, 48, 50, 0.2)",
      }}
    >
      {children}
    </div>
  )
}

/* ─── main ─── */
export function BlowbackContent() {
  return (
    <article>
      {/* ═══ HERO ═══ */}
      <div
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1b2a 0%, #1b4965 50%, #0d1b2a 100%)",
        }}
      >
        {/* Background character */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "40vw",
            fontWeight: 700,
            color: "rgba(212, 167, 74, 0.03)",
          }}
        >
          강
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div
            className="text-lg font-bold tracking-[6px] text-[#d4a74a] mb-12"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            주체강
          </div>

          <h1 className="font-serif font-black text-[clamp(36px,6vw,64px)] leading-[1.15] max-w-[800px] mb-6">
            Blowback
          </h1>

          <div
            className="text-[clamp(18px,3vw,28px)] text-[#d4a74a] mb-12 tracking-[2px]"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            역풍: 테러 지정의 무기화
          </div>

          <div className="w-[80px] h-[2px] bg-[#d4a74a] mb-8" />

          <div className="text-[14px] font-light text-[#a0b4c8] tracking-[3px] uppercase">
            Jesse James &nbsp;&middot;&nbsp; 주체강 전략 보고서 &nbsp;&middot;&nbsp; 2026년 3월
          </div>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-[17px] leading-[1.75]">
        <Disclaimer>
          <strong className="text-[#c73032]">사적 전략 보고서</strong> — This
          document is a private strategic intelligence briefing. The analysis
          represents the author&rsquo;s interpretation of documented historical
          patterns and publicly available sources. It is not legal advice,
          investment guidance, or advocacy for any designated entity.
        </Disclaimer>

        {/* ─── I. FOREWORD ─── */}
        <SectionHeader
          korean="서문 — 강물의 시작"
          title="I photographed the Eid moon without knowing why it mattered"
        />

        <p>
          I walked out of a Starbucks on March 20th with a coffee in one hand
          and my phone in the other, pointed the camera at the sky, and took a
          picture of a crescent moon. Then I sent it to Ibrahim Ali with
          &ldquo;Happy Eid Bro&rdquo; and a rose emoji.
        </p>

        <p>
          I didn&rsquo;t know the crescent moon was the literal mechanism that
          ends Ramadan. I didn&rsquo;t know that for fourteen hundred years,
          Muslim communities have sent people out to physically spot that exact
          sliver in the sky, and that when it&rsquo;s confirmed, the
          celebration begins. I didn&rsquo;t know that different countries
          fight about whether they actually saw it, that Saudi Arabia and
          Pakistan might celebrate Eid on different days because of it, that
          this scheduling dispute is one of the longest-running in human
          civilization.
        </p>

        <p>
          I learned all of this in a conversation that started with a moon and
          ended, about six hours later, with me understanding how the United
          States government decides who&rsquo;s a terrorist and who
          isn&rsquo;t.
        </p>

        <p>
          The distance between those two points is the distance this report
          covers.
        </p>

        {/* ─── II. CIA ORIGIN ─── */}
        <SectionHeader
          korean="제1장 — 역풍의 기원"
          title="The CIA coined a word for the problem it kept creating"
        />

        <p>
          Blowback. The term showed up in a classified CIA report from March
          1954, documenting Operation Ajax — the coup against Iran&rsquo;s
          Mossadegh. They borrowed it from firearms: the recoil of spent
          casings back toward the shooter. A nice metaphor. Accidental,
          violent, self-inflicted.
        </p>

        <p>
          The term stayed classified until Chalmers Johnson — a man who
          consulted for the CIA from 1967 to 1973 — published a book called{" "}
          <em className="text-[#e8dfd0]">Blowback</em> in 2000. Nobody cared.
          Then September 11 happened and the book became a bestseller, because
          it turned out the specific problem Johnson was describing — that
          covert operations create the very threats they&rsquo;re supposed to
          prevent — had just killed{" "}
          <span className="font-mono text-[#d4a74a]">2,977</span> people in
          New York, Washington, and a field in Pennsylvania.
        </p>

        <p>
          Johnson&rsquo;s definition was precise and worth remembering: not
          mere reactions to foreign policy, but &ldquo;reactions to operations
          carried out by the US government that are kept secret from the
          American public.&rdquo; The secrecy is the mechanism. You can&rsquo;t
          contextualize an attack if you don&rsquo;t know your government
          started the fight twenty years ago.
        </p>

        <PullQuote>
          The gun recoils. The shooter is surprised. But someone designed the
          gun, loaded the round, and pulled the trigger. Surprise is not the
          same as innocence.
        </PullQuote>

        {/* ─── III. AFGHANISTAN ─── */}
        <SectionHeader
          korean="제2장 — 아프가니스탄에서 시작된 파이프라인"
          title="$3 billion and 2,300 Stinger missiles built Al-Qaeda's infrastructure"
        />

        <p>
          Operation Cyclone. The CIA&rsquo;s covert program arming Afghan
          mujahideen against the Soviets. Ran from 1979 to 1992. Cost somewhere
          between{" "}
          <span className="font-mono text-[#d4a74a]">$2–3 billion</span> in
          American taxpayer money, with Saudi Arabia matching dollar-for-dollar.
          President Carter signed the initial finding on July 3, 1979 — five
          months before the Soviet invasion. Under Reagan, annual funding peaked
          at <span className="font-mono text-[#d4a74a]">$630 million</span> in
          1987.
        </p>

        <p>
          All the money flowed through Pakistan&rsquo;s ISI, which distributed
          it to the most extreme fundamentalist factions because that&rsquo;s
          what Pakistan&rsquo;s strategic interests dictated. Gulbuddin
          Hekmatyar — who later became a bin Laden ally and used
          American-supplied rockets to shell Kabul — received an estimated{" "}
          <span className="font-mono text-[#d4a74a]">$600 million</span>{" "}
          during the 1980s. The CIA made cash payments directly to Jalaluddin
          Haqqani, one of bin Laden&rsquo;s closest associates.
        </p>

        <p>
          Approximately{" "}
          <span className="font-mono text-[#d4a74a]">2,300</span> Stinger
          missiles shipped between 1986 and 1989. A subsequent buyback program
          spent $65 million and was deemed a failure. About{" "}
          <span className="font-mono text-[#d4a74a]">600 Stingers</span>{" "}
          remained unaccounted for by 1996. Just floating around the
          world&rsquo;s most unstable region with the ability to shoot down
          commercial aircraft.
        </p>

        <p>
          In 1984, Abdullah Azzam and Osama bin Laden founded the Maktab
          al-Khidamat in Peshawar to recruit Arab fighters. It established
          offices in over 30 countries, including 33 American cities. On August
          11, 1988, Al-Qaeda was formally established in meetings at Peshawar.
          The founding members used infrastructure, training camps, and weapons
          pipelines that American tax dollars built.
        </p>

        <p>Al-Qaeda was designated a Foreign Terrorist Organization on October 8, 1999.</p>

        <p>
          Eleven years after its founding. Seventeen years after the CIA started
          building the machine it emerged from.
        </p>

        <DataCard label="데이터 카드" stat="100,000+">
          Prisoners processed through Camp Bucca, the US detention facility in
          Iraq where at least 12 future ISIS leaders — including Abu Bakr
          al-Baghdadi — met, planned, and built the organizational structure
          that became the Islamic State. Baghdadi was classified as &ldquo;low
          level&rdquo; and released in December 2004.
        </DataCard>

        {/* ─── IV. IRAQ ─── */}
        <SectionHeader
          korean="제3장 — 이라크: 미국이 만든 괴물"
          title="Two orders, signed one week apart, created ISIS"
        />

        <p>
          CPA Order 1, signed May 16, 2003 by Paul Bremer, banned senior Baath
          Party members from government. CIA Baghdad station chief Charlie
          Sidell warned him: &ldquo;You will have between 30,000 and 50,000
          Baathists go underground by sundown.&rdquo; CPA Order 2, signed seven
          days later, dissolved the entire Iraqi military —{" "}
          <span className="font-mono text-[#d4a74a]">720,000</span> armed
          personnel. Trained soldiers. With weapons. And nothing to do.
        </p>

        <p>
          Colin Powell, Condoleezza Rice, and CIA Director George Tenet all
          later claimed they were never consulted.
        </p>

        <p>
          The Der Spiegel investigation in 2015 obtained 31 pages of
          handwritten ISIS organizational charts from the house of Haji Bakr —
          a former colonel in Saddam&rsquo;s air force intelligence who became
          ISIS&rsquo;s military architect. The documents contained no religious
          references beyond a brief introduction. They described a blueprint
          for an &ldquo;Islamic Intelligence State&rdquo; modeled on East
          Germany&rsquo;s Stasi. Iraqi journalist Hisham al-Hashimi&rsquo;s
          assessment was direct: Bakr was &ldquo;a nationalist, not an
          Islamist.&rdquo;
        </p>

        <p>
          The organizational architecture of ISIS directly replicated
          Saddam&rsquo;s security state. The same officer class purged by two
          American executive orders rebuilt their power structure under an
          Islamic flag because Islam was the only banner available after America
          destroyed every other institution in the country.
        </p>

        {/* ─── V. HAMAS ─── */}
        <SectionHeader
          korean="제4장 — 하마스: 이스라엘의 자충수"
          title="Israel nurtured Hamas to destroy the PLO"
        />

        <p>
          In 1979, Israel officially recognized Sheikh Ahmed Yassin&rsquo;s
          Mujama al-Islamiya as a charity. Brigadier General Yitzhak Segev,
          Israel&rsquo;s military governor of Gaza, met with Yassin
          approximately a dozen times and arranged hospital treatment for him.
          Segev told the Wall Street Journal that Fatah was &ldquo;our main
          enemy&rdquo; and that Yassin was &ldquo;still 100% peaceful.&rdquo;
        </p>

        <p>
          The strategy was textbook divide-and-control. Empower a religious
          alternative to split the Palestinian movement. Let the Islamists
          build mosques and schools while you hunt the PLO&rsquo;s secular
          nationalists. It worked beautifully until December 1987, when the
          First Intifada erupted and Yassin&rsquo;s charity network
          reorganized into Hamas.
        </p>

        <p>
          Avner Cohen, who was responsible for religious affairs in Gaza until
          1994, told the Wall Street Journal in January 2009: &ldquo;Hamas, to
          my great regret, is Israel&rsquo;s creation. It was a mistake we
          made — an enormous, stupid mistake.&rdquo;
        </p>

        <p>
          Hamas was designated an FTO in October 1997. Eighteen years after
          Israel started funding Yassin&rsquo;s network.
        </p>

        {/* ─── VI. PATTERN ─── */}
        <SectionHeader
          korean="제5장 — 패턴 인식"
          title="The pattern doesn't repeat — it never stopped"
        />

        <p>
          The Contras in Nicaragua: CIA-created, CIA-trained, funded through
          illegal arms sales to Iran, responsible for over{" "}
          <span className="font-mono text-[#d4a74a]">1,300</span> documented
          terrorist attacks. The International Court of Justice ruled the US
          violated international law. America refused to comply and vetoed
          enforcement at the Security Council. The Kerry Committee found
          CIA-linked drug trafficking. Fourteen people charged. Most
          convictions reversed. Six pardoned by George H.W. Bush.
        </p>

        <p>
          The School of the Americas:{" "}
          <span className="font-mono text-[#d4a74a]">60,000+</span> Latin
          American military personnel trained at Fort Benning.
          Pentagon-released manuals advocating torture, execution, and bounties
          for enemy dead. Forty-eight of 69 officers cited for the worst
          atrocities in El Salvador were graduates. Ten graduates became heads
          of state through non-democratic means.
        </p>

        <p>
          The Taliban: emerged directly from CIA-ISI madrassa infrastructure
          built during the 1980s. ISI was &ldquo;the main architect of the
          Taliban&rsquo;s rise.&rdquo; The Taliban captured Kabul in September
          1996. The US initially welcomed them — Unocal was negotiating a
          pipeline deal. Only after the 1998 embassy bombings did relations
          turn. Notably, the Taliban has never been designated as a Foreign
          Terrorist Organization. Not even now. Because the US needs the
          diplomatic flexibility.
        </p>

        <p>
          The Libya intervention scattered{" "}
          <span className="font-mono text-[#d4a74a]">
            250,000–700,000
          </span>{" "}
          weapons to at least 12 countries, directly fueling the jihadist
          takeover in Mali. The LIFG leader who became commander of
          Tripoli&rsquo;s Military Council was the same man MI6 had rendered
          to Gaddafi&rsquo;s torture prisons in 2004. The 2017 Manchester
          Arena bomber&rsquo;s family had connections to the same
          MI5-facilitated network of Libyan exiles sent to fight in 2011.
        </p>

        <p>
          The MEK was on the US terrorist list from 1997 to 2012 while
          simultaneously receiving Mossad support for assassinating Iranian
          nuclear scientists. Its delisting came after 33 former US officials
          were paid upwards of $50,000 per speech at MEK events. The PKK is
          designated as terrorist. Its Syrian affiliate the YPG is
          America&rsquo;s primary ground partner against ISIS. Same people.
          Different acronym.
        </p>

        <p>
          I ran the numbers as best I could. Of the approximately 75 Foreign
          Terrorist Organizations on the State Department&rsquo;s list, roughly{" "}
          <span className="font-mono text-[#d4a74a]">25–40%</span> have direct
          or significant indirect connections to Western covert operations or
          military interventions that created the conditions for their
          emergence. If you expand the definition to include groups that formed
          primarily as responses to Western military action or colonial policy,
          the number climbs considerably higher.
        </p>

        <PullQuote>
          The blowback pattern is not a series of accidents. It is a business
          model. Create the threat. Designate the threat. Fund the war against
          the threat. Repeat.
        </PullQuote>

        {/* ─── VII. BROTHERHOOD ─── */}
        <SectionHeader
          korean="제6장 — 무슬림형제단: 98년의 역사"
          title="The Brotherhood won an election. That was the crime."
        />

        <p>
          Hassan al-Banna founded the Muslim Brotherhood in March 1928 with six
          canal workers in the British-controlled Suez city of Ismailia. A
          schoolteacher who believed Islam was a complete governance system and
          Western secularism was a colonial imposition. The organization grew
          from <span className="font-mono text-[#d4a74a]">800 members</span>{" "}
          in 1936 to over{" "}
          <span className="font-mono text-[#d4a74a]">2 million</span> by 1948.
          They built hospitals, schools, charity networks — a parallel social
          infrastructure serving the people the government couldn&rsquo;t or
          wouldn&rsquo;t serve.
        </p>

        <p>
          For nearly a century they operated primarily through social services
          and political participation. They won elections when they were allowed
          to compete. They ran hospitals that outperformed government
          facilities. Their earthquake response in 1992 humiliated the Egyptian
          state. They dominated professional associations for doctors,
          engineers, and lawyers.
        </p>

        <p>
          Then the Arab Spring happened. And for the first time, they actually
          got to govern.
        </p>

        <p>
          Mohamed Morsi won Egypt&rsquo;s presidential runoff on June 16-17,
          2012 with{" "}
          <span className="font-mono text-[#d4a74a]">51.73%</span> of the
          vote. The first democratically elected leader in Egypt&rsquo;s
          5,000-year history. He governed badly — overreached on constitutional
          authority, alienated secular allies, showed authoritarian tendencies.
          Fair criticisms.
        </p>

        <p>
          On July 3, 2013, General Sisi conducted a military coup. Saudi Arabia
          and the UAE bankrolled it with billions in immediate financial
          support.
        </p>

        <p>
          On August 14, 2013, security forces moved into Rabaa al-Adawiya
          Square. Armored vehicles. Bulldozers. Live ammunition. Rooftop
          snipers. Human Rights Watch documented at least{" "}
          <span className="font-mono text-[#d4a74a]">
            817 killed at Rabaa alone
          </span>{" "}
          — one of the largest single-day massacres of protesters in modern
          history. They called it probable crimes against humanity.
        </p>

        <p>No Egyptian official has ever been investigated.</p>

        <p>
          By mid-2014, between{" "}
          <span className="font-mono text-[#d4a74a]">
            16,000 and 40,000
          </span>{" "}
          Brotherhood members had been arrested. Morsi died in detention on
          June 17, 2019.
        </p>

        <p>
          The message to the Arab world was clear: you can have democracy, but
          if Islam wins, we will kill you in the street and call it
          counterterrorism.
        </p>

        {/* ─── VIII. DESIGNATION ─── */}
        <SectionHeader
          korean="제7장 — 지정의 해부학"
          title="January 2026: the designation nobody could get done for 98 years"
        />

        <p>
          Trump signed Executive Order 14362 on November 24, 2025. On January
          13, 2026, the State Department and Treasury designated the Egyptian,
          Jordanian, and Lebanese Brotherhood chapters. The legal hook was
          Hamas: the Egyptian Brotherhood allegedly coordinated with Hamas on
          &ldquo;possible terrorist activities&rdquo; against Israeli interests
          in 2025.
        </p>

        <p>
          Every previous administration studied this designation and said no.
          Obama&rsquo;s intelligence community found no legal basis.
          Trump&rsquo;s first term couldn&rsquo;t get it done — career national
          security professionals pushed back successfully, twice. The
          Brotherhood isn&rsquo;t a unitary organization. It doesn&rsquo;t have
          a central command. Individual chapters vary so dramatically that
          blanket characterization is &ldquo;analytically incoherent,&rdquo;
          according to scholars at Georgetown and Emory.
        </p>

        <p>
          The second-term approach solved this by designating individual
          chapters instead of the global organization. And by using the lower
          SDGT threshold rather than FTO for Egypt and Jordan.
        </p>

        <p>The timing wasn&rsquo;t coincidental. Not even slightly.</p>

        <DataCard label="자금 추적" stat="$200M+">
          Estimated Gulf state spending on Washington lobbying, think tank
          funding, and influence operations to secure the Brotherhood
          designation. The UAE alone spent over $157 million on registered
          lobbying since 2016. Ambassador Yousef Al Otaiba wired $2.5 million
          through intermediaries to the Foundation for Defense of Democracies
          for a 2017 conference framing Qatar as a terrorism sponsor.
        </DataCard>

        {/* ─── IX. WHO BENEFITS ─── */}
        <SectionHeader
          korean="제8장 — 누가 이익을 보는가"
          title="The designation serves a deal, not a nation"
        />

        <p>Connect the dots in sequence. They&rsquo;re not subtle.</p>

        <p>
          November 24, 2025: Trump signs the Brotherhood executive order.
          January 13, 2026: the designations drop. ALSO January 2026: Massad
          Boulos — Trump&rsquo;s senior advisor and son-in-law — shows up at
          the Libya Energy and Economic Summit in Tripoli, meets both Haftar
          and Dbeibah, starts circulating a ten-point political restructuring
          plan. The $20 billion TotalEnergies/ConocoPhillips deal gets signed.
          Chevron returns to Libya. The first exploration licensing round in 17
          years awards five blocks.
        </p>

        <p>
          Also in January 2026: Ballard Partners — Trump&rsquo;s most
          connected lobbying firm — signs a $2 million contract to represent
          Khalifa Haftar and his son Saddam. The man whose forces have been
          documented committing torture, arbitrary detention, and extrajudicial
          killing gets a K Street makeover. The Brotherhood — whose primary
          method for 98 years was building hospitals and winning elections —
          gets the terrorism label.
        </p>

        <p>
          The Brotherhood designation eliminates the primary opposition to
          Saudi-Israel normalization. It gives Haftar a legal weapon against
          Brotherhood-connected western Libyan factions. It validates
          Jordan&rsquo;s April 2025 ban. It signals to Syria&rsquo;s new
          government to distance itself from political Islam. And it removes
          the only organized democratic opposition in Egypt, Jordan, and across
          the Arab world.
        </p>

        <p>
          Former State Department counterterrorism coordinator Daniel Benjamin
          and former designations director Jason Blazakis co-authored a Foreign
          Affairs piece arguing the designation lacks legal foundation. Elliott
          Abrams — not exactly a peacenik — told the UAE ambassador in leaked
          emails that Sisi had &ldquo;created a jihadi manufacturing
          plant&rdquo; through repression.
        </p>

        <p>
          But the designation serves the deal. And the deal is what matters.
        </p>

        {/* ─── X. CONCLUSION ─── */}
        <SectionHeader
          korean="제9장 — 결론: 강은 흐른다"
          title="The river doesn't care about the labels"
        />

        <p>
          I started this night photographing a moon I didn&rsquo;t understand.
          I ended it understanding something about how the world actually works
          that I can&rsquo;t unlearn.
        </p>

        <p>
          The terrorist designation system is not a counterterrorism tool. It
          is a geopolitical instrument that allows the executive branch to
          criminalize, financially strangle, and delegitimize any organization
          that threatens American strategic interests — regardless of whether
          that organization actually engages in terrorism by any honest
          definition. The same government that created Al-Qaeda&rsquo;s
          infrastructure, built the officer corps that became ISIS, nurtured
          the organization that became Hamas, trained the death squads of Latin
          America, and scattered Libyan weapons across a continent now decides
          who is a terrorist and who is not.
        </p>

        <p>
          That power answers to no court at the point of designation. No
          Congressional approval is required. Classified evidence can be
          submitted that the designated entity never sees. The financial system
          enforces it automatically through compliance screening that no bank
          will override. Material support — defined so broadly that it includes
          translating documents and teaching conflict resolution — carries
          penalties of up to 15 years.
        </p>

        <p>
          The Brotherhood is a complicated, imperfect, sometimes contradictory
          organization that spans a century and dozens of countries. It has
          produced democratic parties that governed peacefully and armed
          offshoots that killed civilians. It cannot be honestly reduced to
          either &ldquo;freedom fighters&rdquo; or &ldquo;terrorists.&rdquo;
          But honest assessment is not what the designation system is designed
          for.
        </p>

        <p>
          The designation is designed to serve power. And in January 2026,
          that&rsquo;s exactly what it did.
        </p>

        <PullQuote>
          주체의 흐름을 따라.<br />
          <em>Navigate the current.</em>
        </PullQuote>

        <p>
          The current in March 2026 runs through Libya, where $20 billion in
          oil deals are being signed while two rival governments pretend to be
          one country. Through Jordan, where a king sits on a throne Britain
          built while 70% of his population watches their families die in Gaza.
          Through Egypt, where a general who massacred a thousand people in a
          single day is America&rsquo;s third-largest aid recipient. Through
          Syria, where the Brotherhood&rsquo;s latest experiment in governance
          is being told to choose between American recognition and its own
          ideological DNA.
        </p>

        <p>
          I can&rsquo;t change the current. Nobody can. But I can tell you what
          the documents actually say, what the money trails actually show, and
          what the designations actually serve.
        </p>

        <p>
          That&rsquo;s the river. And that&rsquo;s what 주체강 is for.
        </p>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div
        className="text-center py-20 px-6 border-t border-[#d4a74a]/10"
        style={{
          background: "linear-gradient(180deg, #0d1b2a 0%, #142638 100%)",
        }}
      >
        <div
          className="text-lg font-bold tracking-[6px] text-[#d4a74a] mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          주체강
        </div>
        <div className="w-[80px] h-[2px] bg-[#d4a74a] mx-auto mb-6" />
        <p className="text-[13px] text-[#a0b4c8] font-light">
          주체의 흐름을 따라 &nbsp;&middot;&nbsp; Navigate the Current
        </p>
        <p className="text-[11px] text-[#a0b4c8]/60 mt-4 max-w-[500px] mx-auto">
          This report is a private strategic intelligence briefing. Sources
          include declassified CIA documents, congressional investigations, ICJ
          rulings, HRW reports, FARA filings, and academic scholarship. All
          claims are traceable to documented evidence.
        </p>
      </div>
    </article>
  )
}
