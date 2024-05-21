// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import './register.css'; // Assuming you have a CSS file for styling
// import axios from "axios";

// function Register() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number
//     const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return regex.test(password);
//   };

//   const Submit = (e) => {
//     e.preventDefault();
//     // setUsernameError('');
//     // setEmailError('');
//     // setPasswordError('');
//     // setConfirmPasswordError('');

//      // Submit the form data to your backend using axios
//      axios.post("http://localhost:3000/createRegisterData", {
//         username,
//         email,
//         password,
//         confirmPassword
//       })
//         .then((response) => {
//           console.log(response);
//           alert("Registered successfully");
//           navigate("/");
//         })
//         .catch((error) => {
//           console.error(error);
//           // Handle errors
//         });

//     if (!username.trim()) {
//       setUsernameError('Username is required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       return;
//     }

  
//   };

//   return (
//     <div>
//       <div className="register py-5" style={{ minHeight: '100vh' }}>
//         <br />
//         <br />
//         <div className="register-form my-5 w-25 rounded-3 mx-auto p-4">
//           <form>
//             <h2 className='text-white text-center'>Registration Form</h2><br />
//             <div>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder='Enter username'
//               />
//               <div className="error">{usernameError}</div>
//             </div>
//             <br />
//             <div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='Enter email address'
//               />
//               <div className="error">{emailError}</div>
//             </div>
//             <br />
//             <div>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder='Create password'
//               />
//               <div className="error">{passwordError}</div>
//             </div>
//             <br />
//             <div>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder='Confirm password'
//               />
//               <div className="error">{confirmPasswordError}</div>
//             </div>
//             <br />
//             {/* <Link to="/login" className='btn btn-secondary w-100'>Login</Link> */}
//             <br />
//             <br />
//             <button onClick={Submit} type="button" className='btn btn-primary w-100'>Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import './register.css';
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');


//   const validateUsername = (username) => {
//     // Username must not be empty and should contain only alphanumeric characters
//     const regex = /^[a-zA-Z0-9]+$/;
//     // return username.trim() !== '' && regex.test(username);
//     return regex.test(username);
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number
//     const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return regex.test(password);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError('');
//     setPasswordError('');
//     setConfirmPasswordError('');

//     if (!validateUsername(username)) {
//   setUsernameError('Username is required');
//   return;
// }

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError(
//         'Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number'
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       return;
//     }

//     axios.post("http://localhost:3000/createRegisterData", {
//               username,
//               email,
//               password,
//               confirmPassword
//             })
//               .then((response) => {
//                 console.log(response);
//                 alert("Registered successfully");
//                 navigate("/");
//               })
//               .catch((error) => {
//                 console.error(error);
//                 // Handle errors
//               });
//   };

//   return (
//     <div className="register py-5" style={{ minHeight: '100vh' }}>
//       <br />
//       <div className="register-form my-5 w-25 rounded-3 mx-auto p-4">
       
//         <form onSubmit={handleSubmit}>
//         <h2 className='text-white text-center'>Registration Form</h2><br />
//           <div>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter username"
//             />
//             <div className="error">{usernameError}</div>
//           </div>
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email address"
//             />
//             <div className="error">{emailError}</div>
//           </div>
//           <div>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//             />
//             <div className="error">{passwordError}</div>
//           </div>
//           <div>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm password"
//             />
//             <div className="error">{confirmPasswordError}</div>
//           </div>
//           <button type="submit"
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           >Register</button>
//         </form>
//         <div className="auth-links">
//           {/* <Link to="/login">Login</Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };
              
//    export default Register;








// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import './register.css';
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [registrationError, setRegistrationError] = useState('');

//   const validateUsername = (username) => {
//     const regex = /^[a-zA-Z0-9]+$/;
//     return regex.test(username);
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return regex.test(password);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError('');
//     setPasswordError('');
//     setConfirmPasswordError('');
//     setRegistrationError('');

//     if (!validateUsername(username)) {
//       setUsernameError('Username is required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError(
//         'Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number'
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       return;
//     }

//     axios.post("http://localhost:3000/createRegisterData", {
//       username,
//       email,
//       password,
//       confirmPassword
//     })
//     .then((response) => {
//       console.log(response);
//       alert("Registered successfully");
//       navigate("/");
//     })
//     .catch((error) => {
//       if (error.response && error.response.status === 409) {
//         setRegistrationError('');
//         alert("Email already exists");
//         setUsername('');
//             setEmail('');
//             setPassword('');
//             setConfirmPassword('');
//       } else {
//         console.error(error);
//         // Handle other errors
//       }
//     });
//   };

//   return (
//     <div className="register py-5" style={{ minHeight: '100vh' }}>
//       <br />
//       <div className="register-form my-5 w-25 rounded-3 mx-auto p-4">
//         <form onSubmit={handleSubmit}>
//           <h2 className='text-white text-center'>Registration Form</h2><br />
//           <div>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter username"
//             />
//             <div className="error">{usernameError}</div>
//           </div>
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email address"
//             />
//             <div className="error">{emailError}</div>
//           </div>
//           <div>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//             />
//             <div className="error">{passwordError}</div>
//           </div>
//           <div>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm password"
//             />
//             <div className="error">{confirmPasswordError}</div>
//           </div>
//           <button 
//             type="submit" 
//             style={{ background: "#5a8077", borderRadius: "5px" }}
//           >
//             Register
//           </button>
//           <div className="error">{registrationError}</div>
//         </form>
//         <div className="auth-links">
//           {/* <Link to="/login">Login</Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './register.css';
import axios from "axios";

const Register = () => {
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
    const regex = /^[a-zA-Z0-9]+$/;
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

    axios.post("http://localhost:3000/createRegisterData", {
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

export default Register;
