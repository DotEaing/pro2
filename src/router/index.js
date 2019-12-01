import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Nav from "../components/mainNav.vue"
import Footer from "../components/footer.vue"
import carousel_1 from  "../components/indexComponents/top_carousel.vue"
import Line_1 from  "@/components/indexComponents/Line_1.vue"
import work_modules from "@/components/indexComponents/work_modules.vue"
import card from "@/components/indexComponents/card.vue"
import card2 from "@/components/indexComponents/card2.vue"
import sm_carousel from "../components/indexComponents/sm_carousel.vue"
import cennuo from "../components/indexComponents/cennuo.vue"


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
     path: '/work_modules',
     name: 'work_modules',
     component: work_modules
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
     {
       path: '/cennuo',
       name: 'cennuo',
       component: cennuo
     },
     {
      path: '/card2',
      name: 'card2',
      component: card2
    },



]

const router = new VueRouter({
  routes
})

export default router
