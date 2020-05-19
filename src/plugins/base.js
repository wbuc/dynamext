// NOTE:
// base.js is used to register custom global components for app.

import Vue from 'vue'

/* HEADERS */
import PageHeader from '@/components/shared-page-header.vue'
import Breadcrumbs from '@/components/shared-breadcrumb.vue'
import Toolbar from '@/components/shared-toolbar.vue'

/* CRADS */
import CardTile from '@/components/card-tile'
import TimelineCard from '@/components/card-timeline'
import CardBasic from '@/components/card-basic'

/* MODALS */
import Confirm from '@/components/dialog-confirmation.vue'
import Dialog from '@/components/dialog-base.vue'

import Notification from '@/components/snackbar-notification.vue'

/* LISTS */
import MultiSelect from '@/components/list-multi-select.vue'
import IconList from "@/components/list-icon";

/* BRAND */
import Logo from '@/components/brand-logo.vue'

Vue.component('page-header', PageHeader);
Vue.component('x-toolbar', Toolbar);

Vue.component('x-breadcrumb', Breadcrumbs);
Vue.component('x-card-tile', CardTile);
Vue.component('x-card-basic', CardBasic);
Vue.component('x-timeline-card', TimelineCard);
Vue.component('x-confirmation', Confirm)
Vue.component('x-notification', Notification)
Vue.component('x-dialog', Dialog);
Vue.component('x-multi-select', MultiSelect)
Vue.component('x-icon-list', IconList)

Vue.component('x-logo', Logo)

