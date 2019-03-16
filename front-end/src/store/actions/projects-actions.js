import { getAllProjects, addProject, getMyProjects } from "../../services/api-service";
import { GET_ALL_PROJECTS_SUCCESS, ADD_PROJECT_SUCCESS, ADD_PROJECT_ERROR, GET_MY_PROJECTS_SUCCESS, GET_MY_PROJECTS_ERROR } from "../constants/action-types";

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

function addProjectAction(name, id, startDate, endDate, description, employeeIds) {
    return async (dispatch) => {
        return addProject(name, id, startDate, endDate, description, employeeIds)
            .then(payload => {
                if (payload.status == 200) {
                    dispatch(addProjectSuccess(payload))
                } else {
                    payload.text()
                        .then(message => dispatch(addProjectError(message)))
                }
            })
            .catch(() => {
                dispatch(addProjectError("Server error"))
            })
    }
}

function addProjectSuccess(payload) {
    return {
        type: ADD_PROJECT_SUCCESS,
        payload
    }
}

function addProjectError(payload) {
    return {
        type: ADD_PROJECT_ERROR,
        payload
    }
}

function getMyProjectsAction() {
    return async (dispatch) => {
        return getMyProjects()
            .then(payload => {
                dispatch(getMyProjectsSuccess(payload))
            })
    }
}

function getMyProjectsSuccess(payload) {
    return {
        type: GET_MY_PROJECTS_SUCCESS,
        payload
    }
}

export {
    getAllProjectsAction,
    addProjectAction,
    getMyProjectsAction
}