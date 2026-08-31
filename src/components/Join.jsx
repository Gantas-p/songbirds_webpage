import CtaButton from './CtaButton'

export default function Join() {
  return (
    <section id="join" className="section join">
      <div className="section__body">
        <h2>Join us</h2>
        <p>
        New members are always welcome and I am happy to offer a free trial 
        session (select “Free Trial” option on booking page). 

         Sessions cost £7 per person, per session, plus 60p booking fee.
        </p>
        <p>
          If cost is ever a barrier, please <a href="#contact">tell me</a> — I will always try to
          help.
        </p>
        <CtaButton className="join__cta" />
      </div>
    </section>
  )
}
