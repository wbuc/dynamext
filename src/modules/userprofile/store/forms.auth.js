
import config from '@/config/app'
import httpFormAuth from 'axios'

httpFormAuth.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1/"

const actions = {
    signUp(context, userData) {

        context.commit('API_LOADING');
        httpFormAuth.post(
            `accounts:signUp?key=${config.appKey}`,
            {
                email: userData.email,
                password: userData.password,
                colour: userData.colour,
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
                    context.dispatch('loginSuccess', response);

                })
                .catch(error => {
                    console.log('erros')
                    context.commit('API_ERROR', error);
                });
        }, 1500);

    },

}

export default { actions }