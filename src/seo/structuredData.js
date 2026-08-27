// Builds the JSON-LD structured data that helps search engines understand the
// site: what the group is, when it meets, where, and the FAQ answers.
//
// You should not need to edit this file — it reads everything from
// src/config.js and src/data/faq.js. Update those instead.

import { SITE, SESSION, VENUE, CONTACT, EVENTBRITE_URL, SOCIAL } from '../config'
import { FAQ } from '../data/faq'

const sameAs = [SOCIAL.instagram, SOCIAL.facebook].filter(Boolean)

const place = {
  '@type': 'Place',
  name: VENUE.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: VENUE.streetAddress,
    addressLocality: VENUE.locality,
    addressRegion: VENUE.region,
    postalCode: VENUE.postalCode,
    addressCountry: VENUE.country,
  },
}

const organization = {
  '@type': ['MusicGroup', 'Organization'],
  '@id': `${SITE.url}/#group`,
  name: SITE.name,
  description: SITE.tagline,
  url: SITE.url,
  genre: 'Choral',
  email: CONTACT.email,
  areaServed: ['Histon', 'Impington', 'Cambridge', 'Cambridgeshire'],
  location: place,
  ...(sameAs.length ? { sameAs } : {}),
}

const event = {
  '@type': 'Event',
  name: `${SITE.name} — weekly singing session`,
  description:
    'A calm, welcoming weekly singing session for women and mothers. No experience or audition needed.',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: place,
  organizer: { '@id': `${SITE.url}/#group` },
  eventSchedule: {
    '@type': 'Schedule',
    repeatFrequency: 'P1W',
    byDay: SESSION.weekday,
    startTime: SESSION.startTime,
    endTime: SESSION.endTime,
    scheduleTimezone: 'Europe/London',
  },
  ...(EVENTBRITE_URL
    ? { offers: { '@type': 'Offer', url: EVENTBRITE_URL, availability: 'https://schema.org/InStock' } }
    : {}),
}

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization, event, faqPage],
  }
}
