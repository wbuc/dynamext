
import config from '@/config/app'
import httpClient from '@/plugins/httpClient'

//"accounts:signUp?key=AIzaSyC0VzYpjH9C85MpbrosplXLAdz1nMhjuxU",
const actions = {
    signUp(context, userData) {

        context.commit('API_LOADING');
        httpClient.post(
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
            httpClient.post(
                `accounts:signInWithPassword?key=${config.appKey}`,
                {
                    email: userData.email,
                    password: userData.password,
                    returnSecureToken: true
                }
            )
                .then(response => {
                    context.dispatch('loginSuccess', response);

                })
                .catch(error => {
                    context.commit('API_ERROR', error);
                });
        }, 1500);

    },

}

export default { actions }