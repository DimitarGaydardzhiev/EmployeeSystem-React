import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../constants/action-types";
import { login } from "../../services/api-service";
import * as decode from 'jwt-decode';

function loginAction(email, password) {
  return (dispatch) => {
    return login(email, password)
      .then(payload => {
        if (payload.status == 200) {
          payload.json()
            .then(res => {
              authenticateUser(res)
              dispatch(loginSuccess())
            })
        } else {
          payload.text()
            .then(message => dispatch(loginError(message)))
        }
      })
      .catch(() => {
        dispatch(loginError("Server error"))
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

function loginError(payload) {
  return {
    type: LOGIN_ERROR,
    payload
  }
}

function logoutAction() {
  return (dispatch) => {
    deauthenticateUser()
    dispatch(logoutSuccess())
  }
}

function authenticateUser(res) {
  const tokenPayload = decode(res)
  window.localStorage.setItem('authToken', res)
  window.localStorage.setItem('username', tokenPayload.sub)
  window.localStorage.setItem('roles', tokenPayload.role)
  window.localStorage.setItem('userId', tokenPayload.id)
}

function deauthenticateUser() {
  window.localStorage.clear()
}

export {
  loginAction,
  logoutAction
}