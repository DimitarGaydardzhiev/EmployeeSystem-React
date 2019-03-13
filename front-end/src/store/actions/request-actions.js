import { GET_MY_REQUESTS_SUCCESS, ADD_REQUEST_SUCCESS, GET_REQUEST_TYPES_SUCCESS } from "../constants/action-types";
import { getMyRequests, addRequest, getRequestTypes } from "../../services/api-service";

function getMyRequestsSuccess(payload) {
    return {
        type: GET_MY_REQUESTS_SUCCESS,
        payload
    }
}

function getMyRequestsAction() {
    return async (dispatch) => {
        return getMyRequests()
            .then(payload => {
                dispatch(getMyRequestsSuccess(payload))
            })
    }
}

function addRequestAction(from, to, description, requestTypeId) {
    return async (dispatch) => {
        return addRequest(from, to, description, requestTypeId)
            .then(payload => {
                dispatch(addRequestSuccess(payload))
            })
    }
}

function addRequestSuccess(payload) {
    return {
        type: ADD_REQUEST_SUCCESS,
        payload
    }
}

function getRequestTypesAction() {
    return async (dispatch) => {
        return getRequestTypes()
            .then(payload => {
                dispatch(getRequestTypesSuccess(payload))
            })
    }
}

function getRequestTypesSuccess(payload) {
    return {
        type: GET_REQUEST_TYPES_SUCCESS,
        payload
    }
}

export {
    getMyRequestsAction,
    addRequestAction,
    getRequestTypesAction
}
