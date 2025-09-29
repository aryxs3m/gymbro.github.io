// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Repflux - open source workout tracker',
      meta: [
        { name: 'description', content: 'Keep track of your workouts, your body measurements and your weight. See your progression real time.' },
        { name: 'ogImage', content: 'https://repflux.app/og.jpg' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

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
