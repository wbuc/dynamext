import routerHelper from '@/helpers/router.helper'


export default [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Dynamext | Login',
            layout: 'anon',
            transitionName: 'slide'
        },
        component: () => import(/* webpackChunkName: "userprofile" */ '@/views/Login.vue'),

    }, {
        path: '/register',
        name: 'Register',
        meta: {
            title: 'Dynamext | Register',
            layout: 'anon',
            transitionName: 'slide'
        },
        component: () => import(/* webpackChunkName: "userprofile" */ '@/views/Signup.vue'),

    },
    {
        path: '*',
        meta: {
            layout: 'anon',
        },
        beforeEnter: routerHelper.routeGaurd,
    },
]