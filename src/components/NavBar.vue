
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="nav-container fixed top-0 left-0 right-0 w-full z-50">
    <div class="nav-content">
      <RouterLink to="/" class="nav-brand">
        Jason Bagley
      </RouterLink>
      <ul class="nav-list">
        <li>
          <RouterLink to="/" class="nav-link">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/skills" class="nav-link">
            Skills
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/history" class="nav-link">
            History
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Spacer div -->
  <div class="h-[60px] w-full " ></div>
</template>

<style scoped>
.nav-content {
  @apply bg-gray-800 px-4 py-4 flex justify-between items-center;
}

.nav-brand {
  @apply text-white font-bold no-underline;
}

.nav-list {
  @apply flex space-x-4 m-0 p-0 list-none;
}

.nav-link {
  @apply text-white no-underline hover:text-gray-300 transition-colors duration-200;
}

/* Add styling for active link */
.router-link-active {
  font-weight: bold;
}
</style>