// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'schedules'


const getAllSchedules = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}



export default { getAllSchedules }