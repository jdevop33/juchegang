"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText, AlertTriangle, TrendingDown, Scale } from "lucide-react"

export default function EUFiscalGamblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/truth-project" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Truth Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-medium rounded-full border border-red-500/30">
              Truth Project
            </span>
            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
              Fiscal Analysis
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Europe's &euro;90 Billion Fiscal Gamble
          </h1>
          <p className="text-xl text-white/80 mb-6">
            A deep examination of the structural risks embedded in the EU's latest Ukraine support package
            and what it means for European economic sovereignty.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>December 2025</span>
            <span>|</span>
            <span>Primary Source Analysis</span>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30">
          <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Executive Summary
          </h2>
          <p className="text-white/90 leading-relaxed">
            The December 18, 2025 European Council decision to approve a &euro;90 billion "interest-free" loan
            to Ukraine represents one of the most significant fiscal commitments in EU history—and one of the
            most structurally precarious. Unlike conventional sovereign lending, this package transfers
            repayment risk to European taxpayers contingent on an uncertain future: Russian reparations
            that may never materialize.
          </p>
        </section>

        {/* The Mathematics of Risk */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingDown className="w-6 h-6 text-red-400" />
            The Mathematics of Risk Transfer
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed mb-6">
              To understand the true nature of this agreement, we must examine what happens when
              the underlying assumptions fail. The loan structure rests on a critical assumption:
              that Russia will pay reparations after the conflict concludes.
            </p>

            <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30 mb-6">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Scenario Analysis: If Reparations Never Come
              </h3>
              <div className="space-y-4 text-white/90">
                <p>
                  <strong className="text-white">Year 2028 onwards:</strong> EU budget assumes
                  approximately &euro;3 billion annually in interest payments on bonds issued to fund the loan.
                </p>
                <p>
                  <strong className="text-white">Principal liability:</strong> The full &euro;90 billion
                  becomes an EU budget obligation with no specified repayment timeline.
                </p>
                <p>
                  <strong className="text-white">Bond market impact:</strong> Absence of fixed maturity dates
                  makes these instruments unattractive to traditional investors, potentially requiring
                  higher yields (estimated 4-5%+) to find buyers.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Historical Precedent: Reparations Rarely Materialize</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              The history of post-conflict reparations is not encouraging. From the Treaty of Versailles
              to more recent conflicts, collecting reparations from unwilling states has proven
              extraordinarily difficult. Germany's WWI reparations weren't fully settled until 2010.
              Iraq's Gulf War reparations remain partially outstanding after 30+ years.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
                <h4 className="font-bold text-amber-300 mb-2">WWI German Reparations</h4>
                <p className="text-white/80 text-sm">
                  Original: 132 billion gold marks (~$33B 1921 dollars)<br />
                  Final settlement: 2010 (89 years later)<br />
                  Actual paid: Fraction of original amount
                </p>
              </div>
              <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
                <h4 className="font-bold text-amber-300 mb-2">Iraq Gulf War Reparations</h4>
                <p className="text-white/80 text-sm">
                  UN Compensation Commission: $52.4 billion<br />
                  Status (2025): Final payment made 2022<br />
                  Duration: 31 years to complete
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EU Debt Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-purple-400" />
            The Broader EU Debt Architecture
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed mb-6">
              This &euro;90 billion commitment doesn't exist in isolation. It layers onto existing
              EU-level debt that has grown substantially since 2020.
            </p>

            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30 mb-6">
              <h3 className="font-bold text-purple-300 mb-4">EU-Level Debt Obligations</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">NextGenerationEU (2021)</span>
                  <span className="text-purple-400 font-bold">&euro;750B</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">SURE Program</span>
                  <span className="text-purple-400 font-bold">&euro;100B</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Previous Ukraine Support</span>
                  <span className="text-purple-400 font-bold">&euro;50B+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">New Ukraine Package</span>
                  <span className="text-purple-400 font-bold">&euro;90B</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold">Total EU-Level Exposure</span>
                  <span className="text-red-400 font-bold text-xl">&euro;990B+</span>
                </div>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed mb-6">
              This nearly &euro;1 trillion in EU-level debt exists alongside national debts that
              already exceed Maastricht criteria in most major economies. The combined debt burden
              raises fundamental questions about fiscal sustainability and European economic sovereignty.
            </p>
          </div>
        </section>

        {/* Political Economy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Political Economy Considerations</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed mb-6">
              The opt-outs by Hungary, Slovakia, and Czechia deserve attention. These governments
              calculated that the risk-reward profile of participation was unfavorable for their citizens.
              Their absence shifts proportionally more liability to remaining member states.
            </p>

            <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30 mb-6">
              <h3 className="font-bold text-green-300 mb-4">The Opt-Out Calculation</h3>
              <p className="text-white/90 mb-4">
                Countries that declined participation have effectively:
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Protected their taxpayers from potential liability if reparations fail</li>
                <li>• Preserved fiscal flexibility for domestic priorities</li>
                <li>• Avoided political exposure to uncertain outcomes</li>
                <li>• Maintained ability to pursue independent diplomatic relationships</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Domestic Political Implications</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              As European citizens face inflation, energy costs, and strained public services,
              the political sustainability of open-ended commitments faces growing scrutiny.
              Farmer protests, industrial concerns about competitiveness, and general economic
              anxiety create challenging conditions for maintaining public support.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-600/30">
          <h2 className="text-2xl font-bold text-white mb-4">Conclusion: Understanding the Stakes</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed mb-4">
              The &euro;90 billion package represents a significant transfer of financial risk from
              Ukraine to European taxpayers. Whether this proves to be solidarity or fiscal overreach
              depends entirely on assumptions about war outcomes and Russian willingness to pay reparations.
            </p>
            <p className="text-white/90 leading-relaxed">
              Informed citizens deserve to understand these mechanics. The decision has been made,
              but its consequences will unfold over decades. Transparency about the true nature of
              these commitments is essential for democratic accountability.
            </p>
          </div>
        </section>

        {/* Sources & Cross-links */}
        <section className="border-t border-white/10 pt-8">
          <h2 className="text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-medium text-white mb-2">Primary Sources</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• European Council Conclusions, December 18, 2025</li>
                <li>• IMF Ukraine Economic Outlook Reports</li>
                <li>• Eurostat Debt Statistics</li>
                <li>• U.S. National Defense Authorization Act (FY2026)</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-medium text-white mb-2">Related Analysis</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/briefings/eu-ukraine-aid" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    EU Ukraine Aid: Quick Briefing <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/briefings/sanctions-warfare" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    Sanctions Warfare Analysis <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/truth-project/sovereign-wealth-seizures" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    Sovereign Wealth Seizures <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/briefings/eu-ukraine-aid" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Read the Briefing Version
            </Link>
            <Link href="/truth-project" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20">
              Explore Truth Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
