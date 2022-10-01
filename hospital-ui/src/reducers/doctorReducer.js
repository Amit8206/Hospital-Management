import { doctorConstants } from "../actions/constants";

const initialState = {
    doctors: [],
    loading: false,
    error: '',
    message: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case doctorConstants.GET_ALL_DOCTOR_SUCCESS:
            state = {
                ...state,
                doctors: action.payload.doctors
            }
            break;
        
        case doctorConstants.ADD_NEW_DOCTOR_REQUEST:
            state = {
                ...state,
                loading: true
           }
            break;
        case doctorConstants.ADD_NEW_DOCTOR_SUCCESS:
            state = {
                    ...state,
                    loading: false,
                    message: action.payload.message
            }
            break;
        case doctorConstants.ADD_NEW_DOCTOR_FAILUR:
            state = {
                    ...state,
                    loading: false,
                    message: action.payload.error
            }
            break;
    }           
    return state;
}