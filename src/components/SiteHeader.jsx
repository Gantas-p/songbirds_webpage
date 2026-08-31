import { SITE, BOOKING_URL } from '../config'

// A quiet header: the group's name, a short in-page menu, and a Book link at
// the end of it. On small screens the menu sits below the name and wraps. No
// dropdowns, no JavaScript.
const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#when-where', label: 'When & where' },
  { href: '#join', label: 'Join' },
  { href: '#faq', label: 'Questions' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__name" href="#top">
          <img className="site-header__mark" src="/images/bird-mark.png" alt="" />
          {SITE.name}
        </a>

        <nav className="site-header__nav" aria-label="Menu">
          <ul>
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
            {BOOKING_URL && (
              <li>
                <a
                  className="site-header__book"
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
