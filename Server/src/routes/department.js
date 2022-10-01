const express = require("express");
const { addDepartment, deleteDepartmentById, getDepartmentsData } = require("../controllers/department_controller");



const router = express.Router();


router.get('/departments/get_departments',  getDepartmentsData);
router.post('/departments/add_department', addDepartment);
router.delete('/departments/delete_department/:id', deleteDepartmentById);


// router.get('/products/:slug', getProductsBySlug);
// router.get('/product/:productId', getProductDetailsById);



module.exports = router;