import { GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_FORMER_EMPLOYEES_SUCCESS } from '../constants/action-types';
import { getAllEmployees, getAllFormerEmployees } from '../../services/api-service';

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

export {
    getAllEmployeesAction,
    getAllFormerEmployeesAction
}
