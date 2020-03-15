
import routeHelper from '@/helpers/router.helper'

// const adminHome = resolve => {
//     require.ensure(['@/views/Admin.vue'], () => {
//         resolve(require('@/views/Admin.vue'));
//     });
// }
// const accountsHome = resolve => {
//     require.ensure(['@/modules/admin/components/Accounts.Dashboard.vue'], () => {
//         resolve(require('@/modules/admin/components/Accounts.Dashboard.vue'));
//     });
// }


export default [
    {
        path: '/admin',
        name: 'Admin',
        meta: {
            title: 'Dynamext | Administration',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "admin" */'@/views/Admin.vue'),
        beforeEnter: routeHelper.routeGaurd,
    },
    {
        path: '/admin/accounts',
        name: 'Accounts',
        meta: {
            title: 'Dynamext | Accounts',
            layout: 'default',
            transitionName: 'fade'
        },
        component: () => import(/* webpackChunkName: "admin" */'@/modules/admin/components/Accounts.Dashboard.vue'),
        beforeEnter: routeHelper.routeGaurd,
    },
]