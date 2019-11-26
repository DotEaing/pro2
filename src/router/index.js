import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from "../components/mainNav.vue"
import Footer from "../components/footer.vue"

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
  }

]

const router = new VueRouter({
  routes
})

export default router
