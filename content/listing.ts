export const LISTING = {
  address: {
    street: '637 Somerset Dr',
    city: 'Golden',
    state: 'CO',
    zip: '80401',
  },

  stats: {
    priceLabel: 'Contact for price',
    beds: 4,
    baths: 3,
    sqft: 2_400,
    lotAcres: 0.25,
    yearBuilt: 1998,
  },

  matterportModelId: null as string | null,

  images: {
    hero: '/images/hero.jpg',
    gallery: [
      '/images/gallery-1.jpg',
      '/images/gallery-2.jpg',
      '/images/gallery-3.jpg',
      '/images/gallery-4.jpg',
      '/images/gallery-5.jpg',
      '/images/gallery-6.jpg',
      '/images/gallery-7.jpg',
      '/images/gallery-8.jpg',
    ],
  },

  contact: {
    name: 'Listing Agent',
    email: 'jwindhall+somerset@gmail.com',
    phone: '720-360-7878',
  },

  features: [
    { icon: 'mountain', label: 'Mountain views (tail-slapping good)' },
    { icon: 'car', label: 'Two-log garage' },
    { icon: 'flame', label: 'Gas fireplace (for drying your fur)' },
    { icon: 'tree', label: 'Mature trees (snack-ready)' },
    { icon: 'sun', label: 'Sun-drenched deck (for basking)' },
    { icon: 'chef-hat', label: 'Updated kitchen (bark not included)' },
    { icon: 'bath', label: 'Spa-like soaking pond' },
    { icon: 'ruler', label: 'Open floor plan (room to waddle)' },
  ],

  details: [
    { label: 'MLS #', value: 'TBD' },
    { label: 'HOA', value: 'TBD' },
    { label: 'Property taxes', value: 'TBD' },
    { label: 'Heating', value: 'Forced air (warm as a beaver pelt)' },
    { label: 'Cooling', value: 'Central A/C (creek-breeze equivalent)' },
    { label: 'Parking', value: '2-log attached garage' },
    { label: 'Lot size', value: '0.25 acres of prime territory' },
    { label: 'Year built', value: '1998 (a fine vintage dam)' },
  ],
} as const;

export type ListingData = typeof LISTING;
