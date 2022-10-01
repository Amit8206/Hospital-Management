const express = require("express")
const shortid = require("shortid")
const sulgify = require("slugify")

const Department = require("../models/department_model")



exports.addDepartment = (req, res) => {

    const { name, description } = req.body;
    console.log({body: req.body})

   

    const department = new Department({
        name,
        description
    });

    department.save(((err, department) => {
        if (err) return res.status(400).json({ err });
        if (department) {
            res.status(200).json({ department })
        }

    }))
}




exports.getDepartmentsData = async (req, res) => {

  const departments = await Department.find({}).exec()
  
  res.status(200).json({
    departments
  })
}



exports.deleteDepartmentById = (req, res) => {
    const { id } = req.params;
    console.log(id)
    Department.deleteOne({ _id: id})
    .exec((err, result) => {
      if(err){
        res.status(400).json({err})
      }
      if(result){
        res.status(200).json({result})
      }
    })
  }


// exports.getMedicineDetailsById = (req, res) => {
//     const { medicineId } = req.params;
//     if (medicineId) {
//         Medicine.findOne({ _id: medicineId })
//         .exec((error, medicine) => {
//         if (error) return res.status(400).json({ error });
//         if (medicine) {
//           res.status(200).json({ medicine });
//         }
//       });
//     } else {
//       return res.status(400).json({ error: "Params required" });
//     }
//   };

