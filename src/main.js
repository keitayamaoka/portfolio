import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
Vue.config.productionTip = false
Vue.use(smoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')
