import axios from "../helpers/axios"
import { 
    doctorConstants,
    medicineConstants,
    appointmentConstants,
    complainConstants,
    employeeConstants,
    leaveConstants,
    departmentConstants
     } from "./constants";


export const getInitialData = () => {
    return async (dispatch) => {
        const res = await axios.post(`/initialdata`);
        if(res.status === 200){
            const { doctors, medicines, appointments, complains, employees, departments, leaves } = res.data;
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
                payload: { appointments }
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
                type: departmentConstants.GET_ALL_DEPARTMENT_SUCCESS,
                payload: { departments }
            })
            dispatch({
                type: leaveConstants.GET_ALL_LEAVE_SUCCESS,
                payload: { leaves }
            })
        }
        console.log(res); 
    }   
}