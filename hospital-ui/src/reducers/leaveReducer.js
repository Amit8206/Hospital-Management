import { leaveConstants } from "../actions/constants";

const initialState = {
    leaves: [],
    pendingLeaves: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case leaveConstants.GET_ALL_LEAVE_SUCCESS:
            state = {
                ...state,
                leaves: action.payload.leaves,
                pendingLeaves: action.payload.pendingLeaves
            }
            break;
    }           
    return state;
}