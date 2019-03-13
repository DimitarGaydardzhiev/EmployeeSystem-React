import { GET_MY_REQUESTS_SUCCESS } from "../constants/action-types";
import { getMyRequests } from "../../services/api-service";

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

export {
  getMyRequestsAction
}
