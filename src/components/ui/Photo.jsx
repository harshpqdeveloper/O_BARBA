/** Renders an entry from src/config/images.js, cropped with its configured focus point. */
export default function Photo({ image, className = '', eager = false, alt }) {
  if (!image) return null;
  return (
    <img
      className={`photo ${className}`}
      src={image.src}
      alt={alt ?? image.alt}
      style={{ objectPosition: image.position }}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  );
}
