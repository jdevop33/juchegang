"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, DollarSign, Users, Building, Scale, Globe, Shield, FileText, TrendingUp, AlertTriangle, ChevronDown, ChevronUp, Gavel, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SorosGovernmentNexusPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("financial")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1b2a] via-[#0d1b2a]/95 to-[#0d1b2a]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/briefings" className="inline-flex items-center gap-2 text-[#f0ebe3]/70 hover:text-[#f0ebe3] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Briefings
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f0ebe3] mb-4">
            The Soros-Government Nexus
          </h1>
          <p className="text-xl text-[#f0ebe3]/80 max-w-4xl">
            A comprehensive examination of documented relationships spanning financial partnerships, personnel exchanges, and policy influence operations. Over $300 million in government funding revealed.
          </p>
        </div>

        {/* Key Statistics Alert */}
        <div className="mb-12 bg-gradient-to-r from-[#1b4965]/30 via-[#1b4965]/20 to-[#1b4965]/30 rounded-2xl p-8 border border-[#1b4965]/40">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-[#d4a74a] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-[#d4a74a] mb-3">The Scale of Integration</h2>
              <p className="text-[#f0ebe3]/90 mb-4">
                This examination reveals a complex web of documented relationships showing systematic fusion of private wealth and government power through legal channels.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#0d1b2a]/50 rounded p-4">
                  <h3 className="text-[#d4a74a] font-bold mb-2">Financial Scale</h3>
                  <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                    <li>• <strong>$300M+</strong> government partnerships</li>
                    <li>• <strong>$500M+</strong> political contributions since 2020</li>
                    <li>• <strong>$32B</strong> charitable giving since 1984</li>
                    <li>• <strong>$50M+</strong> prosecutor elections</li>
                  </ul>
                </div>
                <div className="bg-[#0d1b2a]/50 rounded p-4">
                  <h3 className="text-[#1b4965] font-bold mb-2">Personnel Pipeline</h3>
                  <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                    <li>• <strong>70+</strong> CAP staff to Biden admin</li>
                    <li>• State Dept-OSF revolving door</li>
                    <li>• Prosecutors representing <strong>70M</strong> Americans</li>
                    <li>• Multiple cabinet-level connections</li>
                  </ul>
                </div>
                <div className="bg-[#0d1b2a]/50 rounded p-4">
                  <h3 className="text-[#f0ebe3] font-bold mb-2">Global Operations</h3>
                  <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                    <li>• <strong>120+</strong> countries with operations</li>
                    <li>• Direct Ukraine policy access</li>
                    <li>• Eastern Europe democracy programs</li>
                    <li>• Coordinated USAID partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Partnerships */}
        <Section
          id="financial"
          title="Financial Partnerships and Official Coordination"
          icon={DollarSign}
          expanded={expandedSection === "financial"}
          onToggle={() => toggleSection("financial")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#d4a74a] mb-4">Documented Government Funding Channels</h3>

              <div className="space-y-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Major Funding Relationships</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[#d4a74a] font-bold mb-2">East-West Management Institute</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• <strong>$270 million</strong> from USAID (15 years)</li>
                        <li>• <strong>$90 million</strong> additional contracts</li>
                        <li>• Partnership with Open Society</li>
                        <li>• Eastern Europe, Central Asia, Africa</li>
                        <li>• Judicial reform initiatives</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#1b4965] font-bold mb-2">Direct Government Funding</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• <strong>$30 million</strong> State Dept (1998-2003)</li>
                        <li>• <strong>$55 million</strong> "Making All Voices Count"</li>
                        <li>• Palestinian Faculty Development Program</li>
                        <li>• Strategic USAID partnerships</li>
                        <li>• Joint funding structures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <FundingExampleCard
                  title="Vera Institute of Justice (2023)"
                  government="$207 million (79% of revenue)"
                  soros="Ongoing backing since founding"
                  operation="Criminal justice reform implementation"
                />

                <FundingExampleCard
                  title="Organized Crime & Corruption Reporting"
                  government="USAID funding stream"
                  soros="Open Society parallel funding"
                  operation="Journalism and transparency initiatives"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Revolving Door */}
        <Section
          id="revolving"
          title="The Revolving Door Machine"
          icon={Users}
          expanded={expandedSection === "revolving"}
          onToggle={() => toggleSection("revolving")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1b4965] mb-4">Center for American Progress: The Pipeline</h3>

              <div className="space-y-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">CAP Foundation & Biden Administration</h4>
                  <p className="text-[#f0ebe3]/90 mb-4">
                    Founded by John Podesta in 2003 with <strong>over $3 million in Soros seed funding</strong>,
                    CAP has become the primary pipeline for staffing Democratic administrations.
                  </p>
                  <div className="bg-[#0d1b2a]/30 rounded p-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1b4965] mb-2">70+</div>
                      <p className="text-[#f0ebe3]/80 text-sm">Former CAP employees joined Biden administration (2021-2022)</p>
                      <p className="text-[#1b4965] text-xs mt-2 italic">
                        CAP internal communications: "taking all our good people"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <PersonnelCard
                    name="Tom Perriello"
                    pathway={[
                      "Congress (2009-2011)",
                      "CAP Action Fund President (2011-2013)",
                      "Obama State Department (2014-2016)",
                      "OSF US Programs Leader (2018-2023)",
                      "Biden Special Envoy for Sudan (Current)"
                    ]}
                  />
                  <PersonnelCard
                    name="Patrick Gaspard"
                    pathway={[
                      "Obama White House Political Director",
                      "US Ambassador to South Africa",
                      "Open Society Foundations President",
                      "CAP President (Current)"
                    ]}
                  />
                  <PersonnelCard
                    name="Neera Tanden"
                    pathway={[
                      "CAP President (10+ years)",
                      "Biden White House Senior Advisor",
                      "Domestic Policy Council Director (Current)"
                    ]}
                  />
                  <PersonnelCard
                    name="Blinken Family Connection"
                    pathway={[
                      "Secretary of State Antony Blinken",
                      "Father Donald: CEU Board of Trustees",
                      "Serves alongside Soros",
                      "Funds 'Vera & Donald Blinken OSA'"
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Political Influence */}
        <Section
          id="political"
          title="Political Influence and Lobbying Operations"
          icon={Building}
          expanded={expandedSection === "political"}
          onToggle={() => toggleSection("political")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#d4a74a] mb-4">Unprecedented Scale of Political Investment</h3>

              <div className="space-y-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Lobbying Expenditures</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#0d1b2a]/30 rounded p-3 text-center">
                      <div className="text-2xl font-bold text-[#d4a74a]">$2.66M</div>
                      <p className="text-[#f0ebe3]/80 text-sm">OSF Lobbying (2024)</p>
                    </div>
                    <div className="bg-[#0d1b2a]/30 rounded p-3 text-center">
                      <div className="text-2xl font-bold text-[#d4a74a]">$1.5M</div>
                      <p className="text-[#f0ebe3]/80 text-sm">OSA Fund (Q1 2023)</p>
                    </div>
                    <div className="bg-[#0d1b2a]/30 rounded p-3 text-center">
                      <div className="text-2xl font-bold text-[#d4a74a]">$140M</div>
                      <p className="text-[#f0ebe3]/80 text-sm">Political Advocacy (2021)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#d4a74a]/10 rounded-lg p-6 border border-[#d4a74a]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Campaign Contributions Since 2020</h4>
                  <div className="space-y-3">
                    <ContributionCard org="Total Political Contributions" amount="$500M+" note="Largest individual donor category" />
                    <ContributionCard org="2022 Midterm Elections" amount="$128.5M" note="Single largest individual contributor" />
                    <ContributionCard org="Democracy PAC" amount="$60M" note="2024 election cycle" />
                    <ContributionCard org="House/Senate Majority PACs" amount="$8M" note="Combined contributions" />
                  </div>
                  <div className="mt-4 p-3 bg-[#0d1b2a]/30 rounded">
                    <p className="text-[#d4a74a] text-xs font-bold">Historical Context:</p>
                    <p className="text-[#f0ebe3]/70 text-xs">
                      2004: $23.5 million to defeat President Bush marked the beginning
                      of systematic mega-donor political influence in American elections.
                    </p>
                  </div>
                </div>

                <PolicyInfluenceCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Prosecutor Funding */}
        <Section
          id="prosecutors"
          title="Prosecutor Funding: Criminal Justice Transformation"
          icon={Gavel}
          expanded={expandedSection === "prosecutors"}
          onToggle={() => toggleSection("prosecutors")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#c73032] mb-4">$50M+ Campaign to Transform American Justice</h3>

              <div className="space-y-6">
                <div className="bg-[#c73032]/10 rounded-lg p-6 border border-[#c73032]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Strategic Electoral Investment</h4>
                  <p className="text-[#f0ebe3]/90 mb-4">
                    Systematic campaign to elect progressive prosecutors representing <strong>over 70 million Americans</strong>
                    through targeted investment in low-turnout local elections.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#0d1b2a]/30 rounded p-4">
                      <h5 className="text-[#c73032] font-bold mb-2">Major Elections</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Larry Krasner (Philadelphia): $1.7M</li>
                        <li>• Kim Foxx (Chicago): Significant support</li>
                        <li>• George Gascon (Los Angeles): Major funding</li>
                        <li>• Alvin Bragg (Manhattan): Strategic investment</li>
                      </ul>
                    </div>
                    <div className="bg-[#0d1b2a]/30 rounded p-4">
                      <h5 className="text-[#d4a74a] font-bold mb-2">Electoral Strategy</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Target low-turnout elections</li>
                        <li>• Krasner: 38% of 17% turnout</li>
                        <li>• Relatively small investments</li>
                        <li>• Outsized influence on outcomes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#d4a74a]/10 rounded-lg p-6 border border-[#d4a74a]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Policy Impact & Consequences</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[#d4a74a] font-bold mb-2">Implemented Policies</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Reduced prosecutions</li>
                        <li>• Eliminated cash bail programs</li>
                        <li>• Declined certain crime categories</li>
                        <li>• Progressive sentencing guidelines</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#c73032] font-bold mb-2">Public Response</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Chesa Boudin: Recalled (San Francisco)</li>
                        <li>• Kimberly Gardner: Resigned (St. Louis)</li>
                        <li>• Rachel Rollins: Resigned (Boston)</li>
                        <li>• Multiple removal proceedings</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-[#0d1b2a]/30 rounded">
                    <p className="text-[#d4a74a] text-xs font-bold">Congressional Findings (2024):</p>
                    <p className="text-[#f0ebe3]/70 text-xs">
                      House testimony documented correlations between progressive prosecutor
                      policies and crime increases in multiple jurisdictions.
                    </p>
                  </div>
                </div>

                <ObfuscationCard />
              </div>
            </div>
          </div>
        </Section>

        {/* International Operations */}
        <Section
          id="international"
          title="International Operations: Foreign Policy Alignment"
          icon={Globe}
          expanded={expandedSection === "international"}
          onToggle={() => toggleSection("international")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1b4965] mb-4">De Facto Partnership in Democracy Promotion</h3>

              <div className="space-y-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Eastern Europe & Former Soviet States</h4>
                  <p className="text-[#f0ebe3]/90 mb-4">
                    OSF operations align extensively with US foreign policy objectives,
                    functioning as de facto partners in democracy promotion efforts.
                  </p>
                </div>

                <div className="space-y-4">
                  <InternationalOpCard
                    country="Ukraine"
                    operations={[
                      "International Renaissance Foundation key role in Orange Revolution (2004)",
                      "Significant involvement in Maidan Revolution (2014)",
                      "Direct communication with Asst. Secretary Victoria Nuland (2016)",
                      "USAID and OSF funded same pro-democracy groups"
                    ]}
                    impact="Major influence on Ukrainian political developments"
                  />

                  <InternationalOpCard
                    country="Macedonia"
                    operations={[
                      "$4.8 million USAID to Foundation Open Society-Macedonia (2012-2016)",
                      "Six Republican senators called for investigations",
                      "FOSM director became SDSM party vice president",
                      "NGO-to-political power pipeline demonstrated"
                    ]}
                    impact="Direct pathway from NGO leadership to ruling party"
                  />

                  <InternationalOpCard
                    country="Georgia"
                    operations={[
                      "USAID spent $1.5M computerizing voter rolls",
                      "OSF openly supported Mikheil Saakashvili",
                      "Funded student activist training",
                      "NGOs integrated into new government post-revolution"
                    ]}
                    impact="Former FM: 'Soros NGOs undeniably carried the revolution'"
                  />

                  <InternationalOpCard
                    country="Kyrgyzstan"
                    operations={[
                      "American University of Central Asia joint funding",
                      "OSI: $5 million contribution",
                      "USAID: $10 million contribution",
                      "Coordinated educational influence operations"
                    ]}
                    impact="$15 million combined investment in strategic institution"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Regulatory Framework */}
        <Section
          id="regulatory"
          title="Regulatory Oversight and Legal Frameworks"
          icon={Scale}
          expanded={expandedSection === "regulatory"}
          onToggle={() => toggleSection("regulatory")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#d4a74a] mb-4">Sophisticated Legal Structure Optimization</h3>

              <div className="space-y-6">
                <div className="bg-[#d4a74a]/10 rounded-lg p-6 border border-[#d4a74a]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Strategic Regulatory Avoidance</h4>
                  <div className="space-y-4">
                    <RegulatoryCard
                      structure="Family Office Conversion (2011)"
                      benefit="Avoided Dodd-Frank SEC registration requirements"
                      details="Returned $1B to outside investors, retained $26B family management"
                      impact="Minimal regulatory burden for continued operations"
                    />
                    <RegulatoryCard
                      structure="501(c)(3) + 501(c)(4) Structure"
                      benefit="Tax deductions + unlimited political lobbying"
                      details="OSF provides tax benefits, OSP enables political activities"
                      impact="Maximum operational flexibility with tax advantages"
                    />
                    <RegulatoryCard
                      structure="FARA Avoidance"
                      benefit="No foreign agent registration required"
                      details="Despite extensive international operations"
                      impact="$20M+ spent (2018) lobbying to shape FARA reform"
                    />
                  </div>
                </div>

                <div className="bg-[#c73032]/10 rounded-lg p-6 border border-[#c73032]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">International vs Domestic Treatment</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[#c73032] font-bold mb-2">International Restrictions</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Russia: Banned as security threat</li>
                        <li>• Hungary: "Stop Soros" laws enacted</li>
                        <li>• Multiple countries restrict activities</li>
                        <li>• France: Insider trading conviction (2002)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#d4a74a] font-bold mb-2">US Treatment</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• No special oversight mechanisms</li>
                        <li>• FEC violations: Minimal penalties</li>
                        <li>• No parallel SEC enforcement</li>
                        <li>• Government partnership protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Government Protection */}
        <Section
          id="protection"
          title="Government Protection and Strategic Access"
          icon={Shield}
          expanded={expandedSection === "protection"}
          onToggle={() => toggleSection("protection")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1b4965] mb-4">Institutional Protection Mechanisms</h3>

              <div className="space-y-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Intelligence & Regulatory Favoritism</h4>
                  <div className="space-y-4">
                    <ProtectionCard
                      incident="FBI Intelligence (2016)"
                      description="Durham Report documented 'confidential conversations' between DNC and OSF executives"
                      outcome="No investigation or consequences for potential violations"
                      significance="Intelligence gathering without enforcement"
                    />
                    <ProtectionCard
                      incident="FCC Radio Station Acquisition (2024)"
                      description="Expedited approval for 200+ station acquisition through Audacy Inc."
                      outcome="House Oversight investigation into preferential treatment"
                      significance="Bypassed normal regulatory review procedures"
                    />
                    <ProtectionCard
                      incident="State Department Pressure (2016)"
                      description="Pressed Ukrainian officials to drop investigations of Soros-funded nonprofit"
                      outcome="Investigation discontinued"
                      significance="Active diplomatic protection of operations"
                    />
                  </div>
                </div>

                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Consistent Government Defense</h4>
                  <p className="text-[#f0ebe3]/90 mb-4">
                    Government responses consistently defend Soros activities as legitimate philanthropy
                    protected by free speech and association rights.
                  </p>
                  <div className="bg-[#0d1b2a]/30 rounded p-4">
                    <h5 className="text-[#1b4965] font-bold mb-2">Standard Response Pattern</h5>
                    <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                      <li>• Currency speculation: "Legal market operations"</li>
                      <li>• Foreign criticism: "Legitimate democracy promotion"</li>
                      <li>• Sovereignty concerns: "Protected free speech rights"</li>
                      <li>• International pressure on foreign governments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Congressional Scrutiny */}
        <Section
          id="congress"
          title="Congressional Scrutiny Without Consequences"
          icon={FileText}
          expanded={expandedSection === "congress"}
          onToggle={() => toggleSection("congress")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#d4a74a] mb-4">Investigations Without Implementation</h3>

              <div className="space-y-6">
                <div className="bg-[#d4a74a]/10 rounded-lg p-6 border border-[#d4a74a]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Multiple Congressional Investigations</h4>
                  <div className="space-y-4">
                    <CongressionalCard
                      investigation="House Oversight Committee (2024-2025)"
                      focus="NGO funding relationships and USAID coordination"
                      findings="'Revolving door between USAID employees and NGOs'"
                      outcome="Documentation without policy changes"
                    />
                    <CongressionalCard
                      investigation="Six Republican Senators (Balkans)"
                      focus="USAID-Soros coordination in Macedonia and Albania"
                      findings="Extensive partnerships and personnel crossover"
                      outcome="No restrictions implemented"
                    />
                    <CongressionalCard
                      investigation="House Testimony (2024)"
                      focus="Progressive prosecutor impact analysis"
                      findings="Crime correlations in multiple jurisdictions"
                      outcome="Continued operations without oversight"
                    />
                  </div>
                </div>

                <div className="bg-[#c73032]/10 rounded-lg p-6 border border-[#c73032]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">The Partisan Divide Dynamic</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[#c73032] font-bold mb-2">Republican Position</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Document and criticize activities</li>
                        <li>• Investigate funding relationships</li>
                        <li>• Highlight policy consequences</li>
                        <li>• Unable to enact restrictions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#1b4965] font-bold mb-2">Democratic Position</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Defend as legitimate philanthropy</li>
                        <li>• Facilitate government partnerships</li>
                        <li>• Protect operational freedom</li>
                        <li>• Prevent meaningful oversight</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-[#0d1b2a]/30 rounded">
                    <p className="text-[#d4a74a] text-xs font-bold">Result:</p>
                    <p className="text-[#f0ebe3]/70 text-xs">
                      Consistent dynamic ensures no bipartisan consensus for meaningful reform emerges,
                      allowing operations to continue without substantial restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Multiple Perspectives */}
        <Section
          id="perspectives"
          title="Multiple Perspectives on Influence Operations"
          icon={Target}
          expanded={expandedSection === "perspectives"}
          onToggle={() => toggleSection("perspectives")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1b4965] mb-4">Competing Interpretations of the Evidence</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#c73032]/10 rounded-lg p-6 border border-[#c73032]/30">
                    <h4 className="text-[#c73032] font-bold mb-3">Conservative Critique</h4>
                    <ul className="text-[#f0ebe3]/80 text-sm space-y-2">
                      <li>• Progressive prosecutors = crime increases</li>
                      <li>• Allied government destabilization (Israel BDS)</li>
                      <li>• Democratic process circumvention</li>
                      <li>• $300M+ taxpayer funding inappropriate</li>
                      <li>• Heritage: "Worldwide repugnant policies"</li>
                      <li>• Drug legalization, prostitution advocacy</li>
                    </ul>
                  </div>

                  <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                    <h4 className="text-[#d4a74a] font-bold mb-3">Progressive Defense</h4>
                    <ul className="text-[#f0ebe3]/80 text-sm space-y-2">
                      <li>• Holocaust survivor promoting democracy</li>
                      <li>• $32B charitable giving since 1984</li>
                      <li>• Helped end Soviet communism</li>
                      <li>• Criminal justice mass incarceration reform</li>
                      <li>• OSF transparency exceeds most foundations</li>
                      <li>• Human rights and democracy expansion</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">International Perspectives Vary Dramatically</h4>
                  <div className="space-y-4">
                    <InternationalViewCard
                      region="Viktor Orban's Hungary"
                      position="Enacted 'Stop Soros' laws, forced out Central European University"
                      context="Uses anti-Soros rhetoric to win elections, views as sovereignty threat"
                    />
                    <InternationalViewCard
                      region="Putin's Russia"
                      position="Banned Open Society as security threat"
                      context="Blames Soros for anti-regime activities, color revolution support"
                    />
                    <InternationalViewCard
                      region="European Far-Right"
                      position="Uses Soros as coded antisemitic reference"
                      context="Portrays as symbol of supposed Jewish global control"
                    />
                    <InternationalViewCard
                      region="Democracy Advocates Worldwide"
                      position="Credit his support for keeping civil society alive"
                      context="View as crucial support under authoritarian pressure"
                    />
                  </div>
                </div>

                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Academic Research Findings</h4>
                  <blockquote className="text-[#1b4965] italic bg-[#0d1b2a]/30 p-4 rounded mb-4">
                    "No evidence that OSF grants produce destabilization" despite critics' claims.
                    <br />
                    <span className="text-[#d4a74a]">- Global Studies Quarterly research</span>
                  </blockquote>
                  <p className="text-[#f0ebe3]/80 text-sm">
                    Academic analysis suggests the reality lies between extremes - neither the pure
                    philanthropy claimed by supporters nor the destabilization conspiracy alleged by critics,
                    but a sophisticated influence operation operating within legal frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Why It Persists */}
        <Section
          id="persistence"
          title="Why the Relationship Endures"
          icon={TrendingUp}
          expanded={expandedSection === "persistence"}
          onToggle={() => toggleSection("persistence")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1b4965] mb-4">Structural Advantages and Legal Sophistication</h3>

              <div className="space-y-6">
                <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Legal Framework Advantages</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[#1b4965] font-bold mb-2">Regulatory Environment</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• Campaign finance laws permit unlimited expenditures</li>
                        <li>• Tax laws enable foundation structures</li>
                        <li>• Family office exemption benefits</li>
                        <li>• 501(c)(3) and 501(c)(4) dual structure</li>
                        <li>• Absence of FARA requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[#d4a74a] font-bold mb-2">Strategic Investments</h5>
                      <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                        <li>• $500M+ Democratic causes (since 2020)</li>
                        <li>• CAP personnel pipeline guarantee</li>
                        <li>• Low-visibility, high-impact positions</li>
                        <li>• Local prosecutor targeting strategy</li>
                        <li>• International policy alignment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#d4a74a]/10 rounded-lg p-6 border border-[#d4a74a]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">Succession and Institutional Momentum</h4>
                  <div className="space-y-4">
                    <SuccessionCard
                      aspect="Leadership Transition"
                      details="Alexander Soros taking leadership ensures continuity beyond George Soros's lifetime"
                    />
                    <SuccessionCard
                      aspect="Institutional Infrastructure"
                      details="Dozens of organizations, thousands of employees, billions in assets achieve self-sustaining momentum"
                    />
                    <SuccessionCard
                      aspect="Political Environment"
                      details="Polarization prevents bipartisan reform - Democrats defend, Republicans can't restrict without cooperation"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1b4965]/20 to-[#1b4965]/10 rounded-lg p-6 border border-[#1b4965]/20">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">The Deeper Reality</h4>
                  <p className="text-[#f0ebe3]/90 text-lg mb-4">
                    This examination reveals not a conspiracy but something more profound:
                    <span className="text-[#d4a74a] font-bold"> a systematic fusion of private wealth and government power</span>
                    that operates through legal channels.
                  </p>
                  <p className="text-[#f0ebe3]/80">
                    The scale and sophistication creates a parallel structure of influence operating
                    alongside, and often through, official government channels - unprecedented in American history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-r from-[#1b4965]/20 via-[#1b4965]/10 to-[#1b4965]/20 rounded-xl p-8 border border-[#1b4965]/30">
          <h2 className="text-3xl font-bold text-[#f0ebe3] mb-6 text-center">Understanding Modern Influence</h2>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-[#f0ebe3]/90 mb-6">
              Whether viewed as visionary philanthropy or dangerous manipulation depends largely on one's political perspective, but the documented evidence reveals unprecedented integration of private wealth with government power.
            </p>

            <div className="bg-gradient-to-r from-[#1b4965]/20 to-[#1b4965]/10 rounded-lg p-6 mb-8 border border-[#1b4965]/20">
              <h3 className="text-[#d4a74a] font-bold text-xl mb-3">The Fundamental Questions</h3>
              <div className="text-[#f0ebe3]/90 text-left max-w-3xl mx-auto space-y-3">
                <p>• Can democracy function when private wealth achieves such systematic government integration?</p>
                <p>• Do legal channels legitimize influence that would be illegal if conducted directly?</p>
                <p>• How do we distinguish between legitimate philanthropy and sophisticated manipulation?</p>
                <p>• What oversight mechanisms can address operations of this scale and complexity?</p>
              </div>
            </div>

            <p className="text-xl text-[#f0ebe3] font-medium mb-8">
              The evidence speaks for itself - <span className="text-[#d4a74a]">the scale and sophistication remain unprecedented</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/briefings/ngo-regime-change" className="px-6 py-3 bg-[#1b4965] hover:bg-[#1b4965]/80 text-[#f0ebe3] font-medium rounded-lg transition-colors">
                NGO Regime Change
              </Link>
              <Link href="/briefings/media-manipulation-decoded" className="px-6 py-3 bg-[#c73032] hover:bg-[#c73032]/80 text-[#f0ebe3] font-medium rounded-lg transition-colors">
                Media Manipulation
              </Link>
              <Link href="/briefings" className="px-6 py-3 bg-[#f0ebe3]/10 hover:bg-[#f0ebe3]/20 text-[#f0ebe3] font-medium rounded-lg transition-colors border border-[#f0ebe3]/20">
                All Briefings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component definitions for all the card types used above
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
    red: "border-[#c73032]/30 bg-[#c73032]/10",
    blue: "border-[#1b4965]/30 bg-[#1b4965]/10",
    gold: "border-[#d4a74a]/30 bg-[#d4a74a]/10",
  }

  const iconColors = {
    red: "text-[#c73032]",
    blue: "text-[#1b4965]",
    gold: "text-[#d4a74a]",
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color as keyof typeof colorClasses]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f0ebe3]/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${iconColors[color as keyof typeof iconColors]}`} />
          <h2 className="text-2xl font-bold text-[#f0ebe3] text-left">{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-[#f0ebe3]/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#f0ebe3]/60" />
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

function FundingExampleCard({
  title,
  government,
  soros,
  operation
}: {
  title: string
  government: string
  soros: string
  operation: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#d4a74a] font-bold mb-3">{title}</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Government Funding:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{government}</p>
        </div>
        <div>
          <p className="text-[#1b4965] text-xs font-bold mb-1">Soros Connection:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{soros}</p>
        </div>
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Operation:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{operation}</p>
        </div>
      </div>
    </div>
  )
}

function PersonnelCard({
  name,
  pathway
}: {
  name: string
  pathway: string[]
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#1b4965] font-bold mb-3">{name}</h4>
      <div className="space-y-2">
        {pathway.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#1b4965]/20 rounded-full flex items-center justify-center text-[#1b4965] text-xs font-bold flex-shrink-0">
              {i + 1}
            </div>
            <p className="text-[#f0ebe3]/80 text-sm">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContributionCard({
  org,
  amount,
  note
}: {
  org: string
  amount: string
  note: string
}) {
  return (
    <div className="flex items-center justify-between bg-[#0d1b2a]/30 rounded p-3">
      <div>
        <h5 className="text-[#d4a74a] font-bold text-sm">{org}</h5>
        <p className="text-[#f0ebe3]/70 text-xs">{note}</p>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-[#d4a74a]">{amount}</div>
      </div>
    </div>
  )
}

function PolicyInfluenceCard() {
  return (
    <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
      <h4 className="font-bold text-[#f0ebe3] mb-3">Direct Policy Impact</h4>
      <div className="space-y-4">
        <div className="bg-[#0d1b2a]/30 rounded p-4">
          <h5 className="text-[#1b4965] font-bold mb-2">Senate Commerce Committee (2008)</h5>
          <p className="text-[#f0ebe3]/80 text-sm mb-2">
            Soros testified on energy market manipulation, successfully advocating for:
          </p>
          <ul className="text-[#f0ebe3]/70 text-xs space-y-1">
            <li>• Increased margin requirements</li>
            <li>• Speculation limits implementation</li>
            <li>• FTC anti-manipulation authority (Dec 2007)</li>
          </ul>
        </div>
        <div className="bg-[#0d1b2a]/30 rounded p-4">
          <h5 className="text-[#d4a74a] font-bold mb-2">State Department Access (2016)</h5>
          <p className="text-[#f0ebe3]/80 text-sm">
            FOIA documents show direct communication with Assistant Secretary Victoria Nuland
            on Ukraine policy, with advisors providing analysis on Russian bond markets and
            European migration policy.
          </p>
        </div>
      </div>
    </div>
  )
}

function ObfuscationCard() {
  return (
    <div className="bg-[#1b4965]/20 rounded-lg p-6 border border-[#1b4965]/30">
      <h4 className="font-bold text-[#f0ebe3] mb-3">Funding Obfuscation Strategy</h4>
      <p className="text-[#f0ebe3]/90 mb-4">
        The prosecutor funding operates through intermediary organizations to obscure direct connections
        and create plausible deniability while maintaining influence.
      </p>
      <div className="bg-[#0d1b2a]/30 rounded p-4">
        <h5 className="text-[#d4a74a] font-bold mb-2">Example: Color of Change</h5>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#1b4965] rounded-full flex items-center justify-center text-[#f0ebe3] text-xs font-bold">1</div>
            <p className="text-[#f0ebe3]/80 text-sm">Soros funds Color of Change organization</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#1b4965] rounded-full flex items-center justify-center text-[#f0ebe3] text-xs font-bold">2</div>
            <p className="text-[#f0ebe3]/80 text-sm">Color of Change supports specific prosecutor candidates</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#1b4965] rounded-full flex items-center justify-center text-[#f0ebe3] text-xs font-bold">3</div>
            <p className="text-[#f0ebe3]/80 text-sm">Creates plausible deniability for direct Soros connection</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function InternationalOpCard({
  country,
  operations,
  impact
}: {
  country: string
  operations: string[]
  impact: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#1b4965] font-bold mb-3">{country}</h4>
      <div className="space-y-2 mb-4">
        {operations.map((op, i) => (
          <div key={i} className="text-[#f0ebe3]/80 text-sm">• {op}</div>
        ))}
      </div>
      <div className="p-3 bg-[#0d1b2a]/30 rounded">
        <p className="text-[#d4a74a] text-xs font-bold mb-1">Impact:</p>
        <p className="text-[#f0ebe3]/70 text-xs">{impact}</p>
      </div>
    </div>
  )
}

function RegulatoryCard({
  structure,
  benefit,
  details,
  impact
}: {
  structure: string
  benefit: string
  details: string
  impact: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#d4a74a] font-bold mb-2">{structure}</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Benefit:</p>
          <p className="text-[#f0ebe3]/80 text-sm mb-3">{benefit}</p>
          <p className="text-[#1b4965] text-xs font-bold mb-1">Details:</p>
          <p className="text-[#f0ebe3]/70 text-sm">{details}</p>
        </div>
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Impact:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{impact}</p>
        </div>
      </div>
    </div>
  )
}

function ProtectionCard({
  incident,
  description,
  outcome,
  significance
}: {
  incident: string
  description: string
  outcome: string
  significance: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#1b4965] font-bold mb-2">{incident}</h4>
      <p className="text-[#f0ebe3]/80 text-sm mb-3">{description}</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Outcome:</p>
          <p className="text-[#f0ebe3]/70 text-sm">{outcome}</p>
        </div>
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Significance:</p>
          <p className="text-[#f0ebe3]/70 text-sm">{significance}</p>
        </div>
      </div>
    </div>
  )
}

function CongressionalCard({
  investigation,
  focus,
  findings,
  outcome
}: {
  investigation: string
  focus: string
  findings: string
  outcome: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#d4a74a] font-bold mb-2">{investigation}</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Focus:</p>
          <p className="text-[#f0ebe3]/80 text-sm mb-3">{focus}</p>
          <p className="text-[#1b4965] text-xs font-bold mb-1">Findings:</p>
          <p className="text-[#f0ebe3]/70 text-sm">{findings}</p>
        </div>
        <div>
          <p className="text-[#c73032] text-xs font-bold mb-1">Outcome:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{outcome}</p>
        </div>
      </div>
    </div>
  )
}

function InternationalViewCard({
  region,
  position,
  context
}: {
  region: string
  position: string
  context: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#1b4965] font-bold mb-2">{region}</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#1b4965] text-xs font-bold mb-1">Position:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{position}</p>
        </div>
        <div>
          <p className="text-[#d4a74a] text-xs font-bold mb-1">Context:</p>
          <p className="text-[#f0ebe3]/70 text-sm">{context}</p>
        </div>
      </div>
    </div>
  )
}

function SuccessionCard({
  aspect,
  details
}: {
  aspect: string
  details: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h4 className="text-[#d4a74a] font-bold mb-2">{aspect}</h4>
      <p className="text-[#f0ebe3]/80 text-sm">{details}</p>
    </div>
  )
}
