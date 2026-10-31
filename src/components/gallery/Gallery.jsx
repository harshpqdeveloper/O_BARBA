import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Photo from '../ui/Photo';
import Icon from '../ui/Icon';
import Lightbox from './Lightbox';
import SampleNotice from '../ui/SampleNotice';
import { GALLERY, GALLERY_CATEGORIES } from '../../data/gallery';

/**
 * Filterable gallery grid with a lightbox.
 * - `categories`: which gallery categories this page shows
 * - `pageSize`: how many photos are visible before "Show more" (keeps the page uncluttered)
 * - `syncWithUrl`: keep the chosen filter in ?category= so it can be linked to
 */
export default function Gallery({ categories = GALLERY_CATEGORIES.map((c) => c.id), pageSize = 6, syncWithUrl = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = GALLERY_CATEGORIES.filter((c) => categories.includes(c.id));

  const fromUrl = syncWithUrl ? searchParams.get('category') : null;
  const [filter, setFilter] = useState(filters.some((c) => c.id === fromUrl) ? fromUrl : 'all');
  const [visible, setVisible] = useState(pageSize);
  const [lightbox, setLightbox] = useState(null);

  const items = GALLERY.filter((g) => categories.includes(g.category) && (filter === 'all' || g.category === filter));
  const shown = items.slice(0, visible);

  const choose = (id) => {
    setFilter(id);
    setVisible(pageSize);
    if (syncWithUrl) {
      setSearchParams(id === 'all' ? {} : { category: id }, { replace: true, preventScrollReset: true });
    }
  };

  return (
    <div className="gallery">
      {filters.length > 1 && (
        <div className="gallery__filters" role="group" aria-label="Filter gallery">
          {[{ id: 'all', label: 'All' }, ...filters].map((c) => (
            <button
              key={c.id}
              type="button"
              className={`chip${filter === c.id ? ' is-active' : ''}`}
              aria-pressed={filter === c.id}
              onClick={() => choose(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <ul className="gallery__grid" key={filter}>
        {shown.map((g, i) => (
          <li key={g.image.src + g.category}>
            <button type="button" className="gallery__tile" onClick={() => setLightbox(i)} aria-label={`View ${g.caption}`}>
              <Photo image={g.image} />
              <span className="gallery__caption" aria-hidden="true">
                <span>{g.caption}</span>
                <Icon name="plus" size={16} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="gallery__footer">
        <SampleNotice>Temporary sample photography — to be replaced with OBARBA’s own work.</SampleNotice>
        {visible < items.length && (
          <button type="button" className="btn btn--outline" onClick={() => setVisible((v) => v + pageSize)}>
            <span>Show more</span>
            <Icon name="plus" size={16} />
          </button>
        )}
      </div>

      <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </div>
  );
}
