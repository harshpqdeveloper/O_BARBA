import { Link } from 'react-router-dom';
import FadeSlider from '../ui/FadeSlider';
import Photo from '../ui/Photo';
import SectionHeading from '../ui/SectionHeading';
import SampleNotice from '../ui/SampleNotice';
import { TextLink } from '../ui/Buttons';
import { GALLERY } from '../../data/gallery';

/**
 * Gallery preview: three photos at a time, fading to the next set.
 * `exclude` lists images already used elsewhere on the page so nothing repeats.
 */
export default function GalleryStrip({ kicker, title, categories, to, linkLabel = 'View gallery', exclude = [] }) {
  const items = GALLERY.filter((g) => categories.includes(g.category) && !exclude.includes(g.image)).slice(0, 9);
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading kicker={kicker} title={title} />
          <TextLink to={to}>{linkLabel}</TextLink>
        </div>
        <FadeSlider
          items={items}
          perView={{ 0: 1, 560: 2, 900: 3 }}
          layout="tiles"
          interval={7000}
          label={typeof kicker === 'string' ? kicker : 'Gallery'}
          renderItem={(g) => (
            <Link to={to} className="look-tile look-tile--portrait">
              <Photo image={g.image} />
              <span className="look-tile__caption">{g.caption}</span>
            </Link>
          )}
        />
        <SampleNotice>Temporary sample photography — to be replaced with OBARBA’s own work.</SampleNotice>
      </div>
    </section>
  );
}
