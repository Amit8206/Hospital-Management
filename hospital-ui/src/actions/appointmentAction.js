import axios from "../helpers/axios"
import { appointmentConstants } from "./constants";



export const addAppointment = (form) => {
    return async (dispatch) => {

        dispatch({ type: appointmentConstants.ADD_NEW_APPOINTMENT_REQUEST });
        const res = await axios.post(`appointments/add_appointment`, form);
        console.log(res);

        if (res.status === 200) {
            dispatch({
                type: appointmentConstants.ADD_NEW_APPOINTMENT_SUCCESS,
                payload: { message: 'Appointment Added Successfully' }

            });
        }

        if (res.status === 400) {
            dispatch({
                type: appointmentConstants.ADD_NEW_APPOINTMENT_FAILUR,
                payload: { error: 'Appointment Added Failled..!!' }

            });

        }
    }      
}

export const approveAppointment = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.post(`appointments/approve_appointment/${id}`);
        console.log(res);
    }      
}

export const deleteAppointment = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`appointments/delete_appointment/${id}`);
        console.log(res);
    }      
}