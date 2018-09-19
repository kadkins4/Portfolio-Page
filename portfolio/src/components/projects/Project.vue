<template>
  <div>
    <div>

      <div>
        <div>{{ projectInfo.displayName }}</div>
        <div>Company: </div>
      </div>

      <div>
        <div>Website: </div>
        <div>Github: </div>
      </div>

    </div>
    <div>
      <div>Technology Used:
          |<span 
          v-for="tech in projectInfo.technology"
          :key="tech"
        >| {{ tech }} |</span>|
      </div>
    </div>
    <div
      v-html="projectInfo.description"
    ></div>
  </div>
</template>

<script>
export default {
  props: [
    'projectInfo'
  ],
  data () {
    return {
    }
  },
  computed: {
    
  }
}
</script>

<style scoped>

</style>
