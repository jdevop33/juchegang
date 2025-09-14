"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Zap, Users, Shield, Eye, Heart, Brain, ChevronDown, ChevronUp, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LiberationFrameworksPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("deprogram")
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const toggleStep = (stepId: string) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId)
    } else {
      newCompleted.add(stepId)
    }
    setCompletedSteps(newCompleted)
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
            Liberation Frameworks
          </h1>
          <p className="text-xl text-white/80 max-w-4xl">
            Practical tools for breaking free from manipulation and building genuine human connection. Your step-by-step guide to liberation.
          </p>
        </div>

        {/* Liberation Promise */}
        <div className="mb-12 bg-gradient-to-r from-green-900/30 via-blue-900/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
          <div className="text-center">
            <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Most Revolutionary Act</h2>
            <p className="text-xl text-white/90 mb-4">
              In a system built on division, unity is revolution
            </p>
            <p className="text-white/80 max-w-3xl mx-auto">
              Every framework here is designed for one purpose: helping you recognize manipulation, build authentic relationships, 
              and create the cooperative future humanity deserves. This isn't theory - it's liberation technology.
            </p>
          </div>
        </div>

        {/* The Deprogram Protocol */}
        <Section
          id="deprogram"
          title="The Deprogram Protocol: Breaking Mental Chains"
          icon={Brain}
          expanded={expandedSection === "deprogram"}
          onToggle={() => toggleSection("deprogram")}
          color="red"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Step-by-Step Deconditioning</h3>
              
              <div className="space-y-4">
                <ProtocolStep
                  id="step1"
                  number={1}
                  title="The Digital Detox"
                  description="Break the addiction to manufactured outrage"
                  completed={completedSteps.has("step1")}
                  onToggle={() => toggleStep("step1")}
                  actions={[
                    "Delete social media apps for 48 hours",
                    "Notice withdrawal symptoms - anxiety, FOMO, restlessness",
                    "When you reinstall, pay attention to what the algorithm shows you",
                    "Ask: 'Who profits from my emotional reaction to this content?'"
                  ]}
                />
                
                <ProtocolStep
                  id="step2"
                  number={2}
                  title="Source Diversification"
                  description="Break out of echo chambers and information bubbles"
                  completed={completedSteps.has("step2")}
                  onToggle={() => toggleStep("step2")}
                  actions={[
                    "Read the same story from 3 different countries' media",
                    "Notice how framing changes the entire meaning",
                    "Follow journalists from Global South perspectives",
                    "Use VPN to see what content is geoblocked in your region"
                  ]}
                />
                
                <ProtocolStep
                  id="step3"
                  number={3}
                  title="Emotional Recognition Training"
                  description="Learn to recognize when your emotions are being manipulated"
                  completed={completedSteps.has("step3")}
                  onToggle={() => toggleStep("step3")}
                  actions={[
                    "Before sharing angry content, pause and breathe",
                    "Ask: 'What action is this emotion supposed to trigger?'",
                    "Notice fear-based language: 'threat,' 'dangerous,' 'urgent'",
                    "Track your emotional responses for a week - what patterns emerge?"
                  ]}
                />
                
                <ProtocolStep
                  id="step4"
                  number={4}
                  title="Follow the Money"
                  description="Understanding who profits from division and conflict"
                  completed={completedSteps.has("step4")}
                  onToggle={() => toggleStep("step4")}
                  actions={[
                    "Research who owns the media outlets you consume",
                    "Check their business interests and government contracts",
                    "Notice which stories get amplified vs buried",
                    "Ask: 'Who benefits if I believe this narrative?'"
                  ]}
                />
              </div>
            </div>

            <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-red-400 font-bold mb-3">Advanced Deprogram Techniques</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-medium mb-2">Pattern Recognition</h5>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Notice when multiple outlets use identical phrases</li>
                    <li>• Track how "crises" conveniently distract from other news</li>
                    <li>• Observe which voices get platformed vs silenced</li>
                    <li>• Study historical propaganda to recognize current patterns</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Historical Context</h5>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Every "new" crisis follows old playbooks</li>
                    <li>• Study how past manufactured conflicts started</li>
                    <li>• Research declassified documents to see patterns</li>
                    <li>• Compare current events to historical false flags</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Circle Up: Building Unity */}
        <Section
          id="unity"
          title="Circle Up: Ancient Wisdom for Modern Unity"
          icon={Users}
          expanded={expandedSection === "unity"}
          onToggle={() => toggleSection("unity")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Creating Authentic Connection</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Circle Principles</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Everyone's voice matters equally</li>
                    <li>• Speak from personal experience, not ideology</li>
                    <li>• Listen to understand, not to argue</li>
                    <li>• Find shared struggles beneath surface differences</li>
                    <li>• Focus on what unites rather than divides</li>
                  </ul>
                </div>
                
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">Circle Structure</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Opening: Share name and current feeling</li>
                    <li>• Check-in: What's alive for you right now?</li>
                    <li>• Topic exploration: Use prompts below</li>
                    <li>• Synthesis: What did we discover together?</li>
                    <li>• Closing: One word for your experience</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-black/20 rounded-lg p-4">
                <h4 className="text-blue-400 font-bold mb-3">Unity Prompts</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-white font-medium mb-2">Bridging Questions</h5>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• "When have you felt most connected to others?"</li>
                      <li>• "What do you most want for your children?"</li>
                      <li>• "Describe a time someone showed you unexpected kindness"</li>
                      <li>• "What would our community look like if everyone felt valued?"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-2">Depth Questions</h5>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• "What fear keeps you awake at night?"</li>
                      <li>• "When do you feel most misunderstood?"</li>
                      <li>• "What would you risk everything to protect?"</li>
                      <li>• "How has pain in your life taught you compassion?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Practical Implementation</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded p-4">
                  <h5 className="text-blue-300 font-medium mb-2">Start Small: Family Circles</h5>
                  <p className="text-white/80 text-sm mb-2">
                    Begin with weekly family check-ins using circle principles. Replace debate with curiosity.
                  </p>
                  <p className="text-white/60 text-xs">
                    "Instead of arguing about politics, ask: 'What experiences led you to feel this way?'"
                  </p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h5 className="text-blue-300 font-medium mb-2">Expand: Neighborhood Circles</h5>
                  <p className="text-white/80 text-sm mb-2">
                    Organize monthly gatherings focused on shared concerns rather than political positions.
                  </p>
                  <p className="text-white/60 text-xs">
                    "Topics: Community safety, youth programs, supporting local businesses, environmental care"
                  </p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h5 className="text-blue-300 font-medium mb-2">Scale: Movement Building</h5>
                  <p className="text-white/80 text-sm mb-2">
                    Create networks of circles that share learnings and coordinate action.
                  </p>
                  <p className="text-white/60 text-xs">
                    "When people feel heard and valued, they naturally want to extend that to others"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Economic Liberation */}
        <Section
          id="economics"
          title="Economic Liberation: Breaking Dependency Chains"
          icon={Shield}
          expanded={expandedSection === "economics"}
          onToggle={() => toggleSection("economics")}
          color="green"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Building Economic Alternatives</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">Individual Level</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Build multiple income streams</li>
                    <li>• Learn practical skills (food, repair, health)</li>
                    <li>• Reduce consumption dependencies</li>
                    <li>• Support cooperative businesses</li>
                    <li>• Join or create skill-sharing networks</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Community Level</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Start time banks for skill exchange</li>
                    <li>• Create community gardens</li>
                    <li>• Establish local currency systems</li>
                    <li>• Form buying cooperatives</li>
                    <li>• Organize tool libraries</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold text-white mb-3">Regional Level</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Worker-owned enterprises</li>
                    <li>• Community land trusts</li>
                    <li>• Participatory budgeting</li>
                    <li>• Regional food systems</li>
                    <li>• Alternative banking systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Success Models to Study</h3>
              
              <div className="space-y-4">
                <ModelCard
                  title="Mondragón Corporation (Spain)"
                  description="World's largest worker cooperative with 80,000+ member-owners"
                  impact="Democratically owned businesses, shared profits, community investment"
                  lesson="Worker ownership creates prosperity and solidarity simultaneously"
                />
                
                <ModelCard
                  title="Jackson, Mississippi Cooperation"
                  description="Network of worker cooperatives in historically oppressed communities"
                  impact="Black-owned cooperative economy, local food production, democratic participation"
                  lesson="Economic democracy is racial justice in action"
                />
                
                <ModelCard
                  title="Kerala, India Development Model"
                  description="High human development despite low GDP through cooperative economics"
                  impact="Universal education, healthcare, land reform through democratic planning"
                  lesson="Social cooperation outperforms market competition for human welfare"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Information Liberation */}
        <Section
          id="information"
          title="Information Liberation: Sovereign Media Systems"
          icon={Eye}
          expanded={expandedSection === "information"}
          onToggle={() => toggleSection("information")}
          color="purple"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Building Information Independence</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="font-bold text-white mb-3">Personal Information Diet</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Eliminate corporate social media feeds</li>
                      <li>• Follow independent journalists directly</li>
                      <li>• Read primary sources and documents</li>
                      <li>• Learn from multiple languages/perspectives</li>
                      <li>• Practice information fasting regularly</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-3">Community Media</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Start neighborhood newsletters</li>
                      <li>• Create podcast/video collectives</li>
                      <li>• Organize community storytelling events</li>
                      <li>• Document local history and struggles</li>
                      <li>• Share platforms across communities</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-purple-400 font-bold mb-3">Decentralized Networks</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded">
                      <h5 className="text-yellow-400 font-medium mb-1">Mesh Networks</h5>
                      <p className="text-white/80 text-sm">
                        Build communication systems that can't be centrally controlled or shut down
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded">
                      <h5 className="text-green-400 font-medium mb-1">Peer-to-Peer Platforms</h5>
                      <p className="text-white/80 text-sm">
                        Share information directly without corporate intermediaries
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded">
                      <h5 className="text-blue-400 font-medium mb-1">Encrypted Communication</h5>
                      <p className="text-white/80 text-sm">
                        Protect organizing conversations from surveillance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Compassionate Action */}
        <Section
          id="action"
          title="Compassionate Action: From Analysis to Liberation"
          icon={Heart}
          expanded={expandedSection === "action"}
          onToggle={() => toggleSection("action")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Turning Understanding into Movement</h3>
              
              <div className="space-y-6">
                <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-500/30">
                  <h4 className="font-bold text-white mb-4">The Compassion Bridge</h4>
                  <p className="text-white/90 mb-4">
                    Understanding manipulation creates two paths: cynicism or compassion. Choose compassion. 
                    Everyone caught in manufactured division is a victim of the same system.
                  </p>
                  <blockquote className="border-l-4 border-yellow-500 pl-4 text-yellow-300 italic">
                    "Hurt people hurt people. Healed people heal people. Which do you choose to be?"
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <h4 className="font-bold text-white mb-3">Immediate Actions</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Practice radical listening with someone you disagree with</li>
                      <li>• Find one area of common ground with a "political enemy"</li>
                      <li>• Share resources across ideological lines</li>
                      <li>• Protect someone being scapegoated</li>
                      <li>• Build bridges between divided communities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                    <h4 className="font-bold text-white mb-3">Strategic Actions</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Organize around shared material needs</li>
                      <li>• Create alternatives to systems that divide</li>
                      <li>• Document and share success stories</li>
                      <li>• Train others in these frameworks</li>
                      <li>• Build lasting cooperative institutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">The Liberation Commitment</h3>
              
              <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-6 border border-yellow-500/30">
                <div className="text-center">
                  <p className="text-xl text-white/90 mb-4">
                    "I commit to seeing through manufactured division to our shared humanity."
                  </p>
                  <p className="text-lg text-white/80 mb-4">
                    "I will build bridges where others build walls."
                  </p>
                  <p className="text-lg text-white/80 mb-6">
                    "I will choose cooperation over competition, understanding over judgment, love over fear."
                  </p>
                  
                  <div className="inline-flex items-center gap-4 bg-black/30 rounded-lg p-4">
                    <Heart className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Your liberation is bound up with mine</span>
                    <Heart className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Implementation Roadmap */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Your Liberation Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Week 1-2: Deprogram</h3>
              <p className="text-white/80 text-sm">
                Break free from manufactured outrage and information manipulation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Week 3-4: Connect</h3>
              <p className="text-white/80 text-sm">
                Build authentic relationships across difference through circle practices
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Ongoing: Create</h3>
              <p className="text-white/80 text-sm">
                Build cooperative alternatives and share liberation frameworks
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-white/90 mb-4">
              Remember: This isn't about perfection. It's about direction.
            </p>
            <p className="text-white/80">
              Every small act of connection in a world designed to divide us is revolutionary.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project/empires-receipts" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
            Start with Truth
          </Link>
          <Link href="/gallery/unity-reconnaissance" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
            Study Unity History
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Join the Movement
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

function ProtocolStep({
  id,
  number,
  title,
  description,
  actions,
  completed,
  onToggle
}: {
  id: string
  number: number
  title: string
  description: string
  actions: string[]
  completed: boolean
  onToggle: () => void
}) {
  return (
    <div className={`bg-white/5 rounded-lg p-4 border transition-all ${completed ? 'border-green-500/50 bg-green-900/20' : 'border-white/10'}`}>
      <div className="flex items-start gap-4">
        <button
          onClick={onToggle}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
            completed 
              ? 'border-green-500 bg-green-500' 
              : 'border-white/30 hover:border-white/50'
          }`}
        >
          {completed ? (
            <CheckCircle className="w-4 h-4 text-white" />
          ) : (
            <span className="text-white/70 text-sm font-bold">{number}</span>
          )}
        </button>
        
        <div className="flex-1">
          <h4 className={`font-bold mb-2 ${completed ? 'text-green-300' : 'text-white'}`}>
            {title}
          </h4>
          <p className="text-white/70 text-sm mb-3">{description}</p>
          
          <div className="space-y-2">
            {actions.map((action, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-white/40 text-xs mt-1">•</span>
                <span className="text-white/60 text-xs">{action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ModelCard({
  title,
  description,
  impact,
  lesson
}: {
  title: string
  description: string
  impact: string
  lesson: string
}) {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <h5 className="text-green-400 font-bold mb-2">{title}</h5>
      <p className="text-white/80 text-sm mb-2">{description}</p>
      <p className="text-white/70 text-xs mb-3"><span className="text-green-300 font-medium">Impact:</span> {impact}</p>
      <p className="text-white/60 text-xs italic"><span className="text-yellow-300 font-medium">Lesson:</span> {lesson}</p>
    </div>
  )
}