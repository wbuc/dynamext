import router from '@/router/router'
import userProfileApi from '@/modules/userprofile/api/userProfile.api'

const state = {
    idToken: null,
    userId: null,
    user: null,
}
const getters = {
    user: state => {
        return state.user;
    },
    isAuthenticated: state => {
        return state.idToken !== null ? true : false;
    },
}
const mutations = {
    'AUTH_USER'(state, data) {
        state.idToken = data.idToken;
        state.userId = data.userId;
    },
    'SAVE_USER'(state, data) {
        state.user = data;
    },
    'LOGOUT_USER'(state) {
        state.idToken = null;
        state.userId = null;
    },
}
const actions = {
    storeUser({ state }, userData) {
        //check if valid token.
        if (!state.idToken) {
            return;
        }
        userProfileApi.saveUser(state, userData)
            .then(data => {
                console.log('New User Saved ', data)
            },
                error => {
                    console.log(error)
                })
    },
    getUser({ commit, state }) {
        if (!state.idToken) {
            return;
        }

        userProfileApi.getUser(state).then(data => {
            const res = data.data;
            const users = [];
            console.log(data)
            for (let key in res) {
                const user = res[key];
                user.id = key;
                users.push(user);
            }
            console.log('get user done ', res);
            commit('SAVE_USER', users[0]);
        },
            error => {
                console.log(error)
            });
    },
    getUsers({ commit, state }) {

        commit('API_LOADING');
        if (!state.idToken) {
            return;
        }

        return new Promise((resolve, reject) => {
            userProfileApi.getUsers(state).then(data => {
                const res = data.data;
                const users = [];
                console.log(data)
                for (let key in res) {
                    const user = res[key];
                    user.id = key;
                    if (res[key].colour) user.colour = res[key].colour.value
                    users.push(user);
                }

                //mimic some loading in the background.
                setTimeout(() => {
                    console.log('get users done ', users);
                    commit('API_COMPLETE');
                    resolve(users)
                }, 1000);

            },
                error => {
                    console.log(error)
                    commit('API_ERROR');
                    reject(error);
                });
        })

    },
    signUpSuccess(context, { response, userData }) {
        console.log(userData)

        //set user as signed in when create succesfull.
        context.commit('AUTH_USER', response.data);
        // save user data in the users profile table.
        context.dispatch('storeUser', userData);
        // setup auto logout when session expires.
        context.dispatch('setAutoLogout', response.data.expiresIn);

        // determine the date when token should expire.
        const now = new Date();
        const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
        // save token for auto login.
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);

        context.commit('API_COMPLETE');

        router.replace({ name: 'Home' });

    },
    loginSuccess(context, response) {
        console.log('login success')
        // determine the date when token should expire.
        const now = new Date();
        const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
        // save token for auto login.
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);

        // set session detail for logged in user.
        context.commit('AUTH_USER', response.data);
        // get user profile.
        context.dispatch('getUser');
        // setup auto logout when session expires.
        context.dispatch('setAutoLogout', response.data.expiresIn);
        //disable loading
        context.commit('API_COMPLETE');
        // navigate when login success.
        router.replace({ name: 'Home' });

    },
    tryAutoLogin(context) {
        const token = localStorage.getItem('token');
        if (!token) {
            return
        }
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        const now = new Date();

        console.log(now);
        console.log(expirationDate);
        if (now >= expirationDate) {
            return;
        }
        const userId = localStorage.getItem('userId');
        context.commit('AUTH_USER', {
            idToken: token,
            localId: userId
        })
        router.replace({ name: 'Home' });
    },
    logout({ commit }) {
        commit('LOGOUT_USER');

        // clear browser storage.
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');

        // setup navigation.
        router.replace({ name: 'Login' });
    },
    setAutoLogout(context, expirationTime) {
        setTimeout(() => {
            context.dispatch('logout');
        }, expirationTime * 1000);
    },
}

export default { state, getters, mutations, actions }