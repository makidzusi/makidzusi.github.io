<template>
  <header
    class="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16 scroll-smooth"
  >
    <a
      href="/"
      class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
      aria-label="logo"
    >
      <svg
        width="95"
        height="94"
        viewBox="0 0 95 94"
        class="w-6 h-auto text-indigo-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>
    </a>

    <nav class="hidden lg:flex gap-12">
      <a
        v-for="link in links"
        :href="link.path"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
      >
        {{ $t(`links.${link.key}`) }}</a
      >
      <NuxtLink
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        :to="switchLocalePath(locale === 'ru' ? 'en' : 'ru')"
      >
        {{ locale === "ru" ? "English" : "Русский" }}
      </NuxtLink>
    </nav>
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="-translate-x-full"
    >
      <DrawerPanel @close="isShowDrawer = false" v-if="isShowDrawer"
    /></Transition>

    <button
      type="button"
      @click="isShowDrawer = !isShowDrawer"
      class="inline-flex items-center lg:hidden z-20 bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>

      Menu
    </button>
  </header>
</template>

<script setup>
import links from "../data/links";
const isShowDrawer = ref(false);
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale, t } = useI18n();
</script>
