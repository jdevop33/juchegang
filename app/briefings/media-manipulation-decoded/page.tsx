"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, Brain, Zap, Users, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function MediaManipulationPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("algorithms")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1b2a] via-[#1b4965]/20 to-[#0d1b2a]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/briefings" className="inline-flex items-center gap-2 text-[#f0ebe3]/70 hover:text-[#f0ebe3] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Briefings
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f0ebe3] mb-4">
            Media Manipulation Decoded
          </h1>
          <p className="text-xl text-[#f0ebe3]/80 max-w-4xl">
            How six corporations control 90% of what you see, think, and believe. The psychological weapons of mass distraction exposed.
          </p>
        </div>

        {/* Concentration Alert */}
        <div className="mb-12 bg-gradient-to-r from-[#d4a74a]/30 via-[#c73032]/30 to-[#d4a74a]/30 rounded-2xl p-8 border border-[#d4a74a]/20">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-[#d4a74a] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-[#d4a74a] mb-3">The Concentration Crisis</h2>
              <p className="text-[#f0ebe3]/90 mb-4">
                In 1983, 50 companies controlled American media. Today, just **6 corporations** control 90% of everything you see, hear, and read.
                This isn't accidental - it's the architecture of manufactured consent.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#0d1b2a]/30 rounded p-4">
                  <h3 className="text-[#d4a74a] font-bold mb-2">The Big Six</h3>
                  <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                    <li>• Comcast (NBC, MSNBC, Universal)</li>
                    <li>• Disney (ABC, ESPN, Marvel)</li>
                    <li>• Warner Bros Discovery (CNN, HBO)</li>
                    <li>• Paramount (CBS, MTV, Showtime)</li>
                    <li>• Fox Corporation (Fox News, Fox Sports)</li>
                    <li>• Sony (Columbia Pictures, Music)</li>
                  </ul>
                </div>
                <div className="bg-[#0d1b2a]/30 rounded p-4">
                  <h3 className="text-[#c73032] font-bold mb-2">What They Control</h3>
                  <ul className="text-[#f0ebe3]/80 text-sm space-y-1">
                    <li>• 90% of TV programming</li>
                    <li>• 90% of radio stations</li>
                    <li>• 80% of movie theaters</li>
                    <li>• 70% of newspapers</li>
                    <li>• Major streaming platforms</li>
                    <li>• Social media algorithms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Algorithm Autopsy */}
        <Section
          id="algorithms"
          title="Algorithm Autopsy: The Engagement Trap"
          icon={Brain}
          expanded={expandedSection === "algorithms"}
          onToggle={() => toggleSection("algorithms")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#c73032] mb-4">Facebook's Internal Research: Division by Design</h3>

              <div className="bg-[#c73032]/20 rounded-lg p-6 border border-[#c73032]/30 mb-6">
                <h4 className="font-bold text-[#f0ebe3] mb-3">The Frances Haugen Revelations</h4>
                <p className="text-[#f0ebe3]/90 mb-4">
                  Facebook's own research confirmed their algorithms weighted "angry" reactions 5x more than "likes"
                  because divisive content generates more engagement and profit. Internal documents showed executives knew:
                </p>
                <ul className="space-y-2 text-[#f0ebe3]/80">
                  <li>• Anger and outrage drive 6x more engagement than positive content</li>
                  <li>• Political polarization increased 70% after algorithm changes</li>
                  <li>• Misinformation spreads 6x faster than factual information</li>
                  <li>• Mental health declined among teen users by 13.5%</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#d4a74a]/20 rounded-lg p-4 border border-[#d4a74a]/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">The Engagement Formula</h4>
                  <div className="space-y-3 text-[#f0ebe3]/80 text-sm">
                    <div>
                      <span className="text-[#d4a74a] font-bold">Fear</span> = 3x engagement boost
                    </div>
                    <div>
                      <span className="text-[#c73032] font-bold">Anger</span> = 5x engagement boost
                    </div>
                    <div>
                      <span className="text-[#1b4965] font-bold">Outrage</span> = 7x engagement boost
                    </div>
                    <div>
                      <span className="text-[#d4a74a] font-bold">Division</span> = 10x engagement boost
                    </div>
                  </div>
                  <p className="text-[#f0ebe3]/70 text-xs mt-3">
                    *Internal Facebook metrics leaked by whistleblowers
                  </p>
                </div>

                <div className="bg-river-current/15 rounded-lg p-4 border border-river-mid/30">
                  <h4 className="font-bold text-[#f0ebe3] mb-3">The Addiction Mechanics</h4>
                  <ul className="space-y-2 text-[#f0ebe3]/80 text-sm">
                    <li>• Variable reward schedules (like slot machines)</li>
                    <li>• Social approval feedback loops</li>
                    <li>• Fear of missing out (FOMO) triggers</li>
                    <li>• Infinite scroll = dopamine drip</li>
                    <li>• Notification intermittent reinforcement</li>
                  </ul>
                  <blockquote className="text-river-mid italic text-xs mt-3">
                    "If you're not paying for the product, you ARE the product"
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1b2a]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#c73032] mb-4">Algorithm Manipulation in Action</h3>

              <div className="space-y-4">
                <AlgorithmCase
                  platform="YouTube"
                  manipulation="Rabbit Hole Effect"
                  description="Algorithm progressively recommends more extreme content to maintain engagement"
                  example="Start with fitness videos → supplement ads → conspiracy theories → extremist content"
                  evidence="Wall Street Journal investigation, 2019"
                />

                <AlgorithmCase
                  platform="Twitter/X"
                  manipulation="Trending Topic Manipulation"
                  description="Amplifies divisive hashtags while suppressing unity messages"
                  example="#BlackLivesMatter vs #AllLivesMatter artificially boosted to create conflict"
                  evidence="Twitter Files releases, 2022"
                />

                <AlgorithmCase
                  platform="TikTok"
                  manipulation="Attention Fragmentation"
                  description="15-second videos destroy sustained attention and critical thinking"
                  example="Complex geopolitical issues reduced to dance trends and quick takes"
                  evidence="Academic studies on attention span decline"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Manufacturing Consent 2.0 */}
        <Section
          id="consent"
          title="Manufacturing Consent 2.0: The Five Filters Updated"
          icon={Eye}
          expanded={expandedSection === "consent"}
          onToggle={() => toggleSection("consent")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1b4965] mb-4">Chomsky's Model Goes Digital</h3>

              <div className="space-y-6">
                <FilterCard
                  number={1}
                  title="Corporate Ownership"
                  original="Media owned by wealthy individuals/corporations with business interests"
                  updated="Tech platforms owned by billionaires with government contracts (Bezos/CIA, Musk/Defense Dept)"
                  example="Washington Post (Bezos) soft-pedals Amazon's worker abuse stories"
                />

                <FilterCard
                  number={2}
                  title="Advertising Dependence"
                  original="Media dependent on advertiser revenue, avoiding content that hurts sponsors"
                  updated="Social media revenue from engagement-driven ads, suppressing content that promotes peace/unity"
                  example="YouTube demonetizes anti-war content while promoting military recruitment ads"
                />

                <FilterCard
                  number={3}
                  title="Official Sources"
                  original="Journalists rely on government/corporate sources for 'credible' information"
                  updated="Algorithms prioritize 'authoritative' sources (CNN, Fox, NYT) over independent journalists"
                  example="Google News algorithm buries independent reporting on US foreign policy"
                />

                <FilterCard
                  number={4}
                  title="Organized Flak"
                  original="Powerful groups pressure media through lawsuits, boycotts, complaints"
                  updated="Coordinated 'fact-checking' and 'misinformation' labels to suppress dissent"
                  example="Facebook 'fact-checkers' funded by same foundations that fund think tanks"
                />

                <FilterCard
                  number={5}
                  title="Fear-Based Ideology"
                  original="Anti-communist ideology during Cold War"
                  updated="'Fighting misinformation' and 'protecting democracy' to justify censorship"
                  example="Anyone questioning US foreign policy labeled 'Russian asset' or 'Chinese bot'"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Coordinated Messaging */}
        <Section
          id="coordination"
          title="Coordinated Messaging: When 'Independent' Media Says the Same Thing"
          icon={Users}
          expanded={expandedSection === "coordination"}
          onToggle={() => toggleSection("coordination")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#d4a74a] mb-4">The Synchronicity That Isn't Coincidence</h3>

              <div className="bg-[#d4a74a]/20 rounded-lg p-6 border border-[#d4a74a]/30 mb-6">
                <h4 className="font-bold text-[#f0ebe3] mb-3">Operation Mockingbird Never Ended</h4>
                <p className="text-[#f0ebe3]/90 mb-4">
                  The CIA's 1950s program to infiltrate media continues today through different mechanisms.
                  Rather than directly paying journalists, the system now operates through:
                </p>
                <ul className="space-y-2 text-[#f0ebe3]/80">
                  <li>• Think tank 'experts' funded by defense contractors</li>
                  <li>• Former intelligence officials as news contributors</li>
                  <li>• Government press releases copied verbatim as 'news'</li>
                  <li>• Coordinated messaging through morning show talking points</li>
                </ul>
              </div>

              <div className="space-y-4">
                <CoordinatedCase
                  event="Iraq WMDs (2002-2003)"
                  outlets="CNN, Fox, MSNBC, NYT, Washington Post"
                  message="Saddam has weapons of mass destruction and poses imminent threat"
                  reality="No WMDs found. All major outlets repeated government claims without verification"
                  result="1+ million Iraqi deaths, regional destabilization"
                />

                <CoordinatedCase
                  event="Russian Collusion (2016-2019)"
                  outlets="CNN, MSNBC, NYT, Washington Post, NBC"
                  message="Trump is a Russian asset, Putin puppet, collusion confirmed"
                  reality="Mueller Report found no coordination between Trump campaign and Russia"
                  result="3 years of division, credibility damage to independent media"
                />

                <CoordinatedCase
                  event="Hunter Biden Laptop (2020)"
                  outlets="Twitter, Facebook, CNN, NBC, Washington Post"
                  message="Russian disinformation, hacked materials, election interference"
                  reality="Laptop contents authenticated by multiple sources including FBI"
                  result="Election narrative control, suppression of legitimate news story"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Breaking Free */}
        <Section
          id="liberation"
          title="Breaking Free: The Deprogram Protocol"
          icon={Zap}
          expanded={expandedSection === "liberation"}
          onToggle={() => toggleSection("liberation")}
          color="green"
        >
          <div className="space-y-6">
            <div className="bg-[#0d1b2a]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-mid mb-4">Your Liberation Toolkit</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-river-mid font-bold mb-3">Immediate Actions</h4>
                  <div className="space-y-3">
                    <TechniqueCard
                      title="Algorithm Audit"
                      description="Check what your feeds are showing you. Delete apps for 24 hours, notice withdrawal symptoms."
                    />
                    <TechniqueCard
                      title="Source Diversification"
                      description="Read the same story from 5 different countries. Notice how framing changes the meaning."
                    />
                    <TechniqueCard
                      title="Emotional Recognition"
                      description="When you feel angry at content, pause. Ask: 'Who benefits from my anger?'"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#1b4965] font-bold mb-3">Advanced Techniques</h4>
                  <div className="space-y-3">
                    <TechniqueCard
                      title="Follow the Money"
                      description="Research who funds the outlet, who owns it, what their business interests are."
                    />
                    <TechniqueCard
                      title="Pattern Recognition"
                      description="Notice when multiple outlets use identical phrases. That's coordinated messaging."
                    />
                    <TechniqueCard
                      title="Historical Context"
                      description="Every 'new' crisis follows old patterns. Study how media covered past events."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-river-current/15 to-[#1b4965]/20 rounded-lg border border-river-mid/20">
                <h4 className="text-river-mid font-bold mb-3">The Ultimate Filter</h4>
                <p className="text-[#f0ebe3]/90 text-lg">
                  <span className="text-[#d4a74a] font-bold">Actions reveal truth. Narratives create illusions.</span>
                </p>
                <p className="text-[#f0ebe3]/80 mt-2">
                  Don't listen to what they say. Watch what they do. Follow the money. Count the bodies.
                  Check the receipts. The pattern never lies.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#1b4965]/20 via-[#1b4965]/20 to-[#1b4965]/20 rounded-xl p-8 border border-[#1b4965]/30">
          <h2 className="text-3xl font-bold text-[#f0ebe3] mb-6 text-center">The Choice Is Yours</h2>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-[#f0ebe3]/90 mb-6">
              Every moment you spend consuming manufactured outrage is a moment stolen from building genuine connections.
              Every click on divisive content funds the system that profits from your separation.
            </p>

            <p className="text-xl text-[#f0ebe3] font-medium mb-8">
              The most revolutionary act in a system built on division is to <span className="text-river-mid">unite</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/truth-project/empires-receipts" className="px-6 py-3 bg-[#c73032] hover:bg-[#c73032]/80 text-[#f0ebe3] font-medium rounded-lg transition-colors">
                Read The Receipts
              </Link>
              <Link href="/briefings" className="px-6 py-3 bg-[#1b4965] hover:bg-[#1b4965]/80 text-[#f0ebe3] font-medium rounded-lg transition-colors">
                More Briefings
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-[#f0ebe3]/10 hover:bg-[#f0ebe3]/20 text-[#f0ebe3] font-medium rounded-lg transition-colors border border-[#f0ebe3]/20">
                Share Your Story
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
    red: "border-[#c73032]/30 bg-[#c73032]/10",
    blue: "border-[#1b4965]/30 bg-[#1b4965]/10",
    purple: "border-[#1b4965]/30 bg-[#1b4965]/10",
    green: "border-river-mid/30 bg-river-current/10",
    yellow: "border-[#d4a74a]/30 bg-[#d4a74a]/10"
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color as keyof typeof colorClasses]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f0ebe3]/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 text-${color}-400`} />
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

function FilterCard({
  number,
  title,
  original,
  updated,
  example
}: {
  number: number
  title: string
  original: string
  updated: string
  example: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-[#1b4965] rounded-full flex items-center justify-center text-[#f0ebe3] font-bold text-sm flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="text-[#1b4965] font-bold mb-2">{title}</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-[#f0ebe3]/60 text-xs mb-1">1980s Original:</p>
              <p className="text-[#f0ebe3]/80 text-sm mb-3">{original}</p>
            </div>
            <div>
              <p className="text-[#1b4965] text-xs mb-1">2024 Updated:</p>
              <p className="text-[#f0ebe3]/80 text-sm mb-3">{updated}</p>
            </div>
          </div>
          <div className="mt-2 p-3 bg-[#0d1b2a]/20 rounded">
            <p className="text-[#d4a74a] text-xs font-medium mb-1">Example:</p>
            <p className="text-[#f0ebe3]/70 text-xs">{example}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AlgorithmCase({
  platform,
  manipulation,
  description,
  example,
  evidence
}: {
  platform: string
  manipulation: string
  description: string
  example: string
  evidence: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <div className="grid md:grid-cols-4 gap-3">
        <div>
          <h5 className="font-bold text-[#c73032] mb-1">{platform}</h5>
          <p className="text-[#f0ebe3]/60 text-xs">{manipulation}</p>
        </div>
        <div>
          <p className="text-[#f0ebe3]/80 text-sm">{description}</p>
        </div>
        <div>
          <p className="text-[#d4a74a] text-xs font-medium mb-1">Example:</p>
          <p className="text-[#f0ebe3]/70 text-xs">{example}</p>
        </div>
        <div>
          <p className="text-river-mid text-xs font-medium mb-1">Evidence:</p>
          <p className="text-[#f0ebe3]/60 text-xs">{evidence}</p>
        </div>
      </div>
    </div>
  )
}

function CoordinatedCase({
  event,
  outlets,
  message,
  reality,
  result
}: {
  event: string
  outlets: string
  message: string
  reality: string
  result: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded-lg p-4 border border-[#f0ebe3]/10">
      <h5 className="font-bold text-[#d4a74a] mb-3">{event}</h5>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#d4a74a] text-xs font-medium mb-1">Outlets:</p>
          <p className="text-[#f0ebe3]/70 text-sm mb-3">{outlets}</p>
          <p className="text-river-mid text-xs font-medium mb-1">Coordinated Message:</p>
          <p className="text-[#f0ebe3]/80 text-sm">{message}</p>
        </div>
        <div>
          <p className="text-[#c73032] text-xs font-medium mb-1">Reality:</p>
          <p className="text-[#f0ebe3]/80 text-sm mb-3">{reality}</p>
          <p className="text-[#1b4965] text-xs font-medium mb-1">Result:</p>
          <p className="text-[#f0ebe3]/70 text-sm">{result}</p>
        </div>
      </div>
    </div>
  )
}

function TechniqueCard({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-[#f0ebe3]/5 rounded p-3 border border-[#f0ebe3]/10">
      <h5 className="text-[#f0ebe3] font-medium text-sm mb-2">{title}</h5>
      <p className="text-[#f0ebe3]/70 text-xs">{description}</p>
    </div>
  )
}
