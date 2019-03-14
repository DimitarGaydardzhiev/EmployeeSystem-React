import { GET_ALL_POSITIONS_SUCCESS, ADD_POSITION_SUCCESS, ADD_POSITION_ERROR } from "../constants/action-types";

const initialState = {
    positions: []
};

function positionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POSITIONS_SUCCESS:
            return Object.assign({}, state, {
                positions: action.payload
            });
        case ADD_POSITION_SUCCESS:
            return Object.assign({}, state, { success: true })
        case ADD_POSITION_ERROR:
            return Object.assign({}, state, { hasError: true, message: action.error })
        default:
            return state
    }
}

export default positionReducer;