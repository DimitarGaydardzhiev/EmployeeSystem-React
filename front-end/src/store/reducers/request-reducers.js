import { GET_MY_REQUESTS_SUCCESS, ADD_REQUEST_SUCCESS, ADD_REQUEST_ERROR, GET_REQUEST_TYPES_SUCCESS } from "../constants/action-types";

const initialState = {
  myRequests: [],
  requestTypes: [],
};

function requestReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_REQUESTS_SUCCESS:
      return Object.assign({}, state, {
        myRequests: state.myRequests.concat(action.payload)
      });
    case ADD_REQUEST_SUCCESS:
      return Object.assign({}, state, { success: true })
    case ADD_REQUEST_ERROR:
      return Object.assign({}, state, { hasError: true, message: action.payload.text })
    case GET_REQUEST_TYPES_SUCCESS:
      return Object.assign({}, state, {
        requestTypes: state.requestTypes.concat(action.payload)
      });
    default:
      return state
  }
}

export default requestReducer;