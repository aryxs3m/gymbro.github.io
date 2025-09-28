<script setup lang="ts">

</script>

<template>
  <footer class="bg-black py-20 text-white">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
      <div>
        <img src="/logo.png" class="invert w-100 p-10 md:p-5 inline-block" alt="Repflux">
      </div>
      <div>
        <h1 class="text-xl mb-2">Boring but Important</h1>
        <ul class="flex flex-col gap-2">
          <NavLink to="cloud-data-delete">Cloud Data Delete</NavLink>
          <NavLink to="privacy-policy">Privacy Policy</NavLink>
          <NavLink to="terms-of-service">Terms of Service</NavLink>
          <NavLink to="impressum">Impressum</NavLink>
        </ul>
      </div>
      <div>
        <h1 class="text-xl mb-2">Blog</h1>
        <ul class="flex flex-col gap-2">
          <li><a href="#">New Features v1.2.0</a></li>
          <li><a href="#">New Features v1.1.0</a></li>
          <li><a href="#">New Features v1.0.1</a></li>
        </ul>
      </div>
      <div>
        <h1 class="text-xl mb-2">Blog</h1>
        <ul class="flex flex-col gap-2">
          <li><a href="#">New Features v1.2.0</a></li>
          <li><a href="#">New Features v1.1.0</a></li>
          <li><a href="#">New Features v1.0.1</a></li>
        </ul>
      </div>
    </div>
    <div class="container text-center mx-auto mt-20">
      <p class="text-4xl mb-10 font-thin">= ^ . ^ =</p>
      <p class="text-sml">Repflux 2025 &middot; PVGA IT Services &middot; PVGA Hackerspace</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
