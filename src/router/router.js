import Vue from 'vue'
import VueRouter from 'vue-router'

import routerHelper from '@/helpers/router.helper'
import adminRoutes from '@/modules/admin/router/admin.router'

Vue.use(VueRouter)


// check if user is logged in.
// function routeGaurd(to, from, next) {
//   if (store.state.userProfile.idToken) {
//     console.log('from: ', from, ' to: ', to);
//     console.log('idToken: ', store.state.userProfile.idToken)
//     next();
//   }
//   else {
//     next('/login');
//   }
// }
// lazy load components - temp
// function lazyLoad(view) {
//   return () => import(`@/views/${view}.vue`)
// }

const routes = [
  ...adminRoutes,
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Dynamext | Home',
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    beforeEnter: routerHelper.routeGaurd
  },
  {
    path: '/design',
    name: 'Design',
    meta: {
      title: 'Dynamext | Design',
      layout: 'default'
    },
    component: import(/* webpackChunkName: "design" */ '@/views/DesignElements.vue'),
    beforeEnter: routerHelper.routeGaurd
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Dynamext | About',
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    beforeEnter: routerHelper.routeGaurd
  }, {
    path: '/comingsoon',
    name: 'ComingSoon',
    meta: {
      title: 'Dynamext | Coming Soon',
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "comingSoon" */ '@/views/ComingSoon.vue'),
    beforeEnter: routerHelper.routeGaurd
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Dynamext | Login',
      layout: 'anon',
      transitionName: 'slide'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),

  }, {
    path: '/register',
    name: 'Register',
    meta: {
      title: 'Dynamext | Register',
      layout: 'anon',
      transitionName: 'slide'
    },
    component: () => import(/* webpackChunkName: "register" */ '@/views/Signup.vue'),

  },
  {
    path: '*',
    meta: {
      layout: 'anon',
    },
    beforeEnter: routerHelper.routeGaurd,
    // redirect:
    // {
    //   name: 'Login'
    // },

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta) {
    if (to.meta.title) {
      document.title = to.meta.title
    }
  }
  next();
})

export default router
