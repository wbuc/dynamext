
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

        context.commit('API_LOADING');

        //check if loggend in. if (!state.idToken) {return}
        if (!context.rootGetters.isAuthenticated) {
            return;
        }

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

    }
}

export default { state, getters, mutations, actions }