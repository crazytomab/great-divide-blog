# Beth & Tom: Great Divide Blog

Static Astro site for tracking Beth and Tom’s Great Divide bikepacking trip.

The public page is built around:

- a progress map / latest location section
- trip mileage and elevation totals
- About and Charity actions
- newest-first trail journal updates with photos
- a phone-friendly `/admin` editor powered by Decap CMS on Netlify

## Common commands

Run commands from the repo root.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Local URLs:

- Main site: `http://localhost:4321/`
- Admin editor: `http://localhost:4321/admin/`
- CMS config: `http://localhost:4321/admin/config.yml`

`npm run build` creates the production site in `dist/`. It does not start a server.

## Useful docs

- [GitHub repo management](./docs/GITHUB_WORKFLOW.md)
- [Manual blog updates](./docs/MANUAL_UPDATES.md)
- [Netlify and admin updates](./docs/NETLIFY_ADMIN_UPDATES.md)
- [New post template](./NEW_POST_TEMPLATE.md)

## Key files

- `src/pages/index.astro` — homepage layout and gallery behaviour
- `src/pages/admin.astro` — Decap CMS admin page
- `public/admin/config.yml` — CMS form configuration
- `src/content/blog/` — Markdown trip updates
- `public/images/posts/` — public blog images
- `src/content.config.ts` — content schema for trip updates
- `netlify.toml` — Netlify build settings

## Update options

There are two supported ways to add updates:

1. Manual GitHub/file update: edit Markdown and images directly, then commit/push.
2. Netlify admin update: use `/admin` on the live site to fill in a form and upload photos.

For the trip, the Netlify admin route should be the easiest from a phone once Netlify Identity and Git Gateway are enabled.
