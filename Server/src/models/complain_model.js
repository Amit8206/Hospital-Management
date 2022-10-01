const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const complainSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    doctorname: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }

}, { timestamps: true });



module.exports = mongoose.model("Complain", complainSchema);