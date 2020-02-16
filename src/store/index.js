import Vue from 'vue'
import Vuex from 'vuex'

import userProfile from '@/modules/userprofile/store/userProfile'
import formsAuth from '@/modules/userprofile/store/forms.auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userProfile,
    formsAuth
  }
})
