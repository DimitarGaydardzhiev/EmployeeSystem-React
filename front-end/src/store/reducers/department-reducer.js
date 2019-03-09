import { GET_ALL_DEPARTMENTS_SUCCESS } from "../constants/action-types";

const initialState = {
    departments: []
};

function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DEPARTMENTS_SUCCESS:
            return Object.assign({}, state, {
                departments: state.departments.concat(action.payload)
            });
        default:
            return state
    }
}

export default departmentReducer;