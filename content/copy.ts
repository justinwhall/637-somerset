export const COPY = {
  hero: {
    tagline: 'Your foothills retreat in Golden',
    cta: 'Schedule a showing',
  },

  stats: {
    price: 'Price',
    beds: 'Bedrooms',
    baths: 'Bathrooms',
    sqft: 'Sq Ft',
    lotAcres: 'Lot Size',
    yearBuilt: 'Year Built',
  },

  about: {
    title: 'About the home',
    paragraphs: [
      'Welcome to 637 Somerset Dr — a beautifully maintained home nestled at the base of the foothills in one of Golden\'s most sought-after neighborhoods. With stunning mountain views and easy access to world-class hiking, biking, and outdoor recreation, this property offers the Colorado lifestyle at its finest.',
      'Inside you\'ll find an open floor plan bathed in natural light, a spacious updated kitchen perfect for entertaining, and a primary suite with spa-like bath. The sun-drenched deck is ideal for morning coffee with panoramic foothill views.',
      'Located minutes from downtown Golden, the Colorado School of Mines, and major commuter routes, this home blends mountain-town charm with everyday convenience.',
    ],
  },

  gallery: {
    title: 'Photo gallery',
    emptyLabel: 'Photo coming soon',
  },

  tour: {
    title: 'Virtual tour',
    placeholder:
      'Matterport 3D tour coming soon. Check back for an immersive walkthrough of the home.',
  },

  features: {
    title: 'Features & amenities',
  },

  location: {
    title: 'Location',
    description:
      'Golden sits at the gateway to the Rocky Mountain foothills, offering a unique blend of small-town charm and outdoor adventure.',
    highlights: [
      'Minutes from downtown Golden shops & restaurants',
      'Close to North & South Table Mountain trails',
      'Easy access to I-70 and C-470',
      'Top-rated Jefferson County schools',
      'Near Colorado School of Mines campus',
      'Short drive to world-class skiing',
    ],
    mapLabel: 'Open in Google Maps',
  },

  details: {
    title: 'Property details',
  },

  contact: {
    title: 'Interested in this home?',
    subtitle: 'Reach out to schedule a private showing or ask questions.',
    emailCta: 'Send an email',
    callCta: 'Call now',
    emailSubject: 'Inquiry: 637 Somerset Dr, Golden CO',
  },

  footer: {
    disclaimer:
      'Information deemed reliable but not guaranteed. Buyer to verify all information.',
  },
} as const;

export type CopyData = typeof COPY;
