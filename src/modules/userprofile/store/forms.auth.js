//import authApi from '@/modules/userprofile/api/forms.auth.api'
import config from '@/config/app'
import httpFormAuth from 'axios'

httpFormAuth.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1/"

const actions = {
    signUp(context, userData) {

        context.commit('API_LOADING');

        // new implementation - still to test
        // authApi.registerUser(userData.email, userData.password)
        //     .then(response => {
        //        context.dispatch('signUpSuccess', { response, userData });
        //     }, error => {
        //      console.log(error);
        //      context.commit('API_ERROR', error);
        //      })
        httpFormAuth.post(
            `accounts:signUp?key=${config.appKey}`,
            {
                email: userData.email,
                password: userData.password,
                //colour: userData.colour,
                returnSecureToken: true
            }
        )
            .then(response => {
                context.dispatch('signUpSuccess', { response, userData });

            })
            .catch(error => {
                context.commit('API_ERROR', error);

            });


    },
    login(context, userData) {

        context.commit('API_LOADING');

        setTimeout(() => {
            // dev purposes
            const localDev = false;

            if (!localDev) {
                // web connection

                httpFormAuth.post(
                    `accounts:signInWithPassword?key=${config.appKey}`,
                    {
                        email: userData.email,
                        password: userData.password,
                        returnSecureToken: true
                    }
                )
                    .then(response => {
                        console.log('success')
                        console.log(response)
                        context.dispatch('loginSuccess', response);

                    })
                    .catch(error => {
                        console.log('erros')
                        context.commit('API_ERROR', error);
                    });
            }
            else {
                // offline mode - force successfull login.
                const response = {
                    data: {
                        idToken: "eyJhbGciOiJSU",
                        localId: "JzQbkF0pbgXOgECjkGYAXSeoX2",
                        expiresIn: 3600

                    }
                }
                context.dispatch('loginSuccess', response)
            }
        }, 1500);
    },
}

export default { actions }