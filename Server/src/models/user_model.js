const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({

    // firstname: {
    //     type: String
    //     // trim: 2,
    //     // min: 3,
    //     // max: 20
    // },
    // lastname: {
    //     type: String
    // },
    name: {
        type: String,
    },
    username: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20,
        unique: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    dob: {
        type: String,
        // require: true,
    },
    gender: {
        type: String,
        // require: true,
    },
    address: {
        type: String,
        // require: true,
    },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Doctor', 'Medicine', 'Sweeper', 'Payroll', 'Nurse'],
        default: 'User'
    },
    hash_password: {
        type: String,
        required: true
    },
    email_status: {
        type: String,
        enum: ['Verified', 'Not_Verified'],
        default: 'Not_Verified'
    },
    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String
    },
    signinWith: {
        type: String,
        enum: ['Google', 'Facebook', 'Instagram', 'Otp', 'Default'],
        default: 'Default'
    }
}, { timestamps: true });

// userSchema.virtual('password')
//     .set(function(password) {
//         this.hash_password = bcrypt.hashSync(password, 10);
//     });

// userSchema.virtual('fullName')
//     .get(function() {
//         return `${this.firstName}${this.lastName}`
//     });

userSchema.methods = {
    authenticate: async function(password) {
        return await bcrypt.compare(password, this.hash_password)
    }
}


module.exports = mongoose.model("User", userSchema);