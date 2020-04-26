
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
    assignDocumentSchedules(context, data) {
        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve, reject) => {
            fileroomApi.assignDocumentSchedules(data.id, data).then(data => {
                resolve(data)
            },
                error => {
                    console.log(`error assigning document schedules for ${data.name}: `, error)
                    reject(error);
                });
        });
    }
}

export default { state, getters, mutations, actions }