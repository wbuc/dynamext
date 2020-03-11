import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

/* Register custom components */
import '@/plugins/base'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

