<script setup lang="ts">

</script>

<template>
  <NavBar absolute="true"></NavBar>

  <Masthead>
    <h1 class="text-5xl md:text-8xl mt-20 md:mt-25 lg:mt-50 text-shadow-lg/80">Track your sets, your weight and your body.</h1>
    <p class="text-shadow-lg/30">See your progression real time.</p>
    <RfButton class="mt-5 me-3">Register</RfButton>
    <RfButton>See Demo</RfButton>
  </Masthead>

  <SimpleFeatureContainer class="mt-20">
    <SimpleFeatureItem heading="Track Every Rep">
      <template v-slot:top>
        <p class="text-6xl mb-6 text-shadow-lg">👀</p>
      </template>
      Logging your sets, reps, and weight takes seconds — and you’ll never lose sight of your gains again.
    </SimpleFeatureItem>
    <SimpleFeatureItem heading="See Your Flux">
      <template v-slot:top>
        <p class="text-6xl mb-6 text-shadow-lg">💪</p>
      </template>
      Repflux turns raw numbers into clear progress charts, so you can feel pumped every time you open the app.
    </SimpleFeatureItem>
    <SimpleFeatureItem heading="Your Progress, Your Way">
      <template v-slot:top>
        <p class="text-6xl mb-6 text-shadow-lg">🔧</p>
      </template>
      Customize workouts, track measurements, and watch your fitness journey unfold.
    </SimpleFeatureItem>
  </SimpleFeatureContainer>

  <FeatureShowcase></FeatureShowcase>

  <CtaSection>
    <h1 class="text-5xl md:text-8xl text-shadow-lg/30">Are you ready to make your workouts smarter?</h1>
    <p class="text-2xl">Register in our free app, see our demo or host your instance on your very own server.</p>
    <div class="mt-3">
      <RfButton href="https://cloud.repflux.app" class="me-3 mb-3">Register</RfButton>
      <RfButton href="https://demo.repflux.app" class="me-3 mb-3">See Demo</RfButton>
      <RfButton href="https://docs.repflux.app">Self host</RfButton>
    </div>
  </CtaSection>

  <SocialIcons></SocialIcons>
</template>

<style scoped>

</style>
