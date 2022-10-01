const Appointment = require("../models/appointment_model")
const Doctor = require("../models/doctors_model")




exports.addAppointment = (req, res) => {

    const { patientname, doctorname, email, date, time, contact } = req.body;

    Doctor.findOne({_id: doctorname})
    .exec((err, data) => {

      const appointment = new Appointment({
        patientname,
        department: data.department,
        doctorname: data.firstname + ' ' + data.lastname,
        email,
        date,
        time,
        contact
    });

    appointment.save((err, appointment) => {
        if (err) return res.status(400).json({ err });
        if (appointment) {
            res.status(200).json({ appointment })
        }

    })

    })

   
}

exports.approveAppointmentById = (req, res) => {

  const { id } = req.params;
  console.log(id)

  Appointment.findById({ _id: id })
  .exec(async (err, data) => {
      if (err) {
          console.log({ err });
      }
      if (data) {
          var myQuery = { appointment_status: "Not_Approved" };
          var newValues = { $set: { appointment_status: "Approved" } };

          Appointment.updateOne(myQuery, newValues)
              .exec(async (err, data) => {
                  if (err) {
                      console.log(err);
                  }
                  if (data) {
                      // console.log("User Verified Successfully..");
                      return res.status(201).json({
                          message: "Appointment Approved Successfully.."
                      });
                  }
              })
      }
  })
}


exports.deleteAppointmentById = (req, res) => {
    const { id } = req.params;
    console.log(id)
    Appointment.deleteOne({ _id: id})
    .exec((err, result) => {
      if(err){
        res.status(400).json({err})
      }
      if(result){
        res.status(200).json({result})
      }
    })
  }
