import { GET_ALL_POSITIONS_SUCCESS } from '../constants/action-types';
import { getAllPositions } from '../../services/api-service';

function getAllPositionsSuccess(payload) {
    return {
        type: GET_ALL_POSITIONS_SUCCESS,
        payload
    }
}

function getAllPositionsAction() {
    return async (dispatch) => {
        return getAllPositions()
            .then(payload => {
                dispatch(getAllPositionsSuccess(payload))
            })
    }
}

function addPositionAction() {
    // return async (dispatch) => {
    //     return getAllDepartments()
    //         .then(payload => {
    //             dispatch(getAllDepartmentsSuccess(payload))
    //         })
    // }
}

export {
    getAllPositionsAction,
    addPositionAction
}
