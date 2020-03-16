import routerHelper from '@/helpers/router.helper'


export default [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Dynamext | Home',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Home.vue'),
        beforeEnter: routerHelper.routeGaurd
    },
    {
        path: '/design',
        name: 'Design',
        meta: {
            title: 'Dynamext | Design',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DesignElements.vue'),
        beforeEnter: routerHelper.routeGaurd
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'Dynamext | About',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/About.vue'),
        beforeEnter: routerHelper.routeGaurd
    }, {
        path: '/comingsoon',
        name: 'ComingSoon',
        meta: {
            title: 'Dynamext | Coming Soon',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/ComingSoon.vue'),
        beforeEnter: routerHelper.routeGaurd
    }
]