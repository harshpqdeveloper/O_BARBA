import { SITE } from '../config/site';

const digits = SITE.whatsappNumber.replace(/[\s+()-]/g, '');

/** True once a real number (8–15 digits, no placeholder X) is set in src/config/site.js. */
export const isWhatsAppConfigured = /^\d{8,15}$/.test(digits);

/**
 * Builds a wa.me link with a prefilled message.
 * Until the number is configured, the link opens WhatsApp with the message ready
 * so the user can pick a recipient — the button never does nothing.
 */
export function whatsappLink(message = SITE.whatsappDefaultMessage) {
  const text = encodeURIComponent(message);
  return isWhatsAppConfigured ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

export function bookingMessage(service, context) {
  const detail = context ? `${service} (${context})` : service;
  return `Hello OBARBA, I would like to book an appointment for ${detail}. Please share the available slots.`;
}

export function enquiryMessage(topic) {
  return `Hello OBARBA, I would like to enquire about ${topic}. Please share availability and details.`;
}
