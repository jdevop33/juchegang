"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Building2, DollarSign, Globe, Users, AlertTriangle, ChevronDown, ChevronUp, Shield, Target, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function NGORegimeChangePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("architecture")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Link href="/briefings" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Briefings
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            NGOs and Regime Change
          </h1>
          <p className="text-xl text-white/80 max-w-4xl">
            How humanitarian rhetoric masks geopolitical operations. The sophisticated network of organizations that serve as instruments of foreign influence rather than genuine humanitarian assistance.
          </p>
        </div>

        {/* Key Statistics Alert */}
        <div className="mb-12 bg-gradient-to-r from-red-900/30 via-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-400 mb-3">The Scale of Operations</h2>
              <p className="text-white/90 mb-4">
                What the CIA once did covertly, organizations like the National Endowment for Democracy now do openly—as admitted by **NED's own founder**—with massive budgets and operations spanning the globe.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded p-4">
                  <h3 className="text-red-300 font-bold mb-2">Annual Budgets</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• NED: **$300 million** annually</li>
                    <li>• USAID: **$3 billion** democracy programs</li>
                    <li>• Open Society: **$1.2 billion** annual budget</li>
                    <li>• EU: **€1 billion** similar activities</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded p-4">
                  <h3 className="text-orange-300 font-bold mb-2">Global Reach</h3>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• **100+** countries with operations</li>
                    <li>• **130+** countries enacted restrictions</li>
                    <li>• **39** projects in Venezuela alone</li>
                    <li>• **8,000** trained Nicaraguan activists</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded p-4">
                  <h3 className="text-yellow-300 font-bold mb-2">Admission of Purpose</h3>
                  <blockquote className="text-white/80 text-sm italic">
                    "A lot of what we do today was done covertly 25 years ago by the CIA."
                    <br />
                    <span className="text-yellow-400">— Allen Weinstein, NED co-founder, 1991</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture of Influence */}
        <Section
          id="architecture"
          title="The Architecture of Influence Operations"
          icon={Building2}
          expanded={expandedSection === "architecture"}
          onToggle={() => toggleSection("architecture")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">The Network Structure</h3>

              <div className="space-y-6">
                <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                  <h4 className="font-bold text-white mb-3">Core Organizations</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-red-400 font-bold mb-2">National Endowment for Democracy (NED)</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Created in 1983</li>
                        <li>• $300M congressional funding</li>
                        <li>• Four core institutes:</li>
                        <li>&nbsp;&nbsp;- International Republican Institute</li>
                        <li>&nbsp;&nbsp;- National Democratic Institute</li>
                        <li>&nbsp;&nbsp;- Center for International Private Enterprise</li>
                        <li>&nbsp;&nbsp;- Solidarity Center</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-orange-400 font-bold mb-2">Funding Network</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• USAID: $3B democracy assistance</li>
                        <li>• State Department programs</li>
                        <li>• Westminster Foundation (UK): £14M</li>
                        <li>• George Soros OSF: $1.2B annual</li>
                        <li>• Multiple intermediary institutions</li>
                        <li>• Academic centers and think tanks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <FundingFlowCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Documented Cases */}
        <Section
          id="cases"
          title="Documented Cases: The Pattern Revealed"
          icon={FileText}
          expanded={expandedSection === "cases"}
          onToggle={() => toggleSection("cases")}
          color="purple"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Color Revolutions to Modern Operations</h3>

              <div className="space-y-6">
                <CaseStudyCard
                  title="Georgia's Rose Revolution (2003)"
                  funding="USAID: $1.5 million for voter computerization"
                  operations={[
                    "Freedom House and Soros foundations supported opposition",
                    "U.S. ambassador coached Mikhail Saakashvili",
                    "Direct regime removal tactics training"
                  ]}
                  outcome="Successful regime change"
                />

                <CaseStudyCard
                  title="Ukraine's Orange Revolution (2004)"
                  funding="U.S. government: $14 million officially"
                  operations={[
                    "Freedom of Choice Coalition (U.S. embassy, World Bank, NED, Soros)",
                    "1,000+ trained election observers",
                    "Contest Russian-aligned candidate victory"
                  ]}
                  outcome="Overturned election results"
                />

                <CaseStudyCard
                  title="Nicaragua Coup Attempt (2018)"
                  funding="NED: Continuous funding since 1980s"
                  operations={[
                    "ANPDH (founded in Miami) manipulated casualty figures",
                    "8,000 young Nicaraguans trained for regime change",
                    "Carl Gershman declared 'Time for him to go' about Ortega"
                  ]}
                  outcome="Failed but ongoing pressure"
                />

                <CaseStudyCard
                  title="Venezuela Operations (Ongoing)"
                  funding="NED: 39 projects, $3.4 million annually"
                  operations={[
                    "Former Senator Mel Martinez praised 'tremendous presence'",
                    "'Operation Retweet' using AI-generated avatars",
                    "Continuous anti-Maduro movement support"
                  ]}
                  outcome="NGO Oversight Law passed 2024"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Academic Analysis */}
        <Section
          id="analysis"
          title="Academic Analysis: How Legitimate Work Becomes a Weapon"
          icon={Target}
          expanded={expandedSection === "analysis"}
          onToggle={() => toggleSection("analysis")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Scholarly Research Exposes the Methods</h3>

              <div className="space-y-6">
                <AcademicCard
                  scholar="William Robinson"
                  work="'Promoting Polyarchy'"
                  finding="Distinguishes genuine democracy from 'polyarchy'—elite-controlled electoral competition maintaining existing power structures"
                  significance="Shows how U.S. strategy evolved to actively defeat participatory democracy when faced with leftist governments"
                />

                <AcademicCard
                  scholar="Gerald Sussman"
                  work="'Branding Democracy'"
                  finding="Democracy promotion operates as sophisticated propaganda using advertising techniques, polling, and media manipulation"
                  significance="Reveals the 'informational mode of development' where corporate-dominated information economies enable disguised operations"
                />

                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Operational Strategy Patterns</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-blue-400 font-bold mb-2">Phase 1: Infrastructure</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Establish local NGOs and media outlets</li>
                        <li>• Build funding relationships</li>
                        <li>• Create plausible deniability chains</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-purple-400 font-bold mb-2">Phase 2: Training</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Political training for activists</li>
                        <li>• Opposition leader development</li>
                        <li>• Youth mobilization programs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-green-400 font-bold mb-2">Phase 3: Narrative</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Human rights and democracy framing</li>
                        <li>• International crisis justification</li>
                        <li>• Media coordination</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-bold mb-2">Phase 4: Action</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Election monitoring and contesting</li>
                        <li>• Opposition candidate support</li>
                        <li>• International legitimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Funding Web */}
        <Section
          id="funding"
          title="The Funding Web That Entraps Civil Society"
          icon={DollarSign}
          expanded={expandedSection === "funding"}
          onToggle={() => toggleSection("funding")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Overt and Covert Financial Channels</h3>

              <div className="space-y-6">
                <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-500/30">
                  <h4 className="font-bold text-white mb-3">Congressional Appropriations (Overt)</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-black/20 rounded p-3">
                      <h5 className="text-yellow-400 font-bold text-lg">$300M</h5>
                      <p className="text-white/80 text-sm">NED (2023)</p>
                    </div>
                    <div className="bg-black/20 rounded p-3">
                      <h5 className="text-yellow-400 font-bold text-lg">$3B</h5>
                      <p className="text-white/80 text-sm">USAID + State Dept</p>
                    </div>
                    <div className="bg-black/20 rounded p-3">
                      <h5 className="text-yellow-400 font-bold text-lg">€1B+</h5>
                      <p className="text-white/80 text-sm">EU Programs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 rounded-lg p-6 border border-orange-500/30">
                  <h4 className="font-bold text-white mb-3">Private Foundation Layer</h4>
                  <p className="text-white/90 mb-4">
                    George Soros has contributed over **$32 billion** to Open Society Foundations,
                    funding operations in 120+ countries. These private funds coordinate with government programs.
                  </p>
                  <div className="bg-black/20 rounded p-4">
                    <h5 className="text-orange-400 font-bold mb-2">Durham Report Revelation</h5>
                    <p className="text-white/80 text-sm">
                      Declassified documents showed OSF coordination with political campaigns
                      to "demonize Putin and Trump," demonstrating coordination between private
                      foundations and government objectives.
                    </p>
                  </div>
                </div>

                <YouthTargetingCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Global Response */}
        <Section
          id="response"
          title="Global Response: Countries Fight Back"
          icon={Shield}
          expanded={expandedSection === "response"}
          onToggle={() => toggleSection("response")}
          color="green"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Defensive Measures Worldwide</h3>

              <div className="space-y-6">
                <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">Legislative Responses</h4>
                  <p className="text-white/90 mb-4">
                    Over **130 countries** have enacted restrictions on foreign-funded NGOs since 2002,
                    reflecting widespread recognition of these organizations as tools of foreign influence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <CountryResponseCard
                    country="Russia"
                    year="2012"
                    law="Foreign Agents Law"
                    requirement="Registration of NGOs receiving foreign funding and engaging in political activity"
                  />
                  <CountryResponseCard
                    country="China"
                    year="2017"
                    law="NGO Management Law"
                    requirement="Security agency registration and restricted activities to approved areas"
                  />
                  <CountryResponseCard
                    country="Hungary"
                    year="2017"
                    law="Transparency Laws"
                    requirement="Disclosure of foreign funding sources (challenged by EU courts)"
                  />
                  <CountryResponseCard
                    country="Georgia"
                    year="2024"
                    law="Transparency of Foreign Influence"
                    requirement="Registration and transparency for foreign-funded organizations"
                  />
                </div>

                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Perspectives from Targeted Countries</h4>
                  <div className="space-y-3">
                    <div className="bg-black/20 rounded p-3">
                      <h5 className="text-blue-400 font-bold mb-1">China's Position</h5>
                      <p className="text-white/80 text-sm">
                        Foreign Ministry characterizes NED as "white gloves" for the CIA,
                        documenting operations in Hong Kong, Xinjiang, and Tibet.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded p-3">
                      <h5 className="text-red-400 font-bold mb-1">Russian Analysis</h5>
                      <p className="text-white/80 text-sm">
                        Academics analyze Western NGO activities within military doctrines
                        of "hidden subversion" and "cognitive manipulation."
                      </p>
                    </div>
                    <div className="bg-black/20 rounded p-3">
                      <h5 className="text-yellow-400 font-bold mb-1">Latin American Documentation</h5>
                      <p className="text-white/80 text-sm">
                        Venezuela and Bolivia have extensively documented how NGOs prepared
                        ground for coups, with detailed mapping of funding networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Digital Evolution */}
        <Section
          id="digital"
          title="Digital Age: Technology Amplifies Influence Operations"
          icon={Globe}
          expanded={expandedSection === "digital"}
          onToggle={() => toggleSection("digital")}
          color="cyan"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Information Warfare Goes Digital</h3>

              <div className="space-y-6">
                <div className="bg-cyan-900/20 rounded-lg p-6 border border-cyan-500/30">
                  <h4 className="font-bold text-white mb-3">Recent Digital Operations</h4>
                  <div className="space-y-4">
                    <DigitalOpCard
                      operation="ZunZuneo (Cuba)"
                      year="2014"
                      agency="USAID"
                      description="Created fake Cuban Twitter to mobilize youth against government"
                      status="Exposed by Associated Press"
                    />
                    <DigitalOpCard
                      operation="Operation Retweet (Venezuela)"
                      year="2024"
                      agency="Various"
                      description="AI-generated avatars spreading coordinated anti-government messages"
                      status="Recently exposed"
                    />
                    <DigitalOpCard
                      operation="Euromaidan Digital (Ukraine)"
                      year="2014"
                      agency="NED-funded orgs"
                      description="Social media coordination, digital training, platform access for activists"
                      status="Successful regime change"
                    />
                  </div>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/30">
                  <h4 className="font-bold text-white mb-3">Modern Techniques</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-purple-400 font-bold mb-2">Targeting Methods</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Audience segmentation and data analytics</li>
                        <li>• Behavioral trigger identification</li>
                        <li>• A/B testing of political messages</li>
                        <li>• Micro-targeting vulnerable demographics</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-pink-400 font-bold mb-2">Youth Focus</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Viral content creation training</li>
                        <li>• Hashtag campaign coordination</li>
                        <li>• Circumvention tools for censorship</li>
                        <li>• Social media platform manipulation</li>
                      </ul>
                    </div>
                  </div>
                  <blockquote className="text-cyan-300 italic mt-4 p-4 bg-black/20 rounded">
                    "This represents what Sussman calls 'branding democracy,' where political
                    change is marketed like consumer products."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Distinguishing Authentic Work */}
        <Section
          id="authentic"
          title="Distinguishing Authentic Human Rights Work"
          icon={Users}
          expanded={expandedSection === "authentic"}
          onToggle={() => toggleSection("authentic")}
          color="emerald"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Red Flags vs. Authentic Characteristics</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                  <h4 className="text-green-400 font-bold mb-3">✅ Authentic Organizations</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• **5+ years** consistent presence before prominence</li>
                    <li>• Leadership with deep personal connections to issues</li>
                    <li>• Organic growth through community engagement</li>
                    <li>• Diverse funding sources preventing dependency</li>
                    <li>• Local fundraising capacity development</li>
                    <li>• Clear, publicly accessible financial records</li>
                    <li>• Community accountability over external donors</li>
                    <li>• Focus on specific reforms and measurable improvements</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                  <h4 className="text-red-400 font-bold mb-3">🚩 Co-option Warning Signs</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Sudden funding influxes before elections/crises</li>
                    <li>• Leadership extensively trained in foreign countries</li>
                    <li>• Messaging mirrors foreign policy positions</li>
                    <li>• Focus on regime change over specific reforms</li>
                    <li>• Lack of transparency about funding sources</li>
                    <li>• Isolation from authentic local movements</li>
                    <li>• Programs create dependency rather than capacity</li>
                    <li>• Priorities shift from local concerns to external agendas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-emerald-900/20 rounded-lg p-6 border border-emerald-500/30">
                <h4 className="text-emerald-400 font-bold mb-3">Case Study: Maintaining Authenticity</h4>
                <p className="text-white/90 mb-3">
                  **Centre for Natural Resource Governance (Zimbabwe)** provides an instructive example.
                  When board members were co-opted by mining companies, the organization restructured
                  to preserve community control rather than simply purging individuals.
                </p>
                <p className="text-white/80 text-sm">
                  This sophisticated response maintained credibility while managing internal conflicts,
                  demonstrating how authentic organizations prioritize community accountability over
                  external validation or funding convenience.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">The Path Forward</h2>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-white/90 mb-6">
              The documented evidence establishes beyond reasonable doubt that certain NGOs have been systematically employed as instruments of regime change. This reality creates profound challenges for authentic human rights work.
            </p>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-6 mb-8 border border-green-500/20">
              <h3 className="text-green-400 font-bold text-xl mb-3">Supporting Authentic Civil Society</h3>
              <p className="text-white/90 text-lg mb-4">
                The path forward requires recognizing that both government repression and foreign interference threaten genuine civil society.
              </p>
              <ul className="text-white/80 text-left max-w-2xl mx-auto space-y-2">
                <li>• Prioritize community-led initiatives with transparent, diverse funding</li>
                <li>• Respect indigenous forms of organization and resistance</li>
                <li>• Provide solidarity without imposing external agendas</li>
                <li>• Acknowledge that democracy cannot be imposed from outside</li>
                <li>• Support movements shaped by their own histories and cultures</li>
              </ul>
            </div>

            <p className="text-xl text-white font-medium mb-8">
              Democracy must grow from communities themselves, shaped by their own <span className="text-emerald-400">aspirations for justice</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/briefings/media-manipulation-decoded" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
                Media Manipulation
              </Link>
              <Link href="/briefings/nato-expansion" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                NATO Expansion
              </Link>
              <Link href="/briefings" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20">
                All Briefings
              </Link>
            </div>
          </div>
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
    yellow: "border-yellow-500/30 bg-yellow-900/10",
    cyan: "border-cyan-500/30 bg-cyan-900/10",
    emerald: "border-emerald-500/30 bg-emerald-900/10"
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

