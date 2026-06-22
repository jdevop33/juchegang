"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, Target, Users, Globe, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function EmpiresReceiptsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("democracy")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-[100dvh] bg-river-depths">
      <div className="container mx-auto px-4 py-8">
        <Link href="/truth-project" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Truth Project
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4">
            The Empire's Receipts
          </h1>
          <p className="text-xl text-cream/80 max-w-4xl">
            When actions and words don't match, the receipts tell the real story. Here's what the empire actually does versus what it claims to stand for.
          </p>
        </div>

        {/* Core Principle */}
        <div className="mb-12 bg-river-current/30 rounded-2xl p-8 border border-korean-red/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cream mb-4">We Are Not What We Say We Are</h2>
            <p className="text-xl text-sovereign-gold mb-4">We Are Only What We Do</p>
            <p className="text-cream/80 max-w-3xl mx-auto">
              Actions reveal truth. Narratives create illusions. This fundamental principle cuts through manipulation 
              at every level - from personal relationships to global geopolitics. The receipts don't lie.
            </p>
          </div>
        </div>

        {/* Democracy Promotion vs Military Interventions */}
        <Section
          id="democracy"
          title="Democracy Promotion: The Ultimate Receipt Gap"
          icon={Target}
          expanded={expandedSection === "democracy"}
          onToggle={() => toggleSection("democracy")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-korean-red mb-4">The Numbers Don't Lie</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-korean-red/10 rounded-lg p-6 border border-korean-red/30">
                  <h4 className="font-bold text-cream mb-3">What They Say</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• "Promoting democracy worldwide"</li>
                    <li>• "Defending human rights"</li>
                    <li>• "Supporting freedom and self-determination"</li>
                    <li>• "Peaceful resolution of conflicts"</li>
                    <li>• "Rules-based international order"</li>
                  </ul>
                </div>
                <div className="bg-river-depths/50 rounded-lg p-6 border border-river-current">
                  <h4 className="font-bold text-cream mb-3">What They Do</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• <span className="text-korean-red font-bold">251 military interventions</span> since 1991</li>
                    <li>• <span className="text-korean-red font-bold">750+ overseas bases</span> in 80 countries</li>
                    <li>• <span className="text-korean-red font-bold">$895 billion</span> annual defense budget</li>
                    <li>• <span className="text-korean-red font-bold">243,000 troops</span> stationed abroad</li>
                    <li>• Support for 73% of world's dictatorships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-river-current/20 rounded-lg p-6 border border-korean-red/20">
                <h4 className="text-lg font-bold text-sovereign-gold mb-3">The Receipt: Congressional Research Service Data</h4>
                <p className="text-cream/90">
                  The US has conducted more military interventions in 31 years (1991-2022) than in the previous 
                  193 years of its existence combined. Yet China - supposedly the "aggressive authoritarian threat" - 
                  has conducted fewer than 10 direct military interventions in the same period.
                </p>
                <div className="mt-4 p-4 bg-river-depths/50 rounded">
                  <p className="text-sovereign-gold italic">
                    "Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
                    a theft from those who hunger and are not fed, those who are cold and are not clothed."
                  </p>
                  <p className="text-cream/60 text-sm mt-2">- Dwight D. Eisenhower, 1953</p>
                </div>
              </div>
            </div>

            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-korean-red mb-4">Case Studies in Receipt Collection</h3>
              
              <div className="space-y-4">
                <ReceiptCard
                  country="Iraq"
                  claim="WMDs and imminent threat"
                  reality="No WMDs found. 1+ million Iraqi civilians dead. Country destabilized."
                  source="Iraq WMD Commission Report, Lancet mortality studies"
                />
                
                <ReceiptCard
                  country="Libya"
                  claim="Humanitarian intervention to protect civilians"
                  reality="Gaddafi killed, country collapsed into civil war, slave markets returned"
                  source="UK Parliamentary Report on Libya Intervention"
                />
                
                <ReceiptCard
                  country="Syria"
                  claim="Supporting moderate rebels against Assad"
                  reality="Weapons ended up with ISIS and Al-Qaeda affiliates"
                  source="Pentagon Inspector General reports, CIA acknowledgments"
                />
                
                <ReceiptCard
                  country="Afghanistan"
                  claim="Building democracy and women's rights"
                  reality="20 years, $2.3 trillion, Taliban back in power"
                  source="Special Inspector General for Afghanistan Reconstruction"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Economic Development vs Wealth Extraction */}
        <Section
          id="economics"
          title="Economic Development: Following the Money Trail"
          icon={Globe}
          expanded={expandedSection === "economics"}
          onToggle={() => toggleSection("economics")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-sovereign-gold mb-4">The Development Deception</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sovereign-gold/10 rounded-lg p-4 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Western "Aid" Model</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• $212 billion in "development aid"</li>
                    <li>• Requires structural adjustment programs</li>
                    <li>• Privatization of public services</li>
                    <li>• Market liberalization conditions</li>
                    <li>• 6.9% average commercial lending rates</li>
                    <li>• Asset seizures for debt default</li>
                  </ul>
                </div>
                
                <div className="bg-river-current/20 rounded-lg p-4 border border-river-current">
                  <h4 className="font-bold text-cream mb-3">Chinese Infrastructure Model</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• $170 billion in development finance</li>
                    <li>• 3.2% average interest rates</li>
                    <li>• No governance conditionalities</li>
                    <li>• Debt restructuring when needed</li>
                    <li>• 70% of Ethiopia's roads built</li>
                    <li>• No documented asset seizures</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-river-current/20 rounded-lg border border-sovereign-gold/20">
                <blockquote className="text-cream/90 italic text-lg">
                  "China is not like the West, which interferes in Ethiopian domestic affairs when they provide aid."
                </blockquote>
                <p className="text-sm text-cream/60 mt-2">- Ethiopian Government Officials</p>

                <div className="mt-4">
                  <h4 className="text-sovereign-gold font-bold mb-2">The Receipt Reality:</h4>
                  <p className="text-cream/80">
                    Western banks hold 35% of Africa's external debt at double the interest rates of Chinese loans, 
                    yet China gets blamed for "debt trap diplomacy." Meanwhile, Ethiopia receives only $13 per capita 
                    in Western aid annually - among the world's lowest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Human Rights vs Body Count */}
        <Section
          id="humanrights"
          title="Human Rights: The Body Count Chronicles"
          icon={Users}
          expanded={expandedSection === "humanrights"}
          onToggle={() => toggleSection("humanrights")}
          color="purple"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-korean-red mb-4">Humanitarian Math</h3>

              <div className="bg-korean-red/10 rounded-lg p-6 border border-korean-red/30 mb-6">
                <h4 className="text-cream font-bold mb-4">US "Humanitarian" Interventions Body Count</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-korean-red/80 font-semibold mb-2">Direct Military Actions</h5>
                    <ul className="space-y-1 text-cream/80 text-sm">
                      <li>• Iraq: 1+ million civilian deaths</li>
                      <li>• Afghanistan: 200,000+ total deaths</li>
                      <li>• Libya: 25,000+ deaths, ongoing civil war</li>
                      <li>• Syria: Prolonged conflict, millions displaced</li>
                      <li>• Yemen: US-backed Saudi war, 400,000+ deaths</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-korean-red/80 font-semibold mb-2">Economic Warfare</h5>
                    <ul className="space-y-1 text-cream/80 text-sm">
                      <li>• Iran: Medical supplies blocked, cancer patients die</li>
                      <li>• Venezuela: 40,000+ sanctions-related deaths</li>
                      <li>• Cuba: 60-year embargo, medicine shortages</li>
                      <li>• DPRK: Food aid blocked during famines</li>
                      <li>• Russia: Energy sanctions hit European civilians</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-river-depths/30 rounded-lg p-6">
                <h4 className="text-sovereign-gold font-bold mb-3">The Sanctions Receipt</h4>
                <p className="text-cream/90 mb-4">
                  Sanctions programs now affect one-third of the global population. The UN calls them "collective punishment"
                  that violates human rights, yet they're presented as "peaceful alternatives to war."
                </p>

                <div className="bg-korean-red/10 rounded p-4 border border-korean-red/30">
                  <blockquote className="text-korean-red italic">
                    "Make the economy scream"
                  </blockquote>
                  <p className="text-cream/60 text-sm mt-2">- President Nixon's 1970 directive on Chile</p>
                  <p className="text-cream/80 text-sm mt-2">
                    This became the template: Use economic warfare to cause civilian suffering, 
                    then blame the target government for the resulting hardship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* International Law vs Selective Enforcement */}
        <Section
          id="law"
          title="Rules-Based Order: Rules for Thee, Not for Me"
          icon={FileText}
          expanded={expandedSection === "law"}
          onToggle={() => toggleSection("law")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-current mb-4">The Selective Justice System</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-river-current/20 rounded-lg p-4 border border-river-current">
                  <h4 className="font-bold text-cream mb-3">What They Demand of Others</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• Respect for international law</li>
                    <li>• ICC cooperation and compliance</li>
                    <li>• UN Security Council resolutions</li>
                    <li>• Human rights treaty adherence</li>
                    <li>• Non-proliferation agreements</li>
                  </ul>
                </div>
                <div className="bg-korean-red/10 rounded-lg p-4 border border-korean-red/30">
                  <h4 className="font-bold text-cream mb-3">What They Actually Do</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• Withdrew from ICC jurisdiction</li>
                    <li>• Ignored 1986 ICJ ruling on Nicaragua</li>
                    <li>• 82 UN vetoes (mostly protecting Israel)</li>
                    <li>• Haven't ratified Children's Rights Convention</li>
                    <li>• Only nuclear power to use weapons in war</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-river-current/20 rounded-lg p-6 border border-river-current">
                <h4 className="text-sovereign-gold font-bold mb-3">The Receipt: American Service-Members' Protection Act</h4>
                <p className="text-cream/90 mb-3">
                  Also known as the "Hague Invasion Act," this 2002 law authorizes the US President to use "all means necessary"
                  to free any American detained by the International Criminal Court. The same court they demand other countries respect.
                </p>
                <blockquote className="text-river-current italic">
                  "International law serves to maintain power hierarchies established during the colonial period"
                </blockquote>
                <p className="text-cream/60 text-sm mt-2">- Third World Legal Scholarship</p>
              </div>
            </div>
          </div>
        </Section>

        {/* The Pattern Recognition */}
        <div className="mt-12 bg-river-current/20 rounded-xl p-8 border border-river-current">
          <h2 className="text-3xl font-bold text-cream mb-6 text-center">Pattern Recognition: The Receipts Always Tell the Same Story</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-river-current mb-2">The Narrative</h3>
              <p className="text-cream/80 text-sm">
                Beautiful words about freedom, democracy, human rights, and peaceful cooperation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💀</div>
              <h3 className="text-xl font-bold text-korean-red mb-2">The Actions</h3>
              <p className="text-cream/80 text-sm">
                Violence, extraction, domination, and the systematic enrichment of elites
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-sovereign-gold mb-2">The Receipts</h3>
              <p className="text-cream/80 text-sm">
                Congressional reports, declassified documents, budget allocations, body counts
              </p>
            </div>
          </div>

          <div className="bg-river-depths/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cream mb-4 text-center">The Universal Truth</h3>
            <p className="text-lg text-cream/90 text-center max-w-4xl mx-auto">
              Whether it's a toxic relationship, a corrupt politician, or a global empire -
              the pattern is identical. <span className="text-sovereign-gold font-bold">Words manipulate. Actions reveal.</span>
              The receipts never lie. Once you see this pattern, you can't unsee it.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project/power-dynamics" className="px-6 py-3 bg-korean-red hover:bg-korean-red/80 text-cream font-medium rounded-lg transition-colors">
            Read Power Analysis
          </Link>
          <Link href="/truth-project" className="px-6 py-3 bg-river-current hover:bg-river-current/80 text-cream font-medium rounded-lg transition-colors">
            More Investigations
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-cream/10 hover:bg-cream/20 text-cream font-medium rounded-lg transition-colors border border-cream/20">
            Share Your Receipts
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
    red: "border-korean-red/30 bg-korean-red/10",
    blue: "border-river-current bg-river-current/20",
    purple: "border-korean-red/30 bg-korean-red/10",
    green: "border-river-current bg-river-current/20",
    yellow: "border-sovereign-gold/30 bg-sovereign-gold/10"
  }

  const iconColors = {
    red: "text-korean-red",
    blue: "text-river-current",
    purple: "text-korean-red",
    green: "text-river-current",
    yellow: "text-sovereign-gold"
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

function ReceiptCard({
  country,
  claim,
  reality,
  source
}: {
  country: string
  claim: string
  reality: string
  source: string
}) {
  return (
    <div className="bg-cream/5 rounded-lg p-4 border border-river-current/30">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h5 className="font-bold text-cream mb-2">{country}</h5>
          <p className="text-river-current text-sm font-medium mb-1">The Claim:</p>
          <p className="text-cream/80 text-sm">{claim}</p>
        </div>
        <div>
          <p className="text-korean-red text-sm font-medium mb-1">The Reality:</p>
          <p className="text-cream/80 text-sm">{reality}</p>
        </div>
        <div>
          <p className="text-sovereign-gold text-sm font-medium mb-1">The Receipt:</p>
          <p className="text-cream/60 text-xs">{source}</p>
        </div>
      </div>
    </div>
  )
}