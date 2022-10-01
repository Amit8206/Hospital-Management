import axios from "../helpers/axios"
import { doctorConstants } from "./constants";



export const addDoctor = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`doctors/add_doctor`, form);
        console.log(res);
    }      
}