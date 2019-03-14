import { GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_FORMER_EMPLOYEES_SUCCESS, REGISTER_SUCCESS } from "../constants/action-types";

const initialState = {
    employees: [],
    formerEmployees: []
};

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_EMPLOYEES_SUCCESS:
            return Object.assign({}, state, {
                employees: action.payload
            });
        case GET_ALL_FORMER_EMPLOYEES_SUCCESS:
            return Object.assign({}, state, {
                formerEmployees: state.formerEmployees.concat(action.payload)
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, { success: true })
        default:
            return state
    }
}

export default employeeReducer;