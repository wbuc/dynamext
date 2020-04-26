// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'documentSchedules'



const saveForm = (form) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${END_POINT}`, form)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const test1 = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}



export default { test1, saveForm }