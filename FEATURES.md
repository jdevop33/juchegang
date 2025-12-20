# Feature Roadmap: juche.org

## Vision
Win hearts, minds, and souls. Unite Korea through pride. Make peace profitable (in meaning, not money).

---

## Phase 1: Resource Library (Priority)

### `/library` - Knowledge Hub

#### Slide Decks
- Upload and embed presentation decks
- Thumbnail previews with slide count
- Categories: History, Economics, Geopolitics, Culture, Peace Initiatives
- Download as PDF option
- Embed viewer (reveal.js or similar)

#### Document Library
- PDF viewer with page navigation
- Download tracking (Umami events)
- Categories and tags
- Search functionality
- "Related documents" suggestions

#### Media Archive
- Curated video embeds (YouTube, Vimeo)
- Podcast episodes if applicable
- Infographics gallery
- Historical photo collections

### Technical Implementation
```
/app/library/
├── page.tsx              # Main library index
├── documents/
│   ├── page.tsx          # Document listing
│   └── [slug]/page.tsx   # Individual document viewer
├── decks/
│   ├── page.tsx          # Slide deck listing
│   └── [slug]/page.tsx   # Deck viewer
└── media/
    └── page.tsx          # Video/audio collection
```

### Storage Options
- Vercel Blob for documents/PDFs
- Or: Cloudflare R2 (cheaper at scale)
- Or: Direct links to Google Drive/Dropbox (quick start)

---

## Phase 2: Engagement Features

### Peace Counter
Real-time counter showing:
- Days since Korean War armistice
- Families still separated
- Economic potential of reunification (GDP projections)
- Cultural exchanges completed

### Interactive Timeline
- Korean history from shared perspective
- Key moments in division/unity
- User can toggle North/South perspective
- Reveals how the same events are viewed differently

### Cultural Bridge
- Side-by-side: Same traditions, different expressions
- Food comparisons (naengmyeon, kimchi variations)
- Language evolution tracker
- Music/art parallels

### Achievement Showcase
**North:**
- Self-reliance under sanctions
- Universal literacy, healthcare
- Preserved cultural heritage
- Engineering feats (metro, architecture)

**South:**
- Economic miracle
- Samsung, Hyundai, K-pop global reach
- Democratic development
- Technological innovation

**Message:** "Imagine what they could do TOGETHER"

---

## Phase 3: Community Features

### Story Collection
- Anonymous submissions from Koreans worldwide
- Separated family stories
- Diaspora experiences
- Moderated for quality

### Solidarity Map
- Global supporters pinned on map
- Events and meetups
- Peace organizations linked
- "I support reunification" pledge counter

### Newsletter
- Weekly digest of briefings
- Document releases
- Event announcements
- Umami-tracked open rates

---

## Phase 4: Educational Tools

### Bias Detector (Interactive)
- Paste a news article URL
- AI analysis of framing, sources, language
- Side-by-side with alternative perspectives
- "What they didn't tell you" section

### Terminology Guide
- "Regime" vs "Government"
- "Nuclear threat" vs "Deterrent"
- "Hermit kingdom" origin and problems
- Interactive quiz format

### Primary Source Library
- Declassified documents
- Treaty texts
- UN resolutions
- With plain-English summaries

---

## Phase 5: Advocacy Tools

### Template Library
- Letters to representatives
- Social media graphics
- Talking points for conversations
- Printable flyers

### Event Toolkit
- How to host a screening
- Discussion guides
- Korean culture celebration kits
- Peace vigil resources

### Media Kit
- Press releases
- Fact sheets
- Expert contact list
- B-roll footage links

---

## Technical Enhancements

### Performance
- [ ] Image optimization (already configured)
- [ ] Edge caching for static content
- [ ] Lazy loading for library items
- [ ] Search with Algolia or Meilisearch

### SEO
- [ ] Structured data for documents
- [ ] sitemap.xml updates for new content
- [ ] Rich snippets for briefings
- [ ] Korean language metadata

### Accessibility
- [ ] Screen reader optimization
- [ ] Keyboard navigation
- [ ] High contrast mode
- [ ] Font size controls

### Internationalization
- [x] English/Korean toggle (exists)
- [ ] Add Korean translations for all briefings
- [ ] Add Chinese, Japanese, Russian
- [ ] RTL support for future languages

---

## Monetization (Optional, Mission-Aligned)

### Ethical Options
1. **Donations** - One-time or recurring via Stripe/Ko-fi
2. **Merch** - Unity-themed apparel, proceeds to peace orgs
3. **Book Sales** - Compiled briefings as ebook/print
4. **Speaking** - Inquiry form for events
5. **Grants** - Peace foundations, academic partnerships

### What NOT to do
- Ads (compromises message)
- Paywalls (limits reach)
- Sponsored content (credibility risk)
- Data sales (trust violation)

---

## Success Metrics

### Reach
- Monthly unique visitors
- Document downloads
- Time on site
- Return visitor rate

### Engagement
- Scroll depth on briefings
- Library usage
- Newsletter signups
- Social shares

### Impact
- Media citations
- Academic references
- Policy mentions
- Community growth

---

## Quick Wins (This Week)

1. **Library skeleton** - Create `/library` route with placeholder
2. **PDF viewer component** - react-pdf or similar
3. **Upload first 3-5 documents** - Your best slide decks
4. **Add to navigation** - Make it discoverable
5. **Umami events** - Track downloads

---

## Long-term Vision

**Year 1:** Establish as go-to resource for alternative Korea perspectives
**Year 2:** Academic citations, media references
**Year 3:** Community of 10,000+ engaged supporters
**Year 5:** Contribute to actual policy discussions

The Kim family didn't build Juche ideology in a day. Consistency and persistence win.

---

*"The greatest weapon against imperialism is truth." - Adapt and apply.*
