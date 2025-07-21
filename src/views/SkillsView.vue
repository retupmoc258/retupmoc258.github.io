<script setup lang="ts">

const frameworks = [
  {
    id: 1,
    skill: "Spring",
    description: "Spring is a framework for developing Java applications. It is designed to make developing Java applications easier by providing a comprehensive programming model and configuration."
  },
  {
    id: 2,
    skill: "Vue",
    description: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."
  },
  {
    id: 3,
    skill: "Angular",
    description: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations to address any scale application. Angular is a complete rewrite from the same team that built AngularJS."
  },
  {
    id: 4,
    skill: "MySQL",
    description: "MySQL is an open-source relational database management system (RDBMS) that is used to store data in a structured form. MySQL is a popular database management system used by many websites and applications, and is the world's most popular database system."
  },
  {
    id: 5,
    skill: "PostgreSQL",
    description: "PostgreSQL is a free and open-source relational database management system emphasizing extensibility and technical standards compliance."
  },
  {
    id: 6,
    skill: "SQLite",
    description: "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine."
  },
  {

  }
];

const languages = [
  {
    id: 1,
    skill: "Java",
    description: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible."
  },
  {
    id: 2,
    skill: "SQL",
    description: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."
  },
  {
    id: 3,
    skill: "Python",
    description: "Python is an interpreted, high-level, general-purpose programming language. Created by <NAME> and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace."
  },
  {
    id: 4,
    skill: "C#",
    description: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines."
  },
  {
    id: 5,
    skill: "JavaScript and TypeScript",
    description: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
  },
  {
    id: 6,
    skill: "HTML",
    description: "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
  },
  {
    id: 7,
    skill: "CSS",
    description: "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
  },
];

const skills = [
  {
    id: 1,
    skill: "Excellent Communication Skills",
    description: "I have developed excellent communication skills in my work as a teacher for 10+ years.  I work with students individually to help them understand and develop the skills they need to be successful.  I can explain complex topics in a way that a novice or beginner can understand."
  },
  {
    id: 2,
    skill: "Experienced Problem-Solving Skills",
    description: "My focus has been in mathematics--the champion of problem-solving.  I love a good problem and finding solutions, methods, and other tools to accomplish the task.  I'm always seeking to solve potential problems and improve optimization."
  },
  {
    id: 3,
    skill: "Independent Worker",
    description: "I am a self-starter and independent worker.  I have years of experience working on projects independently for my work.  I am always looking for new ways to improve my skills and work environment."
  }
]

</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section center-text">
    <h1>Jason Bagley</h1>
    <h3>Software Engineer</h3>
    <img src="../assets/images/profile-image.jpg" alt="Image of Jason Bagley" class="profile-image"/>
  </section>
  <div class="portfolio-view container">


    <!-- Skills -->
    <section class="detail-section column">
      <h2 class="center-text">Skills</h2>

      <div v-for="skill in skills" :key="skill.id" class="column">
        <p class="green" >{{ skill.skill }}</p>
        <p class="project-description">{{ skill.description }}</p>
      </div>
    </section>

    <!-- Languages -->
    <section class="detail-section column">
      <h2 class="center-text">Proficient Languages</h2>

      <div v-for="language in languages" :key="language.id" class="column">
        <p class="green" >{{ language.skill }}</p>
        <p class="project-description">{{ language.description }}</p>
      </div>
    </section>

    <!-- Frameworks -->
    <section class="detail-section column">
      <h2 class="center-text">Proficient Frameworks</h2>

      <div v-for="framework in frameworks" :key="framework.id" class="column">
        <p class="green">{{ framework.skill }}</p>
        <p class="project-description">{{ framework.description }}</p>
      </div>
    </section>

  </div>
  <!-- Contact Section -->
  <section class="contact-section">
    <h2>Get in Touch</h2>
    <p>Email: <a href="mailto:retupmoc258@gmail.com">retupmoc258@gmail.com</a></p>
    <!-- Optional: Add links to your social media profiles -->
    <!-- <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a> -->
    <a href="https://github.com/retupmoc258" target="_blank">GitHub</a>
  </section>
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
  margin-bottom: 40px;
}

.center-text {
  text-align: center;
}

.detail-section,
.contact-section {
  margin-bottom: 40px;
}

.project-description {
  margin-left: 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr; /* Single column by default */
}

.column {
  flex: 100%; /* Columns take up full width by default */
  min-width: 400px;
}



/* Add more styles as needed */
</style>