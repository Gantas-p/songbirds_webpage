import { useForm, ValidationError } from '@formspree/react'
import { FORMSPREE_ID } from '../config'

// The contact form. Submissions go to Formspree, which forwards them to the
// address set in the Formspree dashboard. When JavaScript is available the
// form submits in place and shows the thank-you message below; if it isn't,
// the plain `action` still posts to Formspree.
export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  if (state.succeeded) {
    return (
      <div className="contact-form__done" role="status">
        <p className="contact-form__done-title">
          Thank you — your message has been sent.
        </p>
        <p>I’ll reply by email as soon as I can.</p>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__row">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" type="text" name="name" autoComplete="name" required />
      </div>

      <div className="contact-form__row">
        <label htmlFor="cf-email">Your email</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
        <ValidationError
          field="email"
          errors={state.errors}
          className="contact-form__error"
        />
      </div>

      <div className="contact-form__row">
        <label htmlFor="cf-message">Your message</label>
        <textarea
          id="cf-message"
          name="message"
          rows="5"
          required
          placeholder="Ask anything — coming along, bringing children, term dates…"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="contact-form__error"
        />
      </div>

      {/* Sets the subject line of the email that reaches the inbox. */}
      <input
        type="hidden"
        name="_subject"
        value="New message from the Histon Songbirds website"
      />
      {/* Honeypot — bots fill this in, people never see it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="contact-form__gotcha"
      />

      <ValidationError errors={state.errors} className="contact-form__error" />

      <button type="submit" className="cta" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : 'Send'}
      </button>

      <p className="contact-form__note">
        I’ll only use your email to reply to you.
      </p>
    </form>
  )
}
