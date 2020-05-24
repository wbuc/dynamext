import axios from 'axios'
import presets from '@/config/presets.js'

const httpClient = axios.create({
    baseURL: presets.baseURL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",

    }
});

export default httpClient;

