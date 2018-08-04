<template>
  <div class="regBox">
    <h1>Register</h1>

    <div class="registration">
      <input type="email"
        name="email"
        v-model="email"
        placeholder="Email Address"
      >
      <br>
      <input type="password"
        name="password"
        v-model="password"
        placeholder="Password"
      >
      <div
        v-html="error"
        class="error"
      ></div>
      <br>
      <button
        @click="register"
      >Register</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .regBox {
    border: 3px solid lightslategray;
    box-shadow: 2px 2px grey;
    border-radius: 2px;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: auto 50vw auto;
  }

  h1 {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
  }

  .registration {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 500px;
    padding: 25px;
    align-self: center;
  }

  .error {
    color: red;
    font-size: 10px;
  }
</style>
