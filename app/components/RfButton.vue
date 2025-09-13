<script setup lang="ts">
defineProps(['href'])
</script>

<template>
  <a :href=href class="border-1 border-primary/50 bg-primary/50 hover:bg-primary hover:text-white hover:border-black/50 transition-colors px-7 py-3 inline-block rounded-full shadow-lg"><slot></slot></a>
</template>

<style scoped>

</style>
