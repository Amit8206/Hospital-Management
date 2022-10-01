import axios from "../helpers/axios"
import { departmentConstants } from "./constants";



export const addDepartment = (form) => {

    return async (dispatch) => {

        dispatch({ type: departmentConstants.ADD_NEW_DEPARTMENT_REQUEST });
        const res = await axios.post(`departments/add_department`, form);


        if (res.status === 200) {
            dispatch({
                type: departmentConstants.ADD_NEW_DEPARTMENT_SUCCESS,
                payload: { message: 'Department Added Successfully' }

            });
        }

        if (res.status === 400) {
            dispatch({
                type: departmentConstants.ADD_NEW_DEPARTMENT_SUCCESS,
                payload: { error: 'Department Added Failled..!!' }

            });

        }
        // console.log(res);
    }
}

export const deleteDepartment = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`departments/delete_department/${id}`);
        // console.log(res);
    }
}