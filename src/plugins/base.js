// NOTE:
// base.js is used to register custom global components for app.

import Vue from 'vue'

/* LAYOUTS */
import Default from '@/views/layouts/Default.vue'
import NoSidebar from '@/views/layouts/NoSidebar.vue'
import Anon from '@/views/layouts/Anon.vue'
import Placeholder from '@/views/layouts/Placeholder.vue'
import PageHeader from '@/components/ui/PageHeader.vue'

/* CRADS */
import BasicCard1 from '@/components/cards/Card-Basic-1'



Vue.component('default-layout', Default);
Vue.component('no-sidebar-layout', NoSidebar);
Vue.component('anon-layout', Anon);
Vue.component('placeholder-layout', Placeholder);
Vue.component('page-header', PageHeader);


Vue.component('x-basic-card', BasicCard1)