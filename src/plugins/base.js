// NOTE:
// base.js is used to register custom global components for app.

import Vue from 'vue'

/* LAYOUTS */
import Default from '@/views/layouts/Default.vue'
import Wide from '@/views/layouts/Wide.vue'
import NoSidebar from '@/views/layouts/NoSidebar.vue'
import Anon from '@/views/layouts/Anon.vue'
import Placeholder from '@/views/layouts/Placeholder.vue'

/* HEADERS */
import PageHeader from '@/components/shared/PageHeader.vue'
import Breadcrumbs from '@/components/shared/Breadcrumb.vue'

/* CRADS */
import BasicCard1 from '@/components/cards/Card-Basic-1'
import TimelineCard from '@/components/cards/Card-Timeline'

/* MODALS */
import Modal from '@/components/dialog/Modal.vue'
import Popup from '@/components/dialog/Popup.vue'
import Confirm from '@/components/dialog/Confirmation.vue'
import Notification from '@/components/dialog/Notification.vue'

/* LISTS */
import MultiSelect from '@/components/lists/Multi-Select.vue'

/* BRAND */
import Logo from '@/components/brand/Logo.vue'


Vue.component('default-layout', Default);
Vue.component('wide-layout', Wide);
Vue.component('no-sidebar-layout', NoSidebar);
Vue.component('anon-layout', Anon);
Vue.component('placeholder-layout', Placeholder);
Vue.component('page-header', PageHeader);

Vue.component('x-breadcrumb', Breadcrumbs);
Vue.component('x-basic-card', BasicCard1);
Vue.component('x-timeline-card', TimelineCard);
Vue.component('x-modal', Modal);
Vue.component('x-popup', Popup);
Vue.component('x-confirmation', Confirm)
Vue.component('x-notification', Notification)
Vue.component('x-multi-select', MultiSelect)


Vue.component('x-logo', Logo)

