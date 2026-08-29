# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

**juche.org** (deployed at sovereign-alpha.vercel.app) - A Next.js 15 application showcasing "The 48 Laws of Excellence" with Korean reunification/peace advocacy content and multilingual support.

Part of the **JPanda Network** of sites (see ARCHITECTURE.md, OPERATING-MODEL.md for multi-site strategy).

> **NOTE (Dec 26, 2024)**: Financial dashboard ("Sovereign Alpha") has been migrated to **1929.world** (jessejamesvictoria/v0-global-debt-analysis). This repo is now content-focused only.

## Key Patterns

### 1. Server/Client Split
- `page.tsx` files are server components (fetch data, metadata)
- `*-client.tsx` files are client components (interactivity)
- Example: `app/page.tsx` → `app/home-client.tsx`

### 2. Dynamic Imports
Heavy components are dynamically imported for performance:
```tsx
const PeaceCounter = dynamic(() => import("@/components/peace-counter"), {
  ssr: false,
  loading: () => <Skeleton />
})
```

### 3. Internationalization
- Server: `getServerLanguage()` + `getDictionary()` in `lib/`
- Client: `useLanguage()` hook from `contexts/language-context.tsx`
- Usage: `const { t, language, setLanguage } = useLanguage()`

### 4. Theme System
- Three themes: light, dark, terminal (Bloomberg-style)
- CSS variables in `globals.css`
- `ThemeProvider` from next-themes

### 5. Dashboard API Pattern
Dashboard endpoints follow consistent structure:
```typescript
// app/api/dashboard/[endpoint]/route.ts
export async function GET(request: Request) {
  // Fetch from external APIs (Alpha Vantage, CoinGecko, etc.)
  // Return JSON with proper caching headers
}
```

## Brand & Styling

### Colors (from BRAND.md)
- **Unity Blue**: #034DA2 (trust, peace)
- **Courage Red**: #EC1D25 (passion, strength)
- **Gold**: #FFD700 (highlights, achievements)

## API Integrations

| Service | Purpose | Notes |
|---------|---------|-------|
| Alpha Vantage | Stock/forex data | API key required |
| CoinGecko | Crypto prices | Rate limited |
| TradingView | Charts embed | Webhook receiver |
| Telegram | Bot notifications | Daily digests |
| Umami | Analytics | Privacy-focused |

## Build Configuration

### Important: Build Errors Are Suppressed
TypeScript and ESLint errors are only enforced in development:
```javascript
eslint: { ignoreDuringBuilds: process.env.NODE_ENV === 'development' }
typescript: { ignoreBuildErrors: process.env.NODE_ENV === 'development' }
```
**Always ensure type safety even if build passes.**

## Content Areas

### The 48 Laws of Excellence
Core content in `/data/laws.ts`. Each law has:
- `number`: 1-48
- `title`: Law name
- `content`: Full description

### Briefings
Research/analysis pieces in `/app/briefings/[slug]/`. Topics include:
- Media manipulation analysis
- Geopolitical commentary
- Sanctions/economic warfare
- Korean reunification perspectives

### Truth Project
AI bias and propaganda analysis in `/app/truth-project/`.

### Dashboard (Sovereign Alpha)
Financial intelligence terminal in `/app/dashboard/` with:
- Real-time market data
- Country comparison tools
- TradingView charts
- Crypto tracking

## Related Documentation

| File | Purpose |
|------|---------|
| ARCHITECTURE.md | Multi-site strategy, JPanda Network |
| BRAND.md | Colors, typography, voice/tone |
| FEATURES.md | Roadmap and planned features |
| OPERATING-MODEL.md | Cross-site content flow, deployment |

## Common Tasks

### Add a new briefing
1. Create `/app/briefings/[slug]/page.tsx`
2. Add metadata and content
3. Update briefings index if needed

### Add new API endpoint
1. Create `/app/api/[category]/[endpoint]/route.ts`
2. Implement GET/POST handlers
3. Add to dashboard client if data-fetching

### Add translation keys
1. Add to `/i18n/en.json`, `/i18n/kr.json`, `/i18n/kp.json`
2. Also update inline translations in `contexts/language-context.tsx`
3. Use `t('keyName')` in components

### Update dashboard data sources
1. Check rate limits and API key requirements
2. Implement in appropriate `/api/dashboard/` route
3. Add types to `/types/dashboard.ts`
4. Update `dashboard-client.tsx` to consume

## Environment Variables

Expected in Vercel/local `.env`:
```
NEXT_PUBLIC_BASE_URL=https://sovereign-alpha.vercel.app
# API keys for dashboard integrations
ALPHA_VANTAGE_API_KEY=
COINGECKO_API_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

## Notes for Claude

1. **This is a content-heavy site** - respect the existing voice/tone (factual, respectful, hopeful, bold per BRAND.md)
2. **Performance matters** - use dynamic imports, lazy loading, proper caching
3. **i18n is partial** - not all content is translated; check before assuming
4. **Dashboard is complex** - 17 API endpoints with various external dependencies
5. **Multi-site context** - this is one site in a network; see ARCHITECTURE.md
6. **Security headers are strict** - be mindful of CSP when adding external scripts
