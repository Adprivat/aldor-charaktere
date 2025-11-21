# Aldor Charaktere – Copilot Instructions
## Project Snapshot
- Next.js 14 App Router app in app/, static export enforced by next.config.js (output 'export', basePath '/test'); keep new routes static-friendly.
- CDN fonts loaded in app/layout.tsx; builds need internet or adjust fallback.
- Tailwind with custom palettes in tailwind.config.js; dynamic classes require safelist updates.
## Data & Themes
- Character roster lives in data/characters.ts with CharacterSummary from types/character.ts; treat as single source of truth for landing page.
- Page themes pulled from themes/characterThemes.ts via getCharacterTheme/useCharacterTheme and fed into CharacterLayout backColor/background props.
- Dedicated character pages under app/charaktere/<id>/page.tsx replicate data->theme wiring; dynamic fallback in app/charaktere/[id]/page.tsx skips ids listed in dedicated Set.
- New characters need data entry, theme entry, assets in public/images (use utils/asset.ts to respect basePath), and optionally a dedicated component folder.
## Layout & Shared Components
- Wrap character pages with components/shared/CharacterLayout.tsx to get consistent back button styling and background classes.
- BackToCharactersButton.tsx expects theme-driven color tokens (bg/hoverBg/border/text) matching CharacterTheme.backButton.
- MagicBento.tsx + MagicBentoEnhancer.tsx power Sarelan grid cards; honor props like disableAnimations/particleCount/glowColor to keep GSAP effects performant (mobile auto-disables).
- Global CSS in app/globals.css defines fantasy-card, text-gradient, and scrollbar styling used across pages; prefer class reuse over inline styles.
## Effects & Interactivity
- Framer Motion is the default for page/section transitions; follow existing motion props in app/page.tsx and character Hero sections for consistency.
- Mereldar-specific components rely on three.js/drei and a local ThemeContext (localStorage-backed root class toggles); ensure new logic respects shadow-mode/beledar-mode classes.
- Thessien and Sarelan rely on bespoke animation files in components/<character>; keep timelines, rune backgrounds, and parallax pieces intact by reusing provided helpers.
- When touching MagicBento particles or Spotlight logic, maintain GSAP cleanup hooks to avoid lingering listeners.
## Workflows
- Install deps with npm install; develop via npm run dev.
- Production check is npm run build which also performs static export into out/; preview with npx serve out or any static server.
- asset() helper prefixes NEXT_PUBLIC_BASE_PATH; always run images/audio paths through it (or asset.image()) when referencing public/ assets.
- Manual regression relies on docs/TESTING_CHECKLIST.md; architecture and feature inventories live under docs/ for deeper context.
## Reference
- Read docs/ARCHITECTURE.md and docs/FEATURES_INVENTORY.md before restructuring shared pieces.
- Coordinate refactors with docs/REFACTORING_PLAN.md to preserve character-specific VFX and data ordering.
