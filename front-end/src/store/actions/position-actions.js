import { GET_ALL_POSITIONS_SUCCESS, ADD_POSITION_SUCCESS, ADD_POSITION_ERROR } from '../constants/action-types';
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
        return addPosition(name, id)
            .then(payload => {
                if (payload.status == 200) {
                    dispatch(addPositionSuccess(payload))
                } else {
                    payload.text()
                        .then(message => dispatch(addPositionError(message)))
                }
            })
            .catch(() => {
                dispatch(addPositionError("Server error"))
            })
    }
}

function addPositionSuccess(payload) {
    return {
        type: ADD_POSITION_SUCCESS,
        payload
    }
}

function addPositionError(payload) {
    return {
        type: ADD_POSITION_ERROR,
        payload
    }
}

export {
    getAllPositionsAction,
    addPositionAction
}
