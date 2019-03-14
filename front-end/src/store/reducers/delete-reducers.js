import { DELETE_ACTION_SUCCESS } from "../constants/action-types";

const initialState = {}

function deleteReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_ACTION_SUCCESS:
      return Object.assign({}, state, { success: true })
    default:
      return state
  }
}

export default deleteReducer;