"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, BookOpen, Globe, Star, ArrowRight, Quote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CountryFlag from "@/components/country-flag"

export function BeyondIdeologyClient() {
  const keyInsights = [
    {
      icon: Brain,
      title: "The Two-Brain System",
      description: "Our conscious mind is slow and thinks it's rational, while our subconscious supercomputer communicates through emotions.",
      color: "from-river-mid to-river-mid"
    },
    {
      icon: Users,
      title: "Fear-Based Politics",
      description: "Politicians discovered that hatred and fear get lazy voters to the voting booth better than reasoned arguments.",
      color: "from-korean-red to-sovereign-gold"
    },
    {
      icon: Globe,
      title: "Artificial Divisions",
      description: "We naturally want to break into groups and be angry at others, even over the most trivial distinctions.",
      color: "from-river-current to-korean-red"
    },
    {
      icon: Heart,
      title: "The Path Forward",
      description: "Show grace, find common ground, and approach disagreements with humility rather than ideology.",
      color: "from-river-mid to-river-current"
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
    <main className="min-h-[100dvh] bg-river-depths">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-river-current/30 text-sovereign-gold rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Truth Project Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cream">
              Beyond Ideology
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              The Psychology of Political Division & The Path to Unity
            </p>
            <div className="bg-river-current/30 rounded-xl p-6 border border-river-current">
              <p className="text-cream/90 italic">
                "Instead of having this thing where we're in factions constantly thinking me against the other guy, 
                why not show a little grace, a little humility, assume you don't know everything and approach all 
                arguments by finding a point of unity."
              </p>
              <p className="text-sovereign-gold mt-3 font-semibold">— Dr. Roy, Political Historian</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JucheGanG Triad Instagram Feature */}
      <section className="py-16 px-4 bg-river-current/20 border-y border-sovereign-gold/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            {/* JucheGanG Triad Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-river-current/30 rounded-full border border-sovereign-gold/30">
                <CountryFlag iso="ru" size={28} className="rounded-sm border border-cream/10" />
                <CountryFlag iso="kp" size={28} className="rounded-sm border border-cream/10" />
                <CountryFlag iso="cn" size={28} className="rounded-sm border border-cream/10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-sovereign-gold">
                  JucheGanG Triad Unity
                </span>
              </h2>
              <p className="text-cream/90 text-lg max-w-2xl mx-auto leading-relaxed">
                Honoring the sovereign bonds of friendship between Russia, the DPRK, and China — 
                three nations united in their pursuit of dignity, independence, and mutual respect.
              </p>
            </div>
            
            {/* Triad Values */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-river-current/30 rounded-lg p-4 border border-korean-red/30">
                <CountryFlag iso="ru" size={24} className="mb-2 rounded-sm border border-cream/10 inline-block" />
                <h3 className="font-bold text-cream mb-1">Russian Federation</h3>
                <p className="text-cream/70 text-sm">Strength through sovereignty</p>
              </div>
              <div className="bg-river-current/30 rounded-lg p-4 border border-korean-red/30">
                <CountryFlag iso="kp" size={24} className="mb-2 rounded-sm border border-cream/10 inline-block" />
                <h3 className="font-bold text-cream mb-1">DPRK</h3>
                <p className="text-cream/70 text-sm">Self-reliance and unity</p>
              </div>
              <div className="bg-river-current/30 rounded-lg p-4 border border-sovereign-gold/30">
                <CountryFlag iso="cn" size={24} className="mb-2 rounded-sm border border-cream/10 inline-block" />
                <h3 className="font-bold text-sovereign-gold mb-1">People's Republic of China</h3>
                <p className="text-sovereign-gold/70 text-sm">Harmony and prosperity</p>
              </div>
            </div>
          </motion.div>
          
          {/* Instagram Embed with Triad Styling */}
          <div className="bg-river-depths/60 backdrop-blur-sm rounded-2xl p-6 border border-sovereign-gold/20 shadow-2xl">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-river-current/30 rounded-full border border-cream/20">
                <span className="text-lg">✊</span>
                <span className="text-cream font-medium">Together in Solidarity</span>
                <span className="text-lg">🕊️</span>
              </div>
              <p className="mt-3 text-cream/70 text-sm italic">
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
            <h2 className="text-3xl font-bold text-cream mb-4">Key Insights from Dr. Roy</h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
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
                <Card className="bg-river-current/30 border-river-current h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-river-current flex items-center justify-center mb-3">
                      <insight.icon className="w-6 h-6 text-sovereign-gold" />
                    </div>
                    <CardTitle className="text-cream">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80">{insight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-river-current/30 rounded-2xl p-8 border border-river-current"
          >
            <Heart className="w-12 h-12 text-sovereign-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-cream mb-4">Building Bridges, Not Walls</h2>
            <p className="text-cream/80 mb-6">
              Dr. Roy's message aligns perfectly with our mission of peace and understanding between nations. 
              Instead of falling for artificial divisions, let's find our common humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/peace-timeline"
                className="inline-flex items-center px-6 py-3 bg-river-current hover:bg-river-current/80 text-cream font-bold rounded-lg transition-all transform hover:scale-105"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Peace Timeline
              </a>
              <a
                href="/cultural-exchange"
                className="inline-flex items-center px-6 py-3 border-2 border-sovereign-gold text-sovereign-gold hover:bg-sovereign-gold hover:text-river-depths font-bold rounded-lg transition-all transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Cultural Exchange
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}