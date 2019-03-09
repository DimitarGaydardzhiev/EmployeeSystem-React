import { GET_ALL_POSITIONS_SUCCESS } from "../constants/action-types";

const initialState = {
    positions: []
};

function positionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POSITIONS_SUCCESS:
            return Object.assign({}, state, {
                positions: state.positions.concat(action.payload)
            });
        default:
            return state
    }
}

export default positionReducer;