function FundingFlowCard() {
  return (
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h4 className="text-white font-bold mb-4">Funding Flow: The Laundering Process</h4>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
          <p className="text-white/80 text-sm">Congressional appropriations to core organizations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
          <p className="text-white/80 text-sm">Distribution to intermediary institutions and think tanks</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
          <p className="text-white/80 text-sm">Flow to academic centers and policy institutes</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
          <p className="text-white/80 text-sm">Final distribution to local NGOs and opposition groups</p>
        </div>
      </div>
      <div className="mt-4 p-3 bg-black/20 rounded">
        <p className="text-yellow-300 text-xs font-bold">Result:</p>
        <p className="text-white/70 text-xs">
          This laundering process allows recipient organizations to claim independence
          while serving coordinated foreign policy objectives with plausible deniability.
        </p>
      </div>
    </div>
  )
}

function CaseStudyCard({
  title,
  funding,
  operations,
  outcome
}: {
  title: string
  funding: string
  operations: string[]
  outcome: string
}) {
  return (
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h4 className="text-purple-400 font-bold mb-3">{title}</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-purple-300 text-xs font-bold mb-1">Funding:</p>
          <p className="text-white/80 text-sm mb-3">{funding}</p>
          <p className="text-blue-300 text-xs font-bold mb-1">Operations:</p>
          <ul className="text-white/70 text-sm space-y-1">
            {operations.map((op, i) => (
              <li key={i}>• {op}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-green-300 text-xs font-bold mb-1">Outcome:</p>
          <p className="text-white/80 text-sm">{outcome}</p>
        </div>
      </div>
    </div>
  )
}

function AcademicCard({
  scholar,
  work,
  finding,
  significance
}: {
  scholar: string
  work: string
  finding: string
  significance: string
}) {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-blue-400 font-bold mb-1">{scholar}</h4>
          <p className="text-blue-300 text-sm mb-2 italic">{work}</p>
          <p className="text-white/80 text-sm mb-3">{finding}</p>
          <div className="p-3 bg-black/20 rounded">
            <p className="text-yellow-300 text-xs font-bold mb-1">Significance:</p>
            <p className="text-white/70 text-xs">{significance}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function YouthTargetingCard() {
  return (
    <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
      <h4 className="font-bold text-white mb-3">Youth Mobilization Strategy</h4>
      <p className="text-white/90 mb-4">
        Youth receive particular emphasis in regime change operations, with programs providing:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="text-red-400 font-bold mb-2">Training Programs</h5>
          <ul className="text-white/80 text-sm space-y-1">
            <li>• Social media campaign creation</li>
            <li>• Viral content development</li>
            <li>• Circumvention tools for censorship</li>
            <li>• Reagan-Fascell Democracy Fellows</li>
          </ul>
        </div>
        <div>
          <h5 className="text-orange-400 font-bold mb-2">Economic Incentives</h5>
          <ul className="text-white/80 text-sm space-y-1">
            <li>• Scholarships and fellowships</li>
            <li>• Employment opportunities</li>
            <li>• Career path development</li>
            <li>• Washington DC exchanges</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 p-3 bg-black/20 rounded">
        <p className="text-red-300 text-xs font-bold">Effect:</p>
        <p className="text-white/70 text-xs">
          Creates dependencies and career paths that require continued alignment with funder interests,
          ensuring long-term influence over future leaders.
        </p>
      </div>
    </div>
  )
}

function CountryResponseCard({
  country,
  year,
  law,
  requirement
}: {
  country: string
  year: string
  law: string
  requirement: string
}) {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="flex items-center gap-3 mb-2">
        <h4 className="text-green-400 font-bold">{country}</h4>
        <span className="text-white/60 text-sm">({year})</span>
      </div>
      <p className="text-green-300 text-sm font-medium mb-2">{law}</p>
      <p className="text-white/80 text-xs">{requirement}</p>
    </div>
  )
}

function DigitalOpCard({
  operation,
  year,
  agency,
  description,
  status
}: {
  operation: string
  year: string
  agency: string
  description: string
  status: string
}) {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="grid md:grid-cols-4 gap-3">
        <div>
          <h5 className="font-bold text-cyan-400 mb-1">{operation}</h5>
          <p className="text-white/60 text-xs">{year} • {agency}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-white/80 text-sm">{description}</p>
        </div>
        <div>
          <p className="text-green-300 text-xs font-medium mb-1">Status:</p>
          <p className="text-white/70 text-xs">{status}</p>
        </div>
      </div>
    </div>
  )
}