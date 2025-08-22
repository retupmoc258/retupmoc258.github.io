<script setup>

import ContactFooter from "@/components/ContactFooter.vue";
import Hero from "@/components/Hero.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <div class="portfolio-view">
    <Hero/>

    <Projects :filter="true" :short="false" />

    <ContactFooter/>
  </div>

</template>

<style scoped>
.portfolio-view {
  display: block;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  align-self: stretch;
}
</style>