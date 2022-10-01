import { departmentConstants } from "../actions/constants";

const initialState = {
    departments: [],
    loading: false,
    error: '',
    message: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case departmentConstants.GET_ALL_DEPARTMENT_SUCCESS:
            state = {
                ...state,
                departments: action.payload.departments
            }
            break;
        case departmentConstants.ADD_NEW_DEPARTMENT_REQUEST:
            state = {
                ...state,
                // departments: action.payload.departments,
                loading: true
           }
            break;
        case departmentConstants.ADD_NEW_DEPARTMENT_SUCCESS:
            state = {
                    ...state,
                    // departments: action.payload.departments,
                    loading: false,
                    message: action.payload.message
            }
            break;
        case departmentConstants.ADD_NEW_DEPARTMENT_FAILUR:
            state = {
                    ...state,
                    // departments: action.payload.departments,
                    loading: false,
                    message: action.payload.error
            }
            break;
    }           
    return state;
}