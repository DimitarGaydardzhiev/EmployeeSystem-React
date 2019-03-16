import { GET_ALL_PROJECTS_SUCCESS } from "../constants/action-types";

const initialState = {
    projects: []
};

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                projects: action.payload
            });
        default:
            return state
    }
}

export default projectReducer;