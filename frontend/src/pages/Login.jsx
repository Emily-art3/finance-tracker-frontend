import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/form.css';  

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/api/login", formData);
        console.log("Login response:", response.data);

        if (response.data.access_token && response.data.user_id) {
            const userData = JSON.stringify({
                user_id: response.data.user_id,
                access_token: response.data.access_token
            });

            try {
                localStorage.setItem("user", userData);
            } catch (error) {
                console.warn("localStorage not available. Using sessionStorage.");
                sessionStorage.setItem("user", userData);
            }

            console.log("Token and User ID saved:", response.data.access_token, response.data.user_id);
            navigate("/transactions");
        } else {
            console.error("No token received!");
            alert("Login failed: No token received.");
        }
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Login failed: " + (error.response?.data?.error || "Unknown error"));
    }
};


  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="button">Login</button>
        </form>
        <div className="form-link">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
