import { DELETE_ACTION_SUCCESS, DELETE_ACTION_ERROR } from "../constants/action-types";
import { deleteItem } from "../../services/api-service";

function deleteAction(id, name) {
  return async (dispatch) => {
    return deleteItem(id, name)
      .then(payload => {
        if (payload.status == 200) {
          dispatch(deleteActionSuccess(payload))
        } else {
          payload.text()
            .then(message => dispatch(deleteActionError(message)))
        }
      })
      .catch(() => {
        dispatch(deleteActionError("Server error"))
      })
  }
}

function deleteActionSuccess(payload) {
  return {
    type: DELETE_ACTION_SUCCESS,
    payload
  }
}

function deleteActionError(payload) {
  return {
    type: DELETE_ACTION_ERROR,
    payload
  }
}

export {
  deleteAction
}