const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const appointmentSchema = new mongoose.Schema({
    
    patientname: {
        type: String,
        require: true
    }, 
    department: {
        type: String,
    },
    doctorname: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    appointment_status: {
        type: String,
        enum: ['Not_Approved', 'Approved'],
        default: 'Not_Approved'
    }
    
}, { timestamps: true });



module.exports = mongoose.model("Appointment", appointmentSchema);