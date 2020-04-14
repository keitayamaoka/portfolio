import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
Vue.config.productionTip = false
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')
