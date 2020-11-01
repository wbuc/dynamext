import Vue from 'vue'
import VueRouter from 'vue-router'

import routerHelper from '@/helpers/router-helper'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: "Home" */ '@/layouts/base/Index.vue'),
    beforeEnter: routerHelper.routeGaurd,
    children: [{
      path: '',
      name: 'Home',
      meta: { title: 'Dynamext | Home' },
      component: () => import(/* webpackChunkName: "Home" */'@/views/Home.vue')
    },
    {
      path: 'design',
      name: 'Design',
      meta: { title: 'Dynamext | Design' },
      component: () => import(/* webpackChunkName: "Design" */ '@/views/DesignElements.vue')
    },
    {
      path: 'icons',
      name: 'Icons',
      meta: { title: 'Dynamext | Icons' },
      component: () => import(/* webpackChunkName: "Icons" */ '@/views/Icons.vue')
    },
    {
      path: 'about',
      name: 'About',
      meta: { title: 'Dynamext | About' },
      component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
    },
    {
      path: 'comingsoon',
      name: 'ComingSoon',
      meta: { title: 'Dynamext | Coming Soon' },
      component: () => import(/* webpackChunkName: "Comingsoon" */ '@/views/ComingSoon.vue')
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
          component: () => import(/* webpackChunkName: "Admin" */ '@/modules/admin/components/admin-dashboard.vue'),
        },
        {
          path: 'accounts',
          name: 'Admin.Accounts',
          meta: { title: 'Dynamext | Accounts' },
          component: () => import(/* webpackChunkName: "AdminAccounts" */ '@/modules/admin/components/admin-accounts-dashboard.vue'),
        },
        {
          path: 'users',
          name: 'Admin.Users',
          meta: { title: 'Dynamext | Users' },
          component: () => import(/* webpackChunkName: "AdminAccounts" */ '@/modules/admin/components/admin-users-dashboard.vue'),
        },
        {
          path: 'appconfig',
          name: 'Admin.AppConfig',
          meta: { title: 'Dynamext | App Data' },
          component: () => import(/* webpackChunkName: "AdminAppConfig" */ '@/modules/admin/components/admin-app-dashboard.vue'),
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
        component: () => import(/* webpackChunkName: "Schedules" */ "@/modules/forms/components/forms-dashboard")
      }
        ,
      {
        path: 'designer',
        name: 'Schedule.Designer',
        meta: { title: 'Dynamext | Schedules', },
        component: () => import(/* webpackChunkName: "ScheduleDesigner" */ "@/modules/forms/components/designer/forms-designer")
      }]
    }
    ]
  },
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: "Home" */'@/layouts/base/Anon.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: { title: 'Dynamext | Login' },
        component: () => import(/* webpackChunkName: "Home" */'@/views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        meta: { title: 'Dynamext | Register' },
        component: () => import(/* webpackChunkName: "Home" */'@/views/Signup.vue')
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
