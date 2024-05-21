import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminpasswordreset.css'

function AdminpasswordReset() {
  const navigate = useNavigate();

 

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleVerifyEmail = async () => {
    if (validateEmail(email)) {
      try {
        const response = await axios.post('http://localhost:3000/adminvalidateEmail', { email });
        if (response.data.isValid) {
          setEmailError('');
          setIsEmailVerified(true);
          alert('Email is valid!');
        } else {
          setEmailError('Email not registered');
          setIsEmailVerified(false);
        }
      } catch (error) {
        console.error('Error:', error);
        // setEmailError('Failed to verify enter valid email');
        alert('Failed to verify enter valid email');
        setIsEmailVerified(false);
      }
    } else {
      alert('Please enter a valid email address');
      setIsEmailVerified(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailVerified) {
      if (newPassword !== confirmNewPassword) {
        setPasswordError('Passwords do not match');
      } else if (!validatePassword(newPassword)) {
        setPasswordError('Password must be at least 8 characters long');
      } else {
        try {
          const response = await axios.put('http://localhost:3000/adminresetPassword', {
            email: email,
            newPassword: newPassword,
          });
          if (response.data.message === 'Password updated successfully') {
            setPasswordError('');
            alert('Password changed successfully!');
            navigate('/');
          } else {
            throw new Error('Failed to change password');
          }
        } catch (error) {
          console.error('Error:', error);
          setPasswordError('Failed to change password');
        }
      }
    } else {
      alert('Please verify your email first');
    }
  };



  return (
    <div className="password-reset py-5" style={{ minHeight: '100vh' }}>
    <br />
    <br />
    <br />
    <br />
    <div className="my-5 w-25 rounded-3 mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <h1 className='text-white text-center'>Password Reset</h1><br />
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />

          <br />
          <br />

          { !isEmailVerified && 
            <button type="button" className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5' 
            style={{background: "#5a8077" , borderRadius: "5px"}}
            onClick={handleVerifyEmail}>Verify Email</button>
          }

          {emailError && <div className="error">{emailError}</div>}
        </div>
        <br />
        {isEmailVerified && (
          <>
            <div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='New Password'
              />
            </div>
            <br />
            <div>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder='Confirm Password'
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <br />
            <button
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
            >
              Reset Password
            </button>
          </>
        )}
      </form>
    </div>
  </div>
);
}

export default AdminpasswordReset;
