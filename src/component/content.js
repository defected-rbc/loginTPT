import React from 'react';

const Content = () => {
  const users = [
    { id: 1, name: 'John Doe', details: 'Some details about John' },
    { id: 2, name: 'Jane Smith', details: 'Some details about Jane' },
    // Add more users as needed
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
