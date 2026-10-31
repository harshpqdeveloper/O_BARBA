/**
 * OBARBA — gallery data.
 * Add, remove or reorder photos here. `category` must match one of GALLERY_CATEGORIES.
 */
import { IMAGES } from '../config/images';

export const GALLERY_CATEGORIES = [
  { id: 'men', label: 'Men’s Grooming' },
  { id: 'women', label: 'Women’s Hair Styling' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'bridal', label: 'Bridal Looks' },
  { id: 'interior', label: 'Salon Interior' },
];

const item = (image, category, caption) => ({ image, category, caption });

export const GALLERY = [
  item(IMAGES.menSkinFade, 'men', 'Skin fade'),
  item(IMAGES.womenWaves, 'women', 'Soft waves'),
  item(IMAGES.makeupEyeliner, 'makeup', 'Soft glam'),
  item(IMAGES.bridalBride, 'bridal', 'Traditional bridal look'),
  item(IMAGES.interiorWarm, 'interior', 'The barber lounge'),
  item(IMAGES.menBeard, 'men', 'Beard sculpt'),
  item(IMAGES.womenHaircut, 'women', 'Precision bob'),
  item(IMAGES.makeupPalette, 'makeup', 'Colour palette'),
  item(IMAGES.interiorBlackWall, 'interior', 'Styling studio'),
  item(IMAGES.menModernStyle, 'men', 'Curl definition'),
  item(IMAGES.womenColour, 'women', 'Lavender colour'),
  item(IMAGES.bridalGown, 'bridal', 'Bridal preparation'),
  item(IMAGES.menLineUp, 'men', 'Razor line-up'),
  item(IMAGES.womenStyling, 'women', 'Curling & styling'),
  item(IMAGES.makeupBrushes, 'makeup', 'The artist’s kit'),
  item(IMAGES.interiorChair, 'interior', 'Leather barber chair'),
  item(IMAGES.menHaircut, 'men', 'Textured crop'),
  item(IMAGES.womenCurls, 'women', 'Natural curls'),
  item(IMAGES.bridalCelebration, 'bridal', 'The celebration'),
  item(IMAGES.makeupOccasion, 'makeup', 'Occasion ready'),
  item(IMAGES.interiorModern, 'interior', 'Salon floor'),
  item(IMAGES.menBeardPortrait, 'men', 'Full beard'),
  item(IMAGES.womenBlowDry, 'women', 'Round-brush blow-dry'),
  item(IMAGES.makeupPowder, 'makeup', 'Finishing powder'),
  item(IMAGES.bridalBouquet, 'bridal', 'Bridal details'),
  item(IMAGES.interiorStations, 'interior', 'Styling stations'),
  item(IMAGES.menClassicCut, 'men', 'Classic cut'),
  item(IMAGES.womenSalonBlowDry, 'women', 'Blow-dry finish'),
  item(IMAGES.makeupBrushSet, 'makeup', 'Brush collection'),
  item(IMAGES.makeupFlatlay, 'makeup', 'Makeup essentials'),
  item(IMAGES.interiorRow, 'interior', 'Barber stations'),
  item(IMAGES.menBarberAtWork, 'men', 'At the chair'),
  item(IMAGES.interiorChairs, 'interior', 'Natural-light studio'),
];

/** Homepage lookbook: 2 sets of 4 that fade from one to the next. The first photo of each set is shown large. */
export const HOME_LOOKBOOK = [
  item(IMAGES.interiorChair, 'interior', 'The barber lounge'),
  item(IMAGES.menSkinFade, 'men', 'Skin fade'),
  item(IMAGES.womenColour, 'women', 'Lavender colour'),
  item(IMAGES.makeupPalette, 'makeup', 'Colour palette'),
  item(IMAGES.interiorBlackWall, 'interior', 'Styling studio'),
  item(IMAGES.menBeardPortrait, 'men', 'Full beard'),
  item(IMAGES.womenWaves, 'women', 'Soft waves'),
  item(IMAGES.bridalCelebration, 'bridal', 'The celebration'),
];
