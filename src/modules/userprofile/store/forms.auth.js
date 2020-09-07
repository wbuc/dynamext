//import authApi from '@/modules/userprofile/api/forms.auth.api'
import authApiSQL from '@/modules/userprofile/api/forms.auth.sql.api'

const actions = {
    signUp(context, userData) {

        context.commit('API_LOADING');

        authApiSQL.registerUser(userData.email, userData.password)
            .then(response => {
                console.log('new register done ', response.data)
                context.dispatch('signUpSuccess', { data: response.data, userData });
            }, error => {
                console.log(error);
                context.commit('API_ERROR', error);
            });

    },
    login(context, userData) {

        context.commit('API_LOADING');
        // use timeout to show loaders.
        setTimeout(() => {
            // dev purposes
            const localDev = false;

            if (!localDev) {
                // web connection
                authApiSQL.loginUser(userData.email, userData.password)
                    .then(data => {
                        console.log(data);
                        context.dispatch('loginSuccess', data);
                    }, error => {
                        context.commit('API_ERROR', error);
                    });
            }
            else {
                // offline mode - force successfull login.
                const response = {
                    data: {
                        //idToken: "eyJhbGciOiJSU",
                        userId: '12345',
                        localId: "JzQbkF0pbgXOgECjkGYAXSeoX2",
                        expiresIn: 3600

                    }
                }
                context.dispatch('loginSuccess', response)
            }
        }, 1);
    },
}

export default { actions }