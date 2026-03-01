"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function BriefingsContent() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 pt-28 pb-16 bg-[#0d1b2a] min-h-screen">
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#1b4965]/30 text-[#d4a74a] rounded-full text-sm font-medium">
          {t('briefings')}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e4df]">{t('briefingsTitle')}</h1>
        <p className="text-[#e8e4df]/70 max-w-2xl mx-auto">{t('briefingsSubtitle')}</p>
      </header>

      <ul className="max-w-3xl mx-auto space-y-6">
        {/* Featured: Primary with Gold border */}
        <li className="rounded-xl border-2 border-[#d4a74a] p-6 bg-[#1b4965]/20 hover:bg-[#1b4965]/30 transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#d4a74a]/30 text-[#d4a74a] text-xs font-medium rounded">NEW</span>
            <span className="px-2 py-0.5 bg-[#1b4965]/50 text-[#e8e4df] text-xs font-medium rounded">Dec 2025</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/eu-ukraine-aid" className="hover:underline text-[#d4a74a]">
              The Tipping Point: EU's &euro;90 Billion Ukraine Gamble
            </Link>
          </h2>
          <p className="text-[#e8e4df]/70">How Europe's latest support package transfers unprecedented fiscal risk to taxpayers. Fact-checked analysis of the December 2025 decision.</p>
        </li>

        {/* Featured: Secondary with Current Blue border */}
        <li className="rounded-xl border border-[#1b4965] p-6 bg-[#1b4965]/15 hover:bg-[#1b4965]/25 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ngo-regime-change" className="hover:underline text-[#e8e4df]">
              NGOs and Regime Change
            </Link>
          </h2>
          <p className="text-[#e8e4df]/70">How humanitarian rhetoric masks geopolitical operations. The sophisticated network deploying $300M+ annually across 100+ countries for regime change.</p>
        </li>

        <li className="rounded-xl border border-[#1b4965] p-6 bg-[#1b4965]/15 hover:bg-[#1b4965]/25 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/soros-government-nexus" className="hover:underline text-[#e8e4df]">
              The Soros-Government Nexus
            </Link>
          </h2>
          <p className="text-[#e8e4df]/70">Documented relationships spanning financial partnerships, personnel exchanges, and policy influence. Over $300M in government funding revealed through comprehensive examination.</p>
        </li>

        <li className="rounded-xl border border-[#1b4965] p-6 bg-[#1b4965]/15 hover:bg-[#1b4965]/25 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/koch-venezuelan-oil" className="hover:underline text-[#e8e4df]">
              Koch Industries and Venezuelan Oil
            </Link>
          </h2>
          <p className="text-[#e8e4df]/70">Uncovering the complex web of economic interests and strategic dependencies. $409M dispute, refineries built for Venezuelan crude, and $3B in potential annual savings revealed.</p>
        </li>

        {/* Korean Red accent - used sparingly for high-impact item */}
        <li className="rounded-xl border border-[#c73032]/50 p-6 bg-[#c73032]/10 hover:bg-[#c73032]/15 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/media-manipulation-decoded" className="hover:underline text-[#e8e4df]">
              Media Manipulation Decoded
            </Link>
          </h2>
          <p className="text-[#e8e4df]/70">How six corporations control 90% of what you see, think, and believe. The psychological weapons of mass distraction exposed.</p>
        </li>

        {/* Standard briefings with Current Blue styling */}
        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/iran-snapback" className="hover:underline text-[#e8e4df]">
              {t('iranSnapbackTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('iranSnapbackDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/nato-expansion" className="hover:underline text-[#e8e4df]">
              {t('natoExpansionTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('natoExpansionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/dprk-narrative" className="hover:underline text-[#e8e4df]">
              {t('northKoreaDeceptionTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('northKoreaDeceptionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ukraine-deception" className="hover:underline text-[#e8e4df]">
              {t('ukraineDeceptionTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('ukraineDeceptionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/sanctions-warfare" className="hover:underline text-[#e8e4df]">
              {t('sanctionsWarfareTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('sanctionsWarfareDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/truth-for-peace" className="hover:underline text-[#e8e4df]">
              {t('truthForPeaceTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('truthForPeaceDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/ai-confession" className="hover:underline text-[#e8e4df]">
              {t('aiConfessionTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('aiConfessionDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/false-flag-cyber-operations" className="hover:underline text-[#e8e4df]">
              {t('falseFlagOpsTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('falseFlagOpsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/navy-seals-civilians" className="hover:underline text-[#e8e4df]">
              {t('navySealsTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('navySealsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/covert-operations-declassified" className="hover:underline text-[#e8e4df]">
              {t('covertOperationsTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('covertOperationsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/korean-reunification-path" className="hover:underline text-[#e8e4df]">
              {t('koreanReunificationTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('koreanReunificationDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/frozen-conflicts-profit" className="hover:underline text-[#e8e4df]">
              {t('frozenConflictsTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('frozenConflictsDesc')}</p>
        </li>

        <li className="rounded-xl border border-[#1b4965]/60 p-6 bg-[#0d1b2a] hover:bg-[#1b4965]/10 transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/briefings/apt-down-files" className="hover:underline text-[#e8e4df]">
              {t('aptDownFilesTitle')}
            </Link>
          </h2>
          <p className="text-[#e8e4df]/60">{t('aptDownFilesDesc')}</p>
        </li>
      </ul>
    </section>
  )
}
