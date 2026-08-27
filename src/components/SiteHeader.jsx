import { SITE } from '../config'

// A quiet header: the group's name and a short in-page menu. On small screens
// the menu sits below the name and wraps. No dropdowns, no JavaScript.
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
      <a className="site-header__name" href="#top">
        {SITE.name}
      </a>
      <nav className="site-header__nav" aria-label="Sections">
        <ul>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
