<template>
  <div>
    <div class="searchContainer">
      <input
        type="text"
        placeholder="Search Projects..."
        class="searchBar"
        v-model="searchInput"
      >
      <div 
        class="iconContainer"
        @click.prevent="removeSearchInput"
      >
        <Close
          fillColor="white"
          title="clear search"
        />
      </div>
    </div>
    <!-- <p class="helpTip">note: Search is Case Insensitive</p> -->
  </div>
</template>

<script>
import { eventBus } from '../../main'
import { cleanseInput } from '../helper/utility'
import Close from 'vue-material-design-icons/Close.vue'

export default {
  components: {
    Close
  },
  data () {
    return {
      searchInput: null
    }
  },
  methods: {
    onChangeSearchProjects () {
      eventBus.$emit('searchThroughProjects', cleanseInput(this.searchInput))
    },
    removeSearchInput () {
      this.searchInput = ''
    }
  },
  watch: {
    searchInput () {
      this.onChangeSearchProjects()
    }
  }
}
</script>

<style scoped>
.searchContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0 5px 0;
}

.searchBar {
  padding: 10px 20px;
  width: 200px;
  background-color: rgba(236, 154, 59, 1);
  border: 3px solid black;
  color: white;
  font-size: 16px;
  font-family: 'Syncopate', sans-serif;
  text-transform: lowercase;
}

.searchBar::-webkit-input-placeholder {
  text-align: center;
  color: white;
}

.searchBar:-moz-placeholder { /* Firefox 18- */
  text-align: center;
  color: white;
}

.searchBar::-moz-placeholder {  /* Firefox 19+ */
  text-align: center;
  color: white;
}

.searchBar:-ms-input-placeholder {  
  text-align: center;
  color: white;
}

.iconContainer {
  margin: 0 0 0 5px;
  padding: 3px 3px 2px;
  background: rgba(236, 154, 59, 1);
  border: 3px solid black;
  cursor: pointer;
}

.helpTip {
  font-family: 'Syncopate', sans-serif;
  font-size: 10px;
  text-transform: lowercase;
  color: white;
  text-align: center;
  margin: 0 0 10px 0;
}
</style>
