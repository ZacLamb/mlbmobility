// Mirrors every original image/video from the Hibu CDN into public/media.
// Runs on `npm install` (Railway build) and from the GitHub Action, and skips files
// already present — so once the media is committed to the repo, Hibu can be cancelled.
const fs = require('fs');
const path = require('path');
const { byLocal } = require('../data/assets');

const OUT = path.join(__dirname, '..', 'public', 'media');
fs.mkdirSync(OUT, { recursive: true });

async function grab(local, url) {
  const dest = path.join(OUT, local);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return 'skip';
  // try the 1920w rendition, then fall back to other sizes Hibu publishes
  const tries = [url, url.replace('-1920w.', '-1280w.'), url.replace('-1920w.', '-960w.'), url.replace('-1920w.', '.')];
  for (const u of [...new Set(tries)]) {
    try {
      const res = await fetch(u);
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (!buf.length) continue;
      fs.writeFileSync(dest, buf);
      return 'ok';
    } catch (e) { /* try next */ }
  }
  return 'fail';
}

(async () => {
  const entries = Object.entries(byLocal);
  const tally = { ok: 0, skip: 0, fail: [] };
  for (let i = 0; i < entries.length; i += 6) {
    const batch = entries.slice(i, i + 6);
    const results = await Promise.all(batch.map(([l, u]) => grab(l, u)));
    results.forEach((r, j) => (r === 'fail' ? tally.fail.push(batch[j][0]) : tally[r]++));
  }
  console.log(`[fetch-assets] downloaded ${tally.ok}, already present ${tally.skip}, failed ${tally.fail.length}`);
  if (tally.fail.length) console.log('[fetch-assets] failed:', tally.fail.join(', '));
})();
