import { SESSION, VENUE } from '../config'
import CtaButton from './CtaButton'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">Histon &amp; Impington, near Cambridge</p>
      <h1 className="hero__title">
        Histon Songbirds- Women's singing circle
      </h1>
      <p className="hero__lede">
        A relaxed evening of singing together for women. 
        No experience, no audition, no need to read music. 
        Come as you are, sing and go home feeling lighter.
      </p>

      <p className="hero__facts">
        {SESSION.dayText}, {SESSION.timeText} · {VENUE.name}, {VENUE.locality}
        <br />
        <span className="hero__facts-muted">
          {SESSION.termText.charAt(0).toUpperCase() + SESSION.termText.slice(1)}
        </span>
      </p>

      <CtaButton className="hero__cta" />
    </section>
  )
}
