<script setup lang="ts">
defineProps(['heading'])
</script>

<template>
  <div>
    <div class="py-4 my-20 md:my-50">
      <slot name="top"></slot>
      <h1 class="text-4xl mb-3">{{ heading }}</h1>
      <hr class="w-30 mx-auto my-5 border-0 border-b-3 border-b-primary">
      <p class="text-xl"><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>

</style>
