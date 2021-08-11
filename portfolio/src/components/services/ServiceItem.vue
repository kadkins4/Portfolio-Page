<template>
  <div class="serviceItem">
    <!-- @TODO: eventually will have to make this dynamically know which side 
    -- alternating even and odd  -->
    <div class="left vertical">
      <div>
        <h3> {{ serviceName }} </h3>
      </div>
      <div class="imageHolder">
        <img
          class="img" 
          src="https://images.unsplash.com/photo-1507074328556-79b5aee4efa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="">
      </div>
    </div>
    <div class="right ">
      <p>{{ serviceDescription}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serviceName: 'Web Site Development',
      serviceDescription: 'vegan meggings wolf High Life authentic PBR&B Echo Park Pitchfork raw denim photo booth put a bird on it ennui heirloom kitsch roof party before they sold out actually readymade mixtape iPhone shabby chic flexitarian aesthetic pour-over Helvetica irony Williamsburg narwhal synth pickled fingerstache street art sartorial 90\'s Truffaut cray wayfarers biodiesel ugh tofu skateboard hashtag cardigan tousled umami selvage XOXO seitan stumptown gentrify four loko mumblecore Godard bitters semiotics keffiyeh scenester DIY letterpress pork belly Thundercats art party vinyl occupy small batch Kickstarter forage banh mi +1 kale chips locavore fashion axe sustainable YOLO pop-up Odd Future blog try-hard flannel Banksy selfies freegan retro master cleanse crucifix messenger bag salvia tote bag fap ethical polaroid craft beer artisan 8-bit leggings single-origin coffee chillwave plaid McSweeney"s next level bespoke Bushwick Tonx Marfa jean shorts tattooed food truck Austin drinking vinegar organic keytar Etsy cornhole pug cliche squid distillery gluten-free mustache Brooklyn fixie disrupt VHS whatever lo-fi cred Schlitz asymmetrical fanny pack lomo post-ironic yr hella chambray Tumblr Vice trust fund kogi farm-to-table Shoreditch meh chia Blue Bottle American Apparel bicycle rights you probably haven',
    }
  }
  
}
</script>

<style scoped>
  .serviceItem {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px;
  }

  .vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right, .left {
    width: 40vw;
  }
  
  h3 {
    color: white;
    font-size: 40px;
    text-align: center;
  }

  p {
    color: white;
    line-height: 20px;
  }

  .imageHolder {
    display: flex;
    align-self: center;
    border-radius: 10px;
  }

  .img {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }
</style>
