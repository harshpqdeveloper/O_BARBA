import { SITE } from '../config/site';

const digits = SITE.whatsappNumber.replace(/[\s+()-]/g, '');

/** True once a real number (8–15 digits, no placeholder X) is set in src/config/site.js. */
export const isWhatsAppConfigured = /^\d{8,15}$/.test(digits);

// Phones and tablets (including iPads, which report themselves as a Mac) open the WhatsApp app; computers open WhatsApp Web.
const isMobileDevice =
  typeof navigator !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent) ||
    (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1));

// encodeURIComponent leaves ! ' ( ) * as-is; encode those too so the whole message is percent-encoded.
const encode = (text) =>
  encodeURIComponent(text).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

/**
 * Builds a Click to Chat link that opens WhatsApp with exactly `message` typed in — the visitor still presses Send.
 * Mobile: the official api.whatsapp.com/send link, which opens the WhatsApp app when installed (or its web page if not).
 *   It is used instead of wa.me because wa.me's redirect turns emoji into "�".
 * Desktop: WhatsApp Web's send link, which opens the chat straight in the browser.
 * Until the number is configured, the link opens WhatsApp with the message ready
 * so the user can pick a recipient — the button never does nothing.
 */
export function whatsappChatLink(message) {
  const query = `${isWhatsAppConfigured ? `phone=${digits}&` : ''}text=${encode(message)}`;
  // WhatsApp Web needs a number to open a chat, so without one every device gets the pick-a-recipient page.
  const host = isWhatsAppConfigured && !isMobileDevice ? 'web.whatsapp.com' : 'api.whatsapp.com';
  return `https://${host}/send?${query}`;
}

/** Link for WhatsApp buttons: the site-wide override message when one is set, otherwise the button's own message. */
export function whatsappLink(message = SITE.whatsappDefaultMessage) {
  return whatsappChatLink(SITE.whatsappMessageOverride || message);
}

export function bookingMessage(service, context) {
  const detail = context ? `${service} (${context})` : service;
  return `Hello OBARBA, I would like to book an appointment for ${detail}. Please share the available slots.`;
}

export function enquiryMessage(topic) {
  return `Hello OBARBA, I would like to enquire about ${topic}. Please share availability and details.`;
}
