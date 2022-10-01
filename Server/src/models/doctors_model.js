const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorSchema = new mongoose.Schema({

    firstname: {
        type: String,
        require: true,
        // trim: 2,
        // min: 3,
        // max: 20
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    dob: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    joindate: {
        type: String,
        require: true
    },
    resigndate: {
        type: String
    },
    department: {
        type: String,
        require: true
    },
    patients: {
        type: String
    },
    role: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        require: true,
    },
    image: {
        type: String
    },
    updatedAt: Date
}, { timestamps: true });



module.exports = mongoose.model("Doctor", doctorSchema);