---
name: print-pdf-pagination
description: "Pagination discipline for converting styled HTML into print-quality PDFs (Playwright/Chromium print-to-PDF). MANDATORY whenever an HTML document — briefing, report, dossier, white paper, any branded page — is being rendered to PDF, for ANY brand (iPurpose, 주체강/JucheGang, Fit For Gov, Ibrahim, NPSI, Cherish). Trigger on 'PDF', 'convert to PDF', 'print version', 'make this a PDF', or any HTML→PDF step. Prevents the boxed-element split defect: bordered boxes, table rows, stat cards, ledger rows, pull quotes, and list items breaking across page boundaries. Enforces (1) the fragmentation CSS ruleset, (2) fixed repeating page banners, (3) full-bleed dark rendering, and (4) DETERMINISTIC boundary QA via pdftotext start/end co-location assertions — visual thumbnail checks alone are insufficient and have failed before. If a PDF ships without the co-location check passing, the job is not done."
---

# Print PDF Pagination

**Origin of this skill:** 7 July 2026. A 주체강 report shipped with the BLUF box split across pages 1–2 — open border on one page, orphaned border on the next. Visual QA of sampled thumbnails missed it. Jesse caught it on his phone. This skill exists so no boxed element ever splits again, and so QA is an assertion, not a glance.

## The iron rule

**No element that draws a border, background, or box may break across a page.** If it can't fit on the current page, it moves whole to the next. Tall containers (full tables, timelines) may break — but only BETWEEN rows, never inside one.

## Step 1 — Inject the fragmentation ruleset

Add to the document (or a print-variant copy) before rendering. Adapt selectors to the document's actual class names — audit the stylesheet for every class that sets `border`, `background`, or `box-shadow` and include it:

```css
@media print {
  /* 1. Boxed elements never split. List every bordered/filled component. */
  .bluf, .exec, .flag, .stat, .stat-row, .kj-row, .ledger-row,
  .meta-grid, .kr-pull, .card, blockquote, ul.iw li, .masthead {
    break-inside: avoid; page-break-inside: avoid;
  }
  /* 2. Tables: rows atomic; container may flow. thead repeats automatically in Chromium. */
  table tr { break-inside: avoid; page-break-inside: avoid; }
  /* 3. Headings never strand at a page bottom. */
  h1, h2, h3, .sec-label, .label { break-after: avoid; page-break-after: avoid; }
  /* 4. Text hygiene. */
  p { orphans: 3; widows: 3; }
}
```

Do NOT put `break-inside: avoid` on containers taller than ~80% of a page (whole key-judgment tables, full timelines) — that forces giant gaps or clipping. Rows atomic, containers fluid.

## Step 2 — Repeating page banners (serialized-report genre)

`position: fixed` elements repeat on every printed page in Chromium. Hide the in-flow banners in print and use fixed ones:

```css
.printbar { display: none; }
@media print {
  .banner { display: none; }
  .printbar { display: block; position: fixed; left: 0; right: 0; text-align: center;
    font-family: 'JetBrains Mono', monospace; font-size: 9.5px; font-weight: 600;
    letter-spacing: 0.22em; padding: 5px 0; z-index: 99; }
  .printbar.top { top: 0; border-bottom: 1.5px solid /*accent*/; }
  .printbar.bot { bottom: 0; border-top: 1.5px solid /*accent*/; }
}
```

```html
<body>
<div class="printbar top">HANDLING LINE · SERIAL</div>
<div class="printbar bot">BRAND · HANDLING · DOMAIN</div>
```

**CRITICAL — reserving space on EVERY page:** padding on the document wrapper only pads page 1; on pages 2+ content will run beneath the fixed bars (this defect shipped once). The correct mechanism is a repeating table spacer — `<thead>`/`<tfoot>` repeat on every printed page in Chromium:

