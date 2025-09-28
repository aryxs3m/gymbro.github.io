// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      demoUrl: 'https://demo.repflux.app',
      docsUrl: 'https://docs.repflux.app',
      cloudUrl: 'https://cloud.repflux.app',
      github: 'https://github.com/aryxs3m/repflux-app',
      discord: 'https://discord.gg/8DNa7YGkEY',
    },
  },

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
