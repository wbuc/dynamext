// import store from './store/index'
import apiClient from "@/modules/shared/api/apiClient";


const DESIGNER_END_POINT = 'designer'


const getForm = (id) => {
    console.log("Get Form: ", id);
    return new Promise((resolve, reject) => {
        apiClient.get(`${DESIGNER_END_POINT}/${id}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}

const getAllForms = () => {
    return new Promise((resolve, reject) => {
        apiClient.get(`${DESIGNER_END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}

const getPublishedForms = () => {
    return new Promise((resolve, reject) => {
        apiClient.get(`${DESIGNER_END_POINT}?status=published`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}
const deleteFormDefinition = (id) => {
    return new Promise((resolve, reject) => {
        apiClient.delete(`${DESIGNER_END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const getFormDefinition = (id) => {
    return new Promise((resolve, reject) => {
        apiClient.get(`${DESIGNER_END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const saveFormDefinition = (form) => {
    return new Promise((resolve, reject) => {
        apiClient.post(`${DESIGNER_END_POINT}`, form)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const updateFormDefinition = (form) => {
    return new Promise((resolve, reject) => {
        apiClient.put(`${DESIGNER_END_POINT}/${form.id}`, form)
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