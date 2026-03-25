"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function BriefingsContent() {
  const { t } = useLanguage()

  return (
    <>
    {/* Hero Image */}
    <section className="relative h-[40vh] min-h-[300px]">
      <div className="absolute inset-0">
        <Image
          src="/images/paektu-sunset.jpg"
          alt="Mount Paektu at sunset - where truth meets understanding"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/40 via-transparent to-[#0d1b2a]" />
      </div>
    </section>

    <section className="container mx-auto px-4 pb-16 bg-[#0d1b2a] min-h-screen -mt-24 relative z-10">
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#1b4965]/30 text-[#d4a74a] rounded-full text-sm font-medium">
          {t('briefings')}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f0ebe3]">{t('briefingsTitle')}</h1>
        <p className="text-[#f0ebe3]/70 max-w-2xl mx-auto">{t('briefingsSubtitle')}</p>
      </header>

      <ul className="max-w-3xl mx-auto space-y-6">
        {/* Featured: Blowback */}
        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/blowback" className="hover:underline text-[#d4a74a]">
              Blowback — 역풍: 테러 지정의 무기화
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">How the country that built Al-Qaeda&rsquo;s infrastructure, created ISIS&rsquo;s officer corps, and nurtured Hamas now decides who is a terrorist and who isn&rsquo;t. From a crescent moon to the Brotherhood designation.</p>
        </li>

        {/* Featured: The Architecture of Ruin */}
        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/architecture-of-ruin" className="hover:underline text-[#d4a74a]">
              The Architecture of Ruin
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">What happens when you invite a superpower&rsquo;s weapons onto your soil to fight your neighbor. Six countries found out. Five are still paying. 750 bases. 80 countries. One pattern. One exception.</p>
        </li>

        {/* Featured: The Sovereignty Protocol */}
        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/sovereignty-protocol" className="hover:underline text-[#d4a74a]">
              The Sovereignty Protocol
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Rented umbrellas, magazine maps, and the inheritance of Myeongnyang. A strategic assessment of how two Americans with a magazine split a 5,000-year civilization&mdash;and why 80 million Koreans united would render the arrangement obsolete.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Feb 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/satellite-eavesdropping" className="hover:underline text-[#d4a74a]">
              &ldquo;Don&rsquo;t Look Up&rdquo;: The $800 Satellite Eavesdropping Crisis
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">~50% of GEO satellite signals unencrypted. $800 equipment cost. 2,711 T-Mobile numbers in 9 hours. How consumer-grade equipment exposed military secrets and critical infrastructure.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Feb 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/dprk-human-rights-analysis" className="hover:underline text-[#d4a74a]">
              DPRK Human Rights Claims vs Global Reality
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">The DPRK has ratified more core human rights treaties than the United States &mdash; five versus three. Data-driven comparative analysis across 14 areas with verifiable sources.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/performative-ethics-sanctions" className="hover:underline text-[#d4a74a]">
              Performative Ethics &amp; the Sanctions Regime
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">564,000 annual deaths. 8 of 14 UN sanctions regimes target Africa. 2,500+ Pentagon-edited films. How virtue theater, media manipulation, and moral licensing maintain a codified global caste system.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/sleepwalkers-nuclear" className="hover:underline text-[#d4a74a]">
              Sleepwalkers With Nuclear Weapons
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Groupthink, conformity, and the Dunning-Kruger apocalypse. How cognitive biases in nuclear-armed governments create existential risk &mdash; from the Bay of Pigs to Able Archer 83.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ot-cybersecurity" className="hover:underline text-[#d4a74a]">
              OT Cybersecurity in Military Infrastructure
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">From Stuxnet to SolarWinds. How operational technology vulnerabilities in energy grids, weapons systems, and logistics networks threaten military readiness across NATO.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/china-collapse-narrative" className="hover:underline text-[#d4a74a]">
              The &ldquo;China Collapse&rdquo; Narrative &mdash; A Data-Driven Refutation
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Decades of failed predictions vs. verified economic data. Manufacturing dominance, technological advancement, and the geopolitical function of collapse prophecy.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/five-months-broke-bloc" className="hover:underline text-[#d4a74a]">
              The Five Months That Broke the Bloc &mdash; CIA Declassified
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Part I: Poland&rsquo;s 134-day journey from the Roundtable Accords to a non-Communist prime minister. Analysis of five Top Secret CIA intelligence briefs, April&ndash;August 1989.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Mar 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/cracks-spread-east" className="hover:underline text-[#d4a74a]">
              The Cracks Spread East &mdash; CIA Declassified
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Part II: How the Baltic republics and East Germany slipped Moscow&rsquo;s grip. Three declassified Top Secret intelligence briefs reveal an empire cracking at every seam, June&ndash;July 1989.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Feb 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/war-nobody-wins" className="hover:underline text-[#d4a74a]">
              The War Nobody Wins: A Behavioral Analysis of WW3
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">JPanda Papers behavioral analysis examining the psychology, industrial asymmetries, and strategic miscalculations driving the world toward a hypothetical global conflict — and why nobody wins.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Feb 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/f35-systemic-fragility" className="hover:underline text-[#d4a74a]">
              Systemic Fragility: F-35 Lightning II Assessment
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">$2T+ lifecycle cost, 50% fleet availability, 232:1 China-US shipbuilding ratio. Comprehensive life-cycle assessment of the F-35 program and Western defense industrial capacity.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Feb 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/f35-systemic-fragility-kr" className="hover:underline text-[#d4a74a]">
              체계적 취약성과 전략적 현실 &mdash; F-35 종합 평가
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">F-35 라이트닝 II 프로그램의 종합 수명주기 평가. 2조 달러 이상의 비용, 50% 가동률, 232:1 조선 역량 비율. 한국어 전략 보고서.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Feb 2026</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/new-weapons" className="hover:underline text-[#d4a74a]">
              The New Weapons: Defense Energy &amp; Materials Guide
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">From 50-year diamond batteries to truck-mounted lasers. A plain-language guide to the materials revolution reshaping modern warfare since 2003.</p>
        </li>

        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#f0ebe3] text-xs font-medium rounded">Dec 2025</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/eu-ukraine-aid" className="hover:underline text-[#d4a74a]">
              The Tipping Point: EU's &euro;90 Billion Ukraine Gamble
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">How Europe's latest support package transfers unprecedented fiscal risk to taxpayers. Fact-checked analysis of the December 2025 decision.</p>
        </li>

        {/* Featured: Secondary with Current Blue border */}
        <li className="rounded-xl border border-[#1b4965] p-6 bg-[#1b4965]/15 hover:bg-[#1b4965]/25 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ngo-regime-change" className="hover:underline text-[#f0ebe3]">
              NGOs and Regime Change
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">How humanitarian rhetoric masks geopolitical operations. The sophisticated network deploying $300M+ annually across 100+ countries for regime change.</p>
        </li>

        <li className="rounded-xl border border-[#1b4965] p-6 bg-[#1b4965]/15 hover:bg-[#1b4965]/25 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/soros-government-nexus" className="hover:underline text-[#f0ebe3]">
              The Soros-Government Nexus
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Documented relationships spanning financial partnerships, personnel exchanges, and policy influence. Over $300M in government funding revealed through comprehensive examination.</p>
        </li>

        <li className="rounded-xl border border-[#1b4965] p-6 bg-[#1b4965]/15 hover:bg-[#1b4965]/25 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/koch-venezuelan-oil" className="hover:underline text-[#f0ebe3]">
              Koch Industries and Venezuelan Oil
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">Uncovering the complex web of economic interests and strategic dependencies. $409M dispute, refineries built for Venezuelan crude, and $3B in potential annual savings revealed.</p>
        </li>

        {/* Korean Red accent - used sparingly for high-impact item */}
        <li className="rounded-xl border border-[#c73032]/50 p-6 bg-[#c73032]/10 hover:bg-[#c73032]/15 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/media-manipulation-decoded" className="hover:underline text-[#f0ebe3]">
              Media Manipulation Decoded
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/70">How six corporations control 90% of what you see, think, and believe. The psychological weapons of mass distraction exposed.</p>
        </li>

        {/* Standard briefings with Current Blue styling */}
        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/iran-snapback" className="hover:underline text-[#f0ebe3]">
              {t('iranSnapbackTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('iranSnapbackDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/nato-expansion" className="hover:underline text-[#f0ebe3]">
              {t('natoExpansionTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('natoExpansionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/dprk-narrative" className="hover:underline text-[#f0ebe3]">
              {t('northKoreaDeceptionTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('northKoreaDeceptionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ukraine-deception" className="hover:underline text-[#f0ebe3]">
              {t('ukraineDeceptionTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('ukraineDeceptionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/sanctions-warfare" className="hover:underline text-[#f0ebe3]">
              {t('sanctionsWarfareTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('sanctionsWarfareDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/truth-for-peace" className="hover:underline text-[#f0ebe3]">
              {t('truthForPeaceTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('truthForPeaceDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ai-confession" className="hover:underline text-[#f0ebe3]">
              {t('aiConfessionTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('aiConfessionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/false-flag-cyber-operations" className="hover:underline text-[#f0ebe3]">
              {t('falseFlagOpsTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('falseFlagOpsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/navy-seals-civilians" className="hover:underline text-[#f0ebe3]">
              {t('navySealsTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('navySealsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/covert-operations-declassified" className="hover:underline text-[#f0ebe3]">
              {t('covertOperationsTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('covertOperationsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/korean-reunification-path" className="hover:underline text-[#f0ebe3]">
              {t('koreanReunificationTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('koreanReunificationDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/frozen-conflicts-profit" className="hover:underline text-[#f0ebe3]">
              {t('frozenConflictsTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('frozenConflictsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/apt-down-files" className="hover:underline text-[#f0ebe3]">
              {t('aptDownFilesTitle')}
            </Link>
          </h2>
          <p className="text-[#f0ebe3]/60">{t('aptDownFilesDesc')}</p>
        </li>
      </ul>
    </section>
    </>
  )
}
