import routerHelper from '@/helpers/router.helper'


export default [
    {
        path: '/fileroom',
        name: 'Fileroom',
        meta: {
            title: 'Dynamext | Fileroom',
            layout: 'wide'
        },
        component: () => import(/* webpackChunkName: "fileroom" */ '@/views/Fileroom.vue'),
        beforeEnter: routerHelper.routeGaurd
    },

]