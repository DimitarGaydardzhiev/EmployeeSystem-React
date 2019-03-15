import { DELETE_ACTION_SUCCESS, DELETE_ACTION_ERROR } from "../constants/action-types";

const initialState = {}

function deleteReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_ACTION_SUCCESS:
      return Object.assign({}, state, { success: true })
    case DELETE_ACTION_ERROR:
      return Object.assign({}, state, { hasError: true, message: action.payload })
    default:
      return state
  }
}

export default deleteReducer;