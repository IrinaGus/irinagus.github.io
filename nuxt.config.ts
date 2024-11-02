// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  app: {baseURL: "/"},
  css: [ '@/styles/Text.css', '@/styles/Buttons.css' ]
})
