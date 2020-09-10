import axios from 'axios'


const httpClient = axios.create({
    baseURL: 'http://localhost:3001/',//todo: use .ENV variables.
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",

    }
});


export default httpClient;

