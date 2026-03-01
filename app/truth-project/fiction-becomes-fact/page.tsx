import Link from "next/link"
import { ArrowLeft, Brain, Film, AlertTriangle, Users, Lightbulb, Target } from "lucide-react"

export const metadata = {
  title: "When Fiction Becomes Fact: The Psychology of Narrative Dependence - Truth Project",
  description: "Investigation into how humans increasingly use fictional narratives as psychological anchors for real-world decision-making, replacing authentic mentors and lived experiences.",
  openGraph: {
    title: "When Fiction Becomes Fact: The Psychology of Narrative Dependence",
    description: "Peer-reviewed research reveals profound implications of using fictional stories as guides for living, affecting cognition, culture, and survival competence.",
    images: [
      { url: "/gallery/fiction-reality.jpg", width: 1200, height: 630, alt: "Fiction Reality Investigation" },
    ],
  },
}

export default function FictionBecomesFactPage() {
  return (
    <div className="container mx-auto px-4 py-8" style={{ background: '#0d1b2a', minHeight: '100vh' }}>
      <Link href="/truth-project" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'rgba(232, 228, 223, 0.7)' }}>
        <ArrowLeft className="h-4 w-4" />
        Back to Truth Project
      </Link>

      <header className="mb-12">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(27, 73, 101, 0.1)', color: '#1b4965' }}>
          <Brain className="h-4 w-4" />
          Psychological Investigation
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#e8e4df' }}>When Fiction Becomes Fact</h1>
        <p className="text-xl max-w-4xl" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
          Humans are increasingly using fictional narratives from movies and streaming platforms as psychological anchors for real-world decision-making, replacing authentic mentors and lived experiences. This shift represents a fundamental transformation in how humans acquire wisdom, make decisions, and understand reality.
        </p>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3 space-y-8">
          {/* Key Research Findings */}
          <section className="rounded-xl p-6" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: '#1b4965' }}>
              <Brain className="h-5 w-5" />
              Research Findings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#e8e4df' }}>Narrative Persuasion</h3>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                  <li>• <strong>Meta-analysis of 7,000+ participants</strong></li>
                  <li>• Fictional stories as persuasive as factual accounts</li>
                  <li>• Effects <strong>strengthen over time</strong> (sleeper effect)</li>
                  <li>• Entertainment context amplifies persuasion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#e8e4df' }}>Cognitive Impact</h3>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                  <li>• <strong>Attention spans</strong>: 12s → 8s (2000-2013)</li>
                  <li>• Heavy media consumers: reduced brain activity</li>
                  <li>• Impaired reality monitoring abilities</li>
                  <li>• Source confusion between media and experience</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Psychology of Fictional Anchoring */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#e8e4df' }}>
              <Film className="h-6 w-6" />
              The psychology of fictional anchoring
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Fictional narratives create psychological anchors through mechanisms fundamentally different from traditional information processing. Transportation theory, validated across 76 studies, describes how becoming "lost in a story" creates a state of cognitive absorption where the boundary between fiction and reality temporarily dissolves. During this immersive state, viewers experience reduced counterarguing, heightened emotional engagement, and vivid mental imagery that makes fictional events feel subjectively real.
              </p>

              <div className="rounded-xl p-6 my-8" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1b4965' }}>Brain Imaging Reveals</h3>
                <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                  Brain imaging reveals that transported individuals show <strong>decreased activity in brain regions associated with critical thinking</strong> while showing increased activation in areas processing personal memories – essentially encoding fiction as lived experience. Characters become internalized voices guiding real-world decisions.
                </p>
              </div>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Parasocial relationships compound these effects. Originally identified by Horton and Wohl in 1956, these one-sided emotional connections with fictional characters can rival real relationships in psychological impact. Modern research documents viewers experiencing genuine grief during "parasocial breakups" when characters leave shows, with some individuals reporting stronger emotional bonds with fictional characters than with real people in their lives. <strong>These relationships persist long after media exposure ends</strong>, creating lasting reference points for moral reasoning, behavioral modeling, and value formation.
              </p>
            </div>
          </section>

          {/* Decision-Making Impact */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#e8e4df' }}>
              <Target className="h-6 w-6" />
              Distorted decision-making and moral reasoning
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                The impact on real-world decision-making proves substantial and concerning. Studies tracking viewer behavior reveal that people routinely apply fictional scenarios to real situations, often without conscious awareness. The phenomenon of "experience-taking" – where readers unconsciously adopt a character's identity while consuming narratives – produces lasting behavioral changes. In controlled experiments, participants who read first-person narratives showed measurable shifts in voting behavior, reduced stereotypical thinking, and altered moral judgments that persisted for days or weeks.
              </p>

              <div className="rounded-xl p-6 my-8" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#c73032' }}>Moral Disengagement</h3>
                <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                  Analysis of popular shows featuring morally ambiguous characters like those in "Breaking Bad" or "The Sopranos" reveals viewers developing "moral disengagement" – suspending normal ethical judgment through identification with complex characters. <strong>The more exposure people have to fictional worlds, the more likely they are to reference fictional scenarios when making moral decisions</strong>.
                </p>
              </div>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Risk assessment becomes systematically distorted through what Gerbner termed "cultivation effects." Heavy viewers (consuming 4+ hours daily) consistently overestimate real-world violence, show increased fear of victimization, and demonstrate "mean world syndrome" – believing the world is more dangerous than statistics support. Content analysis reveals <strong>44.9% of action movie scenes depict risky behaviors, but only 31.8% show negative consequences</strong>, creating skewed mental models of risk and reward.
              </p>
            </div>
          </section>

          {/* Cultural Impact */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#e8e4df' }}>
              <Users className="h-6 w-6" />
              Cultural homogenization replacing wisdom transmission
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Anthropological research reveals mass media narratives are systematically displacing knowledge transmission systems that sustained human cultures for millennia. Traditional oral histories, verified to accurately preserve information for over 10,000 years in some Indigenous cultures, are being replaced by Hollywood productions that comprise <strong>85% of films shown globally</strong>. This represents not merely technological change but fundamental alteration in how humans create, maintain, and transmit cultural knowledge.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="rounded-xl p-6" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#d4a74a' }}>Traditional Systems Decline</h3>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Mentorship systems being replaced by video</li>
                    <li>• Rural communities losing survival skills</li>
                    <li>• Specialized story-keepers disappearing</li>
                    <li>• Place-based wisdom severed</li>
                  </ul>
                </div>
                <div className="rounded-xl p-6" style={{ background: 'rgba(212, 167, 74, 0.15)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#d4a74a' }}>Algorithm-Driven Communities</h3>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                    <li>• Netflix algorithms replace local knowledge</li>
                    <li>• <strong>Virtual experiences lack proprioceptive feedback</strong></li>
                    <li>• Shared references transcend geography</li>
                    <li>• Western values promoted globally</li>
                  </ul>
                </div>
              </div>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Stuart Hall's encoding/decoding theory reveals how media messages carry dominant cultural codes that reinforce hegemonic power structures. When Western media comprises the vast majority of global content, it promotes specific values – individualism, consumerism, particular forms of democracy – while marginalizing alternative worldviews. <strong>Indigenous resource management practices proven effective over centuries are forgotten until "rediscovered" by Western scientists</strong>, revealing systematic bias against non-Western knowledge systems.
              </p>
            </div>
          </section>

          {/* Cognitive Degradation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: '#e8e4df' }}>Cognitive degradation and survival incompetence</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Cognitive science research documents alarming impacts on fundamental mental capacities. Reality monitoring – the ability to distinguish internally generated from externally derived information – becomes impaired with heavy media consumption. Studies show increased "source confusion" where people cannot differentiate between events remembered from media versus personal experience. <strong>Neuroimaging reveals heavy media consumers show reduced activity in the medial prefrontal cortex</strong>, the brain region critical for distinguishing real from imagined information.
              </p>

              <div className="rounded-xl p-6 my-8" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#c73032' }}>Structural Brain Changes</h3>
                <ul className="space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                  <li>• Heavy media multitaskers require greater prefrontal activation</li>
                  <li>• <strong>Reduced gray matter volume in anterior cingulate cortex</strong></li>
                  <li>• Patterns resemble those in clinical populations with hallucinations</li>
                  <li>• Attention spans declining measurably over time</li>
                </ul>
              </div>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Practical survival competence shows particular vulnerability. While direct research remains limited, converging evidence suggests dangerous gaps between media-derived confidence and actual ability. Wilderness education programs report increased baseline incompetence in basic outdoor skills among technology-heavy populations. Expert criticism of survival television highlights dangerous misinformation, with viewers developing overconfidence combined with practical incompetence. Motor learning research confirms screen-based learning produces fundamentally different neural pathways than hands-on practice, failing to develop the embodied competence necessary for real-world application.
              </p>
            </div>
          </section>

          {/* Information Control */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#e8e4df' }}>
              <AlertTriangle className="h-6 w-6" />
              Information control and manufactured reality
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                These individual impacts connect to broader information ecosystem problems revealing systematic control over knowledge production. Five corporate conglomerates control the majority of US mass media, with similar concentration patterns globally. Wikipedia, despite appearing democratic, shows significant demographic bias with editors being predominantly male, white, and from developed countries. <strong>Hollywood writers' rooms are 91% led by white showrunners</strong>, with diverse writers experiencing systematic discrimination and occupying lower-level positions despite films with Black creative professionals showing superior returns on investment.
              </p>

              <div className="rounded-xl p-6 my-8" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1b4965' }}>Algorithmic Bias</h3>
                <p style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                  This demographic homogeneity becomes amplified through algorithmic distribution systems. Safiya Noble's research on "algorithms of oppression" demonstrates how search engines reinforce racist and sexist biases, creating systematic privileging of certain perspectives while marginalizing others. Platform algorithms optimize for engagement rather than truth, replacing editorial judgment with systems that prioritize attention over accuracy.
                </p>
              </div>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Modern astroturfing has evolved beyond traditional manufactured consent into sophisticated systems using bot networks and sock puppet accounts to create artificial grassroots movements. Research documents how corporations adopt "discursive frames that mimic authentic civic groups," making genuine public sentiment indistinguishable from manufactured consensus. <strong>When both entertainment and "factual" sources are controlled by narrow demographics using engagement-optimized algorithms, the result amounts to manufactured reality</strong> where limited perspectives appear universal while authentic voices become increasingly difficult to identify.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-6 rounded-xl p-8" style={{ background: 'rgba(13, 27, 42, 0.5)', border: '1px solid rgba(232, 228, 223, 0.1)' }}>
            <h2 className="text-3xl font-bold" style={{ color: '#e8e4df' }}>Conclusion</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                The evidence reveals humanity at an unprecedented juncture where fictional narratives increasingly supplant direct experience and authentic relationships as guides for living. This shift transcends individual viewing habits to represent fundamental transformation in how our species acquires wisdom, makes decisions, and maintains cultural knowledge. Transportation into fictional worlds creates psychological anchors as powerful as lived experience but divorced from the feedback mechanisms that correct errors and build genuine competence.
              </p>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                Most critically, this occurs precisely when complex global challenges demand maximum human wisdom and competence. Climate change, technological disruption, and social transformation require practical skills, critical thinking, and cultural resilience – capacities that fictional narrative dependence systematically undermines. <strong>The replacement of embodied knowledge with vicarious media experience creates populations who feel informed while lacking genuine understanding</strong>, confident without competence, connected while increasingly isolated from authentic human relationships and the natural world.
              </p>

              <p className="leading-relaxed" style={{ color: 'rgba(232, 228, 223, 0.9)' }}>
                The implications extend beyond individual psychology to threaten the cognitive diversity, practical wisdom, and reality-testing capabilities essential for human survival and flourishing. Traditional knowledge systems that preserved human wisdom for millennia dissolve as algorithm-curated content replaces mentorship, oral history, and community-specific wisdom precisely when humanity faces challenges requiring maximum collective intelligence and practical competence.
              </p>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-xl p-5" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#1b4965' }}>Research Base</h3>
            <ul className="text-sm space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
              <li>• Meta-analysis of 7,000+ participants</li>
              <li>• 76 transportation theory studies</li>
              <li>• Neuroimaging research</li>
              <li>• Cross-cultural anthropological data</li>
            </ul>
          </div>

          <div className="rounded-xl p-5" style={{ background: 'rgba(199, 48, 50, 0.1)', border: '1px solid rgba(199, 48, 50, 0.3)' }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#c73032' }}>Critical Metrics</h3>
            <ul className="text-sm space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
              <li>• <strong>85%</strong> of global films are Hollywood productions</li>
              <li>• <strong>91%</strong> white-led writers' rooms</li>
              <li>• Attention spans: <strong>12s → 8s</strong> decline</li>
              <li>• <strong>4+ hours</strong> daily = "heavy viewer"</li>
            </ul>
          </div>

          <div className="rounded-xl p-5" style={{ background: 'rgba(212, 167, 74, 0.1)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#d4a74a' }}>Related Investigations</h3>
            <div className="space-y-3">
              <Link href="/truth-project/wikipedia-neutrality" className="block text-sm underline" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                Wikipedia's Contested Neutrality
              </Link>
              <Link href="/truth-project/wikipedia-bureaucrats" className="block text-sm underline" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
                Wikipedia's Hidden Power Structure
              </Link>
            </div>
          </div>

          <div className="rounded-xl p-5" style={{ background: 'rgba(212, 167, 74, 0.15)', border: '1px solid rgba(212, 167, 74, 0.3)' }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#d4a74a' }}>Implications</h3>
            <ul className="text-sm space-y-2" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>
              <li>• Wisdom transmission disrupted</li>
              <li>• Survival competence degraded</li>
              <li>• Reality testing impaired</li>
              <li>• Cultural resilience threatened</li>
            </ul>
          </div>

          <div className="rounded-xl p-5" style={{ background: 'rgba(27, 73, 101, 0.2)', border: '1px solid rgba(27, 73, 101, 0.3)' }}>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#1b4965' }}>Truth Project</h3>
            <p className="mb-3 text-sm" style={{ color: 'rgba(232, 228, 223, 0.8)' }}>Investigating how information systems shape human consciousness and decision-making.</p>
            <Link href="/truth-project" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm" style={{ background: '#1b4965', color: '#e8e4df' }}>
              View All Reports
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
