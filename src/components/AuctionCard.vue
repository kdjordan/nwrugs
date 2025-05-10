<template>
  <div
    class="auction-card bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full transition-transform hover:scale-102 hover:shadow-lg"
  >
    <div class="relative">
      <img
        :src="rug.image"
        :alt="rug.title"
        class="w-full h-64 object-cover object-center"
      />
      <div
        v-if="rug.featured"
        class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-secondary uppercase"
      >
        Featured
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
      >
        <p class="text-white font-semibold">Time left: {{ rug.timeLeft }}</p>
      </div>
    </div>
    <div class="p-5">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ rug.title }}</h3>
      <p class="text-gray-600 mb-4 line-clamp-2">{{ rug.description }}</p>
      <div class="flex justify-between items-center mb-4">
        <div>
          <p class="text-sm text-gray-500">Current bid</p>
          <p class="text-xl font-bold text-gray-900">
            ${{ rug.currentBid.toLocaleString() }}
          </p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Bids</p>
          <p class="text-center">{{ rug.bids }}</p>
        </div>
      </div>
      <button
        class="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors font-secondary uppercase"
      >
        Place Bid
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rug: {
    type: Object,
    required: true,
  },
});
</script>
