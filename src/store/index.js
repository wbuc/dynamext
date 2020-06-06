import Vue from 'vue'
import Vuex from 'vuex'

import userProfile from '@/modules/userprofile/store/userProfile'
import formsAuth from '@/modules/userprofile/store/forms.auth'
import fileroom from '@/modules/fileroom/store/fileroom'
import scheduleRuntime from '@/modules/forms/store/forms.runtime'
import scheduleDesigner from '@/modules/forms/store/forms.designer'
import admin from '@/modules/admin/store/admin.store'

import * as getters from './common/getters'
import * as mutations from './common/mutations'
import * as actions from './common/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: { loading: false },
    notification: { show: false, message: null, type: null }
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    admin,
    userProfile,
    formsAuth,
    fileroom,
    scheduleRuntime,
    scheduleDesigner
  }
})
