<template>
  <div>
    <!-- add search bar component -->
    <div>
      <input 
        class="searchBar"
        type="text"
      >
      <!-- project component to display each -->
      <app-project 
        v-for="proj in projectData" 
        v-if="proj.display"
        :key="proj.id"
        :projectInfo="proj"
      ></app-project>

    </div>

    <app-contact-btn></app-contact-btn>
  </div>
</template>

<script>
import ContactBtn from '../ContactBtn'
import { projects } from './projectsData.js'
import Project from './Project'

export default {
  components: {
    appContactBtn: ContactBtn,
    appProject: Project
  },
  data () {
    return {
      projectData: projects
    }
  }  
}
</script>

<style scoped>

</style>
