<template>
  <div>
    <component
      :is="this.activeComponent"
    ></component>
  </div>

</template>

<script>
import { eventBus } from '../main'
import Home from './Home'

export default {
  components: {
    appHome: Home
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
