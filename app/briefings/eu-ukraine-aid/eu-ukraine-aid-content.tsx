"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, AlertTriangle, Globe, Calculator, ChevronDown, ChevronUp, Scale, Landmark, Users } from "lucide-react"

export default function EUUkraineAidContent() {
  const [expandedSection, setExpandedSection] = useState<string | null>("loan-structure")

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="bg-gradient-to-b from-[#0d1b2a] via-[#1b4965]/30 to-[#0d1b2a]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/briefings" className="inline-flex items-center gap-2 text-[#f0ebe3]/70 hover:text-[#f0ebe3] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Briefings
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#1b4965]/30 text-[#d4a74a] text-xs font-medium rounded-full border border-[#1b4965]/50">
              December 2025 Analysis
            </span>
            <span className="px-3 py-1 bg-[#d4a74a]/20 text-[#d4a74a] text-xs font-medium rounded-full border border-[#d4a74a]/40">
              Fact-Checked
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f0ebe3] mb-4">
            The Tipping Point
          </h1>
          <p className="text-xl md:text-2xl text-[#d4a74a] font-medium mb-4">
            How Europe's &euro;90 Billion Gamble on Ukraine Could Reshape Global Finance
          </p>
          <p className="text-lg text-[#f0ebe3]/80 max-w-4xl">
            On December 18, 2025, the European Union approved a &euro;90 billion interest-free loan package for Ukraine.
            Behind the headlines lies a complex financial architecture built on uncertain assumptions about Russian reparations
            and significant risks for European taxpayers.
          </p>
        </div>

        {/* Key Figures Alert */}
        <div className="mb-12 bg-gradient-to-r from-[#1b4965]/30 via-[#0d1b2a] to-[#1b4965]/30 rounded-2xl p-8 border border-[#1b4965]/50">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-[#d4a74a]">&euro;90B</p>
              <p className="text-[#f0ebe3]/70 text-sm mt-1">New EU Loan Package</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4a74a]">&euro;3B</p>
              <p className="text-[#f0ebe3]/70 text-sm mt-1">Annual Interest (from 2028)</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#c73032]">&euro;43B</p>
              <p className="text-[#f0ebe3]/70 text-sm mt-1">Ukraine's 2026 Budget Gap</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4a74a]">15hrs</p>
              <p className="text-[#f0ebe3]/70 text-sm mt-1">Negotiation Duration</p>
            </div>
          </div>
        </div>

        {/* Loan Structure Section */}
        <Section
          id="loan-structure"
          title="The &euro;90 Billion Lifeline: A 'Reparations Loan' with No Reparations in Sight"
          icon={Landmark}
          expanded={expandedSection === "loan-structure"}
          onToggle={() => toggleSection("loan-structure")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <p className="text-[#f0ebe3]/90 mb-6">
                The European Council approved the &euro;90 billion package late on December 18 after 15 grueling hours of talks,
                abandoning a bolder &euro;135-140 billion plan backed by &euro;210 billion in frozen Russian assets held at Euroclear.
              </p>

              <div className="bg-[#c73032]/20 rounded-lg p-6 border border-[#c73032]/40 mb-6">
                <h4 className="font-bold text-[#f0ebe3] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#c73032]" />
                  Why the Pivot?
                </h4>
                <p className="text-[#f0ebe3]/90 mb-4">
                  Legal red flags from the IMF, ECB, and Belgium's government warned that seizing assets could:
                </p>
                <ul className="space-y-2 text-[#f0ebe3]/80">
                  <li>• Trigger expensive lawsuits challenging the legality</li>
                  <li>• Erode international trust in Europe's financial system</li>
                  <li>• Invite Russian retaliation costing billions in countermeasures</li>
                  <li>• Set dangerous precedents for sovereign asset protection</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-4 border border-[#1b4965]/50">
                  <h4 className="font-bold text-[#d4a74a] mb-3">The Unconventional Structure</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• Ukraine receives cash upfront for budgets and arms</li>
                    <li>• Repayment hinges on future Russian reparations post-war</li>
                    <li>• No fixed maturity date specified</li>
                    <li>• If Moscow refuses or wins: EU taxpayers foot the bill</li>
                  </ul>
                </div>

                <div className="bg-[#d4a74a]/20 rounded-lg p-4 border border-[#d4a74a]/40">
                  <h4 className="font-bold text-[#d4a74a] mb-3">The Opt-Outs</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• <span className="text-[#d4a74a]">Hungary</span> - Declined participation</li>
                    <li>• <span className="text-[#d4a74a]">Slovakia</span> - Opted out</li>
                    <li>• <span className="text-[#d4a74a]">Czechia</span> - Shielding citizens from liability</li>
                    <li>• These countries' taxpayers won't bear the burden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* European Debt Crisis Section */}
        <Section
          id="debt-crisis"
          title="Europe's Mounting Debt: The Numbers That Should Worry You"
          icon={Calculator}
          expanded={expandedSection === "debt-crisis"}
          onToggle={() => toggleSection("debt-crisis")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <p className="text-[#f0ebe3]/90 mb-6">
                This new &euro;90B package piles onto the &euro;750 billion NextGenerationEU bonds from 2021,
                whose maturities stretch to 2058 and already add &euro;10-15 billion yearly in EU-wide interest payments.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#f0ebe3]/20">
                      <th className="text-left py-3 px-4 text-[#f0ebe3] font-bold">Country</th>
                      <th className="text-center py-3 px-4 text-[#f0ebe3] font-bold">Debt-to-GDP (Q3 2025)</th>
                      <th className="text-center py-3 px-4 text-[#f0ebe3] font-bold">Projected 2026 Increase</th>
                      <th className="text-left py-3 px-4 text-[#f0ebe3] font-bold">Key Pressure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#f0ebe3]/10">
                      <td className="py-3 px-4 text-[#f0ebe3]">France</td>
                      <td className="py-3 px-4 text-[#c73032] text-center font-bold">114%</td>
                      <td className="py-3 px-4 text-[#d4a74a] text-center">+2-3%</td>
                      <td className="py-3 px-4 text-[#f0ebe3]/70">&euro;50B deficit, pension reforms</td>
                    </tr>
                    <tr className="border-b border-[#f0ebe3]/10">
                      <td className="py-3 px-4 text-[#f0ebe3]">Italy</td>
                      <td className="py-3 px-4 text-[#c73032] text-center font-bold">138%</td>
                      <td className="py-3 px-4 text-[#d4a74a] text-center">+1-2%</td>
                      <td className="py-3 px-4 text-[#f0ebe3]/70">&euro;60B debt service, slow growth</td>
                    </tr>
                    <tr className="border-b border-[#f0ebe3]/10">
                      <td className="py-3 px-4 text-[#f0ebe3]">Germany</td>
                      <td className="py-3 px-4 text-[#d4a74a] text-center font-bold">68%</td>
                      <td className="py-3 px-4 text-[#d4a74a] text-center">+3-4%</td>
                      <td className="py-3 px-4 text-[#f0ebe3]/70">&euro;100B defense fund, energy crisis</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[#f0ebe3]">Spain</td>
                      <td className="py-3 px-4 text-[#d4a74a] text-center font-bold">105%</td>
                      <td className="py-3 px-4 text-[#d4a74a] text-center">+1%</td>
                      <td className="py-3 px-4 text-[#f0ebe3]/70">Tourism rebound insufficient</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#f0ebe3]/50 text-xs mt-4">Sources: Eurostat, IMF projections</p>

              <div className="mt-6 p-4 bg-[#1b4965]/20 rounded-lg border border-[#1b4965]/50">
                <h4 className="font-bold text-[#f0ebe3] mb-2">The Hidden Cost</h4>
                <p className="text-[#f0ebe3]/80 text-sm">
                  From 2028 onward, EU taxpayers face &euro;3 billion annually in interest payments on these bonds,
                  plus the &euro;90 billion principal that may never be repaid if Russia refuses reparations.
                  No fixed maturity date makes these bonds toxic to traditional investors,
                  potentially spiking yields above 4-5% amid war uncertainty.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Ukraine's Black Hole Section */}
        <Section
          id="ukraine-budget"
          title="Ukraine's Black Hole: A &euro;43 Billion Deficit That May Be Understated"
          icon={TrendingUp}
          expanded={expandedSection === "ukraine-budget"}
          onToggle={() => toggleSection("ukraine-budget")}
          color="amber"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#d4a74a]/20 rounded-lg p-4 border border-[#d4a74a]/40">
                  <h4 className="font-bold text-[#d4a74a] mb-3">Official Numbers</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• <span className="text-[#d4a74a] font-bold">&euro;43B</span> - Kyiv's projected 2026 budget gap</li>
                    <li>• <span className="text-[#f0ebe3]/60">18.5% of GDP</span></li>
                  </ul>
                </div>

                <div className="bg-[#c73032]/20 rounded-lg p-4 border border-[#c73032]/40">
                  <h4 className="font-bold text-[#c73032] mb-3">Expert Estimates</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• <span className="text-[#c73032] font-bold">&euro;60B+</span> - If fronts collapse further</li>
                    <li>• IMF's new $8.2B lifeline flags $136B gap through 2029</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/50">
                <h4 className="font-bold text-[#d4a74a] mb-3">Where Does the &euro;90B Go?</h4>
                <p className="text-[#f0ebe3]/90 mb-4">
                  The &euro;90 billion likely rolls over a &euro;40 billion prior loan,
                  netting Ukraine approximately &euro;50 billion in fresh cash—just enough for one year,
                  according to Ukrainian MPs.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-[#0d1b2a]/50 rounded">
                    <p className="text-2xl font-bold text-[#d4a74a]">&euro;40B</p>
                    <p className="text-xs text-[#f0ebe3]/60">Prior Loan Rollover</p>
                  </div>
                  <div className="text-center p-3 bg-[#0d1b2a]/50 rounded">
                    <p className="text-2xl font-bold text-[#d4a74a]">&euro;50B</p>
                    <p className="text-xs text-[#f0ebe3]/60">Fresh Cash</p>
                  </div>
                  <div className="text-center p-3 bg-[#0d1b2a]/50 rounded">
                    <p className="text-2xl font-bold text-[#d4a74a]">~1yr</p>
                    <p className="text-xs text-[#f0ebe3]/60">Coverage Duration</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#1b4965]/30 rounded-lg border border-[#1b4965]/50">
                <h4 className="font-bold text-[#f0ebe3] mb-2">U.S. Support Comparison</h4>
                <p className="text-[#f0ebe3]/80 text-sm">
                  The December 17 NDAA allocates $800 million over two years ($400M annually)—
                  a fraction of the $40B+ Ukraine needs, signaling "Ukraine fatigue" even among previous supporters.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Battlefield Assessment */}
        <Section
          id="battlefield"
          title="Battlefield Math: The Strategic Calculus"
          icon={Globe}
          expanded={expandedSection === "battlefield"}
          onToggle={() => toggleSection("battlefield")}
          color="purple"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-4 border border-[#1b4965]/50">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Russian Advances (Dec 2025)</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• 50% control of Kurakhove</li>
                    <li>• Lyman region advancing</li>
                    <li>• Pokrovsk (Mirnograd) encircled</li>
                    <li>• Entire frontline shifting gray on Ukrainian maps</li>
                  </ul>
                </div>

                <div className="bg-[#1b4965]/30 rounded-lg p-4 border border-[#1b4965]/50">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Economic Comparison</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-[#f0ebe3]/60 mb-1">Russia Inflation</p>
                      <p className="text-xl font-bold text-[#d4a74a]">5.6%</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#f0ebe3]/60 mb-1">Russia Debt-to-GDP</p>
                      <p className="text-xl font-bold text-[#d4a74a]">18%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#d4a74a]/20 rounded-lg border border-[#d4a74a]/40">
                <h4 className="font-bold text-[#d4a74a] mb-2">ISW Assessment</h4>
                <p className="text-[#f0ebe3]/80 text-sm">
                  Institute for the Study of War confirms: Russian forces continue to squeeze positions
                  east of Oskil River, with no significant Ukrainian gains reported in recent weeks.
                  Infrastructure attacks on Odessa bridges continue, with widespread blackouts reported.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Diplomatic Developments */}
        <Section
          id="diplomacy"
          title="Behind Closed Doors: The Miami Talks"
          icon={Users}
          expanded={expandedSection === "diplomacy"}
          onToggle={() => toggleSection("diplomacy")}
          color="green"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <p className="text-[#f0ebe3]/90 mb-6">
                Reports indicate Kirill Dmitriev—described as Putin's economic envoy—has engaged in
                discussions with U.S. representatives in Florida. No trilateral meetings with Ukrainian
                officials have been confirmed due to reported tensions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-4 border border-[#1b4965]/50">
                  <h4 className="font-bold text-[#d4a74a] mb-3">Reported Discussion Points</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• Potential ceasefire frameworks</li>
                    <li>• Security guarantee mechanisms</li>
                    <li>• Economic normalization paths</li>
                  </ul>
                </div>

                <div className="bg-[#1b4965]/20 rounded-lg p-4 border border-[#1b4965]/50">
                  <h4 className="font-bold text-[#d4a74a] mb-3">Russian Position (Public)</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• Reference to "Istanbul Plus" framework</li>
                    <li>• Territorial acknowledgments</li>
                    <li>• NATO membership restrictions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Analysis Summary */}
        <Section
          id="analysis"
          title="The Reckoning: Six Months to Decision Point"
          icon={Scale}
          expanded={expandedSection === "analysis"}
          onToggle={() => toggleSection("analysis")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <div className="bg-[#d4a74a]/20 rounded-lg p-6 border border-[#d4a74a]/40 mb-6">
                <h4 className="font-bold text-[#d4a74a] mb-3">Key Takeaways</h4>
                <ul className="space-y-3 text-[#f0ebe3]/90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a74a] font-bold">1.</span>
                    <span>The &euro;90B loan structure assumes Russian reparations that may never materialize</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a74a] font-bold">2.</span>
                    <span>European debt-to-GDP ratios are already at concerning levels across major economies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a74a] font-bold">3.</span>
                    <span>Fresh funding (~&euro;50B) may only sustain operations for approximately one year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a74a] font-bold">4.</span>
                    <span>U.S. support has diminished significantly compared to previous years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a74a] font-bold">5.</span>
                    <span>Back-channel diplomatic discussions appear to be intensifying</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#1b4965]/30 via-[#0d1b2a] to-[#1b4965]/30 rounded-lg border border-[#1b4965]/50">
                <h4 className="text-[#f0ebe3] font-bold mb-3">The Bottom Line</h4>
                <p className="text-[#f0ebe3]/90">
                  This isn't simply aid—it's a complex financial instrument that transfers significant
                  risk to European taxpayers while providing temporary relief to Ukraine.
                  The absence of fixed repayment terms and reliance on hypothetical Russian reparations
                  creates structural vulnerabilities that markets and citizens should understand.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Cross-links */}
        <div className="mt-12 bg-gradient-to-r from-[#1b4965]/30 via-[#0d1b2a] to-[#1b4965]/30 rounded-xl p-8 border border-[#1b4965]/50">
          <h2 className="text-2xl font-bold text-[#f0ebe3] mb-6 text-center">Continue Your Research</h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/truth-project/eu-fiscal-gamble" className="px-6 py-3 bg-[#1b4965] hover:bg-[#1b4965]/80 text-[#f0ebe3] font-medium rounded-lg transition-colors">
              Deep Dive: Fiscal Analysis
            </Link>
            <Link href="/briefings/nato-expansion" className="px-6 py-3 bg-[#c73032] hover:bg-[#c73032]/80 text-[#f0ebe3] font-medium rounded-lg transition-colors">
              NATO Expansion Context
            </Link>
            <Link href="/briefings/sanctions-warfare" className="px-6 py-3 bg-[#f0ebe3]/10 hover:bg-[#f0ebe3]/20 text-[#f0ebe3] font-medium rounded-lg transition-colors border border-[#f0ebe3]/20">
              Sanctions Analysis
            </Link>
          </div>

          <p className="text-center text-[#f0ebe3]/60 text-sm mt-6">
            Sources: European Council statements, IMF projections, U.S. Congressional records, ISW assessments
          </p>
        </div>
      </div>
    </div>
  )
}

function Section({
  id,
  title,
  icon: Icon,
  expanded,
  onToggle,
  color,
  children
}: {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  color: string
  children: React.ReactNode
}) {
  const colorClasses: Record<string, string> = {
    red: "border-[#c73032]/40 bg-[#c73032]/10",
    blue: "border-[#1b4965]/50 bg-[#1b4965]/10",
    purple: "border-[#1b4965]/50 bg-[#1b4965]/10",
    green: "border-[#1b4965]/50 bg-[#1b4965]/10",
    yellow: "border-[#d4a74a]/40 bg-[#d4a74a]/10",
    amber: "border-[#d4a74a]/40 bg-[#d4a74a]/10"
  }

  const iconColorClasses: Record<string, string> = {
    red: "text-[#c73032]",
    blue: "text-[#d4a74a]",
    purple: "text-[#f0ebe3]",
    green: "text-[#d4a74a]",
    yellow: "text-[#d4a74a]",
    amber: "text-[#d4a74a]"
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f0ebe3]/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${iconColorClasses[color]}`} />
          <h2 className="text-xl md:text-2xl font-bold text-[#f0ebe3] text-left">{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-[#f0ebe3]/60 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#f0ebe3]/60 flex-shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  )
}
