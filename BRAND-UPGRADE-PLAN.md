# JucheGang Brand Upgrade Plan
## End-to-End Implementation: River Palette + Typography System

**Created:** 2026-02-28
**Status:** Ready for Execution
**Estimated Phases:** 8

---

## Phase 0: Documentation Discovery (COMPLETE)

### Brand Kit Reference
**Source:** Brand kit document provided + `/app/globals.css` lines 6-105

#### Color Palette (River Theme)
| Name | Hex | CSS Variable | Tailwind Class |
|------|-----|--------------|----------------|
| River Depths | #0d1b2a | `--river-depths` | `bg-[hsl(var(--river-depths))]` |
| Current Blue | #1b4965 | `--river-current` | `bg-[hsl(var(--river-current))]` |
| Korean Red | #c73032 | `--korean-red` | `text-destructive` |
| Sovereign Gold | #d4a74a | `--sovereign-gold` | `text-accent` |
| Foam White | #e8e4df | `--text-primary` | `text-foreground` |
| River Mist | #e8dfd0 | `--river-mist` | `text-[hsl(var(--river-mist))]` |

#### Typography
| Role | Font | CSS Variable |
|------|------|--------------|
| Korean Text | Noto Serif KR | `--font-korean` |
| English Headings | Playfair Display | `--font-heading` |
| Body Text | Source Sans 3 | `--font-body` |

### Pages Requiring Updates
1. `/mission` - Full redesign needed
2. `/briefings` - Color system update
3. `/briefings/*` - 20+ subpages need brand alignment
4. `/truth-project` - Color system update
5. `/truth-project/*` - Subpages need brand alignment
6. `/channels` - Full redesign needed
7. `/gallery` - Color accent updates
8. `/contact` - Minor updates
9. `/cultural-exchange` - Brand alignment
10. `/youth-empowerment` - Brand alignment
11. `/peace-timeline` - Brand alignment
12. `/social` - Brand alignment
13. `/library` - Brand alignment

