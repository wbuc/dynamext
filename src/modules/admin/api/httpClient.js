import axios from 'axios'
import presets from '@/config/presets.js'

const httpClient = axios.create({
    baseURL: presets.userStoreURL,//todo: use .ENV variables.
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",

    }
});

export default httpClient;

