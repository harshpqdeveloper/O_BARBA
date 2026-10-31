/**
 * OBARBA — client reviews.
 *
 * Genuine 5★ Google reviews of O'BARBA Family Salon, Shivpur (Varanasi), quoted word for word
 * from the salon's Google listing. Reviewers are shown by first name and initial.
 * They appear in this order in the review slider on the Home and Reviews pages.
 * Add a review with `sample: true` to show it as a labelled placeholder instead.
 *
 * Optional, as published with the review on Google (loaded from Google, not stored in this project):
 *   avatar — the reviewer's Google profile photo; initials show instead if it is missing or fails to load
 *   photo  — a photo attached to the review: `thumb` shown on the card, `full` opened in the viewer
 * Reviewers whose Google profile has no photo (only a letter icon) are left without `avatar`.
 */
export const REVIEWS = [
  {
    quote:
      'Great experience! The barber Ritesh bhaiya listened carefully to what I wanted and gave me exactly the haircut I asked for. Clean salon, friendly staff, and reasonable prices. Highly recommend!',
    name: 'Medha V.',
    service: 'Haircut · Google review',
  },
  {
    quote:
      'Great experience! The haircut was exactly how I wanted. The stylist ...the name of stylist is Raj was skilled and understood my requirements very well. Clean and professional environment. Highly recommend.',
    name: 'Ayushi S.',
    service: 'Haircut · Google review',
  },
  {
    quote:
      'Last month I went here for a haircut and I trusted Mr. Ritesh with the most suitable hairstyle as per my face and desired hair length and he did gave me a great haircut. Thanks to Mr. Ritesh and the experience was really good.',
    name: 'Anushka D.',
    service: 'Haircut · Google review',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVOYpdHrFXd0fSYLsV5VDfrnmhOmMNQla-O96aWIs0iEJilqpc1Kw=s160-c',
    photo: {
      thumb:
        'https://lh3.googleusercontent.com/grass-cs/AABkmLcW7tLD9-BRBOaVZEadhmMJYnWFC-usVlSKdMiA8XnIfKKxw5nc1T5it4VGe_JH98rg1Jg-jiHShKsnM511G9y7AVJL0wGcdX23uvMpH1HUjGtVTqToVnH1OU3SoO5PAOZzjcXjQPrfzHUg=w480-h360-p-k-no',
      full: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcW7tLD9-BRBOaVZEadhmMJYnWFC-usVlSKdMiA8XnIfKKxw5nc1T5it4VGe_JH98rg1Jg-jiHShKsnM511G9y7AVJL0wGcdX23uvMpH1HUjGtVTqToVnH1OU3SoO5PAOZzjcXjQPrfzHUg=w1600-h1200-p-k-no',
      alt: 'Layered haircut, photo from Anushka’s Google review',
    },
  },
  {
    quote: 'Nice ambience, good service of staff specially prity and Shanaya',
    name: 'Pragya P.',
    service: 'Google review',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUnb1uvhc1vDCdBmvKrbmpzdBw9i_p1SQtmYTTiP2B0tLt299g=s160-c',
  },
];
