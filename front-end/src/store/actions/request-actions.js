import { GET_MY_REQUESTS_SUCCESS, ADD_REQUEST_SUCCESS, GET_REQUEST_TYPES_SUCCESS, GET_PENDING_REQUESTS_SUCCESS, GET_APPROVED_REQUESTS_SUCCESS, APPROVE_REQUESTS_SUCCESS, UNAPPROVE_REQUESTS_SUCCESS, ADD_REQUEST_ERROR, APPROVE_REQUESTS_ERROR, UNAPPROVE_REQUESTS_ERROR } from "../constants/action-types";
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
                if (payload.status == 200) {
                    dispatch(addRequestSuccess(payload))
                } else {
                    payload.text()
                        .then(message => dispatch(addRequestError(message)))
                }
            })
            .catch(() => {
                dispatch(addRequestError("Server error"))
            })
    }
}

function addRequestSuccess(payload) {
    return {
        type: ADD_REQUEST_SUCCESS,
        payload
    }
}

function addRequestError(payload) {
    return {
        type: ADD_REQUEST_ERROR,
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
                if (payload.status == 200) {
                    dispatch(approveSuccess(payload))
                } else {
                    payload.text()
                        .then(message => dispatch(approveError(message)))
                }
            })
            .catch(() => {
                dispatch(approveError("Server error"))
            })
    }
}

function approveSuccess(payload) {
    return {
        type: APPROVE_REQUESTS_SUCCESS,
        payload
    }
}

function approveError(payload) {
    return {
        type: APPROVE_REQUESTS_ERROR,
        payload
    }
}

function unapproveAction(id) {
    return async (dispatch) => {
        return unapproveRequest(id)
            .then(payload => {
                if (payload.status == 200) {
                    dispatch(unapproveSuccess(payload))
                } else {
                    payload.text()
                        .then(message => dispatch(unapproveError(message)))
                }
            })
            .catch(() => {
                dispatch(unapproveError("Server error"))
            })
    }
}

function unapproveSuccess(payload) {
    return {
        type: UNAPPROVE_REQUESTS_SUCCESS,
        payload
    }
}

function unapproveError(payload) {
    return {
        type: UNAPPROVE_REQUESTS_ERROR,
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
