import React from 'react';

const Content = () => {
  const users = [
    { id: 1, name: 'Arunima', details: 'Sign in' },
    { id: 2, name: 'Anuj', details: 'Git' },
    { id: 3, name: 'Geetika', details: 'Dashboard' },
    { id: 4, name: 'Gunjan', details: 'Integrate, Toastify' },
    { id: 5, name: 'Kiran', details: 'Login' },
    
  ];

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className="user-name">{user.name}</div>
            <div className="user-details">{user.details}</div>
            <button className="view-profile-button">View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
