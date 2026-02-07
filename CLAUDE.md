# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Xync Network (XyncPAY) landing page — a Next.js 14 marketing site for a global payment aggregator. Supports EN/RU localization. Deployed as a static export to GitHub Pages.

## Commands

- `npm run dev` — start dev server (localhost:3000, uses `output: 'standalone'`)
- `npm run build` — production build (uses `output: 'export'` for static HTML)
- `npm run lint` — ESLint with next/core-web-vitals
- `npm start` — serve production build locally

## Architecture

### Page → Template → Component pattern

Pages in `/pages` are thin wrappers that delegate to templates in `/templates`. Templates compose section-level components, which use shared components from `/components`.

```
pages/index.tsx → templates/HomePage/index.tsx → templates/HomePage/Main/, Statistics/, etc.
pages/about.tsx → templates/AboutUsPage/index.tsx
```

### Key directories

- `constants/` — static data (navigation links, solutions, team, FAQs)
- `mocks/` — mock content data (blog posts, reviews, careers, statistics)
- `locales/` — translation JSON files (`en.json`, `ru.json`)
- `contexts/LanguageContext.js` — custom i18n via React Context (no library), persists to localStorage
- `styles/` — global SASS styles, BEM-structured blocks, variables, mixins
- `utils/` — small utility functions (e.g., `hexToRgbA`)

### Providers

App tree in `_app.tsx` wraps with `LanguageProvider` → `ParallaxProvider` (react-scroll-parallax).

### Path aliases (tsconfig)

All major directories have `@/` aliases: `@/components/*`, `@/templates/*`, `@/contexts/*`, `@/constants/*`, `@/mocks/*`, `@/styles/*`, `@/utils/*`, `@/hooks/*`, `@/types/*`.

### Translations

Use `useTranslation()` hook from `@/contexts/LanguageContext`. The `t()` function supports dot-notation keys (e.g., `t('header.nav.about')`).

### Styling

- SASS (`.sass` indented syntax) for global styles, CSS Modules (`.module.sass`) for components
- `classnames` library for conditional class composition
- Responsive breakpoint mixins: `+xl` (1579px), `+w` (1419px), `+x` (1339px), `+d` (1179px), `+t` (1023px/tablet), `+m` (767px/mobile), `+a` (639px), `+s` (474px)
- Color variables: `$c1` (green #54C310), `$c2s1` (pink), `$c3s3` (yellow), `$c4s1` (purple), neutrals `$n0`–`$n9`

### Build modes

- Development: `OUTPUT='standalone'` (Next.js server mode)
- Production: `OUTPUT='export'` (static HTML export for GitHub Pages)

This is controlled via `.env.development` / `.env.production` and read in `next.config.js` as `output: process.env.OUTPUT`.
