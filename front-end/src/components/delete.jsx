import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import { deleteAction } from '../store/actions/delete-actions'
import toastr from 'toastr'

class DeleteComponent extends Component {
  constructor(props) {
    super(props)

    this.onDelete = this.onDelete.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deleteError.hasError) {
      //toastr.error(nextProps.createProductError.message)
    } else if (nextProps.deleteSuccess) {
      window.location = `${this.props.location.pathname}`
    }
  }

  deleteItem(id, name) {
    this.props.delete(id, name)
  }

  onDelete() {
    const { id, name } = this.props
    confirmAlert({
      title: 'Please Confirm',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteItem(id, name)
        },
        {
          label: 'No'
        }
      ]
    })
  }

  render() {
    return (
      <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
    )
  }
}

function mapStateToProps(state) {
  return {
    deleteError: state.deleteError,
    deleteSuccess: state.deleteSuccess,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    delete: (id, name) => dispatch(deleteAction(id, name)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteComponent))