import { Seo, StructuredData } from './seo/Seo'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import About from './components/About'
import WhenWhere from './components/WhenWhere'
import Join from './components/Join'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Seo />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <WhenWhere />
        <Join />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StructuredData />
    </>
  )
}
