const UserModel = require("../models/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const shortid = require('shortid')
const randomToken = require("random-token");
const nodemailer = require("nodemailer");
// import fetch from 'node-fetch'
const EmployeeModel = require('../models/employee_model')
const OtpModel = require('../models/otp_model')


const sendEmail = (email) => {
    UserModel.findOne({ email })
        .exec(async (err, result) => {
            if (err) {
                console.log(err)
            }

            if (result) {
                const { username, email, email_status } = result;
                const id = result._id.toString();
                console.log(id, username, email, email_status);

                const output =

                    `
              <p>Dear  ` + email + `Your User Name Is: ` + username + `, </p>

              <p>Thanks for sign up. Your verification id and email is given below :  </p>

              <ul>
                <li>ID: `   + id + `</li>
                <li>Email: `    + email + `</li>
              </ul>

              <p>Thanks For Signup in This Medical Management Project</p>
              
              <p><strong>This is an automatically generated mail. Please do not reply back.</strong></p>
              
              <p>Regards,</p>
              <p>Mr Amit</p>
          `;
                //   verify Link: <a href="http://localhost:3000/verify">Verify</a>

                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "rajbirnayak120@gmail.com",
                        pass: "rtocogzmnjuwxwqu",
                        port: 465,
                        host: 'smtp@gmail.com',
                    },
                });
                const mailOptions = {
                    from: "rajbirnayak120@gmail.com",
                    to: email,
                    subject: "Email Verification", // Subject line
                    html: output, // plain text body
                };

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(info);
                    console.log("Email Send Successfully..");
                });

                // res.send(output);

            }

        })
}



const sendEmailOtp = async (email) => {

    // UserModel.findOne({ email })
    //     .exec(async (err, result) => {
    //         if (err) { console.log(err) }

    //         if (result) {
    // const { username, email, email_status } = result;
    // const id = result._id.toString();
    // console.log(id, username, email, email_status);

    const data = await OtpModel.findOne({ email }).exec()
    const { otp } = data;

    console.log({ data })

    const output =

        `
              <p>Dear  ` + email + `Your One Time Password Is: ` + otp + `, </p>
              
              <p><strong>This is an automatically generated mail. Please do not reply back.</strong></p>
              
              <p>Regards,</p>
              <p>Mr Amit</p>
          `;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rajbirnayak120@gmail.com",
            pass: "rtocogzmnjuwxwqu",
            port: 465,
            host: 'smtp@gmail.com',
        },
    });
    const mailOptions = {
        from: "rajbirnayak120@gmail.com",
        to: email,
        subject: "Email Verification", // Subject line
        html: output, // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            return console.log(err);
        }
        console.log(info);
        console.log("Email Send Successfully..");
    });
}



exports.signup = (req, res) => {

    EmployeeModel.findOne({ email: req.body.email })
        .exec(async (err, user) => {
            if (user) {
                const { role } = user;

                const {
                    username,
                    email,
                    password
                } = req.body;
                const hash_password = await bcrypt.hash(password, 10);
                // const token = randomToken(8);
                const _user = new UserModel({
                    username,
                    email,
                    hash_password,
                    role
                });
                _user.save((err, data) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Something Wrong !!!"
                        });
                    }
                    if (data) {
                        // sendEmail(username);
                        return res.status(200).json({
                            message: "User Created Successfully..."
                        });
                    }
                });
            } else {
                UserModel.findOne({ email: req.body.email })
                    .exec(async (err, user) => {
                        if (user) return res.status(400).json({
                            message: "User Already exists !!!"
                        });
                        const {
                            username,
                            email,
                            password
                        } = req.body;
                        const hash_password = await bcrypt.hash(password, 10);
                        // const token = randomToken(8);
                        const _user = new UserModel({
                            username,
                            email,
                            hash_password
                        });
                        _user.save((err, data) => {
                            if (err) {
                                return res.status(401).json({
                                    message: "Something Wrong !!!"
                                });
                            }
                            if (data) {
                                // sendEmail(email);
                                return res.status(201).json({
                                    message: "User Created Successfully..."
                                });
                            }
                        });
                    });
            }
        })

}



