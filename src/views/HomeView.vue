<template>
  <div class="portfolio-view">
    <Hero/>

    <!-- About Section -->
    <section class="detail-section">
      <h2>About Me</h2>
      <p class="ml-5">I graduated from Western Governors University in June 2025.  I have been developing small software projects for work since 2020.
        I love learning, teaching, and playing board games and video games.</p>
    </section>

    <!-- Skills Compressed -->

    <!-- Projects Section -->
    <section class="projects-section">
      <h2>My Projects</h2>
      <div v-for="project in projects" :key="project.id" class="projects-section">

        <p v-if="project.link === ''" class="green" >{{ project.title }}</p>
        <a v-else-if="project.download" :href="project.link" target="_blank" download>{{ project.title }}</a>
        <a v-else :href="project.link" target="_blank">{{ project.title }}</a>

        <p class="project-description">{{ project.description }}</p>
      </div>
    </section>

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

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: 'PortfolioView',
  components: {Hero},
  data() {
    return {
      // You can define data for your projects here, or fetch it from an API
      projects: [
        {
          id: 1,
          title: 'Software Engineering Capstone (Vacation Planner mobile application v 1.0.1)',
          description: 'This was my capstone project for software engineering.  I created a mobile application that allows a user to track vacation information.' +
              ' The application was designed for Android and uses Java as its programming language.  It also uses the Room framework to use the underlying' +
              ' database structures securely.  The application is available to use for free, if desired, but may not be copied, redistributed, or modified.' +
              ' Any use of this software for gain (including submitting for a job or school course) is prohibited.',
          link: '/files/vacation_planner_1.0.1.apk',
          download: true
        },
        {
          id: 2,
          title: 'User Interface Design project (Taniti)',
          description: 'This project was to create a user interface design that would be friendly for a user.' +
              ' This project was designed for a mobile device, and the age will simulate the view on a mobile device.' +
              ' I created the interface, but I did not program the HTML elements.  This project uses Justinmind.',
          link: 'taniti/index.html',
          download: false
        },
        {
          id: 3,
          title: 'Java Fullstack Inventory Application',
          description: 'This was a school project for Java Frameworks.  The application was designed to allow a user to manage an inventory of items.' +
              ' The application was designed for Java and uses the Spring Framework to create the backend.' +
              ' The link will take you to my repository, where you may download the source code.  Full instructions are in the README.txt file.',
          link: 'https://github.com/retupmoc258/Java-Fullstack-Inventory-Application',
          download: false
        },
        {
          id: 4,
          title: '"World Map" Angular Project with World Bank API',
          description: 'This school project focuses on using the Angular framework to create a basic web application.  ' +
              'A world map is displayed and when you click on a country, it uses the World Bank API to retrieve ' +
              'information about that country and display it on the web page.  The repository is private to prevent students from copying the code.  ' +
              'If you would like to see the repository code or test the application, please email me.',
          link: '',
          download: false
        },
        {
          id: 5,
          title: 'Vue Crash Course project (by Brad Traversy)',
          description: 'This was an application I made based on Brad Traversy\'s "Vue Crash Course" YouTube video.  ' +
              'Project is free to use.  More information about the video can be found in the README.md file',
          link: 'https://github.com/retupmoc258/vue-project',
          download: false
        }
      ]
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
.portfolio-view {
  display: block;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  align-self: stretch;
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