const express = require("express");
// const { requiresignin, adminMiddleware } = require("../common-middleware/middleware");
const { addDoctor, getDoctorsData, deleteDoctorById } = require("../controllers/doc_controller");

const multer = require("multer")
const shortid = require("shortid")
const path = require("path")


const router = express.Router();


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })




router.get('/doctors/get_doctors',  getDoctorsData);
// router.post('/doctors/add_doctor', upload.single('doctorImage'), addDoctor);
router.delete('/doctors/delete_doctor/:id',  deleteDoctorById);
// router.get('/doctors/delete_doctor/:id',  getDoctorById);


// router.get('/products/:slug', getProductsBySlug);
// router.get('/product/:productId', getProductDetailsById);



module.exports = router;