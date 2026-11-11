// Product & service pages. Copy for the eight original pages is carried over from the
// Hibu site; headings/titles were tightened for search (keyword + location) and the
// original section headings promoted from H3 to H2. Four new service pages are added
// from services the original About/Videos pages list (VPLs, vehicle lifts, repair,
// beach wheelchair rentals).
const { img } = require('./assets');
const c = (t) => `<a href="/contact">${t}</a>`;

const pages = [
  {
    path: '/stair-lifts-cape-cod',
    nav: 'Stair Lifts',
    keyword: 'stair lifts',
    short: 'Bruno straight and custom curved stair lifts, sold, installed and serviced in your home.',
    cardImg: img('CUSTOM_STAIRLIFT2-1920w.jpg'),
    heroImg: img('CUSTOM_STAIRLIFT-1920w.jpg'),
    title: 'Stair Lifts Cape Cod, MA | Bruno Stairlift Sales, Installation & Repair | Totally Mobile',
    description: 'Elevate your home with stair lifts from Totally Mobile LLC in Cape Cod, MA. American-made Bruno straight & curved stairlifts, free in-home estimates, installation and repair.',
    eyebrow: 'Stair Lift Products Cape Cod',
    h1: 'Stair Lifts on Cape Cod & the Islands',
    lede: 'American-made Bruno straight and custom curved stair lifts — with free in-home stairlift estimates from a local, woman-owned team.',
    sections: [
      { h2: 'Elevate Your Home with Stair Lifts in Cape Cod', html: `<p>Stair lifts from Totally Mobile LLC are not just about moving up and down your stairs; they're about reclaiming your freedom and independence in your own home in Cape Cod, MA. Crafted with pride in the USA, our stair lifts set the bar for both design and reliability, ensuring you can navigate your home safely and with ease.</p><p>Whether your home is cozy and compact or grand and spacious, we have stair lift options tailored to fit both your budget and your space requirements. Curved chair lifts? No problem—they're custom-made to fit the unique contours of your home. Interested in learning more about how we can elevate your daily routine? ${c('Reach out')} today for more details! We offer free in-home stairlift estimates.</p>` },
      { h2: 'Why Choose Us for Your Mobility Solutions', html: `<p>Choosing the right stair lift is a decision that impacts your quality of life, and we're here to make that decision as smooth as possible. Here are a few reasons why our customers keep choosing us:</p><ul><li>We're a one-stop shop for all your mobility needs, including beach wheelchairs.</li><li>Our team provides a personal touch, offering free personalized consultations to find the perfect solution for you.</li><li>With over 20 years of experience and a commitment to keeping people mobile, we understand your needs inside out.</li><li>We stand by our work with a 1-year warranty on our labor, plus manufacturer warranties.</li></ul><p>Looking for a stair lift that fits just right? ${c("Let's chat")} today and start planning!</p>` },
      { h2: 'Seamless Stair Lift Service and Support', html: `<p>At Totally Mobile LLC, we believe in supporting you every step of the way—not just with a stair lift that meets your needs but also with exceptional service that puts your mind at ease. Here's what sets our service apart:</p><ul><li>In-house repairs on anything we sell, ensuring your stair lift always works like new.</li><li>We come to you, offering in-home repair services for powered wheelchairs and scooters.</li><li>A proud tradition of local, woman-owned excellence since 1998.</li></ul><p>Need a stair lift installed or have questions about maintenance? Don't hesitate to ${c('call us')} for assistance.</p>` },
      { h2: 'Your Next Steps to Mobility Freedom', html: `<p>Embarking on the journey to greater mobility and independence in your home is a big step, and we're excited to walk you through it. Our stair lifts are designed to seamlessly integrate into your life, offering you the safety and dependability you deserve.</p><p>With our comprehensive support and personalized approach, you'll feel confident about enhancing your home with Totally Mobile LLC. Whether you're ready to explore your options or have a few questions, we're just a phone call away. ${c('Get in touch')} today and take the first step towards mobility and freedom in your home.</p>` }
    ],
    ctaTitle: 'Improve Your Mobility with Over 20 Years of Expertise',
    ctaSub: 'Call Totally Mobile LLC for free in-home stairlift estimates today!',
    productsTitle: 'Bruno Stair Lifts & Platform Lifts We Install',
    products: [
      { name: 'Elan Stair Lift', img: img('totally-mobile-content-stair-lifts-1-a1df7d25-1920w.JPG'), alt: 'A white stair lift is sitting on top of a set of stairs.', desc: "Get the most popular American-made straight stairlift. Bruno's Elan is a mix of stylish design, high-quality functionality, and ease-of-use operation. With a narrow vertical rail design, This Elan stairlift leaves plenty of open space on the steps for family members." },
      { name: 'Elite Curved Stair Lift', img: img('bruno-elite-curved-outdoor-stair-lift-2-3a3683d0-7c5d4096-6addf639-fdbd43e6-1920w.jpg'), alt: 'A stair lift is sitting on top of a set of stairs.', desc: "Enjoy the stair lift built specifically for your home. The updated Elite Curved stair lift delivers an unmatched smooth, quiet ride from start to finish. With Bruno's signature stair lift, the quality and comfort are second to none. Add power options to customize your Elite curved chair and further lift it to fit your lifestyle." },
      { name: 'Elite Stair Lift', img: img('bruno-elite-straight-outdoor-stair-lift-9-edfac807-1920w.jpg'), alt: 'A stair lift is sitting on top of a set of stairs.', desc: 'Combine quality, comfort, and style with a newly updated Elite stair lift. The Elite offers worry-free access and a premium design that seamlessly blends into your home’s environment. Consider options such as a power swivel seat and power folding footrest to customize your Elite stair lift to match your unique situation.' },
      { name: 'Vertical Platform Lifts, Residential and Commercial', img: img('totally-mobile-content-stair-lifts-4-b3b64a85-1920w.jpg'), alt: 'A wheelchair lift is attached to the side of a house.', desc: 'Use a vertical platform lift like a mini-home elevator. Often called a porch lift, a Bruno residential vertical platform lift is a cost-effective home accessibility solution to give scooter and wheelchair users an alternative to an entryway or deck steps.', link: '/vertical-platform-lifts' }
    ],
    review: 'ellen',
    faqs: [
      { q: 'Do you offer free in-home stair lift estimates on Cape Cod?', a: 'Yes. We offer free in-home stairlift estimates and a free personalized consultation so the lift fits your stairs, your space and your budget.' },
      { q: 'Can you install a stair lift on a curved staircase?', a: "Yes. Curved chair lifts are custom-made to fit the unique contours of your home — Bruno's Elite Curved is built specifically for your staircase." },
      { q: 'Will you service an older stair lift?', a: 'Yes. We repair anything we sell, and customers have had us service older chair lifts — including one installed back in 2003.' }
    ],
    related: ['/vertical-platform-lifts', '/recliner-lift-chairs', '/ramps', '/rentals']
  },
  {
    path: '/recliner-lift-chairs',
    nav: 'Recliner Lift Chairs',
    keyword: 'recliner lift chairs',
    short: 'Pride VivaLift and Sitting Pretty power lift recliners — FDA Class II medical devices.',
    cardImg: img('totally-mobile-content-recliner-lift-chairs-2-1920w.jpg'),
    heroImg: img('totally-mobile-content-recliner-lift-chairs-1-1920w.jpg'),
    title: 'Recliner Lift Chairs | Pride VivaLift Power Lift Recliners | East Sandwich, MA',
    description: 'Experience comfort and mobility with Pride VivaLift recliner lift chairs at Totally Mobile LLC in East Sandwich, MA. FDA Class II Medical Devices with heat, massage & lay-flat positioning.',
    eyebrow: 'Recliner Lift Chairs',
    h1: 'Recliner Lift Chairs in East Sandwich, MA',
    lede: 'Pride VivaLift and Sitting Pretty power lift recliners that help you stand up and sit down with ease — with a free personalized consultation.',
    sections: [
      { h2: 'Comfort Meets Mobility: Recliner Lift Chairs', html: `<p>Step into a world where comfort and mobility blend seamlessly with Totally Mobile LLC's range of recliner lift chairs. Our Pride VivaLift collections—Ultra, Radiance, and Atlas Plus—are not just chairs; they're your gateway to freedom and ease. Each model, from the sleek PLR-4955 to the robust PLR-2985, is an FDA Class II Medical Device designed with your wellness in mind.</p><p>Whether you're enjoying your favorite book or watching the sunset, these chairs provide the lift you need exactly when you need it. Curious about how a recliner lift chair can transform your living space? ${c('Give us a call')} for a free personalized consultation!</p>` },
      { h2: 'Why Our Lift Chairs Stand Out', html: `<p>Our recliner lift chairs are more than just a comfortable seat—they're a testament to our commitment to your mobility and quality of life. Here's why choosing a Pride VivaLift from us makes all the difference:</p><ul><li>A one-stop shop for mobility, offering everything from beach wheelchairs to lift chairs.</li><li>Over 20 years of experience ensuring we understand exactly what you need for your comfort and mobility.</li><li>We back our products with a 1-year labor warranty and provide manufacturer warranties for added peace of mind.</li><li>Our personal touch includes free personalized consultations to match you with the perfect lift chair.</li></ul><p>Thinking about adding a recliner lift chair to your home? ${c('Get in touch')} today, and let's make it happen!</p>` },
      { h2: 'Our Commitment to Your Comfort', html: `<p>At Totally Mobile LLC, your comfort and mobility are our top priorities. Our Pride VivaLift recliner lift chairs are designed to provide you with the support and independence you need without compromising on style or functionality. Here's what sets us apart:</p><ul><li>All-inclusive repairs on everything we sell, ensuring your lift chair is always in prime condition.</li><li>A locally and woman-owned business since 1998, we bring a personal touch and deep understanding to every interaction.</li></ul><p>Ready to experience unparalleled comfort with a lift chair? ${c('Reach out')} now for more information!</p>` },
      { h2: 'Elevate Your Home with a Pride VivaLift', html: `<p>Imagine a recliner that does more than just recline—a chair that brings you to your feet with ease and comfort. Our Pride VivaLift recliner lift chairs, including the Ultra, Radiance, and Atlas Plus models, are here to do just that. Each chair is carefully designed to meet your needs, offering unparalleled comfort and mobility support.</p><p>With Totally Mobile LLC, you're choosing a partner dedicated to enhancing your quality of life through innovative mobility solutions. Whether you're ready to select your new recliner lift chair or have a few questions, we're here to help. Dive into comfort and mobility with a ${c('call to us')} today!</p>` }
    ],
    ctaTitle: 'Sit Back in Comfort with Our Expert Support',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: 'Lift Chair Collections',
    products: [
      { name: 'Pride VivaLift Ultra Collection', sub: 'Model PLR-4955 · FDA Class II Medical Device', img: img('totally-mobile-content-recliner-lift-chairs-1-1920w.jpg'), alt: 'A brown recliner with a remote control on it on a white background.', desc: 'When you need to soothe away the stress of your day, the Ultra Collection by VivaLift® Power Recliners is there for you! New, exclusive VivaLift technology provides the feeling of weightlessness and allows any consumer to achieve the ideal comfort position for their needs. The advanced massage system delivers gentle pressure on your lower back. Choose from three intensity settings for the perfect massage!' },
      { name: 'Pride VivaLift Radiance Collection', sub: 'Model PLR-3955 · FDA Class II Medical Device', img: img('totally-mobile-content-recliner-lift-chairs-2-1920w.jpg'), alt: 'A black leather recliner with a remote control on a white background.', desc: 'The PLR-3955, The Radiance Collection, is the first in its class to offer three heating pads. Muscle tightness melts away in the warming comfort of the VivaLift!® Radiance Power Recliner. With the VivaLift! With true infinite positioning, you can take your relaxation experience to the next level.' },
      { name: 'Pride VivaLift Atlas Plus Collection', sub: 'Model PLR-2985 · FDA Class II Medical Device', img: img('totally-mobile-content-recliner-lift-chairs-3-1920w.jpg'), alt: 'A brown leather recliner with a remote control on it.', desc: 'The Atlas Plus Power Recliner offers infinite lay-flat positioning, a power headrest, a footrest extension, and a wireless phone charger. Enjoy the luxury of infinite lay-flat positioning. In addition to the stow-away cup holder, the Atlas Plus has a hide-away smartphone charging station that is wireless and compatible with most smartphones.' },
      { name: 'Evolution Collection', sub: 'FDA Class II Medical Device', img: img('totally-mobile-content-recliner-lift-chairs-04-1920w.jpg'), alt: 'Blue upholstered lift recliner chair.', desc: 'With sizes ranging from Small to XXL, the Evolution Collection from Sitting Pretty™ has something to offer everyone. Comfortable fabrics, dynamic colors, and premium features make these recliners a functional and stylish addition to any home.' },
      { name: 'Genesis Collection', sub: 'FDA Class II Medical Device', img: img('totally-mobile-content-recliner-lift-chairs-05-1920w.jpg'), alt: 'Gray lift recliner chair, featuring a headrest, armrests, and a rising base.', desc: 'With a modern, split-back design and all the essentials for luxurious relaxation, the Genesis Collection from Sitting Pretty features a chaise pad design for full leg support and striking fabrics and colors that make it a fashionable addition to any home décor.' }
    ],
    review: 'kurt',
    related: ['/stair-lifts-cape-cod', '/personal-aid', '/manual-and-powered-wheelchairs']
  },
  {
    path: '/ramps',
    nav: 'Ramps',
    keyword: 'wheelchair ramps',
    short: 'American Access aluminum ramps, threshold ramps, portable ramps, steps and landings.',
    cardImg: img('RAMP_%282%29-1920w.jpg'),
    heroImg: img('totally-mobile-content-ramp-7-1920w.jpg'),
    title: 'Wheelchair Ramps Cape Cod | Residential & Commercial Aluminum Ramps | East Sandwich, MA',
    description: 'Residential and commercial wheelchair ramps in East Sandwich, MA & Cape Cod from Totally Mobile LLC. American Access aluminum, threshold and portable ramps made in Tennessee. Permits handled.',
    eyebrow: 'Residential and Commercial Ramps',
    h1: 'Wheelchair Ramps for Homes & Businesses on Cape Cod',
    lede: 'Modular aluminum, portable, threshold and commercial ramps from American Access — installed by our team, with any permits handled for you.',
    sections: [
      { h2: 'Gain More Freedom with Our Ramps', html: `<p>Step into a world where every entrance and exit is a gateway to freedom, thanks to Totally Mobile LLC's extensive range of residential and commercial ramps. For over two decades, American Access has been at the forefront of crafting wheelchair ramps, modular stairs, and landings that empower veterans, schools, offices, colleges, churches, government contractors, and municipalities across the United States.</p><p>Manufactured with precision and care in Tennessee, our ramps are designed to seamlessly integrate into any environment, providing safe and reliable access for everyone. Ready to transform your space into a hub of accessibility? ${c("Let's chat")} about your needs today!</p>` },
      { h2: 'Why Our Ramps Lead the Way', html: `<p>Choosing the right ramp is pivotal for enhancing accessibility, and here's why our ramps stand out from the rest:</p><ul><li>Crafted with over 20 years of experience, our ramps are built to last and designed with your needs in mind.</li><li>We're a one-stop shop offering a comprehensive range of mobility solutions beyond ramps.</li><li>Our commitment to your satisfaction is backed by a 1-year warranty on labor and available manufacturer warranties.</li><li>As a locally and woman-owned business, we bring a personal touch to each project, ensuring your unique needs are met.</li></ul><p>Interested in exploring our ramp solutions? ${c('Reach out now')} for a free personalized consultation!</p>` },
      { h2: 'Seamless Ramp Solutions for Every Step', html: `<p>At Totally Mobile LLC, we understand that mobility extends beyond the home, which is why our American Access ramps are perfect for both residential and commercial use. From schools to offices and churches to government buildings, our ramps provide the accessibility you need without compromising on aesthetics or functionality. Here's how we ensure a seamless fit for your space:</p><ul><li>Our service puts your mind at ease, with experts on hand to assist with all repairs and maintenance.</li><li>We navigate any permits required, making the installation process as smooth as possible for you.</li><li>With a commitment to keeping people mobile, we ensure that every ramp solution is tailored to your specific needs.</li></ul><p>Thinking about enhancing your property with a ramp? ${c('Contact us')} today for more details!</p>` },
      { h2: 'Advance Accessibility with American Access Ramps', html: `<p>Imagine a world where every barrier is removed, and every threshold is an invitation, not a challenge. That's the world we're building at Totally Mobile LLC with our American Access ramps. Manufactured and assembled with pride in Tennessee, our ramps are more than just pathways; they're lifelines that reconnect people with their communities and spaces.</p><p>Whether you're enhancing a public building or making your home more accessible, we're here to guide you every step of the way. Ready to make your space accessible to everyone? ${c('Get in touch')} now to discover how we can help!</p>` }
    ],
    ctaTitle: 'One Stop Shop for Easy Access Solutions',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: 'American Access Ramp Systems',
    products: [
      { name: 'XM Ramp System', img: img('totally-mobile-content-ramp-1-1920w.jpg'), alt: 'A handicapped ramp is sitting in front of a brick building.', desc: 'The XM Ramp System from American Access is built with an open weave surface. Made from all aluminum, the XM was created from listening to customers who live in parts of the country where snowy and icy conditions prevail during the winter months. Two-way traction on the surface means safety, while the modular design makes for fast installation.' },
      { name: 'Sidekick Folding Ramp', img: img('totally-mobile-content-ramp-2-1920w.jpg'), alt: 'A van with a ramp attached to it is parked in a parking lot.', desc: 'This folding portable ramp is designed to take accessibility on the go with you! It folds up and is easily stored. It’s great for the home or on the go. Made of 100% aluminum and manufactured in Jackson, TN.' },
      { name: 'Sidekick Solid Ramp', img: img('totally-mobile-content-ramp-3-1920w.jpg'), alt: 'A metal ramp is sitting on top of a dirt path in the grass.', desc: 'The American Access Sidekick SOLID ramp is designed to take accessibility on the go with you! The ramp has a usable surface of 34″ and comes in 2′, 3′, 4′, 5′, and 6′ lengths.' },
      { name: 'Big Lug Ramp', img: img('totally-mobile-content-ramp-4-1920w.jpg'), alt: 'A metal ramp is sitting in front of a blue door.', desc: 'The Big Lug was designed to provide a full 42 inches of width in front of a doorway. The Big Lug is perfect for homes with a storm door or screen door.' },
      { name: 'Hero Ramp', img: img('totally-mobile-content-ramp-5-1920w.jpg'), alt: 'A black ramp is sitting in front of a door next to a plant.', desc: 'The Hero, with a non-skid surface, offers the safest threshold ramp in the industry. In comparison to similar threshold ramp designs, the Hero ramp provides the most usable surface space.' },
      { name: 'Rubber Threshold Ramps', img: img('totally-mobile-content-ramp-6-1920w.jpg'), alt: 'A black rubber mat with squares on it', desc: 'The Rubber Threshold Wheelchair Ramp is an easy solution to solve your threshold problems! These threshold ramps easily fit in front of your door or any other vertical barrier you might have. These 100% recycled rubber ramps help you effortlessly transition from one height to another. After all, life is better without tripping hazards and hard-to-access pathways that block wheelchairs from easy travel.' },
      { name: 'Entrada', img: img('totally-mobile-content-ramp-7-1920w.jpg'), alt: 'A ramp with a metal railing leading to a building', desc: 'The Entrada Commercial Ramp System is designed to bring accessibility to any office, workspace, or place of business. This commercial ramp model is made of 100% aluminum and manufactured in Jackson, TN, to meet all federal and state compliance needs.' },
      { name: 'Modular Steps and Landings', img: img('totally-mobile-content-ramp-8-1920w.jpg'), alt: 'A set of stairs leading up to a building', desc: 'Modular steps and landings from American Access maintain the same features and benefits of our Aluminum Ramp System, as they are both designed to match and fit into the Ramp system or stand independently for step access. Legs sleeve into the handrail system to offer the opportunity for skirting and allow for individual adjustment at all locations to fit most site conditions. Our standard steps in both designs are manufactured in 7″ increments.' }
    ],
    review: 'virginia',
    faqs: [
      { q: 'Do you handle building permits for ramps?', a: 'Yes. We navigate any permits required, making the installation process as smooth as possible for you.' },
      { q: 'Can I rent a ramp instead of buying one?', a: 'Yes — modular and suitcase ramps are part of our daily, weekly and monthly rental fleet.' }
    ],
    related: ['/vertical-platform-lifts', '/stair-lifts-cape-cod', '/rentals']
  },
  {
    path: '/manual-and-powered-wheelchairs',
    nav: 'Manual and Powered Wheelchairs',
    keyword: 'power wheelchairs',
    short: 'Jazzy and Go Chair power chairs, manual wheelchairs and all-terrain chairs.',
    cardImg: img('totally-mobile-hero-manual-and-powered-wheelchairs-a3e1e60e-1920w.jpg'),
    heroImg: img('totally-mobile-hero-manual-and-powered-wheelchairs-a3e1e60e-1920w.jpg'),
    title: 'Power Wheelchairs & Manual Wheelchairs | Jazzy & Go Chair | East Sandwich, MA',
    description: 'Discover mobility freedom with Totally Mobile LLC in East Sandwich, MA. Pride Jazzy & Go Chair power wheelchairs, manual and all-terrain wheelchairs — sales, rentals and in-home repair.',
    eyebrow: 'Manual and Powered Wheelchairs',
    h1: 'Manual & Power Wheelchairs on Cape Cod',
    lede: 'Lightweight folding travel chairs, heavy-duty all-terrain models and everyday manual wheelchairs — and we come to you for repairs.',
    sections: [
      { h2: 'Wheel Your Way to Freedom with Totally Mobile Wheelchairs', html: `<p>Dive into the world of mobility with Totally Mobile LLC, where we believe in providing you with the freedom to move, explore, and live life to its fullest. Our extensive collection of manual and power wheelchairs caters to every need and lifestyle. Whether you're running errands, heading out on vacation, navigating home life, or tackling rugged terrains, we've got the perfect mobility solution for you.</p><p>Our top-quality brands are specifically designed to enhance your independence and mobility. Why wait to rediscover the joys of freedom? ${c('Give us a call')} for your free personalized consultation today!</p>` },
      { h2: 'Why Choose Our Wheelchairs?', html: `<p>Our commitment to your mobility and independence is unmatched. Here's why our wheelchairs are a cut above the rest:</p><ul><li>We're a one-stop shop for all your mobility needs, ensuring you find exactly what you're looking for.</li><li>From beach wheelchairs to rugged terrain models, our diverse range caters to every aspect of your lifestyle.</li><li>Our products come with a one-year labor warranty and available manufacturer warranties for your peace of mind.</li><li>As a locally and woman-owned business with over 20 years of experience, we pride ourselves on offering a personal touch in everything we do.</li></ul><p>Looking for a wheelchair that fits your life perfectly? ${c('Reach out now')}, and let's get moving!</p>` },
      { h2: 'Our Service Promise: Mobility Made Easy', html: `<p>At Totally Mobile LLC, we understand that mobility extends beyond just the purchase of a wheelchair. It's about ensuring you have the support and services you need whenever you need them. Here's how we make mobility easy:</p><ul><li>We offer any repairs on anything we sell, keeping you mobile without worry.</li><li>Our team comes to you for repairs, ensuring your powered wheelchair or scooter is always in top condition.</li><li>With a free personalized consultation, we tailor our solutions to meet your exact needs.</li></ul><p>Need a hand with your manual or power wheelchair? Don't hesitate to ${c('call us')} for unparalleled service!</p>` },
      { h2: 'Explore Life with Total Mobility', html: `<p>Imagine a life where every destination is within reach, from the corner store to the great outdoors. With Totally Mobile LLC's range of manual and powered wheelchairs, that life can be your reality. We're dedicated to providing you with the tools you need to navigate the world on your terms. Our quality brands, extensive experience, and commitment to personal service ensure your mobility solution is as unique as yours.</p><p>Whether you're seeking adventure or simply the independence to enjoy your daily life, we're here to help. Ready to explore the possibilities? ${c('Contact us')} today for a free consultation and discover how we can help you live life without limits!</p>` }
    ],
    ctaTitle: 'Navigate Life Smoothly, Worry-Free Repairs Included',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: 'Power Chairs, Manual Chairs & All-Terrain Models',
    products: [
      { name: 'Jazzy Carbon 27', img: img('jazzy-carbon-27x-1920w.jpg'), alt: 'A red and black electric wheelchair on a white background.', desc: 'The Jazzy® Carbon 27X is a power wheelchair that folds vertically thanks to its innovative X-frame design. Weighing in at approximately 27.5 lbs. without the battery, it’s the ideal mobility device for journeys near and far. The strong carbon fiber frame makes it durable, portable, and safe so you can discover your independence and travel worry-free.' },
      { name: 'Jazzy Air 2', img: img('totally-mobile-manual-and-powered-wheelchairs-2-1920w.jpg'), alt: 'A yellow and black electric wheelchair on a white background.', desc: 'At the touch of a switch, the Jazzy Air® 2 elevates 12” in just 11 seconds. With a sleek, more modern look, this power chair safely drives at speeds up to 4 mph while elevated, allowing users to enjoy face-to-face social engagement.' },
      { name: 'Go Chair', img: img('totally-mobile-manual-and-powered-wheelchairs-3-1920w.jpg'), alt: 'A black and yellow electric wheelchair on a white background.', desc: 'The Go Chair® is #1 for portability! With feather-touch disassembly, you can take your Go Chair to all your favorite places and enjoy greater independence.' },
      { name: 'Jazzy 1450', img: img('totally-mobile-manual-and-powered-wheelchairs-4-1920w.jpg'), alt: 'A red and black electric wheelchair on a white background.', desc: 'With a robust and heavy-duty design, the Jazzy® 1450 ensures powerful performance with front-wheel drive and efficient motors. Knobby drive tires provide the traction you need over uneven terrain. With speeds up to 4.5 mph, live life on your terms.' },
      { name: 'Jazzy Passport', img: img('totally-mobile-manual-and-powered-wheelchairs-5-1920w.jpg'), alt: 'A black electric wheelchair on a white background.', desc: 'It’s the trip of a lifetime! Feel the anticipation as you wait for your flight in the comfort and style of your Jazzy® Passport. This compact power chair has plenty of storage and folds in just a few steps to make airport check-in effortless. When your plane touches down at your destination, you are ready to experience the adventures that await you!' },
      { name: 'Jazzy Ultra Light', img: img('jazzy-ultra-light-1920w.jpg'), alt: 'A red and black electric wheelchair on a white background.', desc: 'Jazzy® keeps getting lighter! The Jazzy Ultra Light power wheelchair weighs a remarkable 33 pounds without the battery and folds nearly flat in a matter of seconds. With an all-carbon fiber frame, it’s lightweight and durable to assist you on all your travels.' },
      { name: 'Jazzy Elite ES', img: img('totally-mobile-manual-and-powered-wheelchairs-7-1920w.jpg'), alt: 'A red and black electric wheelchair on a white background.', desc: 'An experience so superior, it can only be elite. The Jazzy® Elite ES features large, front-drive wheels to absorb the bumps and uneven surfaces of everyday life. The comfortable, high-back seat gives you the support you need all day, every day.' },
      { name: 'Jazzy Elite HD', img: img('totally-mobile-manual-and-powered-wheelchairs-8-1920w.jpg'), alt: 'A red and black electric wheelchair on a white background.', desc: 'Experience the power and versatility of the Jazzy® Elite HD. Large front wheels absorb and climb, easily tackling life’s everyday obstacles. An intuitive hand control ensures effortless operation and simple maneuvering.' },
      { name: 'Go Chair MED', img: img('totally-mobile-manual-and-powered-wheelchairs-9-1920w.jpg'), alt: 'A black electric wheelchair is shown from the side on a white background.', desc: 'The Go Chair® MED is #1 for portability! With convenient feather-touch disassembly, the Go Chair MED allows you to experience lightweight travel and independence on the go. Compact, portable and perfect for travel, the Go Chair® MED is a feature-rich power chair that disassembles easily in just a few steps! A large footplate gives you the comfort you need.' },
      { name: 'Jazzy Select', img: img('totally-mobile-manual-and-powered-wheelchairs-10-1920w.jpg'), alt: 'A red and black electric wheelchair on a white background.', desc: 'Access your world with ease with the Jazzy Select®, a simple yet powerful choice, with a tight turning radius and smooth ride. Maneuver through your home effortlessly with the intuitive controller. Stay mobile and comfortable all day, every day.' },
      { name: 'Manual Mobility', img: img('totally-mobile-manual-and-powered-wheelchairs-11-1920w.jpg'), alt: 'A black and silver wheelchair is sitting on a white surface.', desc: 'Manual Wheelchairs are lightweight, durable, high quality products providing peace of mind for your mobility needs. Wheelchairs are available for sports, recreation and everyday use in various styles and colors.' },
      { name: 'Fixed Frame All-Terrain Beach Wheelchair', img: img('totally-mobile-manual-and-powered-wheelchairs-12-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background', desc: 'The Fixed Frame All Terrain Wheelchair is designed to safely provide wheelchair users with transportation across areas where a conventional wheelchair becomes unmanageable. This includes areas such as beaches, snow covered sidewalks, forest trails, etc.', link: '/beach-wheelchairs' },
      { name: 'Reclining All-Terrain Beach Wheelchair', img: img('totally-mobile-manual-and-powered-wheelchairs-13-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background.', desc: 'The Reclining All-Terrain Wheelchair has a leg rest that can be fully elevated, as well as a back rest that can be fully reclined. Both can be moved incrementally to maximize your comfort level. This Beach Wheelchair Recliner is designed to safely provide wheelchair users with transportation across areas where a conventional wheelchair becomes unmanageable; beaches, snow covered sidewalks, forest trails, etc.', link: '/beach-wheelchairs' },
      { name: 'Elevating Leg Rest', img: img('totally-mobile-manual-and-powered-wheelchairs-14-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background.', desc: 'With the elevating leg rest feature, one can incrementally raise, or lower the leg rest depending on desired comfort level. This feature is great for users with circulatory issues or for people who just want to get some extra sun on their toes.' }
    ],
    review: 'debby',
    related: ['/scooter-and-power-wheelchair-repair', '/scooters', '/beach-wheelchairs', '/rentals']
  },
  {
    path: '/scooters',
    nav: 'Scooters',
    keyword: 'mobility scooters',
    short: 'Pride Victory, Go-Go, Maxima, Zero Turn and Pursuit 3- and 4-wheel scooters.',
    cardImg: img('SCOOTER+AND+BEACH+WHEELCHAIR-1920w.jpg'),
    heroImg: img('SCOOTER+AND+BEACH+WHEELCHAIR-1920w.jpg'),
    title: 'Mobility Scooters Cape Cod | Pride Go-Go, Victory & Travel Scooters | East Sandwich, MA',
    description: 'Discover better mobility with Totally Mobile LLC in East Sandwich, MA. Pride 3- and 4-wheel mobility scooters, travel scooters, rentals and in-home scooter repair. Free personalized consultation.',
    eyebrow: 'Mobility Scooter Products',
    h1: 'Mobility Scooters on Cape Cod & the South Shore',
    lede: 'Travel, everyday and rugged outdoor scooters from Pride Mobility — sold, rented and repaired by a team that comes to you.',
    sections: [
      { h2: 'Scoot Into Freedom with Totally Mobile Mobility Scooters', html: `<p>Welcome to the world of Totally Mobile Mobility Scooters, where freedom, mobility, and independence are just a ride away! We're proud to offer an extensive selection of brands and styles, each designed to fit perfectly into your home and outdoor adventures.</p><p>Whether it's running errands, visiting friends, or simply enjoying a breath of fresh air in your own yard, our scooters provide the independence you crave without relying on others. Ready to embrace the freedom of mobility? ${c('Give us a call')} for a free personalized consultation and discover the perfect scooter to match your lifestyle!</p>` },
      { h2: 'Why Our Scooters Stand Out', html: `<p>Our commitment to your mobility doesn't stop at just offering scooters. We go the extra mile to ensure you're fully supported on your journey to independence. Here's what makes our scooters a notch above the rest:</p><ul><li>Our wide range of scooter styles and brands ensures there's something for everyone, from indoor maneuverability to rugged outdoor adventures.</li><li>With over 20 years of experience, we've fine-tuned our offerings to meet your specific needs, ensuring you stay mobile and independent.</li><li>For your peace of mind, we offer a comprehensive one-year warranty on our labor, alongside available manufacturer warranties.</li><li>As a locally and woman-owned business, we add a personal touch to our services, ensuring you feel supported every step of the way.</li></ul><p>Thinking about enhancing your mobility with a scooter? Let's get you moving! ${c('Reach out now')} for more details.</p>` },
      { h2: "Scooter Service and Support: We've Got You Covered", html: `<p>At Totally Mobile LLC, we understand that your mobility scooter is more than just a vehicle—it's your independence. That's why we offer unparalleled service and support to keep you moving without worries. Here's how we ensure your scooter always meets your needs:</p><ul><li>We handle any repairs for items we sell, so you can rest easy knowing your scooter is in good hands.</li><li>Our dedicated team will come to you for repairs, ensuring minimal disruption to your mobility and convenience.</li></ul><p>Is your scooter in need of a tune-up or repair? ${c('Give us a call')}, and we'll take care of the rest!</p>` },
      { h2: 'Your Gateway to Greater Mobility', html: `<p>Imagine a life where the world is your oyster and mobility limitations are a thing of the past. With Totally Mobile Mobility Scooters, that life is within your grasp. Our scooters are designed to empower you, offering the freedom to explore, engage, and enjoy life on your terms.</p><p>Whether you're looking for a scooter for home use or something more rugged for outdoor adventures, we have the perfect solution for you. Plus, with our free personalized consultation, finding your ideal scooter has never been easier. Ready to unlock a world of independence and mobility? ${c('Contact us')} today, and let's embark on this journey together!</p>` }
    ],
    ctaTitle: 'Explore More with Reliable Scooters and Expert Care',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: '3-Wheel & 4-Wheel Scooters',
    products: [
      { name: 'Victory 9', sub: '3-Wheel', img: img('totally-mobile-content-scooters-1-1920w.jpg'), alt: 'A red mobility scooter with a basket attached to it.', desc: 'Sophisticated and stylish, the Victory® 9 is everything you could want in a scooter. The delta tiller lets you operate the scooter with a single hand. Enjoy easy disassembly and plenty of lighting with the LED headlight.' },
      { name: 'Victory 10', sub: '3-Wheel', img: img('totally-mobile-content-scooters-2-1920w.jpg'), alt: 'A red mobility scooter with a basket attached to the front.', desc: 'Versatility knows no bounds with the Victory® 10. Enjoy simple disassembly with one hand and drive up to 16 miles on a single charge. You won’t miss a beat with this scooter, which includes a bright LED headlight. Anything is possible with the Victory 10!' },
      { name: 'Victory LX Sport', sub: '4-Wheel', img: img('totally-mobile-content-scooters-3-1920w.jpg'), alt: 'A red mobility scooter with a basket on the front is on a white background.', desc: 'You’re active and always on the go. You need a scooter that is up to the task! Appeal to your sporty side with the Victory® LX Sport. Enjoy premium suspension, bright lighting and other sophisticated features, all in one sporty package.' },
      { name: 'Zero Turn 10 (ZT10)', sub: '4-Wheel', img: img('totally-mobile-content-scooters-4-1920w.jpg'), alt: 'A blue mobility scooter with a basket on the front.', desc: 'Experience the Zero Turn 10. It’s everything you imagined and more. The Zero Turn 10 has powerful dual motors and two-wheel drive offering aggressive traction, easily tackling rugged terrain on trails and gliding over smooth surfaces with ease.' },
      { name: 'Maxima', sub: '3-Wheel', img: img('totally-mobile-content-scooters-5-1920w.jpg'), alt: 'A red mobility scooter with a basket on the front is on a white background.', desc: 'Heavy duty and robust, the Maxima 3-wheel scooter maximizes your potential! Drive at speeds up to 5.3 mph and experience a fully adjustable tiller. Enjoy the convenience of the front basket, perfect for storing your personal items.' },
      { name: 'Go-Go Elite Traveller', sub: '4-Wheel', img: img('totally-mobile-content-scooters-6-1920w.jpg'), alt: 'A blue and black mobility scooter with a basket attached to it.', desc: 'Every day is a new adventure with the Go-Go Elite Traveller®, an exceptionally stable and maneuverable travel scooter. With easy disassembly and a convenient storage basket, the Go-Go Elite Traveller keeps up with your active life!' },
      { name: 'Go-Go Sport', sub: '4-Wheel', img: img('totally-mobile-content-scooters-7-1920w.jpg'), alt: 'A red and black mobility scooter with a basket on the front.', desc: 'It’s time to make your mark on this world! The Go-Go® Sport offers simple disassembly and an ergonomic delta tiller, perfect for one-handed operation. Enjoy the versatility of this sporty scooter, as well as bright LED lighting.' },
      { name: 'Go-Go LX with CTS Suspension', sub: '4-Wheel', img: img('totally-mobile-content-scooters-8-1920w.jpg'), alt: 'A red and black mobility scooter with a basket on the front.', desc: 'There’s smooth, and then there’s the Go-Go® LX with CTS! This scooter has revolutionary suspension for the smoothest, most comfortable ride. From the park to your backyard, this feature-rich scooter offers best-in-class ride quality.' },
      { name: 'Go-Go ES2', sub: '3-Wheel', img: img('totally-mobile-content-scooters-9-1920w.jpg'), alt: 'A black mobility scooter with a basket on the front.', desc: 'Get ready to go with the Go-Go® ES2 Scooter! Compact and lightweight, this scooter has two speed settings for ultimate versatility, whether you are indoors or outdoors. It’s perfect for errands and quick trips! Plus, a front basket provides plenty of storage space.' },
      { name: 'Go-Go Ultra X', sub: '3-Wheel', img: img('totally-mobile-content-scooters-10-1920w.jpg'), alt: 'A black mobility scooter with a basket on the front.', desc: 'Enjoy worry-free travel with the Go-Go® Ultra X, an ultra-compact scooter that is simple to disassemble. Ride in comfort and style with the foldable swivel seat and keep your personal items handy with the front basket.' },
      { name: 'Maxima', sub: '4-Wheel', img: img('totally-mobile-content-scooters-11-1920w.jpg'), alt: 'A red mobility scooter with a basket on the front on a white background.', desc: 'Heavy duty and robust, the Maxima scooter maximizes your potential! Drive at speeds up to 5.3 mph and experience a fully adjustable tiller. Enjoy the convenience of the front basket, perfect for storing your personal items.' },
      { name: 'Go-Go AL + Endurance', sub: '4-Wheel', img: img('totally-mobile-content-scooters-12-225a7979-1920w.jpg'), alt: 'Red and black Go-Go LX mobility scooter with a front basket and mesh seat.', desc: 'Supported by a lightweight aluminum frame, the Go Go® Endurance AL+ is a modern travel mobility scooter! Powered by a lithium battery, you can make tight turns with EZ Turn technology and recharge magnetically with Charge360. Other premium features, such as CTS Suspension, an infinite tiller adjustment, and feather-touch disassembly, make for a first-class mobility experience!' },
      { name: 'Go-Go Super Portable', sub: '4-Wheel', img: img('totally-mobile-content-scooters-13-1920w.jpg'), alt: 'Light blue and black Pride mobility scooter with basket and seat, outdoors.', desc: 'Folding in seconds to a height of 12" without having to remove the seat, the Go Go Super Portable scooter features Charge360 technology for convenient, magnetic battery charging and weighs just 41.6 pounds without the battery.' },
      { name: 'Pursuit 2', sub: '4-Wheel', img: img('totally-mobile-content-scooters-14-1920w.jpg'), alt: 'Orange Pride mobility scooter with black seat, basket, and tires.', desc: 'Built to handle adventures and outdoor terrain, the Pursuit 2 proves the best adventures are yet to come. With a fast cruising speed of 9.3 mph, a per-charge range up to 40 miles, and pneumatic tires that can tackle any road (or backroad), it puts thrill-seekers on the path to happiness, fast.' }
    ],
    review: 'maureen',
    related: ['/scooter-and-power-wheelchair-repair', '/vehicle-lifts', '/manual-and-powered-wheelchairs', '/rentals']
  },
  {
    path: '/beach-wheelchairs',
    nav: 'Beach Wheelchairs',
    keyword: 'beach wheelchairs',
    short: 'Fixed-frame and reclining all-terrain beach wheelchairs and aluminum beach walkers.',
    cardImg: img('BEACH+WALKER-1920w.jpg'),
    heroImg: img('totally-mobile-content-beach-wheelchair-1-1920w.jpg'),
    title: 'Beach Wheelchairs Cape Cod | All-Terrain Beach Wheelchair Sales & Rentals | East Sandwich, MA',
    description: 'Experience freedom at the beach with all-terrain beach wheelchairs from Totally Mobile LLC in East Sandwich, MA. Fixed-frame and reclining beach chairs and beach walkers — buy or rent on Cape Cod.',
    eyebrow: 'Beach Wheelchair Products',
    h1: 'Beach Wheelchairs on Cape Cod & the Islands',
    lede: 'Balloon-tire, all-terrain beach wheelchairs and beach walkers that roll right over the sand — to buy, or to rent for your Cape vacation.',
    sections: [
      { h2: 'Seaside Freedom Awaits with Our Beach Wheelchairs', html: `<p>Dive into a world where the beach is for everyone, thanks to Totally Mobile LLC's diverse selection of beach wheelchairs. Our wheelchairs are designed for both leisurely vacationing and adventurous rugged terrain, ensuring the sand and sea are always within your reach. Embrace the independence and mobility you deserve with styles and brands that cater to your unique seaside experiences.</p><p>Dreaming of a beach day without boundaries? ${c('Let us guide you')} to the perfect beach wheelchair with a free personalized consultation. Your next ocean adventure starts with a simple call to us!</p>` },
      { h2: 'Why Our Beach Wheelchairs Are a Shore Thing', html: `<p>Heading to the beach should always be a breeze, and with our beach wheelchairs, we make sure of it. Here's why you'll love our selection:</p><ul><li>Our diverse range ensures you find the perfect fit for vacationing and exploring rugged coastal terrains.</li><li>With a personal touch and over 20 years of experience, we know exactly how to keep you mobile and independent.</li><li>Our comprehensive service includes a 1-year warranty on labor and available manufacturer warranties for your peace of mind.</li><li>As a one-stop shop, we handle any repairs for items we sell, making your beach days worry-free.</li></ul><p>Ready to feel the sand between your wheels? ${c('Reach out')} today, and let's find your perfect beach companion!</p>` },
      { h2: 'Unparalleled Support for Your Seaside Adventures', html: `<p>At Totally Mobile LLC, we're not just about selling beach wheelchairs; we're about ensuring you have the support and service to go along with them. Here's how we keep your seaside mobility smooth and seamless:</p><ul><li>We offer any repairs on anything we sell, so you can focus on enjoying the beach, not worrying about your wheelchair.</li><li>Our team comes to you for repairs, ensuring your beach wheelchair is always ready for your next adventure.</li></ul><p>Is your beach wheelchair ready for the season? ${c('Give us a call')}, and we'll make sure it's seaworthy in no time!</p>` },
      { h2: 'Dive Into Beach Days with Confidence', html: `<p>Imagine a beach day where mobility isn't a hurdle but a joy. With Totally Mobile LLC's selection of beach wheelchairs, that day is today. Our wheelchairs are your ticket to freedom on the sand, designed for every beachgoer's needs, from serene vacations to off-the-beaten-path adventures.</p><p>With our commitment to personal service, extensive experience, and a variety of options to choose from, we're here to ensure your beach days are as boundless as the ocean itself. Looking to enhance your beach experience with a wheelchair that suits your lifestyle? ${c('Contact us today')} for a free consultation, and let's make every day a beach day! Visiting for a week? See our <a href="/beach-wheelchair-rentals-cape-cod">beach wheelchair rentals</a>.</p>` }
    ],
    ctaTitle: 'Beach Days Made Accessible, Warranty Guaranteed',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: 'All-Terrain Beach Wheelchairs & Walkers',
    products: [
      { name: 'Fixed Frame All-Terrain Beach Wheelchair', img: img('totally-mobile-content-beach-wheelchair-1-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background', desc: 'The Fixed Frame All Terrain Wheelchair is designed to safely provide wheelchair users with transportation across areas where a conventional wheelchair becomes unmanageable. This includes areas such as beaches, snow covered sidewalks, forest trails, etc.' },
      { name: 'Reclining All-Terrain Beach Wheelchair', img: img('totally-mobile-content-beach-wheelchair-2-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background.', desc: 'The Reclining All-Terrain Wheelchair has a leg rest that can be fully elevated, as well as a back rest that can be fully reclined. Both can be moved incrementally to maximize your comfort level. This Beach Wheelchair Recliner is designed to safely provide wheelchair users with transportation across areas where a conventional wheelchair becomes unmanageable; beaches, snow covered sidewalks, forest trails, etc.' },
      { name: 'Elevating Leg Rest', img: img('totally-mobile-content-beach-wheelchair-3-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background', desc: 'With the elevating leg rest feature, one can incrementally raise, or lower the leg rest depending on desired comfort level. This feature is great for users with circulatory issues or for people who just want to get some extra sun on their toes.' },
      { name: 'Aluminum Beach Walker', img: img('totally-mobile-content-personal-aid-4-1920w.jpg'), alt: 'Folding aluminum all-terrain beach walker with wide wheels', desc: 'The All Terrain Folding Aluminum Beach Walker features an innovative design. This walker ensures your limited mobility doesn’t have to limit your life. This lightweight, durable, and easy to use walker glides easily over the difficult sandy terrain of the beach while offering you stable support during your walk. In addition, this walker is not only ideal for the beach, it can be used on other difficult terrains like heavy sleet or snow that other walkers can’t handle.' }
    ],
    review: 'anne',
    related: ['/beach-wheelchair-rentals-cape-cod', '/rentals', '/manual-and-powered-wheelchairs']
  },
  {
    path: '/personal-aid',
    nav: 'Personal Aid',
    keyword: 'bathroom safety & personal aids',
    short: 'Shower transfer benches, toilet safety rails and commodes for safer daily living.',
    cardImg: img('totally-mobile-hero-personal-aid-ba8b4627-1920w.jpg'),
    heroImg: img('totally-mobile-hero-personal-aid-ba8b4627-1920w.jpg'),
    title: 'Personal Aids & Bathroom Safety Products | Transfer Benches, Commodes | East Sandwich, MA',
    description: 'Shower transfer benches, bathroom safety rails and commodes from Totally Mobile LLC in East Sandwich, MA. Personal aids that make hygiene easier, with a free personalized consultation.',
    eyebrow: 'Personal Aid Products',
    h1: 'Personal Aids & Bathroom Safety Products',
    lede: 'Durable, safe personal aids — transfer benches, safety rails and commodes — fitted to your home and your routine.',
    sections: [
      { h2: 'Personal Aids: Your Key to Enhanced Freedom', html: `<p>Discover how our personal care products can revolutionize your daily routine, offering unparalleled freedom for those facing mobility challenges. At Totally Mobile LLC, we pride ourselves on providing durable and safe personal aids that are the cornerstones of facilitating personal hygiene with ease.</p><p>From consultation to installation, our team is dedicated to ensuring your personal aids seamlessly integrate into your home and lifestyle. Looking to make your home more accessible and your daily routine smoother? ${c('Get in touch')} with us today to discuss your specific product needs and how we can tailor our solutions just for you.</p>` },
      { h2: 'Why Choose Totally Mobile for Your Personal Aids', html: `<p>Our commitment to enhancing your mobility extends into every aspect of your daily life, including personal care. Here's why Totally Mobile LLC is your go-to for personal aids:</p><ul><li>We're a one-stop shop, ensuring you find all your mobility and personal care solutions under one roof.</li><li>Durability and safety are at the forefront of our personal aid selection, giving you peace of mind.</li><li>Our extensive experience and personal touch mean we understand your needs and are here to offer customized solutions.</li><li>With a free personalized consultation, we take the time to understand your specific requirements and preferences.</li></ul><p>Ready to transform your personal care routine? ${c('Reach out to us now')}, and let's make daily living easier together.</p>` },
      { h2: 'Seamless Integration with Bathroom Accessibility Design', html: `<p>At Totally Mobile LLC, we go beyond just supplying personal aids; we ensure they fit perfectly into your life and home. Our collaboration with bathroom accessibility design teams ensures that:</p><ul><li>Your chosen personal aids will fit precisely where they need to, enhancing both functionality and aesthetics.</li><li>With our comprehensive service, including a 1-year warranty on our labor and available manufacturer warranties, you're covered.</li></ul><p>Considering enhancing your bathroom with our personal aids? ${c('Let us guide you')} through the process for a perfectly tailored solution.</p>` },
      { h2: 'Empower Your Independence with Personal Care Products', html: `<p>Imagine a day when mobility challenges don't dictate your ability to care for yourself independently. With Totally Mobile LLC's personal aids, that day is today. Our products are designed to empower you, offering the freedom and dignity everyone deserves in their personal care routine.</p><p>Whether you're looking for solutions that enhance safety, durability, or ease of use, we have the expertise and options to suit your needs. Want to know more about how we can help make your bathroom more accessible and your daily routine more autonomous? ${c('Contact us')} for a free consultation, and let's take the first step towards enhanced independence together.</p>` }
    ],
    ctaTitle: 'Empowering Independence Since 1998 with Personal Aids',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: 'Bathroom Safety & Personal Aids',
    products: [
      { name: 'Shower/Bath Transfer Chair', img: img('totally-mobile-content-personal-aid-1-1920w.jpg'), alt: 'A white bath bench with two seats and a handle', desc: 'This shower transfer bench is versatile, durable, and functional because of its reversible configuration, A-frame construction, and u-shape cutout to help with water spilling onto the floor.' },
      { name: 'Bathroom Safety Rail', img: img('totally-mobile-content-personal-aid-2-1920w.jpg'), alt: 'Freestanding toilet safety rail with black padded handles', desc: 'Add a new level of bathroom safety, comfort, and independence with a Bathroom Safety Rail. The toilet safety rail stands on its own without installation, ideal for adding security and stability around the bathroom. The toilet support rail can easily fit around your toilet to provide safe support and assistance while sitting down or rising from the toilet.' },
      { name: 'Commodes', img: img('totally-mobile-content-personal-aid-3-1920w.jpg'), alt: 'A white commode chair with a bucket attached to it', desc: 'Imagine this: you are relaxing in your favorite chair… and nature calls. An in-home commode makes it easy for you to relieve yourself without worrying if you will make it to the bathroom in time. And for nighttime emergencies, a bedside commode eliminates the struggle of navigating to the toilet in the dark. Commodes are accessible for all individuals with mobility issues as well as those who are recovering from surgery or injury.' }
    ],
    review: 'john',
    related: ['/recliner-lift-chairs', '/stair-lifts-cape-cod', '/rentals']
  },
  {
    path: '/rentals',
    nav: 'Rentals',
    keyword: 'mobility equipment rentals',
    short: 'Daily, weekly and monthly rentals: power chairs, scooters, beach wheelchairs, ramps and stair lifts.',
    cardImg: img('414664635_859500122851799_2565856386667513099_n-1920w.jpg'),
    heroImg: img('414664635_859500122851799_2565856386667513099_n-1920w.jpg'),
    title: 'Mobility Equipment Rentals Cape Cod | Wheelchair, Scooter & Beach Wheelchair Rental | East Sandwich, MA',
    description: 'Rent mobility equipment on Cape Cod from Totally Mobile LLC in East Sandwich, MA — power chairs, scooters, beach wheelchairs, ramps & straight stair lifts. Daily, weekly & monthly. Delivery available.',
    eyebrow: 'Mobility Equipment Rentals',
    h1: 'Wheelchair, Scooter & Mobility Equipment Rentals on Cape Cod',
    lede: 'Daily, weekly and monthly rentals for visitors and year-round residents — with delivery available.',
    banner: 'Now taking beach wheelchair reservations for the upcoming summer season!',
    sections: [
      { h2: 'Mobility for Every Moment: Rental Equipment Solutions', html: `<p>At Totally Mobile LLC, we understand that mobility needs can vary, from temporary setbacks like a broken leg to more permanent changes in mobility as we age. That's why we offer a flexible range of rental equipment, including wheelchairs, beach wheelchairs, modular and suitcase ramps, scooters, straight stair lifts, personal aid products, and more, tailored to suit every individual situation.</p><p>Whether you're navigating a new "normal" or assisting a loved one through a period of adjustment, our rental options are available daily, weekly, and monthly to ensure you have the support you need when you need it. Curious about our rental options and how they can help you or a loved one stay mobile? ${c("Let's chat")} today for more details.</p>` },
      { h2: 'Choose Us for Your Rental Needs', html: `<p>Opting for rental equipment from Totally Mobile LLC means you're not just getting a mobility aid; you're gaining a partner dedicated to keeping you mobile. Here are just a few reasons to choose us for your rental needs:</p><ul><li>A broad selection of equipment, including lightweight and standard power chairs, 3- and 4-wheel scooters, beach wheelchairs, and more.</li><li>Our commitment to mobility extends to offering beach wheelchairs and scooters, ensuring you can enjoy every environment.</li><li>With over 20 years of experience and a commitment to personal service, we understand the importance of providing the right solution for your mobility needs.</li></ul><p>Looking for a temporary mobility solution? ${c('Reach out now')} and discover the perfect rental equipment for your needs.</p>` },
      { h2: 'Seamless Rental Experience with Totally Mobile LLC', html: `<p>Our rental service is designed to put your mind at ease, offering you the freedom and flexibility to choose the right mobility aid for any period of need. Here's how we ensure a hassle-free rental experience:</p><ul><li>We offer a comprehensive range of rental options, from power chairs and scooters to wheeled walkers with brakes, catering to diverse mobility needs.</li><li>Our service includes assistance with any repairs for rental items, ensuring your equipment is always in top condition.</li><li>We offer specialized rental options for those requiring mobility aids for beach access or overcoming stair challenges.</li></ul><p>Need a mobility aid for a short period? ${c('Contact us today')}, and let us take care of the details so you can focus on staying mobile.</p>` },
      { h2: 'Your Partner in Mobility: Rent with Confidence', html: `<p>At Totally Mobile LLC, we're more than just a rental service; we're your partner in navigating life's mobility challenges. With a wide range of rental equipment available for various needs and timeframes, we're here to support you or your loved ones in maintaining independence and quality of life, no matter the circumstance. Our team is dedicated to providing personalized solutions and the flexibility you need to tackle any mobility challenge head-on.</p><p>Ready to find out more about our rental services and how we can help keep you moving? ${c('Give us a call')} for a free consultation, and let's get you equipped with the perfect mobility aid for your needs.</p>` }
    ],
    ctaTitle: 'Flexible Mobility Solutions with Free Consultation',
    ctaSub: 'Call Totally Mobile LLC today!',
    rentalList: [
      { name: 'Lightweight & standard power chairs', href: '/manual-and-powered-wheelchairs' },
      { name: 'Manual wheelchairs', href: '/manual-and-powered-wheelchairs' },
      { name: '3- and 4-wheel scooters', href: '/scooters' },
      { name: 'Beach wheelchairs', href: '/beach-wheelchair-rentals-cape-cod' },
      { name: 'Modular & suitcase ramps', href: '/ramps' },
      { name: 'Straight stair lifts', href: '/stair-lifts-cape-cod' },
      { name: 'Wheeled walkers with brakes', href: '/personal-aid' },
      { name: 'Personal aid products', href: '/personal-aid' }
    ],
    review: 'doug',
    related: ['/beach-wheelchair-rentals-cape-cod', '/scooters', '/manual-and-powered-wheelchairs']
  },

  // ---------- NEW SERVICE PAGES ----------
  {
    path: '/scooter-and-power-wheelchair-repair',
    isNew: true,
    nav: 'Scooter & Wheelchair Repair',
    keyword: 'scooter & power wheelchair repair',
    short: 'In-home repair for any scooter or power wheelchair — no matter where you bought it.',
    cardImg: img('totally-mobile-content-scooters-8-1920w.jpg'),
    heroImg: img('SCOOTER+AND+BEACH+WHEELCHAIR-1920w.jpg'),
    title: 'Mobility Scooter & Power Wheelchair Repair Cape Cod | In-Home Service | Totally Mobile',
    description: 'In-home mobility scooter and power wheelchair repair on Cape Cod, the Islands & the South Shore. We service any brand, wherever it was bought. 1-year labor warranty. Call (508) 888-9433.',
    eyebrow: 'Repairs & Service',
    h1: 'Mobility Scooter & Power Wheelchair Repair — We Come to You',
    lede: 'No need to haul a 200-lb power chair anywhere. Our technicians repair scooters and power wheelchairs right at your home.',
    sections: [
      { h2: 'In-Home Repair for Scooters & Power Wheelchairs', html: `<p>Since 1998, our locally and woman-owned business has been at the forefront of mobility solutions. With over 20 years under our belt, we've seen it all and fixed it all—from scooters to wheelchairs, if we sell it, we repair it. And we're not just talking about minor tweaks here and there. We're here to assist with all repairs, big or small.</p><p>That's right, we come to you! No need to worry about how you'll get your powered wheelchair or scooter to us for repairs; we bring our expertise directly to your doorstep. ${c('Request service')} or call <a href="tel:+15088889433">(508) 888-9433</a>.</p>` },
      { h2: 'We Service Any Brand — Wherever It Was Bought', html: `<p>We're equipped to service any powered wheelchair or scooter, regardless of where it was bought. Common service calls include:</p><ul><li>Scooters and power chairs that won't hold a charge, or won't power on</li><li>Tires, casters and tire inflation on scooters, power chairs and beach wheelchairs</li><li>Joystick, controller and tiller issues</li><li>Seat, armrest and footrest adjustments and replacement parts</li><li>Seasonal tune-ups before summer travel or beach season</li><li>Stair lift, lift chair and platform lift service on equipment we sell</li></ul>` },
      { h2: 'Warranty-Backed Work', html: `<p>Our commitment to you doesn't end with a sale. We offer a 1-year warranty on our labor, plus manufacturer warranties to ensure your mobility solutions are always in top-notch condition. We service all of our new and used wheelchair products; VA pricing is restricted to their guidelines.</p><p>Is your scooter in need of a tune-up or repair? ${c('Give us a call')}, and we'll take care of the rest!</p>` }
    ],
    ctaTitle: 'Navigate Life Smoothly, Worry-Free Repairs Included',
    ctaSub: 'Call Totally Mobile LLC today!',
    review: 'maureen',
    faqs: [
      { q: 'Do you do scooter and powered wheelchair repair?', a: "Absolutely, we're equipped to service any powered wheelchair or scooter, regardless of where it was bought." },
      { q: 'Do I have to come to you to get my scooter or powered wheelchair repaired?', a: 'Not at all, we prefer to make things easier for you by coming to your location to perform repairs or maintenance.' },
      { q: 'Do you offer any warranties for your work?', a: 'Yes, we provide a one-year warranty on our labor in addition to the availability of manufacturer warranties.' }
    ],
    related: ['/scooters', '/manual-and-powered-wheelchairs', '/stair-lifts-cape-cod']
  },
  {
    path: '/vertical-platform-lifts',
    isNew: true,
    nav: 'Vertical Platform Lifts',
    keyword: 'vertical platform lifts',
    short: 'Bruno residential & commercial porch lifts — a mini elevator for wheelchair users.',
    cardImg: img('VPL-1920w.jpg'),
    heroImg: img('VPL2-1920w.jpg'),
    title: 'Vertical Platform Lifts & Porch Lifts Cape Cod | Bruno VPL Installation | Totally Mobile',
    description: 'Bruno residential and commercial vertical platform lifts (porch lifts) installed on Cape Cod and the South Shore by Totally Mobile LLC. A cost-effective alternative to entry or deck steps.',
    eyebrow: 'Vertical Platform Lifts',
    h1: 'Vertical Platform Lifts & Porch Lifts on Cape Cod',
    lede: 'When a ramp would be too long for the yard, a Bruno vertical platform lift gets a wheelchair or scooter onto the porch or deck in seconds.',
    sections: [
      { h2: 'A Mini Home Elevator for Your Entryway', html: `<p>Use a vertical platform lift like a mini-home elevator. Often called a porch lift, a Bruno residential vertical platform lift is a cost-effective home accessibility solution to give scooter and wheelchair users an alternative to an entryway or deck steps.</p><p>Cape homes are often built up a few steps for flood zones and frost lines, and a code-compliant ramp for that height can stretch across most of a front yard. A platform lift takes up a fraction of the footprint. ${c('Ask about a free consultation')} to see what fits your entry.</p>` },
      { h2: 'Residential and Commercial Platform Lifts', html: `<ul><li>Bruno residential vertical platform lifts for porches, decks and garage entries</li><li>Commercial platform lifts for offices, churches, schools and businesses</li><li>Professional installation, with any required permits navigated for you</li><li>1-year warranty on our labor plus manufacturer warranties</li><li>Service and repair on everything we sell</li></ul><p>See more of our local installs in the <a href="/gallery">gallery</a>, or watch the Bruno platform lift in action on our <a href="/videos">videos page</a>.</p>` }
    ],
    ctaTitle: 'One Stop Shop for Easy Access Solutions',
    ctaSub: 'Call Totally Mobile LLC today!',
    productsTitle: 'Recent Platform Lift Installs',
    products: [
      { name: 'Platform Lift Install', img: img('VPL-1920w.jpg'), alt: 'Vertical platform lift installed by Totally Mobile', desc: 'A vertical platform lift installed by our team for step-free access.' },
      { name: 'Platform Lift Install', img: img('VPL3-1920w.jpg'), alt: 'Vertical platform lift installed by Totally Mobile', desc: 'Another local platform lift project — a compact alternative to a long ramp run.' },
      { name: 'Platform Lift Install', img: img('VPL5-1920w.jpg'), alt: 'Vertical platform lift installed by Totally Mobile', desc: 'Platform lift installed and serviced by Totally Mobile LLC.' }
    ],
    review: 'virginia',
    related: ['/ramps', '/stair-lifts-cape-cod', '/vehicle-lifts']
  },
  {
    path: '/vehicle-lifts',
    isNew: true,
    nav: 'Vehicle Lifts',
    keyword: 'vehicle scooter & wheelchair lifts',
    short: 'Bruno Out-Sider, Curbside and interior lifts to take your scooter or chair along.',
    cardImg: img('totally-mobile-content-ramp-2-1920w.jpg'),
    heroImg: img('totally-mobile-content-ramp-2-1920w.jpg'),
    title: 'Vehicle Scooter & Wheelchair Lifts Cape Cod | Bruno Car Lifts | Totally Mobile',
    description: 'Bruno vehicle lifts for scooters and wheelchairs — Out-Sider hitch lifts, Curbside and interior lifts — installed on your vehicle on Cape Cod. We come to you. Call (508) 888-9433.',
    eyebrow: 'Vehicle Lifts',
    h1: 'Scooter & Wheelchair Lifts for Your Car, SUV or Van',
    lede: 'Bring your scooter or power chair everywhere you go. We install Bruno vehicle lifts — and we come to you to do it.',
    sections: [
      { h2: 'Take Your Mobility Device Along', html: `<p>A scooter or power chair is only freeing if it can go where you go. Bruno vehicle lifts load your mobility device onto or into your vehicle at the push of a button, so trips to the beach, the doctor or the grandkids don't depend on someone strong enough to lift it.</p><p>Do you need to come to us to have your lift put onto your vehicle? Absolutely not! We'll come directly to you to ensure your lift is securely installed on your vehicle. ${c('Contact us')} for a free personalized consultation.</p>` },
      { h2: 'Bruno Vehicle Lift Options', html: `<ul><li><strong>Bruno Out-Sider</strong> — an exterior hitch-mounted platform lift that carries a scooter or power chair behind your vehicle</li><li><strong>Bruno / Meridian scooter & wheelchair lift</strong> — exterior lift options for scooters and power chairs</li><li><strong>Bruno Curbside</strong> — an interior lift that hoists the chair or scooter into a van, SUV or truck bed</li><li><strong>Portable ramps</strong> — American Access Sidekick folding and solid ramps for vans and curbs (<a href="/ramps">see ramps</a>)</li></ul><p>Watch each Bruno lift in action on our <a href="/videos">videos page</a>.</p>` }
    ],
    ctaTitle: 'Explore More with Reliable Scooters and Expert Care',
    ctaSub: 'Call Totally Mobile LLC today!',
    review: 'debby',
    faqs: [
      { q: 'Do I need to come to you to have my lift put onto my vehicle?', a: "Absolutely not! We'll come directly to you to ensure your lift is securely installed on your vehicle." }
    ],
    related: ['/scooters', '/manual-and-powered-wheelchairs', '/ramps']
  },
  {
    path: '/beach-wheelchair-rentals-cape-cod',
    isNew: true,
    nav: 'Beach Wheelchair Rentals',
    keyword: 'beach wheelchair rentals',
    short: 'Rent an all-terrain beach wheelchair for your Cape Cod or Islands vacation.',
    cardImg: img('totally-mobile-content-beach-wheelchair-2-1920w.jpg'),
    heroImg: img('SCOOTER+AND+BEACH+WHEELCHAIR-1920w.jpg'),
    title: 'Beach Wheelchair Rentals Cape Cod & the Islands | Daily & Weekly | Totally Mobile',
    description: 'Rent an all-terrain beach wheelchair on Cape Cod, Martha’s Vineyard or Nantucket. Fixed-frame & reclining models, beach walkers, daily and weekly rentals. Reserve early for summer: (508) 888-9433.',
    eyebrow: 'Beach Wheelchair Rentals',
    h1: 'Beach Wheelchair Rentals on Cape Cod & the Islands',
    lede: 'Vacationing on the Cape? Rent a balloon-tire beach wheelchair by the day or the week — and reserve early, because summer books up.',
    banner: 'Now taking beach wheelchair reservations for the upcoming summer season!',
    sections: [
      { h2: 'Enjoy the Sand and Sea Without a Second Thought', html: `<p>Here at Totally Mobile LLC, we're all about keeping you mobile, moving, and grooving, especially when the beach calls your name. With our beach wheelchairs, you can enjoy the sand and sea without a second thought. Rentals are available daily, weekly, and monthly, so whether you're here for a long weekend or the whole summer, you're covered.</p><p>Many families call us after an unexpected injury or surgery right before a trip — we've helped visitors on short notice, and we'll even check in on your rental at the beach. ${c('Reserve your beach wheelchair')} or call <a href="tel:+15088889433">(508) 888-9433</a>.</p>` },
      { h2: 'Beach Rental Options', html: `<ul><li>Fixed Frame All-Terrain Beach Wheelchair</li><li>Reclining All-Terrain Beach Wheelchair with elevating leg rest</li><li>All Terrain Folding Aluminum Beach Walker</li><li>Portable power chairs and scooters for boardwalks, town centers and rental cottages</li><li>Suitcase ramps for rental-home steps</li></ul><p>Prefer to own one? Browse our <a href="/beach-wheelchairs">beach wheelchairs for sale</a>.</p>` },
      { h2: 'Tips for an Accessible Cape Cod Beach Day', html: `<ul><li>Book early — summer weeks are the first to fill.</li><li>Balloon tires roll best on soft sand; let us know which beach you're headed to so we match the chair to it.</li><li>Many Cape and Islands towns offer accessible beach mats at main beaches — check with the town beach office before you go.</li><li>Heading to Nantucket? Our customers tell us the brick and cobblestone streets in town are rough going for power chairs, so plan town outings accordingly.</li></ul>` }
    ],
    ctaTitle: 'Beach Days Made Accessible, Warranty Guaranteed',
    ctaSub: 'Call Totally Mobile LLC today!',
    products: [
      { name: 'Fixed Frame All-Terrain Beach Wheelchair', img: img('totally-mobile-content-beach-wheelchair-1-1920w.jpg'), alt: 'A blue wheelchair with large wheels on a white background', desc: 'Designed to safely move across areas where a conventional wheelchair becomes unmanageable — beaches, snow-covered sidewalks and trails.' },
      { name: 'Reclining All-Terrain Beach Wheelchair', img: img('totally-mobile-content-beach-wheelchair-2-1920w.jpg'), alt: 'A blue reclining beach wheelchair with large wheels', desc: 'Fully elevating leg rest and fully reclining back rest, each adjustable incrementally for comfort.' },
      { name: 'Aluminum Beach Walker', img: img('totally-mobile-content-personal-aid-4-1920w.jpg'), alt: 'Folding aluminum all-terrain beach walker', desc: 'Lightweight, durable walker that glides over sandy terrain while giving you stable support.' }
    ],
    review: 'anne',
    related: ['/beach-wheelchairs', '/rentals', '/scooters']
  }
];

module.exports = pages;
module.exports.byPath = Object.fromEntries(pages.map((p) => [p.path, p]));
