const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
    
    patientName: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    admitDate: {
        type: String,
        require: true
    },
    admitTime: {
        type: String,
        require: true
    },
    dischargeDate: {
        type: String
    },
    dischargeTime: {
        type: String
    },
    address: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    doctorName: {
        type: String,
        require: true
    },
    doctorId: {
        type: String,
    },
    department: {
        type: String,
    },
    patientState: {
        type: String,
        enum: ['Still Addmited', 'Discharged'],
        default: 'Still Addmited'
    }
}, { timestamps: true });



module.exports = mongoose.model("Patient", patientSchema);