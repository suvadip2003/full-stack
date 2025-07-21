const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies
app.use('/api', apiRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/leaderboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
  process.exit();
});

// A simple test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Leaderboard API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});