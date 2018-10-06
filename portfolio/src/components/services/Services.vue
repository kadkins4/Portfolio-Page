<template>
  <div class="servicesContainer">
    <h1>COMING SOON!</h1>
    <img src="@/assets/images/myAvatar.svg" width="300px" height="300px" style="margin: auto;">
    <p style="font-family: 'Julius Sans One', sans-serif;">Hey there!
    <br>I will have some information about the services that I offer up shortly.  Check back frequently or fill out the contact form letting me know that you want to be alerted.</p>

  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .servicesContainer {
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin: auto;
  }

  h1, p {
    text-align: center;
    color: white;
    font-family: 'Syncopate', sans-serif;
    margin: 50px auto;
  }

  h1 {
    font-size: 40px;
  }

  p {
    line-height: 30px;
  }
</style>
