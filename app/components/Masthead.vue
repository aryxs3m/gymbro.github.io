<script setup lang="ts">

</script>

<template>
  <div class="bg-[url(/masthead.jpg)] bg-cover bg-center h-full md:h-screen md:overflow-hidden">
    <!-- Main CTA -->
    <div class="bg-black/70 h-full">
      <div class="p-10 md:p-20 lg:p-30 flex">
        <div class="container mx-auto flex flex-col md:flex-row h-full">
          <img src="/phone-ph.png" alt="Phone" class="w-100 md:w-1/3 m-auto md:m-0">
          <div class="px-5 text-center text-white text-shadow-lg mb-20">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
