<template>
  <div class="contactContainer">

    <div class="titleContainer">
      <h3>Contact Me</h3>
      <p>
      Wanna collaborate.
      <br />
      Report a Bug.
      <br />
      ...or just say hi!</p>
    </div>

    <div class="formContainer">
      <div class="inputContainer">
        First Name: 
        <input 
          type="text"
          placeholder="First Name. Jon." 
          name="fname" 
          class="input"
          v-model="firstName"
        >
      </div>
      <div 
        class="errorMsg" 
        v-if="firstNameError"
      >
      {{ firstNameError }}
      </div>
      <div class="inputContainer">
        Last Name:
        <input 
          type="text" 
          name="lname" 
          placeholder="Last Name. Snow."
          class="input"
          v-model="lastName"
        >
      </div>
      <div 
        class="errorMsg" 
        v-if="lastNameError"
      >
      {{ lastNameError }}
      </div>
      <div class="inputContainer">
        Email:
        <input 
          type="text" 
          name="email" 
          placeholder="Email. KingInTheNorth@gmail.com"
          class="input"
          v-model="emailAddress"
        >
      </div>
      <div 
        class="errorMsg" 
        v-if="emailError"
      >
      {{ emailError }}
      </div>
      <div class="inputContainer">
        Note: 
        <textarea 
          type="textarea"
          rows="4"
          name="notes" 
          placeholder="Hold the Door!"
          class="input area"
          v-model="notes"
        />
      </div>
      <div 
        class="errorMsg" 
        v-if="notesRequired"
      > 
      {{ notesRequired }}
      </div>
    </div>

    <button
      type="submit"
      class="submitBtn"
    >Submit</button>

    <div class="socialMediaBar">
      <div class="socialMediaIcons" id="instagram"><instagram-icon /></div>
      <div class="socialMediaIcons" id="github"><github-circle-icon /></div>
      <div class="socialMediaIcons" id="linkedin"><linkedin-icon /></div>
      <div class="socialMediaIcons" id="steam"><steam-icon /></div>
      <div class="socialMediaIcons" id="spotify"><spotify-icon /></div>      
    </div>
  </div>
</template>

<script>
import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
import GithubCircleIcon from 'vue-material-design-icons/GithubCircle.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import SteamIcon from 'vue-material-design-icons/Steam.vue'
import SpotifyIcon from 'vue-material-design-icons/Spotify.vue'

export default {
  components: {
    InstagramIcon,
    GithubCircleIcon,
    LinkedinIcon,
    SteamIcon,
    SpotifyIcon
  },
  data () {
    return {
      firstName: '',
      firstNameError: null,
      // @todo @wilo: error messages
      lastName: '',
      lastNameError: null,
      emailAddress: '',
      emailError: null,
      notes: '',
      notesRequired: null
    }
  }
}
</script>

<style scoped>
.contactContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Syncopate', sans-serif;
}

.titleContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.titleContainer h3 {
  font-size: 26px;
  text-align: center;
  margin-bottom: 10px;
}

.titleContainer p {
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  word-spacing: 6px;
  letter-spacing: 2px;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  width: 700px;
  min-width: 500px;
}

.inputContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input {
  width: 60%;
  padding: 10px 25px;
  min-width: 300px;
  background-color: rgba(236, 154, 59, 1);
  border: 3px solid black;
  color: white;
  font-size: 16px;
  font-family: 'Syncopate', sans-serif;
  text-transform: lowercase;
  margin: 10px;
  border-radius: 8px;
}

.input::-webkit-input-placeholder {
  text-align: center;
  color: white;
}

.input:-moz-placeholder { /* Firefox 18- */
  text-align: center;
  color: white;
}

.input::-moz-placeholder {  /* Firefox 19+ */
  text-align: center;
  color: white;
}

.input:-ms-input-placeholder {  
  text-align: center;
  color: white;
}

.area::-webkit-input-placeholder {
  line-height: 64px;
}

.area:-moz-placeholder {
  line-height: 64px;
}

.area::-moz-placeholder {
  line-height: 64px;
}

.area:-ms-input-placeholder {
  line-height: 64px;
}

.submitBtn {
  margin: 20px 0 0 0;
  padding: 20px 10px;
  font-family: 'Syncopate', sans-serif;
  width: 250px;
  text-transform: lowercase;
  background: rgba(236, 154, 59, 1);
  border: 3px solid black;
  color: black;
  font-weight: 700;
  cursor: pointer;
}

.submitBtn:hover {
  color: white;
}

.socialMediaBar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 150px;
  width: 50vw;
  min-width: 500px;
}

.socialMediaIcons {
  position: relative;
  -webkit-animation-name: bob; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 2.5s; /* Safari 4.0 - 8.0 */
  -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
  -webkit-animation-direction: alternate; /* Safari 4.0 - 8.0 */
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 */
  animation-name: bob;
  animation-duration: 2.5s;
  animation-direction: alternate-reverse;   
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate; 
}

#instagram {
  animation-delay: .5s;
}

#github {
  animation-delay: 1s;
}

#linkedin {
  animation-delay: 1.5s;
}

#steam {
  animation-delay: 2s;
}

#spotify {
  animation-delay: 2.5s;
}

@-webkit-keyframes bob {
  0% { top: 0px; }
  10% { top: 1px; }
  20% { top: 2px; }
  40% { top: 4px; }
  50% { top: 5px; }
  60% { top: 6px; }
  70% { top: 7px; }
  80% { top: 8px; }
  90% { top: 9px; }
  100% { top: 10px; }
}

@keyframes bob {
  0% { top: 0px; }
  10% { top: 1px; }
  20% { top: 2px; }
  40% { top: 4px; }
  50% { top: 5px; }
  60% { top: 6px; }
  70% { top: 7px; }
  80% { top: 8px; }
  90% { top: 9px; }
  100% { top: 10px; }
}
</style>
