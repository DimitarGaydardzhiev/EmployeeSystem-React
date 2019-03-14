import { DELETE_ACTION_SUCCESS } from "../constants/action-types";
import { deleteItem } from "../../services/api-service";

function deleteAction(id, name) {
  return async (dispatch) => {
    return deleteItem(id, name)
      .then(payload => {
        dispatch(deleteActionSuccess(payload))
      })
  }
}

function deleteActionSuccess(payload) {
  return {
    type: DELETE_ACTION_SUCCESS,
    payload
  }
}

export {
  deleteAction
}