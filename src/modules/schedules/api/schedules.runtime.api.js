// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'schedules'


const test1 = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}


const test2 = (id) => {
    return new Promise((resolve, reject) => {
        httpClient.delete(`${END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}



export default { test1, test2 }