```html
<body>
<div class="printbar top">…</div><div class="printbar bot">…</div>
<table class="pgtable"><thead><tr><td><div class="hspace"></div></td></tr></thead>
<tbody><tr><td>  <!-- ENTIRE document content here -->  </td></tr></tbody>
<tfoot><tr><td><div class="fspace"></div></td></tr></tfoot></table>
```
```css
.pgtable { width:100%; border-collapse:collapse; }
.pgtable, .pgtable > * > tr > td { border:none !important; padding:0 !important; background:transparent !important; }
.hspace, .fspace { height:0; }
@media print { .hspace { height:40px; } .fspace { height:36px; } }
```
Spacer height must exceed bar height by ≥14px. Global `table` styles WILL hit `.pgtable` — the `!important` resets are not optional.

**Bordered voids at breaks:** when a whole row is pushed to the next page, a container-level border frames the vacated space as an ugly empty box. In print, move borders from containers to rows:
```css
@media print { .kj, .ledger { border:none; } .kj-row, .ledger-row { border:1px solid var(--line); margin-top:-1px; }
  .tbl-wrap table { border:none; } .tbl-wrap tbody tr { border:1px solid var(--line); } }
```

## Step 3 — Render (Playwright, full-bleed dark)

```javascript
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file:///path/doc-print.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);   // web fonts MUST be ready
  await p.waitForTimeout(800);
  await p.pdf({ path: 'out.pdf', format: 'A4', printBackground: true,
    margin: { top:'0', bottom:'0', left:'0', right:'0' } });  // full-bleed dark
  await b.close();
})();
```

Run with `NODE_PATH=$(npm root -g)`. If Chromium missing: `npx playwright install chromium`. The source HTML needs `@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`.

## Step 4 — QA IS AN ASSERTION, NOT A GLANCE (mandatory)

Thumbnail sampling failed once already. Run the deterministic co-location check: for **every boxed element**, its first and last distinctive strings must land on the **same page**.

```python
import subprocess, re
N = <page count from pdfinfo>
pages = {p: re.sub(r'\s+',' ', subprocess.run(
    ['pdftotext','-f',str(p),'-l',str(p),'out.pdf','-'],
    capture_output=True, text=True).stdout) for p in range(1, N+1)}
def loc(s): return [p for p,t in pages.items() if s in t]
# One (start, end) pair PER boxed element in the document:
pairs = [("BOTTOM LINE UP FRONT", "final sentence of BLUF"),
         ("KJ-6", "last words of KJ-6"), ...]
for a, b in pairs:
    pa, pb = loc(a), loc(b)
    assert pa and pa == pb, f"SPLIT DEFECT: '{a}'@{pa} vs '{b}'@{pb}"
```

Rules: normalize whitespace before matching (line wraps break naive substring search); pick strings unique in the document; cover EVERY bordered component, not a sample.

**Assertion 2 — banner-zone clearance (mandatory, catches the page-2+ overlap class):** run `pdftotext -bbox out.pdf bbox.xml`, strip the xmlns, and assert every non-banner word has `yMin ≥ topZone` and `yMax ≤ pageHeight − bottomZone` on every page. Whitelist the banners' own words — and note pdftotext splits CJK into single glyphs, so whitelist '주','체','강' individually, not just '주체강'. Zone thresholds in PDF points ≈ px × 0.75. Then one visual pass at 90 dpi (`pdftoppm -jpeg -r 90`) checking: banners on every page, nothing under the fixed bars, no stranded headings.

**Ship only after the assertion loop passes clean.** A regenerated PDF resets all prior QA — rerun everything.

## Failure modes this skill exists to kill

1. Bordered box split across pages (the original sin — BLUF, exec-summary, flag boxes).
2. Table/ledger row cut mid-text.
3. Heading stranded as last line of a page.
4. Content running beneath fixed banners (insufficient wrap padding).
5. Fonts not loaded → fallback glyphs in the PDF (skipped `document.fonts.ready`).
6. QA'd an old render after editing (forgot to regenerate before rasterizing).
7. Visual-only QA on sampled pages — the defect that shipped. Assert, then look.
8. Wrapper padding mistaken for per-page padding → banners overlap content on pages 2+ (shipped once; killed by the thead/tfoot spacer).
9. Container borders framing the void left by a pushed row (shipped once; killed by row-level borders in print).
