// Boots the app, renders every sitemap URL + every original Hibu URL, and verifies
// each internal link on every page resolves (no 404s). Run: npm run check
const http = require('http');
const { app, allUrls } = require('../server');

const ORIGINAL = ['/', '/stair-lifts-cape-cod', '/recliner-lift-chairs', '/ramps', '/manual-and-powered-wheelchairs',
  '/scooters', '/beach-wheelchairs', '/personal-aid', '/rentals', '/videos', '/reviews', '/about', '/faqs', '/gallery',
  '/contact', '/request-call-back', '/hibu-video-splash', '/video-splash-pop', '/video-splash-pop-2', '/video-splash-pop-3',
  '/copy-of-video-splash-pop-4', '/video-splash-pop-5', '/video-splash-pop-6', '/video-splash-pop-7'];

const server = http.createServer(app).listen(0, async () => {
  const base = `http://127.0.0.1:${server.address().port}`;
  const get = (u) => fetch(base + u, { redirect: 'manual' });
  const seen = new Map(); const bad = []; const titles = new Map(); const h1s = [];
  const queue = [...new Set([...ORIGINAL, ...allUrls()])];
  for (const u of queue) {
    const r = await get(u); seen.set(u, r.status);
    if (r.status !== 200) { bad.push(`${u} -> ${r.status}`); continue; }
    const html = await r.text();
    const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    if (titles.has(t)) bad.push(`duplicate title on ${u} and ${titles.get(t)}`); else titles.set(t, u);
    const h1 = (html.match(/<h1[^>]*>/g) || []).length; if (h1 !== 1) h1s.push(`${u} has ${h1} h1`);
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const link = m[1];
      if (link.startsWith('/media/') || link.startsWith('/css/') || link.startsWith('/js/') || seen.has(link) || link === '/favicon.svg') continue;
      const rr = await get(link); seen.set(link, rr.status);
      if (rr.status !== 200) bad.push(`${u} links to ${link} -> ${rr.status}`);
    }
  }
  const slash = await get('/ramps/'); if (slash.status !== 301) bad.push('trailing slash not redirected');
  const lead = await fetch(base + '/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: 'Test Person', phone: '5085551212', form: 'check' }) });
  if (!lead.ok) bad.push('lead endpoint failed ' + lead.status);
  console.log(`checked ${seen.size} urls, ${titles.size} unique pages`);
  if (h1s.length) console.log('H1 issues:\n' + h1s.join('\n'));
  if (bad.length) { console.log('PROBLEMS:\n' + bad.join('\n')); process.exitCode = 1; } else console.log('all good');
  server.close();
});
