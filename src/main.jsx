import { ViteReactSSG } from 'vite-react-ssg/single-page'
import '@fontsource/eb-garamond/400.css'
import '@fontsource/eb-garamond/500.css'
import '@fontsource/eb-garamond/600.css'
import './styles/global.css'
import App from './App.jsx'

// Single-page static-site generation: the whole page is pre-rendered to real
// HTML at build time (good for search engines and link previews), then made
// interactive in the browser.
export const createRoot = ViteReactSSG(<App />)
