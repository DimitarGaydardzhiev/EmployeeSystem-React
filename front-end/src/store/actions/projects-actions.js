import { getAllProjects } from "../../services/api-service";
import { GET_ALL_PROJECTS_SUCCESS } from "../constants/action-types";

function getAllProjectsAction() {
    return async (dispatch) => {
        return getAllProjects()
            .then(payload => {
                dispatch(getAllProjectsSuccess(payload))
            })
    }
}

function getAllProjectsSuccess(payload) {
    return {
        type: GET_ALL_PROJECTS_SUCCESS,
        payload
    }
}

export {
    getAllProjectsAction
}