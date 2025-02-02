import axios from "axios";

// Create an instance of axios with a base URL for the backend
const API = axios.create({
    baseURL: "http://localhost:5000", // Your backend API base URL
});

// Add the JWT token to all requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to headers
    }
    return config;
  },
  (error) => {
    // Handle request error here
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Intercept any responses to handle errors globally
API.interceptors.response.use(
  (response) => {
    // Handle successful response here
    return response;
  },
  (error) => {
    // Handle error responses
    if (error.response) {
      // Server responded with a status code outside of 2xx range
      console.error("Response error:", error.response.data);
      // Example: Redirect to login if unauthorized (401)
      if (error.response.status === 401) {
        // Redirect user to login page
        window.location.href = "/login";
      }
    } else {
      // Network or other errors
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;
