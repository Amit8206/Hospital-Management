import { employeeConstants } from "../actions/constants";

const initialState = {
    employees: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case employeeConstants.GET_ALL_EMPLOYEE_SUCCESS:
            state = {
                ...state,
                employees: action.payload.employees
            }
            break;
    }           
    return state;
}