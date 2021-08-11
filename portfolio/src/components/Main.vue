<template>
  <div>
    <component
      :is="this.activeComponent"
    ></component>
  </div>

</template>

<script>
import { eventBus } from '../main'
// components to be swapped
import Projects from './projects/Projects'
import About from './About'
// import Services from './services/Services'
import Home from './Home'
import Contact from './contact/ContactPage'

export default {
  components: {
    appHome: Home,
    appAbout: About,
    // appServices: Services,
    appProjects: Projects,
    appContact: Contact
  },
  data () {
    return {
      activeComponent: 'appHome'
    }
  },
  watch: {
    activeComponent () {
      eventBus.$emit('newActiveView', this.activeComponent)
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
