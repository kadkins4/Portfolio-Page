<template>
  <div class="contactContainer">
    <div class="titleContainer">
      <h3>Contact Me</h3>
    </div>

    <div class="contactInfoContainer">
      <div>
      <p>
      Wanna collaborate.
      <br />
      Report a Bug.
      <br />
      ...or just say hi!</p>
      </div>
    </div>

    <div class="socialMediaBar">
      <div 
        @click="goToUrl('https://www.instagram.com/kadkins4/')"
        class="socialMediaIcons" id="instagram"><instagram-icon /></div>
      <div 
        @click="goToUrl('https://github.com/kadkins4')"
        class="socialMediaIcons" id="github"><github-circle-icon /></div>
      <div 
        @click="goToUrl('https://www.linkedin.com/in/adkinskendall/')"
        class="socialMediaIcons" id="linkedin"><linkedin-icon /></div>
      <div 
        @click="goToUrl('https://steamcommunity.com/id/st6theone/')"
        class="socialMediaIcons" id="steam"><steam-icon /></div>
      <div 
        @click="goToUrl('https://open.spotify.com/user/kadkins4?si=rBA7RVkvQ2CgMPANEkn7Lg')"
        class="socialMediaIcons" id="spotify"><spotify-icon /></div>
      <div 
        @click="goToUrl('https://twitter.com/ST6THEONE')"
        class="socialMediaIcons" id="twitter"><twitter-icon /></div>
      <!-- <div 
        @click="goToUrl('https://twitter.com/ST6THEONE')"
        class="socialMediaIcons" id="twitter"><twitter-icon /></div> -->
    </div>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaovgm5884mQYqRTCRZra-B2C9ZJ76g20AyZkS7bQXj3g7dw/viewform?embedded=true" width="640" height="1282" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

    <!-- <div class="formContainer">
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
        v-if="emailAddressError"
      >
      {{ emailAddressError }}
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
      <span v-if="noteCounter >= 1">Minimum characters required: {{ noteCounter }} </span>
      <div 
        class="errorMsg" 
        v-if="notesError"
      >
      {{ notesError }}
      </div>
      <div class="inputContainer">
        <div class="submitBtnContainer">
          <button
            type="submit"
            class="submitBtn"
            @click="checkForErrors()"
          >Submit</button>
        </div>
      </div>

    </div> -->

  </div>
</template>

<script>
import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
import GithubCircleIcon from 'vue-material-design-icons/GithubCircle.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import SteamIcon from 'vue-material-design-icons/Steam.vue'
import SpotifyIcon from 'vue-material-design-icons/Spotify.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import { openInNewTab } from '../helper/utility'
// import { cleanseInput, emailValidation } from '../helper/utility'

