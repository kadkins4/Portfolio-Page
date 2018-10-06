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
    <div class="navContainer" :class="burgerLayout ? 'verticalMenu' : ''">
      <div class="hamburgerIcon"
        @click="burgerLayout = !burgerLayout"
      >
        <app-hamburger-icon></app-hamburger-icon>
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
  </div>
</template>

<script>
import { eventBus } from '../main'
import HamburgerIcon from 'vue-material-design-icons/Menu.vue'

export default {
  components: {
    appHamburgerIcon: HamburgerIcon
  },
  data() {
    return {
      navLinks: [
        { id: 1, title: 'Home', component: 'appHome'},
        { id: 2, title: 'About', component: 'appAbout'},
        // { id: 3, title: 'Services', component: 'appServices'},
        { id: 4, title: 'Projects', component: 'appProjects'},
        { id: 5, title: 'Contact', component: 'appContact'}
      ],
      burgerLayout: false
    }
  },
  methods: {
    changeViewFromNav (i) {
      // closes out menu if burger style open
      this.closeBurger()
      eventBus.$emit('changeViewFromNav', this.navLinks[i].component)
    },
    closeBurger() {
      return this.burgerLayout = false
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

  .navContainer {
    display: flex;
    flex-direction: flex;
  }

  .hamburgerIcon {
    /* HAMBURGER HIDDEN ON LARGE SCREEN */
    display: none;
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

  @media screen and (max-width: 600px) {
    .icon {
      padding: 10px;
    }

    .navContainer {
      width: 100%;
    }

    .hamburgerIcon {
      display: flex;
      width: 100%;
      padding: 0 70px 0 0;
      justify-content: center;
      align-items: center;
    }

    .navBtns {
      display: none;
    }

    .verticalMenu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }

    .verticalMenu .navBtns, .verticalMenu .hamburgerIcon span {
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 10px 70px 0 0;
      height: 30px;
    }
  }
</style>
