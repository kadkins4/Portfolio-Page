import Vue from 'vue'
import App from './App.vue'
// import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
