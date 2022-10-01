import { departmentConstants } from "../actions/constants";

const initialState = {
    departments: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case departmentConstants.GET_ALL_DEPARTMENT_SUCCESS:
            state = {
                ...state,
                departments: action.payload.departments
            }
            break;
    }           
    return state;
}