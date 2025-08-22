<script setup>

import Hero from "@/components/Hero.vue";
import ContactFooter from "@/components/ContactFooter.vue";
import {onMounted, ref} from "vue";

// TODO implement this page
const history = ref({})

onMounted(async () => {
  try {
    history.value = await fetch('/files/history.json').then(res => res.json());
  } catch (error) {
    console.error('Error loading data:', error)
  }
})

</script>

<template>
  <div class="portfolio-view">
    <!-- Hero Section -->
    <Hero />

    <!-- About Section -->
    <section class="detail-section">
      <h2>About Me</h2>
      <p class="ml-5">I graduated from Western Governors University in June 2025.  I have been developing small software/scripting projects for work since 2020.
        I love learning, teaching, and playing board games and video games.</p>
    </section>

    <!-- Employment History -->
    <section>
      <h2 class="mb-2">My Work History</h2>
      <div v-for="job in history" :key="job.id" class="projects-section">
        <p><span class="green">{{ job.company }}</span> - {{job.job_title}} - <span class="italic">{{job.start_date}} to {{job.end_date}}</span></p>
        <p class="work-description">{{ job.description }}</p>
      </div>
    </section>

    <!-- Contact Section -->
    <ContactFooter/>
  </div>
</template>

<style scoped>
/* Add your CSS styles for the portfolio view here */
.portfolio-view {
  display: block;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  align-self: stretch;
}

.detail-section,
.projects-section {
  margin-bottom: 40px;
}

.work-description {
  margin-left: 20px;
}


/* Add more styles as needed */
</style>