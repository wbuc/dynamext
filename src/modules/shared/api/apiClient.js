import axios from "axios";
import config from "@/config/app";

const apiClient = axios.create({
  baseURL: config.baseURL, //todo: use .ENV variables.
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export default apiClient;

