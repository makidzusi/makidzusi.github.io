// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "@nuxt/image-edge",
  ],
  app: {
    head: {
      title: "Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "scroll-smooth",
      },
    },
  },
});
