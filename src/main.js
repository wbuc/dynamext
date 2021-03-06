import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './helpers/string-filters'


/* Register custom components */
import '@/plugins/base'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


// NOTE: See Components-02 for more detail.
// export const eventBus = new Vue({
//   methods: {
//     changeAge(data) {
//       this.$emit('ageWasEdited', data)
//     }
//   }
// });
