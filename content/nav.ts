export const SECTION_IDS = {
  hero: 'hero',
  stats: 'stats',
  about: 'about',
  gallery: 'gallery',
  tour: 'tour',
  features: 'features',
  location: 'location',
  details: 'details',
  contact: 'contact',
} as const;

export const NAV_ITEMS = [
  { id: SECTION_IDS.about, label: 'About' },
  { id: SECTION_IDS.gallery, label: 'Gallery' },
  { id: SECTION_IDS.tour, label: 'Tour' },
  { id: SECTION_IDS.features, label: 'Features' },
  { id: SECTION_IDS.location, label: 'Location' },
  { id: SECTION_IDS.details, label: 'Details' },
  { id: SECTION_IDS.contact, label: 'Contact' },
] as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
