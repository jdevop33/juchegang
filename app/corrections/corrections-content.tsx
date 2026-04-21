"use client"

import { useState } from "react"
import Link from "next/link"
import { corrections } from "@/data/corrections"
import {
  CORRECTION_COLORS,
  CORRECTION_LABELS,
  type CorrectionType,
} from "@/types/corrections"

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
    <article className="pt-20 sm:pt-24">
      {/* Header */}
      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-sovereign-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Editorial Transparency
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Corrections &amp; Updates
          </h1>
          <p className="text-cream-muted text-lg leading-relaxed max-w-[640px]">
            We are not perfect and we get it wrong. This page is our public
            record of every correction, update, and clarification across all
            published reports.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-river-deep border-l-[3px] border-sovereign-gold rounded-r px-6 py-5 mb-12">
          <p className="text-[15px] text-cream-muted leading-relaxed">
            This report archive is a living document published by 주체강. We
            research and cross-correlate publicly available sources from around
            the world and distill our best effort at objective analysis. The fog
            of war is real. Moving goalposts are real. Declassification changes
            what we know. Each week we comb through our published reports, verify
            claims against new information, and make corrections where due.
            Found an error?{" "}
            <Link
              href="/contact"
              className="text-sovereign-gold hover:underline underline-offset-4"
            >
              Tell us
            </Link>
            .
          </p>
        </div>

        {/* Type Legend & Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveFilter("ALL")}
            className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
              activeFilter === "ALL"
                ? "bg-cream/10 text-cream border border-cream/30"
                : "bg-river-deep text-cream-muted border border-river-current/40 hover:border-cream-muted/40"
            }`}
          >
            ALL ({corrections.length})
          </button>
          {ALL_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                activeFilter === type
                  ? "text-cream border"
                  : "bg-river-deep border border-river-current/40 hover:border-cream-muted/40"
              }`}
              style={
                activeFilter === type
                  ? {
                      backgroundColor: `${CORRECTION_COLORS[type]}20`,
                      borderColor: `${CORRECTION_COLORS[type]}60`,
                      color: CORRECTION_COLORS[type],
                    }
                  : { color: CORRECTION_COLORS[type] }
              }
            >
              {TYPE_CODES[type]} ({counts[type]})
            </button>
          ))}
        </div>

        {/* Type Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {ALL_TYPES.map((type) => (
            <div
              key={type}
              className="flex items-center gap-3 text-xs text-cream-muted"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: CORRECTION_COLORS[type] }}
              />
              <span className="font-mono" style={{ color: CORRECTION_COLORS[type] }}>
                {TYPE_CODES[type]}
              </span>
              <span>{CORRECTION_LABELS[type]}</span>
            </div>
          ))}
        </div>

        {/* Entries */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-sovereign-gold via-river-current to-river-depths" />

          <div className="space-y-8">
            {filtered.map((entry, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div
                  className="relative z-10 w-[23px] h-[23px] rounded-full border-2 flex-shrink-0 mt-1"
                  style={{
                    borderColor: CORRECTION_COLORS[entry.type],
                    backgroundColor: "#0d1b2a",
                  }}
                >
                  <div
                    className="absolute inset-[4px] rounded-full"
                    style={{
                      backgroundColor: CORRECTION_COLORS[entry.type],
                    }}
                  />
                </div>

                {/* Entry card */}
                <div className="flex-1 bg-river-deep/60 border border-river-current/40 rounded px-5 py-4">
                  {/* Header row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: `${CORRECTION_COLORS[entry.type]}20`,
                        color: CORRECTION_COLORS[entry.type],
                      }}
                    >
                      {TYPE_CODES[entry.type]}
                    </span>
                    <span className="text-xs font-mono text-cream-muted/60">
                      {entry.date}
                    </span>
                    <Link
                      href={entry.reportUrl}
                      className="text-xs text-sovereign-gold hover:underline underline-offset-2"
                    >
                      {entry.report}
                    </Link>
                    <span className="text-xs text-cream-muted/40">
                      &middot; {entry.section}
                    </span>
                  </div>

                  {/* Diff */}
                  <div className="space-y-2 mb-3">
                    <div className="flex gap-2 text-sm">
                      <span className="text-korean-red font-mono text-xs mt-0.5 flex-shrink-0">
                        &minus;
                      </span>
                      <span className="text-cream-muted/70 line-through decoration-korean-red/40">
                        {entry.previous}
                      </span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-[#2d6a4f] font-mono text-xs mt-0.5 flex-shrink-0">
                        +
                      </span>
                      <span className="text-cream">{entry.updated}</span>
                    </div>
                  </div>

                  {/* Reason */}
                  <p className="text-xs text-cream-muted leading-relaxed">
                    {entry.reason}
                  </p>

                  {/* Source */}
                  <p className="text-[10px] text-cream-muted/40 mt-2 font-mono">
                    Source: {entry.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-cream-muted">
            No {activeFilter.toLowerCase()} entries found.
          </div>
        )}
      </div>
    </article>
  )
}
