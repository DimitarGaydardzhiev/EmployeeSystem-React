import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../constants/action-types";
import { login } from "../../services/api-service";
import errorHandler from "../../utils/errorHandler";
import * as decode from 'jwt-decode';

function loginAction(email, password) {
  return (dispatch) => {
    return login(email, password)
      .then(res => {
        if (res.status == 200) {
          authenticateUser(res)
          dispatch(loginSuccess())
        } else {

        }
      })
  }
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

function logoutAction() {
  return (dispatch) => {
    deauthenticateUser()
    dispatch(logoutSuccess())
  }
}

function authenticateUser(res) {
  res.json()
    .then(json => {
      const tokenPayload = decode(json)
      window.localStorage.setItem('authToken', json)
      window.localStorage.setItem('username', tokenPayload.sub)
      window.localStorage.setItem('roles', tokenPayload.role)
      window.localStorage.setItem('userId', tokenPayload.id)
    })
}

function deauthenticateUser() {
  window.localStorage.clear()
}

export {
  loginAction,
  logoutAction
}