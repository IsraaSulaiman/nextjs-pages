import axios from "axios";
import { cookieManager } from "./auth";

const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const TK = cookieManager.get("TK");
    if (TK && !config.headers.TK) {
      config.headers.Authorization = 'Bearer ' + TK;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// interceptor to retry failed req

// interceptor to handle certain error codes

// interceptor to refresh token when expired

export default instance;
