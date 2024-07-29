import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Navbar = ({ userName }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/signup', { state: { showToast: true } });
  };

  return (
    <header className="header">
      <div className="welcome-message">Welcome, {userName}</div>
      <div className="header-right">
        <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Attach handleLogout */}
      </div>
    </header>
  );
};

export default Navbar;
