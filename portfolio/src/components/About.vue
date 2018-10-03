<template>
  <div class="aboutContainer">
    <h3>Creative Applications and Websites <br />for Your Business, Hobby, or Lifestyle</h3>
    <div class="aboutBlock">
      <div class="image left">
        <img 
          src="../assets/images/dad.png"
          alt=""
        >
      </div>
      <div class="text">
        <h5>Full-Stack Developer. HTML5 Game Developer. And More.</h5>
        <p class="right">Hey, I'm Kendall. A full-stack web and application developer and new <span>HTML5 game</span> developer.  I started my career in Retail management after earning my Bachelor's of Science.  Although I've lived on the East Coast all my life, I love to travel ( internationally and across the coast ), play games ( both board and video games ), and trying out different <span>beers and whiskeys</span>.</p>
      </div>
    </div>

    <app-line />

    <div class="aboutBlock">
      <div class="text">
        <h5>JavaScript Is Life... Along With Other Things.</h5>
        <p class="left">I made a career switch to become a developer after five years in management.  Upon finishing a bootcamp and several self-paced programming courses, I have worked on several contracts and a full-time position using <span>JavaScript</span>, <span>C#</span>, ASP.NET, PHP, and Ruby. My language of preference is JavaScript as I use that in all of my projects, personal and professional and am always looking for ways to improve my grapple on the language.</p>
      </div>
      <div class="image right">
        <img 
          src="../assets/images/firefly.jpg"
          alt=""
        >
      </div>
    </div>

    <app-line />

    <div class="aboutBlock">
      <div class="image left">
        <img 
          src="../assets/images/tough_mudder.jpg"
          alt=""
        >        
      </div>
      <div class="text">
        <h5>Client & Customer First</h5>
        <p class="right">From experience, I know that management can be difficult and time-consuming. I make it easier for you to manage, from giving suggestions on better <span>UX/UI</span> and translating tech speak into layman's terms to deveoping the application that is right for <span>you and your customers</span>, ultimately freeing up time for you to run your business,hobby, and live your life.</p>
      </div>
    </div>
    <!-- <div class="resumeContainer">
      <button
      >RESUME</button>
    </div> -->
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
}

span {
  color: rgba(236, 154, 59, 1);
  text-decoration: underline rgba(236, 154, 59, 1);
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
</style>
