import { GET_ALL_DEPARTMENTS_SUCCESS } from '../constants/action-types';
import { getAllDepartments } from '../../services/api-service';

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

export default getAllDepartmentsAction
