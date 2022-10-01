import axios from "../helpers/axios"
import { appointmentConstants } from "./constants";



export const addAppointment = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`appointments/add_appointment`, form);
        console.log(res);
    }      
}