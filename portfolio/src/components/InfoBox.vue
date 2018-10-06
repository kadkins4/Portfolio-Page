<template>
  <div
    :style="this.boxStyle"
    class="infoBoxes"
    @click="changeViewFromInfoBox()"
    @mouseover="pictureBackground"
    @mouseout="colorBackground"
  >
  <!-- @wilo: mouseover change background to color and back to image on mouseout or VICEVERSA -->
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
  data() {
    return {
      boxStyle:  
        this.colorBackground()
    }
  },
  methods: {
    changeViewFromInfoBox () {
      eventBus.$emit('changeViewFromInfoBox', this.view.component)
    },
    colorBackground () {
      return this.boxStyle = { background: this.view.color }
    },
    pictureBackground () {
      if (!this.view.altColor) {
        return this.boxStyle = { background: 'url(' + this.view.altView + ') center center no-repeat'}
      }
      // @wilo: allow for either image or color?!
      return this.boxStyle = { background: this.view.altColor }
      // return this.boxStyle = { background: 'url(' + this.view.altView + ') center center no-repeat'}
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
    /* border: 3px solid rgb(180, 92, 65); */
    border: 3px solid #EC9A3B;
    margin: 5px;
    cursor: pointer;
  }

  .infoTitle {
    display: flex;
    color: white;
    font-weight: 700;
    align-self: center;
    font-size: 36px;
    font-family: 'Julius Sans One', 'Tenali Ramakrishna';
  }

  .infoBoxes:hover > .infoTitle {
    color: rgb(180, 92, 65);
  }
</style>
