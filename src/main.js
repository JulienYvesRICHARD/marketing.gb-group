import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import 'bootstrap'
import 'jquery'
import 'popper.js'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
