// import store from './store/index'
import httpClient from './httpClient'

const END_POINT = 'filerooms'

const getTreeviewDefinition = () => {
    return new Promise((resolve, reject) => {
        console.log('1.3')
        httpClient.get(`${END_POINT}`)
            .then(response => { resolve(response); console.log('1.7') })
            .catch(error => reject(error))
    })
}


export default { getTreeviewDefinition, }