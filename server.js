const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');

const site = require('./data/site');
const pages = require('./data/pages');
const towns = require('./data/towns');
const reviews = require('./data/reviews');
const videos = require('./data/videos');
const faqs = require('./data/faqs');
const assets = require('./data/assets');

const app = express();
const PORT = process.env.PORT || 3000;
const MEDIA_DIR = path.join(__dirname, 'public', 'media');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true);
app.disable('x-powered-by');
app.use(compression());

// --- canonical host + trailing-slash cleanup (old Hibu links never used slashes) ---
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (process.env.FORCE_WWW === 'true' && host === 'mlbmobility.com') {
    return res.redirect(301, `https://www.mlbmobility.com${req.originalUrl}`);
  }
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const q = req.originalUrl.slice(req.path.length);
    return res.redirect(301, req.path.replace(/\/+$/, '') + q);
  }
  next();
});

// --- media: serve mirrored file, or fetch from Hibu once and cache to disk ---
fs.mkdirSync(MEDIA_DIR, { recursive: true });
app.get('/media/:file', async (req, res, next) => {
  const file = path.basename(req.params.file);
  const local = path.join(MEDIA_DIR, file);
  if (fs.existsSync(local)) return res.sendFile(local, { maxAge: '30d', immutable: true });
  const remote = assets.byLocal[file];
  if (!remote) return next();
  try {
    const r = await fetch(remote);
    if (!r.ok) return next();
    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFile(local, buf, () => {});
    res.set('Cache-Control', 'public, max-age=2592000');
    res.type(path.extname(file));
    return res.send(buf);
  } catch (e) { return next(); }
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(express.json({ limit: '20kb' }));

// --- shared locals ---
app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.img = assets.img;
  res.locals.path = req.path;
  res.locals.canonical = site.domain + (req.path === '/' ? '/' : req.path);
  res.locals.towns = towns;
  res.locals.servicePages = pages;
  res.locals.reviews = reviews;
  res.locals.gtmId = process.env.GTM_ID || '';
  res.locals.ga4Id = process.env.GA4_ID || '';
  res.locals.fbPixel = process.env.FB_PIXEL_ID || '';
  res.locals.ogImage = site.domain + assets.img('totally-mobile-videos-7-1920w.jpg');
  next();
});

const render = (view, data = {}) => (req, res) => res.render(view, data);

// --- routes (every original Hibu URL is preserved exactly) ---
app.get('/', render('home', {
  title: 'Mobility Products & Stair Lifts Cape Cod | Totally Mobile LLC | East Sandwich, MA',
  description: 'Totally Mobile LLC offers stair lifts, scooters, power wheelchairs, lift chairs, ramps and beach wheelchairs on Cape Cod & the Islands. Locally and woman-owned since 1998. 1-year warranty, free consultations.'
}));

pages.forEach((p) => {
  app.get(p.path, (req, res) => res.render('service', {
    title: p.title, description: p.description, page: p, review: reviews[p.review],
    related: (p.related || []).map((r) => pages.byPath[r]).filter(Boolean)
  }));
});

app.get('/service-areas', render('service-areas', {
  title: 'Service Areas | Mobility Equipment on Cape Cod, the Islands & South Shore | Totally Mobile',
  description: 'Totally Mobile LLC serves all 15 Cape Cod towns, Martha’s Vineyard, Nantucket and the South Shore with stair lifts, scooters, wheelchairs, ramps, rentals and in-home repair.',
  regions: towns.regions
}));

app.get('/service-areas/:slug', (req, res, next) => {
  const town = towns.bySlug[req.params.slug];
  if (!town) return next();
  const idx = towns.indexOf(town);
  res.render('town', {
    title: `Stair Lifts, Scooters & Wheelchairs in ${town.name}, MA | Totally Mobile LLC`,
    description: `Mobility equipment sales, rentals & in-home repair in ${town.name}, MA — stair lifts, power wheelchairs, scooters, ramps, lift chairs and beach wheelchairs from Totally Mobile LLC. Call ${site.phone}.`,
    town, idx,
    nearby: town.nearby.map((s) => towns.bySlug[s]).filter(Boolean),
    review: Object.values(reviews)[idx % Object.keys(reviews).length]
  });
});

app.get('/videos', render('videos', {
  title: 'Stair Lift, Platform Lift & Vehicle Lift Videos | Totally Mobile LLC',
  description: 'Explore mobility solutions with videos from Totally Mobile LLC. See Bruno stair lifts, platform lifts and vehicle lifts in action, and contact us for insights.',
  videos
}));
videos.forEach((v) => {
  app.get(v.path, (req, res) => res.render('video', {
    title: `${v.title} | Video | Totally Mobile LLC`,
    description: `${v.blurb} Watch the ${v.title} video from Totally Mobile LLC in East Sandwich, MA.`,
    video: v, videos, related: pages.byPath[v.related]
  }));
});
app.get('/hibu-video-splash', render('company-video', {
  title: 'About Totally Mobile LLC | Company Video | East Sandwich, MA',
  description: 'Learn more about Totally Mobile LLC in East Sandwich, MA — wheelchairs and mobility products, 1-year labor warranty, free personalized consultation and manufacturer warranties.'
}));

