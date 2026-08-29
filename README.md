# Histon Songbirds

The website for Histon Songbirds — a women's singing group in Histon, near
Cambridge. One calm, single-page site.

Built with [Vite](https://vite.dev/) + React. The production build is
pre-rendered to static HTML (via
[`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg)) so search
engines and link previews see the full content without running JavaScript.

## Editing the site

If you just want to change words, the booking link, the meeting time, or swap in
photos, read **[CONTENT.md](./CONTENT.md)** — you do not need to understand the
code.

## Running it locally

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install       # once, and again whenever dependencies change
npm run dev        # start the local site at http://localhost:5173
```

Leave `npm run dev` running and edit files — the browser updates as you save.
Press `Ctrl+C` to stop it.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development site with hot reload. |
| `npm run build` | Produces the static site in `dist/` (pre-rendered HTML). |
| `npm run preview` | Serves the built `dist/` so you can check the real output. |
| `npm run lint` | Checks the code for problems. |

## How it is organised

```
index.html                 page shell (charset, icons); title/SEO come from React
src/
  config.js                ← site settings: booking link, Formspree id, venue, times
  data/faq.js              ← the FAQ questions and answers
  App.jsx                  page layout: which sections appear, in what order
  components/              one file per section (Hero, About, WhenWhere, …)
  seo/Seo.jsx              <title>, description, social tags
  seo/structuredData.js    builds the Google structured data from config + faq
  styles/global.css        all styling; colours are the variables at the top
public/
  favicon.png, apple-touch-icon.png, og-image.png
  robots.txt, sitemap.xml
```

The contact form posts to **[Formspree](https://formspree.io)** — the one
third-party service the site uses. Messages go to the address configured in the
Formspree dashboard; see [CONTENT.md](./CONTENT.md).

## Branches & deployment

- `dev` — integration branch. Build features here, run locally with `npm run dev`.
- `main` — production. What is live.
- Flow: work on `dev` → when stable, merge `dev` → `main`.

Pushing to `main` triggers a GitHub Actions build that deploys to GitHub Pages,
live at `histonsongbirds.com` within a few minutes. The domain and DNS are on
Cloudflare (DNS only). Full details, settings, and troubleshooting are in
**[DEPLOY.md](./DEPLOY.md)**.

## After the site is live — search visibility

Ranking for a generic "women singing group" nationally is not realistic for a
small new site. Local searches ("women's singing group Histon", "singing group
for mums Cambridge") are very achievable. The steps that matter — none of them
are code:

1. Create a **Google Business Profile** for "Histon Songbirds" (category:
   Singing group / Choir). This is the biggest single lever.
2. Add the site to **Google Search Console** and submit `sitemap.xml`.
   Do the same in **Bing Webmaster Tools**.
3. Get links from local pages that already rank: St Andrew's Church, Histon &
   Impington Parish Council directory, HI HUB, `achurchnearyou.com`, local
   Facebook groups.
4. Keep the name, address and contact details written **identically** everywhere
   they appear online.
5. Ask a few early members to leave a Google review.
