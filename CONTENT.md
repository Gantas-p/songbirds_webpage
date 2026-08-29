# Editing the website — a plain guide

You do **not** need to know how to code to change the words, the booking link,
the times, or the photos. This guide covers the common changes. After any edit,
save the file; if the local site (`npm run dev`) is running you will see the
change straight away.

If something looks broken after an edit, undo your change (or ask for help) —
you cannot damage anything permanently, every version is saved in git.

---

## 1. The booking link, times, address and contact form

Open **`src/config.js`**. Everything in there is meant to be edited. Each setting
has a note above it explaining what it is. The important ones:

### Add the Eventbrite booking link

Find this line:

```js
export const EVENTBRITE_URL = ''
```

Paste your Eventbrite address between the quotes:

```js
export const EVENTBRITE_URL = 'https://www.eventbrite.co.uk/e/your-event-12345'
```

While it is empty, the site shows a calm "Booking opens soon" note instead of a
button. As soon as you add the link, every "Book your place" button on the page
starts working.

### Change the day or time

In the `SESSION` block:

```js
dayText: 'Mondays',
timeText: '7:30pm',
```

If you change the time, **also** update the 24-hour version just below it
(`startTime: '19:30'`) — that one is what Google reads. 7:30pm is `19:30`,
8pm is `20:00`, and so on.

### Change the venue or address

In the `VENUE` block — the group meets at St Andrew’s Centre, School Hill,
Histon, Cambridge CB24 9JE. Change any field there and it updates on the page,
in the map link, and in the information Google reads.

### The contact form

The "Get in touch" section is a form, handled by **Formspree**. When someone
sends a message it arrives in the inbox you registered with Formspree — there is
no email address on the page.

- **Change where messages go, or add another recipient:** log in at
  [formspree.io](https://formspree.io) and edit the form's settings. Nothing in
  the code changes.
- **The free plan allows 50 messages a month.** Formspree emails you if you're
  close to the limit.
- The only thing in the code is the form's ID (`FORMSPREE_ID` in
  `src/config.js`) — the last part of the Formspree endpoint. You'd only change
  this if you made a brand-new form.
- First time: Formspree sends you a one-off "confirm this form" email — click it
  or messages won't come through.

### Add an Instagram or Facebook page

In the `SOCIAL` block, paste the full address between the quotes. Links appear in
the Contact section automatically. Leave them empty to hide them.

---

## 2. The questions and answers (FAQ)

Open **`src/data/faq.js`**. It is a list of questions. Each looks like this:

```js
{
  q: 'Do I need to audition?',
  a: 'Never. There are no auditions and no tryouts. Come as you are.',
},
```

- **Change wording:** edit the text between the quote marks.
- **Add a question:** copy one whole block (from `{` to `},` including the
  comma) and paste it, then change the words.
- **Remove a question:** delete its whole block.

Keep the straight quote marks (`'`) exactly where they are. If your answer needs
an apostrophe, use the curly one (`’`) so it doesn't clash — for example
`we’ll` not `we'll`.

---

## 3. The main paragraphs (welcome, about us, etc.)

Each section of the page is a file in **`src/components/`**:

| Section on the page | File |
| --- | --- |
| Top welcome / heading | `Hero.jsx` |
| About us | `About.jsx` |
| When & where | `WhenWhere.jsx` |
| Join us | `Join.jsx` |
| Get in touch | `Contact.jsx` |
| Bottom footer line | `Footer.jsx` |

Open the file and edit the sentences between the `>` and `<` marks. Don't touch
the lines with `<` and `/>` and `className` — just the readable text.

The **About us** paragraphs are the most worth getting right: that section is
what someone reads when they find the group through a search, and it is what
search engines use to understand what Histon Songbirds is.

---

## 4. Photos

The only image on the page right now is the songbirds illustration in the hero
(`public/images/hero-songbirds.png`) and the social share image below. To add a
photo to a section — for example under the About paragraphs:

1. Put the image file in **`public/images/`**. Use a `.jpg`, keep it under about
   500 KB, and around 1600 pixels wide is plenty.
2. In the section's file (e.g. `src/components/About.jsx`), add an `<img>` where
   you want it — for About, just before the closing `</div>`:

   ```jsx
   <img
     src="/images/your-photo.jpg"
     alt="Describe what is in the photo, e.g. the group singing together"
     width="1600"
     height="900"
     style={{ marginTop: '2rem', borderRadius: '12px' }}
   />
   ```

   The `alt` text matters — it is read aloud to visually impaired visitors and
   used by Google, so describe the picture in a few plain words.

### The social share image

`public/og-image.png` is the picture that shows when the site is shared on
WhatsApp, Facebook, etc. It is a plain placeholder now. Replace it with a nice
1200 × 630 pixel photo with the group's name on it when you have one — keep the
same file name.

---

## 5. Publishing a change

Changes you save only affect your own computer until they are put into git and
deployed.

- Small text fixes: commit them to the `dev` branch, then merge `dev` into
  `main` when you're happy. `main` is what goes live.
- If you're not comfortable with git, save your edits and ask for help getting
  them published.

---

## Quick reference

| I want to… | File |
| --- | --- |
| Add / change the booking link | `src/config.js` |
| Change day, time, address | `src/config.js` |
| Change where contact messages go | Formspree dashboard (not the code) |
| Edit a FAQ | `src/data/faq.js` |
| Reword the welcome / about text | `src/components/*.jsx` |
| Add a photo | `public/images/` + the section's file |
| Change colours | top of `src/styles/global.css` |
