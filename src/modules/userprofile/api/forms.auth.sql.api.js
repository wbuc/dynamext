// import config from '@/config/app'
import httpClient from 'axios'

//httpClient.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1/"

httpClient.defaults.baseURL = 'http://localhost:3001/'

// const END_POINT = 'accounts'

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`login`, {
            email: email,
            password: password
        }).then(response => {
            resolve(response.data)
        }).catch(error => reject(error));

    })
};

const registerUser = (email, password) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`signup`, {
            email: email,
            password: password
        }).then(response => {
            console.log('register complete:', response)
            resolve(response)
        }).catch(error => reject(error));

    })

};

export default { loginUser, registerUser }