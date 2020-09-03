import httpClient from './httpClient'

//update endpoints with correct value when APIs are available
const PROJECT_END_POINT = 'project'
const DEPARTMENT_END_POINT = 'departments'

const getProjectInfo = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${PROJECT_END_POINT}`)
            .then(response => {
                console.log('admin.app.api: ', response);

                resolve(response);
            })
            .catch(error => reject(error))
    })
}
const saveProjectInfo = (project) => {
    return new Promise((resolve, reject) => {
        httpClient.put(`${PROJECT_END_POINT}`, project)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const getDepartmentDetail = (id) => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${DEPARTMENT_END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const saveDepartment = (department) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${DEPARTMENT_END_POINT}`, department)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const updateDepartment = (department) => {
    return new Promise((resolve, reject) => {
        httpClient.put(`${DEPARTMENT_END_POINT}/${department.id}`, department)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const deleteDepartment = (department) => {
    return new Promise((resolve, reject) => {
        httpClient.delete(`${DEPARTMENT_END_POINT}/${department.id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export default { getProjectInfo, saveProjectInfo, getDepartmentDetail, updateDepartment, saveDepartment, deleteDepartment }