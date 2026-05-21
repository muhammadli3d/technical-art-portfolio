# technical-art-portfolio

Dark, blue-accented portfolio for technical art work. Built with
[Astro](https://astro.build/) + TypeScript + MDX + Tailwind CSS, deployed
statically to GitHub Pages.

## Stack

- Astro 5 (static output)
- TypeScript (strict)
- MDX content collections for projects
- Tailwind CSS 3 with `@tailwindcss/typography`
- Inter (sans) + JetBrains Mono (mono) via `@fontsource`

## Develop

```bash
npm install
npm run dev          # http://localhost:4321/technical-art-portfolio
npm run build
npm run preview
npm run check        # type-check + content schema
```

Node 20+ required (see `.nvmrc`).

## Content

Projects live in `src/content/projects/*.mdx`. Frontmatter is validated by
`src/content/config.ts`. Each project gets a sub-page at
`/projects/<slug>` rendered by `src/pages/projects/[slug].astro`.

Frontmatter fields:

| field      | type                                          | notes                                  |
|------------|-----------------------------------------------|----------------------------------------|
| `title`    | string                                        |                                        |
| `role`     | string                                        | e.g. `Technical Artist`                |
| `tools`    | string[]                                      | rendered as monospace chips            |
| `year`     | int                                           |                                        |
| `cover`    | string                                        | path under `public/` (e.g. `/media/…`) |
| `coverAlt` | string                                        | required for accessibility             |
| `media`    | array of `{type:image\|video, src, alt, …}`   | shown in `MediaGallery`                |
| `summary`  | string (<=240 chars)                          | used for card + OG description         |
| `order`    | int                                           | controls grid order (asc)              |
| `draft`    | boolean                                       | drafts excluded from build             |

Media `src` paths are resolved through `withBase()` so they work under the
GitHub Pages base path.

## Adding a project

1. Create `src/content/projects/<slug>.mdx`.
2. Drop assets into `public/media/projects/<slug>/`.
3. Fill in frontmatter and the MDX body.

## Deploy

Pushes to `main` build and publish via `.github/workflows/deploy.yml`.

In repo settings, set **Settings -> Pages -> Source: GitHub Actions**.

The site is configured for `https://muhammadli3d.github.io/technical-art-portfolio`.
If you change the repo name or move to a custom domain, update
`site` and `base` in `astro.config.mjs` (and drop a `CNAME` into `public/`
for a custom domain).
