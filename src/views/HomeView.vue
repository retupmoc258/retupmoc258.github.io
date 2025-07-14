<template>
  <div class="portfolio-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Jason Bagley</h1>
      <h3>Software Engineer</h3>
      <img src="../assets/images/profile-image.jpg" alt="Image of Jason Bagley" class="profile-image"/>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <h2>About Me</h2>
      <p>This site is still a work in progress.</p>
      <!-- Optional: Include a list of your key skills -->
      <!-- <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul> -->
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <h2>My Projects</h2>
      <!-- You can loop through your projects data and display each project -->
      <!-- <div v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">View Project</a>
      </div> -->

      <div class="projects-section">
        <a href="taniti/index.html" target="_blank">User Interface Design project (Taniti)</a>
        <p class="project-description">
          This project was to create a user interface design that would be friendly for a user.
          This project was designed for a mobile device, and the age will simulate the view on a mobile device.
          I created the interface, but I did not program the HTML elements.  This project uses
          Justinmind.
        </p>
      </div>
      <div class="projects-section">
        <a href="/files/vacation_planner_1.0.1.apk" download>Software Engineering Capstone (Vacation Planner mobile application v 1.0.1)</a>
        <p class="project-description">
          This was my capstone project for software engineering.  I created a mobile application that allows a user to track vacation information.
          The application was designed for Android and uses Java as its programming language.  It also uses the Room framework to use the underlying
          database structures securely.  The application is available to use for free, if desired, but may not be copied, redistributed, or modified.
          Any use of this software for personal gain (including submitting for a job or school course) is prohibited.
        </p>
      </div>
    </section>

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

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      // You can define data for your projects here, or fetch it from an API
      // projects: [
      //   { id: 1, title: 'Project 1', description: '...', link: '...' },
      //   { id: 2, title: 'Project 2', description: '...', link: '...' },
      // ]
    };
  },
  // Optional: Add methods for fetching data or other logic
  // methods: {
  //   fetchProjects() {
  //     // Fetch project data from an API
  //   }
  // },
  // Optional: Fetch data when the component is mounted
  // mounted() {
  //   this.fetchProjects();
  // }
};
</script>

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

.about-section,
.projects-section,
.contact-section {
  margin-bottom: 40px;
}

.project-description {
  margin-left: 20px;
}


/* Add more styles as needed */
</style>