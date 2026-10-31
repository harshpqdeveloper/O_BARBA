# OBARBA — Image Replacement Guide

All photos on the website are **temporary royalty-free stock photography** (Unsplash licence).
They are **not** OBARBA client work. Replace them with real OBARBA photos before launch, or as soon as you can.

---

## How to replace a photo (no code needed)

1. Find the photo in the table below.
2. Prepare your new photo in a similar shape (portrait or landscape).
3. Save it with **exactly the same file name** and copy it over the old file in `public/images/...`
4. Refresh the browser. The new photo appears everywhere the old one was used.

**Recommended:** JPG, about **1400 px** on the longest side, under **250 KB**.
Tools like [Squoosh](https://squoosh.app) make photos web-ready in seconds.

### Using a different file name

Add your photo anywhere in `public/images/`, then open **`src/config/images.js`** and change the `src` path of that entry:

```js
menHaircut: img('men/my-new-haircut-photo.jpg', 'Barber shaping a textured men’s haircut', '50% 35%'),
//               ↑ new file path                ↑ description for screen readers / SEO   ↑ crop focus
```

### Fixing the crop

Photos are cropped to fit each layout. If a head or face is cut off, change the third value (the **focus point**):
`'center'`, `'top'`, `'50% 25%'` (horizontal %, vertical %). A lower vertical % keeps more of the top of the photo.

---

## Every photo and where it appears

### Men — `public/images/men/`

| File | Used on | Shape |
| --- | --- | --- |
| `men-portrait-black-turtleneck.jpg` | Home hero — **Men’s** selection card | Portrait |
| `men-hot-towel-shave.jpg` | Home hero background · Men’s Home hero | Landscape |
| `men-haircut-scissor-texture.jpg` | Men’s *Haircuts* · Home services slider · Gallery | Landscape |
| `men-modern-curly-cut.jpg` | Men’s *Modern Hairstyles* · Home services slider · Gallery | Portrait |
| `men-beard-scissor-trim.jpg` | Men’s *Beard Styling* · Home services slider · Gallery | Portrait |
| `men-scalp-treatment-oil.jpg` | Men’s *Hair Treatments* · Home services slider | Landscape |
| `men-shave-facial-grooming.jpg` | Men’s *Facial & Grooming* · Home services slider | Landscape |
| `men-barber-tools-dryer.jpg` | Men’s Home — “About Men’s Grooming” | Landscape |
| `men-skin-fade-clipper.jpg` | Men’s Services hero · Home lookbook · Galleries | Landscape |
| `men-barber-at-work.jpg` | Men’s Gallery hero · About (“For Him”) · Gallery | Landscape |
| `men-beard-line-up.jpg` · `men-classic-cut-dark.jpg` · `men-full-beard-portrait.jpg` | Galleries · Men’s Home gallery strip · Home lookbook | Any |

### Women — `public/images/women/`

| File | Used on | Shape |
| --- | --- | --- |
| `women-portrait-elegant-updo.jpg` | Home hero — **Women’s** selection card | Portrait |
| `women-glam-portrait-dark.jpg` | Home hero background (first photo) · Women’s Home hero | Portrait |
| `women-blow-dry-styling.jpg` | Home hero background · Women’s Services hero · Gallery | Landscape |
| `women-haircut-blonde-bob.jpg` | Women’s *Haircuts* · Home services slider · Gallery | Portrait |
| `women-hair-styling-curls.jpg` | Women’s *Hair Styling* · Home services slider · Gallery | Portrait |
| `women-hair-wash-treatment.jpg` | Women’s *Hair Treatments* · Home services slider | Landscape |
| `women-facial-beauty.jpg` | Women’s *Beauty Services* · Home services slider | Landscape |
| `women-salon-blow-dry.jpg` | Women’s Home intro · About (“For Her”) · Gallery | Landscape |
| `women-long-soft-waves.jpg` | Women’s Gallery hero · Home lookbook · Gallery | Landscape |
| `women-lavender-hair-colour.jpg` · `women-natural-curls.jpg` | Galleries · Home lookbook | Any |

### Makeup — `public/images/makeup/`

| File | Used on | Shape |
| --- | --- | --- |
| `makeup-eyeliner-closeup.jpg` | Makeup Artist hero · *Party Makeup* · Home services slider · Gallery | Landscape |
| `makeup-brushes-warm.jpg` | Makeup Artist “Meet the Artist” · *Makeup Artist* category · Home slider | Landscape |
| `makeup-special-occasion.jpg` | *Special Occasion* makeup · Bridal & Party page · Home slider | Portrait |
| `makeup-brush-powder.jpg` | *Engagement Makeup* card · Gallery | Landscape |
| `makeup-eyeshadow-palette.jpg` | Makeup page booking band · Home lookbook · Gallery | Landscape |
| `makeup-brush-collection.jpg` · `makeup-flatlay-neutral.jpg` | Galleries | Any |

### Bridal — `public/images/bridal/`

| File | Used on | Shape |
| --- | --- | --- |
| `bridal-indian-bride.jpg` | Home “Makeup Artistry” section · Bridal & Party hero · *Bridal Makeup* | Portrait |
| `bridal-gown.jpg` | Bridal & Party page — Bridal section · Gallery | Portrait |
| `bridal-bouquet.jpg` | Bridal & Party booking band · Gallery | Landscape |
| `bridal-wedding-celebration.jpg` | Home lookbook · Galleries | Landscape |

### Salon interior — `public/images/interior/`

| File | Used on | Shape |
| --- | --- | --- |
| `interior-modern-salon.jpg` | Home “About OBARBA” · About story · Women’s Services booking band | Landscape |
| `interior-barbershop-warm-lights.jpg` | Home hero background · Contact hero · About “The Space” · booking bands | Landscape |
| `interior-salon-black-wall.jpg` | About hero · Home lookbook · booking bands | Landscape |
| `interior-leather-barber-chair.jpg` | Reviews hero · Home lookbook · About “The Space” · Men’s Services & Team booking bands | Landscape |
| `interior-salon-stations.jpg` | Our Team hero · About “The Space” · booking band | Landscape |
| `interior-styling-chairs.jpg` | Home page booking band (“Your chair is waiting”) · Gallery | Landscape |
| `interior-barbershop-row.jpg` | Gallery hero · About & Men’s Gallery booking bands | Portrait |

**Best photos to shoot first:** the two selection-card portraits, the four homepage hero photos, and your real salon interior.
Those are what visitors see first.

---

## Team photos

1. Create the folder `public/images/team/` and add the photos (portrait shape, around 1000 × 1250 px).
2. In **`src/data/team.js`** set each person’s photo:
   ```js
   photo: { src: '/images/team/priya.jpg', alt: 'Priya, Senior Hair Stylist' },
   ```
   Until a photo is added, an elegant “Photo coming soon” placeholder is shown.

## Adding or removing gallery photos

Open **`src/data/gallery.js`**:
- Add a photo to `src/config/images.js` first. Then add a line to `GALLERY` with its category (`men`, `women`, `makeup`, `bridal` or `interior`) and a short caption.
- `HOME_LOOKBOOK` controls the 8 homepage lookbook photos: 2 sets of 4, where the first photo of each set is shown large.

## When everything is real

Set `showSampleNotices: false` in `src/config/site.js`. This hides the “temporary sample photography” notes across the site.
