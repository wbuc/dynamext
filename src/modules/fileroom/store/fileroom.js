
import fileroomApi from '@/modules/fileroom/api/fileroom.api'

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const state = {
    fileroomId: null
}
const getters = {
}
const mutations = {
}
const actions = {

    getTreeviewDefinition(context) {
        //check if loggend in. Old if (!state.idToken) {return}
        if (!context.rootGetters.isAuthenticated) {
            return;
        }

        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            fileroomApi.getTreeviewDefinition().then(data => {

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
    getTreeNodeMetadata(context, id) {
        //check if loggend in. Old if (!state.idToken) {return}
        if (!context.rootGetters.isAuthenticated) {
            return;
        }
        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            fileroomApi.getTreeNodeDetail(id).then(data => {
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
    saveDocumentMetadata(context, data) {
        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve, reject) => {
            fileroomApi.saveDocumentDetail(data).then(data => {
                resolve(data)
            },
                error => {
                    console.log(`error saving document ${data.name}: `, error)
                    reject(error);
                });
        });

    },
    assignDocumentSchedules(context, { documentData, selectedSchedules }) {

        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve, reject) => {

            // NOTE: This will happen all on the server side later. - only for demo purposes.
            // 1. check if the current schedule already has an instnace on the current document.
            if (documentData.schedules.children.length == 0) {
                console.log('selectedSchedules: ', selectedSchedules);
                let _createdDocumentForms = []

                // NOTE: for demo, only use first selected schedule

                // 2. if no instance found, create it. - formdesigner.runtime store.
                context.dispatch('createForm', { documentId: documentData.id, formDefinitionId: selectedSchedules[0].id }).then((response) => {

                    // this can now be used to update the metadat for the document.
                    _createdDocumentForms.push(response.data)


                    // Update the document metadata object. only temp, will be removed later with real API's.
                    documentData.schedules = { count: 1, children: _createdDocumentForms }
                    console.log('Updated dcument metadata: ', documentData);
                    // resolve(documentData.schedules.count);
                    fileroomApi.assignDocumentSchedules(documentData.id, documentData).then(() => {
                        resolve(documentData.schedules.count);
                    },
                        error => {
                            console.log(`Error updating metadata file for ${documentData.name}: `, error)
                            reject(error);
                        });

                },
                    error => {
                        console.log(`Error creating document schedules for ${documentData.name}: `, error)
                        reject(error);
                    })



            }
        });
    }
}

export default { state, getters, mutations, actions }