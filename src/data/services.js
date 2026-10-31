/**
 * OBARBA — central service data.
 *
 * Edit service names, descriptions and prices here; every page updates automatically.
 * `price: null` displays SITE.priceFallback ("Price on request").
 * Add a price as text, e.g. price: '₹ 499' or price: 'From ₹ 2,500'.
 */
import { IMAGES } from '../config/images';

export const MEN_CATEGORIES = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    tagline: 'Precision cuts, tailored to you',
    description:
      'Every cut begins with a consultation about your hair type, face shape and lifestyle, then is finished with care so it grows out as well as it looks on day one.',
    image: IMAGES.menHaircut,
    highlights: ['Consultation-led', 'Scissor & clipper work', 'Wash & style finish'],
    items: [
      { name: 'Signature Haircut', description: 'Consultation, precision cut, wash and finish styling.', price: null },
      { name: 'Scissor Cut', description: 'A fully scissor-worked cut for natural movement and softer texture.', price: null },
      { name: 'Skin Fade', description: 'Seamless fade blended from skin to length with sharp detailing.', price: null },
      { name: 'Buzz Cut & Edge-Up', description: 'Clean, even clipper cut with a crisp hairline.', price: null },
      { name: 'Kids’ Haircut', description: 'A patient, comfortable cut for younger clients.', price: null },
    ],
  },
  {
    id: 'modern-hairstyles',
    title: 'Modern Hairstyles',
    tagline: 'Contemporary shapes with character',
    description:
      'Textured crops, quiffs, curls and longer styles — shaped to suit you and finished with the right product so you can recreate the look at home.',
    image: IMAGES.menModernStyle,
    highlights: ['Texture & volume', 'Curl definition', 'Styling guidance'],
    items: [
      { name: 'Textured Crop', description: 'Short, textured top with a soft or sharp fade.', price: null },
      { name: 'Quiff & Pompadour', description: 'Height, shape and a polished finish.', price: null },
      { name: 'Curly Hair Cut & Define', description: 'Cut to work with your curl pattern, finished to define.', price: null },
      { name: 'Long Hair Shaping', description: 'Layering and shaping for medium-to-long styles.', price: null },
      { name: 'Event Styling', description: 'Blow-dry and finish styling for an occasion.', price: null },
    ],
  },
  {
    id: 'beard-styling',
    title: 'Beard Styling',
    tagline: 'Shape, line and condition',
    description:
      'From a tidy trim to a complete reshape — defined lines, balanced proportions and a conditioned, comfortable finish.',
    image: IMAGES.menBeard,
    highlights: ['Hot towel prep', 'Razor line-up', 'Beard oil finish'],
    items: [
      { name: 'Beard Trim & Shape', description: 'Trim, shape and tidy with a conditioning finish.', price: null },
      { name: 'Beard Sculpt & Line-Up', description: 'Full reshape with crisp razor-defined lines.', price: null },
      { name: 'Classic Hot Towel Shave', description: 'Traditional straight-razor shave with hot towel preparation.', price: null },
      { name: 'Beard Colour', description: 'Natural-looking colour to even out or refresh your beard.', price: null },
    ],
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    tagline: 'Healthy hair, healthy scalp',
    description:
      'Treatments that cleanse, nourish and strengthen — chosen after a quick look at your hair and scalp condition.',
    image: IMAGES.menHairTreatment,
    highlights: ['Scalp care', 'Nourishing oils', 'Colour services'],
    items: [
      { name: 'Hair Spa', description: 'Deep-conditioning treatment with a relaxing massage.', price: null },
      { name: 'Scalp Detox Treatment', description: 'Cleanses build-up and refreshes the scalp.', price: null },
      { name: 'Anti-Dandruff Treatment', description: 'Targeted care for a flaky or irritated scalp.', price: null },
      { name: 'Hair Colour & Grey Blending', description: 'Natural-looking colour or subtle grey blending.', price: null },
      { name: 'Keratin Smoothing', description: 'Reduces frizz for smoother, more manageable hair.', price: null },
    ],
  },
  {
    id: 'facial-grooming',
    title: 'Facial & Grooming',
    tagline: 'Fresh skin, finished look',
    description:
      'Skin-focused grooming designed for men — cleansing, exfoliation and finishing touches that leave you looking rested and sharp.',
    image: IMAGES.menFacial,
    highlights: ['Deep cleansing', 'Skin-type specific', 'Detail grooming'],
    items: [
      { name: 'Classic Clean-Up', description: 'Cleanse, exfoliate and refresh.', price: null },
      { name: 'Signature Facial', description: 'Deep cleansing facial tailored to your skin type.', price: null },
      { name: 'De-Tan Treatment', description: 'Helps brighten dull, sun-exposed skin.', price: null },
      { name: 'Eyebrow Grooming', description: 'Neat, natural-looking brow shaping.', price: null },
      { name: 'Groom’s Package', description: 'A combined pre-wedding grooming session — enquire for details.', price: null },
    ],
  },
];

