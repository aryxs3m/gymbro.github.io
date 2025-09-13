// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/style.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  scripts: {
    registry: {
      umamiAnalytics: {
        websiteId: 'c2087f31-fe01-4a03-ae67-b51b002f981c'
      }
    }
  },

  modules: ['@nuxt/scripts'],
})
