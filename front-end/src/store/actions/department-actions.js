import { GET_ALL_DEPARTMENTS_SUCCESS, ADD_DEPARTMENT_SUCCESS, ADD_DEPARTMENT_ERROR } from '../constants/action-types';
import { getAllDepartments, addDepartment } from '../../services/api-service';
import errorHandler from '../../utils/errorHandler'

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

function addDepartmentAction(name, id) {
    return async (dispatch) => {
        debugger
        return addDepartment(name, id)
            .then(payload => {
                if (payload.status == 200) {
                    dispatch(addDepartmentSuccess(payload))
                } else {
                    debugger
                    dispatch(addDepartmentError())
                }
            })
    }
}

function addDepartmentSuccess(payload) {
    return {
        type: ADD_DEPARTMENT_SUCCESS,
        payload
    }
}

function addDepartmentError(payload) {
    return {
        type: ADD_DEPARTMENT_ERROR,
        payload
    }
}

export {
    getAllDepartmentsAction,
    addDepartmentAction
}
