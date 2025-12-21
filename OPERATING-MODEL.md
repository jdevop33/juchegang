# JPanda Network: Operating Model

## Philosophy: Loose Coupling, Strong Identity

Each site is **independent but connected**. Like planets orbiting the same sun, they have their own gravity but share a common center.

---

## Site Inventory

| Site | Domain | Focus | Aesthetic | Status |
|------|--------|-------|-----------|--------|
| Main Hub | juche.org | Peace, Unity, Excellence | Red/Blue | ✅ Active |
| Tiger Campaign | tiger.juche.org | Korean Reunification | Gold/Indigo | ✅ Active |
| Economic Analysis | 1929.world | Debt Crisis, Markets | Black/Gold | ✅ Active |
| Canada / Personal | juchegang.ca | TBD | Black/Gold | 🔜 Planned |
| Professional | jesse-resume.vercel.app | Career, Portfolio | Dark Slate | ✅ Active |

---

## Content Flow Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                        CONTENT TYPES                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  GEOPOLITICAL ──────────► juche.org/briefings                   │
│       │                        │                                │
│       │ economic angle         │ reunification angle            │
│       ▼                        ▼                                │
│  1929.world              tiger.juche.org                        │
│                                                                 │
│  ECONOMIC ──────────────► 1929.world                            │
│       │                        │                                │
│       │ sanctions/BRICS        │ debt implications              │
│       ▼                        ▼                                │
│  juche.org/briefings     juche.org/library                      │
│                                                                 │
│  CULTURAL ──────────────► tiger.juche.org                       │
│       │                        │                                │
│       │ excellence angle       │ heritage context               │
│       ▼                        ▼                                │
│  juche.org (Laws)        juche.org/gallery                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Cross-Linking Rules

### Always Link When:
1. **Economic content mentions geopolitics** → Link to juche.org/briefings
2. **Geopolitical content mentions debt/sanctions** → Link to 1929.world
3. **Any Korean content** → Link to tiger.juche.org
4. **Resource/document** → Link to juche.org/library

### Link Format:
```markdown
For deeper analysis on the debt implications, see [1929.world](https://1929.world)

Related: [The Sanctions Warfare Briefing](/briefings/sanctions-warfare)
```

---

## Shared Infrastructure

### Analytics (Umami)
All sites use the same Umami instance:
```html
<script defer src="https://cloud.umami.is/script.js"
        data-website-id="e42c2739-f5a9-4dbf-8325-2e5b80eeee19">
</script>
```

Dashboard: https://cloud.umami.is/share/dyUOaOv46HnrkTc0

### Network Footer
Copy this to every site's footer:
```tsx
<div className="border-t border-white/10 py-4 text-center">
  <p className="text-xs text-white/40 mb-2">Part of the JPanda Network</p>
  <div className="flex flex-wrap justify-center gap-4 text-xs">
    <a href="https://juche.org" className="text-red-400 hover:text-red-300">Juche GanG</a>
    <span className="text-white/20">•</span>
    <a href="https://tiger.juche.org" className="text-amber-400 hover:text-amber-300">Tiger Unity</a>
    <span className="text-white/20">•</span>
    <a href="https://1929.world" className="text-yellow-400 hover:text-yellow-300">1929 World</a>
  </div>
</div>
```

---

## Repo Management

### Recommended Structure:
```
~/dev/projects/
├── jpanda-network/          # Parent folder for organization
│   ├── juchegang/           # juche.org
│   ├── tiger-unity/         # tiger.juche.org
│   ├── 1929-world/          # 1929.world
│   ├── juchegang-ca/        # juchegang.ca
│   └── shared/              # Shared assets (logos, brand kit)
```

### Git Strategy:
- Each site = separate repo
- No git submodules (complexity not worth it at this scale)
- Manual sync of shared code (copy-paste is fine for 4-5 sites)
- Future: Consider npm package if sharing 10+ components

---

## Deployment Map

| Site | Vercel Account | Team | Custom Domain |
|------|----------------|------|---------------|
| juche.org | Account A | Personal | juche.org |
| tiger.juche.org | Account B | Personal | Subdomain via CNAME |
| 1929.world | ? | ? | 1929.world |
| juchegang.ca | TBD | TBD | juchegang.ca |
| jesse-resume | Account A? | Personal | Vercel subdomain |

### DNS Setup for Subdomains:
```
# In juche.org DNS (Vercel Account A or registrar)
tiger.juche.org  CNAME  cname.vercel-dns.com
```

---

## Content Calendar Sync

When publishing major content, consider cross-promotion:

| When You Publish... | Also Post To... |
|---------------------|-----------------|
| New briefing on juche.org | Twitter, link from 1929 if economic |
| Economic analysis on 1929.world | Reference in juche.org briefings |
| Tiger campaign update | Cross-post to juche.org social |
| New slide deck | Add to juche.org/library |

---

## Brand Consistency

### Shared Elements:
- Dark backgrounds (all sites)
- Sans-serif fonts (Inter preferred)
- Data-forward presentations
- Counter-narrative positioning
- "JPanda" or "Jesse James" attribution

### Site-Specific Branding:
| Site | Primary Color | Secondary | Mood |
|------|---------------|-----------|------|
| juche.org | Red #EC1D25 | Blue #034DA2 | Serious, Diplomatic |
| tiger.juche.org | Gold #FFB800 | Indigo | Emotional, Cultural |
| 1929.world | Gold #FFD700 | Black | Analytical, Urgent |
| juchegang.ca | Gold | Black | Personal, Approachable |

---

## Scaling Considerations

### Current (1-5 sites): Stay Simple
- Manual sync is fine
- Copy-paste shared components
- Individual deploys

### Future (5-10 sites): Extract Shared
- Create @jpanda/ui npm package
- Shared analytics wrapper
- Automated cross-linking

### Scale (10+ sites): Monorepo
- Turborepo or Nx
- Shared CI/CD
- Centralized component library

---

## Quick Reference

### Add a new site to the network:
1. Create repo
2. Add Umami script with same ID
3. Add network footer component
4. Add to other sites' footers
5. Update this doc

### Remove a site:
1. Remove from all footers
2. Set up redirects if needed
3. Update this doc

---

*"One network. Many voices. Unified truth."*
