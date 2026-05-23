export const COPY = {
  hero: {
    heading: 'Home for Sale in Golden, CO',
    tagline: 'The dam finest lodge in Golden',
    cta: 'Gnaw on this — schedule a showing',
  },

  stats: {
    price: 'Price',
    beds: 'Sleeping Dens',
    baths: 'Watering Holes',
    sqft: 'Sq Ft of Lodge',
    lotAcres: 'Territory',
    yearBuilt: 'Established',
  },

  about: {
    title: 'Welcome to the lodge',
    paragraphs: [
      'Welcome to 637 Somerset Dr — the coziest dam lodge this side of Clear Creek. Nestled at the base of the foothills in one of Golden\'s most sought-after neighborhoods, this home is so well-built even a beaver would be jealous. Mountain views? Check. Easy access to hiking, biking, and enough outdoor recreation to make your tail slap with excitement? Double check.',
      'Inside you\'ll find an open floor plan with more natural light than a beaver pond at sunrise, a spacious updated kitchen perfect for gnawing on — er, preparing — gourmet meals, and a primary suite with a bath so nice you\'ll want to soak in it all winter. The sun-drenched deck is ideal for surveying your territory with a morning coffee.',
      'Located minutes from downtown Golden, the Colorado School of Mines (go Orediggers!), and major commuter routes, this lodge blends mountain-town charm with everyday convenience. No dam required — just move in.',
    ],
  },

  gallery: {
    title: 'Lodge photo gallery',
    emptyLabel: 'Photo coming soon — our beaver photographer is busy',
  },

  tour: {
    title: 'Virtual lodge tour',
    placeholder:
      'Our beaver is still chewing through the 3D scan. Matterport tour coming soon — check back for an immersive waddle through the lodge.',
  },

  features: {
    title: 'Lodge features & amenities',
  },

  location: {
    title: 'Prime beaver territory',
    description:
      'Golden sits at the gateway to the Rocky Mountain foothills — a land of rushing creeks, towering aspens, and more trails than a beaver can shake a stick at. Truly the finest territory in all of Jefferson County.',
    highlights: [
      'Minutes from downtown Golden — great foraging (shops & restaurants)',
      'Close to North & South Table Mountain trails — perfect for waddling',
      'Easy access to I-70 and C-470 — even with a flat tail',
      'Top-rated Jefferson County schools — smart kits welcome',
      'Near Colorado School of Mines — fellow industrious builders',
      'Short drive to world-class skiing — beavers love snow too',
    ],
    mapLabel: 'Find the lodge on Google Maps',
  },

  details: {
    title: 'Lodge specifications',
  },

  contact: {
    title: 'Ready to claim this lodge?',
    subtitle:
      'Don\'t let this one float downstream. Reach out to schedule a private showing before another beaver snags it.',
    emailCta: 'Send a carrier pigeon (email)',
    callCta: 'Slap your tail (call)',
    emailSubject: 'Dam Interested: 637 Somerset Dr, Golden CO',
  },

  footer: {
    disclaimer:
      'Information deemed reliable but not guaranteed. No actual beavers were harmed in the making of this listing. Buyer to verify all information and dam integrity.',
  },
} as const;

export type CopyData = typeof COPY;
