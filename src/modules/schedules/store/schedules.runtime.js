

import runtimeApi from '@/modules/schedules/api/schedules.runtime.api'

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const state = {
}
const getters = {
}
const mutations = {
}
const actions = {

    getAllSchedules(context) {
        //check if loggend in.
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            runtimeApi.getAllSchedules().then(data => {

                context.commit('API_COMPLETE');
                resolve(data)
            },
                error => {
                    console.log(error)
                    context.commit('API_ERROR');
                    reject(error);
                });
        })
    },

}

export default { state, getters, mutations, actions }