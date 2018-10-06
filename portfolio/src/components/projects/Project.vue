<template>
  <div class="projectContainer">
    <div class="projectHeader">

      <div class="projectTitle">
        <div class="displayName">
          <h3>{{ projectInfo.displayName }}</h3>
        </div>
        <div class="company">
          {{ projectInfo.company }}
        </div>
      </div>

      <div class="urlContainer">

        <div 
          v-if="projectInfo.hostedURL" 
          class="urlButton"
          @click="goToURL(projectInfo.hostedURL)"
        >
          <WebIcon title="Go To website" />
          <div>Site</div>
        </div>

        <div 
          v-if="projectInfo.githubURL" 
          class="urlButton"
          @click="goToURL(projectInfo.githubURL)"
        >
          <GithubCircleIcon title="Go To Github Repository" />
          <div>Github</div>
        </div>

      </div>

    </div>

    <div>
      <div class="technology">
          <span 
          v-for="tech in projectInfo.technology"
          :key="tech"
        >| {{ tech }} |</span>
      </div>
    </div>

    <app-line></app-line>

    <div class="contentContainer">
      <div>
        <img 
          :src="projectImage"
          class="projectImage"  
        />
      </div>
      <div 
        class="description"
        v-html="projectInfo.description"
      ></div>
    </div>

  </div>
</template>

<script>
import WebIcon from 'vue-material-design-icons/Web.vue'
import GithubCircleIcon from 'vue-material-design-icons/GithubCircle.vue'
import { openInNewTab } from '../helper/utility'
import AppLine from '../helper/Line'

export default {
  components: {
    WebIcon,
    GithubCircleIcon,
    AppLine
  },
  props: [
    'projectInfo'
  ],
  data () {
    return {
    }
  },
  computed: {
    projectImage () {
      // return '../../assets/images/' + this.projectInfo.snapshotPath
      return this.projectInfo.snapshotPath
    }
  },
  methods: {
    goToURL (url) {
      openInNewTab (url)
    }
  }
}
</script>

<style scoped>
.projectContainer {
  margin: 20px;
  padding: 10px;
  border: 3px solid rgba(236, 154, 59, 1);
  display: flex;
  flex-direction: column;
  min-width: 470px;
  width: 600px;
  max-width: 600px;
  color: white;
  font-family: 'Syncopate', sans-serif;
}

.projectHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.projectTitle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 60%;
}

.displayName h3 {
  font-size: 20px;
  margin: 10px 5px 0 15px;
  text-decoration: underline rgba(180, 92, 65, 0.76);
}

.company {
  margin: 0 0 10px 0;
}

.urlContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 38%;
}

.urlButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 15px 3px;
  overflow: hidden;
  width: 75px;
  border: 1px solid rgba(180, 92, 65, 0.76);
  margin: 3px;
  background-color: rgba(236, 154, 59, 1);
  cursor: pointer;
}

.urlButton:hover {
  background-color: rgba(180, 92, 65, 0.76);
  box-shadow: 0px 0px 5px 1px inset rgba(180, 92, 65, 0.76);
}

.technology {
  margin: 17px 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.contentContainer {
  display: flex; 
  justify-content: space-between;
  align-items: center;
}

.projectImage {
  max-width: 200px;
  margin: 5px;
  height: auto;
}

.description {
  font-family: 'Julius Sans One', sans-serif;
  font-size: 14px;
  padding: 10px;
  word-spacing: 5px;
  line-height: 18px;
}

@media screen and (max-width: 1402px) {
  .projectContainer {
    margin: 20px auto;
  }
}

@media screen and (max-width: 600px) {
  .projectContainer {
    margin: 20px 0;
    min-width: auto;
  }
  
  .contentContainer {
    display: flex;
    flex-direction: column;
  }

  h3 {
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .technology {
    display: none;
  }

  .urlButton div {
    display: none;
  }

  .projectHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
