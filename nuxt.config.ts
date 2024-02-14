// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      title : 'Nuxt-js Project',
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js' }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  modules: [
    'nuxt-vue3-google-signin',
    // '@sidebase/nuxt-auth',
    // 'vue3-google-signin',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  // auth: {
  //   provider: {
  //     type: 'authjs'
  //   },
  // },
  runtimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  imports: {
    dirs: ['stores']
  },
})