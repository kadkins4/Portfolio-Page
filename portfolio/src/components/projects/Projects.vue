<template>
  <div class="projectsContainer">
    <!-- add search bar component -->
    <div class="main">
      <div class="projectInfo">
        <h3>Projects</h3>
        <p>
          <!-- @todo: shorten this text... -->
          Below is a list of some of the projects that I have completed as well as some that are still in progress.  There is a description of each project, technology used, collaborators (if any), and a link to the project and its corresponding GitHub. If you would like to contribute, feel free to fork and submit a PR; for most I have next steps/features listed on the README.md, if I am currently planning any additional features. Use the search bar to quickly find projects with certain technology, types (games, productivity, etc).
        </p>

        <app-line></app-line>

      </div>

      <app-search-bar></app-search-bar>

      <!-- project component to display each -->
      <!-- @todo: look into stopping each div from auto heighting
        to match the height, and allow mulitple to be on same row if the heights
        match up... think Colleen's project of movies at General Assembly 
        or Liz and JP's art museum project. -->
      <div class="projects">
        <app-project 
          v-for="proj in projectData" 
          v-if="proj.display"
          :key="proj.id"
          :projectInfo="proj"
        ></app-project>
      </div>
    </div>

    <app-contact-btn></app-contact-btn>
  </div>
</template>

<script>
import ContactBtn from '../ContactBtn'
import { projects } from './projectsData.js'
import Project from './Project'
import SearchBar from './SearchBar'
import { eventBus } from '../../main'
import Line from '../helper/Line'

export default {
  components: {
    appContactBtn: ContactBtn,
    appProject: Project,
    appSearchBar: SearchBar,
    appLine: Line
  },
  data () {
    return {
      projectData: projects
    }
  },
  created () {
    eventBus.$on('searchThroughProjects', ( searchBarInput ) => {
      // @wilo
      // if there is a search parameter
      // if certain special characters are detected return searchBarInput minus that character
      // toggle display of some special characters are prohibited
      this.projectData.filter( ( proj ) => {
        // ensure that they show
        // if ( !proj.display ) return proj.showInSearch = false
        // remove the projects that do not contain the search
        // return proj.display = proj.displayName.includes( searchBarInput ) ? true : false
        const technology = proj.technology.join(' ').toLowerCase()
        const displayName = proj.displayName
        const description = proj.description
        const type = proj.type

        if (
              displayName.includes(searchBarInput) ||
              description.includes(searchBarInput) ||
              type.includes(searchBarInput) ||
              technology.includes(searchBarInput)
            ) {
          return proj.display = true // ensure that they show
        } else {
          return proj.display = false // remove the projects that do not contain the search
        }
      })
    })
  }
}
</script>

<style scoped>
.projectsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.projectInfo {
  color: white;
  font-family: 'Syncopate', sans-serif;
  max-width: 80vw;
  align-self: center;
}

.projectInfo h3 {
  font-size: 26px;
  text-align: center;
  margin-bottom: 10px;
}

.projectInfo p {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  word-spacing: 6px;
}

.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95vw;
}

</style>
