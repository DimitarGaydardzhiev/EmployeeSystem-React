import { GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_FORMER_EMPLOYEES_SUCCESS, REGISTER_SUCCESS } from '../constants/action-types';
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
                dispatch(registerSuccess(payload))
            })
    }
}

function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

export {
    getAllEmployeesAction,
    getAllFormerEmployeesAction,
    registerAction
}
