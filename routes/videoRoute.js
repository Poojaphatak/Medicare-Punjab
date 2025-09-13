const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// 100ms configuration
const HMS_APP_ACCESS_KEY = process.env.HMS_APP_ACCESS_KEY || 'your_app_access_key';
const HMS_APP_SECRET = process.env.HMS_APP_SECRET || 'your_app_secret';
const HMS_ROOM_ID = process.env.HMS_ROOM_ID || 'your_room_id';

// Generate auth token for 100ms
router.post('/token', async (req, res) => {
    try {
        const { user_id, role } = req.body;
        
        if (!user_id || !role) {
            return res.status(400).json({ error: 'user_id and role are required' });
        }

        // Create JWT payload for 100ms
        const payload = {
            access_key: HMS_APP_ACCESS_KEY,
            room_id: HMS_ROOM_ID,
            user_id: user_id,
            role: role, // 'patient' or 'doctor'
            type: 'app',
            version: 2,
            iat: Math.floor(Date.now() / 1000),
            nbf: Math.floor(Date.now() / 1000)
        };

        // Sign the token
        const token = jwt.sign(payload, HMS_APP_SECRET, {
            algorithm: 'HS256',
            expiresIn: '24h',
            jwtid: user_id
        });

        res.json({ 
            token,
            room_id: HMS_ROOM_ID,
            user_id 
        });

    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({ error: 'Failed to generate token' });
    }
});

// Get room details
router.get('/room/:roomId', async (req, res) => {
    try {
        // In a real implementation, you would fetch room details from 100ms API
        res.json({
            room_id: req.params.roomId,
            status: 'active'
        });
    } catch (error) {
        console.error('Error fetching room details:', error);
        res.status(500).json({ error: 'Failed to fetch room details' });
    }
});

module.exports = router;