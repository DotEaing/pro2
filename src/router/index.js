import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

// 路由懒加载
// login
const login = ()=>import( /*webpackChunkName:"login"*/ "@/components/login/login.vue")
const register  = ()=>import( /*webpackChunkName:"register"*/ "@/components/login/register.vue")
const userInfor  = ()=>import( /*webpackChunkName:"userInfor"*/ "@/components/login/userInfor.vue")
const retrievePwd  = ()=>import( /*webpackChunkName:"retrievePwd"*/ "@/components/login/retrievePwd.vue")
const retrievePwd2  = ()=>import( /*webpackChunkName:"retrievePwd2"*/ "@/components/login/retrievePwd2.vue")

// son
const newPages  = ()=>import( /*webpackChunkName:"newPages"*/ "@/components/sonPages/newPages.vue")
const activeityPages  = ()=>import( /*webpackChunkName:"activeityPages"*/ "@/components/sonPages/activeityPages.vue")
const clientPages  = ()=>import( /*webpackChunkName:"clientPages"*/ "@/components/sonPages/clientPages.vue")
const originalPages  = ()=>import( /*webpackChunkName:"originalPages"*/  "@/components/sonPages/originalPages.vue")
const singlePages  = ()=>import( /*webpackChunkName:"singlePages"*/  "@/components/sonPages/singlePages.vue")



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // meta:{
    //   keepAlive:true
    // }
  },
  // login
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/userInfor',
    name: 'userInfor',
    component: userInfor
  },
  {
    path: '/retrievePwd',
    name: 'retrievePwd',
    component: retrievePwd
  },
  {
    path: '/retrievePwd2',
    name: 'retrievePwd2',
    component: retrievePwd2
  },
  // son
  {
    path: '/newPages',
    name: 'newPages',
    component: newPages
  },
  {
    path: '/activeityPages',
    name: 'activeityPages',
    component: activeityPages
  },
  {
    path: '/clientPages',
    name: 'clientPages',
    component: clientPages
  },
  {
    path: '/originalPages',
    name: 'originalPages',
    component: originalPages
  },
  {
    path: '/singlePages/:head_img/:name',props:true ,
    name: 'singlePages',
    component: singlePages
  },

]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})

export default router
