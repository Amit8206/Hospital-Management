const express = require("express");
// const { requiresignin, adminMiddleware } = require("../../common-middleware/middleware");
const { initialData } = require("../controllers/initialData")



const router = express.Router();

router.post('/initialdata', initialData);



module.exports = router;