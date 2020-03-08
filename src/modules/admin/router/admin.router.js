// import store from '@/store/index'
import routeHelper from '@/modules/shared/helpers/route.helper'

// function routeGaurd(to, from, next) {
//     if (store.state.userProfile.idToken) {
//         console.log('from: ', from, ' to: ', to);
//         next();
//     }
//     else {
//         next('/login');
//     }
// }

export default [
    {
        path: '/admin',
        name: 'Admin',
        meta: {
            title: 'Dynamext | Administration',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "admin" */ '@/views/Admin.vue'),
        beforeEnter: routeHelper.routeGaurd,
        children: [
            {
                path: 'accounts',
                name: 'Accounts',
                meta: {
                    title: 'Dynamext | Accounts',
                    layout: 'default'
                },
                component: () => import(/* webpackChunkName: "accounts" */ '@/modules/admin/components/Accounts.vue'),
            },
        ],
    }
]