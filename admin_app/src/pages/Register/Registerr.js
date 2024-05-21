import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './registerr.css';
import axios from "axios";

const Registerr = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const validateUsername = (username) => {
    // const regex = /^[a-zA-Z0-9]+$/;
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(username);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setRegistrationError('');

    if (!validateUsername(username)) {
      setUsernameError('Username is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number'
      );
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    axios.post("http://localhost:3000/createAdminRegisterData", {
      username,
      email,
      password,
      confirmPassword
    })
    .then((response) => {
      console.log(response);
      alert("Registered successfully");
      navigate("/", { state: { username: response.data.username } }); // Pass the username to the home page
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        setRegistrationError('');
        alert("Email already exists");
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        console.error(error);
        // Handle other errors
      }
    });
  };

  return (
    <div className="register py-5" style={{ minHeight: '100vh' }}>
      <br />
      <div className="register-form my-5 w-25 rounded-3 mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <h2 className='text-white text-center'>Registration Form</h2><br />
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <div className="error">{usernameError}</div>
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
            <div className="error">{emailError}</div>
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <div className="error">{passwordError}</div>
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
            <div className="error">{confirmPasswordError}</div>
          </div>
          <button 
            type="submit" 
            style={{ background: "#5a8077", borderRadius: "5px" }}
          >
            Register
          </button>
          <div className="error">{registrationError}</div>
        </form>
        <div className="auth-links">
          {/* <Link to="/login">Login</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Registerr;