import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginError, setLoginError] = useState("");
  const [user, setUser] = useState(null);


  
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
  };
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
    setLoginError("");


    if (!validateUsername(username)) {
      setUsernameError('Username is required');
      return;
    }

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
    // axios
    //   .post("http://localhost:3000/createUser", {
    //     username,
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     //
    //     const { username } = response.data;
    //     setUser(username);
    //     console.log(response);

    //     if (response.data.isAuthenticated) {
    //       alert("Logged in successfully");
    //       navigate("/dashboard");
    //     } else {
    //       alert("Unauthorized user"); // Show error message for unauthorized user
    //       }
    //   })
    //   .catch((error) => {
    //     // Check if the error is due to unauthorized access (401 status code)
    //     if (error.response && error.response.status === 401) {
    //       // Handle unauthorized access
    //       alert("Unauthorized user, Kindly register and try for login");
    //       setUsername('');
    //       setEmail('');
    //       setPassword('');
    //       //
    //       // setLoginError("Invalid email or password");
    //     } else {
    //       // Handle other errors
    //       console.error(error);
    //       alert("An error occurred. Please try again later.");
    //     }
    //   });


    axios.post("http://localhost:3000/createUser", {
      username,
      email,
      password
    })
    .then((response) => {

      const userData = response.data; // Assuming response.data contains user information
      localStorage.setItem("user", JSON.stringify(userData));

      console.log(response);
      // alert("Loggedin successfully");
      // navigate("/dashboard", { state: { username: response.data.username } }); // Pass the username to the home page
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        setLoginError('');
        // alert("Email already exists");
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        console.error(error);
        // Handle other errors
      }
    });

    axios.get("http://localhost:3000/adminRegisterData")
    .then((response) => {
      const registerData = response.data;
      const userExists = registerData.some(data => data.username === username && data.email === email && data.password === password);
      
      if (userExists) {
        alert("Logged in successfully");
        navigate("/dashboard", { state: { username } });
      } else {
        setLoginError("Unauthorized user. Kindly register.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred. Please try again later.");
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
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <div className="error">{usernameError}</div>
          </div>

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
              <Link to="/adminpasswordreset">Forgot password?</Link>
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

            <div className="error">{loginError}</div>

          
            <br />
            <h5 className="text-center text-white">or</h5>
            <br />
            <Link
              to="/registerr"
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
