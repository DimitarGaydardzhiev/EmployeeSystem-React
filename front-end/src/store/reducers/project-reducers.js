import { GET_ALL_PROJECTS_SUCCESS, ADD_PROJECT_ERROR, ADD_PROJECT_SUCCESS, GET_MY_PROJECTS_SUCCESS } from "../constants/action-types";

const initialState = {
    projects: [],
    myProjects: []
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
        case GET_MY_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                myProjects: action.payload
            });
        default:
            return state
    }
}

export default projectReducer;