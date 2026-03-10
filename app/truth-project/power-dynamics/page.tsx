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
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #0d1b2a, #0d1b2a)' }}>
      <div className="container mx-auto px-4 py-8">
        <Link href="/truth-project" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
          <ArrowLeft className="h-4 w-4" />
          Back to Truth Project
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#f0ebe3' }}>
            How Major Powers Actually Behave
          </h1>
          <p className="text-xl" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
            Comprehensive research using multi-language sources reveals stark contrasts between Cold War narratives and documented realities
          </p>
        </div>

        {/* Key Finding Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl p-6" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#c73032' }}>251</div>
            <div style={{ color: 'rgba(232, 228, 223, 0.8)' }}>US military interventions since 1991</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>More than previous 193 years combined</div>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#1b4965' }}>12%</div>
            <div style={{ color: 'rgba(232, 228, 223, 0.8)' }}>China's share of Africa's debt</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>Western banks hold 35% at double the interest</div>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#d4a74a' }}>50%</div>
            <div style={{ color: 'rgba(232, 228, 223, 0.8)' }}>Global population in BRICS+</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>Alternative institutions gaining momentum</div>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#c73032' }}>The Numbers Tell a Different Story</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#f0ebe3' }}>United States</div>
                  <ul className="mt-3 space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• 251 interventions (1991-2022)</li>
                    <li>• 750+ overseas bases</li>
                    <li>• 80 countries with bases</li>
                    <li>• 243,000 troops abroad</li>
                    <li>• $895 billion defense budget</li>
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#f0ebe3' }}>China</div>
                  <ul className="mt-3 space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• &lt;10 interventions since 1991</li>
                    <li>• 1 official overseas base</li>
                    <li>• Djibouti only (1,000 troops)</li>
                    <li>• Anti-piracy focus</li>
                    <li>• Regional defense posture</li>
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#f0ebe3' }}>Russia</div>
                  <ul className="mt-3 space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• 20-30 major operations</li>
                    <li>• Primarily regional</li>
                    <li>• Post-Soviet space focus</li>
                    <li>• Syria support operation</li>
                    <li>• Limited global reach</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(199, 48, 50, 0.1), rgba(212, 167, 74, 0.1))', border: '1px solid rgba(199, 48, 50, 0.2)' }}>
              <h4 className="text-lg font-bold mb-3" style={{ color: '#d4a74a' }}>Regional Perspectives</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded p-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <div className="text-3xl font-bold" style={{ color: '#c73032' }}>78%</div>
                  <div style={{ color: 'rgba(232, 228, 223, 0.8)' }}>Arabs view US as threat</div>
                </div>
                <div className="rounded p-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <div className="text-3xl font-bold" style={{ color: '#1b4965' }}>37%</div>
                  <div style={{ color: 'rgba(232, 228, 223, 0.8)' }}>Arabs view China as threat</div>
                </div>
              </div>
              <p className="mt-4 italic" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1b4965' }}>Debt Trap Myth vs Reality</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Chinese Finance to Africa</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• $170 billion in loans (2000-2022)</li>
                    <li>• 3.2% average interest rate</li>
                    <li>• 12% of Africa's external debt</li>
                    <li>• Willing to restructure (Ethiopia: 15→30 years)</li>
                    <li>• No verified asset seizures</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.15)', border: '1px solid rgba(27, 73, 101, 0.25)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Western Finance to Africa</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• 35% held by Western banks</li>
                    <li>• 6.9% commercial lending rates</li>
                    <li>• $212 billion aid with conditions</li>
                    <li>• Requires governance changes</li>
                    <li>• Structural adjustment programs</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(212, 167, 74, 0.1), rgba(27, 73, 101, 0.1))', border: '1px solid rgba(212, 167, 74, 0.2)' }}>
                <blockquote className="italic" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                  "The debt-trap narrative is a function of China-US strategic rivalry rather than African realities."
                </blockquote>
                <p className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>- Boston University & Oxford Research</p>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>Infrastructure Reality Check</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#d4a74a' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#f0ebe3' }}>Kenya Standard Gauge Railway</p>
                    <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>Completed 18 months early, employed 25,000 Kenyans, reduced travel time 60%</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#d4a74a' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#f0ebe3' }}>Ethiopia's Infrastructure</p>
                    <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>China built 70% of road infrastructure while Ethiopia receives only $13/capita Western aid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#d4a74a' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#f0ebe3' }}>Belt and Road Initiative</p>
                    <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>$1.3 trillion mobilized since 2013 for ports, railways, power plants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
              <blockquote className="text-lg italic" style={{ color: '#d4a74a' }}>
                "China is not like the West, which interferes in Ethiopian domestic affairs when they provide aid."
              </blockquote>
              <p className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>- Ethiopian Government Officials</p>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1b4965' }}>Selective Compliance Patterns</h3>

              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#c73032' }}>United States</h4>
                  <ul className="space-y-1 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Not ratified Convention on Rights of the Child</li>
                    <li>• Withdrew from ICC jurisdiction</li>
                    <li>• Ignored 1986 ICJ ruling on Nicaragua</li>
                    <li>• Sanctions affect 1/3 of global population</li>
                  </ul>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1b4965' }}>UN Security Council Vetoes</h4>
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div>
                      <div className="text-2xl font-bold" style={{ color: '#f0ebe3' }}>82</div>
                      <div className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>US (mostly for Israel)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: '#f0ebe3' }}>120</div>
                      <div className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>USSR/Russia</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: '#f0ebe3' }}>16</div>
                      <div className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>China</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(27, 73, 101, 0.15), rgba(27, 73, 101, 0.1))', border: '1px solid rgba(27, 73, 101, 0.2)' }}>
              <blockquote className="italic" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                "International law serves to maintain power hierarchies established during the colonial period"
              </blockquote>
              <p className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>- Third World Legal Scholarship</p>
              <p className="mt-4" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>Trade Patterns Reveal Colonial Continuities</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Africa-China Trade</h4>
                  <div className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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

                <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.15)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>US FDI Pattern</h4>
                  <div className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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

            <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(27, 73, 101, 0.15), rgba(212, 167, 74, 0.1))', border: '1px solid rgba(27, 73, 101, 0.2)' }}>
              <h4 className="text-lg font-bold mb-3" style={{ color: '#1b4965' }}>Infrastructure Investment Reality</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5" style={{ color: '#1b4965' }} />
                  <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>BRI: $1.3 trillion in construction since 2013</p>
                </div>
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5" style={{ color: '#d4a74a' }} />
                  <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>NDB & AIIB: $90+ billion infrastructure finance</p>
                </div>
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5" style={{ color: '#d4a74a' }} />
                  <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>Fewer political conditions than Western institutions</p>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>Aid as Geopolitical Tool</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-lg p-4" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#f0ebe3' }}>Russia</h4>
                  <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>200,000 tons grain to Africa</p>
                  <p className="text-xs mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>Only to 6 countries with Wagner presence</p>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#f0ebe3' }}>China</h4>
                  <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>2.2 billion COVID vaccines</p>
                  <p className="text-xs mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>Prioritized BRI participants</p>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#f0ebe3' }}>United States</h4>
                  <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>$71.9 billion annually</p>
                  <p className="text-xs mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>Political freezes risk 1,200 deaths in Afghanistan</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
              <p className="font-medium" style={{ color: '#d4a74a' }}>Key Pattern:</p>
              <p className="mt-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1b4965' }}>Global South Views</h3>

              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Africa (Afrobarometer)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold" style={{ color: '#1b4965' }}>59%</div>
                      <div className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>View China positively</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: '#1b4965' }}>58%</div>
                      <div className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>View US positively</div>
                    </div>
                  </div>
                  <p className="text-sm mt-3" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>Prefer US model (33%) over China's (22%) but want pragmatic engagement with both</p>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.15)', border: '1px solid rgba(27, 73, 101, 0.25)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Arab World</h4>
                  <div className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <div className="flex justify-between">
                      <span>View Israel as threat:</span>
                      <span className="font-bold" style={{ color: '#c73032' }}>84%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>View US as threat:</span>
                      <span className="font-bold" style={{ color: '#d4a74a' }}>78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>View China as threat:</span>
                      <span className="font-bold" style={{ color: '#1b4965' }}>37%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>ASEAN Strategic Hedging</h4>
                  <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    50.5% would choose China if forced to align, but prefer not choosing at all
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(27, 73, 101, 0.15), rgba(27, 73, 101, 0.1))', border: '1px solid rgba(27, 73, 101, 0.2)' }}>
              <blockquote className="italic" style={{ color: '#1b4965' }}>
                "Friendly countries always negotiate"
              </blockquote>
              <p className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>- Kenya Government</p>
              <p className="mt-4" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>BRICS+ Expansion</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <div className="text-3xl font-bold" style={{ color: '#d4a74a' }}>50%</div>
                  <div className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>Global population</div>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ background: 'rgba(212, 167, 74, 0.15)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <div className="text-3xl font-bold" style={{ color: '#d4a74a' }}>41%</div>
                  <div className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>World GDP (PPP)</div>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
                  <div className="text-3xl font-bold" style={{ color: '#c73032' }}>24</div>
                  <div className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>Member & partner countries</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#d4a74a' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#f0ebe3' }}>New Development Bank</p>
                    <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>$32.8 billion approved, equal voting rights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#d4a74a' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#f0ebe3' }}>Payment Systems</p>
                    <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>52.9% of China's payments in RMB vs 42.8% USD</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#d4a74a' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#f0ebe3' }}>SCO Coverage</p>
                    <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>42% of global population</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(212, 167, 74, 0.1), rgba(212, 167, 74, 0.15))', border: '1px solid rgba(212, 167, 74, 0.2)' }}>
              <blockquote className="italic" style={{ color: '#d4a74a' }}>
                "What infringes on sovereignty is a lack of development that creates dependence on aid."
              </blockquote>
              <p className="text-sm mt-2" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>- Ethiopian Officials</p>
              <p className="mt-4" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
                The Kazan Declaration's emphasis on opposing "unlawful unilateral coercive measures" reflects shared Global South opposition to Western sanctions regimes
              </p>
            </div>
          </div>
        </Section>

        {/* Conclusions */}
        <div className="mt-12 rounded-xl p-8" style={{ background: 'linear-gradient(to right, rgba(27, 73, 101, 0.15), rgba(27, 73, 101, 0.2), rgba(27, 73, 101, 0.15))', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#f0ebe3' }}>Conclusions Challenge Fundamental Assumptions</h2>

          <div className="space-y-4" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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

            <div className="mt-6 p-6 rounded-lg" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-lg font-medium mb-3" style={{ color: '#f0ebe3' }}>The Real Challenge</p>
              <p style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                The fundamental challenge isn't choosing between powers but transforming structural relationships. The documented
                realities call for moving beyond Cold War frameworks to understand contemporary multipolarity where Global South
                agency, alternative institutions, and pragmatic partnerships increasingly define international relations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project" className="px-6 py-3 font-medium rounded-lg transition-colors" style={{ background: '#1b4965', color: '#f0ebe3' }}>
            Explore More Analysis
          </Link>
          <Link href="/briefings" className="px-6 py-3 font-medium rounded-lg transition-colors" style={{ background: '#1b4965', color: '#f0ebe3' }}>
            Read Briefings
          </Link>
          <Link href="/contact" className="px-6 py-3 font-medium rounded-lg transition-colors" style={{ background: 'rgba(255,255,255,0.1)', color: '#f0ebe3', border: '1px solid rgba(255,255,255,0.2)' }}>
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
  const colorStyles: Record<string, { border: string; background: string; iconColor: string }> = {
    red: { border: '1px solid rgba(199, 48, 50, 0.3)', background: 'rgba(199, 48, 50, 0.1)', iconColor: '#c73032' },
    blue: { border: '1px solid rgba(27, 73, 101, 0.3)', background: 'rgba(27, 73, 101, 0.1)', iconColor: '#1b4965' },
    purple: { border: '1px solid rgba(27, 73, 101, 0.3)', background: 'rgba(27, 73, 101, 0.1)', iconColor: '#1b4965' },
    green: { border: '1px solid rgba(212, 167, 74, 0.3)', background: 'rgba(212, 167, 74, 0.1)', iconColor: '#d4a74a' },
    orange: { border: '1px solid rgba(212, 167, 74, 0.3)', background: 'rgba(212, 167, 74, 0.1)', iconColor: '#d4a74a' },
    cyan: { border: '1px solid rgba(27, 73, 101, 0.3)', background: 'rgba(27, 73, 101, 0.1)', iconColor: '#1b4965' },
    yellow: { border: '1px solid rgba(212, 167, 74, 0.3)', background: 'rgba(212, 167, 74, 0.1)', iconColor: '#d4a74a' }
  }

  const style = colorStyles[color] || colorStyles.blue

  return (
    <div className="mb-8 rounded-xl overflow-hidden" style={{ border: style.border, background: style.background }}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between transition-colors"
        style={{ background: 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" style={{ color: style.iconColor }} />
          <h2 className="text-2xl font-bold text-left" style={{ color: '#f0ebe3' }}>{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5" style={{ color: 'rgba(232, 228, 223, 0.6)' }} />
        ) : (
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(232, 228, 223, 0.6)' }} />
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
