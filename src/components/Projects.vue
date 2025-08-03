<script setup>
import {onMounted, ref} from "vue";
import ProjectSlot from "@/components/ProjectSlot.vue";

const projects = ref([])

onMounted(async () => {
  try {
    projects.value = await fetch('/files/projects.json').then(res => res.json());
  } catch (error) {
    console.error('Error loading data:', error)
  }
})

const props = defineProps({
  short: {
    type: Boolean,
    default: true
  }
});

// TODO: Implement Tag list and filter.
</script>

<template>
  <section class="mb-5">
    <h2>My Recent Projects</h2>
    <ProjectSlot v-for="project in projects" :key="project.id" :project="project" :visible="true" />
    <!-- I should make this so that it can shorten and then expand for more details.  Or I should make another component that can be used to display full details or partial for this view. -->
  </section>
</template>
