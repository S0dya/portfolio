# Portfolio site

Personal site for Sodya - games portfolio, freelance credibility, and a backend
showcase. Astro 7 + Tailwind CSS v4, deployed to Cloudflare Pages.

One site, three audiences:

| Audience | What they land on |
|---|---|
| Recruiter / studio | Home summary straight from the resume, experience, measurable numbers |
| Freelance client | Contact page, availability, proof of shipped titles |
| Backend person | Nexus, CompanyCrawler and LockIn under Tools |

**No rate, no availability-for-hire banner, no real name.** The site presents the work;
anyone who wants to discuss work uses the contact page.

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

## Design

A JetBrains Rider "Dark" IDE theme, not a generic dark landing page. Change it once
in `src/styles/global.css`:

- `--color-ink-950` … `--color-ink-50` - backgrounds and text, straight from the Rider
  Dark palette (`#1E1F22` base, `#2B2D30` panels, `#BCBEC4` text)
- `--color-accent-500` - the accent, a muted purple `#9f6d9b`
- `.panel`, `.btn-primary`, `.btn-ghost`, `.chip`, `.section-title`, `.status-pill`

Fonts are **Inter** for body and **JetBrains Mono** for everything structural - titles,
buttons, chips, nav, section headers, stat numbers. That split is most of what makes it
read as an IDE rather than a template.

Component classes are intentionally **not** pills. 3px corners, 1px borders, square
caps. The primary button carries a `❯` prefix that comes from CSS.

`src/components/Icon.astro` holds simple-icons SVG paths for GitHub, LinkedIn, Telegram,
Discord, Instagram, itch.io, Steam, mail, calendar and the résumé doc. `name` picks one,
colour comes from `currentColor`.

## Structure

```
src/
  consts.ts                  name, links, EXPERIENCE, SKILLS, OTHER_SKILLS, STATS
  content.config.ts          projects collection schema
  lib/
    bold.ts                  renders **...** in resume bullets as <strong>
    labels.ts                status + category labels and colours
    youtube.ts               converts any YouTube URL to an embed URL
  content/projects/*.md      one markdown file per project
  components/
    Header.astro             IDE tab strip
    Footer.astro             icon link grid + legal line
    Icon.astro               inline SVG icon set
    ProjectCard.astro        preview + IDE-style status bar
    SectionTitle.astro       `01 —— TITLE` rule header
  layouts/Base.astro         <head>, fonts, breadcrumb bar
  pages/
    index.astro              summary → experience → featured → categories → stats → skills
    projects/index.astro     all projects, grouped
    projects/[slug].astro    one page per project
    about.astro
    contact.astro
    murli.astro              one image, reachable from the About side panel
    404.astro
  styles/global.css          theme tokens + component classes
public/media/projects/       preview images and gifs
public/media/murli/          the Murli page image
```

## Adding a project

1. Copy an existing file in `src/content/projects/`.
2. Edit the frontmatter:
   - `title`, `summary` (one or two sentences, this is the card copy), `year`,
     `role`, `platform`, `tags`
   - `category` - one of `mobile`, `tools`, `web`, `pc`
   - `status` - one of `live`, `released`, `in-dev`, `backend`, `tool`
   - `cover` - path under `/media/projects/`
   - `coverIsGif: true` if the cover animates
   - optional `github`, `play`, `itch`, `accent`, `featured`, `order`
3. Save. The home page and the projects page pick it up automatically.

`order` is global and also controls order inside a category. The first three
`featured: true` projects by `order` become the home page featured row - currently
RogueArcher, Nexus and StoneFlow.

`web` and `pc` render **nested under Tools** via `NESTED_UNDER_TOOLS` in
`src/lib/labels.ts`. Change that list if the grouping should differ.

## Content rules

**Do not invent project copy.** Every project body is lifted from the master resume or
the Notion portfolio. The web games are the short itch.io descriptions and nothing more.
`year` exists so weak older titles can be contextualised - set it honestly.

**Experience bullets are the resume's bullets**, verbatim. `**` marks the spans the
resume bolds; `src/lib/bold.ts` turns them into `<strong>`.

## Previews

Every project card needs a cover. Two kinds:

- **Real art** - gameplay gif, itch screenshot, Steam capsule. Put it in
  `public/media/projects/` and reference `/media/projects/<file>`.
- **Drawn panels** - backend and tooling work has no screenshot, so the SVG covers
  imitate an IDE: `nexus.svg` is a route table, `companycrawler.svg` is a CSV report.
  Same visual language, and it beats a placeholder.

If `cover` is missing, the card falls back to a striped `// preview pending` panel.

Animated gifs are the heaviest assets. `dist/` is dominated by them - recompress
before caring about first paint.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git.
3. Select the repo. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22.12.0` (or leave the `.node-version` file to handle it)
4. Deploy.

Every push to the default branch rebuilds and redeploys automatically.

`wrangler.jsonc` is checked in if you would rather run
`npm run build && npx wrangler pages deploy dist`.

## Notes

- `astro.config.mjs` sets `site` for canonical URLs and the sitemap. It is currently a
  placeholder - change it when you have a real domain. Nothing on the site should ever
  print the real name.
- Video embeds accept any YouTube URL form (`youtu.be`, `watch?v=`, `/shorts/`) and are
  converted to `/embed/<id>` automatically.
- Zero client JavaScript. No trackers, no cookie banner.