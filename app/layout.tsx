import type { Metadata } from 'next';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { DM_Sans } from 'next/font/google';

import { LISTING, SEO } from '@/content';
import { theme } from '@/theme/theme';

import '@mantine/core/styles.css';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const canonicalUrl = 'https://637somerset.com';
const { street, city, state, zip } = LISTING.address;
const fullAddress = `${street}, ${city}, ${state} ${zip}`;

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    type: 'website',
    locale: SEO.locale,
    siteName: SEO.siteName,
    url: canonicalUrl,
    images: LISTING.images.hero
      ? [{ url: `${canonicalUrl}${LISTING.images.hero}`, width: 1200, height: 675, alt: `${fullAddress} — home for sale` }]
      : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    images: LISTING.images.hero ? [`${canonicalUrl}${LISTING.images.hero}`] : [],
  },
  other: {
    'geo.region': 'US-CO',
    'geo.placename': city,
    'geo.position': '39.7555;-105.2211',
    'ICBM': '39.7555, -105.2211',
  },
};

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: `${street} — Home for Sale`,
    description: SEO.description,
    url: canonicalUrl,
    datePosted: new Date().toISOString().split('T')[0],
    image: LISTING.images.hero ? `${canonicalUrl}${LISTING.images.hero}` : undefined,
    about: {
      '@type': 'Residence',
      name: fullAddress,
      address: {
        '@type': 'PostalAddress',
        streetAddress: street,
        addressLocality: city,
        addressRegion: state,
        postalCode: zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.7555,
        longitude: -105.2211,
      },
      numberOfRooms: LISTING.stats.beds + LISTING.stats.baths,
      numberOfBedrooms: LISTING.stats.beds,
      numberOfBathroomsTotal: LISTING.stats.baths,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: LISTING.stats.sqft,
        unitCode: 'FTK',
      },
      yearBuilt: LISTING.stats.yearBuilt,
      lotSize: {
        '@type': 'QuantitativeValue',
        value: LISTING.stats.lotAcres,
        unitCode: 'ACR',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <JsonLd />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
