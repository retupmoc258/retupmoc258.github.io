<template>
  <div class="portfolio-view">
    <Hero/>

    <!-- About Section -->
    <section class="detail-section">
      <h2>About Me</h2>
      <p class="ml-5">I graduated from Western Governors University in June 2025.  I have been developing small software projects for work since 2020.
        I love learning, teaching, and playing board games and video games.</p>
    </section>

    <!-- Skills Condensed -->
    <Skills condensed />

    <!-- Projects Section -->
    <Projects />

    <!-- Contact Section -->
    <ContactFooter/>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Skills from "@/components/Skills.vue";
import ContactFooter from "@/components/ContactFooter.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: 'HomeView',
  components: {Projects, ContactFooter, Skills, Hero},
};
</script>

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

.detail-section {
  margin-bottom: 20px;
}



/* Add more styles as needed */
</style>