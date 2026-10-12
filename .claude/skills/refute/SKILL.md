---
name: refute
description: Counter-narrative analysis for juche.org. Takes a mainstream media article about the DPRK/Korea, reads it straight with deep-reading-analyst first, and only when anonymous, editorial or circular claims (grades D-F) dominate does it trace the source chain, set what each government said beside the independent record, and output a publishable "Source vs. Spin" rebuttal. NOT for NPSI / npsi.ca.
---

# /refute — Source vs. Spin Counter-Narrative Engine

Takes a mainstream media article and produces a structured, evidence-based rebuttal by comparing what was reported against what primary sources actually say. When the reporting holds up, it says so and writes no rebuttal.

## When to Use

- An MSM article makes claims about the DPRK that misrepresent or lack primary sources
- You want to expose circular reporting (outlets quoting each other as "confirmation")
- You need a side-by-side comparison of narrative vs. reality
- You want to document the opinion-laundering pipeline for a specific story

Not for NPSI / npsi.ca work. NPSI reads Korean primary sources through npsi-korean-translation and takes no advocacy position.

## How to Invoke

Paste an article URL or text and say `/refute` or "refute this".

## Analysis Pipeline

### Phase 1: Read It Straight (deep-reading-analyst)

Before anything else, run the `deep-reading-analyst` skill on the article at Deep level. It steelmans the author, grades every claim, maps the source chain, and runs competing hypotheses and inversion (what would make each claim false?). Keep its grades; this skill does not re-grade:

- `A` Verified Fact · `B` Supported Inference · `C` Expert Opinion
- `D` Anonymous Source (and claims stated as fact with no source at all, marked UNSOURCED)
- `E` Editorial Framing · `F` Circular Citation

**The gate.** Count the load-bearing claims, the ones the headline and the lede rest on. Go on to Phase 2 only when more than half of them are graded D, E or F. Otherwise the reporting holds up: the verdict is **Sound**. Hand over deep-reading-analyst's analysis, add any missing context as a note, and stop. Do not write or publish a rebuttal.

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

### Phase 3: Find the Primary Record

Search the primary sources on this topic and keep two separate lists.

**What each government said** (its own words, labelled as its claim):
- KCNA statements
- Rodong Sinmun articles
- Official statements from every government involved
- Historical context from the Korean perspective, labelled as that perspective

**What the independent record shows**:
- Actual text of treaties, agreements, or laws referenced
- Documents, imagery, UN Panel of Experts reports, court records, data

A KCNA or Blue House statement is primary evidence of what that government said, not of what happened. Grade it on the same scale as the article.

If no primary source exists on this specific topic, state that clearly — don't fabricate one. Instead, note what context is missing.

### Phase 4: Identify What's Missing

Document what the article omits (state the omission; do not guess why):
- Historical context (what provoked the action/statement?)
- The other side's stated position (in their own words)
- Relevant actions by every party that preceded the event
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
- **Evidence grade**: [A-F, from Phase 1; D marked UNSOURCED where no source is given]
- **What the government said**: [KCNA/official, labelled as that government's claim]
- **What the independent record shows**: [documents, imagery, UN Panel of Experts, court records, data — or "no independent record"]
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

[Each government's statements with dates and full context, labelled as its claims; then the independent record, or "no independent record"]

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

3. **Be precise with language.** Don't say "they lied" — say "this claim is graded D (UNSOURCED) because no source is cited." Let the evidence speak.

4. **Distinguish levels of bad reporting.** Not every MSM article is wrong, and not every wrong one is propaganda. Some hold up (sound), some are lazy (missing context), some are biased (selective framing), some rest on sources that turn out not to exist (fabricated). Grade accordingly.

5. **Always provide the primary source in full context.** Don't cherry-pick KCNA quotes either. If we criticize them for it, we can't do it ourselves.

6. **Date everything.** Claims without dates are claims without context.

7. **Critique the article, never impute motive to the named journalist.** The grades describe the reporting, not the person who wrote it.

## Credibility Tiers for MSM Articles

| Tier | Description | Response |
|------|-------------|----------|
| **Sound** | The reporting holds up: grades A-C carry the load-bearing claims | Say so and do not publish a rebuttal |
| **Lazy** | Missing context, incomplete reporting, no primary sources consulted | Provide the missing context |
| **Biased** | Selective framing, loaded language, but factual core is present | Reframe with full context |
| **Circular** | Multiple outlets citing each other as confirmation of a single source | Expose the source chain |
| **Unverified** | Load-bearing claims rest on anonymous sources only, or on no source at all | Document what is and is not sourced |
| **Fabricated** | A cited source or quote is shown not to exist | Document the evidence that it does not exist |
| **Propaganda** | Deliberately deceptive framing, with evidence of intent (shown, not inferred from the framing); without that evidence the tier is Biased | Full deconstruction with evidence |

Sound is decided at the Phase 1 gate. Every other tier applies only after the gate, when D-F grades dominate.
