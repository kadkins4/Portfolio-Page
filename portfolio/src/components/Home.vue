<template>
  <div
    class="homeContainer"
  >
    <div class="homeHeader">

      <div
        class="nameContainer"
      >

        <h1>{{ firstName }}</h1>
        <app-line></app-line>
        <h4>{{ title }}</h4> <!-- @extra: Add Animation of typing out with cursor on first load -->
        <app-line></app-line>
        <h1>{{ lastName }}</h1>

      </div>
      <img 
        src="../assets/images/Adkins.jpg"
        alt="Picture of Kendall; Courtesy of DCRefined"
        class="profPicture"  
      >
    </div>

    <div class="infoBoxContainer">
      <div
        v-for="view in views"
        :key="view.id"
      >
        <info-box :view="view"></info-box>
      </div>
    </div>

    <app-contact-btn></app-contact-btn>

  </div>
</template>

<script>
import ContactBtn from './ContactBtn.vue'
import InfoBox from './InfoBox.vue'
import Line from './helper/Line.vue'

export default {
  components: {
    InfoBox,
    appContactBtn: ContactBtn,
    appLine: Line
  },
  data () {
    return {
      firstName: 'Kendall',
      lastName: 'Adkins',
      title: 'Software Developer',
      views: [
        { 
          id: 2,
          title: 'Products', 
          component: 'appProducts',
          description: 'this is the product section',
          // these are not the background images that will be used
          image: require('../assets/question_block.png'),
          color: 'yellow'
        },
        { 
          id: 3, 
          title: 'Projects', 
          component: 'appProjects',
          description: 'this is the projects section',
          // these are not the background images that will be used
          image: require('../assets/question_block.png'),
          color: 'black'
        },
        { 
          id: 4, 
          title: 'About me', 
          component: 'appAboutMe',
          description: 'this is the about me section',
          // these are not the background images that will be used
          image: require('../assets/question_block.png'),
          color: 'red'
        },
        { 
          id: 5, 
          title: 'Contact', 
          component: 'appContact',
          description: 'this is the contact section',
          // these are not the background images that will be used
          image: require('../assets/question_block.png'),
          color: 'blue'
        }
      ]
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style scoped>
  .homeContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
  }

  .homeHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0;
  }

  .nameContainer {
    min-width: 22vw;
    width: auto;
    height: auto;
    max-width: 30vw;
    margin: auto 0 auto 70px;
    text-align: center;
  }

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    letter-spacing: 5px;
    color: white;
  }

  h4 {
    font-family: 'Julius Sans One', sans-serif;
    text-transform: lowercase;
    color: white;
  }

  .profPicture {
    border-radius: 50%;
    border: 3px solid black;
    padding: 3px;
    background: rgba(236, 154, 59, 1);
    max-height: 30vh;
    max-width: 30vw;
    width: auto;
    height: auto;
    margin: auto 50px auto 0;
  }

  .infoBoxContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* MEDIA QUERIES */
  
  @media screen and (max-width: 600px) {
    /* 600px or less */
    .nameContainer {
      max-width: none;
      margin: auto;
    }
    .profPicture {
      display: none;
    }
  }
</style>