export default {
  components: {
    InstagramIcon,
    GithubCircleIcon,
    LinkedinIcon,
    SteamIcon,
    SpotifyIcon,
    TwitterIcon
  },
  data () {
    return {
      // firstName: '',
      // firstNameError: null,
      // lastName: '',
      // lastNameError: null,
      // emailAddress: '',
      // emailAddressError: null,
      // notes: '',
      // noteCounter: 40,
      // notesError: null,
      // thankYouMessage: 'Your request has been submitted, I will address your request as soon as I can!',
      // displayThankYou: false,
      // hasNoErrors: false
    }
  },
  methods: {
    goToUrl( url ) {
      openInNewTab(url)
    }
  //   // @todo: recursive function that trims ( like that on STORE.ABA.COM FinEdLink )
  //   // clearErrors() {
  //   //   this.firstNameError = null,
  //   //   this.lastNameError = null,
  //   //   this.emailAddressError = null,
  //   //   this.notesError = null
  //   // },
  //   checkForErrors () {
  //     this.clearErrors()
  //     // const entriesToCheck = [ this.firstName, this.lastName, this.emailAddress, this.notes ]
  //     /***** ERROR MESSAGES *****/
  //     // name
  //     const nameEmpty = 'Please enter your name.'
  //     const nameInvalid = 'Please enter a valid name using using only alpha and the following characters - or \''
  //     // email
  //     const emailEmpty = 'Please enter your email address. I will not send you any marketing, this is how I will respond to your message. Please specify in the note section if you wish to not be contacted.' 
  //     const emailInvalid = 'Invalid Email Address. Please enter a valid email address'
  //     // note
  //     const noteEmpty = 'You must send a note with at least 40 characters. Please give as much detail as possible.'
  //     const noteInvalid = 'Please make sure your note is at least 40 characters in length.'
  //     // checking for empty inputs
  //     // entriesToCheck.forEach( entry => {
  //     // if ( !entry ) {
  //     if ( !this.firstName ) this.firstNameError = nameEmpty
  //     if ( !this.lastName ) this.lastNameError = nameEmpty
  //     if ( !this.emailAddress ) this.emailAddressError = emailEmpty
  //     if ( !this.notes ) this.notesError = noteEmpty
  //     // }
  //     // })

  //     // checking for invalid inputs
  //     if ( cleanseInput(this.firstName) === false ) this.firstNameError = nameInvalid
  //     if ( cleanseInput(this.lastName) === false ) this.lastNameError = nameInvalid
  //     if ( this.notes && this.notes.length < 40 ) this.notesError = noteInvalid
  //     if ( this.emailAddress && emailValidation(this.emailAddress) === false ) this.emailAddressError = emailInvalid
  //   },
  //   checkSubmitPage () {
  //     this.clearErrors()
  //     // @wilo: verify no errors
  //     if ( !this.hasNoErrors ) return
  //     // display thank you message
  //     this.displayThankYou = true
  //     // send email to me :) with information
  //     // reset info and clear fields
  //     this.resetPage()
  //   },
  //   sendMessage () {
      
  //   },
  //   resetPage () {
  //     this.firstName = '',
  //     this.firstNameError = null,
  //     this.lastName = '',
  //     this.lastNameError = null,
  //     this.emailAddress = '',
  //     this.emailAddressError = null,
  //     this.notes = '',
  //     this.notesError = null,
  //     this.displayThankYou = false,
  //     this.isClean = false
  //   }
  // },
  // watch: {
  //   notes ( input ) {
  //     this.noteCounter = 40 - input.length
  //   }
  },
  created () {
    // ensures you always see the top of the page first
    window.scrollTo(0,0)
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

.titleContainer h3 {
  font-size: 26px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.contactInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.contactInfoContainer p {
  font-size: 14px;
  font-family: 'Julius Sans One', sans-serif;
  line-height: 22px;
  text-align: center;
  word-spacing: 6px;
  letter-spacing: 2px;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.input:focus {
  background: rgba(180, 92, 65, 0.76);
  color: white;
  box-shadow: 4px 2px 3px black;
}

.submitBtnContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.submitBtn {
  margin: 10px 0 10px 30px;
  border-radius: 8px;
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
  background: rgba(180, 92, 65, 0.76);
  color: white;
  box-shadow: 4px 2px 3px black;
}

.input::-webkit-input-placeholder {
  text-align: center;
  color: black;
}

.input:-moz-placeholder { /* Firefox 18- */
  text-align: center;
  color: black;
}

.input::-moz-placeholder {  /* Firefox 19+ */
  text-align: center;
  color: black;
}

.input:-ms-input-placeholder {  
  text-align: center;
  color: black;
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

.socialMediaBar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 50vw;
  min-width: 500px;
}

.socialMediaIcons {
  position: relative;
  cursor: pointer;
  -webkit-animation-name: bob; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 1.5s; /* Safari 4.0 - 8.0 */
  -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
  -webkit-animation-direction: alternate; /* Safari 4.0 - 8.0 */
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 */
  animation-name: bob;
  animation-duration: 1.5s;
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

#twitter {
  animation-delay: 3s;
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

@media screen and (max-width: 1000px) {
  .socialMediaIcons {
    animation: none;
  }

  iframe {
    width: auto;
  }
}

@media screen and (max-width: 480px) {
  .socialMediaBar {
    min-width: auto;
  }

  .socialMediaBar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #twitter, #steam, #spotify {
    display: none;
  }
}
</style>
