const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const leaveSchema = new mongoose.Schema({
    
    employeeName: {
        type: String,
        require: true
    },
    leaveType: {
        type: String,
        require: true
    },
    dateFrom: {
        type: String,
        require: true
    },
    dateTo: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    leave_status: {
        type: String,
        enum: ['Not_Approved', 'Approved'],
        default: 'Not_Approved'
    }
}, { timestamps: true });



module.exports = mongoose.model("Leave", leaveSchema);