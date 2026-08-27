import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Options for the static-site build (npm run build). `npm run dev` is
  // unaffected and still uses Vite's normal dev server.
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
