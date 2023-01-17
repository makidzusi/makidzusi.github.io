<template>
  <div class="fixed inset-0 bg-white z-10">
    <nav class="gap-12 flex flex-col p-12">
      <a
        :aria-label="`Contact me on ${link.title}`"
        @click="$emit('close')"
        v-for="link in links"
        :href="link.path"
        class="router-link-exact-active text-gray-600 hover:text-indigo-700 active:text-indigo-700 text-2xl font-semibold transition duration-100"
      >
        {{ link.title }}</a
      >
    </nav>
  </div>
</template>

<script setup>
import links from "../data/links";
</script>
