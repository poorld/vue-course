import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import config from './config' // node会直接去找目录下的index.js

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
