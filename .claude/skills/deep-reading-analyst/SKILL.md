---
name: deep-reading-analyst
description: Deep reading analysis of articles, speeches, and media content. Breaks down arguments, identifies rhetorical strategies, evaluates evidence quality, and exposes logical fallacies. Use when analyzing any text for credibility, bias, or argument structure.
---

# Deep Reading Analyst

Systematic analysis of written content using multiple thinking frameworks. Designed for evaluating news articles, research papers, speeches, policy documents, and media narratives.

## When to Use

- Analyzing a news article for bias, framing, or missing context
- Evaluating the strength of an argument or claim
- Breaking down a speech or policy document
- Comparing how different sources cover the same event
- Identifying rhetorical manipulation techniques

## Analysis Depth Levels

### Quick (5 min) — Surface scan
- SCQA breakdown (Situation, Complication, Question, Answer)
- Evidence type tagging (fact / inference / opinion / unsourced)
- Top 3 takeaways

### Standard (15 min) — Full analysis
- SCQA + 5W2H (Who, What, When, Where, Why, How, How much)
- Critical thinking pass (evidence evaluation, fallacy check, source credibility)
- Argument structure map
- Missing context identification

### Deep (30 min) — Adversarial review
- Everything in Standard, plus:
- First principles deconstruction (strip assumptions, rebuild from evidence)
- Competing hypotheses (3-5 alternative explanations)
- Systems thinking (feedback loops, leverage points, unintended consequences)
- Inversion thinking (what would make this claim false?)

## Step 1: Structural Understanding

### SCQA Framework
- **Situation**: What is the stable context everyone agrees on?
- **Complication**: What changed or went wrong?
- **Question**: What question does this raise?
- **Answer**: What answer does the author propose?

### 5W2H Analysis
- **Who**: Who are the actors? Who benefits? Who is harmed? Who is the source?
- **What**: What specifically happened? What claims are made?
- **When**: When did this occur? What is the timeline?
- **Where**: Where did this happen? Geographic/institutional context?
- **Why**: Why is this being reported now? What is the stated motivation vs likely motivation?
- **How**: How did this happen? What mechanism is described?
- **How much**: What is the scale/impact? What numbers are cited?

## Step 2: Evidence Evaluation

For each claim in the text, classify:

| Grade | Type | Description |
|-------|------|-------------|
| A | Verified Fact | Documented, independently verifiable, primary source cited |
| B | Supported Inference | Logical conclusion from verified facts, but involves interpretation |
| C | Expert Opinion | Attributed to named individual with relevant credentials |
| D | Anonymous Source | "Officials say", "analysts believe", unnamed sources |
| E | Editorial Framing | Loaded language, selective emphasis, missing context |
| F | Circular Citation | Source A cites Source B which cites Source A |

## Step 3: Logical Fallacy Check

Scan for these common patterns in media narratives:

**Causal Fallacies**
- Post hoc ergo propter hoc (after this, therefore because of this)
- Correlation presented as causation
- Single cause for complex events

**Evidence Fallacies**
- Cherry-picking data
- Survivorship bias
- Appeal to authority (credentials substituting for evidence)
- Hasty generalization from limited samples

**Rhetorical Fallacies**
- Straw man (misrepresenting the opposing position)
- Appeal to emotion / fear
- False dichotomy (only two options presented)
- Loaded language / framing bias

**Statistical Fallacies**
- Base rate neglect
- Simpson's paradox
- Misleading percentages without absolute numbers

## Step 4: Source Credibility Assessment

| Factor | Questions |
|--------|-----------|
| Expertise | Does the source have relevant domain knowledge? |
| Independence | Is the source financially or politically independent? |
| Track Record | Has this source been accurate historically? |
| Transparency | Are methods, data, and funding disclosed? |
| Consensus | Does this align with or diverge from broader expert consensus? |
| Motivation | What does the source gain from this narrative? |

## Step 5: Synthesis Output

### Standard Output Format

```
# Analysis: [Title of Piece]

## Overview
- Source: [publication]
- Date: [date]
- Author: [author]
- Depth: [Quick/Standard/Deep]

## SCQA Summary
- Situation: ...
- Complication: ...
- Question: ...
- Answer: ...

## Key Claims & Evidence Grades
1. [Claim] — Grade: [A-F] — [Reasoning]
2. [Claim] — Grade: [A-F] — [Reasoning]
3. [Claim] — Grade: [A-F] — [Reasoning]

## Fallacies & Bias Detected
- [Fallacy type]: [Specific instance]

## Missing Context
- [What the article leaves out]

## Source Chain
- Original source: [who first made this claim]
- Amplified by: [who picked it up]
- Currently cited by: [who quotes who]

## Competing Hypotheses (Deep only)
1. [Alternative explanation] — Evidence for/against
2. [Alternative explanation] — Evidence for/against
3. [Alternative explanation] — Evidence for/against

## Verdict
[1-2 sentence assessment of overall credibility and reliability]
```

## Comparison Mode

When comparing two or more sources covering the same event:

```
# Comparative Analysis: [Event/Topic]

| Dimension | Source A | Source B | Primary Source |
|-----------|---------|---------|----------------|
| Headline framing | | | |
| Key claims | | | |
| Evidence cited | | | |
| Sources quoted | | | |
| Context provided | | | |
| Context omitted | | | |
| Language/tone | | | |
| Overall grade | | | |
```

## Quality Standards

- Never present analysis as absolute truth — present evidence and let the reader decide
- Always distinguish between what the text says and what the text implies
- Flag your own uncertainty when evidence is ambiguous
- Steelman the author's position before critiquing it
- Cite specific passages, not vague impressions
