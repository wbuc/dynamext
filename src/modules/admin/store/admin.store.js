import adminApi from "@/modules/admin/api/admin.app.api";

//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const state = {};
const getters = {};
const mutations = {};
const actions = {
  async getAdminProjectDetailAsync(context) {
    if (!context.rootGetters.isAuthenticated) {
      return;
    }
    try {
      context.commit("API_LOADING");
      let res = await adminApi.getProjectInfo();
      return res.data;
    } catch (err) {
      console.log(err);
      context.commit("API_ERROR");
    }
  },
  getAdminProjectDetail(context) {
    //check if loggend in. Old if (!state.idToken) {return}
    if (!context.rootGetters.isAuthenticated) {
      return;
    }
    context.commit("API_LOADING");

    return new Promise((resolve, reject) => {
      adminApi.getProjectInfo().then(
        (response) => {
          context.commit("API_COMPLETE");
          // need to clean this up, the api should always only return the project data object, not everything.
          resolve(response.data);
        },
        (error) => {
          console.log(error);
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  async saveAdminProjectDetailAsync(context, data) {
    if (!context.rootGetters.isAuthenticated) return;
    try {
      const response = await adminApi.saveProjectInfo(data);
      return response;
    } catch (err) {
      console.log(`error saving project data ${data.title}: `, err);
    }
  },
  saveAdminProjectDetail(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      adminApi.saveProjectInfo(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving project data ${data.title}: `, error);
          reject(error);
        }
      );
    });
  },
  getDepartmentDetail(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    context.commit("API_LOADING");

    return new Promise((resolve, reject) => {
      adminApi.getDepartmentDetail(data.id).then(
        (response) => {
          context.commit("API_COMPLETE");
          resolve(response.data);
        },
        (error) => {
          console.log(error);
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  saveDepartment(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    //const newId = Math.floor(Math.random() * 100 + 1);
    
    return new Promise((resolve, reject) => {
      adminApi.saveNewDepartment(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving department data ${data.name}: `, error);
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  updateDepartmentDetail(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      adminApi.updateDepartment(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving department data ${data.title}: `, error);
          reject(error);
        }
      );
    });
  },
  deleteAdminDepartment(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      adminApi.deleteDepartment(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving department data ${data.title}: `, error);
          reject(error);
        }
      );
    });
  },

  getRedflagDetail(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    context.commit("API_LOADING");

    return new Promise((resolve, reject) => {
      adminApi.getRedflagDetail(data.id).then(
        (response) => {
          context.commit("API_COMPLETE");
          resolve(response.data);
        },
        (error) => {
          console.log(error);
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  saveRedflag(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    //const newId = Math.floor(Math.random() * 100 + 1);
    
    return new Promise((resolve, reject) => {
      adminApi.saveNewRedflag(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving data ${data.name}: `, error);
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  updateRedflagDetail(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      adminApi.updateRedflag(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving data ${data.title}: `, error);
          reject(error);
        }
      );
    });
  },
  deleteRedflag(context, data) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      adminApi.deleteRedflag(data).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(`error saving data ${data.title}: `, error);
          reject(error);
        }
      );
    });
  },
};

export default { state, getters, mutations, actions };