### Components Requiring Updates
1. `components/hero-section.tsx` - Convert hardcoded hex to CSS vars
2. `components/briefing-signature.tsx` - SVG colors (#DAA520 → #d4a74a)
3. `components/triptych-divider.tsx` - Hardcoded red
4. `components/cursor-trail.tsx` - Canvas colors
5. `components/particle-background.tsx` - Canvas colors
6. `components/juche-header.tsx` - Typography + colors
7. `components/juche-footer.tsx` - Brand alignment
8. `app/opengraph-image.tsx` - OG image colors

### Anti-Patterns to AVOID
- Using `#034DA2` (old Unity Blue) → Use `#1b4965` (Current Blue)
- Using `#EC1D25` (old Courage Red) → Use `#c73032` (Korean Red)
- Using `#DAA520` (goldenrod) → Use `#d4a74a` (Sovereign Gold)
- Using arbitrary Tailwind colors (`text-blue-400`) → Use CSS variables
- Hardcoding hex values → Use `hsl(var(--variable-name))`

---

## Phase 1: Core Components & Shared Elements

### Objective
Update shared components that appear across all pages to establish brand foundation.

### Tasks

#### 1.1 Fix Hero Section (components/hero-section.tsx)
**Current:** Hardcoded hex colors
**Target:** CSS variable usage
```
Replace: text-[#d4a74a] → text-[hsl(var(--sovereign-gold))]
Replace: text-[#e8e4df] → text-[hsl(var(--text-primary))]
Replace: bg-[#0d1b2a] → bg-[hsl(var(--river-depths))]
```

#### 1.2 Fix Briefing Signature SVG (components/briefing-signature.tsx)
**Current:** `fill="#DAA520"` (12 instances), `fill="#EC1D25"`
**Target:** Brand colors
```
Replace: #DAA520 → #d4a74a (Sovereign Gold)
Replace: #EC1D25 → #c73032 (Korean Red)
```

#### 1.3 Fix Triptych Divider (components/triptych-divider.tsx)
**Current:** `text-[#de2910]`
**Target:** `text-[hsl(var(--korean-red))]`

#### 1.4 Update Header Components
- `juche-header.tsx`: Add brand typography classes
- `enhanced-header.tsx`: Ensure gold accents use Sovereign Gold

#### 1.5 Update Footer (components/juche-footer.tsx)
- Apply River Depths background
- Gold accents for links/highlights
- Proper typography hierarchy

### Verification Checklist
- [ ] `grep -r "#034DA2\|#EC1D25\|#DAA520" components/` returns no matches
- [ ] All shared components use CSS variables
- [ ] Header/footer display correctly on localhost

---

## Phase 2: Mission Page Redesign

### Objective
Transform `/mission` from red/yellow gradient theme to River Palette.

### File: `app/mission/page.tsx`

### Current State
- Background: `bg-gradient-to-b from-black via-red-950 to-black`
- Hero text: `bg-gradient-to-r from-red-500 via-yellow-500 to-red-500`
- Cards: `bg-black/50 border-red-800/50`

### Target State
- Background: `bg-[hsl(var(--river-depths))]` with subtle gradient
- Hero: Korean text in Noto Serif KR, Sovereign Gold
- Typography: Playfair Display for headings
- Cards: River Current borders, Sovereign Gold accents
- Vision box: River gradient with gold highlights

### Tasks
1. Replace background gradient with River Depths base
2. Update hero section with brand typography
3. Convert card borders to River Current (#1b4965)
4. Replace yellow accents with Sovereign Gold
5. Apply Korean Red sparingly for emphasis
6. Add Korean mission statement text

### Verification
- [ ] Page background is River Depths navy
- [ ] Gold accents are #d4a74a not #FFD700
- [ ] Typography uses brand fonts

---

## Phase 3: Briefings Index & Template

### Objective
Update briefings landing page and create consistent template for all briefing pages.

### Files
- `app/briefings/page.tsx`
- Create: `components/briefing-layout.tsx` (shared template)

### Tasks
1. Update briefings index page colors
2. Create reusable briefing page layout component
3. Replace colored card borders with River Palette equivalents:
   - Blue cards → Current Blue (#1b4965)
   - Red cards → Korean Red (#c73032)
   - Gold/Yellow cards → Sovereign Gold (#d4a74a)
   - Purple/other → River Current variations

### Color Mapping
| Old Color | New Color | Hex |
|-----------|-----------|-----|
| blue-500 | Current Blue | #1b4965 |
| red-500 | Korean Red | #c73032 |
| yellow-500 | Sovereign Gold | #d4a74a |
| purple-500 | River Current | #1b4965 |
| orange-500 | Sovereign Gold | #d4a74a |

### Verification
- [ ] All briefing cards use River Palette
- [ ] Typography hierarchy follows brand guide
- [ ] No arbitrary Tailwind colors remain

---

## Phase 4: Truth Project Pages

### Objective
Update Truth Project index and all subpages.

### Files
- `app/truth-project/page.tsx`
- `app/truth-project/beyond-ideology/` (complex - 30+ color instances)
- `app/truth-project/empires-receipts/`
- `app/truth-project/liberation-frameworks/`
- `app/truth-project/power-dynamics/`
- Other subpages

### Tasks
1. Update index page featured box gradient
2. Replace investigation card colors
3. Update beyond-ideology (highest priority - most color issues)
4. Apply template to remaining subpages

### Verification
- [ ] `grep -r "text-blue-400\|text-purple-400\|bg-red-600" app/truth-project/` returns no matches
- [ ] All pages use River Palette consistently

---

## Phase 5: Content Pages (Channels, Gallery, Contact)

### Objective
Update remaining primary navigation pages.

### Files & Tasks

#### 5.1 Channels Page (`app/channels/page.tsx`)
- Replace `bg-gradient-to-b from-black via-gray-950 to-black`
- Update hero gradient text
- Convert card styling to River Palette
- Update category filter buttons

#### 5.2 Gallery Page (`app/gallery/page.tsx`)
- Update accent colors
- Apply brand typography to historical context sections
- Convert numbered badges to brand colors

#### 5.3 Contact Page (`app/contact/page.tsx`)
- Minor updates - apply River Depths background
- Ensure form uses brand colors

### Verification
- [ ] All three pages display correctly
- [ ] Consistent visual language across pages

---

## Phase 6: Secondary Pages

### Objective
Update remaining navigation pages.

### Files
- `app/cultural-exchange/page.tsx`
- `app/youth-empowerment/page.tsx`
- `app/peace-timeline/page.tsx`
- `app/social/page.tsx`
- `app/library/page.tsx`
- `app/library/documents/page.tsx`

### Tasks
1. Apply River Depths background to each
2. Update typography to brand fonts
3. Convert accent colors to River Palette
4. Ensure consistent card/section styling

### Verification
- [ ] All secondary pages use brand colors
- [ ] Navigation flow feels cohesive

---

## Phase 7: Canvas Components & OG Image

### Objective
Update JavaScript-based color rendering.

### Files
- `components/cursor-trail.tsx`
- `components/particle-background.tsx`
- `app/opengraph-image.tsx`

### Tasks

#### 7.1 Cursor Trail
Replace in canvas context:
```javascript
// OLD
ctx.fillStyle = index % 2 === 0 ? "#034DA2" : "#EC1D25"
// NEW
ctx.fillStyle = index % 2 === 0 ? "#1b4965" : "#c73032"
```

#### 7.2 Particle Background
Same pattern - update hardcoded hex values to brand colors.

#### 7.3 OG Image
- Update gradient: Use River Depths → River Current
- Update indicator dots to brand colors
- Consider adding brand typography (Playfair Display)

### Verification
- [ ] Canvas effects use brand colors
- [ ] OG image preview shows brand palette

---

## Phase 8: Final Verification & Cleanup

### Objective
Comprehensive audit and cleanup.

### Tasks

#### 8.1 Color Audit
```bash
# Should return NO matches
grep -r "#034DA2\|#EC1D25\|#DAA520\|#de2910" --include="*.tsx" --include="*.ts" .

# Should return NO matches for arbitrary Tailwind colors
grep -r "text-blue-[0-9]\|text-red-[0-9]\|text-purple-[0-9]\|text-yellow-[0-9]" --include="*.tsx" app/
```

#### 8.2 Typography Audit
- Verify Noto Serif KR loads for Korean text
- Verify Playfair Display loads for headings
- Verify Source Sans 3 for body text

#### 8.3 Visual QA
Navigate through all pages and verify:
- [ ] Home (hero section)
- [ ] Mission
- [ ] Briefings (index + 3 random subpages)
- [ ] Truth Project (index + beyond-ideology)
- [ ] Channels
- [ ] Gallery
- [ ] Contact
- [ ] Cultural Exchange
- [ ] Youth Empowerment
- [ ] Peace Timeline
- [ ] Social
- [ ] Library

#### 8.4 Build Verification
```bash
npm run build
# Should complete without errors
```

#### 8.5 Cleanup
- Remove any unused color definitions
- Document brand system in BRAND.md if not exists
- Update README if needed

---

## Execution Notes

### Parallel Execution Opportunities
- Phase 1 (components) can run in parallel with Phase 2 (mission)
- Phases 3-6 can run in parallel (different pages)
- Phase 7 is independent

### Dependencies
- Phase 8 depends on all previous phases

### Estimated Effort
- Phases 1-2: Foundation (high priority)
- Phases 3-6: Content pages (medium priority)
- Phase 7: Polish (lower priority)
- Phase 8: Verification (required)

---

## Quick Reference: Find & Replace

| Find | Replace With |
|------|--------------|
| `#034DA2` | `#1b4965` |
| `#EC1D25` | `#c73032` |
| `#DAA520` | `#d4a74a` |
| `#de2910` | `#c73032` |
| `from-red-500 via-yellow-500` | `from-[#1b4965] via-[#d4a74a]` |
| `bg-black` | `bg-[hsl(var(--river-depths))]` |
| `border-red-` | `border-[hsl(var(--korean-red))]` |
| `text-yellow-` | `text-[hsl(var(--sovereign-gold))]` |

---

*Plan created by Claude orchestrator. Ready for execution.*
