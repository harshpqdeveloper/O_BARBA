/** OBARBA — site navigation. Every `to` here must match a route in src/App.jsx. */

export const SERVICES_MENU = [
  {
    heading: 'For Him',
    links: [
      { label: 'Men’s Home', to: '/men' },
      { label: 'Men’s Services', to: '/men/services' },
      { label: 'Men’s Gallery', to: '/men/gallery' },
    ],
  },
  {
    heading: 'For Her',
    links: [
      { label: 'Women’s Home', to: '/women' },
      { label: 'Women’s Services', to: '/women/services' },
      { label: 'Women’s Gallery', to: '/women/gallery' },
    ],
  },
  {
    heading: 'Makeup',
    links: [
      { label: 'Makeup Artist', to: '/makeup-artist' },
      { label: 'Bridal & Party Makeup', to: '/bridal-party-makeup' },
    ],
  },
];

export const MAIN_NAV = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Services', menu: SERVICES_MENU },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Our Team', to: '/team' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

/** Secondary navigation shown on the Men's and Women's pages. */
export const MEN_SUBNAV = [
  { label: 'Men’s Home', to: '/men', end: true },
  { label: 'Services', to: '/men/services' },
  { label: 'Gallery', to: '/men/gallery' },
];

export const WOMEN_SUBNAV = [
  { label: 'Women’s Home', to: '/women', end: true },
  { label: 'Services', to: '/women/services' },
  { label: 'Gallery', to: '/women/gallery' },
  { label: 'Makeup Artist', to: '/makeup-artist' },
  { label: 'Bridal & Party', to: '/bridal-party-makeup' },
];
