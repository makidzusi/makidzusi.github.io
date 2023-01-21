<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12" id="home">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <Header />
      <section
        class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16"
      >
        <div class="xl:w-5/12 flex flex-col justify-between">
          <div></div>

          <div class="sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p
              class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6"
            >
              {{ $t('heroSection.subtitle') }}
            </p>

            <h1
              id="hero-title"
              class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12"
            >
            {{ $t('heroSection.title') }}
            </h1>
            <p class="text-xl text-gray-500">
              {{ $t('heroSection.desc') }}
            </p>
          </div>

          <div
            class="flex justify-center lg:justify-start items-center gap-4 mt-8 sm:mt-16"
          >
            <span
              class="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase"
              >Social</span
            >
            <span class="w-12 h-px bg-gray-200"></span>

            <div class="flex gap-4 items-center">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div
          class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg"
        >
          <div id="hero"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import boxAnimation from "../animations/programmer.json";
import anim from "lottie-web";
import anime from "animejs";

onMounted(() => {
  var textWrapper = document.querySelector("#hero-title");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  const animation = anime
    .timeline({ loop: true })
    .add({
      targets: ".letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i,
    })
    .add({
      targets: ".letter",
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i,
    });
  animation.play();

  anim.loadAnimation({
    container: document.getElementById("hero"),
    renderer: "svg",
    loop: true,
    animationData: boxAnimation,
    autoplay: true,
  });
});
</script>
