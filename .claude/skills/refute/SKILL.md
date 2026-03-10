---
name: refute
description: Counter-narrative analysis tool. Takes a mainstream media article about the DPRK/Korea and systematically deconstructs it — tracing the source chain, identifying opinion laundered as fact, and presenting what primary sources actually say. Outputs a publishable "Source vs. Spin" rebuttal.
---

# /refute — Source vs. Spin Counter-Narrative Engine

Takes a mainstream media article and produces a structured, evidence-based rebuttal by comparing what was reported against what primary sources actually say.

## When to Use

- An MSM article makes claims about the DPRK that misrepresent or lack primary sources
- You want to expose circular reporting (outlets quoting each other as "confirmation")
- You need a side-by-side comparison of narrative vs. reality
- You want to document the opinion-laundering pipeline for a specific story

## How to Invoke

Paste an article URL or text and say `/refute` or "refute this".

## Analysis Pipeline

### Phase 1: Deconstruct the Article

Extract every factual claim made in the article. For each claim, identify:

1. **The claim itself** — exact quote
2. **Attribution** — who said it? Named or anonymous?
3. **Evidence type**:
   - `VERIFIED FACT` — independently verifiable, documented
   - `EXPERT OPINION` — one person's interpretation, presented as analysis
   - `ANONYMOUS SOURCE` — "officials say", "sources familiar with"
   - `EDITORIAL FRAMING` — loaded language, adjective choices, implied meaning
   - `CIRCULAR CITATION` — outlet A cites outlet B which cites outlet A or the same original source
   - `UNVERIFIED` — stated as fact with no source at all

### Phase 2: Trace the Source Chain

Map how this story propagated:

```
ORIGIN: [Who first made this claim? Think tank? Single analyst? Anonymous official?]
   ↓
FIRST PICKUP: [Which wire service or outlet first reported it?]
   ↓
AMPLIFICATION: [Who quoted the first pickup? How many outlets?]
   ↓
ECHO CHAMBER: [How many outlets now cite each other as "multiple sources confirm"?]

UNIQUE INDEPENDENT SOURCES: [actual count — usually 1]
```

### Phase 3: Find Primary Source Reality

Search for what the DPRK/Korean primary sources actually said about this topic:
- KCNA statements
- Rodong Sinmun articles
- Official government statements
- Actual text of treaties, agreements, or laws referenced
- Historical context from the Korean perspective

If no primary source exists on this specific topic, state that clearly — don't fabricate one. Instead, note what context is missing.

### Phase 4: Identify What's Missing

Document what the MSM article deliberately or negligently omits:
- Historical context (what provoked the action/statement?)
- The other side's stated position (in their own words)
- Relevant US/allied actions that preceded the event
- Scale/proportion (is this being inflated?)
- Track record (how many similar predictions were wrong?)

### Phase 5: Generate the Rebuttal

## Output Format

```markdown
# Source vs. Spin: [Topic]

**Article**: [Title] — [Publication], [Date]
**Author**: [Name]

---

## The Narrative

> [Key quote from the article that captures the framing]

## Claim-by-Claim Breakdown

### Claim 1: "[exact claim]"
- **Source**: [who said this]
- **Evidence grade**: [VERIFIED/OPINION/ANONYMOUS/EDITORIAL/CIRCULAR/UNVERIFIED]
- **What actually happened**: [primary source or documented reality]
- **What's missing**: [omitted context]

### Claim 2: "[exact claim]"
[same structure]

### Claim 3: "[exact claim]"
[same structure]

---

## Source Chain

| Step | Source | What They Said | Based On |
|------|--------|---------------|----------|
| Origin | [name/org] | [claim] | [their evidence] |
| Wire | [outlet] | [reframing] | [cited origin] |
| Amplifier 1 | [outlet] | [further reframing] | [cited wire] |
| Amplifier 2 | [outlet] | [now "confirmed"] | [cited amplifier 1] |

**Unique independent sources**: [count]
**Total outlets reporting as "confirmed"**: [count]

---

## What the Primary Sources Say

[Actual KCNA/official statements with dates and full context]

---

## Missing Context

1. [Critical context omitted]
2. [Historical precedent ignored]
3. [Proportionality not addressed]

---

## Verdict

[2-3 sentence assessment: How reliable is this article? What is the actual evidence level? What should a reader take away?]

---

*Analysis produced for juche.org — Primary sources over opinion. Evidence over narrative.*
```

## Quality Standards

1. **Never fabricate primary sources.** If we don't have a DPRK source on this topic, say so. The strength of this tool is honesty — we don't need to make things up.

2. **Steelman before attacking.** Present the MSM article's strongest interpretation before dismantling it. This builds credibility.

3. **Be precise with language.** Don't say "they lied" — say "this claim is graded as UNVERIFIED because no primary source is cited." Let the evidence speak.

4. **Distinguish levels of bad reporting.** Not every MSM article is propaganda. Some are lazy (missing context), some are biased (selective framing), some are actively deceptive (fabricated sources). Grade accordingly.

5. **Always provide the primary source in full context.** Don't cherry-pick KCNA quotes either. If we criticize them for it, we can't do it ourselves.

6. **Date everything.** Claims without dates are claims without context.

## Credibility Tiers for MSM Articles

| Tier | Description | Response |
|------|-------------|----------|
| **Lazy** | Missing context, incomplete reporting, no primary sources consulted | Provide the missing context |
| **Biased** | Selective framing, loaded language, but factual core is present | Reframe with full context |
| **Circular** | Multiple outlets citing each other as confirmation of a single source | Expose the source chain |
| **Fabricated** | Claims with no verifiable basis, anonymous sources only | Document the absence of evidence |
| **Propaganda** | Deliberately deceptive framing designed to manufacture consent | Full deconstruction with evidence |
