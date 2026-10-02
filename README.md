# MahiVerse ✦

A deploy-ready Next.js + TypeScript interactive mini-site made for Mahi Sharma.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy

Works on Vercel or any Node-compatible Next.js host. Push the folder to GitHub and import the repo into Vercel, or run `npm run build` on your server.

## Customize

Everything is intentionally kept in `app/page.tsx` and `app/globals.css` so you can quickly change:
- Mahi's text / notes
- favourite singers and songs
- anime cards
- colors and typography
- photos (add them under `public/` and use Next/Image)

### Music note
The current music section is a visual/interactive player UI without copyrighted audio files. You can connect it to your own licensed audio source later.
