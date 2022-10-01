import { appointmentConstants } from "../actions/constants";

const initialState = {
    appointments: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case appointmentConstants.GET_ALL_APPOINTMENT_SUCCESS:
            state = {
                ...state,
                appointments: action.payload.appointments
            }
            break;
    }           
    return state;
}