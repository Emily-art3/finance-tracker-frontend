import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/form.css';

const Signup = () => {
  const navigate = useNavigate();
  // Change initial state to use 'username' instead of 'name'
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", formData);
      alert("Signup successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      alert("Signup failed: " + (error.response?.data?.error || "Unknown error"));
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Change name="name" to name="username" */}
          <input
            type="text"
            name="username"
            className="input-field"
            placeholder="Enter your username"
            onChange={handleChange}
            required
          />
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
            placeholder="Create a password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="button">Sign Up</button>
        </form>
        <div className="form-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;