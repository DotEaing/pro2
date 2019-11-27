import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from "../components/mainNav.vue"
import Footer from "../components/footer.vue"
import carousel_1 from  "../components/top_carousel.vue"
import Line_1 from  "@/components/Line_1.vue"
import work_moudle from "@/components/work_moudle.vue"
import card from "@/components/card.vue"
import sm_carousel from "../components/sm_carousel.vue"
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
    path:'/Line_1',
    name:'Line_1',
    component:Line_1
  },
   {
     path: '/work_moudle',
     name: 'work_moudle',
     component: work_moudle
   },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/sm_carousel',
      name: 'sm_carousel',
      component: sm_carousel
    },


]

const router = new VueRouter({
  routes
})

export default router
