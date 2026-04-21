"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Factory, DollarSign, Truck, Building2, AlertTriangle, ChevronDown, ChevronUp, MapPin, Scale, Target, Globe, Zap, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function KochVenezuelanOilPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("dependency")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-river-depths via-river-depths/95 to-river-depths">
      <div className="container mx-auto px-4 py-8">
        <Link href="/briefings" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Briefings
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4">
            Koch Industries and Venezuelan Oil
          </h1>
          <p className="text-xl text-cream/80 max-w-4xl">
            Uncovering the complex web of economic interests, political tensions, and strategic dependencies. The $409 million dispute and refinery infrastructure built for Venezuelan crude revealed.
          </p>
        </div>

        {/* Key Statistics Alert */}
        <div className="mb-12 bg-gradient-to-r from-sovereign-gold/20 via-sovereign-gold/10 to-sovereign-gold/20 rounded-2xl p-8 border border-sovereign-gold/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-sovereign-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-sovereign-gold mb-3">The Strategic Dependency</h2>
              <p className="text-cream/90 mb-4">
                While Koch Industries never held direct oil extraction rights in Venezuela, their refineries were strategically dependent on Venezuelan heavy crude, creating powerful economic incentives.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-river-depths/50 rounded p-4">
                  <h3 className="text-sovereign-gold font-bold mb-2">Refinery Capacity</h3>
                  <ul className="text-cream/80 text-sm space-y-1">
                    <li>• Pine Bend: **375,000 bpd**</li>
                    <li>• Corpus Christi: **350,000 bpd**</li>
                    <li>• Built for Venezuelan heavy crude</li>
                    <li>• **$9 billion** in improvements since 2000</li>
                  </ul>
                </div>
                <div className="bg-river-depths/50 rounded p-4">
                  <h3 className="text-sovereign-gold font-bold mb-2">Economic Impact</h3>
                  <ul className="text-cream/80 text-sm space-y-1">
                    <li>• **$3 billion** annual potential savings</li>
                    <li>• **$33/barrel** premium over Canadian</li>
                    <li>• **$3-8/barrel** transport advantage</li>
                    <li>• **$409 million** ICSID award unpaid</li>
                  </ul>
                </div>
                <div className="bg-river-depths/50 rounded p-4">
                  <h3 className="text-sovereign-gold font-bold mb-2">Political Leverage</h3>
                  <ul className="text-cream/80 text-sm space-y-1">
                    <li>• **$115 million** lobbying since 1998</li>
                    <li>• **$400 million** Koch network elections</li>
                    <li>• **44** Trump officials with Koch ties</li>
                    <li>• Chavez banned Koch crude sales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Dependency */}
        <Section
          id="dependency"
          title="Strategic Dependency on Heavy Crude Oil"
          icon={Factory}
          expanded={expandedSection === "dependency"}
          onToggle={() => toggleSection("dependency")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-sovereign-gold mb-4">Captive Customers: Built for Venezuelan Crude</h3>

              <div className="space-y-6">
                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Refinery Infrastructure Optimization</h4>
                  <p className="text-cream/90 mb-4">
                    Koch operates two major complexes specifically engineered for Venezuelan heavy crude,
                    making them what investigative journalist Greg Palast called **"captive customers"**.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <RefineryCard
                      name="Pine Bend (Minnesota)"
                      capacity="375,000 barrels/day"
                      specialization="80% Canadian heavy crude (post-Venezuela pivot)"
                      infrastructure="537-mile owned pipeline system"
                    />
                    <RefineryCard
                      name="Corpus Christi (Texas)"
                      capacity="350,000 barrels/day"
                      specialization="289,000 bpd Venezuelan crude processing capability"
                      infrastructure="Adjacent to Venezuela's Citgo refinery"
                    />
                  </div>
                </div>

                <EconomicAdvantageCard />

                <div className="bg-korean-red/10 rounded-lg p-6 border border-korean-red/30">
                  <h4 className="font-bold text-cream mb-3">Political Confrontation with Chavez</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-korean-red font-bold mb-2">Royalty Rate Increase</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Heavy crude royalties: 1% to 30%</li>
                        <li>• Early 2000s policy change</li>
                        <li>• Major impact on Koch economics</li>
                        <li>• Strategic vulnerability exposed</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sovereign-gold font-bold mb-2">Chavez's Response</h5>
                      <blockquote className="text-cream/80 text-sm italic bg-river-depths/30 p-3 rounded">
                        "We are no longer an oil colony. We refuse to sell Venezuelan crude to Koch Industries."
                        <br />
                        <span className="text-sovereign-gold">- Hugo Chavez, citing Koch's political interference</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FertiNitro Dispute */}
        <Section
          id="fertiniro"
          title="The $409 Million FertiNitro Dispute"
          icon={Scale}
          expanded={expandedSection === "fertiniro"}
          onToggle={() => toggleSection("fertiniro")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-korean-red mb-4">Fertilizer Operations and Expropriation</h3>

              <div className="space-y-6">
                <div className="bg-korean-red/10 rounded-lg p-6 border border-korean-red/30">
                  <h4 className="font-bold text-cream mb-3">Joint Venture Structure</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-korean-red font-bold mb-2">Koch Subsidiaries</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Koch Minerals Sarl</li>
                        <li>• Koch Nitrogen International Sarl</li>
                        <li>• **25% equity stake** in FertiNitro</li>
                        <li>• Joint venture with Pequiven</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-river-current font-bold mb-2">Operations</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Ammonia and urea plants</li>
                        <li>• Located in Jose, Venezuela</li>
                        <li>• Strategic fertilizer production</li>
                        <li>• Pre-nationalization period</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <TimelineCard
                  events={[
                    { date: "1997-1998", event: "Koch enters FertiNitro joint venture during 'Apertura' period" },
                    { date: "October 11, 2010", event: "Chavez government expropriates FertiNitro facilities" },
                    { date: "2017", event: "ICSID rules expropriation unlawful, awards Koch $409 million + interest" },
                    { date: "2025", event: "Venezuela refuses payment, Koch pursues U.S. federal court collection" }
                  ]}
                />

                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">International Arbitration Victory</h4>
                  <p className="text-cream/90 mb-4">
                    The International Centre for Settlement of Investment Disputes (ICSID) ruled that
                    Venezuela's expropriation was unlawful, but collection remains impossible due to
                    Venezuela's refusal to comply with the award.
                  </p>
                  <div className="bg-river-depths/30 rounded p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sovereign-gold mb-2">$409M</div>
                      <p className="text-cream/80 text-sm">Plus interest, awarded by ICSID (2017)</p>
                      <p className="text-korean-red text-xs mt-2">Status: Unpaid, pursued through U.S. courts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Infrastructure */}
        <Section
          id="infrastructure"
          title="Refinery Infrastructure Built for Venezuelan Crude"
          icon={Building2}
          expanded={expandedSection === "infrastructure"}
          onToggle={() => toggleSection("infrastructure")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-current mb-4">Billions in Heavy Crude Optimization</h3>

              <div className="space-y-6">
                <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
                  <h4 className="font-bold text-cream mb-3">Strategic Infrastructure Investment</h4>
                  <p className="text-cream/90 mb-4">
                    Koch's refineries sit adjacent to Venezuela's Citgo refinery, both optimized for processing
                    heavy, sour crude with high sulfur content and significant asphalt yields.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-river-depths/30 rounded p-4">
                      <h5 className="text-river-current font-bold mb-2">Investment Scale</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• **$9 billion** in improvements since 2000</li>
                        <li>• Focus on heavy crude processing</li>
                        <li>• Coking and hydrocracking capabilities</li>
                        <li>• Would require **"billions"** to rebuild for light crude</li>
                      </ul>
                    </div>
                    <div className="bg-river-depths/30 rounded p-4">
                      <h5 className="text-sovereign-gold font-bold mb-2">Current Operations</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Pine Bend: 80% Canadian heavy crude</li>
                        <li>• Strategic pivot after Venezuela loss</li>
                        <li>• 537-mile pipeline system owned</li>
                        <li>• Alaska refinery closed (2014)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <TechnicalAdvantageCard />

                <GeographicCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Political Influence */}
        <Section
          id="political"
          title="Political Influence and Sanctions Strategy"
          icon={Target}
          expanded={expandedSection === "political"}
          onToggle={() => toggleSection("political")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-sovereign-gold mb-4">$115 Million in Strategic Lobbying</h3>

              <div className="space-y-6">
                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Massive Political Investment</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <StatCard
                      label="Lobbying Expenditure"
                      value="$115M+"
                      subtitle="Since 1998, 96% oil & gas focused"
                    />
                    <StatCard
                      label="Election Investment"
                      value="$400M+"
                      subtitle="Koch network, primarily AFP"
                    />
                    <StatCard
                      label="Trump Officials"
                      value="44"
                      subtitle="With close Koch network ties"
                    />
                  </div>
                </div>

                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Policy Advocacy Through Cato Institute</h4>
                  <p className="text-cream/90 mb-4">
                    The Cato Institute, founded by Charles Koch, has published policy analyses arguing that
                    Venezuelan sanctions create "severe humanitarian consequences" without achieving policy goals.
                  </p>
                  <div className="bg-river-depths/30 rounded p-4">
                    <h5 className="text-sovereign-gold font-bold mb-2">Cato Position</h5>
                    <ul className="text-cream/80 text-sm space-y-1">
                      <li>• Advocates targeted vs. comprehensive sanctions</li>
                      <li>• Emphasizes humanitarian costs</li>
                      <li>• Questions effectiveness of current approach</li>
                      <li>• Aligns with Koch business interests</li>
                    </ul>
                  </div>
                </div>

                <KeystoneConnectionCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Environmental Impact */}
        <Section
          id="environmental"
          title="Environmental Violations and Community Impact"
          icon={AlertTriangle}
          expanded={expandedSection === "environmental"}
          onToggle={() => toggleSection("environmental")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-korean-red mb-4">97-Count Felony Conviction</h3>

              <div className="space-y-6">
                <div className="bg-korean-red/10 rounded-lg p-6 border border-korean-red/30">
                  <h4 className="font-bold text-cream mb-3">Corpus Christi Benzene Violations</h4>
                  <p className="text-cream/90 mb-4">
                    In 2000, the Justice Department secured a **97-count indictment** against Koch's
                    Corpus Christi refinery for massive environmental crimes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-river-depths/30 rounded p-4">
                      <h5 className="text-korean-red font-bold mb-2">Violation Scale</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• **91 metric tons** benzene emitted</li>
                        <li>• **15x the legal limit**</li>
                        <li>• Reported only **0.61 metric tons**</li>
                        <li>• Massive under-reporting fraud</li>
                      </ul>
                    </div>
                    <div className="bg-river-depths/30 rounded p-4">
                      <h5 className="text-sovereign-gold font-bold mb-2">Consequences</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• **$20 million** fine paid</li>
                        <li>• Pled guilty to felony charge</li>
                        <li>• Ongoing community health impact</li>
                        <li>• CDC studies show elevated cancer rates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <WhistleblowerCard />

                <CommunityImpactCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Heavy Crude Economics */}
        <Section
          id="economics"
          title="The Heavy Crude Pricing Advantage"
          icon={DollarSign}
          expanded={expandedSection === "economics"}
          onToggle={() => toggleSection("economics")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-sovereign-gold mb-4">Breathtakingly Profitable Processing</h3>

              <div className="space-y-6">
                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Economic Analysis of Heavy Crude Advantages</h4>
                  <p className="text-cream/90 mb-4">
                    Venezuelan Merey crude typically trades at significant discounts while offering
                    substantial refining margin advantages for equipped facilities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <PricingCard
                    crude="Venezuelan Merey (16-18 API)"
                    discount="$5-15 per barrel below benchmark"
                    advantage="Higher middle distillate yields"
                    note="Transportation: 1,200 nautical miles to Gulf Coast"
                  />
                  <PricingCard
                    crude="Canadian WCS"
                    discount="$10-20 below WTI (up to $50 during constraints)"
                    advantage="Pipeline constraints create opportunities"
                    note="Complex pipeline/rail logistics required"
                  />
                </div>

                <MarginCard />

                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">The 1969 Pine Bend Acquisition</h4>
                  <p className="text-cream/90 mb-4">
                    Considered the **"most significant event"** in Koch's evolution, Pine Bend refinery
                    processes 25% of U.S. daily imports from Canadian oil sands at peak capacity.
                  </p>
                  <div className="bg-river-depths/30 rounded p-4">
                    <p className="text-sovereign-gold text-sm italic">
                      "The ability to process what industry insiders call 'garbage crudes' that other
                      refineries cannot handle efficiently has made Pine Bend breathtakingly profitable."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Shadow Connections */}
        <Section
          id="shadow"
          title="Shadow Connections and Sanctions Workarounds"
          icon={Globe}
          expanded={expandedSection === "shadow"}
          onToggle={() => toggleSection("shadow")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-current mb-4">Complex Financial Structures</h3>

              <div className="space-y-6">
                <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
                  <h4 className="font-bold text-cream mb-3">Luxembourg Leaks: Project Snow</h4>
                  <p className="text-cream/90 mb-4">
                    The International Consortium of Investigative Journalists revealed Koch's use of
                    sophisticated financial structures potentially facilitating sanctions workarounds.
                  </p>
                  <div className="bg-river-depths/30 rounded p-4">
                    <h5 className="text-river-current font-bold mb-2">"Project Snow" Restructuring</h5>
                    <ul className="text-cream/80 text-sm space-y-1">
                      <li>• **26-step restructuring** through Luxembourg</li>
                      <li>• Tax minimization through subsidiaries</li>
                      <li>• Complex ownership structures</li>
                      <li>• Potential sanctions navigation capabilities</li>
                    </ul>
                  </div>
                </div>

                <InvestigativeCard />

                <ComplianceCard />

                <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
                  <h4 className="font-bold text-cream mb-3">2025 Trading Exit</h4>
                  <p className="text-cream/90 mb-4">
                    Koch announced in April 2025 complete exit from oil and fuel trading business globally,
                    potentially signaling recognition that Venezuelan crude access remains politically impossible.
                  </p>
                  <div className="bg-river-depths/30 rounded p-4">
                    <p className="text-river-current text-sm">
                      This strategic pivot may mark the end of direct Venezuelan oil involvement,
                      focusing instead on securing Canadian supplies despite higher costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section
          id="timeline"
          title="Timeline of Venezuelan Involvement"
          icon={TrendingUp}
          expanded={expandedSection === "timeline"}
          onToggle={() => toggleSection("timeline")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-current mb-4">Decades of Venezuelan Engagement</h3>

              <div className="space-y-6">
                <TimelineEventCard
                  era="Pre-Chavez 'Apertura' (1997-1999)"
                  events={[
                    "Koch enters FertiNitro joint venture",
                    "Venezuelan oil market liberalization",
                    "International investment welcomed",
                    "Refinery optimization for Venezuelan crude begins"
                  ]}
                  outcome="Strategic positioning established"
                />

                <TimelineEventCard
                  era="Chavez Era Escalation (2000-2010)"
                  events={[
                    "Heavy crude royalty rates: 1% to 30%",
                    "Chavez refuses to sell crude to Koch",
                    "'We are no longer an oil colony' declaration",
                    "Koch begins Canadian crude pivot strategy"
                  ]}
                  outcome="Direct crude access blocked"
                />

                <TimelineEventCard
                  era="Nationalization Period (2010-2017)"
                  events={[
                    "October 2010: FertiNitro expropriated",
                    "International arbitration proceedings begin",
                    "Koch pursues legal remedies",
                    "2017: ICSID awards $409 million + interest"
                  ]}
                  outcome="Legal victory, collection impossible"
                />

                <TimelineEventCard
                  era="Sanctions Era (2017-Present)"
                  events={[
                    "U.S. sanctions eliminate legal Venezuelan oil trade",
                    "Koch focuses on Canadian supply chains",
                    "Investigative reporting on workaround attempts",
                    "April 2025: Koch exits oil trading globally"
                  ]}
                  outcome="End of direct Venezuelan involvement"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Future Implications */}
        <Section
          id="future"
          title="Financial Implications and Future Positioning"
          icon={Zap}
          expanded={expandedSection === "future"}
          onToggle={() => toggleSection("future")}
          color="gold"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-sovereign-gold mb-4">Fundamental Business Model Impact</h3>

              <div className="space-y-6">
                <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Heavy Crude Processing Remains Central</h4>
                  <p className="text-cream/90 mb-4">
                    Despite political constraints, the fundamental economics ensure Venezuelan crude
                    would remain attractive if political constraints were removed.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-river-depths/30 rounded p-4">
                      <h5 className="text-sovereign-gold font-bold mb-2">Current Reality</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Maximum pressure sanctions continue</li>
                        <li>• Canadian crude as primary source</li>
                        <li>• Higher costs but political certainty</li>
                        <li>• Infrastructure optimized for heavy crude</li>
                      </ul>
                    </div>
                    <div className="bg-river-depths/30 rounded p-4">
                      <h5 className="text-sovereign-gold font-bold mb-2">Future Potential</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Shorter transportation routes</li>
                        <li>• Established Gulf Coast infrastructure</li>
                        <li>• Quality characteristics match capabilities</li>
                        <li>• Billions in potential savings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <BusinessModelCard />

                <StrategicCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-r from-sovereign-gold/20 via-sovereign-gold/10 to-sovereign-gold/20 rounded-xl p-8 border border-sovereign-gold/30">
          <h2 className="text-3xl font-bold text-cream mb-6 text-center">The Complex Web Revealed</h2>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-cream/90 mb-6">
              While Koch Industries never held direct Venezuelan oil extraction rights, the documented evidence reveals strategic dependency on Venezuelan heavy crude that created powerful economic incentives to influence U.S. policy.
            </p>

            <div className="bg-gradient-to-r from-sovereign-gold/20 to-sovereign-gold/10 rounded-lg p-6 mb-8 border border-sovereign-gold/20">
              <h3 className="text-sovereign-gold font-bold text-xl mb-3">The Evidence</h3>
              <div className="text-cream/90 text-left max-w-3xl mx-auto space-y-3">
                <p>• **$409 million arbitration dispute** from nationalized fertilizer operations</p>
                <p>• **$115 million in lobbying expenditures** primarily focused on oil and gas</p>
                <p>• **$3 billion in potential annual savings** from Venezuelan crude access</p>
                <p>• **$9 billion in refinery investments** optimized for heavy crude processing</p>
                <p>• **44 Trump administration officials** with documented Koch network ties</p>
              </div>
            </div>

            <blockquote className="text-xl text-cream/90 italic mb-8 border-l-4 border-sovereign-gold pl-6">
              "The infrastructure investments, political influence operations, and refinery configurations
              optimized for heavy crude processing reveal how deeply Venezuelan oil has shaped Koch Industries'
              strategic evolution."
            </blockquote>

            <p className="text-lg text-cream font-medium mb-8">
              The 2025 exit from oil trading may signal Koch's recognition that <span className="text-sovereign-gold">Venezuelan crude access remains politically impossible</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/briefings/soros-government-nexus" className="px-6 py-3 bg-river-current hover:bg-river-current/80 text-cream font-medium rounded-lg transition-colors">
                Soros-Government Nexus
              </Link>
              <Link href="/briefings/ngo-regime-change" className="px-6 py-3 bg-sovereign-gold hover:bg-sovereign-gold/80 text-river-depths font-medium rounded-lg transition-colors">
                NGO Regime Change
              </Link>
              <Link href="/briefings" className="px-6 py-3 bg-cream/10 hover:bg-cream/20 text-cream font-medium rounded-lg transition-colors border border-cream/20">
                All Briefings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component definitions
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
    red: "border-korean-red/30 bg-korean-red/10",
    blue: "border-river-current/30 bg-river-current/10",
    gold: "border-sovereign-gold/30 bg-sovereign-gold/10",
  }

  const iconColors = {
    red: "text-korean-red",
    blue: "text-river-current",
    gold: "text-sovereign-gold",
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color as keyof typeof colorClasses]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${iconColors[color as keyof typeof iconColors]}`} />
          <h2 className="text-2xl font-bold text-cream text-left">{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-cream/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-cream/60" />
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

function RefineryCard({
  name,
  capacity,
  specialization,
  infrastructure
}: {
  name: string
  capacity: string
  specialization: string
  infrastructure: string
}) {
  return (
    <div className="bg-cream/5 rounded-lg p-4 border border-cream/10">
      <h4 className="text-sovereign-gold font-bold mb-2">{name}</h4>
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-sovereign-gold font-medium">Capacity: </span>
          <span className="text-cream/80">{capacity}</span>
        </div>
        <div>
          <span className="text-river-current font-medium">Focus: </span>
          <span className="text-cream/80">{specialization}</span>
        </div>
        <div>
          <span className="text-sovereign-gold font-medium">Infrastructure: </span>
          <span className="text-cream/80">{infrastructure}</span>
        </div>
      </div>
    </div>
  )
}

function EconomicAdvantageCard() {
  return (
    <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
      <h4 className="font-bold text-cream mb-3">The Economics of Venezuelan Crude</h4>
      <p className="text-cream/90 mb-4">
        Greg Palast's investigation revealed compelling economic advantages that made Koch
        "captive customers" of Venezuelan heavy crude.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-river-depths/30 rounded p-3 text-center">
          <div className="text-2xl font-bold text-sovereign-gold">$33/bbl</div>
          <p className="text-cream/80 text-xs">Premium over Canadian crude</p>
        </div>
        <div className="bg-river-depths/30 rounded p-3 text-center">
          <div className="text-2xl font-bold text-sovereign-gold">$3-8/bbl</div>
          <p className="text-cream/80 text-xs">Transport cost advantage</p>
        </div>
        <div className="bg-river-depths/30 rounded p-3 text-center">
          <div className="text-2xl font-bold text-sovereign-gold">$3B</div>
          <p className="text-cream/80 text-xs">Annual potential savings</p>
        </div>
      </div>
      <div className="mt-4 p-3 bg-river-depths/30 rounded">
        <p className="text-sovereign-gold text-xs font-bold">Key Factor:</p>
        <p className="text-cream/70 text-xs">
          289,000 barrels daily at Corpus Christi x $33 premium = massive economic incentive
        </p>
      </div>
    </div>
  )
}

function TimelineCard({ events }: { events: { date: string; event: string }[] }) {
  return (
    <div className="bg-cream/5 rounded-lg p-6 border border-cream/10">
      <h4 className="text-korean-red font-bold mb-4">FertiNitro Timeline</h4>
      <div className="space-y-3">
        {events.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-20 flex-shrink-0">
              <div className="text-korean-red font-bold text-sm">{item.date}</div>
            </div>
            <div className="text-cream/80 text-sm">{item.event}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TechnicalAdvantageCard() {
  return (
    <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
      <h4 className="font-bold text-cream mb-3">Technical Advantages of Venezuelan Crude</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="text-river-current font-bold mb-2">Merey Blend Characteristics</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• 16-18 API gravity optimal for Koch facilities</li>
            <li>• High vanadium and nickel content</li>
            <li>• Recoverable metal byproducts</li>
            <li>• Higher middle distillate yields</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sovereign-gold font-bold mb-2">Processing Match</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Optimized coking capabilities</li>
            <li>• Hydrocracking technology alignment</li>
            <li>• Decades of processing experience</li>
            <li>• Transportation fuel market advantages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function GeographicCard() {
  return (
    <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
      <h4 className="font-bold text-cream mb-3">Geographic Clarification</h4>
      <p className="text-cream/90 mb-4">
        Contrary to speculation, **no Koch refineries exist in Ohio or Indiana**.
        Operations are concentrated in strategic locations.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-sovereign-gold font-bold mb-2">Actual Locations</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Minnesota: Pine Bend (375,000 bpd)</li>
            <li>• Texas: Corpus Christi (350,000 bpd)</li>
            <li>• Alaska: Former refinery (closed 2014)</li>
          </ul>
        </div>
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-sovereign-gold font-bold mb-2">Strategic Positioning</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Gulf Coast proximity to Venezuelan imports</li>
            <li>• Midwest pipeline access to Canada</li>
            <li>• Adjacent to Citgo Venezuelan operations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  subtitle
}: {
  label: string
  value: string
  subtitle: string
}) {
  return (
    <div className="bg-river-depths/30 rounded p-4 text-center">
      <div className="text-2xl font-bold text-sovereign-gold mb-1">{value}</div>
      <div className="text-sovereign-gold font-medium text-sm mb-1">{label}</div>
      <div className="text-cream/70 text-xs">{subtitle}</div>
    </div>
  )
}

function KeystoneConnectionCard() {
  return (
    <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
      <h4 className="font-bold text-cream mb-3">Keystone XL Pipeline Strategy</h4>
      <p className="text-cream/90 mb-4">
        Koch's support for the Keystone XL pipeline aligned with their strategy to replace
        Venezuelan with Canadian heavy crude, championed by politicians receiving Koch donations.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-sovereign-gold font-bold mb-2">Strategic Alignment</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Replace Venezuelan supplies</li>
            <li>• Secure Canadian heavy crude access</li>
            <li>• Reduce transportation costs</li>
            <li>• Political campaign support</li>
          </ul>
        </div>
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-river-current font-bold mb-2">Circumstantial Evidence</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Business interests align with policy</li>
            <li>• Extensive lobbying on oil/gas</li>
            <li>• No smoking gun documents</li>
            <li>• Pattern of political investment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function WhistleblowerCard() {
  return (
    <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
      <h4 className="font-bold text-cream mb-3">Whistleblower Revelations</h4>
      <p className="text-cream/90 mb-4">
        Former Koch environmental technician Sally Barnes-Soliz became a whistleblower
        after discovering the massive benzene violations at Corpus Christi.
      </p>
      <div className="bg-river-depths/30 rounded p-4">
        <h5 className="text-sovereign-gold font-bold mb-2">Barnes-Soliz Discovery</h5>
        <ul className="text-cream/80 text-sm space-y-1">
          <li>• Internal environmental monitoring data</li>
          <li>• 91 vs 0.61 metric tons discrepancy</li>
          <li>• Systematic under-reporting fraud</li>
          <li>• Rolling Stone 2014 investigation support</li>
        </ul>
      </div>
    </div>
  )
}

function CommunityImpactCard() {
  return (
    <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
      <h4 className="font-bold text-cream mb-3">Community Health Impact</h4>
      <p className="text-cream/90 mb-4">
        CDC studies found elevated cancer rates in neighborhoods surrounding Koch's
        "Refinery Row" in Corpus Christi, linked to heavy crude processing emissions.
      </p>
      <div className="bg-river-depths/30 rounded p-4">
        <h5 className="text-river-current font-bold mb-2">Health Findings</h5>
        <ul className="text-cream/80 text-sm space-y-1">
          <li>• Elevated cancer rates documented</li>
          <li>• "Refinery Row" concentration effect</li>
          <li>• Benzene exposure concerns</li>
          <li>• Ongoing community monitoring</li>
        </ul>
      </div>
    </div>
  )
}

function PricingCard({
  crude,
  discount,
  advantage,
  note
}: {
  crude: string
  discount: string
  advantage: string
  note: string
}) {
  return (
    <div className="bg-cream/5 rounded-lg p-4 border border-cream/10">
      <h4 className="text-sovereign-gold font-bold mb-2">{crude}</h4>
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-sovereign-gold font-medium">Discount: </span>
          <span className="text-cream/80">{discount}</span>
        </div>
        <div>
          <span className="text-river-current font-medium">Advantage: </span>
          <span className="text-cream/80">{advantage}</span>
        </div>
        <div className="text-cream/70 text-xs italic">{note}</div>
      </div>
    </div>
  )
}

function MarginCard() {
  return (
    <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
      <h4 className="font-bold text-cream mb-3">Processing Margin Advantages</h4>
      <p className="text-cream/90 mb-4">
        Koch's competitive advantage in heavy crude processing generates significantly
        higher margins compared to light crude refining.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-river-current font-bold mb-2">Margin Enhancement</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• **$5-15/barrel higher** margins</li>
            <li>• Quality differential advantages</li>
            <li>• Specialized processing capabilities</li>
            <li>• Limited competition in heavy crude</li>
          </ul>
        </div>
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-sovereign-gold font-bold mb-2">"Garbage Crudes"</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Industry term for difficult processing</li>
            <li>• High sulfur, heavy characteristics</li>
            <li>• Most refineries cannot handle efficiently</li>
            <li>• Koch's competitive moat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function InvestigativeCard() {
  return (
    <div className="bg-korean-red/10 rounded-lg p-6 border border-korean-red/30">
      <h4 className="font-bold text-cream mb-3">Bloomberg Markets Global Investigation</h4>
      <p className="text-cream/90 mb-4">
        15 journalists worldwide documented Koch subsidiaries making "improper payments"
        in six countries, including Venezuela.
      </p>
      <div className="bg-river-depths/30 rounded p-4">
        <h5 className="text-korean-red font-bold mb-2">Investigative Findings</h5>
        <ul className="text-cream/80 text-sm space-y-1">
          <li>• Six countries involved</li>
          <li>• "Improper payments" documented</li>
          <li>• Venezuela specifically mentioned</li>
          <li>• Iran trade continued after investigations</li>
        </ul>
      </div>
    </div>
  )
}

function ComplianceCard() {
  return (
    <div className="bg-sovereign-gold/10 rounded-lg p-6 border border-sovereign-gold/30">
      <h4 className="font-bold text-cream mb-3">Compliance Officer Revelations</h4>
      <p className="text-cream/90 mb-4">
        Former Koch compliance officer Ludmila Egorova-Farines revealed systematic bribery
        in multiple countries, raising questions about Venezuelan arrangements.
      </p>
      <div className="bg-river-depths/30 rounded p-4">
        <h5 className="text-sovereign-gold font-bold mb-2">Egorova-Farines Evidence</h5>
        <ul className="text-cream/80 text-sm space-y-1">
          <li>• Multiple country bribery systems</li>
          <li>• Sophisticated sanctions navigation</li>
          <li>• Potential Venezuelan applications</li>
          <li>• Pattern suggests capabilities</li>
        </ul>
      </div>
    </div>
  )
}

function TimelineEventCard({
  era,
  events,
  outcome
}: {
  era: string
  events: string[]
  outcome: string
}) {
  return (
    <div className="bg-cream/5 rounded-lg p-6 border border-cream/10">
      <h4 className="text-river-current font-bold mb-3">{era}</h4>
      <div className="space-y-2 mb-4">
        {events.map((event, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-river-current rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-cream/80 text-sm">{event}</p>
          </div>
        ))}
      </div>
      <div className="p-3 bg-river-depths/30 rounded">
        <p className="text-river-current text-xs font-bold mb-1">Outcome:</p>
        <p className="text-cream/70 text-xs">{outcome}</p>
      </div>
    </div>
  )
}

function BusinessModelCard() {
  return (
    <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
      <h4 className="font-bold text-cream mb-3">Refining-Driven Business Model</h4>
      <p className="text-cream/90 mb-4">
        Heavy crude processing drives Koch's fossil fuel profits, supporting
        downstream chemical and polymer operations throughout their empire.
      </p>
      <div className="bg-river-depths/30 rounded p-4">
        <h5 className="text-sovereign-gold font-bold mb-2">Integration Strategy</h5>
        <ul className="text-cream/80 text-sm space-y-1">
          <li>• Refining margins fund downstream operations</li>
          <li>• Chemical and polymer business support</li>
          <li>• Integrated value chain optimization</li>
          <li>• Heavy crude processing remains fundamental</li>
        </ul>
      </div>
    </div>
  )
}

function StrategicCard() {
  return (
    <div className="bg-river-current/20 rounded-lg p-6 border border-river-current/30">
      <h4 className="font-bold text-cream mb-3">Strategic Recognition</h4>
      <p className="text-cream/90 mb-4">
        The 2025 exit from oil trading likely reflects Koch's recognition that
        Venezuelan crude access remains politically impossible for the foreseeable future.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-river-current font-bold mb-2">Current Constraints</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Maximum pressure sanctions</li>
            <li>• Political impossibility</li>
            <li>• Reputational risks</li>
            <li>• Legal compliance requirements</li>
          </ul>
        </div>
        <div className="bg-river-depths/30 rounded p-4">
          <h5 className="text-sovereign-gold font-bold mb-2">Strategic Pivot</h5>
          <ul className="text-cream/80 text-sm space-y-1">
            <li>• Focus on Canadian supplies</li>
            <li>• Accept higher costs</li>
            <li>• Political certainty priority</li>
            <li>• Long-term positioning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
