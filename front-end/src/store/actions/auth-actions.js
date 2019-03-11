import { LOGIN_SUCCESS, LOGIN_ERROR } from "../constants/action-types";
import { login } from "../../services/api-service";
import errorHandler from "../../utils/errorHandler";
import * as decode from 'jwt-decode';

function loginAction(email, password) {
  return (dispatch) => {
    return login(email, password)
      .then(res => {
        authenticateUser(res)
        dispatch(loginSuccess())
        // if (json.success) {
        //   authenticateUser(json)
        //   dispatch(loginSuccess())
        // } else {
        //   const error = errorHandler(json)
        //   dispatch(loginError(error))
        // }
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

function authenticateUser(res) {
  res.json()
    .then(json => {
      debugger
      const tokenPayload = decode(json)

      window.localStorage.setItem('authToken', tokenPayload)
      window.localStorage.setItem('username', tokenPayload.sub)
      window.localStorage.setItem('roles', tokenPayload.role)
    })
}

export {
  loginAction
}