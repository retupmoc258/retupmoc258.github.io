
<script setup>
import Hero from "@/components/Hero.vue";
import Skills from "@/components/Skills.vue"
import ContactFooter from "@/components/ContactFooter.vue";



</script>

<template>
  <div class="portfolio-view">
      <!-- Hero Section -->
      <Hero />

      <Skills />

      <!-- Contact Section -->
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

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.contact-section {
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

</style>