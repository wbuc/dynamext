
import router from '@/router/router'
import httpClient from '@/plugins/httpClient'


const state = {
    idToken: null,
    userId: null,
    user: null,
    api: { loading: false }
}
const getters = {
    user: state => {
        return state.user;
    },
    isAuthenticated: state => {
        return state.idToken !== null ? true : false;
    },
    isLoading: state => {
        return state.api.loading;
    },
    api: state => {
        return state.api
    }
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
    'API_LOADING'(state) {
        state.api.loading = true
    },
    'API_COMPLETE'(state) {
        console.log('api complete')
        state.api.loading = false
    },
    'API_ERROR'(state, error) {
        state.api = { loading: false, error: error }
    }

}
const actions = {
    storeUser({ state }, userData) {
        //check if valid token.
        if (!state.idToken) {
            return;
        }
        //attache the token to access the resource.
        httpClient.post('/users.json' + '?auth=' + state.idToken, userData)
            .then(response => console.log(response));
    },
    getUser({ commit, state }) {
        if (!state.idToken) {
            return;
        }
        httpClient.get("/users.json" + '?auth=' + state.idToken)
            .then(res => {
                const data = res.data;
                const users = [];
                for (let key in data) {
                    const user = data[key];
                    user.id = key;
                    users.push(user);
                }
                commit('SAVE_USER', users[0]);
            })
            .catch(error => console.log(error));
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
            //router.replace({ name: 'Login' });
            return
        }
        const expirationDate = localStorage.getItem('expirationDate');
        const now = new Date();
        if (now >= expirationDate) {
            //router.replace({ name: 'Login' });
            return
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