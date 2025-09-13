const express = require('express');
const Appointment = require('../models/Appointment');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Book appointment
router.post('/book', authMiddleware, async (req, res) => {
    try {
        const { doctorId, date, time, symptoms, consultationType } = req.body;
        
        // Check if doctor exists
        const doctor = await User.findById(doctorId);
        if (!doctor || doctor.role !== 'doctor') {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        
        // Check if slot is available
        const existingAppointment = await Appointment.findOne({
            doctorId,
            date,
            time,
            status: { $ne: 'cancelled' }
        });
        
        if (existingAppointment) {
            return res.status(400).json({ message: 'Time slot not available' });
        }
        
        // Create appointment
        const appointment = new Appointment({
            patientId: req.user.id,
            doctorId,
            date: new Date(date),
            time,
            symptoms,
            consultationType: consultationType || 'video',
            status: 'pending'
        });
        
        await appointment.save();
        
        // Populate appointment details
        await appointment.populate([
            { path: 'patientId', select: 'name email phone' },
            { path: 'doctorId', select: 'name email specialization' }
        ]);
        
        res.status(201).json(appointment);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get patient appointments
router.get('/patient', authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== 'patient') {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        const appointments = await Appointment.find({ patientId: req.user.id })
            .populate('doctorId', 'name specialization')
            .sort({ date: -1 });
            
        res.json(appointments);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get doctor appointments
router.get('/doctor', authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== 'doctor') {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        const appointments = await Appointment.find({ doctorId: req.user.id })
            .populate('patientId', 'name email phone')
            .sort({ date: -1 });
            
        res.json(appointments);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update appointment status
router.put('/:id/status', authMiddleware, async (req, res) => {
    try {
        const { status } = req.body;
        const appointment = await Appointment.findById(req.params.id);
        
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        
        // Check authorization
        if (req.user.role === 'patient' && appointment.patientId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        if (req.user.role === 'doctor' && appointment.doctorId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        appointment.status = status;
        await appointment.save();
        
        res.json(appointment);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get appointment details
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate('patientId', 'name email phone')
            .populate('doctorId', 'name email specialization');
            
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        
        // Check authorization
        if (appointment.patientId._id.toString() !== req.user.id && 
            appointment.doctorId._id.toString() !== req.user.id &&
            req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        res.json(appointment);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add consultation notes
router.put('/:id/notes', authMiddleware, async (req, res) => {
    try {
        const { consultationNotes } = req.body;
        const appointment = await Appointment.findById(req.params.id);
        
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        
        // Only doctor can add consultation notes
        if (req.user.role !== 'doctor' || appointment.doctorId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' });
        }
        
        appointment.consultationNotes = consultationNotes;
        appointment.status = 'completed';
        await appointment.save();
        
        res.json(appointment);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get available time slots
router.get('/slots/:doctorId/:date', async (req, res) => {
    try {
        const { doctorId, date } = req.params;
        
        // Get booked appointments for the date
        const bookedSlots = await Appointment.find({
            doctorId,
            date: new Date(date),
            status: { $ne: 'cancelled' }
        }).select('time');
        
        const bookedTimes = bookedSlots.map(slot => slot.time);
        
        // Available time slots (9 AM to 5 PM)
        const allSlots = [
            '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
            '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
            '16:00', '16:30', '17:00'
        ];
        
        const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));
        
        res.json(availableSlots);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;