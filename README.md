# Homepage

Personal homepage built with Astro, TypeScript, and modern CSS.

## Stack

- **Astro** - Static site framework
- **TypeScript** - Strict mode enabled
- **Plain CSS** - Scoped styles, no framework
- Node 22+ required

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
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

## Configuration

**Before deploying**, update:

1. `src/config.ts` - Site title, description, URL
2. `astro.config.mjs` - Update `site` field with your domain

## Adding Pages

Create `.astro` files in `src/pages/`:

- `src/pages/about.astro` → `/about`
- `src/pages/blog/post.astro` → `/blog/post`

## Deployment

Deploy to:
- **Vercel** - `npm i -g vercel && vercel`
- **Cloudflare Pages** - Connect GitHub repo
- **Netlify** - Connect GitHub repo

Point your Route 53 domain to your hosting provider.

## Next Steps

- Add Biome for linting/formatting
- Add Stylelint for CSS linting
- Customize styles in `BaseLayout.astro`

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
