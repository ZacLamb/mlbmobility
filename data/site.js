module.exports = {
  name: 'Totally Mobile LLC',
  shortName: 'Totally Mobile',
  domain: 'https://www.mlbmobility.com',
  tagline: 'Stairlifts, Scooters, Lift Chairs & Beach Wheelchairs: Sales, Rentals & Service on Cape Cod & the Islands',
  phone: '(508) 888-9433',
  phoneHref: 'tel:+15088889433',
  tollFree: '(800) 366-2994',
  tollFreeHref: 'tel:+18003662994',
  fax: '(508) 888-3392',
  address: { street: '439 Route 6A', city: 'East Sandwich', state: 'MA', zip: '02537' },
  geo: { lat: 41.73894, lng: -70.4406 },
  mapsUrl: 'https://maps.google.com/maps?q=439+Route+6A%2C+East+Sandwich%2C+MA+02537',
  facebook: 'https://facebook.com/113657198653702',
  hours: [
    { days: 'Mon – Fri', time: '8:00 am – 4:00 pm' },
    { days: 'Sat – Sun', time: 'Closed' }
  ],
  founded: 1998,
  googleSiteVerification: '_ZfKKZp7ta0Q5AlD7QQVbBpyg4k1uT_A94Obz0Xe8wk',
  promo: 'Contact us to take advantage of our end of season Mobility Scooter Sale!',
  brands: ['Bruno', 'Pride Mobility', 'Jazzy', 'Go-Go', 'VivaLift', 'American Access', 'Sitting Pretty', 'Deming Designs'],
  productOptions: [
    'Stairlifts', 'Recliner Lift Chairs', 'Ramps', 'Manual and Powered Wheelchairs', 'Scooters',
    'Beach Wheelchairs', 'Personal Aid', 'Rentals', 'Repairs / Service', 'Vertical Platform Lifts', 'Vehicle Lifts'
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Lift Products', children: [
      { label: 'Stair Lifts', href: '/stair-lifts-cape-cod' },
      { label: 'Recliner Lift Chairs', href: '/recliner-lift-chairs' },
      { label: 'Vertical Platform Lifts', href: '/vertical-platform-lifts' },
      { label: 'Vehicle Scooter & Wheelchair Lifts', href: '/vehicle-lifts' }
    ] },
    { label: 'Ramps', href: '/ramps' },
    { label: 'Scooters & Powered Wheelchairs', children: [
      { label: 'Manual and Powered Wheelchairs', href: '/manual-and-powered-wheelchairs' },
      { label: 'Scooters', href: '/scooters' },
      { label: 'Beach Wheelchairs', href: '/beach-wheelchairs' },
      { label: 'Scooter & Wheelchair Repair', href: '/scooter-and-power-wheelchair-repair' }
    ] },
    { label: 'Personal Aid', href: '/personal-aid' },
    { label: 'Rentals', children: [
      { label: 'All Rentals', href: '/rentals' },
      { label: 'Beach Wheelchair Rentals', href: '/beach-wheelchair-rentals-cape-cod' }
    ] },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'About', children: [
      { label: 'About Us', href: '/about' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Videos', href: '/videos' },
      { label: 'FAQ', href: '/faqs' },
      { label: 'Gallery', href: '/gallery' }
    ] },
    { label: 'Contact', children: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Request Call Back', href: '/request-call-back' }
    ] }
  ]
};
