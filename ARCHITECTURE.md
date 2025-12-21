# Multi-Site Architecture Strategy

## The JPanda Constellation

```
                         jesse-resume.vercel.app
                              (Professional Hub)
                                     │
                                     │ "by Jesse James"
                                     │
    ┌────────────────────────────────┼────────────────────────────────┐
    │                                │                                │
    ▼                                ▼                                ▼
┌─────────────┐              ┌─────────────┐              ┌─────────────┐
│ PEACE WING  │              │ ECON WING   │              │ FUTURE      │
│             │              │             │              │             │
│ juche.org   │◄────────────►│ 1929.world  │◄────────────►│ juchegang.ca│
│ tiger.juche │              │             │              │ (TBD)       │
│             │              │             │              │             │
│ Red/Blue    │              │ Black/Gold  │              │ Black/Gold? │
│ Unity Focus │              │ Debt Focus  │              │ Personal?   │
└─────────────┘              └─────────────┘              └─────────────┘
```

### Cross-Pollination Strategy
- Economic briefings on juche.org link to 1929.world deep dives
- 1929.world mentions geopolitical context → links to juche.org
- All sites have subtle "JPanda Network" or constellation footer
- jesse-resume lists all properties as "Projects"

---

## Current Properties

| Domain | Repo | Vercel Account | Purpose |
|--------|------|----------------|---------|
| juche.org | juchegang | Primary | Main hub, content, briefings |
| tiger.juche.org | v0-korean-tiger-unity-campaign | Secondary | Emotional campaign, reunification |
| juchegang.ca | TBD | TBD | Personal brand / Canadian presence |
| jesse-resume.vercel.app | Unknown | Primary? | Professional identity |

---

## Option 1: Hub & Spoke (Recommended)

```
                    ┌─────────────────┐
                    │   juche.org     │
                    │   (Main Hub)    │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ tiger.juche.org │ │  juchegang.ca   │ │  jesse-resume   │
│   (Campaign)    │ │ (Personal/CA)   │ │  (Professional) │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### How it works:
- **juche.org** = Central content hub, serious journalism, resource library
- **tiger.juche.org** = Emotional entry point, shareable campaign
- **juchegang.ca** = Personal brand, maybe more casual, Canadian audience
- **jesse-resume** = Professional credibility, linked subtly

### Cross-linking strategy:
- Every site has a small "network" footer linking to siblings
- Tiger links to juche.org for "deep dives"
- juche.org features tiger campaign prominently
- juchegang.ca can be the "personality" behind it all

### Pros:
- Clear purpose for each site
- Can optimize each for its audience
- SEO benefits from cross-domain linking
- Independent deployments
- Different Vercel accounts = more free tier resources

### Cons:
- Code duplication
- Manual syncing of shared styles
- Multiple repos to maintain

---

## Option 2: Monorepo with Turborepo

```
juchegang-universe/
├── apps/
│   ├── main/          → juche.org
│   ├── tiger/         → tiger.juche.org
│   ├── canada/        → juchegang.ca
│   └── resume/        → jesse-resume.vercel.app
├── packages/
│   ├── ui/            → Shared components
│   ├── config/        → Shared tailwind, eslint
│   └── analytics/     → Shared Umami wrapper
└── turbo.json
```

### How it works:
- One repo, multiple apps
- Shared component library
- Single source of truth for design tokens
- Vercel handles mono repo deployments

### Pros:
- DRY (Don't Repeat Yourself)
- Change once, update everywhere
- Easier to maintain consistency
- Modern, scalable

### Cons:
- Initial setup complexity
- All-or-nothing deployments without careful config
- Overkill for current scale
- Different Vercel accounts complicates this

---

## Option 3: Shared NPM Package

```
@juchegang/ui (npm package)
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── AnalyticsWrapper.tsx
│   └── BrandColors.ts
└── index.ts

