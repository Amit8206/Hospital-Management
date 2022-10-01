import axios from "../helpers/axios"
import { employeeConstants } from "./constants";



export const addEmployee = (form) => {
    console.log({form})
    return async (dispatch) => {
        const res = await axios.post(`employees/add_employee`, form);
        console.log(res);
    }      
}

export const deleteEmployee = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`employees/delete_employee/${id}`);
        // console.log(res);
    }      
}