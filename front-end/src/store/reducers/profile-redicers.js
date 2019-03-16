import { GET_PROFILE_INFO_SUCCESS } from "../constants/action-types";

const initialState = {
    profileInfo: []
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_INFO_SUCCESS:
            return Object.assign({}, state, {
                profileInfo: action.payload
            });
        default:
            return state
    }
}

export default profileReducer;