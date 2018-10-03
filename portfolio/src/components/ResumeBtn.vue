<template>
  <div
    class="resumeBtn"
  >
    <button
      class="btn"
      @click.once="changeToContactMe"
    >
      {{ generateBtnText }}
    </button>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    // optional prop
    text: String
  },
  computed: {
    generateBtnText () {
      return this.text ? this.text : 'View My Resume'
    }
  },
  // methods: {
  //   changeToContactMe () {
  //     eventBus.$emit('changeToContactMe')
  //   }
  // }
  
}
</script>

<style scoped>
  .resumeBtn {
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .btn {
    padding: 20px 10px;
    font-family: 'Syncopate', sans-serif;
    width: 140px;
    text-transform: lowercase;
    background: rgba(236, 154, 59, 1);
    border: 3px solid black;
    color: black;
    font-weight: 700;
    cursor: pointer;
  }

  .btn:hover {
    color: white;
  }
</style>
