import httpClient from './httpClient'

//update endpoints with correct value when APIs are available
const END_POINT = 'appdata'


const getProjectInfo = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}/project`)
            .then(response => {
                console.log('admin.app.api: ', response);

                resolve(response);
            })
            .catch(error => reject(error))
    })
}
const saveProjectInfo = (project) => {
    return new Promise((resolve, reject) => {
        httpClient.put(`${END_POINT}/project`, project)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

const saveNewDepartment = (department) => {
    return new Promise((resolve, reject) => {
        httpClient.post(`${END_POINT}/departments`, department)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}
const updateDepartment = (department) => {
    return new Promise((resolve, reject) => {
        httpClient.put(`${END_POINT}/departments/${department.id}`, department)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


export default { getProjectInfo, saveProjectInfo, updateDepartment, saveNewDepartment }