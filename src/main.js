import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
Vue.config.productionTip = false
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import store from './store'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
