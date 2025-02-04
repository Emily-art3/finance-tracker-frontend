import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
    let storedUser = null;
    
    try {
        storedUser = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
    } catch (error) {
        console.error("Error accessing storage:", error);
    }
    
    const token = storedUser?.access_token;
    
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    } else {
        console.error("No token found in localStorage or sessionStorage!");
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
