const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const ClaimHistory = require('../models/claimHistory.model');

// GET /api/users - Fetch all users [cite: 6]
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/users - Add a new user [cite: 7]
router.post('/users', async (req, res) => {
    const user = new User({ name: req.body.name });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// POST /api/claim - Claim points for a user [cite: 8, 18]
router.post('/claim', async (req, res) => {
    try {
        const { userId } = req.body;
        const randomPoints = Math.floor(Math.random() * 10) + 1; // Random points from 1 to 10 [cite: 19]

        // Update user's total points
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $inc: { totalPoints: randomPoints } },
            { new: true } // Return the updated document
        );

        // Create a history log [cite: 10]
        const historyLog = new ClaimHistory({
            userId: userId,
            pointsClaimed: randomPoints
        });
        await historyLog.save();

        res.json({ user: updatedUser, pointsAwarded: randomPoints });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/leaderboard - Get user rankings [cite: 11]
router.get('/leaderboard', async (req, res) => {
    try {
        // Fetch users and sort by total points in descending order [cite: 20]
        const users = await User.find().sort({ totalPoints: -1 });

        // Assign ranks
        const leaderboard = users.map((user, index) => ({
            rank: index + 1,
            name: user.name,
            totalPoints: user.totalPoints,
            _id: user._id
        }));

        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;