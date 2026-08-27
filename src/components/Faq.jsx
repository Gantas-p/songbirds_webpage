import { FAQ } from '../data/faq'

export default function Faq() {
  return (
    <section id="faq" className="section faq">
      <div className="section__body">
        <h2>Questions people ask</h2>
        <dl className="faq__list">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="faq__item">
              <dt>{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
