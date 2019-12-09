import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import "@/assets/css/common.css"
import "@/assets/css/font-awesome-4.7.0/css/font-awesome.min.css"
import "swiper/dist/css/swiper.min.css";
// import "@/assets/js/smoothScroll.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper)
Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
