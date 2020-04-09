import routerHelper from '@/helpers/router.helper'


export default [
    {
        path: '/schedules',
        name: 'Schedules',
        meta: {
            title: 'Dynamext | Schedules',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "schedules" */ '@/views/Schedules.vue'),
        beforeEnter: routerHelper.routeGaurd
    },

]