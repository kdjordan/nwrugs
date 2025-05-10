<template>
  <nav
    ref="navRef"
    class="fixed w-full z-50 bg-transparent px-6 md:px-8 py-4 flex justify-between items-center"
  >
    <!-- Logo - always visible -->
    <div
      class="text-3xl"
      :class="isNavPurple ? 'text-purple-600' : 'text-white'"
    >
      NW Persian Rugs
    </div>

    <!-- Desktop Navigation - only on md+ screens -->
    <div
      class="hidden md:flex space-x-6 ml-auto text-lg uppercase font-secondary"
      :class="isNavPurple ? 'text-purple-600' : 'text-white'"
    >
      <a href="#hero" class="">Home</a>
      <a href="#about" class="">About</a>
      <a href="#auctions" class="">Auctions</a>
      <a href="#contact" class="">Contact</a>
    </div>

    <!-- Mobile Menu Button - only on small screens -->
    <button
      @click="menuOpen = !menuOpen"
      class="md:hidden focus:outline-none"
      :class="isNavPurple ? 'text-purple-600' : 'text-white'"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- Mobile Menu Dropdown - only on small screens when menu is open -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="absolute top-16 right-6 bg-white bg-opacity-95 rounded shadow-lg flex flex-col space-y-4 p-6 w-48 text-gray-800 md:hidden font-secondary"
      >
        <a href="#hero" class="hover:underline" @click="menuOpen = false"
          >Home</a
        >
        <a href="#about" class="hover:underline" @click="menuOpen = false"
          >About</a
        >
        <a href="#auctions" class="hover:underline" @click="menuOpen = false"
          >Auctions</a
        >
        <router-link
          to="/privacy"
          class="hover:underline"
          @click="menuOpen = false"
          >Privacy</router-link
        >
        <router-link
          to="/terms"
          class="hover:underline"
          @click="menuOpen = false"
          >Terms</router-link
        >
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const isNavPurple = ref(false);
const navRef = ref(null); // Ref for the nav element

const handleScroll = () => {
  const aboutSection = document.getElementById("about");
  const navElement = navRef.value;

  if (aboutSection && navElement) {
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
    const navHeight = navElement.offsetHeight;

    // Change color if the nav is currently overlapping the about section
    if (aboutSectionTop <= navHeight && aboutSectionBottom >= 0) {
      isNavPurple.value = true;
    } else {
      isNavPurple.value = false;
    }
  } else {
    // Default to not purple if elements aren't found,
    // though this might be undesirable if it flashes during loading.
    // Consider initial state carefully if #about might not be immediately available.
    isNavPurple.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
a:hover {
  color: oklch(71.4% 0.203 305.504);
  transition: color 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
