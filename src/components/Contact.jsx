import { CONTACT, SOCIAL } from '../config'

export default function Contact() {
  const socials = [
    SOCIAL.instagram && { label: 'Instagram', href: SOCIAL.instagram },
    SOCIAL.facebook && { label: 'Facebook', href: SOCIAL.facebook },
  ].filter(Boolean)

  return (
    <section id="contact" className="section contact">
      <div className="section__body">
        <h2>Get in touch</h2>
        <p>
          Questions about coming along, bringing children, or anything else?
          Email us and one of the group will reply.
        </p>
        <p className="contact__email">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        {socials.length > 0 && (
          <ul className="contact__social">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
