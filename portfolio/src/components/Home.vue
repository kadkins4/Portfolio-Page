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
        <h4>{{ title }}</h4>
        <app-line></app-line>
        <h1>{{ lastName }}</h1>

      </div>
      <img 
        src="@/assets/images/Adkins.jpg"
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
          id: 1, 
          title: 'About Me', 
          component: 'appAbout',
          description: 'this is the about me section',
          image: require('@/assets/images/myAvatar.png'),
          // color: '#2e282a'
          // color: '#17BEBB'
          color: '#2B2A2A',
          // altColor: '#2e282a'
          altView: require('@/assets/images/myAvatar.png')
        },
        // @todo: flesh out Services and then uncomment below
        // { 
        //   id: 2,
        //   title: 'Services', 
        //   component: 'appServices',
        //   description: 'this is the Services section',
        //   image: require('@/assets/images/mom.png'),
        //   // color: '#edb88b'
        //   // color: '#17BEBB'
        //   color: '#2B2A2A',
        //   // altColor: '#edb88b',
        //   altView: require('@/assets/images/serviceIcon.png')
        // },
        { 
          id: 3, 
          title: 'Projects', 
          component: 'appProjects',
          description: 'this is the projects section',
          image: require('@/assets/images/desk.jpg'),
          // color: '#17BEBB'
          color: '#2B2A2A',
          // altColor: '#17BEBB',
          altView: require('@/assets/images/projectIcon.png')
        },
        { 
          id: 4, 
          title: 'Contact', 
          component: 'appContact',
          description: 'this is the contact section',
          image: require('@/assets/question_block.png'),
          // color: '#cd5334'
          color: '#2B2A2A',
          // altColor: '#cd5334'
          altView: require('@/assets/question_block.png')
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
    justify-content: space-evenly;
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

  .nameContainer h4 {
    font-family: 'Julius Sans One', sans-serif;
    text-transform: lowercase;
    color: white;
    overflow: hidden;
    white-space: nowrap;
    margin: 20px auto;
    letter-spacing: .15em;
    animation: typing 4.5s steps(40, end);
  }

  .profPicture {
    /** border-radius: 50%;*/
    border-radius: 10px;
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
    justify-content: space-evenly;
    align-self: center; 
    width: 80vw
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
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
