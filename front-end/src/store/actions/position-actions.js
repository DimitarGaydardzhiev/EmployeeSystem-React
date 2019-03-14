import { GET_ALL_POSITIONS_SUCCESS, ADD_POSITION_SUCCESS } from '../constants/action-types';
import { getAllPositions, addPosition } from '../../services/api-service';

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

function addPositionAction(name, id) {
    return async (dispatch) => {
        debugger
        return addPosition(name, id)
            .then(payload => {
                dispatch(addPositionSuccess(payload))
            })
    }
}

function addPositionSuccess(payload) {
    return {
        type: ADD_POSITION_SUCCESS,
        payload
    }
}

export {
    getAllPositionsAction,
    addPositionAction
}
