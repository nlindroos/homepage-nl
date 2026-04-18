# Agent context

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run check      # Full check: typecheck + biome lint + stylelint
npm run lint       # Biome + stylelint only
npm run format     # Auto-format with Biome
npm run typecheck  # TypeScript check via Astro
```

There are no tests in this project.

## Stack

- **Astro 6** — static site, file-based routing under `src/pages/`
- **TypeScript** — strict mode
- **Biome** — formatter and linter (2-space indent, 100-char lines, double quotes, trailing commas, semicolons)
- **stylelint** — CSS/Astro style linting via `stylelint-config-standard` + postcss-html
- **Cloudflare Pages** — deployed on push to `main`; PRs get preview deployments

## Linting notes

Biome has overrides for `.astro` files that suppress some unused-variable/import warnings (Astro's template syntax trips up the standard rules). CSS nesting is explicitly excluded from the unsupported-browser-features stylelint warning.
