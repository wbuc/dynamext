

import runtimeApi from '@/modules/schedules/api/schedules.runtime.api'

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));


const state = {
    schedule: { id: null, name: null }
}
const getters = {
    schedule: state => {
        return state.schedule;
    },
}
const mutations = {
    'NEW_SCHEDULE'(state, { id, name }) {
        state.schedule.id = id
        state.schedule.name = name;
    }

}
const actions = {
    createNewSchedule(context) {
        if (!context.rootGetters.isAuthenticated) return;

        // Can be used later for additional checks when more is required.
        return new Promise((resolve) => {
            let newId = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
            context.commit('NEW_SCHEDULE', { id: newId, name: "Untitled Schedule" });
            resolve(context.getters.schedule);
        })

    },
    getAllSchedulesPLACEHOLDER(context) {
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