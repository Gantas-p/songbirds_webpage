import CtaButton from './CtaButton'

export default function Join() {
  return (
    <section id="join" className="section join">
      <div className="section__body">
        <h2>Join us</h2>
        <p>
         New members are always welcome.
         Sessions cost £7, please book your space here: Link
         
         If this is your first time joining us, we offer a free trial session, please <a href="#contact">get in touch</a> to book 
         
          
          .
        </p>
        <p>
          If cost is ever a barrier, please <a href="#contact">tell us</a> — we will always try to
          help.
        </p>
        <CtaButton className="join__cta" />
      </div>
    </section>
  )
}
