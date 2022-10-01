import { complainConstants } from "../actions/constants";

const initialState = {
    complains: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case complainConstants.GET_ALL_COMPLAIN_SUCCESS:
            state = {
                ...state,
                complains: action.payload.complains
            }
            break;
    }           
    return state;
}