export const WOMEN_CATEGORIES = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    tagline: 'Cut to flatter, made to last',
    description:
      'Precision cutting shaped around your features, texture and routine — from a subtle trim to a complete transformation.',
    image: IMAGES.womenHaircut,
    highlights: ['Personal consultation', 'Precision cutting', 'Blow-dry finish'],
    items: [
      { name: 'Signature Cut & Blow-Dry', description: 'Consultation, wash, precision cut and blow-dry finish.', price: null },
      { name: 'Trim & Shape', description: 'Refresh your current style and remove split ends.', price: null },
      { name: 'Layered Cut', description: 'Movement and volume through soft or defined layers.', price: null },
      { name: 'Bob & Lob', description: 'Clean, structured lines from classic bob to long bob.', price: null },
      { name: 'Fringe / Bangs Cut', description: 'A fringe shaped to frame your face.', price: null },
    ],
  },
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    tagline: 'Effortless to editorial',
    description:
      'Blow-dries, waves, curls and updos created to suit your outfit and occasion, finished to hold beautifully.',
    image: IMAGES.womenStyling,
    highlights: ['Blow-dries', 'Curls & waves', 'Updos'],
    items: [
      { name: 'Blow-Dry', description: 'Smooth, bouncy or voluminous — finished to your preference.', price: null },
      { name: 'Curls & Waves', description: 'Soft waves or defined curls with a long-lasting finish.', price: null },
      { name: 'Ironing / Straightening', description: 'Sleek, smooth and glossy.', price: null },
      { name: 'Updo & Bun Styling', description: 'Elegant updos and buns for occasions.', price: null },
      { name: 'Occasion Hairstyle', description: 'A complete look designed for your event.', price: null },
    ],
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    tagline: 'Repair, restore, revive',
    description:
      'Professional treatments for strength, shine and manageability, plus colour services from subtle gloss to full transformation.',
    image: IMAGES.womenTreatment,
    highlights: ['Deep conditioning', 'Smoothing', 'Colour'],
    items: [
      { name: 'Hair Spa', description: 'Deep nourishment with a calming head massage.', price: null },
      { name: 'Keratin Treatment', description: 'Smooths frizz and adds shine for weeks.', price: null },
      { name: 'Smoothening / Rebonding', description: 'Long-lasting straight, smooth hair.', price: null },
      { name: 'Global Hair Colour', description: 'Even, rich colour from roots to ends.', price: null },
      { name: 'Highlights & Balayage', description: 'Dimensional colour with a natural blend.', price: null },
    ],
  },
  {
    id: 'beauty-services',
    title: 'Beauty Services',
    tagline: 'Skin, nails and finishing touches',
    description:
      'Facials, clean-ups, waxing, threading and nail care — the details that complete your look and help you feel your best.',
    image: IMAGES.womenFacial,
    highlights: ['Facials', 'Nail care', 'Brows & waxing'],
    items: [
      { name: 'Signature Facial', description: 'A tailored facial for glowing, refreshed skin.', price: null },
      { name: 'Clean-Up', description: 'Quick cleansing and exfoliation.', price: null },
      { name: 'Manicure & Pedicure', description: 'Nail shaping, cuticle care and polish.', price: null },
      { name: 'Waxing', description: 'Smooth, gentle hair removal.', price: null },
      { name: 'Threading', description: 'Precise brow and facial threading.', price: null },
    ],
  },
  {
    id: 'makeup-artist',
    title: 'Makeup Artist',
    tagline: 'Makeup that looks like you, elevated',
    description:
      'Professional makeup for every occasion — skin-first, camera-ready and long-wearing, created around your features and style.',
    image: IMAGES.makeupBrushes,
    highlights: ['Skin prep', 'HD finish', 'Lashes & styling'],
    link: '/makeup-artist',
    items: [
      { name: 'Soft Glam Makeup', description: 'Polished, luminous and natural-looking.', price: null },
      { name: 'HD Makeup', description: 'Flawless, camera-ready finish.', price: null },
      { name: 'Engagement Makeup', description: 'A radiant look for your engagement celebration.', price: null },
      { name: 'Makeup Trial', description: 'Try your look ahead of the big day.', price: null },
    ],
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    tagline: 'For the most important day',
    description:
      'A calm, personal bridal experience — from consultation and trial to your final look, created to last from first ritual to last dance.',
    image: IMAGES.bridalBride,
    highlights: ['Consultation & trial', 'Hair & draping', 'Long-wear finish'],
    link: '/bridal-party-makeup',
    items: [
      { name: 'Bridal Makeup', description: 'Complete bridal makeup for your wedding day.', price: null },
      { name: 'Bridal Hairstyling', description: 'Bridal hair designed to complement your look.', price: null },
      { name: 'Pre-Wedding Functions', description: 'Looks for mehendi, haldi, sangeet and more.', price: null },
      { name: 'Reception Look', description: 'A fresh look for your reception evening.', price: null },
    ],
  },
  {
    id: 'party-makeup',
    title: 'Party Makeup',
    tagline: 'Ready for every celebration',
    description:
      'Party, festive and occasion makeup — from soft and fresh to evening glamour — with hairstyling to complete the look.',
    image: IMAGES.makeupEyeliner,
    highlights: ['Soft to full glam', 'Hairstyling', 'Group bookings'],
    link: '/bridal-party-makeup',
    items: [
      { name: 'Party Makeup', description: 'A polished look for parties and evenings out.', price: null },
      { name: 'Festive Makeup', description: 'Celebration-ready makeup for festivals and family events.', price: null },
      { name: 'Party Makeup & Hairstyle', description: 'Complete party look, makeup and hair.', price: null },
      { name: 'Family & Group Bookings', description: 'Makeup for bridesmaids, family and friends.', price: null },
    ],
  },
];

