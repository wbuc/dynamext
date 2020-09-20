import router from "@/router/router";
import userProfileApi from "@/modules/userprofile/api/userProfile.sql.api";

const state = {
  userId: null,
  user: null,
  token: null,
};
const getters = {
  user: (state) => {
    return state.user;
  },
  userId: (state) => {
    return state.userId;
  },
  isAuthenticated: (state) => {
    //return state.userId !== null ? true : false;
    return state.token !== null ? true : false;
  },
  token: (state) => {
    return state.token;
  },
};
const mutations = {
  AUTH_USER(state, data) {
    state.token = data.token;
    state.userId = data.id;
  },
  SAVE_USER(state, data) {
    state.user = data;
  },
  LOGOUT_USER(state) {
    state.token = null;
    state.userId = null;
    state.user = null;
  },
};
const actions = {
  storeUser({ state }, userData) {
    if (!state.token) {
      return;
    }
    /# Not needed as we already saved the user data #/;
    console.log(userData); // temp

    userProfileApi.saveUser(state, userData).then(
      (data) => {
        console.log("New User Saved ", data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  getUser(context) {
    if (!context.state.token) {
      return;
    }

    userProfileApi.getLoggedInUser(context.rootGetters.userId).then(
      (data) => {
        const _user = data;
        context.commit("SAVE_USER", _user);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  getUsers({ commit, state }) {
    commit("API_LOADING");
    //if (!state.idToken) {
    if (!state.token) {
      return;
    }

    return new Promise((resolve, reject) => {
      userProfileApi.getUsers(state).then(
        (data) => {
          const res = data.data;
          const users = [];
          for (let key in res) {
            const user = res[key];
            user.id = key;
            if (res[key].colour) user.colour = res[key].colour.value;
            users.push(user);
          }

          //mimic some loading in the background.
          setTimeout(() => {
            commit("API_COMPLETE");
            resolve(users);
          }, 1000);
        },
        (error) => {
          commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  signUpSuccess(context, response) {
    console.log("signup success: ", response.data);
    //set user as signed in when create succesfull.
    context.commit("AUTH_USER", response.data);
    // Get new registered user detail.
    context.dispatch("getUser");
    // setup auto logout when session expires.
    context.dispatch("setAutoLogout", response.data.expiresIn);

    // determine the date when token should expire.
    const now = new Date();
    const expirationDate = new Date(
      now.getTime() + response.data.expiresIn * 1000
    );
    // save token for auto login.
    localStorage.setItem("token", response.data.token); // Not needed anymore
    localStorage.setItem("userId", response.data.id);
    localStorage.setItem("expirationDate", expirationDate);

    router.replace({ name: "Home" });
  },
  loginSuccess(context, response) {
    const user = response.data;

    // determine the date when token should expire.
    const now = new Date();
    const expirationDate = new Date(now.getTime() + user.expiresIn * 1000);
    // save token for auto login.
    localStorage.setItem("token", response.token);
    localStorage.setItem("userId", user.id); // has the user object.
    localStorage.setItem("expirationDate", expirationDate);
    // set session detail for logged in user.
    context.commit("AUTH_USER", { id: user.id, token: response.token });

    // get user profile.
    //context.dispatch("getUser"); // TODO: Take out. No need for this requestas the user detail is returned on the signin!
    context.commit("SAVE_USER", user); // TODO: NEW mutation to call instead of getUser action.

    // setup auto logout when session expires.
    context.dispatch("setAutoLogout", user.expiresIn);
    // //disable loading
    // context.commit("API_COMPLETE");
    // navigate when login success.
    router.replace({ name: "Home" });
  },
  tryAutoLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) return;

    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    const now = new Date();

    if (now >= expirationDate) {
      return;
    }

    context.commit("AUTH_USER", {
      id: userId,
      token,
    });
    context.dispatch("getUser");

    router.replace({ name: "Home" });
  },
  logoutUser(context) {
    context.commit("LOGOUT_USER");
    // clear browser storage.
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    // logout on server side
    context.dispatch("logout").then(() => {});

    router.replace({ name: "Login" });
  },
  setAutoLogout(context, expirationTime) {
    setTimeout(() => {
      console.log("Attempting signout...");
      context.dispatch("logout");
      context.dispatch("logoutUser");
    }, expirationTime * 1000);
  },
  getUserDetail(context, email) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      userProfileApi.getUserDetail(email).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  saveUserDetail(context, user) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      userProfileApi.saveUserDetail(user).then(
        (response) => {
          resolve(response.data[0]);
        },
        (error) => {
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
  updateUserDetail(context, user) {
    if (!context.rootGetters.isAuthenticated) return;

    return new Promise((resolve, reject) => {
      userProfileApi.updateUserDetail(user).then(
        (response) => {
          resolve(response);
        },
        (error) => {
          context.commit("API_ERROR");
          reject(error);
        }
      );
    });
  },
};

export default { state, getters, mutations, actions };
