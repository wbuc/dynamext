// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'schedules'


const getSchedule = (id) => {
    console.log("Get Schedule: ", id);
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}/${id}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}

const getAllForms = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}


const deleteFormDefinition = (id) => {
    return new Promise((resolve, reject) => {
        httpClient.delete(`${END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


const getFormDefinition = (id) => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


const saveFormDefinition = (schedule) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${END_POINT}`, schedule)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}



export default { getSchedule, getAllForms, getFormDefinition, saveFormDefinition, deleteFormDefinition }