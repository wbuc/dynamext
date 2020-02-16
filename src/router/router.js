import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '@/store/index'

Vue.use(VueRouter)


// check if user is logged in.
function routeGaurd(to, from, next) {
  if (store.state.userProfile.idToken) {
    next();
  }
  else {
    next('/login');
  }
}
// lazy load components.
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: routeGaurd
  },
  {
    path: '/design',
    name: 'Design',
    meta: {
      layout: 'default'
    },
    component: lazyLoad('DesignElements'),
    beforeEnter: routeGaurd
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/About.vue'),
    beforeEnter: routeGaurd
  }, {
    path: '/comingsoon',
    name: 'ComingSoon',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/ComingSoon.vue'),
    beforeEnter: routeGaurd
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'anon'
    },
    component: () => import('../views/Login.vue'),

  }, {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'anon',
      transitionName: 'slide'
    },
    component: () => import('../views/Signup.vue'),

  },
  {
    path: '*',
    redirect:
    {
      name: 'Login'
    },
    beforeEnter: routeGaurd
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
