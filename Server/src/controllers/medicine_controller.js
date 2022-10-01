const express = require("express")
const shortid = require("shortid")
const sulgify = require("slugify")

const Medicine = require("../models/medicine_model")



exports.addMedicine = (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body })

    const { name, purchaseDate, expire, expireDate, price, quantity } = req.body;
    console.log(req.body)

   

    const medicine = new Medicine({
        name,
        purchaseDate,
        expire,
        expireDate,
        price,
        quantity
        // createdBy: req.user._id
    });

    medicine.save((err, medicine) => {
        if (err) return res.status(400).json({ err });
        if (medicine) {
            res.status(200).json({ medicine })
        }

    })
}


exports.deleteMedicineById = (req, res) => {
  const { id } = req.params;
  console.log(id)
  Medicine.deleteOne({ _id: id})
  .exec((err, result) => {
    if(err){
      res.status(400).json({err})
    }
    if(result){
      res.status(200).json({messge: 'Record Deleted Successfully...' })
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