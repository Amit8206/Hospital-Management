const mongoose = require("mongoose");


const otpSchema = new mongoose.Schema({

    
    email: {
        type: String,
        lowercase: true
    },
    actionType: {
        type: String
    },
    otp: {
        type: String
    },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Doctor', 'Medicine', 'Sweeper', 'Payroll', 'Nurse'],
        default: 'User'
    },
    
}, { timestamps: true });


module.exports = mongoose.model("Otp", otpSchema);