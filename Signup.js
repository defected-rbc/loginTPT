import React, { useState } from 'react';
import './Signup.css';

import user_icon from './Assets/person.jpeg';
import email_icon from './Assets/e-mail.jpeg';
import password_icon from './Assets/password.jpeg';

const Signup = () => {
  const [action, setAction] = useState("Sign Up");

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
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
      </div>
    </div>
  );
}

export default Signup;