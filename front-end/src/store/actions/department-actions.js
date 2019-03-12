import { GET_ALL_DEPARTMENTS_SUCCESS, ADD_DEPARTMENT_SUCCESS } from '../constants/action-types';
import { getAllDepartments, addDepartment } from '../../services/api-service';

function getAllDepartmentsSuccess(payload) {
    return {
        type: GET_ALL_DEPARTMENTS_SUCCESS,
        payload
    }
}

function getAllDepartmentsAction() {
    return async (dispatch) => {
        return getAllDepartments()
            .then(payload => {
                dispatch(getAllDepartmentsSuccess(payload))
            })
    }
}

function addDepartmentAction(name) {
    return async (dispatch) => {
        debugger
        return addDepartment(name)
            .then(payload => {
                dispatch(addDepartmentSuccess(payload))
            })
    }
}

function addDepartmentSuccess(payload) {
    return {
        type: ADD_DEPARTMENT_SUCCESS,
        payload
    }
}

export {
    getAllDepartmentsAction,
    addDepartmentAction
}
