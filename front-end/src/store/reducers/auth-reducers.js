import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR } from "../constants/action-types";


function loginReducer(state = { success: false }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: true })
    case LOGIN_ERROR:
      return Object.assign({}, state, { hasError: true, message: action.payload })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { success: false })
    default:
      return state
  }
}

export default loginReducer

