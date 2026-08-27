import CtaButton from './CtaButton'

export default function Join() {
  return (
    <section id="join" className="section join">
      <div className="section__body">
        <h2>Join us</h2>
        <p>
          New members are welcome at the start of each term, and often part way
          through too. Book a place below and simply come along on the night —
          someone will be at the door to say hello and show you where to sit.
        </p>
        <p>
          The cost for the term is shown on the booking page. If cost is ever a
          barrier, please <a href="#contact">tell us</a> — we will always try to
          help.
        </p>
        <CtaButton className="join__cta" />
      </div>
    </section>
  )
}
