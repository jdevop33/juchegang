"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Globe, DollarSign, Shield, Heart, Users, Building, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PowerDynamicsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("military")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Link href="/truth-project" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Truth Project
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            How Major Powers Actually Behave
          </h1>
          <p className="text-xl text-white/80">
            Comprehensive research using multi-language sources reveals stark contrasts between Cold War narratives and documented realities
          </p>
        </div>

        {/* Key Finding Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-400 mb-2">251</div>
            <div className="text-white/80">US military interventions since 1991</div>
            <div className="text-sm text-white/60 mt-2">More than previous 193 years combined</div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">12%</div>
            <div className="text-white/80">China's share of Africa's debt</div>
            <div className="text-sm text-white/60 mt-2">Western banks hold 35% at double the interest</div>
          </div>
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
            <div className="text-white/80">Global population in BRICS+</div>
            <div className="text-sm text-white/60 mt-2">Alternative institutions gaining momentum</div>
          </div>
        </div>

        {/* Military Interventions Section */}
        <Section
          id="military"
          title="Military Interventions Show Dramatic Asymmetry"
          icon={Shield}
          expanded={expandedSection === "military"}
          onToggle={() => toggleSection("military")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">The Numbers Tell a Different Story</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white">United States</div>
                  <ul className="mt-3 space-y-2 text-white/80">
                    <li>• 251 interventions (1991-2022)</li>
                    <li>• 750+ overseas bases</li>
                    <li>• 80 countries with bases</li>
                    <li>• 243,000 troops abroad</li>
                    <li>• $895 billion defense budget</li>
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">China</div>
                  <ul className="mt-3 space-y-2 text-white/80">
                    <li>• &lt;10 interventions since 1991</li>
                    <li>• 1 official overseas base</li>
                    <li>• Djibouti only (1,000 troops)</li>
                    <li>• Anti-piracy focus</li>
                    <li>• Regional defense posture</li>
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Russia</div>
                  <ul className="mt-3 space-y-2 text-white/80">
                    <li>• 20-30 major operations</li>
                    <li>• Primarily regional</li>
                    <li>• Post-Soviet space focus</li>
                    <li>• Syria support operation</li>
                    <li>• Limited global reach</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-orange-400 mb-3">Regional Perspectives</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded p-4">
                  <div className="text-3xl font-bold text-red-400">78%</div>
                  <div className="text-white/80">Arabs view US as threat</div>
                </div>
                <div className="bg-black/20 rounded p-4">
                  <div className="text-3xl font-bold text-blue-400">37%</div>
                  <div className="text-white/80">Arabs view China as threat</div>
                </div>
              </div>
              <p className="mt-4 text-white/70 italic">
                "Regional perspectives increasingly view US military asymmetry as destabilizing rather than stabilizing"
              </p>
            </div>
          </div>
        </Section>

        {/* Development Models Section */}
        <Section
          id="development"
          title="Development Models Diverge from Aid Narratives"
          icon={TrendingUp}
          expanded={expandedSection === "development"}
          onToggle={() => toggleSection("development")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Debt Trap Myth vs Reality</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Chinese Finance to Africa</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• $170 billion in loans (2000-2022)</li>
                    <li>• 3.2% average interest rate</li>
                    <li>• 12% of Africa's external debt</li>
                    <li>• Willing to restructure (Ethiopia: 15→30 years)</li>
                    <li>• No verified asset seizures</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold text-white mb-3">Western Finance to Africa</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 35% held by Western banks</li>
                    <li>• 6.9% commercial lending rates</li>
                    <li>• $212 billion aid with conditions</li>
                    <li>• Requires governance changes</li>
                    <li>• Structural adjustment programs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-6 border border-green-500/20">
                <blockquote className="text-white/90 italic">
                  "The debt-trap narrative is a function of China-US strategic rivalry rather than African realities."
                </blockquote>
                <p className="text-sm text-white/60 mt-2">- Boston University & Oxford Research</p>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Infrastructure Reality Check</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">Kenya Standard Gauge Railway</p>
                    <p className="text-white/70 text-sm">Completed 18 months early, employed 25,000 Kenyans, reduced travel time 60%</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">Ethiopia's Infrastructure</p>
                    <p className="text-white/70 text-sm">China built 70% of road infrastructure while Ethiopia receives only $13/capita Western aid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">Belt and Road Initiative</p>
                    <p className="text-white/70 text-sm">$1.3 trillion mobilized since 2013 for ports, railways, power plants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-500/30">
              <blockquote className="text-yellow-400 text-lg italic">
                "China is not like the West, which interferes in Ethiopian domestic affairs when they provide aid."
              </blockquote>
              <p className="text-sm text-white/60 mt-2">- Ethiopian Government Officials</p>
            </div>
          </div>
        </Section>

        {/* International Law Section */}
        <Section
          id="law"
          title="International Law Compliance Reveals Systemic Hypocrisy"
          icon={Globe}
          expanded={expandedSection === "law"}
          onToggle={() => toggleSection("law")}
          color="purple"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Selective Compliance Patterns</h3>
              
              <div className="space-y-4">
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                  <h4 className="font-bold text-red-400 mb-2">United States</h4>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>• Not ratified Convention on Rights of the Child</li>
                    <li>• Withdrew from ICC jurisdiction</li>
                    <li>• Ignored 1986 ICJ ruling on Nicaragua</li>
                    <li>• Sanctions affect 1/3 of global population</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-blue-400 mb-2">UN Security Council Vetoes</h4>
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div>
                      <div className="text-2xl font-bold text-white">82</div>
                      <div className="text-xs text-white/60">US (mostly for Israel)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">120</div>
                      <div className="text-xs text-white/60">USSR/Russia</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">16</div>
                      <div className="text-xs text-white/60">China</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/20">
              <blockquote className="text-white/90 italic">
                "International law serves to maintain power hierarchies established during the colonial period"
              </blockquote>
              <p className="text-sm text-white/60 mt-2">- Third World Legal Scholarship</p>
              <p className="text-white/70 mt-4">
                The veto creates accountability-free zones where P5 members cannot face enforcement regardless of violations, 
                undermining the entire "rules-based order" narrative.
              </p>
            </div>
          </div>
        </Section>

        {/* Economic Relationships Section */}
        <Section
          id="economic"
          title="Economic Relationships Perpetuate Extraction Patterns"
          icon={DollarSign}
          expanded={expandedSection === "economic"}
          onToggle={() => toggleSection("economic")}
          color="green"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Trade Patterns Reveal Colonial Continuities</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">Africa-China Trade</h4>
                  <div className="space-y-2 text-white/80 text-sm">
                    <div className="flex justify-between">
                      <span>Raw material exports:</span>
                      <span className="font-bold">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manufactured imports:</span>
                      <span className="font-bold">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual volume:</span>
                      <span className="font-bold">$258 billion</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30">
                  <h4 className="font-bold text-white mb-3">US FDI Pattern</h4>
                  <div className="space-y-2 text-white/80 text-sm">
                    <div className="flex justify-between">
                      <span>Services focus:</span>
                      <span className="font-bold">81%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manufacturing:</span>
                      <span className="font-bold">19%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tech transfer:</span>
                      <span className="font-bold">Limited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-lg p-6 border border-blue-500/20">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Infrastructure Investment Reality</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5 text-blue-400" />
                  <p className="text-white/80">BRI: $1.3 trillion in construction since 2013</p>
                </div>
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5 text-green-400" />
                  <p className="text-white/80">NDB & AIIB: $90+ billion infrastructure finance</p>
                </div>
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5 text-yellow-400" />
                  <p className="text-white/80">Fewer political conditions than Western institutions</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Humanitarian Assistance Section */}
        <Section
          id="humanitarian"
          title="Humanitarian Assistance Exposes Strategic Calculations"
          icon={Heart}
          expanded={expandedSection === "humanitarian"}
          onToggle={() => toggleSection("humanitarian")}
          color="orange"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Aid as Geopolitical Tool</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                  <h4 className="font-bold text-white mb-2">Russia</h4>
                  <p className="text-white/80 text-sm">200,000 tons grain to Africa</p>
                  <p className="text-white/60 text-xs mt-2">Only to 6 countries with Wagner presence</p>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-2">China</h4>
                  <p className="text-white/80 text-sm">2.2 billion COVID vaccines</p>
                  <p className="text-white/60 text-xs mt-2">Prioritized BRI participants</p>
                </div>
                
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-white mb-2">United States</h4>
                  <p className="text-white/80 text-sm">$71.9 billion annually</p>
                  <p className="text-white/60 text-xs mt-2">Political freezes risk 1,200 deaths in Afghanistan</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-900/20 rounded-lg p-6 border border-orange-500/30">
              <p className="text-orange-400 font-medium">Key Pattern:</p>
              <p className="text-white/80 mt-2">
                All three powers demonstrate faster response to allied countries' crises while using humanitarian aid as diplomatic leverage
              </p>
            </div>
          </div>
        </Section>

        {/* Regional Perceptions Section */}
        <Section
          id="perceptions"
          title="Regional Perceptions Reject Binary Choices"
          icon={Users}
          expanded={expandedSection === "perceptions"}
          onToggle={() => toggleSection("perceptions")}
          color="cyan"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Global South Views</h3>
              
              <div className="space-y-4">
                <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-500/30">
                  <h4 className="font-bold text-white mb-3">Africa (Afrobarometer)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">59%</div>
                      <div className="text-white/70 text-sm">View China positively</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">58%</div>
                      <div className="text-white/70 text-sm">View US positively</div>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mt-3">Prefer US model (33%) over China's (22%) but want pragmatic engagement with both</p>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold text-white mb-3">Arab World</h4>
                  <div className="space-y-2 text-white/80 text-sm">
                    <div className="flex justify-between">
                      <span>View Israel as threat:</span>
                      <span className="font-bold text-red-400">84%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>View US as threat:</span>
                      <span className="font-bold text-orange-400">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>View China as threat:</span>
                      <span className="font-bold text-blue-400">37%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">ASEAN Strategic Hedging</h4>
                  <p className="text-white/80 text-sm">
                    50.5% would choose China if forced to align, but prefer not choosing at all
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-6 border border-cyan-500/20">
              <blockquote className="text-cyan-400 italic">
                "Friendly countries always negotiate"
              </blockquote>
              <p className="text-sm text-white/60 mt-2">- Kenya Government</p>
              <p className="text-white/70 mt-4">
                Demonstrating agency in managing relationships rather than passive dependency
              </p>
            </div>
          </div>
        </Section>

        {/* Alternative Institutions Section */}
        <Section
          id="institutions"
          title="Alternative Institutions Gain Unprecedented Momentum"
          icon={Building}
          expanded={expandedSection === "institutions"}
          onToggle={() => toggleSection("institutions")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">BRICS+ Expansion</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30 text-center">
                  <div className="text-3xl font-bold text-yellow-400">50%</div>
                  <div className="text-white/70 text-sm">Global population</div>
                </div>
                <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30 text-center">
                  <div className="text-3xl font-bold text-orange-400">41%</div>
                  <div className="text-white/70 text-sm">World GDP (PPP)</div>
                </div>
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30 text-center">
                  <div className="text-3xl font-bold text-red-400">24</div>
                  <div className="text-white/70 text-sm">Member & partner countries</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">New Development Bank</p>
                    <p className="text-white/70 text-sm">$32.8 billion approved, equal voting rights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">Payment Systems</p>
                    <p className="text-white/70 text-sm">52.9% of China's payments in RMB vs 42.8% USD</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">SCO Coverage</p>
                    <p className="text-white/70 text-sm">42% of global population</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-6 border border-yellow-500/20">
              <blockquote className="text-yellow-400 italic">
                "What infringes on sovereignty is a lack of development that creates dependence on aid."
              </blockquote>
              <p className="text-sm text-white/60 mt-2">- Ethiopian Officials</p>
              <p className="text-white/70 mt-4">
                The Kazan Declaration's emphasis on opposing "unlawful unilateral coercive measures" reflects shared Global South opposition to Western sanctions regimes
              </p>
            </div>
          </div>
        </Section>

        {/* Conclusions */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">Conclusions Challenge Fundamental Assumptions</h2>
          
          <div className="space-y-4 text-white/80">
            <p>
              The evidence systematically contradicts inherited Cold War narratives. Rather than defensive democracies containing 
              aggressive authoritarian expansion, data shows the US maintaining unprecedented global military intervention capability 
              while China pursues primarily economic influence and Russia operates regionally.
            </p>
            
            <p>
              Instead of benevolent Western aid versus predatory Chinese lending, research reveals different models of extraction 
              and dependency. Chinese infrastructure delivers tangible results despite debt concerns while Western aid maintains 
              political conditionalities many recipients view as sovereignty violations.
            </p>
            
            <p>
              Most significantly, Global South countries demonstrate sophisticated agency in navigating great power competition, 
              strategically leveraging different partnerships while building alternative institutions. The rise of BRICS, expansion 
              of South-South cooperation, and rejection of binary choices represents active Global South strategy rather than passive alignment.
            </p>
            
            <div className="mt-6 p-6 bg-black/30 rounded-lg border border-white/10">
              <p className="text-lg text-white font-medium mb-3">The Real Challenge</p>
              <p className="text-white/90">
                The fundamental challenge isn't choosing between powers but transforming structural relationships. The documented 
                realities call for moving beyond Cold War frameworks to understand contemporary multipolarity where Global South 
                agency, alternative institutions, and pragmatic partnerships increasingly define international relations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Explore More Analysis
          </Link>
          <Link href="/briefings" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
            Read Briefings
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20">
            Share Your Perspective
          </Link>
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
  icon: any
  expanded: boolean
  onToggle: () => void
  color: string
  children: React.ReactNode
}) {
  const colorClasses = {
    red: "border-red-500/30 bg-red-900/10",
    blue: "border-blue-500/30 bg-blue-900/10",
    purple: "border-purple-500/30 bg-purple-900/10",
    green: "border-green-500/30 bg-green-900/10",
    orange: "border-orange-500/30 bg-orange-900/10",
    cyan: "border-cyan-500/30 bg-cyan-900/10",
    yellow: "border-yellow-500/30 bg-yellow-900/10"
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color as keyof typeof colorClasses]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 text-${color}-400`} />
          <h2 className="text-2xl font-bold text-white text-left">{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-white/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/60" />
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