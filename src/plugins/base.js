// NOTE:
// base.js is used to register custom global components for app.

import Vue from 'vue'

/* HEADERS */
import PageHeader from '@/components/shared/PageHeader.vue'
import Breadcrumbs from '@/components/shared/Breadcrumb.vue'
import Toolbar from '@/components/shared/Toolbar.vue'

/* CRADS */
import BasicCard1 from '@/components/cards/Card-Basic-1'
import TimelineCard from '@/components/cards/Card-Timeline'

/* MODALS */
import Modal from '@/components/dialog/Modal.vue'
import Popup from '@/components/dialog/Popup.vue'
import Confirm from '@/components/dialog/Confirmation.vue'
import Notification from '@/components/dialog/Notification.vue'

import Dialog from '@/components/dialog/Dialog.vue'

/* LISTS */
import MultiSelect from '@/components/lists/Multi-Select.vue'
import IconList from "@/components/lists/IconList";

/* BRAND */
import Logo from '@/components/brand/Logo.vue'


Vue.component('page-header', PageHeader);
Vue.component('x-toolbar', Toolbar);

Vue.component('x-breadcrumb', Breadcrumbs);
Vue.component('x-basic-card', BasicCard1);
Vue.component('x-timeline-card', TimelineCard);
Vue.component('x-modal', Modal);
Vue.component('x-popup', Popup);
Vue.component('x-confirmation', Confirm)
Vue.component('x-notification', Notification)

Vue.component('x-multi-select', MultiSelect)
Vue.component('x-icon-list', IconList)

Vue.component('x-dialog', Dialog);

Vue.component('x-logo', Logo)

