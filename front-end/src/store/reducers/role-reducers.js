import { GET_ALL_ROLES_SUCCESS } from "../constants/action-types";

const initialState = {
    roles: []
};

function roleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ROLES_SUCCESS:
            return Object.assign({}, state, {
                roles: state.roles.concat(action.payload)
            });
        default:
            return state
    }
}

export default roleReducer;