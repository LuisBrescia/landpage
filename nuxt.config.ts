import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Landpage - Nuxt3',
      meta: [{ charset: 'utf-8' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon-atendeai.png' }],
    }
  },
  modules: ['nuxt-icon'],
  devtools: { enabled: false },
  components: [
    { path: '~/components/buttons', pathPrefix: false},
    '~/components'
  ]
})
