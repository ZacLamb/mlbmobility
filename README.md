# mlbmobility.com — Totally Mobile LLC

Rebuild of the Hibu site for Totally Mobile LLC (439 Route 6A, East Sandwich, MA) on Node/Express + EJS, deployed on Railway.

## What's here
- **Every original Hibu URL kept exactly** (`/stair-lifts-cape-cod`, `/ramps`, `/video-splash-pop-2`, `/hibu-video-splash`, …). Trailing slashes 301 to the clean URL.
- **New service pages:** `/scooter-and-power-wheelchair-repair`, `/vertical-platform-lifts`, `/vehicle-lifts`, `/beach-wheelchair-rentals-cape-cod`.
- **Town pages:** `/service-areas` + 25 towns at `/service-areas/<town>-ma` (all Cape towns, Hyannis, Martha's Vineyard, Nantucket, South Shore). Edit in `data/towns.js`.
- Content lives in `data/` (`pages.js`, `towns.js`, `reviews.js`, `faqs.js`, `videos.js`, `site.js`).
- `sitemap.xml`, `robots.txt`, LocalBusiness / Service / FAQ / Breadcrumb schema, original Google site-verification tag.

## Images & video
All original images/video are listed in `data/assets.js` and served from `/media/…`.
They're mirrored from Hibu's CDN three ways: the **"Mirror Hibu media" GitHub Action** commits them into `public/media`, `npm install` fetches any missing ones during the Railway build, and the server fetches + caches any still missing on first request. **Run the Action (or confirm `public/media` is populated) before Hibu is cancelled.**

## Environment variables (Railway)
| Var | Purpose |
|---|---|
| `GHL_WEBHOOK_URL` | GHL inbound webhook — all forms POST here (name, first_name, last_name, phone, email, product_service, message, town, form, page_url) |
| `GTM_ID` / `GA4_ID` / `FB_PIXEL_ID` | Optional tracking |
| `FORCE_WWW` | `true` to 301 the apex domain to `www` |

## Local
`npm install && npm start` → http://localhost:3000 · `npm run check` renders every page and checks every internal link.
