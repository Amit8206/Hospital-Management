const express = require("express")
const shortid = require("shortid")
const sulgify = require("slugify")
// const Category = require("../models/category")

const Employee = require("../models/employee_model")
const Doctor = require("../models/doctors_model")
const Department = require("../models/department_model")
const Leave = require("../models/leaves_model")




exports.addEmployee = (req, res) => {


  const { firstname, lastname, email, dob, gender, address, department, role, joindate, contact, salary
  } = req.body;

  let image = req.file.filename;

  console.log(req.body)

  const employee = new Employee({
    firstname,
    lastname,
    email,
    dob,
    gender,
    address,
    image,
    department,
    role,
    joindate,
    contact,
    salary,
    resigndate: '---'

    // createdBy: req.user._id
  });
  console.log({ employee })



  const doctor = new Doctor({
    firstname,
    lastname,
    email,
    // patient,
    dob,
    gender,
    address,
    image,
    department,
    role,
    joindate,
    contact,
    salary,
    resigndate: '---'
  });
  console.log({ doctor })

  if (role == 'Doctor') {


    Department.findOne({ name: department })
    .exec(async (err, data) => {
        if (err) {
            console.log({ err });
        }
        if (data) {
            var doctor = parseInt(data.doctors)
            const num = doctor + 1
            const count = num.toString();
            console.log({count})
            var noDoctor = data.doctors
            console.log({noDoctor})
            var myQuery = { doctors: noDoctor };
            console.log({myQuery})

            var newValues = { $set: { doctors: count} };
  
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
  
    doctor.save(((err, doctor) => {
      if (err) return res.status(400).json({ err });
      if (doctor) {
        // res.status(200).json({ doctor })
        console.log("Doctor Also Added Succesfully....")
      }

    }))

  }

  employee.save(((err, employee) => {
    if (err) return res.status(400).json({ err });
    if (employee) {
      res.status(200).json({ employee })
    }
  }))
}



exports.deleteEmployeeById = (req, res) => {
  const { id } = req.params;
  console.log(id)
  Employee.deleteOne({ _id: id })
    .exec((err, result) => {
      if (err) {
        res.status(400).json({ err })
      }
      if (result) {
        res.status(200).json({ messge: 'Record Deleted Successfully...' })
      }
    })
}



exports.addLeave = (req, res) => {
  const { employeeName, employeeId, leaveType, dateFrom, dateTo, reason } = req.body;

  Employee.findOne({ _id: employeeId })
  .exec((err, data) => {
    if (err) {
      res.status(400).json({ err })
    }
    if(data) {
      const leave = new Leave({
        employeeName,
        employeeId,
        leaveType,
        dateFrom,
        dateTo,
        reason
        
      });
      console.log({ leave })
    
      leave.save(((err, leave) => {
        if (err) return res.status(400).json({ err });
        if (leave) {
          res.status(200).json({ leave })
        }
      }))
    }
  })

}



exports.approveLeaveById = (req, res) => {

  const { id } = req.params;
  console.log(id)

  Leave.findById({ _id: id })
  .exec(async (err, data) => {
      if (err) {
          console.log({ err });
      }
      if (data) {
          var myQuery = { leave_status: "Not_Approved" };
          var newValues = { $set: { leave_status: "Approved" } };

          Leave.updateOne(myQuery, newValues)
              .exec(async (err, data) => {
                  if (err) {
                      console.log(err);
                  }
                  if (data) {
                      // console.log("User Verified Successfully..");
                      return res.status(201).json({
                          message: "Leave Approved Successfully.."
                      });
                  }
              })
      }
  })
}


exports.deleteLeaveById = (req, res) => {
    const { id } = req.params;
    console.log(id)
    Leave.deleteOne({ _id: id})
    .exec((err, result) => {
      if(err){
        res.status(400).json({err})
      }
      if(result){
        res.status(200).json({result})
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