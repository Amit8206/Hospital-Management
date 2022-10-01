import { appointmentConstants } from "../actions/constants";

const initialState = {
    appointments: [],
    pendingAppointments: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case appointmentConstants.GET_ALL_APPOINTMENT_SUCCESS:
            state = {
                ...state,
                appointments: action.payload.appointments,
                pendingAppointments: action.payload.pendingAppointments
            }
            break;
        case appointmentConstants.ADD_NEW_APPOINTMENT_REQUEST:
            state = {
                ...state,
                loading: true
           }
            break;
        case appointmentConstants.ADD_NEW_APPOINTMENT_SUCCESS:
            state = {
                    ...state,
                    loading: false,
                    message: action.payload.message
            }
            break;
        case appointmentConstants.ADD_NEW_APPOINTMENT_FAILUR:
            state = {
                    ...state,
                    loading: false,
                    message: action.payload.error
            }
            break;
    }           
    return state;
}