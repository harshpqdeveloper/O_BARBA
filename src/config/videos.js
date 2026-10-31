/**
 * OBARBA — homepage hero video scenes.
 *
 * The hero shows the men's scene first, slowly cross-fades to the women's scene,
 * then back again, continuously. Each scene has:
 *   video  — 16:9 MP4 (1280×720), used on every screen. Desktops fill the hero with it;
 *            phones and portrait tablets show the whole frame across the top of the hero.
 *   poster — still shown instantly while the video loads, and to visitors who
 *            prefer reduced motion or have data saver switched on
 *
 * To replace a scene, overwrite the files in /public/videos keeping the same names,
 * or point the paths below at new files. Use H.264 MP4 without audio, ideally ≥ 14 s long
 * (a scene stays on screen for about 13.5 s including its fades).
 *
 * The current footage is temporary royalty-free stock (Mixkit Stock Video Free License),
 * slowed to 0.8× and colour-graded for OBARBA. It is not OBARBA's own footage.
 */
const base = import.meta.env.BASE_URL;
const clip = (file) => ({ src: `${base}videos/${file}.mp4`, poster: `${base}videos/${file}-poster.jpg` });

export const HERO_SCENES = [
  {
    id: 'men',
    label: 'Men’s grooming',
    media: { ...clip('hero-men-barber'), position: 'center 30%' },
  },
  {
    id: 'women',
    label: 'Women’s beauty',
    media: { ...clip('hero-women-makeup'), position: 'center 30%' },
  },
];

export const HERO_TIMING = {
  interval: 11000, // ms between scene changes (≈ 8.5 s fully visible + the cross-fade)
  fade: 2600, // ms cross-fade between scenes
};
