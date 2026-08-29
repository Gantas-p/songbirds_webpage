import { SITE, VENUE } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="site-footer__line">
        {SITE.name} — a singing group for women and mothers in {VENUE.locality},
        Cambridgeshire.
      </p>
      <p className="site-footer__meta">
        We meet at{' '}
        <a href={VENUE.mapUrl} target="_blank" rel="noopener noreferrer">
          {VENUE.name}, {VENUE.locality}
        </a>
        . © {year} {SITE.name}.
      </p>
    </footer>
  )
}
