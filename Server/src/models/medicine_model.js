const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const medicineSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },
    purchaseDate: {
        type: String,
        require: true
    },
    expire: {
        type: String,
        require: true
    },
    expireDate: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    }
}, { timestamps: true });



module.exports = mongoose.model("Medicine", medicineSchema);