/**
 * Kicker + heading + intro text. Wrap a word of the title in <em> to set it in gold italic:
 *   <SectionHeading kicker="Our services" title={<>Crafted for <em>you</em></>} />
 */
export default function SectionHeading({ kicker, title, text, align = 'left', as: Tag = 'h2', className = '', id }) {
  return (
    <header className={`section-heading section-heading--${align} ${className}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <Tag className="section-heading__title" id={id}>
        {title}
      </Tag>
      {text && <p className="section-heading__text">{text}</p>}
    </header>
  );
}
