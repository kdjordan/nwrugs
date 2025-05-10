<template>
  <section id="auctions" class="py-24 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">
          Current Auctions
        </h2>
        <p
          class="max-w-2xl mx-auto text-center text-gray-700 mb-8 text-xl font-secondary"
        >
          Browse our latest auctions and place your bids on exquisite Persian
          rugs.
        </p>
        <div
          class="flex flex-wrap gap-3 justify-center mb-8 font-secondary uppercase rounded-lg text-sm"
        >
          <button
            class="bg-purple-500 text-white px-4 py-2 rounded-lg  font-medium uppercase"
          >
            All
          </button>
          <button
            class="bg-white text-gray-700 px-4 py-2 rounded-lg  font-medium border border-gray-300 hover:bg-gray-50 uppercase"
          >
            Area
          </button>
          <button
            class="bg-white text-gray-700 px-4 py-2 rounded-lg  font-medium border border-gray-300 hover:bg-gray-50 uppercase"
          >
            Runner
          </button>
          <button
            class="bg-white text-gray-700 px-4 py-2 rounded-lg  font-medium border border-gray-300 hover:bg-gray-50 uppercase"
          >
            Specialty
          </button>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AuctionCard v-for="rug in rugs" :key="rug.id" :rug="rug" />
      </div>

      <div class="mt-12 text-center">
        <button
          class="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-md transition-colors"
        >
          View All Auctions
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AuctionCard from "./AuctionCard.vue";
import { rugs } from "../data/rugs";
</script>
