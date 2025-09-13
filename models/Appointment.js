const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    consultationType: {
        type: String,
        enum: ['video', 'chat', 'phone'],
        default: 'video'
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
        default: 'pending'
    },
    consultationNotes: {
        type: String,
        default: ''
    },
    // Video consultation details
    roomId: {
        type: String,
        default: ''
    },
    meetingLink: {
        type: String,
        default: ''
    },
    // Rating and review
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        maxlength: 500
    },
    // Payment details
    consultationFee: {
        type: Number,
        default: 0
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentId: {
        type: String,
        default: ''
    },
    // Follow-up
    isFollowUp: {
        type: Boolean,
        default: false
    },
    originalAppointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }
}, {
    timestamps: true
});

// Index for efficient queries
appointmentSchema.index({ patientId: 1, date: -1 });
appointmentSchema.index({ doctorId: 1, date: -1 });
appointmentSchema.index({ date: 1, time: 1, doctorId: 1 });

module.exports = mongoose.model('Appointment', appointmentSchema);