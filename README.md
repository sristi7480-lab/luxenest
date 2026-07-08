# LuxeNest — Luxury Home Decor Site

A warm, luxury-aesthetic landing page for a home decor affiliate business, built with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, Swiper, Lenis, and react-icons.

## Requirements
- Node.js 18+
- npm

## Setup & Run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`.

## What's included

- **Hero** with subtle parallax background and staggered entrance animation
- **Shop by Room** category grid
- **Trending Collections** and **Room Transformations** carousels (Swiper)
- **Best Sellers** product grid with wishlist toggle, ratings, sale badges, and "Buy on Amazon" buttons (`rel="nofollow sponsored noopener"`)
- **Why Choose Us**, **Room Inspiration** (alternating layout), **Testimonials**, **Pinterest masonry**, **Blog Preview**, and **Newsletter** sections
- Smooth scrolling via Lenis, scroll-triggered animation via Framer Motion (`whileInView`, once-only)
- `prefers-reduced-motion` respected for parallax and looping animations
- Mobile-first responsive layout, hamburger nav under 1024px
- SEO meta tags, Open Graph/Twitter cards, and Organization JSON-LD in `index.html`

## Before you launch

1. **Replace placeholder images.** All images currently use `picsum.photos` and `pravatar.cc` placeholders — swap in real product/lifestyle photography.
2. **Replace affiliate links.** Every "Buy on Amazon" button currently points to `#` — replace `affiliateUrl` in `src/components/BestSellers.tsx` with your real Amazon Associates links (include your tracking ID).
3. **Add your Amazon Associates disclosure** as its own page/route — required by Amazon's program policies, not just a footer mention.
4. **Wire up the newsletter form** to a real provider (Mailchimp, ConvertKit, etc.) — it currently only simulates success/error locally.
5. **Deploy** to Netlify or Vercel: connect this repo/folder and it will auto-detect the Vite build (`npm run build`, publish directory `dist`).

## Notes on the spec

This implementation follows the original design brief closely. One adjustment: Tailwind CSS v4 is used (the current major version), which is configured via `@theme` in `src/index.css` rather than a `tailwind.config.ts` file — the same warm-luxury color and font tokens from the brief are defined there instead.
