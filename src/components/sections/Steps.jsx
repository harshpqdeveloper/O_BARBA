/** Numbered process steps, e.g. Consultation → Trial → Your Day. */
export default function Steps({ steps }) {
  return (
    <ol className="steps" style={{ '--steps': steps.length }}>
      {steps.map((step, i) => (
        <li className="steps__item" key={step.title}>
          <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="steps__title">{step.title}</h3>
          <p className="steps__text">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