app.get('/reviews', render('reviews', {
  title: 'Customer Reviews | Totally Mobile LLC | East Sandwich, MA',
  description: 'Read customer reviews for Totally Mobile LLC. See what Cape Cod families say about our stair lifts, ramps, rentals, beach wheelchairs and in-home repair service.'
}));
app.get('/about', render('about', {
  title: 'About Totally Mobile LLC | Woman-Owned Mobility Experts Since 1998 | East Sandwich, MA',
  description: 'Totally Mobile LLC is a locally and woman-owned provider of stair lifts, ramps, scooters, power wheelchairs and mobility aids in East Sandwich, MA, serving Cape Cod since 1998.'
}));
app.get('/faqs', render('faqs', {
  title: 'FAQs | Stair Lifts, Scooter Repair & Rentals | Totally Mobile LLC',
  description: 'Find answers to your wheelchair-related questions at Totally Mobile LLC in East Sandwich, MA. Ramp installation, warranties, free home visits, repairs and rentals.',
  faqs
}));
app.get('/gallery', render('gallery', {
  title: 'Gallery | Stair Lift, Platform Lift & Ramp Installations | Totally Mobile LLC',
  description: 'See stair lift, vertical platform lift, ramp and beach equipment installations by Totally Mobile LLC in East Sandwich, MA and across Cape Cod.'
}));
app.get('/contact', render('contact', {
  title: 'Contact Totally Mobile LLC | (508) 888-9433 | East Sandwich, MA',
  description: 'Contact Totally Mobile LLC at 439 Route 6A, East Sandwich, MA. Call (508) 888-9433 or send a message for stair lifts, scooters, wheelchairs, rentals and repairs.'
}));
app.get('/request-call-back', render('request-call-back', {
  title: 'Request a Call Back | Totally Mobile LLC | East Sandwich, MA',
  description: 'Request a call back from Totally Mobile LLC for a free personalized consultation on stair lifts, scooters, wheelchairs, ramps, rentals or repairs.'
}));
app.get('/thank-you', render('thank-you', { title: 'Thank You | Totally Mobile LLC', description: 'Thanks for contacting Totally Mobile LLC.', noindex: true }));
app.get(['/privacy-policy', '/accessibility'], (req, res) => res.render('legal', {
  title: (req.path === '/accessibility' ? 'Accessibility Statement' : 'Privacy Policy') + ' | Totally Mobile LLC',
  description: 'Totally Mobile LLC website policies.', kind: req.path.slice(1)
}));

// --- lead capture → GHL inbound webhook ---
app.post('/api/lead', async (req, res) => {
  const b = req.body || {};
  const wantsJson = (req.headers.accept || '').includes('application/json');
  if (b.company_website) return wantsJson ? res.json({ ok: true }) : res.redirect(303, '/thank-you'); // honeypot
  const name = String(b.name || '').trim().slice(0, 120);
  const phone = String(b.phone || '').trim().slice(0, 40);
  const email = String(b.email || '').trim().slice(0, 160);
  if (!name || (!phone && !email)) {
    return wantsJson ? res.status(400).json({ ok: false, error: 'Please include your name and a phone number or email.' }) : res.redirect(303, req.get('referer') || '/contact');
  }
  const [firstName, ...rest] = name.split(/\s+/);
  const payload = {
    name, first_name: firstName, last_name: rest.join(' '), phone, email,
    product_service: String(b.product || '').slice(0, 80),
    message: String(b.message || '').slice(0, 3000),
    town: String(b.town || '').slice(0, 80),
    form: String(b.form || 'website').slice(0, 60),
    page_url: String(b.page || '').slice(0, 300),
    source: 'mlbmobility.com',
    submitted_at: new Date().toISOString()
  };
  const hook = process.env.GHL_WEBHOOK_URL;
  try {
    if (hook) {
      const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error('webhook ' + r.status);
    } else {
      console.warn('[lead] GHL_WEBHOOK_URL not set — lead logged only:', JSON.stringify(payload));
    }
    return wantsJson ? res.json({ ok: true }) : res.redirect(303, '/thank-you');
  } catch (e) {
    console.error('[lead] failed', e.message, JSON.stringify(payload));
    return wantsJson ? res.status(502).json({ ok: false, error: 'Sorry, something went wrong. Please call (508) 888-9433.' }) : res.redirect(303, '/contact');
  }
});

// --- SEO plumbing ---
const allUrls = () => [
  '/', ...pages.map((p) => p.path), '/service-areas', ...towns.map((t) => `/service-areas/${t.slug}`),
  '/videos', ...videos.map((v) => v.path), '/hibu-video-splash',
  '/reviews', '/about', '/faqs', '/gallery', '/contact', '/request-call-back'
];
app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const body = allUrls().map((u) => `<url><loc>${site.domain}${u}</loc><lastmod>${today}</lastmod><priority>${u === '/' ? '1.0' : u.startsWith('/service-areas/') ? '0.7' : '0.8'}</priority></url>`).join('');
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`);
});
app.get('/robots.txt', (req, res) => res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /thank-you\n\nSitemap: ${site.domain}/sitemap.xml\n`));
app.get('/healthz', (req, res) => res.send('ok'));

app.use((req, res) => res.status(404).render('404', { title: 'Page Not Found | Totally Mobile LLC', description: 'Page not found.', noindex: true }));

if (require.main === module) app.listen(PORT, () => console.log(`mlbmobility listening on ${PORT}`));
module.exports = { app, allUrls };
