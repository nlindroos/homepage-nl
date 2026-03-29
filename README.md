# Homepage

Personal homepage built with Astro and TypeScript.

## Stack

- **Astro** - Static site framework
- **TypeScript** - Strict mode enabled
- **Plain CSS** - Scoped styles, no framework
- Node 22+ required

## Getting Started

```bash

npm install
npm run dev
```

## Project Structure

```
/
├── public/          # Static assets (favicon, images)
├── src/
│   ├── config.ts    # Site configuration (title, description, URL)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base layout with SEO
│   └── pages/       # Routes (file-based routing)
│       └── index.astro       # Homepage
├── astro.config.mjs # Astro configuration
└── tsconfig.json    # TypeScript strict mode
```
