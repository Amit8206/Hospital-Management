import { doctorConstants } from "../actions/constants";

const initialState = {
    doctors: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case doctorConstants.GET_ALL_DOCTOR_SUCCESS:
            state = {
                ...state,
                doctors: action.payload.doctors
            }
            break;
    }           
    return state;
}