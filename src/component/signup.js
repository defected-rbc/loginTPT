import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { useLocation } from 'react-router-dom'

import user_icon from './Assets/person.jpeg';
import email_icon from './Assets/e-mail.jpeg';
import password_icon from './Assets/password.jpeg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.showToast) {
      toast.success('You have logged out successfully!');
    }
  }, [location.state]);

  const handleLoginClick = () => {
    if (action === "Login") {
      // Navigate to the dashboard with state to show the toast
      navigate('/dashboard', { state: { showToast: true } });
    } else {
      setAction("Login");
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder='Name' />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forget-password">Lost Password ?<span>Click Here!</span></div>
      )}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLoginClick}>Login</div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
