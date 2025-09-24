<script setup>
import {onMounted, ref} from "vue";
import ProjectSlot from "@/components/ProjectSlot.vue";

const projects = ref([])
const filteredProjects = ref([])

const allFilters = ref([]);
const activeFilters = ref([]);
const filterClicked = (event) => {
  console.log(activeFilters.value);
  if (event.target === document.getElementById("all-filter")) {
    // Set the filter to "All"
    activeFilters.value = ["All"];
  } else if (event.target.classList.contains('active-filter')) {
    activeFilters.value.splice(activeFilters.value.indexOf(event.target.innerText), 1);
    // If there are no active filters, then add all
    if (activeFilters.value.length === 0) {
      activeFilters.value = ["All"];
    }
  } else if (event.target.classList.contains('inactive-filter')) {
    activeFilters.value.push(event.target.innerText);
    if (activeFilters.value.indexOf("All") !== -1) {
      activeFilters.value.splice(activeFilters.value.indexOf("All"), 1);
    }
    // If "All" is present, remove it.
    console.log(activeFilters.value);
    if (activeFilters.value.indexOf("All") !== -1) {
      activeFilters.value.splice(activeFilters.value.indexOf("All"), 1);
    }
  }
  activeFilters.value.sort();
  updateFilterButtons()
  updateProjectList()
}

const updateFilterButtons = () => {
  const filterList = document.getElementById("filter-list");
  for (const filter of filterList.children) {
    if (activeFilters.value.indexOf(filter.innerText) !== -1) {
      filter.classList.remove('inactive-filter');
      filter.classList.add('active-filter');
    } else {
      filter.classList.remove('active-filter');
      filter.classList.add('inactive-filter');
    }
  }
};

const updateProjectList = () => {
  const filterSet = new Set();
  filteredProjects.value = [];
  for (const tag of activeFilters.value) {
    if (tag === "All") {
      filteredProjects.value = projects.value;
      return;
    } else {
      for (const project of projects.value) {
        if (project.tags.indexOf(tag) !== -1) {
          filterSet.add(project);
        }
      }
    }
  }
  // Create filterProjects from set.
  for (const project of projects.value) {
    if (filterSet.has(project)) {
      filteredProjects.value.push(project);
    }
  }
}

onMounted(async () => {
  try {
    projects.value = await fetch('/files/projects.json').then(res => res.json());
    filteredProjects.value = projects.value;
  } catch (error) {
    console.error('Error loading data:', error)
  }

  // Short List
  if (props.short) {
    let size = Math.min(projects.value.length, 5);
    filteredProjects.value = projects.value.slice(0, size);
  }

  // Initialize filter
  activeFilters.value = ["All"];
  if (!props.short) {
    for (const project of projects.value) {
      for (const tag of project.tags) {
        if (allFilters.value.indexOf(tag) === -1) {
          allFilters.value.push(tag);
        }
      }
    }
    allFilters.value.sort();
  }

})

const props = defineProps({
  short: {
    type: Boolean,
    default: true
  },
  filter: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <section class="mb-5">
    <h2>My Recent Projects</h2>
    <div v-if="filter" class="flex flex-row gap-2 justify-center flex-wrap max-w-full mt-2 mb-2" id="filter-list">
      <button class="filter active-filter" @click="filterClicked" id="all-filter">
        All
      </button>
      <button v-for="tag in allFilters" :key="tag" class="filter inactive-filter " @click="filterClicked">
        {{tag}}
      </button>
    </div>
    <ProjectSlot v-for="project in filteredProjects" :key="project.id" :project="project" :visible="true"  />
    <!-- I should make this so that it can shorten and then expand for more details.  Or I should make another component that can be used to display full details or partial for this view. -->
    <RouterLink v-if="short" class="ml-5 green" to="/projects">See More Projects...</RouterLink>
  </section>
</template>

<style scoped>
.filter {
  @apply px-4 py-2 rounded-full font-semibold transition-colors duration-200 text-xs;
}
.active-filter {
  @apply bg-blue-600 text-white hover:bg-blue-800;
}
.inactive-filter {
  @apply bg-gray-200 text-gray-700 hover:bg-gray-300;
}
/*
  TODO I should make it so that if the view is too thin, it converts this to a pop-up menu.
 */
</style>
