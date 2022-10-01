import axios from "../helpers/axios"
import { leaveConstants } from "./constants";



export const addLeave = (form) => {
    return async (dispatch) => {
        
        const res = await axios.post(`Employees/add_leave`, form);
        console.log(res);
    }      
    
}

export const approveLeave = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.post(`Employees/approve_leave/${id}`);
        console.log(res);
    }      
}

export const deleteLeave = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`Employees/delete_leave/${id}`);
        console.log(res);
    }      
}