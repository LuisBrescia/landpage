import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Aprendendo Vue.js',
      meta: [{ charset: 'utf-8' }]
    }
  },
  modules: ['nuxt-icon'],
  devtools: { enabled: false }
})
