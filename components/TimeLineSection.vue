<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t('timelineSection.title') }}
        </h2>
        
      </div>
      <div class="container">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <template v-for="idx in timeLineItemsCount">
            <div class="flex flex-row-reverse md:contents" v-if="idx % 2 === 0">
              <div
                class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">{{ $t(`timelineSection.items[${idx}].date`) }}</h3>
                <p class="leading-tight text-justify">
                  {{ $t(`timelineSection.items[${idx}].desc`) }}
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
 
            <div class="flex md:contents" v-else>
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">{{ $t(`timelineSection.items[${idx}].date`) }}</h3>
                <p class="leading-tight text-justify">
                  {{ $t(`timelineSection.items[${idx}].desc`) }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeLineItemsCount = 11
</script>
