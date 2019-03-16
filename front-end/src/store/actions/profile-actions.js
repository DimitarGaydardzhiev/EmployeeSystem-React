import { GET_PROFILE_INFO_SUCCESS } from "../constants/action-types";
import { getProfileInfo } from "../../services/api-service";

function getProfileInfoAction() {
    return async (dispatch) => {
        return getProfileInfo()
            .then(payload => {
                dispatch(getProfileInfoSuccess(payload))
            })
    }
}

function getProfileInfoSuccess(payload) {
    return {
        type: GET_PROFILE_INFO_SUCCESS,
        payload
    }
}

export {
    getProfileInfoAction
}