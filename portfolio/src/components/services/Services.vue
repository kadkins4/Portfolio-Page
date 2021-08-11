<template>
  <div class="servicesContainer" v-if="showServices">
    <h1>COMING SOON!</h1>
    <img src="@/assets/images/myAvatar.svg" width="300px" height="300px" style="margin: auto;">
    <p style="font-family: 'Julius Sans One', sans-serif;">Hey there!
    <br>I will have some information about the services that I offer up shortly.  Check back frequently or fill out the contact form letting me know that you want to be alerted.</p>
  </div>  
  <div v-else>
    <service-item></service-item>
  </div>
</template>

<script>
import _ from 'lodash';
import ServiceItem from './ServiceItem.vue'

export default {
  components: {
    ServiceItem
  },
  data() {
    return {
      services: [
        { 
          serviceName: 'Test',
          serviceDescription: 'vegan meggings wolf High Life authentic PBR&B Echo Park Pitchfork raw denim photo booth put a bird on it ennui heirloom kitsch roof party before they sold out actually readymade mixtape iPhone',
          serviceImage: ''
        }
    ]
    }
  },
  computed: {
    showServices () {
      return _.isNil(this.services) || _.isEmpty(this.services);
    }
  }
}
</script>

<style scoped>
  .servicesContainer {
    display: flex;
    flex-direction: column;
    width: 80vw;
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
