import Vue from 'vue'
import VueRouter from 'vue-router'

import routerHelper from '@/helpers/router.helper'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/base/Index.vue'),
    beforeEnter: routerHelper.routeGaurd,
    children: [{
      path: '',
      name: 'Home',
      meta: { title: 'Dynamext | Home' },
      component: () => import('@/views/Home.vue')
    },
    {
      path: 'design',
      name: 'Design',
      meta: { title: 'Dynamext | Design' },
      component: () => import(/* webpackChunkName: "design" */ '@/views/DesignElements.vue')
    },
    {
      path: 'icons',
      name: 'Icons',
      meta: { title: 'Dynamext | Icons' },
      component: () => import(/* webpackChunkName: "icons" */ '@/views/Icons.vue')
    },
    {
      path: 'about',
      name: 'About',
      meta: { title: 'Dynamext | About' },
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: 'comingsoon',
      name: 'ComingSoon',
      meta: { title: 'Dynamext | Coming Soon' },
      component: () => import(/* webpackChunkName: "comingsoon" */ '@/views/ComingSoon.vue')
    },
    {
      path: 'admin',
      name: 'Admin',
      meta: { title: 'Dynamext | Administration' },
      component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin.vue'),
      children: [
        {
          path: '',
          name: 'Admin.Dashboard',
          meta: { title: 'Dynamext | Administration' },
          component: () => import(/* webpackChunkName: "Admin" */ '@/modules/admin/components/Admin.Dashboard.vue'),
        },
        {
          path: 'accounts',
          name: 'Admin.Accounts',
          meta: { title: 'Dynamext | Accounts' },
          component: () => import(/* webpackChunkName: "Admin" */ '@/modules/admin/components/Accounts.Dashboard.vue'),
        }
      ]
    },
    {
      path: 'fileroom',
      name: 'Fileroom',
      meta: { title: 'Dynamext | Fileroom' },
      component: () => import(/* webpackChunkName: "Fileroom" */ '@/views/Fileroom.vue')
    },
    {
      path: 'schedules',
      name: 'Schedule',
      meta: { title: 'Dynamext | Schedules' },
      component: () => import(/* webpackChunkName: "Schedules" */ '@/views/Schedules.vue'),
      children: [{
        path: '',
        name: 'Schedule.Dashboard',
        meta: { title: 'Dynamext | Schedules', },
        component: () => import(/* webpackChunkName: "Schedules" */ "@/modules/schedules/components/Schedules.Dashboard")
      }
        ,
      {
        path: 'designer',
        name: 'Schedule.Designer',
        meta: { title: 'Dynamext | Schedules', },
        component: () => import(/* webpackChunkName: "Schedules" */ "@/modules/schedules/components/designer/Schedules.Designer")
      }]
    }
    ]
  },
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/base/Anon.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: { title: 'Dynamext | Login' },
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        meta: { title: 'Dynamext | Register' },
        component: () => import('@/views/Signup.vue')
      },
      {
        path: '*',
        beforeEnter: routerHelper.routeGaurd,
      }
    ]
  }
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
