const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['patient', 'doctor', 'admin'],
        default: 'patient'
    },
    phone: {
        type: String,
        required: true
    },
    // Doctor specific fields
    specialization: {
        type: String,
        required: function() {
            return this.role === 'doctor';
        }
    },
    experience: {
        type: Number,
        required: function() {
            return this.role === 'doctor';
        }
    },
    education: [{
        degree: String,
        institution: String,
        year: Number
    }],
    about: {
        type: String,
        maxlength: 1000
    },
    // Common fields
    profileImage: {
        type: String,
        default: ''
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    language: {
        type: String,
        enum: ['en', 'hi', 'pa'],
        default: 'en'
    }
}, {
    timestamps: true
});

// Index for search functionality
userSchema.index({ name: 'text', specialization: 'text' });

module.exports = mongoose.model('User', userSchema);