Each repo imports:
npm install @juchegang/ui
```

### How it works:
- Publish shared code as npm package
- Each site imports what it needs
- Version control for breaking changes

### Pros:
- True code sharing
- Independent repos
- Versioned updates

### Cons:
- Need to publish/maintain npm package
- Extra step when making changes
- Overkill for 3-4 sites

---

## Recommendation: Start with Option 1, Evolve Later

### Phase 1 (Now): Hub & Spoke
1. Keep repos separate
2. Add consistent footer with network links
3. Use same Umami analytics across all
4. Create shared brand assets (not code, just files)

### Phase 2 (When it hurts): Extract shared code
When you find yourself copying the same component 3+ times, create @juchegang/ui

### Phase 3 (Scale): Monorepo consideration
Only if team grows or sites multiply beyond 5+

---

## Cross-Site Navigation Component

Add to each site's footer:

```tsx
// Unified network footer
const JucheNetwork = () => (
  <div className="border-t border-white/10 py-6">
    <p className="text-xs text-white/40 mb-3">Part of the Juche Network</p>
    <div className="flex gap-4">
      <a href="https://juche.org" className="text-white/60 hover:text-white">Main</a>
      <a href="https://tiger.juche.org" className="text-white/60 hover:text-white">Tiger Unity</a>
      <a href="https://juchegang.ca" className="text-white/60 hover:text-white">Canada</a>
    </div>
  </div>
)
```

---

## Vercel Account Strategy

### Current: Two accounts
- Account A: juche.org
- Account B: tiger.juche.org

### Options:

**Keep separate (Recommended for now):**
- More free tier limits (100GB bandwidth each)
- Cleaner separation
- Can add team members to specific projects

**Consolidate to one:**
- Easier management
- Single billing if you upgrade
- Better for teams

### Domain Management:
- Keep juche.org DNS pointing to Account A
- tiger.juche.org can be:
  - Subdomain of juche.org (managed in Account A DNS)
  - OR separate domain pointing to Account B

For subdomain approach in Account A:
```
juche.org         → A record → Vercel A
tiger.juche.org   → CNAME → [project].vercel.app (Account B)
```

---

## Analytics Consolidation

Use same Umami instance for all properties:

```javascript
// In each site's layout
<Script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="e42c2739-f5a9-4dbf-8325-2e5b80eeee19" // Same ID
/>
```

This gives you:
- Unified dashboard
- Cross-site user journeys
- Single source of truth

---

## Brand Hierarchy

```
Juche GanG (umbrella brand)
├── juche.org (editorial/serious)
│   └── "Peace • Unity • Excellence"
│   └── Colors: Blue #034DA2, Red #EC1D25
│
├── Korean Tiger Unity (campaign brand)
│   └── "The Line is Temporary. The Tiger is Forever"
│   └── Colors: Gold #FFB800, Indigo
│
├── JucheGanG Canada (personal/regional)
│   └── TBD - maybe "Building Bridges from the True North"
│   └── Colors: Black/Gold (as requested)
│
└── Jesse James (professional)
    └── Keep separate but link tastefully
    └── Add small note: "Founder, Juche GanG" in bio
```

---

## Action Items

### Immediate (Today):
- [ ] Add network footer to juche.org
- [ ] Same Umami ID to tiger.juche.org

### This Week:
- [ ] Define juchegang.ca purpose and content
- [ ] Create unified social media handles if not done
- [ ] Add "Founded by Jesse James" or similar to about pages

### This Month:
- [ ] Evaluate if code sharing is worth the complexity
- [ ] Consider consolidating Vercel accounts

---

## Public vs Private Repos

### Make PUBLIC:
- juche.org (main site) - shows transparency, invites contributions
- Open source components you want others to use

### Keep PRIVATE:
- Anything with API keys or secrets (even in .env.example)
- Unfinished work you're not ready to share
- Personal/resume site (optional)

### Best practice:
- Never commit secrets
- Use Vercel environment variables
- Public repos can still have private Vercel deployments

---

*"One Korea. One Network. One Mission."*
