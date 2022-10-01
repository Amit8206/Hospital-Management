import { userConstants } from "./constants"
import axios from '../helpers/axios'




// User SignUp Action
export const signup = (user) => {

    console.log({user});

    return async (dispatch) => {


        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/signup`, {
            ...user
        });


        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            });
        } else {
            if (res.status === 400) {
                const { message } = res.data;
                dispatch({
                    type: userConstants.USER_REGISTER_FAILUR,
                    payload: { message }
                });
            }
            if (res.status === 401) {
                const { message } = res.data;
                dispatch({
                    type: userConstants.USER_REGISTER_FAILUR,
                    payload: { message }
                });
            }
       }
    }
}


export const updateProfile = (form) => {
    return async(dispatch) => {
        const token = localStorage.getItem('token');
        if(token){
            dispatch({ type: userConstants.USER_UPDATE_REQUEST });
            const res = await axios.post('/update', form);
            // console.log(res)
            if(res.status === 200){
                const { message } = res.data;
                dispatch({
                    type: userConstants.USER_UPDATE_SUCCESS,
                    payload: { message: message }
                });
            }
            if(res.status === 400){
                const { message } = res.data;
                dispatch({
                    type: userConstants.USER_UPDATE_FAILUR,
                    payload: { message: message }
                });
            }
        }
    }
}


export const ApproveUser = (id) => {
    return async (dispatch) => {
        console.log({id});
        const res = await axios.post(`user/verify/${id}`);
        console.log(res);
    }      
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        console.log(id);
        const res = await axios.delete(`user/delete/${id}`);
        console.log(res);
    }      
}

export const sendOtp = (email) => {
    return async (dispatch) => {
        console.log(email);
        const res = await axios.post(`user/sendotp/${email}`);
        console.log(res);
    }      
}

export const modifyPassword = (form) => {
    return async (dispatch) => {
        console.log(form);
        const res = await axios.post(`/user/changepassword`, form);
        console.log(res);
    }      
}

