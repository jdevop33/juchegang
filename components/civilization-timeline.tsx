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
    <section className="min-h-screen bg-gradient-to-b from-[#0a0e17] via-river-depths to-river-current py-12 sm:py-16 px-4 sm:px-6">

      {/* Header */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        className="text-center mb-10 sm:mb-14"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sovereign-gold/60 mb-3 font-body">
          주체강 · Navigate the Current
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-river-mist mb-4 leading-tight">
          How Old Is Your Country, Really?
        </h1>
        <p className="text-cream-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-body">
          Civilization age versus nation-state age. The gap between the two tells you who built the world and who showed up yesterday.
        </p>
      </motion.div>

      {/* Sort Controls */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
        className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-10"
      >
        {sortOptions.map(opt => (
          <button
            key={opt.key}
            onClick={() => setSortBy(opt.key)}
            className={cn(
              "px-4 py-2 rounded-lg text-xs sm:text-sm font-body transition-all duration-300 cursor-pointer",
              sortBy === opt.key
                ? "border border-sovereign-gold bg-sovereign-gold/15 text-sovereign-gold"
                : "border border-cream-muted/20 bg-white/[0.03] text-cream-muted hover:border-sovereign-gold/40 hover:text-sovereign-gold/80"
            )}
          >
            {opt.label}
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="max-w-3xl mx-auto space-y-2">
        {sorted.map((civ, i) => {
          const civAge = getCivAge(civ.civYear)
          const stateAge = getStateAge(civ.stateYear)
          const barWidth = (civAge / maxCivAge) * 100
          const stateBarWidth = Math.max((stateAge / maxCivAge) * 100, 0.5)
          const isExpanded = expanded === civ.name

          return (
            <motion.div
              key={civ.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : Math.min(i * 0.04, 0.8),
              }}
              onClick={() => setExpanded(isExpanded ? null : civ.name)}
              className={cn(
                "rounded-xl p-4 cursor-pointer transition-all duration-300",
                isExpanded
                  ? "bg-gradient-to-br from-sovereign-gold/[0.08] to-river-current/15 border border-sovereign-gold/30"
                  : "bg-white/[0.03] border border-white/5 hover:border-sovereign-gold/20 hover:bg-white/[0.05]"
              )}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl">{civ.flag}</span>
                  <div>
                    <div className="text-sm sm:text-base font-heading font-bold text-river-mist">
                      {civ.name}
                    </div>
                    <div className="text-[11px] sm:text-xs text-cream-muted font-body">
                      Civ: {formatYear(civ.civYear)} · State: {formatYear(civ.stateYear)}
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-sm sm:text-base font-heading font-bold text-sovereign-gold">
                    {civAge.toLocaleString()} yrs
                  </div>
                  <div className="text-[11px] sm:text-xs text-cream-muted font-body">
                    {formatGDP(civ.gdp)} · #{civ.gdpRank}
                  </div>
                </div>
              </div>

              {/* Bars */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] text-cream-muted w-16 text-right flex-shrink-0 font-body">
                    Civilization
                  </span>
                  <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-river-current to-sovereign-gold"
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] text-cream-muted w-16 text-right flex-shrink-0 font-body">
                    Nation-State
                  </span>
                  <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-korean-red"
                      initial={{ width: 0 }}
                      animate={{ width: `${stateBarWidth}%` }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
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
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-sovereign-gold/20">
                      <p className="text-sm text-river-mist/80 leading-relaxed italic font-body">
                        {civ.note}
                      </p>
                      <div className="mt-3 text-[11px] text-cream-muted font-body">
                        Civilization age: <span className="text-sovereign-gold">{civAge.toLocaleString()} years</span> ·{" "}
                        Nation-state age: <span className="text-korean-red">{stateAge.toLocaleString()} years</span> ·{" "}
                        GDP: <span className="text-river-mist">{formatGDP(civ.gdp)}</span> (#{civ.gdpRank} world)
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom insight */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        className="max-w-3xl mx-auto mt-12 sm:mt-16 p-6 bg-sovereign-gold/[0.06] rounded-xl border border-sovereign-gold/15 text-center"
      >
        <h2 className="text-base sm:text-lg font-heading font-bold text-sovereign-gold mb-3">
          The Pattern
        </h2>
        <p className="text-sm sm:text-base text-river-mist/80 leading-relaxed font-body">
          The wealthiest nation on Earth is 250 years old. The civilizations it lectures about democracy and governance are 3,000 to 5,000 years old. South Korea — whose military the US still commands in wartime — has been a civilization for 4,359 years. The nation cutting it in half hasn&apos;t existed for 3% of that time.
        </p>
      </motion.div>

      <p className="text-center mt-8 text-[11px] text-cream-muted/50 font-body">
        Tap any country for details · GDP figures approximate (2025 nominal, USD) · Civilization dates use earliest documented culture
      </p>
    </section>
  )
}
