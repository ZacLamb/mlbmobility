// Every image/video from the original Hibu site. Keys are the original Hibu file names
// (the "-1920w" rendition). Files are mirrored into /public/media so the site no longer
// depends on Hibu's CDN once it's cancelled.
const HIBU_BASE = 'https://le-cdn.hibuwebsites.com/57d3299c65314daebaa764b409f81734/dms3rep/multi/opt/';

const images = [
  // brand / header
  'totally-mobile-logo-1920w.jpg',
  'gen-logo-1920w.png',
  'gen-logo-e5ccbe50-1920w.png',
  // home + heroes
  'totally-mobile-hero-home-01-1920w.jpeg',
  'totally-mobile-videos-7-1920w.jpg',
  'CUSTOM_STAIRLIFT-1920w.jpg',
  'CUSTOM_STAIRLIFT2-1920w.jpg',
  'RAMP_%282%29-1920w.jpg',
  'totally-mobile-hero-manual-and-powered-wheelchairs-a3e1e60e-1920w.jpg',
  'SCOOTER+AND+BEACH+WHEELCHAIR-1920w.jpg',
  'BEACH+WALKER-1920w.jpg',
  'totally-mobile-hero-personal-aid-ba8b4627-1920w.jpg',
  '414664635_859500122851799_2565856386667513099_n-1920w.jpg',
  'totally-mobile-content-home-reviews-1920w.jpg',
  'totally-mobile-video-01-1920w.jpg',
  // stair lifts
  'totally-mobile-content-stair-lifts-1-a1df7d25-1920w.JPG',
  'bruno-elite-curved-outdoor-stair-lift-2-3a3683d0-7c5d4096-6addf639-fdbd43e6-1920w.jpg',
  'bruno-elite-straight-outdoor-stair-lift-9-edfac807-1920w.jpg',
  'totally-mobile-content-stair-lifts-4-b3b64a85-1920w.jpg',
  // recliners
  'totally-mobile-content-recliner-lift-chairs-1-1920w.jpg',
  'totally-mobile-content-recliner-lift-chairs-2-1920w.jpg',
  'totally-mobile-content-recliner-lift-chairs-3-1920w.jpg',
  'totally-mobile-content-recliner-lift-chairs-04-1920w.jpg',
  'totally-mobile-content-recliner-lift-chairs-05-1920w.jpg',
  // ramps
  'totally-mobile-content-ramp-1-1920w.jpg',
  'totally-mobile-content-ramp-2-1920w.jpg',
  'totally-mobile-content-ramp-3-1920w.jpg',
  'totally-mobile-content-ramp-4-1920w.jpg',
  'totally-mobile-content-ramp-5-1920w.jpg',
  'totally-mobile-content-ramp-6-1920w.jpg',
  'totally-mobile-content-ramp-7-1920w.jpg',
  'totally-mobile-content-ramp-8-1920w.jpg',
  // wheelchairs
  'jazzy-carbon-27x-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-2-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-3-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-4-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-5-1920w.jpg',
  'jazzy-ultra-light-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-7-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-8-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-9-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-10-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-11-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-12-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-13-1920w.jpg',
  'totally-mobile-manual-and-powered-wheelchairs-14-1920w.jpg',
  // scooters
  ...Array.from({ length: 14 }, (_, i) =>
    i === 11 ? 'totally-mobile-content-scooters-12-225a7979-1920w.jpg' : `totally-mobile-content-scooters-${i + 1}-1920w.jpg`),
  // beach
  'totally-mobile-content-beach-wheelchair-1-1920w.jpg',
  'totally-mobile-content-beach-wheelchair-2-1920w.jpg',
  'totally-mobile-content-beach-wheelchair-3-1920w.jpg',
  // personal aid
  'totally-mobile-content-personal-aid-1-1920w.jpg',
  'totally-mobile-content-personal-aid-2-1920w.jpg',
  'totally-mobile-content-personal-aid-3-1920w.jpg',
  'totally-mobile-content-personal-aid-4-1920w.jpg',
  // gallery
  'VPL5-1920w.jpg', 'VPL4-1920w.jpg', 'VPL3-1920w.jpg', 'VPL2-1920w.jpg', 'VPL-1920w.jpg',
  'SUITCASE+RAMPS-1920w.jpg', 'RAMP-1920w.jpg',
  'FOLDING+RAIL-1920w.jpg', 'FOLDING+RAIL+2+-+Copy-1920w.jpg', 'FOLDING+RAIL+-+Copy-1920w.jpg',
  'CUSTOM_STAIRLIFT_3-1920w.jpg', 'CUSTOM+STAIRLIFT_20220718_152857+-+Copy-1920w.JPEG', 'CUSTOM+STAIRLIFT-1920w.JPEG',
  'BRUNO+OUTSIDE+STAIRLIFT3-1920w.jpg', 'BRUNO+OUTSIDE+STAIRLIFT-1920w.jpg', 'BRUNO+OUTSIDE+STAIRLIFT+2-1920w.jpg',
  'BRUNO+OUTSIDE+STAIRLIFT+-+Copy-1920w.jpg', 'BRUNO+CUSTOM+STAIRLIFT+-+Copy-1920w.jpg',
  // brand logos (contact page)
  'EssentialCollection-1920w.jpg', 'HeritageCollection-LG-12-14-1920w.jpg',
  'PowerRecliners-Lift_LOGOw_pride-1920w.jpg', 'Viva+Lift+Collection+9+19-1920w.png',
  'AA_HERO_Logo-1920w.jpg', 'AA_Sidekick_Logo-1920w.jpg'
];

const videos = [
  { name: 'totally-mobile-llc-7016279549.mp4', url: 'https://videos.hibustudio.com/2024/totally-mobile-llc-7016279549.mp4' }
];

// "RAMP_%282%29-1920w.jpg" -> "ramp-2.jpg"
function localName(hibuName) {
  const dot = hibuName.lastIndexOf('.');
  const ext = hibuName.slice(dot + 1).toLowerCase().replace('jpeg', 'jpg');
  const base = decodeURIComponent(hibuName.slice(0, dot).replace(/\+/g, ' '))
    .replace(/-1920w$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${base}.${ext}`;
}

const byLocal = {};
images.forEach((n) => { byLocal[localName(n)] = HIBU_BASE + n; });
videos.forEach((v) => { byLocal[v.name] = v.url; });

module.exports = { HIBU_BASE, images, videos, localName, byLocal, img: (n) => '/media/' + localName(n) };
