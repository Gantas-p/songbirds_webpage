// ---------------------------------------------------------------------------
// Histon Songbirds — site settings
//
// This is the one file to edit for day-to-day changes. You do not need to
// touch anything else to update the booking link, contact address, or the
// practical details of the session. See CONTENT.md for a plain-language guide.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Histon Songbirds',
  // Short line that sits under the name. Keep it calm and plain.
  tagline: 'A women’s singing group in Histon, near Cambridge',
  // The live address of the site. Used for SEO links — change only if the
  // domain changes.
  url: 'https://histonsongbirds.com',
  locale: 'en_GB',
}

// When the group meets. Free text is shown on the page; the machine-readable
// fields feed Google's structured data, so keep them accurate.
export const SESSION = {
  // Shown to visitors:
  dayText: 'Mondays',
  timeText: '7:30pm',
  termText: 'during Cambridgeshire school term time',
  arriveText: 'Doors open at 7:15pm',
  // Machine-readable (24-hour, used for search engines):
  startTime: '19:30',
  endTime: '21:00',
  weekday: 'https://schema.org/Monday',
}

// Where the group meets.
export const VENUE = {
  name: 'St Andrew’s Centre',
  streetAddress: 'School Hill',
  locality: 'Histon',
  postTown: 'Cambridge', // Royal Mail post town for the address line
  region: 'Cambridgeshire', // county, used in the structured data
  postalCode: 'CB24 9JE',
  country: 'GB',
  // A plain link to a map (opens in a new tab). No tracking embed.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=St+Andrew%27s+Centre+School+Hill+Histon+CB24+9JE',
}

// The contact form is handled by Formspree (formspree.io). Messages are
// forwarded to whatever email address the form is set to in the Formspree
// dashboard — change recipients there, not here. This is just the form's ID,
// the last part of its endpoint URL (https://formspree.io/f/THIS).
export const FORMSPREE_ID = 'xbgjlpwl'

// The booking page (currently TicketTailor). Paste the full link between the
// quotes. While it is empty, the site shows a calm "Booking opens soon" note
// and hides the Book buttons instead of showing a broken link.
export const BOOKING_URL = 'https://buytickets.at/histonsongbirds'

// Social pages, if/when they exist. Leave as empty strings to hide them.
export const SOCIAL = {
  instagram: '',
  facebook: '',
}
