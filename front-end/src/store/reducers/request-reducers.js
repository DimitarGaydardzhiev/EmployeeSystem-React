import { GET_MY_REQUESTS_SUCCESS } from "../constants/action-types";

const initialState = {
  requests: []
};

function requestReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_REQUESTS_SUCCESS:
      return Object.assign({}, state, {
        requests: state.requests.concat(action.payload)
      });
    default:
      return state
  }
}

export default requestReducer;