import { userConstants } from "../actions/constants"

const initState = {
    users: [],
    pendingUsers: [],
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {

    console.log(action);

    switch (action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userConstants.USER_REGISTER_FAILUR:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userConstants.GET_ALL_USER_SUCCESS:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        case userConstants.USER_REGISTER_PENDING_SUCCESS:
            state = {
                ...state,
                pendingUsers: action.payload.pendingUsers
            }
            break;
        case userConstants.USER_UPDATE_REQUEST:
            state = {
                ...state,
                loading: false,
            }
            break;
        case userConstants.USER_UPDATE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userConstants.USER_UPDATE_FAILUR:
        state = {
            ...state,
            loading: false,
            message: action.payload.message
        }
        break;
    }
    return state;
}