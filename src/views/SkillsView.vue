
<script setup>
import Hero from "@/components/Hero.vue";
import Skills from "@/components/Skills.vue";

</script>

<template>
  <div class="portfolio-view">
    <div v-if="isLoading" class="loading">
      Loading...
    </div>
    <template v-else>
      <!-- Hero Section -->
      <Hero v-if="!condensed" />

      <Skills />

      <!-- Contact Section -->
      <section class="contact-section" v-if="!condensed">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:retupmoc258@gmail.com">retupmoc258@gmail.com</a></p>
        <a href="https://github.com/retupmoc258" target="_blank">GitHub</a>
      </section>
    </template>
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