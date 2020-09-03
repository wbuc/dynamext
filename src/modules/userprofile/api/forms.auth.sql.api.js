import config from '@/config/app'
import httpClient from 'axios'

httpClient.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1/"

const END_POINT = 'accounts'

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${END_POINT}:signInWithPassword?key=${config.appKey}`, {
            email: email,
            password: password,
            returnSecureToken: true
        }).then(response => {
            resolve(response)
        }).catch(error => reject(error));

    })
};

const registerUser = (email, password) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${END_POINT}:signUp?key=${config.appKey}`, {
            email: email,
            password: password,
            returnSecureToken: true
        }).then(response => {
            console.log('register complete:', response)
            resolve(response)
        }).catch(error => reject(error));

    })

};

export default { loginUser, registerUser }