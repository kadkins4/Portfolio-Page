<template>
  <div class="header">
    <div
      class="icon"
    >
      <img 
        class="iconImg" 
        src="../assets/images/myAvatar.png" 
        alt="Avatar Icon"
      >
    </div>
    <div 
      v-for="( nav, index ) in navLinks" 
      :key="nav.id"
      class="navBtns"
      @click="changeViewFromNav(index)"
    > 
      {{ nav.title }} 
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  data() {
    return {
      navLinks: [
        { id: 1, title: 'Home', component: 'appHome'},
        { id: 2, title: 'Products', component: 'appProducts'},
        { id: 3, title: 'Projects', component: 'appProjects'},
        { id: 4, title: 'About', component: 'appAbout'},
        { id: 5, title: 'Contact', component: 'appContact'}
      ]
    }
  },
  methods: {
    changeViewFromNav (i) {
      eventBus.$emit('changeViewFromNav', this.navLinks[i].component)
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: flex-end;
    font-family: 'Syncopate';
    font-weight: 700;
    text-transform: lowercase;
    box-shadow: 0px 3px black;
  }
  .navBtns {
    padding: 15px 25px;
    margin-left: 5px;
    cursor: pointer;
  }

  .navBtns:hover {
    background: rgba(180, 92, 65, 0.76);
    color: white;
    box-shadow: 4px 2px 3px black;
  }

  .icon {
    align-self: center;
    margin-left: 10px;
    margin-right: auto;
  }

  .iconImg {
    display: inline-block;
    height: 25px;
    width: 25px;
    margin: 0 0 0 10px;
  }
</style>
