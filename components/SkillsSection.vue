<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12" id="skills">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
        {{ $t('skillsSection.title') }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t('skillsSection.desc') }}
        </p>
      </div>
      <div>
        <div class="flex justify-between flex-col xl:flex-row gap-4 xl:gap-0">
          <div v-for="(tech, idx) in technologies">
            <div
              class="flex items-center justify-between xl:justify-start gap-8"
            >
              <h3 class="text-xl font-bold">{{ tech.title }}</h3>
              <button
                aria-label="Tech group switcher"
                @click="selectedIndex = idx"
                :class="{
                  'before:rotate-90': selectedIndex === idx,
                }"
                class="h-[64px] before:transition before:ease-in-out before:delay-150 flex items-center justify-center w-[64px] bg-indigo-600 rounded-full hover:bg-gray-800 after:content-[''] after:w-6 after:h-1 after:block after:bg-white before:w-1 before:h-6 before:absolute after:rounded before:rounded before:block before:bg-white"
              ></button>
            </div>
            <Transition
              enter-active-class="duration-300 ease-out"
              enter-from-class="transform opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="duration-200 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="transform opacity-0"
            >
              <div v-show="selectedIndex === idx" class="xl:hidden p-3">
                <Swiper
                  :modules="[Autoplay]"
                  :loop="true"
                  :breakpoints="{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    480: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }"
                >
                  <SwiperSlide v-for="item in tech.items">
                    <div
                      class="h-[250px] m-2 p-2 min-w-[190px] flex flex-grow shadow rounded flex-col items-center justify-center"
                    >
                      <NuxtImg
                        height="100"
                        width="100"
                        format="webp"
                        quality="90"
                        class="w-[100px] h-[100px] object-cover rounded"
                        :src="item.img"
                        :alt="item.alt"
                      />
                      <h3 class="text-lg md:text-xl font-semibold mb-2 mt-2">
                        {{ item.title }}
                      </h3>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Transition>
          </div>
        </div>
        <div class="hidden xl:flex">
          <Swiper :loop="true" :slidesPerView="3" :modules="[Autoplay]">
            <SwiperSlide v-for="item in technologies[selectedIndex].items">
              <div
                class="h-[250px] min-w-[190px] p-2 m-2 flex flex-grow shadow rounded flex-col items-center justify-center"
              >
                <NuxtImg
                  height="100"
                  format="webp"
                  width="100"
                  quality="90"
                  class="w-[100px] h-[100px] object-cover rounded"
                  :src="item.img"
                  :alt="item.alt"
                />
                <h3 class="text-lg md:text-xl font-semibold mb-2 mt-2">
                  {{ item.title }}
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper";
const selectedIndex = ref(0);
const technologies = [
  {
    title: "Frontend",
    items: [
      {
        title: "Vue",
        img: "vue.png",
        alt: "Vue logo icon",
      },
      {
        title: "JavaScript",
        img: "js.png",
        alt: "JavaScript logo icon",
      },
      {
        title: "TypeScript",
        img: "ts.png",
        alt: "TypeScript logo icon",
      },
      {
        title: "Nuxt",
        img: "nuxt.png",
        alt: "Nuxt logo icon",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        title: "Node.js",
        img: "node.webp",
        alt: "",
      },
      {
        title: ".NET Core",
        img: "netcore.png",
        desc: ".Net Core logo icon",
      },
      {
        title: "Express.js",
        img: "express.png",
        desc: "Express.js logo icon",
      },
    ],
  },
  {
    title: "Other techs/libs",
    items: [
      {
        title: "Flutter",
        img: "flutter.png",
        desc: "Flutter logo icon",
      },
      {
        title: "Ionic",
        img: "ionic.jpg",
        desc: "Ionic logo icon",
      },
      {
        title: "MongoDB",
        img: "mongo.png",
        desc: "MongoDb logo icon",
      },
      {
        title: "SQL databases",
        img: "sql.png",
        desc: "SQL logo icon",
      },
    ],
  },
];
</script>
