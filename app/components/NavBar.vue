<script setup lang="ts">
defineProps(['absolute'])

let isMobileOpen = ref(false);

let items = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Why",
    href: '#why',
  },
  {
    label: "Demo",
    href: "https://demo.repflux.app",
  },
  {
    label: "Contact",
    href: "#contact",
  }
];
</script>

<template>
  <!-- Navbar -->
  <div class="bg-gray-100/50 border-b-1 border-b-black shadow-xs backdrop-blur-sm w-full" :class="{ absolute: absolute }">
    <div class="container mx-auto py-5 px-5 md:px-0 flex flex-row">
      <div class="my-auto">
        <NuxtLink to="/"><img src="/logo.png" alt="Repflux" class="w-[200px]"></NuxtLink>
      </div>
      <div class="ms-auto my-auto block md:hidden">
        <svg @click="isMobileOpen = !isMobileOpen" class="w-[48px] h-[48px] text-gray-800 dark:text-white transition-all" :class="{'rotate-90': isMobileOpen}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
      </div>
      <div class="ms-auto my-auto hidden md:block">
        <ul class="inline">
          <NavLink v-for="item in items" :to="item.href" class="mx-3 inline-block">{{ item.label }}</NavLink>
        </ul>
      </div>
      <div class="my-auto hidden md:block">
        <RfButton href="https://cloud.repflux.app">Open App</RfButton>
      </div>
    </div>
    <div>
      <div class="container text-center" :class="{hidden: !isMobileOpen}">
        <RfButton href="https://cloud.repflux.app" class="mb-5">Open App</RfButton>
        <ul>
          <NavLink v-for="item in items" :to="item.href" class="p-4 block">{{ item.label }}</NavLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
