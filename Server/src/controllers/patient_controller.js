const express = require("express")
const shortid = require("shortid")
const sulgify = require("slugify")

const Patient = require("../models/patient_model");
const Doctor = require("../models/doctors_model");
const Department = require("../models/department_model");
const EmployeeModel = require("../models/employee_model");




exports.addPatient = (req, res) => {

  const { patientName, age, admitDate, admitTime, address, contact, doctorName } = req.body;
  // console.log(req.body);
  // console.log({doctorName})

  const id = doctorName.toString()


  EmployeeModel.findOne({ role: 'Doctor', _id: id })
    .exec((err, data) => {
      if (err) return res.status(400).json({ err });
      if (data) {
        // console.log(data.department)

        const dprp = data.department;

        const name = data.firstname +' '+ data.lastname;

        const patient = new Patient({
          patientName,
          age,
          admitDate,
          admitTime,
          dischargeDate: '---',
          dischargeTime: '---',
          address,
          contact,
          department: dprp,
          doctorName: name,
          doctorId: id
        });
        console.log({patient})


        Doctor.findById({ _id: id })
        .exec(async (err, data) => {
            if (err) {
                console.log({ err });
            }
            if (data) {
                var patient = parseInt(data.patients)
                const num = patient + 1
                const count = num.toString();
                console.log({count})
                var noPatients = data.patients
                var myQuery = { patients: noPatients };
                var newValues = { $set: { patients: count} };
      
                Doctor.updateOne(myQuery, newValues)
                    .exec(async (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        if (data) {
                            console.log("Doctor Updated Successfully..");
                
                        }
                    })
            }
        })

        Department.findOne({ department: dprp })
        .exec(async (err, data) => {
            if (err) {
                console.log({ err });
            }
            if (data) {
                var patient = parseInt(data.patients)
                const num = patient + 1
                const count = num.toString();
                console.log({count})
                var noPatients = data.patients
                var myQuery = { patients: noPatients };
                var newValues = { $set: { patients: count} };
      
                Department.updateOne(myQuery, newValues)
                    .exec(async (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        if (data) {
                            console.log("Department Updated Successfully..");
                
                        }
                    })
            }
        })





        patient.save((err, patient) => {
          if (err) return res.status(400).json({ err });
          if (patient) {
            res.status(200).json({ patient })
          }
        })

      }
    })
}


exports.deletePatientById = (req, res) => {
  const { id } = req.params;
  console.log(id)
  Patient.deleteOne({ _id: id })
    .exec((err, result) => {
      if (err) {
        res.status(400).json({ err })
      }
      if (result) {
        res.status(200).json({ result })
      }
    })
}




// exports.getEmployeeDetailsById = (req, res) => {
//     const { employeeId } = req.params;
//     if (employeeId) {
//         Employee.findOne({ _id: employeeId }).exec((error, employee) => {
//         if (error) return res.status(400).json({ error });
//         if (employee) {
//           res.status(200).json({ employee });
//         }
//       });
//     } else {
//       return res.status(400).json({ error: "Params required" });
//     }
//   };