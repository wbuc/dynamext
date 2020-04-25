

import designerApi from '@/modules/schedules/api/schedules.designer.api'

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));


const state = {
    dynamicForm: { id: null, name: null, status: null }
}
const getters = {
    dynamicForm: state => {
        return state.dynamicForm;
    },
}
const mutations = {

    'SET_FORM'(state, form) {
        state.dynamicForm = form;
    }

}
const actions = {

    createNewFormDefinition(context) {
        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve) => {
            // id is null when new form. Only set id when saving for the first time.
            let newForm = {
                id: null,
                name: "New Untitled Schedule",
                status: "draft",
                owner: context.rootGetters.user.email,
                createdDate: "20/04/2020",
                formControls: [],

            };
            context.commit('SET_FORM', newForm);
            resolve(context.getters.dynamicForm);
        })
    },

    getAllForms(context) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            // Pause to show loader.
            setTimeout(() => {
                designerApi.getAllForms().then(data => {
                    context.commit('API_COMPLETE');
                    resolve(data)
                },
                    error => {
                        console.log(error)
                        context.commit('API_ERROR');
                        reject(error);
                    });
            }, 1500)
        })
    },

    getPublishedForms(context) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            // Pause to show loader.
            setTimeout(() => {
                designerApi.getPublishedForms().then(data => {
                    context.commit('API_COMPLETE');
                    resolve(data.data)
                },
                    error => {
                        console.log(error)
                        context.commit('API_ERROR');
                        reject(error);
                    });
            }, 1500)
        })
    },
    getFormDefinition(context, form) {
        if (!context.rootGetters.isAuthenticated) return;

        //context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            designerApi.getFormDefinition(form.id).then(result => {

                context.commit('SET_FORM', result.data);
                //context.commit('API_COMPLETE');

                resolve();
            },
                error => {
                    console.log(error)
                    //context.commit('API_ERROR');
                    reject(error);
                });
        })
    },

    saveFormDefinition(context, form) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            //NEW FORM
            if (!form.id) {
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
            }
            else {
                //EXISTING FORM
                designerApi.updateFormDefinition(form).then(data => {
                    context.commit('API_COMPLETE');
                    resolve(data)
                },
                    error => {
                        console.log(error)
                        context.commit('API_ERROR');
                        reject(error);
                    });
            }
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