<script setup>

const props = defineProps({
  project: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.hasOwnProperty('title') && value.hasOwnProperty('description') && value.hasOwnProperty('date') && value.hasOwnProperty('link') && value.hasOwnProperty('download');
    }
  },
  visible: {
    type: Boolean,
    required: true,
    default: true
  }
});
// TODO Implement tags?  Or not here?
</script>

<template>
  <div v-if="props.visible" class="ml-1 mb-0">
    <p v-if="project.link === ''" class="green mb-2" >{{ project.title }} - {{project.date}}</p>
    <p v-else-if="project.download" class="green mb-2"><a class="ml-0" :href="project.link" target="_blank" download>{{ project.title }} - {{project.date}}</a></p>
    <p v-else class="green mb-2"><a class="ml-0" :href="project.link" target="_blank">{{ project.title }} - {{project.date}}</a></p>
  </div>
  <p v-if="props.visible" class="ml-5">{{ project.description }}</p>
</template>
