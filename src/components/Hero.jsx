import { SESSION, VENUE } from '../config'
import CtaButton from './CtaButton'

export default function Hero() {
  const term =
    SESSION.termText.charAt(0).toUpperCase() + SESSION.termText.slice(1)

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">Histon Songbirds</h1>
        <p className="hero__subtitle">
          A women’s singing circle in Histon, near Cambridge
        </p>

        <hr className="hero__rule" />

        <p className="hero__lede">
          A relaxed evening of singing together for women. No experience, no
          audition, no need to read music. Come as you are, sing, and go home
          feeling lighter.
        </p>

        <div className="hero__meta">
          <p className="hero__facts">
            {SESSION.dayText}, {SESSION.timeText} · {VENUE.name},{' '}
            {VENUE.locality}
            <span className="hero__facts-muted">{term}</span>
          </p>
          <CtaButton className="hero__cta" />
        </div>
      </div>
    </section>
  )
}
