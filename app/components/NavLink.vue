<script setup lang="ts">
defineProps(['to'])
</script>

<template>
<li>
  <a :href=to v-if="to.startsWith('#') || to.startsWith('http')"><slot></slot></a>
  <NuxtLink :to=to v-else><slot></slot></NuxtLink>
</li>
</template>

<style scoped>

</style>
