# Worklog — Anniversary Website Conversion

## Date: 2025-04-13

## Task
Convert a Vite + React + React Router anniversary website into a Next.js App Router single-page project, fixing the centering issue (content appearing left-aligned).

## What Was Done

### 1. Project Initialization
- Ran the fullstack init script to set up the Next.js project with Tailwind CSS, shadcn/ui, and TypeScript.

### 2. Dependencies Installed
- `react-icons@5.6.0` — for `FiMenu`, `FiX`, `FiHeart`, `FiArrowRight` icons used in Navbar and page sections.
- `framer-motion` — already present in the scaffold, used for scroll-triggered animations.

### 3. Images Copied
- Copied all 6 background images from `/upload/anniversary-website/public/images/` to `/public/images/`:
  - `hero-bg.jpg`, `chapter-bg-1.jpg` through `chapter-bg-4.jpg`, `letter-bg.jpg`

### 4. Global CSS (`src/app/globals.css`)
- Merged the anniversary-specific CSS variables (`--rose`, `--blush`, `--gold`, `--deep`, etc.) into the existing Tailwind setup.
- **Centering fix applied**: `html, body { width: 100%; min-height: 100%; margin: 0; padding: 0; }` plus `scroll-behavior: smooth`.
- Added custom font classes (`.font-display`, `.font-script`).
- Added all custom animations: `petalFall`, `heartbeat`, `shimmer`.
- Added component styles: `.photo-slot` hover effects, `.divider`, `.nav-link`, `.glass`, `.letter-paper`, `.timeline-line`, `.gold-shimmer`.
- Custom scrollbar styling.
- Kept existing shadcn/ui theme tokens intact.

### 5. Layout (`src/app/layout.tsx`)
- Replaced default Geist fonts with Google Fonts link for `Cormorant Garamond`, `Great Vibes`, and `Lato`.
- Updated metadata for the anniversary theme.
- Simplified body classes (removed default shadcn antialiased/background classes since custom styles handle it).

### 6. Client Components Created (`src/components/anniversary/`)
- **`Petals.tsx`** — Falling flower petal animation using CSS keyframes + useMemo for randomization.
- **`PhotoSlot.tsx`** — Photo placeholder component with aspect ratio variants and rotation.
- **`Navbar.tsx`** — Fixed/frosted-glass navbar with:
  - IntersectionObserver to track active section.
  - Anchor-based navigation (`#hero`, `#chapter-1`, etc.) instead of react-router Links.
  - Mobile hamburger menu.
- **`FadeUp.tsx`** — Reusable scroll-triggered fade-up animation wrapper using framer-motion.

### 7. Main Page (`src/app/page.tsx`)
- Combined all 6 original pages into a single scrollable page with section anchors:
  1. **Hero** — Full-screen with background image, animated text, CTA buttons.
  2. **Photo Collage** — Grid of PhotoSlot placeholders.
  3. **Chapters Preview** — Card grid linking to chapter sections.
  4. **Quote** — Maya Angelou quote with letter-paper styling.
  5. **Chapter 1** — "How It All Began" with milestones timeline.
  6. **Chapter 2** — "Growing Together" with adventures grid.
  7. **Chapter 3** — "Our Favourite Moments" with alternating layout.
  8. **Chapter 4** — "Looking Forward" with dreams, bucket list, and reasons I love you.
  9. **Love Letter** — Full letter with lined paper effect.
  10. **Footer** — "Made with Love".
- All react-router `<Link>` components converted to `<button>` with `scrollTo()`.
- MusicPlayer component removed (as requested — uses react-h5-audio-player).

### 8. ESLint Configuration
- Added `upload/**` to ignores to prevent linting source project files.
- Added `@next/next/no-page-custom-font: off` rule.

## Files Created/Modified

| File | Action |
|------|--------|
| `src/app/globals.css` | Modified — merged anniversary CSS |
| `src/app/layout.tsx` | Modified — fonts + metadata |
| `src/app/page.tsx` | Rewritten — single-page anniversary app |
| `src/components/anniversary/Petals.tsx` | Created |
| `src/components/anniversary/PhotoSlot.tsx` | Created |
| `src/components/anniversary/Navbar.tsx` | Created |
| `src/components/anniversary/FadeUp.tsx` | Created |
| `public/images/hero-bg.jpg` | Copied |
| `public/images/chapter-bg-1.jpg` | Copied |
| `public/images/chapter-bg-2.jpg` | Copied |
| `public/images/chapter-bg-3.jpg` | Copied |
| `public/images/chapter-bg-4.jpg` | Copied |
| `public/images/letter-bg.jpg` | Copied |
| `eslint.config.mjs` | Modified — added ignores |
| `package.json` | Modified — added react-icons |

## Status
✅ Lint passes cleanly (0 errors, 0 warnings)
✅ Dev server running on port 3000
✅ Page serves with HTTP 200
✅ Centering fix applied — content is properly full-width and centered
