import axios from "../helpers/axios"
import { doctorConstants } from "./constants";



export const addDoctor = (form) => {
    return async (dispatch) => {

        // dispatch({ type: doctorConstants.ADD_NEW_DOCTOR_REQUEST });
        // const res = await axios.post(`doctors/add_doctor`, form);
        // console.log(res);


        // if (res.status === 200) {
        //     dispatch({
        //         type: doctorConstants.ADD_NEW_DOCTOR_SUCCESS,
        //         payload: { message: 'Department Added Successfully' }

        //     });
        // }

        // if (res.status === 400) {
        //     dispatch({
        //         type: doctorConstants.ADD_NEW_DOCTOR_FAILUR,
        //         payload: { error: 'Department Added Failled..!!' }

        //     });

        // }
    }      
}

export const deleteDoctor = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`doctors/delete_doctor/${id}`);
        console.log(res);
    }      
}

export const getDoctorById = (id) => {
    return async (dispatch) => {
        console.log(id)
        const res = await axios.delete(`doctors/get_doctor/${id}`);
        console.log(res);
    }      
}


export const editDoctor = (id) => {
    return async (dispatch) => {
        console.log(id)
        const res = await axios.delete(`doctors/edit_doctor/${id}`);
        console.log(res);
    }      
}