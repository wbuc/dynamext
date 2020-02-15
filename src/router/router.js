import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/design',
    name: 'Design',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/DesignElements.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/About.vue')
  }, {
    path: '/comingsoon',
    name: 'ComingSoon',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/ComingSoon.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'anon'
    },
    component: () => import('../views/Login.vue')
  }, {
    path: '/signup',
    name: 'Signup',
    meta: {
      layout: 'anon',
      transitionName: 'slide'
    },
    component: () => import('../views/Signup.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
