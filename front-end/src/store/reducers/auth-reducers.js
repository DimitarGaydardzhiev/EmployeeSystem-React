import { LOGIN_SUCCESS } from "../constants/action-types";


function loginReducer(state = { success: false }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: true })
    default:
      return state
  }
}

// function loginErrorReducer(state = { hasError: false, message: '' }, action) {
//   switch (action.type) {
//     case LOGIN_ERROR:
//       return Object.assign({}, state, { hasError: true, message: action.error })
//     case LOGIN_SUCCESS:
//       return Object.assign({}, state, { hasError: false, message: '' })
//     default:
//       return state
//   }
// }

export {
  loginReducer,
  //loginErrorReducer
}
