<script setup>
import {onMounted, ref} from "vue";

// Import data
//import frameworks from '@/assets/data/frameworks.json';
//import languages from '@/assets/data/languages.json';
//import skills from '@/assets/data/skills.json';

const skills = ref([])
const frameworks = ref([])
const languages = ref([])

onMounted(async () => {
  skills.value = await fetch('/src/assets/data/skills.json').then(res => res.json())
  frameworks.value = await fetch('/src/assets/data/frameworks.json').then(res => res.json())
  languages.value = await fetch('/src/assets/data/languages.json').then(res => res.json())
})

const props = defineProps({
  condensed: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section center-text" id="hero" :class="{'invisible': condensed}">
    <h1>Jason Bagley</h1>
    <h3>Software Engineer</h3>
    <img src="../assets/images/profile-image-square.jpg" alt="Image of Jason Bagley" class="profile-image"/>
  </section>
  <div class="portfolio-view container" id="portfolio-view" :class="{'condensed': condensed}">


    <!-- Skills -->
    <section class="detail-section column">
      <h2 class="center-text">Skills</h2>

      <div v-for="skill in skills" :key="skill.id" class="column">
        <p class="green" >{{ skill.skill }}</p>
        <p class="project-description">{{ skill.description }}</p>
      </div>
    </section>

    <!-- Languages -->
    <section class="detail-section column">
      <h2 class="center-text">Proficient Languages</h2>

      <div v-for="language in languages" :key="language.id" class="column">
        <p class="green" >{{ language.skill }}</p>
        <p class="project-description">{{ language.description }}</p>
      </div>
    </section>

    <!-- Frameworks -->
    <section class="detail-section column">
      <h2 class="center-text">Proficient Frameworks</h2>

      <div v-for="framework in frameworks" :key="framework.id" class="column">
        <p class="green">{{ framework.skill }}</p>
        <p class="project-description">{{ framework.description }}</p>
      </div>
    </section>

  </div>
  <!-- Contact Section -->
  <section class="contact-section">
    <h2>Get in Touch</h2>
    <p>Email: <a href="mailto:retupmoc258@gmail.com">retupmoc258@gmail.com</a></p>
    <!-- Optional: Add links to your social media profiles -->
    <!-- <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a> -->
    <a href="https://github.com/retupmoc258" target="_blank">GitHub</a>
  </section>
</template>

<style scoped>
/* Add your CSS styles for the portfolio view here */
.profile-image {
  border-radius: 50%;
  max-width: 200px;
  margin: 0 auto;
}

.portfolio-view {
  display: block;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  align-self: stretch;
}

.hero-section {
  margin-bottom: 40px;
}

.center-text {
  text-align: center;
}

.detail-section,
.contact-section {
  margin-bottom: 40px;
}

.project-description {
  margin-left: 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr; /* Single column by default */
}

.column {
  flex: 100%; /* Columns take up full width by default */
  min-width: 400px;
}

.condensed {
  grid-template-columns: 1fr;
}

.invisible {
  display: none;
}

@media (min-width: 768px) {
  .condensed {
    grid-template-columns: 1fr 1fr 1fr;
  }
}


/* Add more styles as needed */
</style>