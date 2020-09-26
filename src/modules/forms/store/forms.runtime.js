
import runtimeApi from '@/modules/forms/api/forms.runtime.api'
import designerApi from '@/modules/forms/api/forms.designer.api' // TEMP - this will be taken care of in the server API
import formHelper from '@/modules/forms/helpers/forms-helper'

const state = {
}
const getters = {
}
const mutations = {
}
const actions = {
    createForm(context, { documentId, formDefinitionId }) {

        console.log('Create Form started: ', context, documentId, formDefinitionId);

        return new Promise((resolve, reject) => {

            // TEMP - the form definition will be retrieved on the server and create the copy of the form, not on the client side. Only for demo purposes.
            designerApi.getFormDefinition(formDefinitionId).then(result => {

                let formDefinition = result.data
                // clone the current master form as a copy - the exact fields are not needed at runtime and can be simplified later on the server.
                let docForm = formHelper.cloneObject(formDefinition);

                docForm.definitionId = formDefinition.id
                docForm.id = formHelper.generateFormId();
                docForm.documentId = documentId;

                // This is the only API that needs to be called from the client when creating a new form.
                runtimeApi.saveForm(docForm).then(data => {
                    resolve(data)
                },
                    error => {
                        reject(error);
                    });
            }, error => {
                reject(error);
            })

        });

    },
    batchCreateForm(context, { documentId, formDefinitionId }) {

        console.log('Create Form started: ', context, documentId, formDefinitionId);

        return new Promise((resolve, reject) => {

            // TEMP - the form definition will be retrieved on the server and create the copy of the form, not on the client side. Only for demo purposes.
            designerApi.getFormDefinition(formDefinitionId).then(result => {

                let formDefinition = result.data
                // clone the current master form as a copy - the exact fields are not needed at runtime and can be simplified later on the server.
                let docForm = formHelper.cloneObject(formDefinition);

                docForm.definitionId = formDefinition.id
                docForm.id = formHelper.generateFormId();
                docForm.documentId = documentId;

                // This is the only API that needs to be called from the client when creating a new form.
                runtimeApi.saveForm(docForm).then(data => {
                    resolve(data)
                },
                    error => {
                        reject(error);
                    });
            }, error => {
                reject(error);
            })

        });

    },
    getForm(context, form) {
        if (!context.rootGetters.isAuthenticated) return;

        //context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            runtimeApi.getFormDefinition(form.id).then(result => {

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

    saveForm(context, form) {
        if (!context.rootGetters.isAuthenticated) return;

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            //NEW FORM
            if (!form.id) {
                let newId = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
                form.id = newId;
                runtimeApi.saveFormDefinition(form).then(data => {
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
                runtimeApi.updateFormDefinition(form).then(data => {
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
}

export default { state, getters, mutations, actions }