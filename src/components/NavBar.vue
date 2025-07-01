<template>
  <nav class="navbar">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Jason Bagley</RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style scoped>
/* Add your CSS styling for the navbar here */

.navbar {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 200;
}
.container {
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.navbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.nav-item {
  margin-left: 1rem;
}
.nav-link {
  color: white;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
  /* Add styling for active link */
}
</style>