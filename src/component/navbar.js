import React from 'react';

const Navbar = ({ userName }) => {
  return (
    <header className="header">
      <div className="welcome-message">Welcome, {userName}</div>
      <div className="header-right">
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
