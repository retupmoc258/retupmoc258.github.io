<script setup lang="ts">

</script>

<template>
  <div class="portfolio-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Jason Bagley</h1>
      <h3>Software Engineer</h3>
      <img src="../assets/images/profile-image.jpg" alt="Image of Jason Bagley" class="profile-image"/>
    </section>

    <!-- About Section -->
    <section class="detail-section">
      <h2>About Me</h2>
      <p>I graduated from Western Governors University in June 2025.  I have been developing small software projects for work since 2020.
        I love learning, teaching, and playing board games and video games.</p>
      <p>Still working on this page.</p>
    </section>

    <!-- Projects Section
    <section class="projects-section">
      <h2>My Projects</h2>
      <div v-for="project in projects" :key="project.id" class="projects-section">

        <p v-if="project.link === ''" class="green" >{{ project.title }}</p>
        <a v-else-if="project.download" :href="project.link" target="_blank" download>{{ project.title }}</a>
        <a v-else :href="project.link" target="_blank">{{ project.title }}</a>

        <p class="project-description">{{ project.description }}</p>
      </div>
    </section> -->

    <!--<section class="projects-section">
      <h2>Current Passion Project</h2>
      <div v-for="project in projects" :key="project.id" class="projects-section">
        <p class="green" >HIPAA compliant Student Information System (SIS)</p>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </section>  -->

    <!-- Contact Section -->
    <section class="contact-section">
      <h2>Get in Touch</h2>
      <p>Email: <a href="mailto:retupmoc258@gmail.com">retupmoc258@gmail.com</a></p>
      <!-- Optional: Add links to your social media profiles -->
      <!-- <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a> -->
      <a href="https://github.com/retupmoc258" target="_blank">GitHub</a>
    </section>
  </div>
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
  text-align: center;
  margin-bottom: 40px;
}

.detail-section,
.projects-section,
.contact-section {
  margin-bottom: 40px;
}

.project-description {
  margin-left: 20px;
}


/* Add more styles as needed */
</style>