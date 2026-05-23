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
    hero: null as string | null,
    gallery: Array(8).fill(null) as (string | null)[],
  },

  contact: {
    name: 'Listing Agent',
    email: 'agent@example.com',
    phone: '(303) 555-0100',
  },

  features: [
    { icon: 'mountain', label: 'Mountain views' },
    { icon: 'car', label: 'Two-car garage' },
    { icon: 'flame', label: 'Gas fireplace' },
    { icon: 'tree', label: 'Mature landscaping' },
    { icon: 'sun', label: 'Sun-drenched deck' },
    { icon: 'chef-hat', label: 'Updated kitchen' },
    { icon: 'bath', label: 'Spa-like primary bath' },
    { icon: 'ruler', label: 'Open floor plan' },
  ],

  details: [
    { label: 'MLS #', value: 'TBD' },
    { label: 'HOA', value: 'TBD' },
    { label: 'Property taxes', value: 'TBD' },
    { label: 'Heating', value: 'Forced air' },
    { label: 'Cooling', value: 'Central A/C' },
    { label: 'Parking', value: '2-car attached garage' },
    { label: 'Lot size', value: '0.25 acres' },
    { label: 'Year built', value: '1998' },
  ],
} as const;

export type ListingData = typeof LISTING;
