import { medicineConstants } from "../actions/constants";

const initialState = {
    medicines: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case medicineConstants.GET_ALL_MEDICINE_SUCCESS:
            state = {
                ...state,
                medicines: action.payload.medicines
            }
            break;
    }           
    return state;
}