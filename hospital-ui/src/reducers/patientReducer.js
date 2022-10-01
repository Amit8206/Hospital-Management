import { patientConstants } from "../actions/constants";

const initialState = {
    patients: [],
    loading: false,
    error: '',
    message: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case patientConstants.GET_ALL_PATIENT_SUCCESS:
            state = {
                ...state,
                patients: action.payload.patients
            }
            break;

        case patientConstants.ADD_NEW_PATIENT_REQUEST:
            state = {
                ...state,
                loading: true
           }
            break;
        case patientConstants.ADD_NEW_PATIENT_SUCCESS:
            state = {
                    ...state,
                    loading: false,
                    message: action.payload.message
            }
            break;
        case patientConstants.ADD_NEW_PATIENT_FAILUR:
            state = {
                    ...state,
                    loading: false,
                    message: action.payload.error
            }
            break;
    }           
    return state;
}