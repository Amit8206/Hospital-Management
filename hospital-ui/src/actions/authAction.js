import { authConstants } from "./constants"
import axios from '../helpers/axios'




//  User SignIn Action
export const login = (user) => {

    // console.log(user);

    return async (dispatch) => {


        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/signin`, {
            ...user
        });


        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }
            });
        } else {
           
            if (res.status === 400) {
                    dispatch({
                        type: authConstants.LOGIN_FAILUR,
                        payload: {
                            message: res.data.message
                        }
                    });
                }
        }

    }
}


export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (token) {
            
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }
            })
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILUR,
                payload: { message: 'failed to login !!!' }
            });
        }
    }
}


export const faceBookLogging = (data) => {

    console.log({data});

    return async (dispatch) => {


        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/facebooklogin`, {
            ...data
        });
       
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        error: { message: res.data.message }
                    }
                });
            }
            if (res.status === 401) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        error: { message: res.data.message }
                    }
                });
            }
            if (res.status === 402) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        error: { message: res.data.message }
                    }
                });
            }
        }

    }
}




export const googleLogin = (data) => {

    // console.log({data});

    return async (dispatch) => {


        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/googlelogin`, {
            ...data
        });
       
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        message: { message: res.data.message }
                    }
                });
            }
            if (res.status === 401) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        message: { message: res.data.message }
                    }
                });
            }
            if (res.status === 402) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        message: { message: res.data.message }
                    }
                });
            }
        }

    }
}


export const loginWithOtp = (data) => {

    // console.log({data});

    return async (dispatch) => {


        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/otplogin`, {
            ...data
        });
       
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        message: { message: res.data.message }
                    }
                });
            }
            if (res.status === 401) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        message: { message: res.data.message }
                    }
                });
            }
            if (res.status === 402) {
                dispatch({
                    type: authConstants.LOGIN_FAILUR,
                    payload: {
                        message: { message: res.data.message }
                    }
                });
            }
        }

    }
}




export const signout = () => {
    return async dispatch => {

        dispatch({ type: authConstants.LOGOUT_REQUEST });
        const res = await axios.post(`/signout`);

        if (res.status === 200) {
            localStorage.clear();
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILUR,
                payload: { error: res.data.error }

            });
        }
    }
}



export const sendLoginOtp = (email) => {
    return async (dispatch) => {
        console.log(email);
        const res = await axios.post(`user/loginotp/${email}`);
        console.log(res);
    }      
}


// export const loginWithOtp = (form) => {
//     return async (dispatch) => {
//         console.log(form);
//         const res = await axios.post(`/otplogin`, form);
//         console.log(res);
//     }      
// }