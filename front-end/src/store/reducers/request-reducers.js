import { GET_MY_REQUESTS_SUCCESS, ADD_REQUEST_SUCCESS, ADD_REQUEST_ERROR, GET_REQUEST_TYPES_SUCCESS, GET_PENDING_REQUESTS_SUCCESS, GET_APPROVED_REQUESTS_SUCCESS } from "../constants/action-types";

const initialState = {
  myRequests: [],
  requestTypes: [],
  pendingRequests: [],
  approvedRequests: [],
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
    case GET_PENDING_REQUESTS_SUCCESS:
      return Object.assign({}, state, {
        pendingRequests: state.pendingRequests.concat(action.payload)
      });
    case GET_APPROVED_REQUESTS_SUCCESS:
      return Object.assign({}, state, {
        approvedRequests: state.approvedRequests.concat(action.payload)
      });
    default:
      return state
  }
}

export default requestReducer;