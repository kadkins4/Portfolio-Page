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
    eventBus.$on('changeView', ( component ) => {
      this.activeComponent = component
    })
  }
}
</script>

<style scoped>

</style>
