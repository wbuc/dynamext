// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'schedules'


const getForm = (id) => {
    console.log("Get Form: ", id);
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

const getPublishedForms = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}?status=published`)
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

const saveFormDefinition = (form) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${END_POINT}`, form)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const updateFormDefinition = (form) => {
    return new Promise((resolve, reject) => {
        httpClient.put(`${END_POINT}/${form.id}`, form)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export default {
    getForm,
    getAllForms,
    getPublishedForms,
    getFormDefinition,
    saveFormDefinition,
    updateFormDefinition,
    deleteFormDefinition
}