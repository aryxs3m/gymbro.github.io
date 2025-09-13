<script setup lang="ts">
  let items = [
    {
      title: "Progress Tracking",
      description: "Log every rep, set, and measurement to see your strength story unfold.",
      image: 'phone-ph.png',
    },
    {
      title: "Insights & Motivation",
      description: "Stay pumped with charts, streaks, and highlights that prove your grind pays off.",
      image: 'phone-ph.png',
    },
    {
      title: "Ease of Use",
      description: "Fast, clean, and effortless — logging workouts takes seconds, not minutes.",
      image: 'phone-ph.png',
    },
    {
      title: "Personalization",
      description: "Build your own routines and track exactly what matters to you.",
      image: 'phone-ph.png',
    },
    {
      title: "Community / Future expansion",
      description: "Train together, shape features, and even code your own — Repflux is built with you.",
      image: 'phone-ph.png',
    },
  ];

  let currentFeature = ref(items[0]);

  function changeFeature(index: number) {
    currentFeature.value = items[index];
  }
</script>

<template>
  <div class="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex flex-col justify-items-stretch gap-4">
      <div v-for="(item, index) in items" @mouseover="changeFeature(index)" class="hover:shadow-lg hover:bg-gray-200 transition-all py-4 border-1 shadow-md border-gray-100 p-5 py-8 flex">
        <p class="text-xl">{{ item.title }}</p>
        <div class="ml-auto">
          <svg class="stroke-black w-[30px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="grow m-auto bg-[url(/cta.webp)] bg-cover w-full h-full text-white">
      <div class="bg-black/50 w-full h-full flex backdrop-blur-xs" v-if="currentFeature">
        <div class="m-auto text-center">
          <img :src="currentFeature.image" :alt="currentFeature.title" class="h-100 inline-block">
          <p class="mt-5 pt-1 text-shadow-lg/80">{{ currentFeature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
