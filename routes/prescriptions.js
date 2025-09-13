const express = require('express');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const { specialization, search } = req.query;
        let query = { role: 'doctor' };
        
        if (specialization) {
            query.specialization = { $regex: specialization, $options: 'i' };
        }
        
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { specialization: { $regex: search, $options: 'i' } }
            ];
        }
        
        const doctors = await User.find(query)
            .select('-password')
            .sort({ createdAt: -1 });
            
        res.json(doctors);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get doctor profile
router.get('/:id', async (req, res) => {
    try {
        const doctor = await User.findById(req.params.id)
            .select('-password');
            
        if (!doctor || doctor.role !== 'doctor') {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        
        // Get doctor's ratings and reviews
        const appointments = await Appointment.find({
            doctorId: req.params.id,
            rating: { $exists: true }
        });
        
        const totalRatings = appointments.length;
        const averageRating = totalRatings > 0 
            ? appointments.reduce((sum, app) => sum + app.rating, 0) / totalRatings 
            : 0;
            
        const doctorProfile = {
            ...doctor.toObject(),
            totalRatings,
            averageRating: Math.round(averageRating * 10) / 10
        };
        
        res.json(doctorProfile);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update doctor profile
router.put('/profile', authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== 'doctor') {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        const { name, phone, specialization, experience, education, about } = req.body;
        
        const doctor = await User.findByIdAndUpdate(
            req.user.id,
            {
                name,
                phone,
                specialization,
                experience,
                education,
                about
            },
            { new: true, runValidators: true }
        ).select('-password');
        
        res.json(doctor);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get doctor specializations
router.get('/specializations/list', async (req, res) => {
    try {
        const specializations = await User.distinct('specialization', { role: 'doctor' });
        res.json(specializations.filter(spec => spec)); // Remove empty values
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get doctor statistics (for doctor dashboard)
router.get('/stats/dashboard', authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== 'doctor') {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        const doctorId = req.user.id;
        const today = new Date();
        const startOfToday = new Date(today.setHours(0, 0, 0, 0));
        const endOfToday = new Date(today.setHours(23, 59, 59, 999));
        
        // Today's appointments
        const todayAppointments = await Appointment.countDocuments({
            doctorId,
            date: { $gte: startOfToday, $lte: endOfToday }
        });
        
        // Total appointments
        const totalAppointments = await Appointment.countDocuments({ doctorId });
        
        // Pending appointments
        const pendingAppointments = await Appointment.countDocuments({
            doctorId,
            status: 'pending'
        });
        
        // Completed appointments
        const completedAppointments = await Appointment.countDocuments({
            doctorId,
            status: 'completed'
        });
        
        // Average rating
        const ratedAppointments = await Appointment.find({
            doctorId,
            rating: { $exists: true }
        });
        
        const averageRating = ratedAppointments.length > 0
            ? ratedAppointments.reduce((sum, app) => sum + app.rating, 0) / ratedAppointments.length
            : 0;
        
        res.json({
            todayAppointments,
            totalAppointments,
            pendingAppointments,
            completedAppointments,
            averageRating: Math.round(averageRating * 10) / 10,
            totalRatings: ratedAppointments.length
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get doctor reviews
router.get('/:id/reviews', async (req, res) => {
    try {
        const appointments = await Appointment.find({
            doctorId: req.params.id,
            rating: { $exists: true },
            review: { $exists: true }
        })
        .populate('patientId', 'name')
        .select('rating review createdAt patientId')
        .sort({ createdAt: -1 })
        .limit(10);
        
        res.json(appointments);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;