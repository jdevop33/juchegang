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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Link href="/truth-project" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Truth Project
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The Empire's Receipts
          </h1>
          <p className="text-xl text-white/80 max-w-4xl">
            When actions and words don't match, the receipts tell the real story. Here's what the empire actually does versus what it claims to stand for.
          </p>
        </div>

        {/* Core Principle */}
        <div className="mb-12 bg-gradient-to-r from-red-900/30 via-yellow-900/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">We Are Not What We Say We Are</h2>
            <p className="text-xl text-white/90 mb-4">We Are Only What We Do</p>
            <p className="text-white/80 max-w-3xl mx-auto">
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">The Numbers Don't Lie</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                  <h4 className="font-bold text-white mb-3">What They Say</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• "Promoting democracy worldwide"</li>
                    <li>• "Defending human rights"</li>
                    <li>• "Supporting freedom and self-determination"</li>
                    <li>• "Peaceful resolution of conflicts"</li>
                    <li>• "Rules-based international order"</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                  <h4 className="font-bold text-white mb-3">What They Do</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• <span className="text-red-400 font-bold">251 military interventions</span> since 1991</li>
                    <li>• <span className="text-red-400 font-bold">750+ overseas bases</span> in 80 countries</li>
                    <li>• <span className="text-red-400 font-bold">$895 billion</span> annual defense budget</li>
                    <li>• <span className="text-red-400 font-bold">243,000 troops</span> stationed abroad</li>
                    <li>• Support for 73% of world's dictatorships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-500/20">
                <h4 className="text-lg font-bold text-orange-400 mb-3">The Receipt: Congressional Research Service Data</h4>
                <p className="text-white/90">
                  The US has conducted more military interventions in 31 years (1991-2022) than in the previous 
                  193 years of its existence combined. Yet China - supposedly the "aggressive authoritarian threat" - 
                  has conducted fewer than 10 direct military interventions in the same period.
                </p>
                <div className="mt-4 p-4 bg-black/20 rounded">
                  <p className="text-yellow-400 italic">
                    "Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, 
                    a theft from those who hunger and are not fed, those who are cold and are not clothed."
                  </p>
                  <p className="text-white/60 text-sm mt-2">- Dwight D. Eisenhower, 1953</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Case Studies in Receipt Collection</h3>
              
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">The Development Deception</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30">
                  <h4 className="font-bold text-white mb-3">Western "Aid" Model</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• $212 billion in "development aid"</li>
                    <li>• Requires structural adjustment programs</li>
                    <li>• Privatization of public services</li>
                    <li>• Market liberalization conditions</li>
                    <li>• 6.9% average commercial lending rates</li>
                    <li>• Asset seizures for debt default</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Chinese Infrastructure Model</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• $170 billion in development finance</li>
                    <li>• 3.2% average interest rates</li>
                    <li>• No governance conditionalities</li>
                    <li>• Debt restructuring when needed</li>
                    <li>• 70% of Ethiopia's roads built</li>
                    <li>• No documented asset seizures</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-500/20">
                <blockquote className="text-white/90 italic text-lg">
                  "China is not like the West, which interferes in Ethiopian domestic affairs when they provide aid."
                </blockquote>
                <p className="text-sm text-white/60 mt-2">- Ethiopian Government Officials</p>
                
                <div className="mt-4">
                  <h4 className="text-yellow-400 font-bold mb-2">The Receipt Reality:</h4>
                  <p className="text-white/80">
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Humanitarian Math</h3>
              
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/30 mb-6">
                <h4 className="text-white font-bold mb-4">US "Humanitarian" Interventions Body Count</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-purple-300 font-semibold mb-2">Direct Military Actions</h5>
                    <ul className="space-y-1 text-white/80 text-sm">
                      <li>• Iraq: 1+ million civilian deaths</li>
                      <li>• Afghanistan: 200,000+ total deaths</li>
                      <li>• Libya: 25,000+ deaths, ongoing civil war</li>
                      <li>• Syria: Prolonged conflict, millions displaced</li>
                      <li>• Yemen: US-backed Saudi war, 400,000+ deaths</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-purple-300 font-semibold mb-2">Economic Warfare</h5>
                    <ul className="space-y-1 text-white/80 text-sm">
                      <li>• Iran: Medical supplies blocked, cancer patients die</li>
                      <li>• Venezuela: 40,000+ sanctions-related deaths</li>
                      <li>• Cuba: 60-year embargo, medicine shortages</li>
                      <li>• DPRK: Food aid blocked during famines</li>
                      <li>• Russia: Energy sanctions hit European civilians</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-lg p-6">
                <h4 className="text-purple-400 font-bold mb-3">The Sanctions Receipt</h4>
                <p className="text-white/90 mb-4">
                  Sanctions programs now affect one-third of the global population. The UN calls them "collective punishment" 
                  that violates human rights, yet they're presented as "peaceful alternatives to war."
                </p>
                
                <div className="bg-red-900/20 rounded p-4 border border-red-500/30">
                  <blockquote className="text-red-300 italic">
                    "Make the economy scream"
                  </blockquote>
                  <p className="text-white/60 text-sm mt-2">- President Nixon's 1970 directive on Chile</p>
                  <p className="text-white/80 text-sm mt-2">
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">The Selective Justice System</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">What They Demand of Others</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Respect for international law</li>
                    <li>• ICC cooperation and compliance</li>
                    <li>• UN Security Council resolutions</li>
                    <li>• Human rights treaty adherence</li>
                    <li>• Non-proliferation agreements</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                  <h4 className="font-bold text-white mb-3">What They Actually Do</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Withdrew from ICC jurisdiction</li>
                    <li>• Ignored 1986 ICJ ruling on Nicaragua</li>
                    <li>• 82 UN vetoes (mostly protecting Israel)</li>
                    <li>• Haven't ratified Children's Rights Convention</li>
                    <li>• Only nuclear power to use weapons in war</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/20">
                <h4 className="text-blue-400 font-bold mb-3">The Receipt: American Service-Members' Protection Act</h4>
                <p className="text-white/90 mb-3">
                  Also known as the "Hague Invasion Act," this 2002 law authorizes the US President to use "all means necessary" 
                  to free any American detained by the International Criminal Court. The same court they demand other countries respect.
                </p>
                <blockquote className="text-blue-300 italic">
                  "International law serves to maintain power hierarchies established during the colonial period"
                </blockquote>
                <p className="text-white/60 text-sm mt-2">- Third World Legal Scholarship</p>
              </div>
            </div>
          </div>
        </Section>

        {/* The Pattern Recognition */}
        <div className="mt-12 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-green-900/20 rounded-xl p-8 border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Pattern Recognition: The Receipts Always Tell the Same Story</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">The Narrative</h3>
              <p className="text-white/80 text-sm">
                Beautiful words about freedom, democracy, human rights, and peaceful cooperation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💀</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">The Actions</h3>
              <p className="text-white/80 text-sm">
                Violence, extraction, domination, and the systematic enrichment of elites
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">The Receipts</h3>
              <p className="text-white/80 text-sm">
                Congressional reports, declassified documents, budget allocations, body counts
              </p>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">The Universal Truth</h3>
            <p className="text-lg text-white/90 text-center max-w-4xl mx-auto">
              Whether it's a toxic relationship, a corrupt politician, or a global empire - 
              the pattern is identical. <span className="text-yellow-400 font-bold">Words manipulate. Actions reveal.</span> 
              The receipts never lie. Once you see this pattern, you can't unsee it.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project/power-dynamics" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
            Read Power Analysis
          </Link>
          <Link href="/truth-project" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            More Investigations
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20">
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
    red: "border-red-500/30 bg-red-900/10",
    blue: "border-blue-500/30 bg-blue-900/10",
    purple: "border-purple-500/30 bg-purple-900/10",
    green: "border-green-500/30 bg-green-900/10",
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
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h5 className="font-bold text-white mb-2">{country}</h5>
          <p className="text-green-400 text-sm font-medium mb-1">The Claim:</p>
          <p className="text-white/80 text-sm">{claim}</p>
        </div>
        <div>
          <p className="text-red-400 text-sm font-medium mb-1">The Reality:</p>
          <p className="text-white/80 text-sm">{reality}</p>
        </div>
        <div>
          <p className="text-yellow-400 text-sm font-medium mb-1">The Receipt:</p>
          <p className="text-white/60 text-xs">{source}</p>
        </div>
      </div>
    </div>
  )
}