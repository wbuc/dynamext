// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = '/users.json'




const saveUser = (state, user) => {
    return new Promise((resolve, reject) => {
        console.log(state)
        httpClient.post(`${END_POINT}?auth=${state.idToken}`, user)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })

}
const getUser = (state, user) => {
    console.log('stub message: ', user)
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}?auth=${state.idToken}`)
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}
const getUsers = (state) => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}?auth=${state.idToken}`)
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}

// TESTING ONLY ***
const testUserAPI = (context) => {

    return new Promise((resolve, reject) => {
        console.log('User api param: ', context);

        setTimeout(() => {
            let t = true;
            if (t) resolve('Api test complete!')
            if (!t) reject(Error('It broke!'))
        }, 2000)
    })
}



export default { saveUser, getUsers, getUser, testUserAPI }