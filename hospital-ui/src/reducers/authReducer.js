import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        _id: '',
        name: '',
        username: '',
        email: '',
        role: '',
        signinWith: '',
        email_status: '',
        dob: '',
        gender: '',
        address: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {

    // console.log(action);

    switch (action.type) {

        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
            case authConstants.LOGIN_FAILUR:
            state = {
                ...state,
                message: action.payload.message,
                loading: false
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILUR:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
    }
    return state;
}