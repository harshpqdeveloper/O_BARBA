import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import { WhatsAppButton } from '../components/ui/Buttons';
import { IMAGES } from '../config/images';
import { SITE } from '../config/site';
import { ENQUIRY_OPTIONS } from '../data/services';
import { whatsappLink } from '../utils/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

const isPlaceholder = (value) => !value || value.includes('[');
const phoneHref = isPlaceholder(SITE.phone) ? null : `tel:${SITE.phone.replace(/[^\d+]/g, '')}`;
const emailHref = isPlaceholder(SITE.email) || !SITE.email.includes('@') ? null : `mailto:${SITE.email}`;

const TIMES = ['Morning', 'Afternoon', 'Evening', 'Flexible'];

function ContactItem({ icon, label, children }) {
  return (
    <li className="contact-item">
      <span className="contact-item__icon">
        <Icon name={icon} size={20} />
      </span>
      <span>
        <span className="contact-item__label">{label}</span>
        <span className="contact-item__value">{children}</span>
      </span>
    </li>
  );
}

function EnquiryForm() {
  const now = new Date();
  const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10); // local date
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      'Hello OBARBA, I would like to book an appointment.',
      `Name: ${data.name}`,
      `Service: ${data.service}`,
      data.date && `Preferred date: ${new Date(`${data.date}T00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`,
      data.time && `Preferred time: ${data.time}`,
      data.notes && `Notes: ${data.notes}`,
    ].filter(Boolean);
    const link = whatsappLink(lines.join('\n'));
    // Not using the "noopener" feature string: with it, window.open always returns null.
    const win = window.open(link, '_blank');
    if (win) win.opener = null;
    else window.location.href = link; // pop-up blocked
    setSent(true);
  };

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="enquiry-name">Your name</label>
        <input id="enquiry-name" name="name" type="text" autoComplete="name" required placeholder="Full name" />
      </div>
      <div className="field">
        <label htmlFor="enquiry-service">Service</label>
        <select id="enquiry-service" name="service" required defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {ENQUIRY_OPTIONS.map((group) => (
            <optgroup key={group.group} label={group.group}>
              {group.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </optgroup>
          ))}
          <option>Not sure — please advise</option>
        </select>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="enquiry-date">Preferred date</label>
          <input id="enquiry-date" name="date" type="date" min={today} />
        </div>
        <div className="field">
          <label htmlFor="enquiry-time">Preferred time</label>
          <select id="enquiry-time" name="time" defaultValue="">
            <option value="">Any time</option>
            {TIMES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="enquiry-notes">Notes (optional)</label>
        <textarea id="enquiry-notes" name="notes" rows={4} placeholder="Anything we should know — occasion, hair length, reference look…" />
      </div>
      <button type="submit" className="btn btn--gold btn--block">
        <Icon name="whatsapp" size={18} />
        <span>Send Enquiry on WhatsApp</span>
      </button>
      <p className="fine-print" role="status">
        {sent
          ? 'WhatsApp has opened with your enquiry — just press send. We’ll confirm your appointment there.'
          : 'Your details open in WhatsApp as a ready-to-send message. Nothing is stored on this website.'}
      </p>
    </form>
  );
}

export default function Contact() {
  usePageMeta('Contact Us', 'Contact OBARBA, find our address and opening hours, and book your appointment on WhatsApp.');

  return (
    <>
      <PageHero
        kicker="Contact Us"
        title={
          <>
            Visit, Call or <em>Message</em>
          </>
        }
        text="The quickest way to book is WhatsApp — send us a message and we’ll confirm your appointment."
        image={IMAGES.interiorWarm}
        crumbs={[{ label: 'Contact' }]}
      >
        <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
      </PageHero>

      <section className="section">
        <div className="container contact-layout">
          <div>
            <SectionHeading
              kicker="Get in Touch"
              title={
                <>
                  We’d Love to <em>Hear From You</em>
                </>
              }
            />
            <ul className="contact-list">
              <ContactItem icon="whatsapp" label="WhatsApp">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Message us to book
                </a>
              </ContactItem>
              <ContactItem icon="phone" label="Phone">
                {phoneHref ? <a href={phoneHref}>{SITE.phone}</a> : SITE.phone}
              </ContactItem>
              <ContactItem icon="mail" label="Email">
                {emailHref ? <a href={emailHref}>{SITE.email}</a> : SITE.email}
              </ContactItem>
              <ContactItem icon="pin" label="Address">
                {SITE.address.line1}
                <br />
                {SITE.address.line2} {SITE.address.postcode}
              </ContactItem>
            </ul>

            <div className="hours">
              <h3 className="hours__title">
                <Icon name="clock" size={18} /> Opening Hours
              </h3>
              <dl className="hours__list">
                {SITE.openingHours.map((h) => (
                  <div className="hours__row" key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="contact-card">
            <SectionHeading
              as="h2"
              kicker="Appointment Enquiry"
              title={
                <>
                  Request a <em>Booking</em>
                </>
              }
            />
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="section section--alt section--compact" aria-labelledby="map-title">
        <div className="container">
          <h2 className="visually-hidden" id="map-title">
            Map
          </h2>
          {SITE.mapEmbedUrl ? (
            <div className="map-frame">
              <iframe
                title={`${SITE.name} location map`}
                src={SITE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="map-placeholder">
              <Icon name="pin" size={34} strokeWidth={1.2} />
              <p className="map-placeholder__title">Map coming soon</p>
              <p className="map-placeholder__text">
                {SITE.address.line1}, {SITE.address.line2} {SITE.address.postcode}
              </p>
            </div>
          )}
          {SITE.mapLink && (
            <div className="section-actions">
              <a className="btn btn--outline" href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
