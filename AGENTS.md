# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어:** 한국어
- **코드 주석 및 문서:** 한국어
- **커밋 메시지:** 한국어
- **PR 코멘트:** 한국어
- **PR 리뷰:** 한국어
- **PR 템플릿:** 한국어
- **문서화:** 한국어
- **변수명/함수명:** 영어

## Codex 전용 규칙 문서
- Codex 작업 규칙은 `./.codex/rules.md`를 기준으로 한다.
- `./.claude/rules/*.md`는 Codex 작업 기준으로 직접 참조하지 않는다.

## Project Overview

**My Profile Site** is a portfolio website built for Lee Yong-wook (이용욱), a fullstack developer with 4+ years of experience. The site showcases professional expertise, project history, technical skills, and contact information with a focus on geospatial and backend development experience.

## Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript 5.3
- **Styling:** Tailwind CSS 3.4
- **Data:** Static JSON files (profile.json, projects.json)
- **Dev Server:** Vite 5.0 with auto-refresh on port 5173

## Architecture Patterns

### Data-Driven Design
The site uses a declarative, data-first architecture:
- `src/data/profile.json` — Single source of truth for all profile information
- `src/data/projects.json` — Project timeline data
- `src/types/index.ts` — TypeScript interfaces that mirror the JSON structure
- Components are purely presentational, receiving data via props from App.tsx

To update content, edit the JSON files directly—no code changes needed for profile updates.

### Component Structure
Four main sections, each with its own component:
- **Hero.tsx** — Profile intro, image placeholder, name, title, summary, contact buttons
- **Projects.tsx** — Timeline view (right-left alternating on desktop, stacked on mobile)
- **Skills.tsx** — Tech stack grouped by category (Backend, Frontend, Database, DevOps, Geospatial)
- **Contact.tsx** — Email, phone, GitHub cards with hover effects

App.tsx loads JSON data, passes it to components, and manages the sticky nav + footer wrapper.

### Key Design Decisions
1. **No state management beyond useState** — Data is static and loaded once on mount
2. **Light mode only** — White background, dark text, indigo accents (#4F46E5). No dark mode toggle
3. **Responsive grid system** — Tailwind's grid and flex utilities handle all layouts
4. **Accessible color contrast** — WCAG AA minimum on all text
5. **Geospatial expertise highlighted** — Separate TechStack category to emphasize specialization

## Common Development Tasks

### Setup
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens http://localhost:5173 in browser; hot-reload on any file change.

### Build & Preview
```bash
npm run build    # TypeScript check + Vite build → dist/
npm run preview  # Serve dist/ locally to test production build
```

### Modifying Profile Content
1. **Profile info** — Edit `src/data/profile.json`: name, title, yearsOfExperience, summary, techStack, contact
2. **Projects** — Edit `src/data/projects.json`: title, role, period, description, achievements, tags
3. **GitHub URL** — Update `contact.github` in profile.json (must be full URL including https://)

No component changes needed when updating JSON data.

### Adding a New Project
1. Add an object to `src/data/projects.json` with: `id`, `title`, `role`, `period` (start/end), `description`, `achievements[]`, `tags[]`
2. Projects render in the order listed (newest first recommended)
3. Timeline alternates left-right on desktop automatically

### Styling Changes
- All colors, spacing, and layout use Tailwind classes
- Main color: `indigo-600` (#4F46E5)
- Background: white, section accents use gray-50 or gradients
- Modify component className attributes directly
- No global CSS changes needed (index.css handles font imports only)

## File Structure
```
src/
├── App.tsx                 # Main app, nav, footer, data loading
├── main.tsx               # React entry point
├── index.css              # Global styles (Tailwind + font imports)
├── types/
│   └── index.ts           # Interfaces: Profile, Project, TechStack, Contact
├── data/
│   ├── profile.json       # User profile (single object)
│   └── projects.json      # Project array
└── components/
    ├── Hero.tsx           # Profile section
    ├── Projects.tsx       # Timeline section
    ├── Skills.tsx         # Tech stack section
    └── Contact.tsx        # Contact cards section
```

## Performance & Quality

- **TypeScript:** Full type checking on build (`npm run build`)
- **Tailwind:** Production build includes only used classes (no extra CSS)
- **Vite:** Sub-second HMR, instant builds
- **SEO:** Document title set dynamically from profile.json; no meta tags currently (can add to index.html if needed)

## Testing
No test setup currently in place. If adding tests, use a framework like Vitest (Vite-native) or Jest with appropriate config.

## Deployment Targets
- **Vercel** (recommended, zero-config for React + Vite)
- **AWS S3 + CloudFront** (requires build artifacts in dist/)
- **Docker** (build and serve nginx, though not needed for static export)

## Key Constraints
1. No external data fetching — everything is static
2. No database — JSON is the only data source
3. No state mutations — components don't modify data
4. Light mode only — no dark mode
5. No third-party UI library — Tailwind only
