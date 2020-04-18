import routerHelper from '@/helpers/router.helper'

import ScheduleDashboard from "@/modules/schedules/components/Schedules.Dashboard";
import ScheduleDesigner from '@/modules/schedules/components/designer/Schedules.Designer'
export default [
    // {
    //     path: '/schedules',
    //     name: 'Schedules',
    //     meta: {
    //         title: 'Dynamext | Schedules',
    //         layout: 'default'
    //     },
    //     component: () => import(/* webpackChunkName: "schedules" */ '@/views/Schedules.vue'),
    //     beforeEnter: routerHelper.routeGaurd
    // },
    {
        path: '/schedules',
        name: 'Schedule',
        meta: {
            title: 'Dynamext | Schedules',
            layout: 'default'
        },
        component: () => import(/* webpackChunkName: "schedules" */ '@/views/Schedules.vue'),
        children: [
            {
                name: "Schedule.Root",
                path: '',
                component: ScheduleDashboard,
                meta: {
                    title: 'Dynamext | Schedules',
                    layout: 'default'
                },
                beforeEnter: routerHelper.routeGaurd,
            },
            {
                name: "Schedule.Designer",
                path: 'designer',
                props: true,
                component: ScheduleDesigner,
                meta: {
                    title: 'Dynamext | Designer',
                    layout: 'default'
                },
                beforeEnter: routerHelper.routeGaurd,
            }
        ]
    },





]