exports.signin = (req, res) => {

    UserModel.findOne({ email: req.body.email })
        .exec(async (err, user) => {
            if (err) return res.status(400).json({ err });
            if (user) {
                console.log({ user })
                if (user.email_status == 'Verified') {
                    const isPassword = await user.authenticate(req.body.password)
                    // && user.role === 'user'
                    if (isPassword) {
                        const token = jwt.sign({ _id: user._id, email_status: user.email_status }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });
                        const { _id, name, username, email, role, dob, gender, address, signinWith } = user;

                        console.log({ _id, username, email, token })
                        res.status(200).json({
                            token,
                            user: {
                                _id,
                                // firstname,
                                // lastname,
                                name,
                                username,
                                email,
                                role,
                                dob,
                                gender,
                                address,
                                signinWith
                            }
                        })

                    } else {
                        return res.status(400).json({
                            message: "invalid Password !!!"
                        })
                    }
                } else {
                    return res.status(401).json({
                        message: "User Not Varified..!!"
                    })
                }
            } else {
                return res.status(402).json({
                    message: "User Not Exit..!!"
                })
            }
        })
}

exports.loginWithGoogle = (req, res) => {

    const { name, email } = req.body;
    console.log(name, email)


    UserModel.findOne({ email })
        .exec(async (err, user) => {
            if (err) {
                return res.status(400).json({ error: "Something Went Wrong..!!!" });
            } else {
                if (user) {
                    const token = jwt.sign({ _id: user._id }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });
                    const { _id, name, username, email, role, dob, gender, address, signinWith } = user;

                    return res.status(200).json({
                        token,
                        user: { _id, name, username, email, role, dob, gender, address, signinWith }
                    })
                } else {
                    const username = shortid.generate();
                    const password = email + process.env.KEY;
                    const hash_password = await bcrypt.hash(password, 10);
                    const signinWith = 'Google'


                    const _user = new UserModel({ name, username, email, hash_password, signinWith })
                    _user.save((err, data) => {
                        if (err) {
                            return res.status(400).json({
                                message: "Something Wrong !!!"
                            });
                        }
                        if (data) {
                            // sendEmail(email);
                            const { _id, name, username, email, email_status, role, dob, gender, address, signinWith } = data;

                            const token = jwt.sign({ _id: _id }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });

                            sendEmail(email);

                            return res.status(200).json({
                                token,
                                user: {
                                    _id,
                                    name,
                                    username,
                                    email,
                                    email_status,
                                    signinWith,
                                    role,
                                    dob,
                                    gender,
                                    address
                                }
                            })
                        }
                    });
                }
            }
        })

}


