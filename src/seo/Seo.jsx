import { Head } from 'vite-react-ssg/single-page'
import { SITE } from '../config'
import { buildStructuredData } from './structuredData'

// The page's <title>, description and social-share tags — what Google and
// other sites read when they list or preview this page. The wording is tuned
// so people searching for a women's or mothers' singing group near Histon and
// Cambridge find it. The structured data (for rich search results) is rendered
// separately, in the page body, by <StructuredData /> below.

const TITLE = 'Histon Songbirds | Women’s Singing Group in Histon, Cambridge'

const DESCRIPTION =
  'A calm, welcoming singing group for women and mothers in Histon, near Cambridge. ' +
  'We meet on Monday evenings at St Andrew’s Church during term time. ' +
  'No experience or audition needed — just come and sing.'

const OG_IMAGE = `${SITE.url}/og-image.png`

export function Seo() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={`${SITE.url}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={`${SITE.url}/`} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  )
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is valid anywhere in the document; keeping it in the body
      // keeps <head> small.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
    />
  )
}
