import Placeholder from './Placeholder'

// The story of the group. This section is also the main place search engines
// learn what Histon Songbirds is, so the copy names plainly what it is and who
// it is for. Edit the words to sound like you — just keep it warm and clear.
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__body">
        <h2>About us</h2>
        <p>
          Histon Songbirds is a friendly women’s singing group in the village of
          Histon, just north of Cambridge. We meet one evening a week during
          term time to sing together — a mix of folk songs, gentle harmonies,
          rounds and the odd familiar tune everyone already knows.
        </p>
        <p>
          It began as a small group of mothers who wanted an hour that was just
          for them, in good company, doing something that lifts the spirits.
          That is still the heart of it. You do not need to be a singer, and you
          certainly do not need to be a mother — all women are welcome. Babies
          and children are welcome to come along too.
        </p>
        <p>
          There is no audition and no pressure to perform. We learn by ear, we
          laugh a fair amount, and we make a sound together that is bigger and
          warmer than any of us on our own. If you have been meaning to sing
          again, or to try it for the first time, this is a soft place to start.
        </p>

        <Placeholder
          className="about__image"
          label="A calm photo of the group singing together"
          ratio="16 / 9"
        />
      </div>
    </section>
  )
}
