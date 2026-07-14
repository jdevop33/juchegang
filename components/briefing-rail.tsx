"use client"

import { useEffect, useState } from "react"

interface RailSection {
  id: string
  label: string
}

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 48) || "section"
  )
}

/**
 * Self-wiring reading rail for long document briefings.
 * Scans the page's <article> for h2 headings, assigns anchor ids,
 * tracks the active section with an IntersectionObserver, and shows
 * reading time plus a print affordance. Renders nothing below xl.
 */
export function BriefingRail() {
  const [sections, setSections] = useState<RailSection[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [minutes, setMinutes] = useState<number>(0)

  useEffect(() => {
    const article = document.querySelector("article")
    if (!article) return

    const words = (article.textContent || "").trim().split(/\s+/).length
    setMinutes(Math.max(1, Math.round(words / 220)))

    const headings = Array.from(article.querySelectorAll("h2"))
    const seen = new Set<string>()
    const items: RailSection[] = headings.map((h, i) => {
      // Strip classification/serial prefixes for a compact label
      const raw = (h.textContent || `Section ${i + 1}`)
        .replace(/^\s*\(U\)\s*/, "")
        .replace(/^§?\d+\s*/, "")
        .trim()
      let id = h.id || slugify(raw)
      while (seen.has(id)) id = `${id}-${i}`
      seen.add(id)
      if (!h.id) h.id = id
      return { id, label: raw }
    })
    setSections(items)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (sections.length < 3) return null

  const jumpTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    history.replaceState(null, "", `#${id}`)
  }

  return (
    <nav
      aria-label="Sections"
      className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30 w-[230px] max-h-[70vh] overflow-y-auto"
    >
      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream-muted/70 mb-3">
        {minutes} min read
      </p>
      <ul className="border-l border-river-current/50">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => jumpTo(s.id)}
              className={`block w-full text-left text-[12px] leading-snug py-1.5 pl-4 -ml-px border-l transition-colors duration-200 ${
                activeId === s.id
                  ? "border-sovereign-gold text-sovereign-gold"
                  : "border-transparent text-cream-muted/70 hover:text-cream"
              }`}
            >
              <span className="line-clamp-2">{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => window.print()}
        className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-cream-muted/70 hover:text-sovereign-gold transition-colors"
      >
        Print / Save PDF
      </button>
    </nav>
  )
}
