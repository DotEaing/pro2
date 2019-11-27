import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from "../components/mainNav.vue"
import Footer from "../components/footer.vue"
import carousel_1 from  "../components/top_carousel.vue"
import Line from  "@/components/line.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path:'/mainNav',
    name:'mainNav',
    component:Nav
  },
  {
    path:'/footer',
    name:'footer',
    component:Footer
  },
  {
    path:'/carousel1',
    name:'carousel1',
    component:carousel_1
  },
  {
    path:'/Line',
    name:'line',
    component:Line
  },


]

const router = new VueRouter({
  routes
})

export default router
