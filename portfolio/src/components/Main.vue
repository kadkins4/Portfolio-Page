<template>
  <div>
    <component
      :is="this.activeComponent"
    ></component>
  </div>

</template>

<script>
// communication between unrelated components
import { eventBus } from '../main'
// components to be swapped
import Projects from './projects/Projects.vue'
import About from './About'
import Products from './Products'
import Home from './Home'

export default {
  components: {
    appHome: Home,
    appAbout: About,
    appProducts: Products,
    appProjects: Projects
  },
  data() {
    return {
      activeComponent: 'appHome'
    }
  },
  created () {
    // change view from Nav
    eventBus.$on('changeViewFromNav', ( component ) => {
      this.activeComponent = component
    })

    // change view from home page info boxes
    eventBus.$on('changeViewFromInfoBox', (component) => {
      this.activeComponent = component
    })

    // change view, prompted from ContactBtn component
    eventBus.$on('changeToContactMe', () => {
      this.activeComponent = 'appContact'
    })
  }
}
</script>

<style scoped>

</style>
