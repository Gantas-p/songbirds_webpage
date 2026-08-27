import { EVENTBRITE_URL } from '../config'

// The "book a place" call to action. If the Eventbrite link has not been added
// to src/config.js yet, this shows a calm note instead of a broken button.
export default function CtaButton({ label = 'Book your place', className = '' }) {
  if (!EVENTBRITE_URL) {
    return (
      <p className={`cta-pending ${className}`.trim()}>
        Booking opens soon. <a href="#contact">Email us</a> to hear when places
        open.
      </p>
    )
  }

  return (
    <a
      className={`cta ${className}`.trim()}
      href={EVENTBRITE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}
