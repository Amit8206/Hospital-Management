import axios from "../helpers/axios"
import { leaveConstants } from "./constants";



export const addLeave = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`leaves/add_leave`, form);
        console.log(res);
    }      
}