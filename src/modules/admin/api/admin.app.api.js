import apiClient from "@/modules/shared/api/apiClient";

//update endpoints with correct value when APIs are available

const DEPARTMENT_END_POINT = 'departments'

const getProjectInfo = () => {
    return new Promise((resolve, reject) => {
        apiClient.get(`project`)
            .then(response => {
                console.log('admin.app.api: ', response);

                resolve(response);
            })
            .catch(error => reject(error))
    })
}
const saveProjectInfo = (project) => {
    return new Promise((resolve, reject) => {
        apiClient.put(`project`, project)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const getDepartmentDetail = (id) => {
    return new Promise((resolve, reject) => {
        apiClient.get(`${DEPARTMENT_END_POINT}/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const saveDepartment = (department) => {
    return new Promise((resolve, reject) => {
        apiClient.post(`${DEPARTMENT_END_POINT}`, department)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const updateDepartment = (department) => {
    return new Promise((resolve, reject) => {
        apiClient.put(`${DEPARTMENT_END_POINT}/${department.id}`, department)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const deleteDepartment = (department) => {
    return new Promise((resolve, reject) => {
        apiClient.delete(`${DEPARTMENT_END_POINT}/${department.id}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export default { getProjectInfo, saveProjectInfo, getDepartmentDetail, updateDepartment, saveDepartment, deleteDepartment }