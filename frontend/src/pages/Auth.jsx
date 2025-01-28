import API from "../services/api";

const login = async (email, password) => {
    try {
        const response = await API.post("/auth/login", { email, password });
        localStorage.setItem("token", response.data.token); // Save the token
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};
