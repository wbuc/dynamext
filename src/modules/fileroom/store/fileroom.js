
import treeviewApi from '@/modules/fileroom/api/fileroom.api'

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
            treeviewApi.getTreeviewDefinition().then(data => {

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
            treeviewApi.getTreeNodeDetail(id).then(data => {
                context.commit('API_COMPLETE');
                resolve(data)
            },
                error => {
                    console.log(error)
                    context.commit('API_ERROR');
                    reject(error);
                });
        })
    }
}

export default { state, getters, mutations, actions }