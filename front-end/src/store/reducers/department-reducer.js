import { GET_ALL_DEPARTMENTS_SUCCESS, ADD_DEPARTMENT_SUCCESS, ADD_DEPARTMENT_ERROR } from "../constants/action-types";

const initialState = {
    departments: []
};

function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DEPARTMENTS_SUCCESS:
            return Object.assign({}, state, {
                departments: state.departments.concat(action.payload)
            });
        case ADD_DEPARTMENT_SUCCESS:
            return Object.assign({}, state, { success: true })
        case ADD_DEPARTMENT_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        default:
            return state
    }
}

export default departmentReducer;