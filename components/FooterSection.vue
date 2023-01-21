<template>
  <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col items-center border-t pt-6">
        <nav
          class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4"
        >
          <a
            v-for="link in links"
            :href="link.path"
            class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            {{ $t(`links.${link.key}`) }}</a
          >
        </nav>

        <div class="flex gap-4 items-center">
          <SocialLinks />
        </div>
      </div>

      <div class="text-gray-400 text-sm text-center py-8">
        2023 - Made with:
        <a href="https://nuxt.com/" target="_blank">Nuxt</a> and
        <a href="https://tailwindcss.com/">Tailwind CSS</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import links from "~~/data/links";
</script>
