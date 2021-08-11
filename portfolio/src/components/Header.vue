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
        <template v-if="!burgerLayout">
          <app-hamburger-icon></app-hamburger-icon>
        </template>
        <template v-else>
          <app-close-menu></app-close-menu>
        </template>
      </div>
      <div 
        v-for="( nav, index ) in navLinks" 
        :key="nav.id"
        class="navBtns"
        :class="{ activeNav: nav.active }"
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
import CloseMenu from 'vue-material-design-icons/CloseBoxOutline.vue'

export default {
  components: {
    appHamburgerIcon: HamburgerIcon,
    appCloseMenu: CloseMenu
  },
  data() {
    return {
      navLinks: [
        { id: 1, title: 'Home', component: 'appHome', active: true},
        { id: 2, title: 'About', component: 'appAbout', active: false},
        // { id: 3, title: 'Services', component: 'appServices', active: false},
        { id: 4, title: 'Projects', component: 'appProjects', active: false},
        { id: 5, title: 'Contact', component: 'appContact', active: false}
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
  },
  created () {
    eventBus.$on('newActiveView', component => {
      let navLinks = this.navLinks
      navLinks.forEach( nav => {
        nav.active = false
        if ( nav.component === component ) return nav.active = true
      })
    })
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

  .activeNav {
    color: white;
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
      display: flex;
      flex-direction: row;
      align-self: flex-start;
      padding: 10px;
    }

    .navContainer {
      width: 100%;
    }

    .hamburgerIcon {
      display: flex;
      width: 100%;
      padding: 0 20px 0 0;
      justify-content: flex-end;
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
      justify-content: flex-end;
      align-content: center;
      padding: 10px 20px 0 0;
      height: 30px;
    }
  }
</style>
