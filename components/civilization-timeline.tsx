"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { civilizations, sortOptions, getCivAge, getStateAge, formatYear, formatGDP } from "@/data/civilizations"
import type { SortKey } from "@/types/civilization"

export function CivilizationTimeline() {
  const [sortBy, setSortBy] = useState<SortKey>("civAge")
  const [expanded, setExpanded] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const sorted = useMemo(() => {
    const arr = [...civilizations]
    switch (sortBy) {
      case "civAge": return arr.sort((a, b) => a.civYear - b.civYear)
      case "stateAge": return arr.sort((a, b) => a.stateYear - b.stateYear)
      case "gdp": return arr.sort((a, b) => b.gdp - a.gdp)
      case "youngest": return arr.sort((a, b) => b.civYear - a.civYear)
      default: return arr
    }
  }, [sortBy])

  const maxCivAge = Math.max(...civilizations.map(c => getCivAge(c.civYear)))

  return (
    <section className="min-h-[100dvh] bg-river-depths text-cream py-20 md:py-32 px-4 md:px-8 selection:bg-sovereign-gold/30">
      {/* Header */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="text-center mb-16 md:mb-24"
      >
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          주체강 · Navigate the Current
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
          How Old Is Your Country, Really?
        </h1>
        <p className="text-xl md:text-2xl text-cream-muted max-w-3xl mx-auto leading-relaxed">
          Civilization age versus nation-state age. The gap between the two tells you who built the world and who showed up yesterday.
        </p>
      </motion.div>

      {/* Sort Controls */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
        className="flex flex-wrap gap-2 justify-center mb-16"
      >
        <div className="p-1 rounded-2xl bg-white/5 border border-white/10 inline-flex">
          {sortOptions.map(opt => (
            <button
              key={opt.key}
              onClick={() => setSortBy(opt.key)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer",
                sortBy === opt.key
                  ? "bg-river-deep text-sovereign-gold shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5"
                  : "text-cream-muted hover:text-cream border border-transparent"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-3">
        {sorted.map((civ, i) => {
          const civAge = getCivAge(civ.civYear)
          const stateAge = getStateAge(civ.stateYear)
          const barWidth = (civAge / maxCivAge) * 100
          const stateBarWidth = Math.max((stateAge / maxCivAge) * 100, 0.5)
          const isExpanded = expanded === civ.name

          return (
            <motion.div
              key={civ.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : Math.min(i * 0.05, 0.8),
                ease: [0.32, 0.72, 0, 1]
              }}
              onClick={() => setExpanded(isExpanded ? null : civ.name)}
              className={cn(
                "p-1.5 rounded-[2rem] border transition-all duration-500 cursor-pointer overflow-hidden",
                isExpanded
                  ? "bg-sovereign-gold/10 border-sovereign-gold/30"
                  : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
              )}
            >
              <div className="bg-river-depths rounded-[calc(2rem-0.375rem)] p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                      {civ.flag}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cream tracking-tight mb-1">
                        {civ.name}
                      </div>
                      <div className="text-xs text-cream-muted uppercase tracking-[0.2em]">
                        Civ: {formatYear(civ.civYear)} · State: {formatYear(civ.stateYear)}
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-sovereign-gold tracking-tight mb-1">
                      {civAge.toLocaleString()} yrs
                    </div>
                    <div className="text-xs text-cream-muted uppercase tracking-[0.2em]">
                      {formatGDP(civ.gdp)} · #{civ.gdpRank}
                    </div>
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream-muted w-24 text-right flex-shrink-0">
                      Civilization
                    </span>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-sovereign-gold/50 to-sovereign-gold"
                        initial={{ width: 0 }}
                        animate={{ width: `${barWidth}%` }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.32, 0.72, 0, 1] }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream-muted w-24 text-right flex-shrink-0">
                      Nation-State
                    </span>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full rounded-full bg-korean-red"
                        initial={{ width: 0 }}
                        animate={{ width: `${stateBarWidth}%` }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.3, ease: [0.32, 0.72, 0, 1] }}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded note */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-lg text-cream-muted leading-relaxed mb-6">
                          {civ.note}
                        </p>
                        <div className="flex flex-wrap gap-4 text-[10px] text-cream-muted uppercase tracking-[0.2em] font-medium">
                          <span className="px-3 py-1.5 rounded-md bg-sovereign-gold/10 text-sovereign-gold border border-sovereign-gold/20">
                            Civ Age: {civAge.toLocaleString()} years
                          </span>
                          <span className="px-3 py-1.5 rounded-md bg-korean-red/10 text-korean-red border border-korean-red/20">
                            State Age: {stateAge.toLocaleString()} years
                          </span>
                          <span className="px-3 py-1.5 rounded-md bg-white/5 text-cream border border-white/10">
                            GDP: {formatGDP(civ.gdp)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom insight */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="max-w-4xl mx-auto mt-24 p-1.5 rounded-[2.5rem] bg-white/5 border border-white/10"
      >
        <div className="bg-river-deep rounded-[calc(2.5rem-0.375rem)] p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-center">
          <h2 className="text-2xl font-bold tracking-tight text-sovereign-gold mb-6">
            The Pattern
          </h2>
          <p className="text-xl text-cream-muted leading-relaxed max-w-2xl mx-auto">
            The wealthiest nation on Earth is 250 years old. The civilizations it lectures about democracy and governance are 3,000 to 5,000 years old. South Korea — whose military the US still commands in wartime — has been a civilization for 4,359 years. The nation cutting it in half hasn&apos;t existed for 3% of that time.
          </p>
        </div>
      </motion.div>

      <p className="text-center mt-12 text-[10px] text-cream/40 uppercase tracking-[0.2em] font-medium">
        Tap any country for details · GDP figures approximate (2025 nominal, USD) · Civilization dates use earliest documented culture
      </p>
    </section>
  )
}
