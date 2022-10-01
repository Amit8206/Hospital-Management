import axios from "../helpers/axios"
import { employeeConstants } from "./constants";



export const addEmployee = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`employees/add_employee`, form);
        console.log(res);
    }      
}