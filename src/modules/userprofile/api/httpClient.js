import axios from 'axios'


const httpClient = axios.create({
    baseURL: 'https://dynamext-1a064.firebaseio.com/',//todo: use .ENV variables.
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",

    }
});


export default httpClient;

