<template>
  <div
    :style="{ background: 'url(' + view.image + ') center center no-repeat' }"
    class="infoBoxes"
    @click="changeViewFromInfoBox()"
  >
    <div 
      class="infoTitle"
      >
      {{ view.title }}
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: [
    'view'
  ],
  methods: {
    changeViewFromInfoBox () {
      eventBus.$emit('changeViewFromInfoBox', this.view.component)
    }
  }
}
</script>

<style scoped>
 .infoBoxes {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid white;
  }

  .infoTitle {
    display: flex;
    color: rgb(180, 92, 65);
    font-weight: 700;
    align-self: center;
    font-size: 36px;
  }
</style>