exports.facebookLogin = (req, res) => {

    const fetch = require("node-fetch");

    const { userID, accessToken } = req.body;

    // console.log(userID, accessToken)

    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`

    fetch(urlGraphFacebook, {
        method: 'GET'
    })
        .then(resp => resp.json())
        .then(resp => {
            const { email, name } = resp;
            console.log(email, name);

            UserModel.findOne({ email })
                .exec(async (err, user) => {
                    if (err) {
                        return res.status(400).json({ error: "Something Went Wrong..!!!" });
                    } else {
                        if (user) {
                            const token = jwt.sign({ _id: user._id }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });
                            const { _id, name, username, email, role, dob, gender, address, signinWith } = user;

                            return res.status(200).json({
                                token,
                                user: { _id, name, username, email, role, dob, gender, address, signinWith }
                            })
                        } else {
                            // const { nameOfUser, email } = req.body;
                            const username = shortid.generate();
                            const password = email + process.env.KEY;
                            const hash_password = await bcrypt.hash(password, 10);
                            const signinWith = 'Facebook'


                            const _user = new UserModel({ name, username, email, hash_password, signinWith })
                            _user.save((err, data) => {
                                if (err) {
                                    return res.status(400).json({
                                        message: "Something Wrong !!!"
                                    });
                                }
                                if (data) {
                                    // sendEmail(username);
                                    const { _id, name, username, email, email_status, role, dob, gender, address, signinWith } = data;

                                    const token = jwt.sign({ _id: _id }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });

                                    return res.status(200).json({
                                        token,
                                        user: {
                                            _id,
                                            name,
                                            username,
                                            email,
                                            email_status,
                                            signinWith,
                                            role,
                                            dob,
                                            gender,
                                            address
                                        }
                                    })
                                }
                            });
                        }
                    }
                })
        });

}








exports.userVerify = (req, res) => {


    const { id } = req.params;
    console.log(id)

    UserModel.findById({ _id: id })
        .exec(async (err, data) => {
            if (err) {
                console.log({ err });
            }
            if (data) {
                var myQuery = { email_status: "Not_Verified" };
                var newValues = { $set: { email_status: "Verified" } };
                const role = data.role;

                UserModel.updateOne(myQuery, newValues)
                    .exec(async (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        if (data) {
                            console.log(role + "Verified Successfully..");
                            return res.status(201).json({
                                message: "User Verified Successfully.."
                            });
                        }
                    })
            }
        })


}



exports.updateUserAndAdmin = (req, res) => {


    const { name, username, email, dob, gender, address } = req.body;

    UserModel.findOneAndUpdate({ email: req.body.email }, {
        $set: {
            name,
            username,
            email,
            dob,
            gender,
            address
        }
    }).exec(async (err, data) => {
        if (err) return res.status(400).json({ err });
        if (data) {
            res.status(200).json({
                message: 'Profile Updated Successfully...'
            })
        }

    })

}


exports.deleteUserById = (req, res) => {
    const { id } = req.params;
    console.log(id)
    UserModel.deleteOne({ _id: id })
        .exec((err, result) => {
            if (err) {
                res.status(400).json({ err })
            }
            if (result) {
                res.status(200).json({ result })
            }
        })
}




exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Signout Successfully....' })
}



exports.sendOtp = (req, res) => {
    const { email } = req.params;
    console.log({ email })

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log({ otp })

    UserModel.findOne({ email: email })
        .exec((err, result) => {
            if (err) { res.status(400).json({ err }) }
            if (result) {


                const _otp = new OtpModel({
                    email,
                    actionType: 'ChangePassword',
                    otp,
                    role: result.role

                })

                _otp.save((err, data) => {
                    if (err) {
                        return res.status(401).json({ message: "Something Wrong !!!" });
                    }
                    if (data) {
                        sendEmailOtp(email);
                        return res.status(200).json({
                            message: "Otp Send Successfully..."
                        });
                    }
                });
            }
        })

}


exports.changePassword = (req, res) => {
    const { otp, password, email } = req.body;
    console.log(otp, password, email)


    UserModel.findOne({ email: email })
        .exec((err, result) => {
            if (err) { res.status(400).json({ err }) }
            if (result) {

                OtpModel.findOne({ email: email })
                    .exec(async (err, data) => {
                        if (err) { res.status(400).json({ err }) }
                        if (data) {
                            if (data.otp == otp) {
                                const oldPassword = result.hash_password
                                var myQuery = { hash_password: oldPassword };
                                const newPassword = await bcrypt.hash(password, 10);
                                var newValues = { $set: { hash_password: newPassword } };
                                const role = result.role;
                                console.log(myQuery, password, oldPassword, newPassword)

                                UserModel.updateOne(myQuery, newValues)
                                    .exec(async (err, data2) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        if (data2) {
                                            console.log(role + ' ' + "Password Changed Successfully..");
                                            OtpModel.deleteOne({ email: email }).exec()
                                            return res.status(201).json({
                                                message: "Password Changed Successfully.."
                                            });


                                        }
                                    })
                            } else {
                                console.log('Invaild Otp...!!')
                            }
                        }
                    })



            }
        })
}



exports.loginOtpSend = (req, res) => {
    const { email } = req.params;
    console.log({ email })

    const otp = Math.floor(100000 + Math.random() * 900000);
    // console.log({ otp })

    // UserModel.findOne({ email: email })
    //     .exec((err, result) => {
    //         if (err) { res.status(400).json({ err }) }
    //         if (result) {

    const _otp = new OtpModel({
        email,
        actionType: 'Login',
        otp
    })

    _otp.save((err, data) => {
        if (err) {
            return res.status(401).json({ message: "Something Wrong !!!" });
        }
        if (data) {
            // console.log('This is Executed...')

            // sendEmailOtp(email);

            // return res.status(200).json({
            //     message: "Otp Send Successfully..."
            // });
            console.log("Otp Send Successfully..")
            setTimeout(async () => {
                await OtpModel.deleteOne({ email: data.email }).exec()
                console.log('Data Deleted Succesfully...')
            }, 120000);
        }
    });
    //     }
    // })

}



exports.loginWithOtp = (req, res) => {
    const { email, otp } = req.body;
    console.log(req.body)

    OtpModel.findOne({ email: email, otp: otp })
        .exec(async (err, data) => {
            if (err) { console.log({ err }) }
            if (data) {
                UserModel.findOne({ email: email })
                    .exec(async (err, result) => {
                        if (err) { res.status(400).json({ err }) }

                        else {
                            if (result) {
                                const { _id, name, username, email, email_status, role, dob, gender, address, signinWith } = result;
                                console.log({ result })

                                const token = jwt.sign({ _id: _id }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });
                                // await OtpModel.deleteOne({ email: result.email }).exec()
                                setTimeout(async () => {
                                    await OtpModel.deleteOne({ email: email }).exec()
                                    console.log('Data Deleted Succesfully...')
                                }, 120000);

                                return res.status(200).json({
                                    token,
                                    user: {
                                        _id,
                                        name,
                                        username,
                                        email,
                                        email_status,
                                        signinWith,
                                        role,
                                        dob,
                                        gender,
                                        address
                                    }
                                })
                            } else {
                                // const { email } = req.body;

                                const username = shortid.generate();
                                const password = email + process.env.KEY;
                                const hash_password = await bcrypt.hash(password, 10);
                                // const signinWith = 'Otp'

                                const _user = new UserModel({
                                    username,
                                    email,
                                    hash_password,
                                    signinWith: 'Otp'
                                });
                                _user.save(async (err, data) => {
                                    if (err) {
                                        console.log({ err })
                                        // return res.status(401).json({
                                        //     message: "Something Wrong !!!"
                                        // });
                                    }
                                    if (data) {
                                        sendEmailOtp(data.email);

                                        setTimeout(async () => {
                                            await OtpModel.deleteOne({ email: data.email }).exec()
                                            console.log('Data Deleted Succesfully...')
                                        }, 120000);

                                        // return res.status(201).json({
                                        //     message: "User Created Successfully..."
                                        // });
                                        console.log({ data })
                                        console.log("User Created Successfully...");


                                        const { _id, name, username, email, email_status, role, dob, gender, address, signinWith } = data;

                                        const token = jwt.sign({ _id: _id }, process.env.SECRATE_TOKEN, { expiresIn: '1h' });

                                        return res.status(200).json({
                                            token,
                                            user: {
                                                _id,
                                                name,
                                                username,
                                                email,
                                                email_status,
                                                signinWith,
                                                role,
                                                dob,
                                                gender,
                                                address
                                            }
                                        })
                                    }
                                });

                            }

                        }
                    })

            }
        })

}





