export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-08-14',
  modules: ["@nuxt/image"]
})