import { GET_MY_REQUESTS_SUCCESS, ADD_REQUEST_SUCCESS, GET_REQUEST_TYPES_SUCCESS, GET_PENDING_REQUESTS_SUCCESS, GET_APPROVED_REQUESTS_SUCCESS, APPROVE_REQUESTS_SUCCESS, UNAPPROVE_REQUESTS_SUCCESS } from "../constants/action-types";
import { getMyRequests, addRequest, getRequestTypes, getPendingRequests, getApprovedRequests, unapproveRequest, approveRequest } from "../../services/api-service";

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

function getPendingRequestsAction() {
    return async (dispatch) => {
        return getPendingRequests()
            .then(payload => {
                dispatch(getPendingRequestsSuccess(payload))
            })
    }
}

function getPendingRequestsSuccess(payload) {
    return {
        type: GET_PENDING_REQUESTS_SUCCESS,
        payload
    }
}

function getApprovedRequestsAction() {
    return async (dispatch) => {
        return getApprovedRequests()
            .then(payload => {
                dispatch(getApprovedRequestsSuccess(payload))
            })
    }
}

function getApprovedRequestsSuccess(payload) {
    return {
        type: GET_APPROVED_REQUESTS_SUCCESS,
        payload
    }
}

function approveAction(id) {
    return async (dispatch) => {
        return approveRequest(id)
            .then(payload => {
                dispatch(approveSuccess(payload))
            })
    }
}

function approveSuccess(payload) {
    return {
        type: APPROVE_REQUESTS_SUCCESS,
        payload
    }
}

function unapproveAction(id) {
    return async (dispatch) => {
        return unapproveRequest(id)
            .then(payload => {
                dispatch(unapproveSuccess(payload))
            })
    }
}

function unapproveSuccess(payload) {
    return {
        type: UNAPPROVE_REQUESTS_SUCCESS,
        payload
    }
}

export {
    getMyRequestsAction,
    addRequestAction,
    getRequestTypesAction,
    getPendingRequestsAction,
    getApprovedRequestsAction,
    approveAction,
    unapproveAction
}
