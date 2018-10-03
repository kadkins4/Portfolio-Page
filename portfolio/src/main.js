import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/Portfolio-Page/'
    : '/'
}

export const eventBus = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
