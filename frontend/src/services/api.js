import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Backend API base URL
});

// Add the JWT token to all requests
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
