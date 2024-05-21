import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    // Submit the form data to your backend using axios
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.isAuthenticated) {
          alert("Logged in successfully");
          navigate("/listscomponents");
        } else {
          // alert("Unauthorized user");
        }
      })
      .catch((error) => {
        console.error(error);
        // alert("An error occurred. Please try again later.");
        alert("Unauthorized user, Kindly register and try for login");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div>
      <div className="login py-5" style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <div className="loginform my-5 w-25 rounded-3 mx-auto p-4">
          <form onSubmit={handleSubmit}>
            <h2 className="text-white text-center">Login Form</h2>
            <br />
            <div>
              {/* <label>Email:</label> */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
              <div className="error">{emailError}</div>
            </div>
            <br />
            <div>
              {/* <label>Password:</label> */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <div className="error">{passwordError}</div>
            </div>

            <br />

            <div className="forgot-password  mt-3 text-end">
              <Link to="/passwordreset">Forgot password?</Link>
            </div>

            <Link
              to="/listcomponents"
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </Link>

            <br />
            <br />
            <h5 className="text-center text-white">or</h5>
            <br />
            <Link
              to="/register"
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
            >
              Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
