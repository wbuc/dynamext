import httpClient from './httpClient'

const END_POINT = '/users.json'



const getAllUsers = () => httpClient.get(END_POINT);

const getUser = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(END_POINT)
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}

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



export default { getAllUsers, getUser, testUserAPI }