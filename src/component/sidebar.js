import React from 'react';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
