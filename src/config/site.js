/**
 * OBARBA — central business configuration.
 *
 * Every business detail shown on the website comes from this file.
 * Replace the [bracketed] placeholders with real details before launch.
 * Nothing here has been invented: leave a value as a placeholder until it is confirmed.
 */
export const SITE = {
  name: 'OBARBA',
  tagline: 'Salon · Barber · Makeup',
  description:
    'A premium salon, barber and makeup studio offering men’s grooming, women’s hair and beauty, and bridal and party makeup.',

  /**
   * WhatsApp number in international format, digits only (country code first, no "+", spaces or dashes).
   * Example format: 919876543210  (91 = India, followed by the 10-digit mobile number).
   * While this still contains "X", booking buttons open WhatsApp with the message ready
   * but without a recipient, so they keep working during setup.
   */
  whatsappNumber: '919335052280',
  whatsappDefaultMessage: 'Hello OBARBA, I would like to book an appointment. Please share the available slots.',
  /**
   * When set, every WhatsApp button and link opens with this message instead of its own
   * booking / enquiry text. The contact form still sends the details the visitor typed.
   * Set to '' to go back to the per-button messages.
   */
  whatsappMessageOverride:
    "Hey Harsh! I really liked your OBARBA website. The design looks amazing! I'd love to know more about it. Can we discuss this further? 😊",

  // Contact details — shown as written. Phone and email become clickable once real values are entered.
  phone: '[Phone number]',
  email: '[Email address]',
  address: {
    line1: '[Shop / building name and street]',
    line2: '[Area, city]',
    postcode: '[PIN code]',
  },

  /**
   * Google Maps embed URL (Google Maps → Share → Embed a map → copy only the src="..." link).
   * Leave empty to show the map placeholder.
   */
  mapEmbedUrl: '',
  // Optional "Get directions" link (Google Maps → Share → Copy link). Leave empty to hide the button.
  mapLink: '',

  openingHours: [
    { days: 'Monday – Friday', hours: '[Opening hours]' },
    { days: 'Saturday', hours: '[Opening hours]' },
    { days: 'Sunday', hours: '[Opening hours]' },
  ],

  // Social profiles. Empty links are hidden automatically, so no dead icons appear.
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },

  // Optional link where clients can leave a public review (e.g. your Google review link).
  reviewLink: '',

  // Makeup artist profile — keep the placeholders until the artist's real details are provided.
  makeupArtist: {
    name: '[Makeup Artist Name]',
    title: 'Makeup Artist',
    intro:
      '[Add a short introduction about the makeup artist here — their approach, specialities and the kind of looks they love creating.]',
  },

  /**
   * Shows small "sample content" notes on galleries, team and reviews.
   * Set to false once real OBARBA photos, team details and client reviews are in place.
   */
  showSampleNotices: true,

  // Shown as "Price on request" wherever a service has no confirmed price yet.
  priceFallback: 'Price on request',
};
