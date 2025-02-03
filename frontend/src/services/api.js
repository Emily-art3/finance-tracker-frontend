import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000", 
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Response error:", error.response.data);
      if (error.response.status === 401) {
        window.location.href = "/login";
      }
    } else {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;
