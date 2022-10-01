import axios from "../helpers/axios"
import { patientConstants } from "./constants";



export const addPatient = (form) => {
    console.log({form})
    return async (dispatch) => {

        dispatch({ type: patientConstants.ADD_NEW_PATIENT_REQUEST });
        const res = await axios.post(`patients/add_patient`, form);
        console.log(res);

        if (res.status === 200) {
            dispatch({
                type: patientConstants.ADD_NEW_PATIENT_SUCCESS,
                payload: { message: 'Patient Added Successfully' }

            });
        }

        if (res.status === 400) {
            dispatch({
                type: patientConstants.ADD_NEW_PATIENT_FAILUR,
                payload: { error: 'Patient Added Failled..!!' }

            });

        }
    }      
}



export const deletePatient = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`patients/delete_patient/${id}`);
        // console.log(res);
    }      
}