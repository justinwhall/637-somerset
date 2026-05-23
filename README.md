# 637 Somerset Dr — Golden, CO

Single-page listing site for 637 Somerset Dr, Golden, Colorado 80401.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy and listing data live in the `content/` folder. **No marketing strings in components.**

| File | What to edit |
|------|-------------|
| `content/copy.ts` | All user-facing text — taglines, section titles, paragraphs, button labels, footer disclaimer |
| `content/listing.ts` | Facts — address, stats (beds/baths/sqft), feature list, contact info, image paths, Matterport model ID |
| `content/nav.ts` | Section IDs and navigation labels |
| `content/seo.ts` | Page title, meta description, Open Graph strings |

## Adding photos

1. Drop images into `public/images/`.
2. Open `content/listing.ts` and set paths:

```ts
images: {
  hero: '/images/hero.jpg',
  gallery: [
    '/images/kitchen.jpg',
    '/images/living-room.jpg',
    // ...
  ],
},
```

## Enabling the Matterport virtual tour

In `content/listing.ts`, replace `null` with your Matterport model ID:

```ts
matterportModelId: 'SxQL3iGyoDo',
```

The iframe embed will appear automatically.

## Building for production

```bash
npm run build
npm start
```

## Deploying

Push to a Git repo connected to [Vercel](https://vercel.com) for zero-config deployment.

## Tech stack

- **Next.js 15** (App Router, server-rendered)
- **Mantine v7** (UI components)
- **TypeScript** (strict mode)
- **DM Sans** (Google Fonts)
