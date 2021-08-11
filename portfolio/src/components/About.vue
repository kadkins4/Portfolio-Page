<template>
  <div class="aboutContainer">
    <h3>Creative Applications and Websites for Your Business, Hobby, or Lifestyle</h3>
    <div class="aboutBlock swap">
      <div class="left">
        <img 
          src="../assets/images/dad.png"
          alt=""
        >
      </div>
      <div class="text">
        <h5>Full-Stack Developer. Unity2D Game Developer. And More.</h5>
        <p class="right">Hey, I'm Kendall. A <span>full-stack web / application developer</span> and <span>Unity2D Game</span> developer.  I started my career in Retail management after earning my Bachelor's of Science in Accounting.  Although I've lived on the East Coast all of my life, I love to travel, cook, go to concerts, play games ( both board and video games ), and try out different <span>beer and whiskeys</span>.</p>
      </div>
    </div>

    <app-line />

    <div class="aboutBlock">
      <div class="text">
        <h5>JavaScript Is Life... Along With Other Things.</h5>
        <p class="left">I made the career switch to become a developer after five years in management.  Upon finishing a bootcamp and several self-paced programming courses, I have been working on several contracts and have a full-time position currently using <span>JavaScript</span> and <span>Java</span>. My preferred language is JavaScript as I use that in most of my projects, personal and professional and am always looking for ways to improve my grasp of the language. This site is built with VUE.JS, a modern JavaScript framework.</p>
      </div>
      <div class="right">
        <img 
          src="../assets/images/firefly.jpg"
          alt=""
        >
      </div>
    </div>

    <app-line />

    <div class="aboutBlock swap">
      <div class="left">
        <img 
          src="../assets/images/tough_mudder.jpg"
          alt=""
        >        
      </div>
      <div class="text">
        <h5>Client & Customer First</h5>
        <p class="right">From experience, I know that management can be difficult and time-consuming. I make it easier for you to manage, from giving suggestions on better <span>UX/UI</span> and translating tech speak into "layman's" terms to develop the application that is right for <span>you and your consumers</span>, ultimately freeing up time for you to run your business, hobby, and live your life.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Line from './helper/Line'

export default {
  components: {
    AppLine: Line
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.aboutContainer {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Syncopate', sans-serif;
  color: white;
  line-height: 22px;
  margin: 25px auto 0 auto;
  width: 80vw;
  min-width: 700px;
}

.aboutBlock {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60vw;
  min-width: 500px;
  margin: 10px 0;
}

h3 {
  text-align: center;
  margin: 30px 0 40px;
  line-height: 30px;
}

h5 {
  text-align: center;
  margin: 10px 0;
}

p {
  font-size: 14px;
  font-family: 'Julius Sans One', sans-serif;
}

span {
  color: rgba(236, 154, 59, 1);
}

img {
  width: 250px;
  margin: 10px 10px 10px 0;
  border-radius: 10px;
}

.right img {
  width: 250px;
  margin: 10px 0 10px 10px;
}

.right {
  text-align: right;
}

.left {
  text-align: left;
}

@media screen and (max-width: 600px) {
  .aboutContainer {
    min-width: auto;
    width: auto;
  }

  h3 {
    margin: 0 25px;
  }

  .right, .left {
    text-align: center;
  }

  .aboutBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 0;
    width: auto;
    padding: 0 30px;
  }

  .swap {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
