"use client"

import { useState } from "react"
import Link from "next/link"
import { corrections } from "@/data/corrections"
import {
  CORRECTION_COLORS,
  CORRECTION_LABELS,
  type CorrectionType,
} from "@/types/corrections"
import { History, FileWarning } from "lucide-react"

const ALL_TYPES: CorrectionType[] = [
  "CORRECTION",
  "UPDATE",
  "CLARIFICATION",
  "DECLASSIFIED",
  "RETRACTION",
]

const TYPE_CODES: Record<CorrectionType, string> = {
  CORRECTION: "COR",
  UPDATE: "UPD",
  CLARIFICATION: "CLR",
  DECLASSIFIED: "DCL",
  RETRACTION: "RET",
}

export function CorrectionsContent() {
  const [activeFilter, setActiveFilter] = useState<CorrectionType | "ALL">(
    "ALL"
  )

  const filtered =
    activeFilter === "ALL"
      ? corrections
      : corrections.filter((c) => c.type === activeFilter)

  const counts = ALL_TYPES.reduce(
    (acc, type) => {
      acc[type] = corrections.filter((c) => c.type === type).length
      return acc
    },
    {} as Record<CorrectionType, number>
  )

  return (
    <article className="pt-20 sm:pt-24 min-h-[90vh]">
      
      {/* Header */}
      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-korean-red/30 bg-korean-red/10 backdrop-blur-md mb-6">
            <FileWarning className="w-4 h-4 text-korean-red" />
            <span className="text-xs font-mono tracking-widest text-korean-red uppercase">
              Editorial Transparency
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold mb-6 text-cream tracking-tight">
            Corrections <br className="hidden sm:block" />&amp; Updates
          </h1>
          <p className="text-cream/60 text-xl leading-relaxed max-w-[640px] font-light">
            We are not perfect and we get it wrong. This page is our public
            record of every correction, update, and clarification across all
            published reports.
          </p>
        </div>

        {/* Disclaimer / Double Bezel Card */}
        <div className="p-px rounded-xl bg-gradient-to-b from-sovereign-gold/30 to-transparent mb-16">
          <div className="bg-[#0a1521] border border-cream/5 rounded-[11px] p-6 sm:p-8">
            <p className="text-[15px] text-cream/70 leading-relaxed">
              This report archive is a living document published by <strong className="text-cream font-medium">주체강</strong>. We
              research and cross-correlate publicly available sources from around
              the world and distill our best effort at objective analysis. The fog
              of war is real. Moving goalposts are real. Declassification changes
              what we know. Each week we comb through our published reports, verify
              claims against new information, and make corrections where due.
              Found an error?{" "}
              <Link
                href="/contact"
                className="text-sovereign-gold hover:text-korean-red underline underline-offset-4 decoration-sovereign-gold/30 transition-colors font-medium"
              >
                Tell us
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Type Legend & Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveFilter("ALL")}
            className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all font-bold ${
              activeFilter === "ALL"
                ? "bg-cream/10 text-cream border border-cream/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                : "bg-[#0a1521] text-cream/40 border border-cream/10 hover:border-cream/30 hover:text-cream"
            }`}
          >
            ALL ({corrections.length})
          </button>
          {ALL_TYPES.map((type) => {
            const isActive = activeFilter === type;
            const color = CORRECTION_COLORS[type];
            return (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all font-bold ${
                  isActive
                    ? "border"
                    : "bg-[#0a1521] border border-cream/10 hover:border-cream/30"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: `${color}20`,
                        borderColor: `${color}60`,
                        color: color,
                        boxShadow: `0 0 15px ${color}20`
                      }
                    : { color: color }
                }
              >
                {TYPE_CODES[type]} ({counts[type]})
              </button>
            )
          })}
        </div>

        {/* Type Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 p-6 rounded-xl border border-cream/5 bg-[#0a1521]/50">
          {ALL_TYPES.map((type) => (
            <div
              key={type}
              className="flex items-center gap-2 text-xs text-cream/60"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: CORRECTION_COLORS[type], boxShadow: `0 0 8px ${CORRECTION_COLORS[type]}80` }}
              />
              <span className="font-mono font-bold" style={{ color: CORRECTION_COLORS[type] }}>
                {TYPE_CODES[type]}
              </span>
            </div>
          ))}
        </div>

        {/* Entries */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-sovereign-gold/50 via-cream/10 to-transparent" />

          <div className="space-y-10">
            {filtered.map((entry, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-8 group">
                {/* Timeline dot */}
                <div
                  className="relative z-10 w-[31px] h-[31px] rounded-full border-4 flex-shrink-0 mt-1 transition-transform group-hover:scale-110"
                  style={{
                    borderColor: '#050a10',
                    backgroundColor: CORRECTION_COLORS[entry.type],
                    boxShadow: `0 0 15px ${CORRECTION_COLORS[entry.type]}40`
                  }}
                >
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{
                      backgroundColor: '#050a10',
                    }}
                  />
                  <div
                    className="absolute inset-[6px] rounded-full"
                    style={{
                      backgroundColor: CORRECTION_COLORS[entry.type],
                    }}
                  />
                </div>

                {/* Entry card */}
                <div className="flex-1 p-px rounded-xl bg-gradient-to-b from-cream/10 to-transparent transition-all group-hover:from-cream/20">
                  <div className="bg-[#0a1521] border border-cream/5 rounded-[11px] p-6">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className="px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider"
                        style={{
                          backgroundColor: `${CORRECTION_COLORS[entry.type]}15`,
                          color: CORRECTION_COLORS[entry.type],
                          border: `1px solid ${CORRECTION_COLORS[entry.type]}30`
                        }}
                      >
                        {TYPE_CODES[entry.type]}
                      </span>
                      <span className="text-sm font-mono text-cream/40 flex items-center gap-2">
                        <History className="w-3.5 h-3.5" />
                        {entry.date}
                      </span>
                      <div className="h-4 w-px bg-cream/10" />
                      <Link
                        href={entry.reportUrl}
                        className="text-sm font-bold text-sovereign-gold hover:text-cream transition-colors"
                      >
                        {entry.report}
                      </Link>
                      <span className="text-xs text-cream/40 uppercase tracking-widest font-mono">
                        {entry.section}
                      </span>
                    </div>

                    {/* Diff */}
                    <div className="space-y-3 mb-5 p-4 rounded-lg bg-[#050a10] border border-cream/5 font-mono text-sm">
                      <div className="flex gap-3">
                        <span className="text-korean-red/70 font-bold select-none">&minus;</span>
                        <span className="text-cream/50 line-through decoration-korean-red/40">
                          {entry.previous}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-[#4ade80]/70 font-bold select-none">+</span>
                        <span className="text-cream/90">{entry.updated}</span>
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="mb-4">
                      <p className="text-sm text-cream/70 leading-relaxed font-serif italic border-l-2 border-cream/10 pl-3">
                        {entry.reason}
                      </p>
                    </div>

                    {/* Source */}
                    <div className="flex items-center gap-2 text-[10px] text-cream/30 uppercase tracking-widest font-mono pt-4 border-t border-cream/5">
                      <span>Source:</span>
                      <span className="text-cream/50">{entry.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24 border border-dashed border-cream/10 rounded-xl mt-8">
            <History className="w-8 h-8 text-cream/20 mx-auto mb-4" />
            <p className="text-cream/50 font-mono text-sm tracking-widest uppercase">
              No {activeFilter.toLowerCase()} entries found.
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
