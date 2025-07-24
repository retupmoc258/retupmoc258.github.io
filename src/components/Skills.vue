<script setup>
import {onMounted, ref} from "vue";

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
  <div class="skills-container" :class="{'condensed': condensed}">
    <!-- Skills -->
    <section class="detail-section column" v-if="!condensed">
      <h2 class="text-center">Skills</h2>
      <div v-for="skill in skills" :key="skill.id">
        <p class="green">{{ skill.skill }}</p>
        <p class="project-description">{{ skill.description }}</p>
      </div>
    </section>
    <section class="detail-section column" v-if="condensed">
      <h2 class="text-center">Skills</h2>
      <ul class="max-w-[calc(100vw-6.25rem)] justify-self-center">
        <li v-for="skill in skills" :key="skill.id" class="green mb-0">{{ skill.skill }}</li>
      </ul>
    </section>

    <!-- Languages -->
    <section class="detail-section column" v-if="!condensed">
      <h2 class="text-center">Proficient Languages</h2>
      <div v-for="language in languages" :key="language.id">
        <p class="green">{{ language.skill }}</p>
        <p class="project-description">{{ language.description }}</p>
      </div>
    </section>
    <section class="detail-section column" v-if="condensed">
      <h2 class="text-center">Proficient Languages</h2>
      <ul class="min-w-40 justify-self-center">
        <li v-for="language in languages" :key="language.id" class="green mb-0">{{ language.skill }}</li>
      </ul>
    </section>

    <!-- Frameworks -->
    <section class="detail-section column" v-if="!condensed">
      <h2 class="text-center">Proficient Frameworks</h2>
      <div v-for="framework in frameworks" :key="framework.id">
        <p class="green">{{ framework.skill }}</p>
        <p class="project-description">{{ framework.description }}</p>
      </div>
    </section>
    <section class="detail-section column" v-if="condensed">
      <h2 class="text-center">Proficient Frameworks</h2>
      <ul class="min-w-40 justify-self-center">
        <li v-for="framework in frameworks" :key="framework.id" class="green mb-0">{{ framework.skill }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.skills-container {
  display: grid;
  grid-template-columns: 1fr; /* Single column by default */
  justify-items: center; /* Center grid items horizontally */
  /* gap: 2rem; */
}

.detail-section {
  margin-bottom: 20px;
  width: 100%; /* Take full width by default */
  max-width: 600px; /* Limit maximum width */
  /* padding: 0 1rem; /* Add some horizontal padding */
}

.column {
  width: 100%;
}

.project-description {
  margin-left: 20px;
}

.skills-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* Single column by default */
}

.condensed {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .condensed {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>