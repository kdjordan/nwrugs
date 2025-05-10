<script setup>
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <div class="h-full w-full font-primary">
    <TopNav />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
