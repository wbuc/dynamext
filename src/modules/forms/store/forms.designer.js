

import designerApi from '@/modules/forms/api/forms.designer.api'
import formHelper from '@/modules/forms/helpers/forms-helper'


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
    },
    'SET_FORM_ID'(state, id){    
        state.dynamicForm.id = id;
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
                description: null,
                status: formHelper.enum_FormStatus.Draft,
                owner: context.rootGetters.user.email,
                category: null,
                template: false,
                formControls: [],
                icon: 'mdi-file-document',
                colour: null
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
            }, 0)
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

    saveFormDefinition(context, formState) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            const form = formState.formData 
            //NEW FORM
            if (!form.id) {

                //form.id = formHelper.generateFormId();

                designerApi.saveFormDefinition(form).then(res => {
                    context.commit('API_COMPLETE');
                    
                    // Set the form id returned from the server.
                    context.commit('SET_FORM_ID', res.data.data.id);
                    resolve(res.data)
                },
                    error => {
                        console.log(error)
                        context.commit('API_ERROR');
                        reject(error);
                    });
            }
            else {
                console.log('update existing form: ');
                //EXISTING FORM
                designerApi.updateFormDefinition(formState).then(data => {
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