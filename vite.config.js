
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

import tailwindcss from 'tailwindcss'
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://furkanguzelant.github.io',
      routes: [
        '/', // add more if you have other pages like /about, /publications, etc.
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
  },
})
