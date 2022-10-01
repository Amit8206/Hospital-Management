const express = require("express")
const UserModel = require("../models/user_model");
const { signup, signin, userVerify, signout, updateUserAndAdmin, facebookLogin, loginWithGoogle, deleteUserById, sendOtp, changePassword, loginWithOtp, loginOtpSend } = require("../controllers/User");
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/validator");
const { adminMiddleware, requiresignin } = require("../common-middleware/middleware");


const routes = express.Router();


routes.post("/signup", signup);
routes.post("/signin", signin);
routes.post("/facebooklogin", facebookLogin);
routes.post("/googlelogin", loginWithGoogle);
routes.post("/otplogin", loginWithOtp);
routes.post("/user/loginotp/:email", loginOtpSend);

routes.post("/user/sendotp/:email", sendOtp);
routes.post("/user/changepassword", changePassword);

routes.post("/user/verify/:id", userVerify);
routes.delete("/user/delete/:id", deleteUserById);
routes.post("/update", updateUserAndAdmin);
routes.post("/signout", signout);





module.exports = routes;