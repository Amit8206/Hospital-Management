const express = require("express")
const shortid = require("shortid")
const sulgify = require("slugify")

const Doctor = require("../models/doctors_model")
const Patient = require("../models/patient_model")



exports.addDoctor = (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body })

    const { firstname, lastname, email, patient, dob, gender, address, phone, department, biography } = req.body;
    console.log(req.body)

    let doctorImage = req.file.filename;

    // if (req.files.length > 0) {
    //     doctorImage = req.files.map(file => {
    //         return { img: file.filename }
    //     })
    // }

    // if (req.files) {
    //     doctorImage = req.files.map(file => {
    //         // doctorImage = req.files
    //         return { img: file.filename }
    //     })
    // }

    const doctor = new Doctor({
        firstname,
        lastname,
        email,
        patient,
        dob,
        gender,
        address,
        phone,
        department,
        biography,
        doctorImage
    });
    console.log({doctor})

    doctor.save(((err, doctor) => {
        if (err) return res.status(400).json({ err });
        if (doctor) {
            res.status(200).json({ doctor })
        }

    }))
}


exports.getDoctorsData = async (req, res) => {

  const doctors = await Doctor.find({}).exec()
  const patients = await Patient.find({}).exec()


  
  res.status(200).json({
      doctors,
      // patients
  })
}


// exports.getDoctorById = (req, res) => {
//   const { id } = req.params;
//   console.log(id)
//   Doctor.findOne({ _id: id})
//   .exec((err, result) => {
//     if(err){
//       res.status(400).json({err})
//     }
//     if(result){
//       res.status(200).json({ doctor: result })
//     }
//   })

// }




exports.deleteDoctorById = (req, res) => {
  const { id } = req.params;
  console.log(id)
  Doctor.deleteOne({ _id: id})
  .exec((err, result) => {
    if(err){
      res.status(400).json({err})
    }
    if(result){
      res.status(200).json({result})
    }
  })
}


// exports.getDoctorDetailsById = (req, res) => {
//     const { doctorId } = req.body;
//     var myquery = { _id : doctorId };
//     if (doctorId) {
//       Doctor.findOne({ _id: doctorId }).exec((error, doctor) => {
//         if (error) return res.status(400).json({ error });
//         if (doctor) {
//           res.status(200).json({ doctor });
      
//         }
//       });
//     } else {
//       return res.status(400).json({ error: "Params required" });
//     }
//   }