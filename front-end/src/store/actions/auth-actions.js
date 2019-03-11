import { LOGIN_SUCCESS, LOGIN_ERROR } from "../constants/action-types";
import { login } from "../../services/api-service";
import errorHandler from "../../utils/errorHandler";

function loginAction(email, password) {
  return (dispatch) => {
    return login(email, password)
      .then(json => {
        if (json.success) {
          authenticateUser(json)
          dispatch(loginSuccess())
        } else {
          const error = errorHandler(json)
          dispatch(loginError(error))
        }
      })
  }
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

function authenticateUser(json) {
  debugger
  window.localStorage.setItem('authToken', json.token)
  window.localStorage.setItem('username', json.user.username)
  if (json.user.roles && json.user.roles.length > 0) {
    window.localStorage.setItem('roles', json.user.roles)
  }
}

export {
  loginAction
}