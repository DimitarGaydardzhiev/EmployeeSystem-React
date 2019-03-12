import { GET_ALL_ROLES_SUCCESS } from "../constants/action-types";
import { getAllRoles } from "../../services/api-service";

function getAllRolesSuccess(payload) {
    return {
        type: GET_ALL_ROLES_SUCCESS,
        payload
    }
}

function getAllRolesAction() {
    return async (dispatch) => {
        return getAllRoles()
            .then(payload => {
                dispatch(getAllRolesSuccess(payload))
            })
    }
}

export {
    getAllRolesAction
}
