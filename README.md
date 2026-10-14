# Portfolio site

Personal portfolio for Damir Mavliutov. Astro 7 + Tailwind CSS v4, deployed to
Cloudflare Pages.

## Local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output to dist/
npm run preview    # serve the built output
```

## Stack

| Piece | Version | Why |
|---|---|---|
| Astro | 7.3.8 | static site, zero JS by default |
| Tailwind CSS | 4.3.3 | via `@tailwindcss/vite`, no config file needed |
| Cloudflare Pages | free | unlimited bandwidth, git deploys |

Node `22.12.0+` is required. `.node-version` pins the Cloudflare build to that.

## Structure

```
src/
  consts.ts              site name, links, rate, availability
  content/
    config.ts            projects collection schema
    projects/*.md        one markdown file per project
  components/
    Header.astro
    Footer.astro
    ProjectCard.astro
  layouts/
    Base.astro           <head>, fonts, global css
  lib/
    youtube.ts           converts any YouTube URL to an embed URL
  pages/
    index.astro          home
    projects/index.astro all projects
    projects/[slug].astro   one page per project
    about.astro
    contact.astro
    404.astro
  styles/global.css      tailwind theme tokens + component classes
```

## Adding a project

1. Copy an existing file in `src/content/projects/`.
2. Edit the frontmatter (title, description, year, role, status, platform,
   tags, and optionally video / github / play / accent).
3. Save. The homepage grid and the projects page pick it up automatically.

`status` must be one of: `live`, `released`, `in-dev`, `backend`.

## Design tokens

Change these once in `src/styles/global.css` to restyle the whole site:

- `--color-ink-*` - backgrounds and text
- `--color-accent-*` - the blue accent
- `.card`, `.btn-primary`, `.btn-ghost`, `.tag` - reusable component classes

Each project can override its card gradient with the `accent` frontmatter field.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git.
3. Select the repo. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22.12.0` (or leave the `.node-version` file to handle it)
4. Deploy. You get a free `*.pages.dev` URL.

Every push to the default branch rebuilds and redeploys automatically.

## Notes

- Video embeds accept any YouTube URL form (`youtu.be`, `watch?v=`, `/shorts/`)
  and are converted to `/embed/<id>` automatically.
- Add a custom domain later by buying one and pointing a CNAME at the
  `pages.dev` hostname. Hosting stays free.