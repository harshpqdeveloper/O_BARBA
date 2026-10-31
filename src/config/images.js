/**
 * OBARBA — central image registry.
 *
 * Every photo on the website is referenced from here, never directly inside a page.
 * To replace a photo, either:
 *   1. overwrite the file in /public/images/... keeping the same file name, or
 *   2. add your new file to /public/images/... and change `src` below.
 *
 * `position` controls which part of the photo stays visible when it is cropped
 * (CSS object-position, e.g. 'center', 'top', '50% 30%').
 *
 * The current photos are temporary royalty-free stock photography (Unsplash licence).
 * They are NOT OBARBA client work and should be replaced with real OBARBA photos.
 */
const base = import.meta.env.BASE_URL;
const img = (path, alt, position = 'center') => ({ src: `${base}images/${path}`, alt, position });

export const IMAGES = {
  // ── Men ───────────────────────────────────────────────────────────
  menPortrait: img('men/men-portrait-black-turtleneck.jpg', 'Well-groomed man in a black turtleneck', '50% 25%'),
  menHaircut: img('men/men-haircut-scissor-texture.jpg', 'Barber shaping a textured men’s haircut with scissors', '50% 35%'),
  menModernStyle: img('men/men-modern-curly-cut.jpg', 'Barber styling a modern curly haircut', '50% 30%'),
  menBeard: img('men/men-beard-scissor-trim.jpg', 'Beard being shaped with scissors', '50% 40%'),
  menHairTreatment: img('men/men-scalp-treatment-oil.jpg', 'Nourishing hair and scalp treatment oil being applied', 'center'),
  menFacial: img('men/men-shave-facial-grooming.jpg', 'Classic shave and facial grooming', 'center'),
  menSkinFade: img('men/men-skin-fade-clipper.jpg', 'Barber creating a clean skin fade with clippers', 'center'),
  menLineUp: img('men/men-beard-line-up.jpg', 'Precise beard line-up with a straight razor', '50% 35%'),
  menClassicCut: img('men/men-classic-cut-dark.jpg', 'Classic men’s haircut in a dark barbershop', 'center'),
  menBarberAtWork: img('men/men-barber-at-work.jpg', 'Barber at work in a warm-lit barbershop', 'center'),
  menHotTowel: img('men/men-hot-towel-shave.jpg', 'Traditional straight-razor shave in a dark barbershop', '40% center'),
  menBeardPortrait: img('men/men-full-beard-portrait.jpg', 'Portrait of a man with a full, groomed beard', '50% 30%'),
  menTools: img('men/men-barber-tools-dryer.jpg', 'Barber tools and hair dryer on a wooden counter', 'center'),

  // ── Women ─────────────────────────────────────────────────────────
  womenPortrait: img('women/women-portrait-elegant-updo.jpg', 'Woman with an elegant updo and gold jewellery', '50% 30%'),
  womenGlam: img('women/women-glam-portrait-dark.jpg', 'Glamorous portrait of a woman with long styled hair', '50% 25%'),
  womenHaircut: img('women/women-haircut-blonde-bob.jpg', 'Woman with a sleek, precision-cut bob', '50% 35%'),
  womenStyling: img('women/women-hair-styling-curls.jpg', 'Stylist creating soft curls with a curling iron', '50% 40%'),
  womenBlowDry: img('women/women-blow-dry-styling.jpg', 'Stylist giving a smooth round-brush blow-dry', 'center'),
  womenTreatment: img('women/women-hair-wash-treatment.jpg', 'Relaxing hair wash and conditioning treatment', 'center'),
  womenFacial: img('women/women-facial-beauty.jpg', 'Facial treatment with a nourishing face mask', 'center'),
  womenColour: img('women/women-lavender-hair-colour.jpg', 'Long waves in a soft lavender hair colour', '50% 30%'),
  womenWaves: img('women/women-long-soft-waves.jpg', 'Long, soft voluminous waves', '60% 30%'),
  womenCurls: img('women/women-natural-curls.jpg', 'Natural, defined curls', '50% 30%'),
  womenSalonBlowDry: img('women/women-salon-blow-dry.jpg', 'Stylist finishing a blow-dry in the salon', 'center'),

  // ── Makeup ────────────────────────────────────────────────────────
  makeupEyeliner: img('makeup/makeup-eyeliner-closeup.jpg', 'Close-up of soft glam makeup with winged eyeliner', '40% 40%'),
  makeupBrushes: img('makeup/makeup-brushes-warm.jpg', 'Professional makeup brushes in warm light', 'center'),
  makeupPalette: img('makeup/makeup-eyeshadow-palette.jpg', 'Eyeshadow palette in soft rose tones', 'center'),
  makeupPowder: img('makeup/makeup-brush-powder.jpg', 'Makeup brush resting in loose powder', 'center'),
  makeupFlatlay: img('makeup/makeup-flatlay-neutral.jpg', 'Makeup products and brushes arranged on a neutral background', 'center'),
  makeupBrushSet: img('makeup/makeup-brush-collection.jpg', 'Collection of makeup brushes', 'center'),
  makeupOccasion: img('makeup/makeup-special-occasion.jpg', 'Woman in an elegant green gown for a special occasion', '50% 30%'),

  // ── Bridal ────────────────────────────────────────────────────────
  bridalBride: img('bridal/bridal-indian-bride.jpg', 'Bride in traditional red bridal attire and jewellery', '50% 25%'),
  bridalGown: img('bridal/bridal-gown.jpg', 'Bridal gown displayed in soft daylight', '50% 40%'),
  bridalCelebration: img('bridal/bridal-wedding-celebration.jpg', 'Bride and groom celebrating with guests', 'center'),
  bridalBouquet: img('bridal/bridal-bouquet.jpg', 'Bridal bouquet in warm evening light', 'center'),

  // ── Salon interior ────────────────────────────────────────────────
  interiorModern: img('interior/interior-modern-salon.jpg', 'Modern salon interior with styling stations', 'center'),
  interiorBlackWall: img('interior/interior-salon-black-wall.jpg', 'Salon with a black feature wall and round mirrors', 'center'),
  interiorWarm: img('interior/interior-barbershop-warm-lights.jpg', 'Barbershop interior with warm pendant lights', 'center'),
  interiorChair: img('interior/interior-leather-barber-chair.jpg', 'Leather barber chair', 'center'),
  interiorStations: img('interior/interior-salon-stations.jpg', 'Row of salon styling stations', 'center'),
  interiorChairs: img('interior/interior-styling-chairs.jpg', 'Styling chairs in a bright salon', 'center'),
  interiorRow: img('interior/interior-barbershop-row.jpg', 'Long row of barber chairs and mirrors', 'center'),
};
