<template>
  <section
    id="hero"
    class="w-screen flex flex-col justify-center items-center tracking-wider min-h-[750px]"
  >
    <h1 class="text-4xl md:text-6xl mb-4 text-white">
      Welcome to NW Persian Rugs
    </h1>
    <p class="text-lg md:text-2xl text-white">
      Family owned and operated since 1970.
    </p>
    <button class="bg-white text-black px-4 py-2 rounded-md mt-4 tracking-wider font-bold hover:bg-gray-200 transition-colors duration-300">
      BID NOW
    </button>
  </section>
</template>

<script setup>
// No script needed for static hero
</script>

<style scoped>
#hero {
  background-image: url("/assets/rug_hero_mobile_1080x1350.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Tablet: Tailwind md is 768px */
@media (min-width: 768px) {
  #hero {
    background-image: url("/assets/rug_hero_tablet_1536x1024.webp");
  }
}

/* Desktop: Tailwind 2xl is 1536px */
@media (min-width: 1536px) {
  #hero {
    background-image: url("/assets/rug_hero_desktop_2560x1440.webp");
  }
}
</style>
