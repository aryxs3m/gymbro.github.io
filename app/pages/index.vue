<script setup lang="ts">

</script>

<template>
  <NavBar absolute="true"></NavBar>

  <Masthead>
    <h1 class="text-5xl md:text-8xl mt-20 md:mt-25 lg:mt-50">Track your sets, your weight and your body.</h1>
    <p>See your progression real time.</p>
    <RfButton class="mt-5 me-3">Register</RfButton>
    <RfButton>See Demo</RfButton>
  </Masthead>

  <SimpleFeatureContainer class="mt-20">
    <SimpleFeatureItem heading="Track Every Rep">
      <template v-slot:top>
        <svg class="mx-auto mb-3 fill-black w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>
        </svg>
      </template>
      Logging your sets, reps, and weight takes seconds — and you’ll never lose sight of your gains again.
    </SimpleFeatureItem>
    <SimpleFeatureItem heading="See Your Flux">
      <template v-slot:top>
        <svg class="mx-auto mb-3 fill-black w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>
        </svg>
      </template>
      Repflux turns raw numbers into clear progress charts, so you can feel pumped every time you open the app.
    </SimpleFeatureItem>
    <SimpleFeatureItem heading="Your Progress, Your Way">
      <template v-slot:top>
        <svg class="mx-auto mb-3 fill-black w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>
        </svg>
      </template>
      Customize workouts, track measurements, and watch your fitness journey unfold.
    </SimpleFeatureItem>
  </SimpleFeatureContainer>

  <FeatureShowcase></FeatureShowcase>

  <CtaSection>
    <h1 class="text-8xl">Are you ready to make your workouts smarter?</h1>
    <p class="text-2xl">Register in our free app, see our demo or host your instance on your very own server.</p>
    <div class="mt-3">
      <RfButton href="https://cloud.repflux.app" class="me-3">Register</RfButton>
      <RfButton href="https://demo.repflux.app" class="me-3">See Demo</RfButton>
      <RfButton href="https://docs.repflux.app">Self host</RfButton>
    </div>
  </CtaSection>

  <SocialIcons></SocialIcons>
</template>

<style scoped>

</style>
