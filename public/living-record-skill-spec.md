# Living Record — Skill Specification
## For review before building with skill-creator
## March 24, 2026

---

## SKILL PURPOSE

Operationalize the weekly fact-checking, corrections, and living document
workflow for all 주체강 published reports. This skill turns any Claude
session into a fact-check engine that can:

1. Systematically verify every claim in a published report
2. Generate correction entries in a standard format
3. Rebuild documents with corrections applied
4. Produce a corrections log page for Juche.org
5. Draft LinkedIn transparency posts about what changed

---

## SKILL NAME

`living-record`

## TRIGGER PHRASES

- "fact-check" / "verify" / "check the report"
- "Sunday review" / "weekly review" / "review cycle"
- "corrections" / "correction feed" / "what did we get wrong"
- "living document" / "update the report"
- "run the checklist" / "verify claims"
- Any reference to checking accuracy of published 주체강 content

---

## THE WORKFLOW (encoded in skill)

### Phase 1: IDENTIFY — What are we checking?

When triggered, the skill asks:
- Which report? (or "all published reports")
- Full review or specific section?
- Any reader-flagged errors to investigate?

Then it loads the report content (from uploaded file, pasted text, or
references to known reports stored in the skill's reference files).

### Phase 2: EXTRACT — Pull every verifiable claim

The skill parses the report and extracts every:
- Named statistic (dollar amounts, percentages, counts, dates)
- Named source (who said what, which institution published what)
- Temporal claim (when something happened)
- Causal claim (X caused Y — is the causal chain still supported?)
- Quote (is the quote accurate and in context?)

Output: A numbered checklist of claims to verify.

### Phase 3: VERIFY — Search and cross-reference

For each extracted claim, the skill:
1. Runs a web search for the current state of that information
2. Cross-references against at least two independent sources
3. Categorizes the finding:
   - ✅ CONFIRMED — Claim matches current best available information
   - ⚠️ STALE — Claim was accurate at publication but new data exists
   - ❌ ERROR — Claim does not match available evidence
   - 🔄 EVOLVING — Situation is actively changing, claim may need updating
   - ❓ UNVERIFIABLE — Cannot confirm or deny from available sources

### Phase 4: LOG — Generate correction entries

For any claim that isn't ✅ CONFIRMED, generate a correction entry:

```
DATE: [today's date]
REPORT: [report name]
SECTION: [which section]
CLAIM: [the specific claim as written]
TYPE: CORRECTION | UPDATE | CLARIFICATION | DECLASSIFIED | RETRACTION
PREVIOUS: [what the report currently says]
UPDATED: [what it should say]
REASON: [why, with source link]
SOURCE: [URL or citation]
```

### Phase 5: APPLY — Update the documents

If corrections are approved by Jesse:
1. Edit the HTML/PDF/DOCX with corrected text
2. Increment version number
3. Update "Last verified" date
4. Archive previous version as dated PDF
5. Add correction entries to the master corrections log

### Phase 6: COMMUNICATE — Draft the transparency post

If corrections are material, draft a LinkedIn post:
- What changed
- Why
- Link to corrections feed
- Framed as strength, not weakness

---

## CORRECTION TYPES (standard across all reports)

| Code | Label | Color | When to use |
|------|-------|-------|-------------|
| COR | CORRECTION | Red #c73032 | We got a fact wrong |
| UPD | UPDATE | Gold #d4a74a | New information changes context |
| CLR | CLARIFICATION | Blue #1b4965 | Original accurate but could mislead |
| DCL | DECLASSIFIED | Green #2d6a4f | New source material released |
| RET | RETRACTION | Grey #666666 | Cannot verify, removed |

---

## EDITORIAL STANDARDS (encoded in skill)

### Sourcing Requirements
- Every named statistic requires at least ONE verifiable source
- Critical claims (casualty figures, financial data) require TWO sources
- Quotes must be verbatim from named, linkable sources
- If a claim cannot be sourced, it must be labeled as analysis/opinion

### What Counts as an Error
- A number that is wrong (wrong figure cited)
- A date that is wrong
- A quote that is misattributed or out of context
- A causal claim that has been disproven by new evidence
- A source that has retracted or corrected its original publication

### What Does NOT Count as an Error
- A perspective someone disagrees with
- An analysis that reaches a different conclusion than another analyst
- A prediction that hasn't come true yet (label as prediction, not fact)
- A figure that was accurate at publication but has since been updated
  (this is an UPDATE, not a CORRECTION — the distinction matters)

### The Moving Goalposts Principle
War zones produce fog. Numbers change. Governments revise. Sources retract.
Declassification reveals what was hidden. The skill must distinguish between:
- "We were wrong" (CORRECTION)
- "The situation changed" (UPDATE)
- "New information emerged" (DECLASSIFIED)

This distinction is critical for credibility. A correction means we failed.
An update means reality moved. Both get logged. Both get published. But
the category tells the reader whether we made a mistake or the world did.

---

## DISCLAIMER TEMPLATES (for reports)

### English (full)
"This report is a living document published by 주체강. We research and
cross-correlate publicly available sources from around the world and
distill our best effort at objective analysis. The fog of war is real.
Moving goalposts are real. Declassification changes what we know. We
are not perfect and we get it wrong. Each week we comb through our
published reports, verify claims against new information, and make
corrections where due. All changes are logged publicly at
juche.org/corrections. Found an error? Tell us."

### English (compact — for LinkedIn PDFs)
"Living document. Updated weekly. Corrections published at
juche.org/corrections."

### Korean
"이 보고서는 주체강이 발행하는 살아있는 문서입니다. 전 세계 공개 자료를
조사하고 교차 검증하여 객관적 분석을 위한 최선의 노력을 담고 있습니다.
전쟁의 안개는 현실입니다. 우리는 완벽하지 않으며 오류가 있을 수 있습니다.
매주 발행된 보고서를 검토하고 새로운 정보에 따라 수정합니다. 모든 변경
사항은 juche.org/corrections에 공개적으로 기록됩니다."

---

## REFERENCE FILES (to include in skill)

### references/published-reports.md
Master list of all published 주체강 reports with:
- Title
- Publish date
- Current version
- URL on Juche.org
- Key claims that need regular verification
- Known time-sensitive data points

### references/correction-log.md
Running log of all corrections made, in the standard entry format.
This file grows over time and serves as the source of truth for
the Juche.org corrections page.

### references/verification-sources.md
Preferred sources for different data types:
- Conflict casualties: OHCHR, UNHCR, Brown University Costs of War
- Economic data: World Bank, IMF, Bloomberg, CNBC
- Energy: IEA, OPEC, QatarEnergy statements, Aramco filings
- Korea: KEIA, Asan Forum, Gallup Korea, Pew Research
- Legal: ICJ rulings, ICC statements, CRS reports
- Historical: National Security Archive (GWU), declassified.gov
- Military: IISS, SIPRI, CRS, RAND

---

## INTEGRATION WITH OTHER SKILLS

```
User says "fact-check the report" or "Sunday review"
    ↓
[living-record] — Runs the 6-phase workflow
    ↓
If corrections found → rebuild documents
    ↓
[data-storytelling] — If transparency post needed, apply narrative science
    ↓
[juchekang-brand-kit] — Apply brand identity to any rebuilt assets
    ↓
[sutter-voice] — Apply voice to any new written content
    ↓
Output: corrected files + correction log entries + LinkedIn post draft
```

---

## WORKFLOW SPLIT: CHAT vs. CLAUDE CODE

### This Chat Session (Brain)
- Research, fact-checking, narrative, strategy
- Produces: finished HTML articles, PDFs, DOCXs, correction entries,
  LinkedIn posts, campaign plans
- Runs the living-record skill workflow
- Generates all content in final form

### Claude Code (Hands)
- Site infrastructure, deployment, components
- Consumes: finished files from this chat
- Builds: Juche.org pages, corrections feed page, RSS generator,
  report page templates, Living Document badges
- Deploys: to Vercel or wherever Juche.org is hosted

### The Handoff
Jesse copies finished artifacts from this chat → drops them into
the Claude Code project directory → tells Claude Code "deploy these."
Claude Code doesn't rewrite content. It wraps it in the site
infrastructure and ships it.

### What Jesse Says to Claude Code
"Here are the updated files for Architecture of Ruin v2.
Here are three correction entries for the corrections feed.
Deploy these to juche.org/reports/architecture-of-ruin/
and juche.org/corrections/"

That's it. Clean handoff. No duplication of effort.

---

## NEXT STEPS

1. Jesse reviews this spec
2. We build the skill using skill-creator in next session
3. We run the first fact-check cycle on Architecture of Ruin
4. We generate the correction entries and disclaimer blocks
5. Jesse hands finished files to Claude Code for deployment
6. First Sunday review cycle goes live

---

*Operation Living Record — Skill Specification v1*
*주체강 · Navigate the Current*
*March 24, 2026*
