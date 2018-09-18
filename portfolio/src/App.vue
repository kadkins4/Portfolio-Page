<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from './components/Main'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Main,
    Header
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  html {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(-270deg, #252222, #032929);
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    padding: 0;
    margin: 0;
  }

  .header {
    background: #ec9a3b;
    margin: 0;
  }
</style>
