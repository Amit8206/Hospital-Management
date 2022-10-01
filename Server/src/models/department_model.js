const mongoose = require("mongoose");


const departmentSchema = new mongoose.Schema({


    name: {
        type: String,
        require: true
    },
    patients: {
        type: String
    },
    doctors: {
        type: String
    },
    description: {
        type: String,
        require: true
    },
    
}, { timestamps: true });


module.exports = mongoose.model("Department", departmentSchema);