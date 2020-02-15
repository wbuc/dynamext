import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'
import Anon from './layouts/Anon.vue'
import PageHeader from './components/ui/PageHeader.vue'

Vue.component('default-layout', Default);
Vue.component('no-sidebar-layout', NoSidebar);
Vue.component('anon-layout', Anon);
Vue.component('page-header', PageHeader);



Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
