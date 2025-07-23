<script setup>
import {onMounted, ref} from "vue";
import Hero from "@/components/Hero.vue";

const skills = ref([])
const frameworks = ref([])
const languages = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const [skillsData, frameworksData, languagesData] = await Promise.all([
      fetch('/src/assets/data/skills.json').then(res => res.json()),
      fetch('/src/assets/data/frameworks.json').then(res => res.json()),
      fetch('/src/assets/data/languages.json').then(res => res.json())
    ])

    skills.value = skillsData
    frameworks.value = frameworksData
    languages.value = languagesData
  } catch (error) {
    console.error('Error loading data:', error)
  } finally {
    isLoading.value = false
  }
})

const props = defineProps({
  condensed: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="skills-view"> <!-- Wrapper div added as root element -->
    <div v-if="isLoading" class="loading">
      Loading...
    </div>
    <template v-else>
      <!-- Hero Section -->
      <Hero />
      <div class="portfolio-view container" id="portfolio-view" :class="{'condensed': condensed}">
        <!-- Skills -->
        <section class="detail-section column">
          <h2 class="center-text">Skills</h2>
          <div v-for="skill in skills" :key="skill.id" class="column">
            <p class="green">{{ skill.skill }}</p>
            <p class="ml-5" :class="{'invisible': condensed}">{{ skill.description }}</p>
          </div>
        </section>

        <!-- Languages -->
        <section class="detail-section column">
          <h2 class="center-text">Proficient Languages</h2>
          <div v-for="language in languages" :key="language.id" class="column">
            <p class="green">{{ language.skill }}</p>
            <p class="ml-5" :class="{'invisible': condensed}">{{ language.description }}</p>
          </div>
        </section>

        <!-- Frameworks -->
        <section class="detail-section column">
          <h2 class="center-text">Proficient Frameworks</h2>
          <div v-for="framework in frameworks" :key="framework.id" class="column">
            <p class="green">{{ framework.skill }}</p>
            <p class="ml-5" :class="{'invisible': condensed}">{{ framework.description }}</p>
          </div>
        </section>
      </div>
      <!-- Contact Section -->
      <section class="contact-section">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:retupmoc258@gmail.com">retupmoc258@gmail.com</a></p>
        <a href="https://github.com/retupmoc258" target="_blank">GitHub</a>
      </section>
    </template>
  </div>
</template>

<style scoped>
.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.skills-view {
  width: 100%;
}

.portfolio-view {
  display: block;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  align-self: stretch;
}

.center-text {
  text-align: center;
}

.detail-section,
.contact-section {
  margin-bottom: 40px;
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
</style>