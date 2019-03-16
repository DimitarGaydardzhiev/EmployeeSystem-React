import { GET_ALL_PROJECTS_SUCCESS, ADD_PROJECT_ERROR, ADD_PROJECT_SUCCESS } from "../constants/action-types";

const initialState = {
    projects: []
};

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                projects: action.payload
            });
        case ADD_PROJECT_SUCCESS:
            return Object.assign({}, state, { success: true })
        case ADD_PROJECT_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.payload })
        default:
            return state
    }
}

export default projectReducer;