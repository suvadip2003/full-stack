// src/components/UserManagement.js
import React from 'react';

function UserManagement({ users, selectedUser, onUserChange, newUser, onNewUserChange, onAddUser }) {
  return (
    <div className="user-management">
      {/* User Selection Dropdown */}
      <select value={selectedUser} onChange={onUserChange}>
        <option value="">Select a User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      {/* Add New User Form */}
      <input
        type="text"
        placeholder="New user name"
        value={newUser}
        onChange={onNewUserChange}
      />
      <button onClick={onAddUser} disabled={!newUser}>Add User</button>
    </div>
  );
}

export default UserManagement;