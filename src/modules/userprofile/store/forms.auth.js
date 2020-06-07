import authApi from '@/modules/userprofile/api/forms.auth.api'

const actions = {
    signUp(context, userData) {

        context.commit('API_LOADING');

        authApi.registerUser(userData.email, userData.password)
            .then(response => {
                console.log('new register done ', response)
                context.dispatch('signUpSuccess', { response, userData });
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
                authApi.loginUser(userData.email, userData.password)
                    .then(response => {
                        context.dispatch('loginSuccess', response);
                    }, error => {
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