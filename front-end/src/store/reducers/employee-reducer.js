import { GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_FORMER_EMPLOYEES_SUCCESS } from "../constants/action-types";

const initialState = {
    employees: [],
    formerEmployees: []
};

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_EMPLOYEES_SUCCESS:
            return Object.assign({}, state, {
                employees: state.employees.concat(action.payload)
            });
        case GET_ALL_FORMER_EMPLOYEES_SUCCESS:
            return Object.assign({}, state, {
                formerEmployees: state.formerEmployees.concat(action.payload)
            });
        default:
            return state
    }
}

export default employeeReducer;