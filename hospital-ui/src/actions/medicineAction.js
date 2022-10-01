import axios from "../helpers/axios"
import {  medicineConstants } from "./constants";



export const addMedicine = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`medicines/add_medicine`, form);
        console.log(res);
    }      
}

export const deleteMedicine = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`medicines/delete_medicine/${id}`);
        // console.log(res);
    }      
}