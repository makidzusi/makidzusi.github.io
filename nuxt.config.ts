import en from './lang/en.json';
import ru from './lang/ru.json';

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
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      messages: {
        en,
        ru,
      },
    },
  },
});
