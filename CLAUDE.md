# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application built with TypeScript that showcases "The 48 Laws of Excellence". It uses a modern React stack with Tailwind CSS for styling and shadcn/ui components.

## Key Commands

### Development
```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build production bundle
npm run start    # Run production server
npm run lint     # Run ESLint for code quality checks
```

### TypeScript
Note: The project currently has TypeScript build errors disabled in `next.config.mjs`. When modifying code, ensure type safety even though build errors are suppressed.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript with React 19
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: shadcn/ui components in `/components/ui/`
- **State Management**: React hooks and context (ThemeProvider)
- **Font**: Inter from Google Fonts

### Project Structure
- `/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata and theme provider
  - `page.tsx` - Main homepage displaying laws
  - `/gallery/` - Gallery page route
- `/components/` - React components
  - Custom components for laws display (law-card, featured-law, etc.)
  - `/ui/` - shadcn/ui primitive components
- `/data/laws.ts` - Laws content data structure
- `/lib/utils.ts` - Utility functions (cn for className merging)
- `/types/` - TypeScript type definitions
- `/public/` - Static assets including gallery images

### Key Design Patterns
1. **Component Composition**: The app uses composable components from shadcn/ui as building blocks
2. **Client Components**: Main page uses "use client" directive for interactive features
3. **Theme System**: Dark mode support via next-themes with CSS variables
4. **Responsive Design**: Tailwind utilities for mobile-first responsive design
5. **Path Aliases**: `@/` maps to project root for clean imports

### Styling Configuration
- Custom color palette defined in `tailwind.config.ts` including "friendship" colors (blue: #034DA2, red: #EC1D25)
- CSS variables for theming in `app/globals.css`
- Tailwind Typography plugin for prose content

### Important Notes
- ESLint errors are ignored during builds (`eslint.ignoreDuringBuilds: true`)
- TypeScript errors are ignored during builds (`typescript.ignoreBuildErrors: true`)
- Images are unoptimized (`images.unoptimized: true`)
- Microsoft Clarity analytics script is embedded in the layout