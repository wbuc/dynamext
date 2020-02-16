import axios from 'axios'


const httpClient = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',//todo: use .ENV variables.
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",

    }
});

export default httpClient;

