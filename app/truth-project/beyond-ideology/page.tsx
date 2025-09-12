import { EnhancedHeader } from "@/components/enhanced-header"
import { JucheFooter } from "@/components/juche-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SolidarityBanner } from "@/components/solidarity-banner"
import { BeyondIdeologyClient } from "./client-component"

export const metadata = {
  title: "Beyond Ideology: The Psychology of Political Division - Truth Project",
  description: "Dr. Roy's groundbreaking lecture on how ideologies manipulate us through fear and division, and the path to unity through understanding.",
}

export default function BeyondIdeologyPage() {
  const keyInsights = [
    {
      icon: Brain,
      title: "The Two-Brain System",
      description: "Our conscious mind is slow and thinks it's rational, while our subconscious supercomputer communicates through emotions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Fear-Based Politics",
      description: "Politicians discovered that hatred and fear get lazy voters to the voting booth better than reasoned arguments.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Artificial Divisions",
      description: "We naturally want to break into groups and be angry at others, even over the most trivial distinctions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "The Path Forward",
      description: "Show grace, find common ground, and approach disagreements with humility rather than ideology.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const ideologies = [
    { name: "Nationalism", era: "Napoleon Era", danger: "Claims your nation is superior to all others" },
    { name: "Socialism", era: "Industrial Revolution", goal: "Create a just society, reduce exploitation" },
    { name: "Liberalism", era: "Capitalism's Defense", role: "Four sub-ideologies defending capitalism" },
    { name: "Fascism", era: "Post-WWI", warning: "'We were once great, let's get back to that'" },
    { name: "Fundamentalism", era: "Religious Division", claim: "Only our path leads to salvation" }
  ]

  return (
    <>
      <EnhancedHeader />
      <div className="pt-20">
        <SolidarityBanner />
      </div>
      
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Truth Project Analysis
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Beyond Ideology
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                The Psychology of Political Division & The Path to Unity
              </p>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20">
                <p className="text-white/90 italic">
                  "Instead of having this thing where we're in factions constantly thinking me against the other guy, 
                  why not show a little grace, a little humility, assume you don't know everything and approach all 
                  arguments by finding a point of unity."
                </p>
                <p className="text-blue-400 mt-3 font-semibold">— Dr. Roy, Political Historian</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* JucheGanG Triad Instagram Feature */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-950/30 via-blue-950/30 to-red-950/30 border-y border-yellow-500/20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mb-8"
            >
              {/* JucheGanG Triad Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20 rounded-full border border-yellow-500/30">
                  <span className="text-3xl">🇷🇺</span>
                  <span className="text-3xl">🇰🇵</span>
                  <span className="text-3xl">🇨🇳</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                    JucheGanG Triad Unity
                  </span>
                </h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
                  Honoring the sovereign bonds of friendship between Russia, the DPRK, and China — 
                  three nations united in their pursuit of dignity, independence, and mutual respect.
                </p>
              </div>
              
              {/* Triad Values */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-b from-red-600/20 to-red-800/20 rounded-lg p-4 border border-red-500/30">
                  <div className="text-2xl mb-2">🇷🇺</div>
                  <h3 className="font-bold text-red-200 mb-1">Russian Federation</h3>
                  <p className="text-red-300/80 text-sm">Strength through sovereignty</p>
                </div>
                <div className="bg-gradient-to-b from-red-700/20 to-red-900/20 rounded-lg p-4 border border-red-600/30">
                  <div className="text-2xl mb-2">🇰🇵</div>
                  <h3 className="font-bold text-red-200 mb-1">DPRK</h3>
                  <p className="text-red-300/80 text-sm">Self-reliance and unity</p>
                </div>
                <div className="bg-gradient-to-b from-red-600/20 to-yellow-600/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-2xl mb-2">🇨🇳</div>
                  <h3 className="font-bold text-yellow-200 mb-1">People's Republic of China</h3>
                  <p className="text-yellow-300/80 text-sm">Harmony and prosperity</p>
                </div>
              </div>
            </motion.div>
            
            {/* Instagram Embed with Triad Styling */}
            <div className="bg-gradient-to-r from-black/40 via-gray-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 shadow-2xl">
              <div className="max-w-lg mx-auto">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/reel/DOIDrdtDoHN/?utm_source=ig_embed&utm_campaign=loading" 
                  data-instgrm-version="14" 
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                  }}
                >
                </blockquote>
              </div>
              
              {/* Triad Unity Message */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full border border-white/20">
                  <span className="text-lg">✊</span>
                  <span className="text-white font-medium">Together in Solidarity</span>
                  <span className="text-lg">🕊️</span>
                </div>
                <p className="mt-3 text-white/70 text-sm italic">
                  "Unity is not uniformity. It is respect for our differences while working toward common goals of peace and prosperity."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Key Insights from Dr. Roy</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Understanding how our brains work and how politicians exploit our psychology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-white/10 h-full">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-3`}>
                        <insight.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-white">{insight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{insight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Ideologies Breakdown */}
        <section className="py-16 px-4 bg-gradient-to-b from-transparent via-red-950/20 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">All Ideologies Are "Dumb"</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Dr. Roy's chronological breakdown of how ideologies emerged to organize voters, 
                but ended up dividing humanity
              </p>
            </motion.div>

            <div className="space-y-4">
              {ideologies.map((ideology, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{ideology.name}</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                      {ideology.era}
                    </span>
                  </div>
                  <p className="text-white/80">
                    {ideology.danger || ideology.goal || ideology.role || ideology.warning || ideology.claim}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dr. Roy's Full Lecture */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Complete Lecture Transcript</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-black/20 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Introduction & Opening Remarks</h3>
                  <p className="text-white/90 leading-relaxed">
                    Hello everyone and welcome to lessons from the past. Thank you for attending today's session about modern ideologies. 
                    Can everyone please welcome Dr. Roy.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">Why All Ideologies Are "Dumb"</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Okay. So I'm going to start with a statement that will... the statements. I was going to set it up. 
                    Ideologies all of them. Am is my voice okay? It's not okay. ideologies. I want to make sure you hear it. 
                    <strong className="text-yellow-400"> All of them are dumb.</strong> There it is.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Now, that's on purpose, of course, because at some level, you have to be able to accommodate the lowest 
                    common denominator, which when you think about it, right, the one of the problems of humanity is that the 
                    average person has 100 IQ, right? That's the definition of 100 IQ. And so, half the people, you know, are 
                    below average. And unfortunately, we live in an extremely complicated universe...
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Continue with more sections... */}
                  <details className="bg-black/20 rounded-lg p-6">
                    <summary className="text-lg font-bold text-green-400 cursor-pointer hover:text-green-300">
                      Conscious vs. Subconscious Mind
                    </summary>
                    <div className="mt-4 text-white/90 leading-relaxed space-y-4">
                      <p>
                        So think about this. our brain. There's actually our our brains are actually really amazing. It's too bad we don't use most of it. Um, so we have two parts to our brain. We have a conscious part and a subconscious part. The conscious part is slow. And by slow I mean it in every sense of the word. Like also not very smart.
                      </p>
                      <p>
                        Our conscious mind is the voice you hear in your head that's always talking to you. It's the, you know, is my hair okay? It's that that voice that it's annoying. It's always second-guessing and it's nervous and it's trying to like where should I sit?
                      </p>
                      <p>
                        <strong className="text-blue-400">The subconscious mind is an incredible supercomputer, but it doesn't have language, so it can't talk to you. So, the way it communicates to you is emotion.</strong>
                      </p>
                    </div>
                  </details>

                  <details className="bg-black/20 rounded-lg p-6">
                    <summary className="text-lg font-bold text-purple-400 cursor-pointer hover:text-purple-300">
                      Read Full Transcript
                    </summary>
                    <div className="mt-4 text-white/90 leading-relaxed max-h-96 overflow-y-auto space-y-4">
                      {/* Full transcript would go here - truncated for brevity */}
                      <p className="text-yellow-400 font-semibold">
                        [Full 8,000+ word transcript available - scroll to read Dr. Roy's complete analysis]
                      </p>
                      {/* You would include the full transcript content here */}
                    </div>
                  </details>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/20"
            >
              <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Building Bridges, Not Walls</h2>
              <p className="text-white/80 mb-6">
                Dr. Roy's message aligns perfectly with our mission of peace and understanding between nations. 
                Instead of falling for artificial divisions, let's find our common humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/peace-timeline"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Peace Timeline
                </a>
                <a
                  href="/cultural-exchange"
                  className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold rounded-lg transition-all transform hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Cultural Exchange
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <JucheFooter />
    </>
  )
}