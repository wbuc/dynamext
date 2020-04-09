// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'filerooms'


const getTreeviewDefinition = () => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}

const getTreeNodeDetail = (id) => {
    return new Promise((resolve, reject) => {
        httpClient.get(`${END_POINT}/${id}`)
            .then(response => { resolve(response); })
            .catch(error => reject(error))
    })
}


export default { getTreeviewDefinition, getTreeNodeDetail }