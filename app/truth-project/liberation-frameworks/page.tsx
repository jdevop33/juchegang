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
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #0d1b2a, #0d1b2a)' }}>
      <div className="container mx-auto px-4 py-8">
        <Link href="/truth-project" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
          <ArrowLeft className="h-4 w-4" />
          Back to Truth Project
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#f0ebe3' }}>
            Liberation Frameworks
          </h1>
          <p className="text-xl max-w-4xl" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
            Practical tools for breaking free from manipulation and building genuine human connection. Your step-by-step guide to liberation.
          </p>
        </div>

        {/* Liberation Promise */}
        <div className="mb-12 rounded-2xl p-8" style={{ background: 'linear-gradient(to right, rgba(212, 167, 74, 0.15), rgba(27, 73, 101, 0.15), rgba(212, 167, 74, 0.15))', border: '1px solid rgba(212, 167, 74, 0.2)' }}>
          <div className="text-center">
            <Zap className="w-12 h-12 mx-auto mb-4" style={{ color: '#d4a74a' }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#f0ebe3' }}>The Most Revolutionary Act</h2>
            <p className="text-xl mb-4" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
              In a system built on division, unity is revolution
            </p>
            <p className="max-w-3xl mx-auto" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#c73032' }}>Step-by-Step Deconditioning</h3>

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

            <div className="rounded-lg p-6" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
              <h4 className="font-bold mb-3" style={{ color: '#c73032' }}>Advanced Deprogram Techniques</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2" style={{ color: '#f0ebe3' }}>Pattern Recognition</h5>
                  <ul className="text-sm space-y-1" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Notice when multiple outlets use identical phrases</li>
                    <li>• Track how "crises" conveniently distract from other news</li>
                    <li>• Observe which voices get platformed vs silenced</li>
                    <li>• Study historical propaganda to recognize current patterns</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2" style={{ color: '#f0ebe3' }}>Historical Context</h5>
                  <ul className="text-sm space-y-1" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1b4965' }}>Creating Authentic Connection</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Circle Principles</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Everyone's voice matters equally</li>
                    <li>• Speak from personal experience, not ideology</li>
                    <li>• Listen to understand, not to argue</li>
                    <li>• Find shared struggles beneath surface differences</li>
                    <li>• Focus on what unites rather than divides</li>
                  </ul>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Circle Structure</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Opening: Share name and current feeling</li>
                    <li>• Check-in: What's alive for you right now?</li>
                    <li>• Topic exploration: Use prompts below</li>
                    <li>• Synthesis: What did we discover together?</li>
                    <li>• Closing: One word for your experience</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg p-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1b4965' }}>Unity Prompts</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2" style={{ color: '#f0ebe3' }}>Bridging Questions</h5>
                    <ul className="text-sm space-y-1" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                      <li>• "When have you felt most connected to others?"</li>
                      <li>• "What do you most want for your children?"</li>
                      <li>• "Describe a time someone showed you unexpected kindness"</li>
                      <li>• "What would our community look like if everyone felt valued?"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2" style={{ color: '#f0ebe3' }}>Depth Questions</h5>
                    <ul className="text-sm space-y-1" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                      <li>• "What fear keeps you awake at night?"</li>
                      <li>• "When do you feel most misunderstood?"</li>
                      <li>• "What would you risk everything to protect?"</li>
                      <li>• "How has pain in your life taught you compassion?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1b4965' }}>Practical Implementation</h3>

              <div className="space-y-4">
                <div className="rounded p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <h5 className="font-medium mb-2" style={{ color: '#1b4965' }}>Start Small: Family Circles</h5>
                  <p className="text-sm mb-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    Begin with weekly family check-ins using circle principles. Replace debate with curiosity.
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>
                    "Instead of arguing about politics, ask: 'What experiences led you to feel this way?'"
                  </p>
                </div>

                <div className="rounded p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <h5 className="font-medium mb-2" style={{ color: '#1b4965' }}>Expand: Neighborhood Circles</h5>
                  <p className="text-sm mb-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    Organize monthly gatherings focused on shared concerns rather than political positions.
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>
                    "Topics: Community safety, youth programs, supporting local businesses, environmental care"
                  </p>
                </div>

                <div className="rounded p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <h5 className="font-medium mb-2" style={{ color: '#1b4965' }}>Scale: Movement Building</h5>
                  <p className="text-sm mb-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    Create networks of circles that share learnings and coordinate action.
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>Building Economic Alternatives</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Individual Level</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Build multiple income streams</li>
                    <li>• Learn practical skills (food, repair, health)</li>
                    <li>• Reduce consumption dependencies</li>
                    <li>• Support cooperative businesses</li>
                    <li>• Join or create skill-sharing networks</li>
                  </ul>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Community Level</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Start time banks for skill exchange</li>
                    <li>• Create community gardens</li>
                    <li>• Establish local currency systems</li>
                    <li>• Form buying cooperatives</li>
                    <li>• Organize tool libraries</li>
                  </ul>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.15)', border: '1px solid rgba(27, 73, 101, 0.25)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Regional Level</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Worker-owned enterprises</li>
                    <li>• Community land trusts</li>
                    <li>• Participatory budgeting</li>
                    <li>• Regional food systems</li>
                    <li>• Alternative banking systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>Success Models to Study</h3>

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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1b4965' }}>Building Information Independence</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Personal Information Diet</h4>
                    <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                      <li>• Eliminate corporate social media feeds</li>
                      <li>• Follow independent journalists directly</li>
                      <li>• Read primary sources and documents</li>
                      <li>• Learn from multiple languages/perspectives</li>
                      <li>• Practice information fasting regularly</li>
                    </ul>
                  </div>

                  <div className="rounded-lg p-4" style={{ background: 'rgba(27, 73, 101, 0.15)', border: '1px solid rgba(27, 73, 101, 0.25)' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Community Media</h4>
                    <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                      <li>• Start neighborhood newsletters</li>
                      <li>• Create podcast/video collectives</li>
                      <li>• Organize community storytelling events</li>
                      <li>• Document local history and struggles</li>
                      <li>• Share platforms across communities</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg p-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#1b4965' }}>Decentralized Networks</h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <h5 className="font-medium mb-1" style={{ color: '#d4a74a' }}>Mesh Networks</h5>
                      <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                        Build communication systems that can't be centrally controlled or shut down
                      </p>
                    </div>

                    <div className="p-3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <h5 className="font-medium mb-1" style={{ color: '#d4a74a' }}>Peer-to-Peer Platforms</h5>
                      <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                        Share information directly without corporate intermediaries
                      </p>
                    </div>

                    <div className="p-3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <h5 className="font-medium mb-1" style={{ color: '#1b4965' }}>Encrypted Communication</h5>
                      <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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
            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>Turning Understanding into Movement</h3>

              <div className="space-y-6">
                <div className="rounded-lg p-6" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h4 className="font-bold mb-4" style={{ color: '#f0ebe3' }}>The Compassion Bridge</h4>
                  <p className="mb-4" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                    Understanding manipulation creates two paths: cynicism or compassion. Choose compassion.
                    Everyone caught in manufactured division is a victim of the same system.
                  </p>
                  <blockquote className="pl-4 italic" style={{ borderLeft: '4px solid #d4a74a', color: '#d4a74a' }}>
                    "Hurt people hurt people. Healed people heal people. Which do you choose to be?"
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg p-4" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Immediate Actions</h4>
                    <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                      <li>• Practice radical listening with someone you disagree with</li>
                      <li>• Find one area of common ground with a "political enemy"</li>
                      <li>• Share resources across ideological lines</li>
                      <li>• Protect someone being scapegoated</li>
                      <li>• Build bridges between divided communities</li>
                    </ul>
                  </div>

                  <div className="rounded-lg p-4" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#f0ebe3' }}>Strategic Actions</h4>
                    <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
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

            <div className="rounded-lg p-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a74a' }}>The Liberation Commitment</h3>

              <div className="rounded-lg p-6" style={{ background: 'linear-gradient(to right, rgba(212, 167, 74, 0.1), rgba(212, 167, 74, 0.15))', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                <div className="text-center">
                  <p className="text-xl mb-4" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                    "I commit to seeing through manufactured division to our shared humanity."
                  </p>
                  <p className="text-lg mb-4" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    "I will build bridges where others build walls."
                  </p>
                  <p className="text-lg mb-6" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    "I will choose cooperation over competition, understanding over judgment, love over fear."
                  </p>

                  <div className="inline-flex items-center gap-4 rounded-lg p-4" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <Heart className="w-6 h-6" style={{ color: '#c73032' }} />
                    <span className="font-medium" style={{ color: '#f0ebe3' }}>Your liberation is bound up with mine</span>
                    <Heart className="w-6 h-6" style={{ color: '#c73032' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Implementation Roadmap */}
        <div className="mt-12 rounded-xl p-8" style={{ background: 'linear-gradient(to right, rgba(27, 73, 101, 0.2), rgba(27, 73, 101, 0.15), rgba(27, 73, 101, 0.2))', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#f0ebe3' }}>Your Liberation Journey</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1b4965' }}>Week 1-2: Deprogram</h3>
              <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                Break free from manufactured outrage and information manipulation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#d4a74a' }}>Week 3-4: Connect</h3>
              <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                Build authentic relationships across difference through circle practices
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#d4a74a' }}>Ongoing: Create</h3>
              <p className="text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                Build cooperative alternatives and share liberation frameworks
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg mb-4" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
              Remember: This isn't about perfection. It's about direction.
            </p>
            <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
              Every small act of connection in a world designed to divide us is revolutionary.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project/empires-receipts" className="px-6 py-3 font-medium rounded-lg transition-colors" style={{ background: '#c73032', color: '#f0ebe3' }}>
            Start with Truth
          </Link>
          <Link href="/gallery/unity-reconnaissance" className="px-6 py-3 font-medium rounded-lg transition-colors" style={{ background: '#d4a74a', color: '#0d1b2a' }}>
            Study Unity History
          </Link>
          <Link href="/contact" className="px-6 py-3 font-medium rounded-lg transition-colors" style={{ background: '#1b4965', color: '#f0ebe3' }}>
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
  const colorStyles: Record<string, { border: string; background: string; iconColor: string }> = {
    red: { border: '1px solid rgba(199, 48, 50, 0.3)', background: 'rgba(199, 48, 50, 0.1)', iconColor: '#c73032' },
    blue: { border: '1px solid rgba(27, 73, 101, 0.3)', background: 'rgba(27, 73, 101, 0.1)', iconColor: '#1b4965' },
    purple: { border: '1px solid rgba(27, 73, 101, 0.3)', background: 'rgba(27, 73, 101, 0.1)', iconColor: '#1b4965' },
    green: { border: '1px solid rgba(212, 167, 74, 0.3)', background: 'rgba(212, 167, 74, 0.1)', iconColor: '#d4a74a' },
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
    <div
      className="rounded-lg p-4 transition-all"
      style={{
        background: completed ? 'rgba(212, 167, 74, 0.2)' : 'rgba(255,255,255,0.05)',
        border: completed ? '1px solid rgba(212, 167, 74, 0.5)' : '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={onToggle}
          className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all"
          style={{
            borderColor: completed ? '#d4a74a' : 'rgba(232, 228, 223, 0.3)',
            background: completed ? '#d4a74a' : 'transparent'
          }}
        >
          {completed ? (
            <CheckCircle className="w-4 h-4" style={{ color: '#0d1b2a' }} />
          ) : (
            <span className="text-sm font-bold" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>{number}</span>
          )}
        </button>

        <div className="flex-1">
          <h4 className="font-bold mb-2" style={{ color: completed ? '#d4a74a' : '#f0ebe3' }}>
            {title}
          </h4>
          <p className="text-sm mb-3" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>{description}</p>

          <div className="space-y-2">
            {actions.map((action, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-xs mt-1" style={{ color: 'rgba(232, 228, 223, 0.4)' }}>•</span>
                <span className="text-xs" style={{ color: 'rgba(232, 228, 223, 0.6)' }}>{action}</span>
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
    <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h5 className="font-bold mb-2" style={{ color: '#d4a74a' }}>{title}</h5>
      <p className="text-sm mb-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>{description}</p>
      <p className="text-xs mb-3" style={{ color: 'rgba(232, 228, 223, 0.7)' }}><span className="font-medium" style={{ color: '#d4a74a' }}>Impact:</span> {impact}</p>
      <p className="text-xs italic" style={{ color: 'rgba(232, 228, 223, 0.6)' }}><span className="font-medium" style={{ color: '#d4a74a' }}>Lesson:</span> {lesson}</p>
    </div>
  )
}
