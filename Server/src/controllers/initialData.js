const Doctor = require("../models/doctors_model");
const Medicine = require("../models/medicine_model");
const Appointment = require("../models/appointment_model");
const Complain = require("../models/complain_model");
const Employee = require("../models/employee_model");
const Department = require("../models/department_model");
const Leaves = require("../models/leaves_model");
const Patient = require("../models/patient_model");
const Users = require("../models/user_model")




exports.initialData = async (req, res) => {

    const doctors = await Doctor.find({}).exec()
    const medicines = await Medicine.find({}).exec()
    const appointments = await Appointment.find({}).exec()
    const patients = await Patient.find({}).exec()
    const complains = await Complain.find({}).exec()
    const employees = await Employee.find({}).exec()
    const departments = await Department.find({}).exec()
    const leaves = await Leaves.find({}).exec()
    const pendingAppointments = await Appointment.find({appointment_status: 'Not_Approved'}).exec()
    const users = await Users.find({}).exec()
    const pendingUsers = await Users.find({email_status: 'Not_Verified'}).exec()
    const pendingLeaves = await Leaves.find({leave_status: 'Not_Approved'}).exec()


    console.log({complains})

    
    res.status(200).json({
        doctors,
        medicines,
        appointments,
        patients,
        complains,
        employees,
        departments,
        leaves,
        users,
        pendingAppointments,
        pendingUsers,
        pendingLeaves
    })
}





// exports.initialData = async (req, res) => {

//     const categories = await Category.find({}).exec()
//     const products = await Product.find({})
//     .select('_id name slug price quantity description productPictures category')
//     .populate({path: 'category', select: '_id name'})
//     .exec()
//     const orders = await Order.find({})
//     .populate("items.productId", "name")
//     .exec();
//     res.status(200).json({
//         categories: createCategories(categories),
//         products,
//         orders
//     })
// }