import axios from "../helpers/axios"
import {  medicineConstants } from "./constants";



export const addMedicine = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`medicines/add_medicine`, form);
        console.log(res);
    }      
}