import { VENUE } from '../config'

export default function WhenWhere() {
  const address = `${VENUE.name}, ${VENUE.streetAddress}, ${VENUE.locality}, ${VENUE.postTown} ${VENUE.postalCode}`

  return (
    <section id="when-where" className="section when-where">
      <div className="section__body">
        <h2>When &amp; where</h2>

        <dl className="details">
          <div>
            <dt>When</dt>
            <dd>
              Mondays 7.30 pm - 9pm during term time.  
            </dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>
              <address>
                {VENUE.name}
                <br />
                {VENUE.streetAddress}, {VENUE.locality}
                <br />
                {VENUE.postTown} {VENUE.postalCode}
              </address>
              <a href={VENUE.mapUrl} target="_blank" rel="noopener noreferrer">
                Open in maps
              </a>
            </dd>
          </div>
          <div>
            <dt>Getting there</dt>
            <dd>
              There is free parking on nearby streets and the Centre is across
              the road from a number 8 bus stop. The main entrance is step free,
              however the hall is up one flight of stairs.

            </dd>
          </div>
          <div>
            <dt>What to bring</dt>
            <dd>
              Just yourself.
            </dd>
          </div>
                    <div>
            <dt>Upcoming dates</dt>
            <dd>
              5th October, 12th October, 19th October
            </dd>
          </div>
        </dl>

        <p className="visually-hidden">Full address: {address}</p>
      </div>
    </section>
  )
}
