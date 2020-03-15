import httpClient from './httpClient'

const END_POINT = '/users.json'


const getUsers = (state) => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}?auth=${state.idToken}`)
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}


export default { getUsers }