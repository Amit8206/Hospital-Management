const express = require("express");
const { addEmployee, deleteEmployeeById, addLeave, approveLeaveById, deleteLeaveById } = require("../controllers/emp_controller");

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





router.post('/employees/add_employee', upload.single('image'),  addEmployee);
router.post('/employees/add_leave',  addLeave);
router.post("/employees/approve_leave/:id", approveLeaveById);
router.delete('/employees/delete_leave/:id', deleteLeaveById);

router.delete('/employees/delete_employee/:id', deleteEmployeeById);

// router.get('/products/:slug', getProductsBySlug);
// router.get('/product/:productId', getProductDetailsById);



module.exports = router;