const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        default: ''
    }
});

const prescriptionSchema = new mongoose.Schema({
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    prescriptionNumber: {
        type: String,
        unique: true,
        required: true
    },
    medications: [medicationSchema],
    diagnosis: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        default: ''
    },
    // Digital signature
    digitalSignature: {
        type: String,
        default: ''
    },
    // Validity
    validUntil: {
        type: Date,
        default: function() {
            return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
        }
    },
    // Status
    isActive: {
        type: Boolean,
        default: true
    },
    // Usage tracking
    dispensedAt: [{
        pharmacy: String,
        date: Date,
        medications: [String]
    }]
}, {
    timestamps: true
});

// Index for efficient queries
prescriptionSchema.index({ patientId: 1, createdAt: -1 });
prescriptionSchema.index({ doctorId: 1, createdAt: -1 });
prescriptionSchema.index({ prescriptionNumber: 1 });

module.exports = mongoose.model('Prescription', prescriptionSchema);