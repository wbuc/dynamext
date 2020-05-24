import httpClient from './httpClient'

const END_POINT = 'project'


const getProjectInfo = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}


export default { getProjectInfo }