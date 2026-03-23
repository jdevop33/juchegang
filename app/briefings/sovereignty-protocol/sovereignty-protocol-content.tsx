"use client"

import { useState, useCallback } from "react"
import Image from "next/image"

type Phase = "racket" | "anomaly" | "heritage" | "unified"

const intelData: Record<Phase, { badge: string; title: string; payload: string }> = {
  racket: {
    badge: "PHASE_01",
    title: "The Protection Racket",
    payload:
      "Look at the baseline for Western-aligned powers: Canada, Japan, and the ROK. They possess massive economic wealth, but their Sovereign Strategic Capability is outsourced. They host tens of thousands of foreign troops and pay billions annually for an umbrella. They are wealthy clients. When the landlord needs the gear elsewhere, the client is left exposed.",
  },
  anomaly: {
    badge: "PHASE_02",
    title: "The Sovereign Anomaly",
    payload:
      "Now isolate the DPRK. They face a near-total embargo on global capital and resources. Yet, they host zero foreign troops, pay zero annual tribute, and hold full independent deployment authority. They built this without the wealth of Japan or the ROK. It is a staggering demonstration of mechanical competence, doing exponentially more with less.",
  },
  heritage: {
    badge: "PHASE_03",
    title: "The Bloodline Engine",
    payload:
      "Contrast the North\u2019s sovereign deterrence with the South\u2019s economic engine. The ROK has leveraged global systems to build an unparalleled technological infrastructure. The capability is identical in its intensity\u2014the same Korean work ethic, the same tenacity to beat the odds\u2014just applied to a different set of inputs. The 38th parallel forces these two absolute strengths to remain isolated.",
  },
  unified: {
    badge: "PHASE_04",
    title: "The Inevitable Horizon",
    payload:
      "The geopolitical nightmare Washington spends billions trying to prevent: Reunification by shared pride. Merge the independent deterrence of the North with the capital infrastructure of the South. 80 million united minds. Zero foreign troops. Zero tribute. Full sovereign deployment. The peninsula becomes an untouchable, self-sustaining fortress.",
  },
}

const navItems: { key: Phase; label: string }[] = [
  { key: "racket", label: "01_The_Racket" },
  { key: "anomaly", label: "02_The_Anomaly" },
  { key: "heritage", label: "03_The_Heritage" },
  { key: "unified", label: "04_The_Solution" },
]

const tableRows = [
  {
    metric: "Nuclear deterrence",
    canada: "US umbrella",
    japan: "US umbrella",
    rok: "US umbrella",
    dprk: "Indigenous",
    unified: "Indigenous",
  },
  {
    metric: "Foreign troops on soil",
    canada: "~800 US",
    japan: "54,000 US",
    rok: "28,500 US",
    dprk: "0",
    unified: "0",
  },
  {
    metric: "Missile defense ownership",
    canada: "NORAD",
    japan: "Aegis/PAC-3",
    rok: "THAAD (US)",
    dprk: "Indigenous",
    unified: "Indigenous",
  },
  {
    metric: "Annual foreign security cost",
    canada: "~$500M est.",
    japan: "~$1.7B",
    rok: "$1.13B",
    rokSub: "(SMA 2024)",
    dprk: "$0",
    unified: "$0",
  },
]

function isHighlighted(phase: Phase, col: string): boolean {
  const map: Record<Phase, string[]> = {
    racket: ["canada", "japan", "rok"],
    anomaly: ["dprk"],
    heritage: ["rok", "dprk"],
    unified: ["unified"],
  }
  return map[phase]?.includes(col) ?? false
}

