const express = require("express");
const { addAppointment , deleteAppointmentById, approveAppointmentById} = require("../controllers/appointment_controller");

const multer = require("multer")
const shortid = require("shortid")
const path = require("path")


const router = express.Router();






router.post('/appointments/add_appointment', addAppointment);
router.post("/appointments/approve_appointment/:id", approveAppointmentById);
router.delete('/appointments/delete_appointment/:id', deleteAppointmentById);

// router.get('/products/:slug', getProductsBySlug);
// router.get('/product/:productId', getProductDetailsById);



module.exports = router;