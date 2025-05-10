<script setup>
import TopNav from "./components/TopNav.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="h-full w-full font-primary">
    <TopNav />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
  <TheFooter />
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
