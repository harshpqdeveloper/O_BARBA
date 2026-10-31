# OBARBA — Salon · Barber · Makeup

A premium black-and-gold website for OBARBA, built with **React 19 + Vite 8** and React Router.
It has 13 pages plus a 404 page, works on desktop, tablet and phone, and takes bookings through WhatsApp.

---

## Run the website

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # first time only
npm run dev        # start the site → http://localhost:5173
```

Production build:

```bash
npm run build      # creates the finished website in /dist
npm run preview    # preview that build → http://localhost:4173
```

---

## Pages

| Page | Address |
| --- | --- |
| Home | `/` |
| Men’s Home · Services · Gallery | `/men` · `/men/services` · `/men/gallery` |
| Women’s Home · Services · Gallery | `/women` · `/women/services` · `/women/gallery` |
| Makeup Artist | `/makeup-artist` |
| Bridal & Party Makeup | `/bridal-party-makeup` |
| About OBARBA | `/about` |
| Our Team | `/team` |
| Reviews | `/reviews` |
| Contact Us | `/contact` |
| Gallery (all categories, filterable) | `/gallery` — e.g. `/gallery?category=bridal` |

---

## Before launch — checklist

Everything you need to edit is in a few central files. You never need to edit a page to change business details.

1. **`src/config/site.js`** — WhatsApp number, phone, email, address, opening hours, Google Maps link, social links, review link and the makeup artist’s profile. Every `[bracketed]` value is a placeholder.
2. **`src/data/services.js`** — service names, descriptions and prices. `price: null` shows “Price on request”; write a price as text, e.g. `price: '₹ 499'`.
3. **`src/data/team.js`** — team names, roles, bios and photos.
4. **`src/data/reviews.js`** — replace the sample reviews with genuine client reviews.
5. **Photos** — replace the temporary stock photos with real OBARBA photos. See **[IMAGE-GUIDE.md](IMAGE-GUIDE.md)**.
6. **`showSampleNotices: false`** in `src/config/site.js` once real photos, team details and reviews are in. This removes the small “sample content” notes.
7. **Logo** — the crown wordmark is drawn in `src/components/ui/Logo.jsx`. You can swap it for an image of the real logo.

Nothing in the site is presented as real business information. Contact details, hours, team members, reviews and the makeup artist’s profile are all clearly marked placeholders until you fill them in.

---

## WhatsApp booking

- Set the number once in `src/config/site.js`:
  ```js
  whatsappNumber: '919876543210', // country code + number, digits only
  ```
- Booking buttons appear in the header (**Book Now**), as a floating button on every page, on every service in the services menus, on the makeup pages, in every booking section and on the Contact page.
- Each button opens WhatsApp with a message already written for that service, e.g. *“Hello OBARBA, I would like to book an appointment for Skin Fade (Men — Haircuts)…”*.
- The Contact page’s enquiry form turns the visitor’s name, service, date and time into a ready-to-send WhatsApp message. Nothing is stored on the website.
- While the number is still the placeholder `91XXXXXXXXXX`, the buttons open WhatsApp with the message ready and let the visitor choose the recipient, so nothing is broken during setup. Once a real number is set, messages go straight to OBARBA.

Message wording lives in `src/utils/whatsapp.js`.

---

## Project structure

```
public/
  images/            ← all photos, grouped: men/ women/ makeup/ bridal/ interior/
  favicon.svg
src/
  config/
    site.js          ← business details, WhatsApp number, hours, flags
    images.js        ← central list of every photo (path, description, crop focus)
  data/
    services.js      ← all services, categories and homepage slider items
    gallery.js       ← gallery photos and categories
    team.js · reviews.js · navigation.js
  components/
    layout/          ← header, footer, floating WhatsApp, scroll handling
    ui/              ← buttons, page hero, fade slider, icons, logo…
    cards/ sections/ gallery/ home/
  pages/             ← one file per page (men/ and women/ sub-folders)
  styles/
    theme.css        ← colours, fonts, spacing (change the look here)
    base.css · layout.css · components.css · pages.css
```

---

## Design and motion

- **Theme:** colours, fonts and spacing are CSS variables in `src/styles/theme.css`. Men’s pages use an antique gold with sharper corners. Women’s pages use a soft champagne gold with gentler rounded corners. Both share the same black-and-gold brand.
- **Sliders:** the homepage services slider and the lookbook show 3–4 items at a time (4 on desktop, 3 on laptops, 2 on tablets, 1 on phones). They cross-fade to the next set every few seconds. There is no sliding, zooming or bouncing.
  - They pause while the visitor hovers over them, while they’re off-screen, and in a background tab.
  - Each has small dot indicators and a pause button.
- **Reduced motion:** if a visitor’s device asks for reduced motion, nothing moves on its own. The sliders still work with their indicators.
- Everything else is static, with only gentle colour changes on hover.

---

## Deploying

`npm run build` produces a static website in `/dist`. You can upload it to any static host, such as Netlify, Vercel, Cloudflare Pages or regular web hosting.

The site uses clean addresses like `/men/services`. Your host must send every address to `index.html`:

- **Netlify:** add a file `public/_redirects` containing `/*  /index.html  200`
- **Vercel:** add `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **Apache hosting:** add an `.htaccess` file with a rewrite rule to `index.html`

The fonts (Playfair Display and Jost) load from Google Fonts.
