---
name: living-record
description: Fact-check published reports, generate correction entries, and update living documents. Use when asked to verify claims, run a review cycle, check accuracy, or manage corrections for juche.org content.
---

# Living Record — Fact-Check & Corrections Engine

Systematically verifies every claim in a published 주체강 report, generates correction entries, and updates living documents with full transparency.

## When to Use

- "fact-check" / "verify" / "check the report"
- "Sunday review" / "weekly review" / "review cycle"
- "corrections" / "correction feed" / "what did we get wrong"
- "living document" / "update the report"
- Any reference to checking accuracy of published 주체강 content

## Workflow

### Phase 1: IDENTIFY

Ask or determine:
- Which report? (or "all published reports")
- Full review or specific section?
- Any reader-flagged errors to investigate?

Load the report content from `app/briefings/[slug]/` or from a provided file.

### Phase 2: EXTRACT

Parse the report and extract every verifiable claim:
- Named statistics (dollar amounts, percentages, counts, dates)
- Named sources (who said what, which institution published what)
- Temporal claims (when something happened)
- Causal claims (X caused Y)
- Quotes (verbatim accuracy and context)

Output a numbered checklist.

### Phase 3: VERIFY

For each claim, web search and cross-reference against at least two sources. Categorize:

- **CONFIRMED** — Matches current best available information
- **STALE** — Accurate at publication but new data exists
- **ERROR** — Does not match available evidence
- **EVOLVING** — Situation actively changing
- **UNVERIFIABLE** — Cannot confirm or deny

### Phase 4: LOG

For claims that aren't CONFIRMED, generate a correction entry matching this format:

```
{
  date: "YYYY-MM-DD",
  report: "Report Title",
  reportUrl: "/briefings/slug",
  section: "Section Name",
  claim: "The specific claim as written",
  type: "CORRECTION | UPDATE | CLARIFICATION | DECLASSIFIED | RETRACTION",
  previous: "What the report says",
  updated: "What it should say",
  reason: "Why, with evidence",
  source: "Citation or URL"
}
```

Add entries to `data/corrections.ts`.

### Phase 5: APPLY

With approval:
1. Edit the briefing content component with corrected text
2. Update the `LivingDocumentBadge` date in the briefing's `page.tsx`
3. Run `npm run build` to verify

### Phase 6: COMMUNICATE

If corrections are material, draft a transparency note:
- What changed and why
- Link to /corrections
- Framed as strength, not weakness

## Correction Types

| Code | Type | Color | When |
|------|------|-------|------|
| COR | CORRECTION | #c73032 | We got a fact wrong |
| UPD | UPDATE | #d4a74a | New information changes context |
| CLR | CLARIFICATION | #1b4965 | Original accurate but could mislead |
| DCL | DECLASSIFIED | #2d6a4f | New source material released |
| RET | RETRACTION | #666666 | Cannot verify, removed |

## Editorial Standards

### What Counts as an Error
- A wrong number, date, or quote
- A misattributed or out-of-context quote
- A causal claim disproven by new evidence
- A source that retracted its original publication

### What Does NOT Count as an Error
- A perspective someone disagrees with
- An analysis reaching a different conclusion
- A prediction that hasn't come true yet (label as prediction)
- A figure accurate at publication but since updated (this is an UPDATE)

### The Moving Goalposts Principle

Distinguish between:
- "We were wrong" → CORRECTION
- "The situation changed" → UPDATE
- "New information emerged" → DECLASSIFIED

This distinction is critical for credibility.

## Sourcing Requirements

- Every statistic requires at least ONE verifiable source
- Critical claims (casualties, financial data) require TWO sources
- Quotes must be verbatim from named, linkable sources
- Unsourceable claims must be labeled as analysis/opinion

## Preferred Verification Sources

- Conflict: OHCHR, UNHCR, Brown University Costs of War
- Economic: World Bank, IMF, Bloomberg
- Energy: IEA, OPEC, QatarEnergy, Aramco filings
- Korea: KEIA, Asan Forum, Gallup Korea, Pew Research
- Legal: ICJ rulings, ICC statements, CRS reports
- Historical: National Security Archive (GWU), declassified.gov
- Military: IISS, SIPRI, CRS, RAND

## Key Files

- `data/corrections.ts` — correction entries database
- `types/corrections.ts` — TypeScript types and color constants
- `components/living-document-badge.tsx` — verified badge for briefings
- `app/corrections/` — public corrections page
