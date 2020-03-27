import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboardRoutes from '@/modules/dashboard/router/dashboard.router'
import adminRoutes from '@/modules/admin/router/admin.router'
import userProfileRoutes from '@/modules/userprofile/router/userProfile.router'
import fileroomRoutes from '@/modules/fileroom/router/fileroom.router'


Vue.use(VueRouter)


const routes = [
  ...dashboardRoutes,
  ...adminRoutes,
  ...userProfileRoutes,
  ...fileroomRoutes
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
