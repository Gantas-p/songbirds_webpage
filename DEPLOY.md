# Deployment

How `histonsongbirds.com` is hosted and how changes go live.

## Overview

| Piece | Provider | Role |
| --- | --- | --- |
| Domain registration + DNS | **Cloudflare** | registrar and DNS only — no proxy, no CDN, no Cloudflare Pages |
| Hosting + build | **GitHub Pages** (via GitHub Actions) | builds the site and serves it |
| Build | GitHub Actions (`.github/workflows/deploy.yml`) | `npm ci` → `npm run build` → publish `dist/` |

There is **one** deployment. Cloudflare does not host anything — it only points the
domain at GitHub.

## How a change goes live

1. Work on `dev`, test locally with `npm run dev`.
2. Merge `dev` → `main` (or push to `main`).
3. The **Deploy to GitHub Pages** workflow runs automatically, builds, and deploys.
4. Live within a few minutes at https://histonsongbirds.com.

The workflow only triggers on push to `main`. `dev` is never deployed.

## Cloudflare — domain and DNS

- `histonsongbirds.com` is registered through **Cloudflare Registrar**
  (dash.cloudflare.com → Registrar).
- DNS records (dash.cloudflare.com → the domain → DNS → Records):

  | Type | Name | Value | Proxy |
  | --- | --- | --- | --- |
  | A | `@` | `185.199.108.153` | DNS only (grey cloud) |
  | A | `@` | `185.199.109.153` | DNS only |
  | A | `@` | `185.199.110.153` | DNS only |
  | A | `@` | `185.199.111.153` | DNS only |
  | CNAME | `www` | `gantas-p.github.io` | DNS only |

- **All records must stay "DNS only" (grey cloud), not "Proxied".** If Cloudflare
  proxies the traffic, GitHub cannot issue its TLS certificate and HTTPS breaks.
- The four A record IPs are GitHub Pages' fixed addresses. `www` redirects to the
  apex.

## GitHub — repository and Pages

- Repo: `github.com/Gantas-p/songbirds_webpage` — **must stay public**
  (GitHub Pages via Actions is not available for private repos on the free plan).
- `.github/workflows/deploy.yml` — the build + deploy workflow.
- `public/CNAME` contains `histonsongbirds.com`; it is copied into `dist/` at
  build time so GitHub Pages keeps serving the custom domain on each deploy.
  (A `CNAME` file at the repo root also exists — GitHub added it automatically.)
- **Settings → Pages:**
  - **Source = "GitHub Actions"** (⚠️ not "Deploy from a branch")
  - Custom domain = `histonsongbirds.com`
  - "Enforce HTTPS" enabled

## Troubleshooting

### Live site is blank / console error loading `/src/main.jsx`

The site is serving the **raw source** instead of the built output. This happens
when **Pages Source has reverted to "Deploy from a branch"** — GitHub then runs
its automatic *"pages build and deployment"* workflow, which publishes the repo
folder as-is (no build step). Toggling the Pages Source, or editing the custom
domain, can flip it back to branch mode.

Fix:

1. Settings → Pages → **Source → "GitHub Actions"**.
2. Actions tab → **"Deploy to GitHub Pages"** workflow → latest run →
   **Re-run all jobs**. (Do *not* re-run "pages build and deployment".)
   Or push any commit to `main`.
3. Verify — the page source at https://histonsongbirds.com should reference
   `/assets/…` bundles and contain a real `<title>`, **not** `/src/main.jsx`.

### Taking the site down

Settings → Pages → Source → "None" unpublishes it. Re-publishing means setting
Source back to "GitHub Actions" **and** re-running the deploy workflow — see above.

### HTTPS / certificate errors

Check that every Cloudflare DNS record is **DNS only (grey cloud)**, then in
Settings → Pages remove and re-add the custom domain to trigger a fresh cert.
