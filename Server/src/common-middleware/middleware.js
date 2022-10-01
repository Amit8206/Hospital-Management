const jwt = require("jsonwebtoken");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });

  exports.upload = multer({ storage });



exports.requiresignin = (req, res, next) => {
    console.log(req.headers.authorization)
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.SECRATE_TOKEN);
        console.log(user);
        req.user = user;
    } else {
        if(res.status === 400){
            console.log({error: res.error})
        }
        return res.status(500).json({ Message: 'Authorization require !!!' });
    }
    next();
}


exports.userMiddleware = (req, res, next) => {
    if (req.user.email_status !== 'not_verified') {
        return res.status(400).json({ Message: 'User Access denied !!!' });
    }
    next();
}

// exports.adminMiddleware = (req, res, next) => {
//     if (req.user.role !== 'admin') {
//         return res.status(400).json({ Message: 'Admin Access denied !!!' });
//     }
//     next();
// }