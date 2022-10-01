const Complain = require("../models/complain_model")
const Doctor = require("../models/doctors_model")




exports.addComplain = (req, res) => {

    const { name, doctorid, email, subject, message } = req.body;

    Doctor.findOne({_id: doctorid})
    .exec((err, data) => {
        if(err) {
            if (err) return res.status(400).json({ err });
        }
        if(data) {

            const complain = new Complain({
                name,
                email,
                doctorname: data.firstname + ' ' + data.lastname,
                subject,
                message
               
            });
        
            complain.save((err, complain) => {
                if (err) return res.status(400).json({ err });
                if (complain) {
                    res.status(200).json({ complain })
                }
        
            })
        }

    })

   
}


