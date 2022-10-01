import axios from "../helpers/axios"
import { complainConstants } from "./constants";



export const addComplain = (form) => {
    return async (dispatch) => {
        const res = await axios.post(`complains/add_complain`, form);
        console.log(res);
    }      
}