export function SovereigntyProtocolContent() {
  const [activePhase, setActivePhase] = useState<Phase>("racket")

  const handlePhase = useCallback((phase: Phase) => {
    setActivePhase(phase)
  }, [])

  const highlightClass = (col: string) =>
    isHighlighted(activePhase, col)
      ? "bg-white/[0.04] relative"
      : ""

  const data = intelData[activePhase]

  return (
    <article className="max-w-[1200px] mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-10 sm:mb-12 border-b border-[#1b4965] pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 bg-[#d4a74a] rounded-full animate-pulse" />
            <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] text-[#d4a74a] uppercase">
              Strategic Assessment
            </span>
          </div>
          <div className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-[#a0b4c8]/60 tracking-wider flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <span>CLEARANCE: LEVEL_01</span>
            <span>REF: KOR-885 // JESSE JAMES</span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight font-[family-name:var(--font-heading)]">
          The Sovereignty Protocol
        </h1>
        <p className="text-xl sm:text-2xl text-[#8b6914] font-[family-name:var(--font-heading)] italic tracking-wide">
          Rented umbrellas, magazine maps, and the inheritance of Myeongnyang.
        </p>
      </header>

      {/* Visual Anchor 1: Heaven Lake / Mt Paektu */}
      <div className="mb-12 sm:mb-14 relative border border-[#1b4965] rounded-sm overflow-hidden bg-[#0d1b2a] h-64 sm:h-[300px] md:h-[400px] group">
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[#0d1b2a]/80 px-2 sm:px-3 py-1 border border-[#1b4965]">
          <span className="font-[family-name:var(--font-mono)] text-[8px] sm:text-[10px] text-[#d4a74a] uppercase tracking-widest">
            GEO_REF // PAEKTU_CHONJI // SHARED_ORIGIN
          </span>
        </div>
        <Image
          src="/images/sovereignty-protocol/paektu-heaven-lake.jpg"
          alt="Heaven Lake at Mount Paektu"
          fill
          priority
          className="object-cover grayscale contrast-[1.2] brightness-[0.8] mix-blend-luminosity transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:mix-blend-normal"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-10"
          style={{
            background:
              "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
            backgroundSize: "100% 4px, 3px 100%",
          }}
        />
      </div>

      {/* The Narrative Hook */}
      <section className="mb-16 sm:mb-20 space-y-6 sm:space-y-8 text-[#a0b4c8] max-w-4xl mx-auto text-base sm:text-lg font-[family-name:var(--font-body)]">
        <p>
          In August 1945, two junior American military officers named Dean Rusk
          and Charles Bonesteel were given thirty minutes to figure out what to
          do with the Korean peninsula. They didn&apos;t have a tactical survey.
          They had a copy of a <em>National Geographic</em> map. They found a
          line&mdash;the 38th parallel&mdash;and they sliced a 5,000-year-old
          civilization in half because it looked convenient on paper.
        </p>

        <p>
          Eighty years later, the global security apparatus still treats that
          magazine line like a law of physics. But let&apos;s look at the
          mechanics of what this arrangement actually is. It is not an alliance
          network. It is a protection racket. The occupying forces are selling
          protection to the South to defend them against the North. They are
          charging Koreans rent to protect Koreans from Koreans.
        </p>

        <p>
          Look at what is happening with the THAAD missile defense systems. Seoul
          pays billions to host American hardware under the premise of a
          &ldquo;nuclear umbrella.&rdquo; But the second Washington decides it
          needs that hardware in Israel, they pack it up and ship it out. It is a
          lease. The landlord collects your money, and when his own neighborhood
          gets loud, he takes the furniture and leaves.
        </p>

        <p>
          It has happened three times now, and each time they cared less about
          asking. In March 2025, Washington asked Seoul&apos;s permission before
          transferring Patriot batteries to the Middle East&mdash;the first time
          USFK assets had ever been moved to another theater. The batteries came
          back in October. Then came the Twelve-Day War in June 2025. The US
          burned through 25% of its entire global THAAD interceptor stockpile
          defending Israel from Iranian retaliation. And when Operation Epic Fury
          launched on February 28, 2026, the Pentagon started pulling THAAD
          launchers directly off the Seongju base&mdash;all six of
          them&mdash;this time without asking Seoul first. President Lee
          Jae-myung&apos;s response, on the record: &ldquo;We have expressed
          opposition, but the reality is that we cannot fully impose our
          position.&rdquo; The tenant watched the movers load the truck and could
          not do a thing about it.
        </p>

        <p>
          Look at my country, Canada. Look at Australia. Look at Japan&mdash;a
          nation that possesses the capital and engineering to build a completely
          independent strategic deterrent in three weeks, but chooses to pay the
          mob instead. South Korea hosts 28,500 foreign troops, pays over $1
          billion annually for the privilege, and cannot deploy a single
          strategic deterrent without Washington&apos;s permission.
        </p>

        <p>And then, look North.</p>

        <p className="text-xl sm:text-2xl text-white font-semibold leading-snug border-l-4 border-[#d4a74a] pl-4 sm:pl-6 py-2 my-6 sm:my-8 font-[family-name:var(--font-heading)]">
          Under the most suffocating economic blockade in human history, entirely
          cut off from global capital, the DPRK built a fully independent,
          sovereign strategic deterrent. They achieved under a siege what the
          wealthiest nations on earth cannot or will not do with an open
          checkbook.
        </p>
      </section>

      {/* Interactive Intel Matrix */}
      <section className="mb-16 sm:mb-20 bg-[#142638] border border-[#1b4965] shadow-2xl rounded-sm overflow-hidden">
        <div className="border-b border-[#1b4965] bg-[#0d1b2a] p-4 sm:p-6 flex flex-col justify-start">
          <h2 className="text-lg sm:text-xl font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-white mb-1">
            The Dependency Matrix
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[10px] sm:text-xs text-[#a0b4c8]/60 uppercase tracking-wider">
            Comparative Analysis: Rented Security vs. Sovereign Capability
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-0">
          {/* Navigation */}
          <div className="xl:w-1/4 border-b xl:border-b-0 xl:border-r border-[#1b4965] bg-[#0d1b2a]/30 p-4 sm:p-6 flex flex-col sm:flex-row xl:flex-col flex-wrap justify-start space-y-1 sm:space-y-0 sm:gap-2 xl:gap-0 xl:space-y-1">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handlePhase(key)}
                className={`py-3 sm:py-4 px-3 sm:px-4 font-[family-name:var(--font-mono)] text-xs sm:text-sm tracking-wider uppercase flex-1 xl:flex-none text-left transition-all duration-300 border-l-2 xl:border-l-2 ${
                  activePhase === key
                    ? "text-[#d4a74a] border-l-[#d4a74a] bg-[#d4a74a]/5 font-bold"
                    : "text-[#a0b4c8]/50 border-l-transparent hover:text-[#f0ebe3] hover:border-l-[#1b4965] hover:bg-white/[0.02]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Table & Data */}
          <div className="xl:w-3/4 p-4 sm:p-6 lg:p-8 w-full overflow-hidden">
            {/* Dynamic Text Readout */}
            <div className="mb-8 sm:mb-10 min-h-[160px] sm:min-h-[140px] max-w-3xl">
              <div className="flex items-center mb-3 sm:mb-4 space-x-2 sm:space-x-3">
                <span className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs bg-[#d4a74a] text-[#0d1b2a] px-2 py-1 font-bold tracking-widest">
                  {data.badge}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-[#d4a74a] uppercase tracking-widest">
                  {data.title}
                </span>
              </div>
              <div
                key={activePhase}
                className="font-[family-name:var(--font-body)] text-base sm:text-[1.15rem] leading-relaxed text-[#a0b4c8] animate-[fadeIn_0.4s_cubic-bezier(0.4,0,0.2,1)]"
              >
                <p>{data.payload}</p>
              </div>
            </div>

            {/* Data Table */}
            <div
              className="overflow-x-auto border border-[#1b4965] rounded-sm"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <table className="w-full text-left font-[family-name:var(--font-mono)] text-xs sm:text-sm whitespace-nowrap border-collapse relative z-10 min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#1b4965]/80 text-[#a0b4c8]/60 bg-[#0d1b2a]/80">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 font-semibold w-1/4 sticky left-0 bg-[#0d1b2a]/90 z-20 shadow-[2px_0_5px_rgba(0,0,0,0.2)]">
                      Metric
                    </th>
                    <th className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-center transition-colors duration-300 min-w-[120px] ${highlightClass("canada")}`}>
                      Canada
                    </th>
                    <th className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-center transition-colors duration-300 min-w-[120px] ${highlightClass("japan")}`}>
                      Japan
                    </th>
                    <th className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-center transition-colors duration-300 min-w-[120px] ${highlightClass("rok")}`}>
                      South Korea
                    </th>
                    <th className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-center transition-colors duration-300 min-w-[120px] ${highlightClass("dprk")}`}>
                      DPRK
                    </th>
                    <th className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-center border-l border-[#d4a74a]/20 bg-[#d4a74a]/5 text-[#d4a74a] transition-colors duration-300 min-w-[160px] ${highlightClass("unified")}`}>
                      Unified Peninsula
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#1b4965]/40 hover:bg-white/[0.02]"
                    >
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-[#a0b4c8] whitespace-normal sticky left-0 bg-[#142638] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.2)]">
                        {row.metric}
                      </td>
                      <td className={`py-3 sm:py-4 px-3 sm:px-4 text-center text-[#a0b4c8]/50 transition-colors duration-300 ${highlightClass("canada")}`}>
                        {row.canada}
                      </td>
                      <td className={`py-3 sm:py-4 px-3 sm:px-4 text-center text-[#a0b4c8]/50 transition-colors duration-300 ${highlightClass("japan")}`}>
                        {row.japan}
                      </td>
                      <td className={`py-3 sm:py-4 px-3 sm:px-4 text-center text-[#a0b4c8]/50 transition-colors duration-300 ${highlightClass("rok")}`}>
                        {row.rok}
                        {row.rokSub && (
                          <span className="text-[9px] sm:text-[10px] block sm:inline ml-0 sm:ml-1">
                            {row.rokSub}
                          </span>
                        )}
                      </td>
                      <td className={`py-3 sm:py-4 px-3 sm:px-4 text-center text-[#d4a74a] font-bold transition-colors duration-300 ${highlightClass("dprk")}`}>
                        {row.dprk}
                      </td>
                      <td className={`py-3 sm:py-4 px-3 sm:px-4 text-center text-[#d4a74a] font-bold border-l border-[#d4a74a]/20 bg-[#d4a74a]/5 transition-colors duration-300 ${highlightClass("unified")}`}>
                        {row.unified}
                      </td>
                    </tr>
                  ))}
                  {/* Summary Row */}
                  <tr className="border-t border-[#1b4965] font-bold bg-[#0d1b2a]">
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-white text-[11px] sm:text-sm whitespace-normal sticky left-0 bg-[#0d1b2a] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                      Can deploy deterrent without foreign approval
                    </td>
                    <td className={`py-4 sm:py-5 px-3 sm:px-4 text-center text-[#a0b4c8]/50 text-sm sm:text-base transition-colors duration-300 ${highlightClass("canada")}`}>
                      No
                    </td>
                    <td className={`py-4 sm:py-5 px-3 sm:px-4 text-center text-[#a0b4c8]/50 text-sm sm:text-base transition-colors duration-300 ${highlightClass("japan")}`}>
                      No
                    </td>
                    <td className={`py-4 sm:py-5 px-3 sm:px-4 text-center text-[#a0b4c8]/50 text-sm sm:text-base transition-colors duration-300 ${highlightClass("rok")}`}>
                      No
                    </td>
                    <td className={`py-4 sm:py-5 px-3 sm:px-4 text-center text-[#d4a74a] text-sm sm:text-base transition-colors duration-300 ${highlightClass("dprk")}`}>
                      Yes
                    </td>
                    <td className={`py-4 sm:py-5 px-3 sm:px-4 text-center text-[#d4a74a] border-l border-[#d4a74a]/40 bg-[#d4a74a]/10 shadow-[inset_4px_0_10px_rgba(212,175,55,0.05)] text-sm sm:text-base transition-colors duration-300 ${highlightClass("unified")}`}>
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-2 sm:mt-3 font-[family-name:var(--font-mono)] text-[8px] sm:text-[10px] text-[#a0b4c8]/30 uppercase tracking-widest text-right">
              Sources: USFK, Japanese Ministry of Defense, SIPRI, IISS 2024
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Turn / Conclusion */}
      <section className="mb-16 space-y-6 sm:space-y-8 text-[#a0b4c8] relative max-w-4xl mx-auto text-base sm:text-lg font-[family-name:var(--font-body)]">
        <p>
          The architects of this division forget the bloodline. They look at the
          economic miracle of the South and the blockade survival of the North as
          two separate phenomena. They aren&apos;t. They are the exact same DNA
          reacting to different inputs. The unwavering work ethic, the absolute
          tenacity that supersedes all statistical odds&mdash;that isn&apos;t a
          modern political invention.
        </p>

        <p>
          In 1597, at the Battle of Myeongnyang, Admiral Yi Sun-sin took 13
          ships into a strait against a Japanese fleet of over 330. It was a
          mathematical impossibility. He wrote in his war diary before the
          engagement:
        </p>

        <blockquote className="my-8 sm:my-10 border-l-4 border-[#d4a74a] pl-4 sm:pl-8 py-3 sm:py-4 bg-[#0d1b2a]/50">
          <p className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-white font-semibold italic mb-3 leading-snug">
            &ldquo;Those who seek death shall live. Those who seek life shall
            die.&rdquo;
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-[#d4a74a] uppercase tracking-widest leading-relaxed">
            &mdash; Admiral Yi Sun-sin, Nanjung Ilgi (War Diary), 1597
            (&nbsp;必死則生 必生則死&nbsp;)
          </p>
        </blockquote>

        <p>
          He didn&apos;t ask a foreign superpower for a subsidy. He didn&apos;t
          lease an umbrella from an empire an ocean away. He took 13 ships and
          broke the back of an occupying force because it was his water.
        </p>

        {/* Visual Anchor 2: Yi Sun-sin */}
        <div className="my-10 sm:my-12 relative border border-[#1b4965] rounded-sm overflow-hidden bg-[#0d1b2a] h-80 sm:h-[450px] lg:h-[550px] lg:w-4/5 mx-auto group">
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 bg-[#0d1b2a]/80 px-2 sm:px-3 py-1 border border-[#1b4965]">
            <span className="font-[family-name:var(--font-mono)] text-[8px] sm:text-[10px] text-[#d4a74a] uppercase tracking-widest">
              HISTORICAL_FILE // YI_SUN_SIN // THE_BLOODLINE
            </span>
          </div>
          <Image
            src="/images/sovereignty-protocol/yi-sun-sin.jpg"
            alt="Statue of Admiral Yi Sun-sin"
            fill
            className="object-cover object-top grayscale contrast-[1.2] brightness-[0.8] mix-blend-luminosity transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:mix-blend-normal"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-40 z-10"
            style={{
              background:
                "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
              backgroundSize: "100% 4px, 3px 100%",
            }}
          />
        </div>

        <p>
          What would Yi Sun-sin say if he saw his descendants today? Split in
          half by two young Americans tracing a magazine map, paying foreign
          generals for permission to exist?
        </p>

        <p>
          The people who built the global shipping and tech empires in the South,
          and the people who built an independent nuclear deterrent under total
          siege in the North, are the exact same people who rowed those 13 ships.
          That warrior bloodline did not vanish. It was just temporarily divided
          by a bureaucratic fiction.
        </p>

        <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed mt-8 sm:mt-10 font-[family-name:var(--font-heading)]">
          Imagine 80 million Koreans united. Combine the staggering capital
          engine of the South with the unbreakable sovereign deterrence of the
          North. When you remind them that Yi Sun-sin is their shared ancestry,
          the foreign landlords won&apos;t need to be pushed out. They&apos;ll
          just look ridiculous standing there.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 sm:mt-24 pt-8 border-t border-[#1b4965] font-[family-name:var(--font-mono)] text-[8px] sm:text-[10px] text-[#a0b4c8]/30 flex flex-col sm:flex-row justify-between uppercase tracking-[0.1em] sm:tracking-[0.2em] gap-3 text-center sm:text-left">
        <span>Author: Jesse James // Juchegang</span>
        <span className="text-[#8b6914] sm:text-right">
          End of File // Restricted Distribution
        </span>
      </footer>
    </article>
  )
}
