import { GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_FORMER_EMPLOYEES_SUCCESS, REGISTER_SUCCESS, REGISTER_ERROR } from '../constants/action-types';
import { getAllEmployees, getAllFormerEmployees, register } from '../../services/api-service';

function getAllEmployeesAction() {
    return async (dispatch) => {
        return getAllEmployees()
            .then(payload => {
                dispatch(getAllEmployeesSuccess(payload))
            })
    }
}

function getAllEmployeesSuccess(payload) {
    return {
        type: GET_ALL_EMPLOYEES_SUCCESS,
        payload
    }
}

function getAllFormerEmployeesAction() {
    return async (dispatch) => {
        return getAllFormerEmployees()
            .then(payload => {
                dispatch(getAllFormerEmployeesSuccess(payload))
            })
    }
}

function getAllFormerEmployeesSuccess(payload) {
    return {
        type: GET_ALL_FORMER_EMPLOYEES_SUCCESS,
        payload
    }
}

function registerAction(firstName, lastName, email, password, confirmPassword, roleId, positionId, departmentId, description) {
    return async (dispatch) => {
        return register(firstName, lastName, email, password, confirmPassword, roleId, positionId, departmentId, description)
            .then(payload => {
                debugger
                if (payload.status === 200) {
                    dispatch(registerSuccess())
                } else {
                    payload.text()
                        .then(message => dispatch(registerError(message)))
                }
            })
            .catch(() => {
                dispatch(registerError("Server error"))
            })
    }
}

function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

function registerError(payload) {
    return {
        type: REGISTER_ERROR,
        payload
    }
}

export {
    getAllEmployeesAction,
    getAllFormerEmployeesAction,
    registerAction
}
