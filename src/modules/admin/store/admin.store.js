
import adminApi from '@/modules/admin/api/admin.app.api'

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const state = {
}
const getters = {
}
const mutations = {
}
const actions = {

    getAdminProjectDetail(context) {
        //check if loggend in. Old if (!state.idToken) {return}
        if (!context.rootGetters.isAuthenticated) {
            return;
        }
        context.commit('API_LOADING');

        return new Promise((resolve, reject) => {
            adminApi.getProjectInfo().then(response => {
                context.commit('API_COMPLETE');
                // need to clean this up, the api should always only return the project data object, not everything.
                resolve(response.data)
            },
                error => {
                    console.log(error)
                    context.commit('API_ERROR');
                    reject(error);
                });
        })
    },
    saveAdminProjectDetail(context, data) {
        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve, reject) => {
            adminApi.saveProjectInfo(data).then(data => {
                resolve(data)
            },
                error => {
                    console.log(`error saving project data ${data.title}: `, error)
                    reject(error);
                });
        });

    },


    saveNewAdminDepartment(context, data) {
        if (!context.rootGetters.isAuthenticated) return;

        //will be replaced on server when api is available.
        const newId = Math.floor((Math.random() * 100) + 1);
        data.id = newId;

        return new Promise((resolve, reject) => {
            adminApi.saveNewDepartment(data).then(data => {
                resolve(data)
            },
                error => {
                    console.log(`error saving department data ${data.title}: `, error)
                    reject(error);
                });
        });

    },
    updateAdminDepartmentDetail(context, data) {
        if (!context.rootGetters.isAuthenticated) return;

        return new Promise((resolve, reject) => {
            adminApi.updateDepartment(data).then(data => {
                resolve(data)
            },
                error => {
                    console.log(`error saving department data ${data.title}: `, error)
                    reject(error);
                });
        });

    },

}

export default { state, getters, mutations, actions }