const express = require("express");
// const { requiresignin, adminMiddleware } = require("../common-middleware/middleware");
const { addMedicine, deleteMedicineById } = require("../controllers/medicine_controller");

const multer = require("multer")
const shortid = require("shortid")
const path = require("path")


const router = express.Router();





router.post('/medicines/add_medicine',  addMedicine);
router.delete('/medicines/delete_medicine/:id', deleteMedicineById);

// router.get('/products/:slug', getProductsBySlug);
// router.get('/product/:productId', getProductDetailsById);



module.exports = router;