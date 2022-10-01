import axios from "../helpers/axios"
import { departmentConstants } from "./constants";



export const addDepartment = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`departments/add_department`, form);
        console.log(res);
    }      
}