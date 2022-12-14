// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt 3 Dojo',
      meta: [{
        name: 'description',
        content: 'Everything about Nuxt 3',
      }],
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
      }]
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
