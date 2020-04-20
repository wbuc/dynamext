

import designerApi from '@/modules/schedules/api/schedules.designer.api'

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));


const state = {
    schedule: { id: null, name: null, status: null }
}
const getters = {
    schedule: state => {
        return state.schedule;
    },
}
const mutations = {
    'NEW_FORM'(state, form) {
        state.schedule = form;
        state.schedule.formControls = [];
    },
    'SET_FORM'(state, form) {
        state.schedule = form;
    }

}
const actions = {

    createNewSchedule(context) {
        if (!context.rootGetters.isAuthenticated) return;

        // Can be used later for additional checks when more is required.
        return new Promise((resolve) => {
            //let newId = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
            context.commit('NEW_FORM', { id: null, name: "Untitled Schedule", status: "draft", owner: "Wessel Buchling", createdDate: "20/04/2020" });
            resolve(context.getters.schedule);
        })
    },
    getAllForms(context) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            designerApi.getAllForms().then(data => {
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
    getFormDefinition(context, id) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            designerApi.getFormDefinition(id).then(data => {
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
    saveFormDefinition(context, form) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            let newId = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
            form.id = newId;
            designerApi.saveFormDefinition(form).then(data => {
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
    deleteFormDefinition(context, form) {
        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve, reject) => {
            designerApi.deleteFormDefinition(form.id).then(data => {
                resolve(data)
                //context.commit("NOTIFY_INFO", `${form.name} has been deleted!`)
            },
                error => {
                    console.log(error)
                    context.commit('API_ERROR');
                    //context.commit("NOTIFY_ERROR", `${form.name} could not be deleted!`)
                    reject(error);
                });
        })

    }
}

export default { state, getters, mutations, actions }