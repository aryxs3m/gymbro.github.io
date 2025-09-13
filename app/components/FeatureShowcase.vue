<script setup lang="ts">
  let items = [
    {
      title: "Progress Tracking",
      description: "1"
    },
    {
      title: "Insights & Motivation",
      description: "2"
    },
    {
      title: "Ease of Use",
      description: "3"
    },
    {
      title: "Personalization",
      description: "4"
    },
    {
      title: "Community / Future expansion",
      description: "5"
    },
  ];

  let currentFeature = ref(items[0].description);

  function changeFeature(description: string) {
    currentFeature.value = description;
  }
</script>

<template>
  <div class="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex flex-col justify-items-stretch gap-4">
      <div v-for="item in items" @mouseover="changeFeature(item.description)" class="hover:shadow-lg hover:bg-gray-200 transition-all py-4 border-1 shadow-md border-gray-100 p-5 py-8 flex">
        <p class="text-xl">{{ item.title }}</p>
        <div class="ml-auto">
          <svg class="stroke-black w-[30px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="grow m-auto bg-[url(/masthead.jpg)] bg-cover w-full h-full text-white">
      <div class="bg-black/50 w-full h-full flex backdrop-blur-xs">
        <div class="m-auto">{{ currentFeature }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
