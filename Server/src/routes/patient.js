const express = require("express");
const { addPatient, deletePatientById } = require("../controllers/patient_controller");


const multer = require("multer")
const shortid = require("shortid")
const path = require("path")


const router = express.Router();






router.post('/patients/add_patient', addPatient);
router.delete('/patients/delete_patient/:id', deletePatientById);

// router.get('/products/:slug', getProductsBySlug);
// router.get('/product/:productId', getProductDetailsById);



module.exports = router;