/** Services featured on the Makeup Artist and Bridal & Party pages. */
export const MAKEUP_SERVICES = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    description:
      'Your wedding-day look, designed with you through consultation and trial so it feels unmistakably you — elegant, radiant and long-wearing.',
    image: IMAGES.bridalBride,
  },
  {
    id: 'party',
    title: 'Party Makeup',
    description:
      'From soft and fresh to full evening glamour — makeup that photographs beautifully and lasts through the celebration.',
    image: IMAGES.makeupEyeliner,
  },
  {
    id: 'engagement',
    title: 'Engagement Makeup',
    description:
      'A luminous, refined look for your engagement and pre-wedding moments, balanced for both daylight and evening.',
    image: IMAGES.makeupPowder,
  },
  {
    id: 'special-occasion',
    title: 'Special Occasion Makeup',
    description:
      'Receptions, festivals, photoshoots and milestone events — a polished look tailored to the occasion and your outfit.',
    image: IMAGES.makeupOccasion,
  },
];

/** The 12 services shown in the homepage slider (3 sets of 4 on desktop). */
export const HOME_SERVICES = [
  { title: 'Haircuts', group: 'Men', image: IMAGES.menHaircut, to: '/men/services#haircuts' },
  { title: 'Beard Styling', group: 'Men', image: IMAGES.menBeard, to: '/men/services#beard-styling' },
  { title: 'Modern Hairstyles', group: 'Men', image: IMAGES.menModernStyle, to: '/men/services#modern-hairstyles' },
  { title: 'Facial & Grooming', group: 'Men', image: IMAGES.menFacial, to: '/men/services#facial-grooming' },
  { title: 'Haircuts', group: 'Women', image: IMAGES.womenHaircut, to: '/women/services#haircuts' },
  { title: 'Hair Styling', group: 'Women', image: IMAGES.womenStyling, to: '/women/services#hair-styling' },
  { title: 'Hair Treatments', group: 'Women', image: IMAGES.womenTreatment, to: '/women/services#hair-treatments' },
  { title: 'Beauty Services', group: 'Women', image: IMAGES.womenFacial, to: '/women/services#beauty-services' },
  { title: 'Makeup Artist', group: 'Makeup', image: IMAGES.makeupBrushes, to: '/makeup-artist' },
  { title: 'Party Makeup', group: 'Makeup', image: IMAGES.makeupEyeliner, to: '/bridal-party-makeup#party' },
  { title: 'Special Occasion', group: 'Makeup', image: IMAGES.makeupOccasion, to: '/makeup-artist#services' },
  { title: 'Hair Treatments', group: 'Men', image: IMAGES.menHairTreatment, to: '/men/services#hair-treatments' },
];

/** Flat list used by the contact-page enquiry form. */
export const ENQUIRY_OPTIONS = [
  { group: 'Men', options: MEN_CATEGORIES.map((c) => `Men — ${c.title}`) },
  { group: 'Women', options: WOMEN_CATEGORIES.slice(0, 4).map((c) => `Women — ${c.title}`) },
  { group: 'Makeup', options: MAKEUP_SERVICES.map((s) => s.title) },
];
