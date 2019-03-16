import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import toastr from 'toastr'
import { approveAction, unapproveAction } from '../store/actions/request-actions';

class RequestApprovalComponent extends Component {
  constructor(props) {
    super(props)

    this.onAction = this.onAction.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.approveError.hasError) {
      toastr.error(nextProps.approveError.message)
    } else if (nextProps.approveSuccess) {
      window.location = '/requests/approved'
    } else if (nextProps.unapproveError.hasError) {
      toastr.error(nextProps.unapproveError.message)
    } else if (nextProps.unapproveSuccess) {
      window.location = '/requests/unapproved'
    }
  }

  unApprove(id) {
    this.props.unapprove(id)
  }

  approve(id) {
    this.props.approve(id)
  }

  onAction() {
    const { id, name, isApproved } = this.props
    confirmAlert({
      title: 'Please Confirm',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => isApproved ? this.unApprove(id, name) : this.approve(id, name)
        },
        {
          label: 'No'
        }
      ]
    })
  }

  render() {
    return (
      !this.props.isApproved
        ?
        <button className="btn btn-success" onClick={this.onAction}>Approve</button>
        :
        <button className="btn btn-warning" onClick={this.onAction}>Unapprove</button>
    )
  }
}

function mapStateToProps(state) {
  return {
    approveSuccess: state.approveSuccess.success,
    unapproveSuccess: state.unapproveSuccess.success,
    approveError: state.approveError,
    unapproveError: state.unapproveError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    approve: (id) => dispatch(approveAction(id)),
    unapprove: (id) => dispatch(unapproveAction(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestApprovalComponent))