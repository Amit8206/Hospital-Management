const express = require("express");
const { addComplain } = require("../controllers/complain_controller");




const router = express.Router();






router.post('/complains/add_complain', addComplain);
// router.post("/complains/", approveAppointmentById);





module.exports = router;