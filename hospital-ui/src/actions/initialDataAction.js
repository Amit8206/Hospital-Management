import axios from "../helpers/axios"
import { 
    doctorConstants,
    medicineConstants,
    appointmentConstants,
    complainConstants,
    employeeConstants,
    leaveConstants,
    departmentConstants,
    patientConstants,
    userConstants
     } from "./constants";


export const getInitialData = () => {
    return async (dispatch) => {
        const res = await axios.post(`/initialdata`);
        if(res.status === 200){
                const { users, doctors, medicines, appointments, complains, employees, departments, leaves, patients, pendingLeaves, pendingAppointments, pendingUsers } = res.data;
            dispatch({
                type: userConstants.GET_ALL_USER_SUCCESS,
                payload: { users }
            })
            dispatch({
                type: userConstants.USER_REGISTER_PENDING_SUCCESS,
                payload: { pendingUsers }
            })
            dispatch({
                type: doctorConstants.GET_ALL_DOCTOR_SUCCESS,
                payload: { doctors }
            })
            dispatch({
                type: medicineConstants.GET_ALL_MEDICINE_SUCCESS,
                payload: { medicines }
            })
            dispatch({
                type: appointmentConstants.GET_ALL_APPOINTMENT_SUCCESS,
                payload: { appointments, pendingAppointments  }
            })
            dispatch({
                type: complainConstants.GET_ALL_COMPLAIN_SUCCESS,
                payload: { complains }
            })
            dispatch({
                type: employeeConstants.GET_ALL_EMPLOYEE_SUCCESS,
                payload: { employees }
            })
            dispatch({
                type: patientConstants.GET_ALL_PATIENT_SUCCESS,
                payload: { patients }
            })
            dispatch({
                type: departmentConstants.GET_ALL_DEPARTMENT_SUCCESS,
                payload: { departments }
            })
            dispatch({
                type: leaveConstants.GET_ALL_LEAVE_SUCCESS,
                payload: { leaves, pendingLeaves }
            })
        }
        console.log(res); 
    }   
}