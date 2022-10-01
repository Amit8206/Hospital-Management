import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer"
import appointmentReducer from "./appointmentReducer"
import medicineReducer from "./medicineReducer"
import complainReducer from "./complainReducer"
import departmentReducer from "./departmentReducer"
import employeeReducer from "./employeeReducer"
import leaveReducer from "./leaveReducer"
import patientReducer from "./patientReducer";




const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    doctor: doctorReducer,
    medicine: medicineReducer,
    appointment: appointmentReducer,
    complain: complainReducer,
    department: departmentReducer,
    employee: employeeReducer,
    patient: patientReducer,
    leave: leaveReducer


    
})


export default rootReducer;