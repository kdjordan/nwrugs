<template>
  <nav
    class="fixed w-full z-50 bg-transparent px-6 md:px-8 py-4 flex justify-between items-center"
  >
    <!-- Logo - always visible -->
    <div class="text-2xl text-white">NW persian Rugs</div>

    <!-- Desktop Navigation - only on md+ screens -->
    <div class="hidden md:flex space-x-6 ml-auto">
      <a href="#hero" class="text-white hover:underline">Home</a>
      <a href="#about" class="text-white hover:underline">About</a>
      <a href="#auctions" class="text-white hover:underline">Auctions</a>
      <router-link to="/privacy" class="text-white hover:underline"
        >Privacy</router-link
      >
      <router-link to="/terms" class="text-white hover:underline"
        >Terms</router-link
      >
    </div>

    <!-- Mobile Menu Button - only on small screens -->
    <button
      @click="menuOpen = !menuOpen"
      class="md:hidden focus:outline-none text-white"
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
        class="absolute top-16 right-6 bg-white bg-opacity-95 rounded shadow-lg flex flex-col space-y-4 p-6 w-48 text-gray-800 md:hidden"
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
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
