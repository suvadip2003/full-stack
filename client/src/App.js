// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Leaderboard from './components/Leaderboard';
import UserManagement from './components/UserManagement';
import './App.css';

// Set the base URL for our backend API
const API_URL = 'http://localhost:5000/api';

function App() {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newUser, setNewUser] = useState('');
  const [lastClaim, setLastClaim] = useState(null);

  // Function to fetch all data (users and leaderboard)
  const fetchData = async () => {
    try {
      const usersRes = await axios.get(`${API_URL}/users`);
      setUsers(usersRes.data);

      const leaderboardRes = await axios.get(`${API_URL}/leaderboard`);
      setLeaderboard(leaderboardRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch initial data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handler for adding a new user
  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    try {
      await axios.post(`${API_URL}/users`, { name: newUser });
      setNewUser(''); // Clear input field
      fetchData(); // Refresh data
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. The name might already exist.');
    }
  };

  // Handler for the "Claim Points" button
  const handleClaimPoints = async () => {
    if (!selectedUser) {
      alert('Please select a user first!');
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/claim`, { userId: selectedUser });
      // Display the assigned random points [cite: 30]
      setLastClaim(`Awarded ${res.data.pointsAwarded} points to ${res.data.user.name}!`);
      // The leaderboard updates automatically when the user claims points [cite: 34]
      fetchData(); // Refresh data to show new rankings
    } catch (error) {
      console.error('Error claiming points:', error);
    }
  };

  return (
    <div className="App">
      <h1>Leaderboard Challenge</h1>

      <UserManagement
        users={users}
        selectedUser={selectedUser}
        onUserChange={e => setSelectedUser(e.target.value)}
        newUser={newUser}
        onNewUserChange={e => setNewUser(e.target.value)}
        onAddUser={handleAddUser}
      />

      {/* Claim Button and Message */}
      <div className="controls">
        <button onClick={handleClaimPoints} disabled={!selectedUser}>
          Claim Points
        </button>
      </div>
      {lastClaim && <p>{lastClaim}</p>}

      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;